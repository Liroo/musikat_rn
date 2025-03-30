import { View } from 'react-native';
import { useTranslations } from 'use-intl';

import UIText from '@/components/ui/text';
import LearnExerciseFooter from '@/features/learn/components/exercise/footer';
import LearnExerciseQuestionTitle from '@/features/learn/components/exercise/question/title';
import useExercise from '@/features/learn/hooks/useExercise';
import { ExerciseType } from '@/features/learn/types/exercise';

export default function LearnPitchComparisonPresentation() {
  const exercise = useExercise<ExerciseType.PitchComparison>(ExerciseType.PitchComparison);
  const t = useTranslations('features.learn');

  const onPressStart = () => {
    exercise.startExercise();
  };

  return (
    <View className="flex-1">
      <LearnExerciseQuestionTitle title={t('pitch_comparison.title')} />

      <View className="mx-[20px] mt-[16px] max-w-[280px]">
        <UIText className="text-[15px] text-black">{t('pitch_comparison.description')}</UIText>
      </View>

      <LearnExerciseFooter label={t('pitch_comparison.footer.start')} onPress={onPressStart} />
    </View>
  );
}
