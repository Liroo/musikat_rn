import { createSelector } from '@reduxjs/toolkit';

import { ExerciseType } from '@/features/learn/types/exercise';
import { IntervalComparisonExerciseData } from '@/features/learn/utils/intervalComparison';
import { PitchComparisonExerciseData } from '@/features/learn/utils/pitchComparison';
import { RootState } from '@/flux/store';

const selectLearnUI = (state: RootState) => state.learn_ui;

type ExerciseTypeValueMap = {
  [ExerciseType.PitchComparison]: PitchComparisonExerciseData;
  [ExerciseType.IntervalComparison]: IntervalComparisonExerciseData;
  [ExerciseType.NoteAndInterval]: any;
  [ExerciseType.FindInterval]: any;
};

export const selectLearnUIExerciseByType = <T extends keyof ExerciseTypeValueMap>(type: T) =>
  createSelector([selectLearnUI], (state): ExerciseTypeValueMap[T] => {
    if (!(type in state.exercises)) {
      throw new Error(`Exercise type ${type} not found`);
    }

    return state.exercises[type] as ExerciseTypeValueMap[T];
  });
