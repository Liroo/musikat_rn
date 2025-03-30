import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { resetStore } from '@/flux/action';

export type OnboardingUIState = {
  hasCompletedOnboarding: boolean;
};

const initialState: OnboardingUIState = {
  hasCompletedOnboarding: false,
};

const onboardingUISlice = createSlice({
  name: 'onboarding_ui',
  initialState,
  reducers: {
    setHasCompletedOnboarding: (state, action: PayloadAction<boolean>) => {
      state.hasCompletedOnboarding = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetStore, () => initialState);
  },
});

export const { setHasCompletedOnboarding } = onboardingUISlice.actions;

export default onboardingUISlice;
