import { useEffect } from 'react';
import { View } from 'react-native';

import LearnTopBar from '@/features/learn/components/topBar';
import useIntervalComparison from '@/features/learn/hooks/useIntervalComparison';
import { ExerciseState } from '@/features/learn/types/exercise';
import LearnIntervalComparisonCompleted from '@/features/learn/views/intervalComparison/completed';
import LearnIntervalComparisonPresentation from '@/features/learn/views/intervalComparison/presentation';
import LearnIntervalComparisonQuestion from '@/features/learn/views/intervalComparison/question';

export default function LearnIntervalComparison() {
  const { resetExercise, exerciseData } = useIntervalComparison();

  useEffect(() => {
    resetExercise();
  }, []);

  return (
    <View className="flex-1 bg-white">
      {exerciseData.state === ExerciseState.Completed ? (
        <LearnIntervalComparisonCompleted />
      ) : (
        <>
          <LearnTopBar onPressBack={resetExercise} />

          {exerciseData.state === ExerciseState.Idle ? (
            <LearnIntervalComparisonPresentation />
          ) : (
            <LearnIntervalComparisonQuestion />
          )}
        </>
      )}
    </View>
  );
}
