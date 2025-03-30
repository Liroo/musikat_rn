import { Stack } from 'expo-router';
import { useEffect } from 'react';

import GuardOnboarding from '@/components/guards/onboarding';
import { useAppDispatch } from '@/flux/hooks';

export default function Layout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(resetStore());
  }, []);

  return (
    <GuardOnboarding isOnboarding={false}>
      <Stack
        screenOptions={{
          animationMatchesGesture: true,
        }}>
        {/* Hub */}
        <Stack.Screen
          name="(hub)"
          options={{
            headerShown: false,
          }}
        />

        {/* Learn */}
        <Stack.Screen name="(learn)/findInterval" options={{ headerShown: false }} />
        <Stack.Screen name="(learn)/intervalComparison" options={{ headerShown: false }} />
        <Stack.Screen name="(learn)/noteAndInterval" options={{ headerShown: false }} />
        <Stack.Screen name="(learn)/pitchComparison" options={{ headerShown: false }} />
      </Stack>
    </GuardOnboarding>
  );
}
