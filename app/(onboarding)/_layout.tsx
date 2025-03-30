import { Stack } from 'expo-router';

import GuardOnboarding from '@/components/guards/onboarding';

export default function Layout() {
  return (
    <GuardOnboarding isOnboarding>
      <Stack
        screenOptions={{
          animationMatchesGesture: true,
        }}>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
      </Stack>
    </GuardOnboarding>
  );
}
