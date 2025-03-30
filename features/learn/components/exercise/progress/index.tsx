import { useMemo } from 'react';
import { View } from 'react-native';
import { useTranslations } from 'use-intl';

import UIProgress from '@/components/ui/progress';
import UIText from '@/components/ui/text';

export default function LearnExerciseProgress({
  currentQuestionIndex,
  totalQuestions,
}: {
  currentQuestionIndex: number;
  totalQuestions: number;
}) {
  const t = useTranslations('features.learn.exercise');
  const progress = useMemo(() => {
    return currentQuestionIndex / totalQuestions;
  }, [currentQuestionIndex, totalQuestions]);

  return (
    <View className="mx-[20px]">
      <View className="mb-[12px] flex-row items-center justify-between">
        <UIText className="text-[15px] text-black">{t('progress')}</UIText>
        <UIText className="text-[15px] text-black">{progress * 100}%</UIText>
      </View>
      <UIProgress progress={progress} />
    </View>
  );
}
