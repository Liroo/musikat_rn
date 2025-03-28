import { Stack } from 'expo-router';

import HubHomeTopBar from '@/features/hub/views/home/topBar';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        animationMatchesGesture: true,
      }}>
      <Stack.Screen name="(hub)/index" options={{ header: () => <HubHomeTopBar /> }} />
      <Stack.Screen name="(hub)/progression" options={{ headerShown: false }} />
      <Stack.Screen name="(hub)/settings" options={{ headerShown: false }} />
    </Stack>
  );
}
