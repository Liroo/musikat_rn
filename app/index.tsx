import { View } from 'react-native';
import { useTranslations } from 'use-intl';

import UIText from '@/components/ui/text';

export default function Index() {
  const t = useTranslations();

  return (
    <View className="flex flex-1 items-center justify-center">
      <UIText className="text-white" variant="headline1">
        {t('features.test.title')}
      </UIText>
      <UIText className="text-white" variant="body1">
        {t('commons.features')}
      </UIText>
    </View>
  );
}
