import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UIPressable, { HapticsType } from '@/components/ui/pressable';
import UIText from '@/components/ui/text';
import { twMerge } from '@/utils/twMerge';

export default function LearnExerciseFooter({
  disabled,
  label,
  onPress,
  className,
}: {
  disabled?: boolean;
  label: string;
  onPress: () => void;
  className?: string;
}) {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className="absolute bottom-0 left-0 right-0 z-10 p-[20px]"
      style={{ paddingBottom: bottom + 20 }}>
      <UIPressable
        disabled={disabled}
        hapticType={HapticsType.ImpactLight}
        className={twMerge(
          'h-[47px] w-full items-center justify-center rounded-[8px] border border-black',
          disabled ? 'bg-[#ECECEC]' : 'bg-communicative-positive',
          className
        )}
        onPress={onPress}>
        <UIText className="text-[15px] text-black">{label}</UIText>
      </UIPressable>
    </View>
  );
}
