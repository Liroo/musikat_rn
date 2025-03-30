import { SceneStyleInterpolators, TransitionSpecs } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';

import HubTabBar from '@/features/hub/components/tabBar';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        transitionSpec: TransitionSpecs.FadeSpec,
        sceneStyleInterpolator: SceneStyleInterpolators.forFade,
        headerShown: false,
      }}
      tabBar={(props) => <HubTabBar {...props} />}
      initialRouteName="index">
      <Tabs.Screen name="settings" />
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
