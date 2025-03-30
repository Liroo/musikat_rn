import { useEffect } from 'react';
import { View } from 'react-native';

import LearnTopBar from '@/features/learn/components/topBar';
import useExercise from '@/features/learn/hooks/useExercise';
import { ExerciseState, ExerciseType } from '@/features/learn/types/exercise';
import LearnPitchComparisonCompleted from '@/features/learn/views/pitchComparison/completed';
import LearnPitchComparisonPresentation from '@/features/learn/views/pitchComparison/presentation';
import LearnPitchComparisonQuestion from '@/features/learn/views/pitchComparison/question';

export default function LearnPitchComparison() {
  const exercise = useExercise<ExerciseType.PitchComparison>(ExerciseType.PitchComparison);

  useEffect(() => {
    exercise.resetExercise();
  }, []);

  return (
    <View className="flex-1 bg-white">
      {exercise.exerciseData.state === ExerciseState.Completed ? (
        <LearnPitchComparisonCompleted />
      ) : (
        <>
          <LearnTopBar />

          {exercise.exerciseData.state === ExerciseState.Idle ? (
            <LearnPitchComparisonPresentation />
          ) : (
            <LearnPitchComparisonQuestion />
          )}
        </>
      )}
    </View>
  );
}
