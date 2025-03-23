import { View } from 'react-native';
import { FullWindowOverlay } from 'react-native-screens';

import UILoading from '@/components/ui/loading';

export default function UILoadingFull({
  loading,
  size = 50,
  color = '#FFFFFF',
}: {
  loading: boolean;
  size?: number;
  color?: string;
}) {
  if (!loading) return null;

  return (
    <FullWindowOverlay>
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="rounded-[34px] bg-[#1A1A25] p-[20px]">
          <UILoading loading size={size} color={color} />
        </View>
      </View>
    </FullWindowOverlay>
  );
}
