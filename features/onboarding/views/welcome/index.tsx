import { Image } from 'expo-image';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslations } from 'use-intl';

import UIPressable, { HapticsType } from '@/components/ui/pressable';
import UIRichText from '@/components/ui/richText';
import UIText from '@/components/ui/text';
import { setHasCompletedOnboarding } from '@/features/onboarding/flux/ui/reducer';
import { useAppDispatch } from '@/flux/hooks';

export default function OnboardingWelcome() {
  const t = useTranslations('features.onboarding.welcome');
  const dispatch = useAppDispatch();

  const onPressStart = () => {
    dispatch(setHasCompletedOnboarding(true));
  };

  return (
    <SafeAreaView className="bg-purple flex-1 items-center">
      <UIText
        className="mt-[56px] text-center text-[35px] tracking-normal"
        variant="headline1"
        font="monument">
        <UIRichText>{(tags) => t.rich('title', tags)}</UIRichText>
      </UIText>
      <View className="w-full flex-1 items-center justify-center px-[32px]">
        <Image
          source={require('@/assets/images/onboarding/welcome_background.png')}
          className="ml-[10px] w-full max-w-[300px] flex-1"
          contentFit="contain"
        />
      </View>
      <UIPressable
        hapticType={HapticsType.ImpactLight}
        hitSlop={30}
        className="mb-[100px]"
        onPress={onPressStart}>
        <UIText className="underline" variant="body2">
          {t('start')}
        </UIText>
      </UIPressable>
    </SafeAreaView>
  );
}
