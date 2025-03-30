import { View } from 'react-native';
import { useTranslations } from 'use-intl';

import UIText from '@/components/ui/text';
import LearnExerciseFooter from '@/features/learn/components/exercise/footer';
import LearnExerciseQuestionTitle from '@/features/learn/components/exercise/question/title';
import useIntervalComparison from '@/features/learn/hooks/useIntervalComparison';

export default function LearnIntervalComparisonPresentation() {
  const { startExercise } = useIntervalComparison();
  const t = useTranslations('features.learn');

  const onPressStart = () => {
    startExercise();
  };

  return (
    <View className="flex-1">
      <LearnExerciseQuestionTitle title={t('interval_comparison.title')} />

      <View className="mx-[20px] mt-[16px] max-w-[280px]">
        <UIText className="text-[15px] text-black">{t('interval_comparison.description')}</UIText>
      </View>

      <LearnExerciseFooter label={t('exercise.start')} onPress={onPressStart} />
    </View>
  );
}
