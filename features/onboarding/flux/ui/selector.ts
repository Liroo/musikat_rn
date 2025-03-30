import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/flux/store';

const selectOnboardingUI = (state: RootState) => state.onboarding_ui;

export const selectOnboardingUIHasCompletedOnboarding = createSelector(
  [selectOnboardingUI],
  (state) => state.hasCompletedOnboarding
);
