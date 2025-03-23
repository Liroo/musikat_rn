import { Image } from 'expo-image';
import { View } from 'react-native';

import IconPng from '@/assets/images/icon.png';

export default function UISplashScreen() {
  return (
    <View className="bg-primary flex h-full w-full flex-1 items-center justify-center">
      <Image source={IconPng} className="h-[200px] w-[200px]" />
    </View>
  );
}
