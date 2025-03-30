import { SafeAreaView } from 'react-native-safe-area-context';

import HubTitle from '@/features/hub/components/title';

export default function HubSettings() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-white px-[20px]">
      <HubTitle tKey="features.hub.settings.title" />
    </SafeAreaView>
  );
}
