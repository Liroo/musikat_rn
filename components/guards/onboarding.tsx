import { Redirect } from 'expo-router';

import UISplashScreen from '@/components/ui/splashScreen';
import { selectOnboardingUIHasCompletedOnboarding } from '@/features/onboarding/flux/ui/selector';
import { useAppSelector } from '@/flux/hooks';

export default function GuardOnboarding({
  isOnboarding = true,
  children,
}: {
  isOnboarding?: boolean;
  children: React.ReactNode;
}) {
  const hasCompletedOnboarding = useAppSelector(selectOnboardingUIHasCompletedOnboarding);

  if (!isOnboarding && hasCompletedOnboarding) return children;
  if (isOnboarding && !hasCompletedOnboarding) return children;
  if (isOnboarding && hasCompletedOnboarding) return <Redirect href="/(app)/(hub)" />;
  if (!isOnboarding && !hasCompletedOnboarding) return <Redirect href="/(onboarding)/welcome" />;

  return <UISplashScreen />;
}
