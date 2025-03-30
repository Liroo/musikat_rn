import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SvgCircleClose from '@/components/svg/common/circle-close';
import UIPressable, { HapticsType } from '@/components/ui/pressable';

export default function LearnTopBar({ onPressBack }: { onPressBack?: () => void }) {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  const internal_onPressBack = () => {
    onPressBack?.();
    router.back();
  };

  return (
    <View style={{ paddingTop: top }}>
      <View className="h-[62px] flex-row items-center justify-between px-[20px]">
        <UIPressable
          hapticType={HapticsType.ImpactLight}
          hitSlop={30}
          onPress={internal_onPressBack}>
          <SvgCircleClose width={30} height={30} />
        </UIPressable>
      </View>
    </View>
  );
}
