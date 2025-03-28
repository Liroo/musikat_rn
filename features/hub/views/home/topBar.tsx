import { useRouter } from 'expo-router';

import SvgProgression from '@/components/svg/common/progression';
import SvgSettings from '@/components/svg/common/settings';
import UIPressable, { HapticsType } from '@/components/ui/pressable';
import UITopBarNavigationScreen from '@/components/ui/topBar/navigationScreen';

export default function HubHomeTopBar() {
  const router = useRouter();

  const onPressProgression = () => {
    router.push('/(app)/(hub)/progression');
  };
  const onPressSettings = () => {
    router.push('/(app)/(hub)/settings');
  };

  return (
    <UITopBarNavigationScreen
      leftIconRender={
        <UIPressable
          className="transition duration-150 active:opacity-50"
          hapticType={HapticsType.ImpactLight}
          hitSlop={15}
          onPress={onPressProgression}>
          <SvgProgression />
        </UIPressable>
      }
      rightIconRender={
        <UIPressable
          className="transition duration-150 active:opacity-50"
          hapticType={HapticsType.ImpactLight}
          hitSlop={15}
          onPress={onPressSettings}>
          <SvgSettings />
        </UIPressable>
      }
    />
  );
}
