import { View } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';

export default function UILoadingInvisible({ loading }: { loading: boolean }) {
  if (!loading) return null;

  return (
    <FullWindowOverlay>
      <View className="z-[9000] flex-1" pointerEvents="box-only" />
    </FullWindowOverlay>
  );
}
