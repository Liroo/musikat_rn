import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslations } from 'use-intl';

import SvgCircleFail from '@/components/svg/common/circle-fail';
import SvgCircleSuccess from '@/components/svg/common/circle-success';
import UIText from '@/components/ui/text';
import { twMerge } from '@/utils/twMerge';

export default function LearnExerciseFooterAnswer({
  correct,
  message,
}: {
  correct: boolean;
  message: string;
}) {
  const t = useTranslations('features.learn');
  const { bottom } = useSafeAreaInsets();

  const backgroundColor = correct ? 'bg-communicative-positive/15' : 'bg-communicative-negative/15';

  return (
    <View className={twMerge('', backgroundColor)} style={{ paddingBottom: bottom + 20 + 47 + 20 }}>
      <View className="gap-[12px] p-[20px] pb-0">
        <View className="flex-row items-center gap-[4px]">
          {correct ? <SvgCircleSuccess /> : <SvgCircleFail />}
          <UIText className="text-[20px] text-black">
            {correct ? t('exercise.correct') : t('exercise.incorrect')}
          </UIText>
        </View>
        <UIText className="text-[15px] text-black">{message}</UIText>
      </View>
    </View>
  );
}
