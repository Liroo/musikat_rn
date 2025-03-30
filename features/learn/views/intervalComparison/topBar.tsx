import { useRouter } from 'expo-router';
import { useTranslations } from 'use-intl';

import UITopBarNavigationScreen from '@/components/ui/topBar/navigationScreen';

export default function LearnIntervalComparisonTopBar() {
  const router = useRouter();
  const t = useTranslations('features.learn.interval_comparison');

  return (
    <UITopBarNavigationScreen
      title={t('title')}
      leftIcon="close"
      onPressLeftIcon={() => router.back()}
    />
  );
}
