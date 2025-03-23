import * as Haptics from 'expo-haptics';
import { forwardRef, Ref } from 'react';
import { GestureResponderEvent, Pressable, PressableProps, View } from 'react-native';

export enum HapticsType {
  ImpactHeavy = 'impact-heavy',
  ImpactLight = 'impact-light',
  ImpactMedium = 'impact-medium',
  ImpactRigid = 'impact-rigid',
  ImpactSoft = 'impact-soft',

  NotificationError = 'notification-error',
  NotificationSuccess = 'notification-success',
  NotificationWarning = 'notification-warning',

  Selection = 'selection',

  None = 'none',
}

export type UIPressableProps = PressableProps & {
  hapticType?: HapticsType;
  longHapticType?: HapticsType;
};

function UIPressableComponent(
  { hapticType, longHapticType, onPress, onLongPress, ...rest }: UIPressableProps,
  ref: Ref<View>
) {
  const applyHaptic = (type?: HapticsType) => {
    switch (type) {
      case HapticsType.ImpactHeavy:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        break;
      case HapticsType.ImpactLight:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        break;
      case HapticsType.ImpactMedium:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        break;
      case HapticsType.ImpactRigid:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        break;
      case HapticsType.ImpactSoft:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        break;
      case HapticsType.NotificationError:
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        break;
      case HapticsType.NotificationSuccess:
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        break;
      case HapticsType.NotificationWarning:
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        break;
      case HapticsType.Selection:
        Haptics.selectionAsync();
        break;
      default:
        break;
    }
  };

  const onPressWithHaptic = (evt: GestureResponderEvent) => {
    applyHaptic(hapticType);
    onPress?.(evt);
  };
  const onLongPressWithHaptic = (evt: GestureResponderEvent) => {
    applyHaptic(longHapticType);
    onLongPress?.(evt);
  };
  return (
    <Pressable
      onPress={onPressWithHaptic}
      onLongPress={onLongPressWithHaptic}
      {...rest}
      ref={ref}
    />
  );
}

const UIPressable = forwardRef(UIPressableComponent);
export default UIPressable;
