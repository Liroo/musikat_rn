import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ExerciseData, ExerciseType } from '@/features/learn/types/exercise';
import { generateDefaultExerciseData } from '@/features/learn/utils/exercise';
import { resetStore } from '@/flux/action';

export type LearnUIState = {
  exercises: Record<ExerciseType, ExerciseData>;
};

const initialState: LearnUIState = {
  exercises: {
    [ExerciseType.PitchComparison]: generateDefaultExerciseData(),
    [ExerciseType.NoteAndInterval]: generateDefaultExerciseData(),
    [ExerciseType.IntervalComparison]: generateDefaultExerciseData(),
    [ExerciseType.FindInterval]: generateDefaultExerciseData(),
  },
};

const learnUISlice = createSlice({
  name: 'learn_ui',
  initialState,
  reducers: {
    learnUISetExerciseByType: (
      state,
      action: PayloadAction<{ type: ExerciseType; data: ExerciseData }>
    ) => {
      state.exercises[action.payload.type] = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetStore, () => initialState);
  },
});

export const { learnUISetExerciseByType } = learnUISlice.actions;

export default learnUISlice;
