import { useRouter } from 'expo-router';
import { useTranslations } from 'use-intl';

import UITopBarNavigationScreen from '@/components/ui/topBar/navigationScreen';

export default function LearnNoteAndIntervalTopBar() {
  const router = useRouter();
  const t = useTranslations('features.learn.note_and_interval');

  return (
    <UITopBarNavigationScreen
      title={t('title')}
      leftIcon="close"
      onPressLeftIcon={() => router.back()}
    />
  );
}
