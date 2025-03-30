import { useEffect } from 'react';
import { View } from 'react-native';

import LearnTopBar from '@/features/learn/components/topBar';
import usePitchComparison from '@/features/learn/hooks/usePitchComparison';
import { ExerciseState } from '@/features/learn/types/exercise';
import LearnPitchComparisonCompleted from '@/features/learn/views/pitchComparison/completed';
import LearnPitchComparisonPresentation from '@/features/learn/views/pitchComparison/presentation';
import LearnPitchComparisonQuestion from '@/features/learn/views/pitchComparison/question';

export default function LearnPitchComparison() {
  const { resetExercise, exerciseData } = usePitchComparison();

  useEffect(() => {
    resetExercise();
  }, []);

  return (
    <View className="flex-1 bg-white">
      {exerciseData.state === ExerciseState.Completed ? (
        <LearnPitchComparisonCompleted />
      ) : (
        <>
          <LearnTopBar onPressBack={resetExercise} />

          {exerciseData.state === ExerciseState.Idle ? (
            <LearnPitchComparisonPresentation />
          ) : (
            <LearnPitchComparisonQuestion />
          )}
        </>
      )}
    </View>
  );
}
