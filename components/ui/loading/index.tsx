import { flatten } from 'lottie-colorify';
import LottieView from 'lottie-react-native';

import LottieLoadingJson from '@/assets/lottie/loading.json';

export default function UILoading({
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
    <LottieView
      source={flatten(color, LottieLoadingJson)}
      style={{ width: size, height: size }}
      autoPlay
      loop
    />
  );
}
