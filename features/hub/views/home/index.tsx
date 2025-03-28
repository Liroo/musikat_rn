import { SafeAreaView } from 'react-native-safe-area-context';

import HubHomeList from '@/features/hub/views/home/list';

export default function HubHome() {
  return (
    <SafeAreaView edges={['bottom']} className="flex flex-1 bg-black">
      <HubHomeList />
    </SafeAreaView>
  );
}
