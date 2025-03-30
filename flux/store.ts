import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';

import learnUISlice from '@/features/learn/flux/ui/reducer';
import onboardingUISlice from '@/features/onboarding/flux/ui/reducer';
import listenerMiddleware from '@/flux/listenerMiddleware';
import statusSlice from '@/flux/status/reducer';
import toastSlice from '@/flux/toast/reducer';
export const makeStore = () => {
  const rootReducer = combineReducers({
    [statusSlice.name]: statusSlice.reducer,
    [toastSlice.name]: toastSlice.reducer,

    [onboardingUISlice.name]: onboardingUISlice.reducer,
    [learnUISlice.name]: learnUISlice.reducer,
  });

  const persistConfig = {
    key: 'musikat-root',
    version: 1,
    storage: ExpoFileSystemStorage,
    whitelist: [onboardingUISlice.name],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    devTools: process.env.EXPO_PUBLIC_ENV !== 'production',
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredPaths: [/^modal\..*/],
        },
      }).prepend(listenerMiddleware.middleware),
  });

  (store as any).__persisitor = persistStore(store);

  return store as typeof store & {
    __persisitor: ReturnType<typeof persistStore>;
  };
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
