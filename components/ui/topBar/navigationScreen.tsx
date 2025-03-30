import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UIPressable, { HapticsType } from '../pressable';

import SvgNavigationChevronLeft from '@/components/svg/navigation/chevronLeft';
import SvgNavigationCross from '@/components/svg/navigation/cross';
import { twMerge } from '@/utils/twMerge';

type UITopBarNavigationScreenProps = {
  title?: string;
  children?: React.ReactNode;
  onPressLeftIcon?: () => void;
  leftIcon?: 'close' | 'back';
  leftIconRender?: React.ReactNode;
  isModal?: boolean;
  rightIconRender?: React.ReactNode;
  className?: string;
};

export default function UITopBarNavigationScreen({
  title,
  children,
  onPressLeftIcon,
  leftIcon = 'back',
  leftIconRender,
  isModal,
  rightIconRender = null,
  className,
}: UITopBarNavigationScreenProps) {
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  const onPress = () => {
    if (onPressLeftIcon) return onPressLeftIcon();
    if (isModal) router.dismiss();
    else router.back();
  };

  return (
    <View style={{ paddingTop: top }} className={twMerge('relative bg-black', className)}>
      <View className="flex h-[52px] flex-row items-center justify-between gap-[16px] px-[16px]">
        {leftIconRender ? (
          leftIconRender
        ) : (
          <UIPressable
            onPress={onPress}
            className="transition duration-150 active:opacity-50"
            hapticType={HapticsType.ImpactLight}
            hitSlop={15}>
            {leftIcon === 'close' ? <SvgNavigationCross /> : <SvgNavigationChevronLeft />}
          </UIPressable>
        )}
        {title && (
          <View className="pointer-events-none absolute top-0 mx-[16px] flex h-[52px] w-full items-center justify-center">
            <Text className="text-center text-headline4 font-semibold text-white">{title}</Text>
          </View>
        )}
        {children}
        {rightIconRender}
      </View>
    </View>
  );
}
