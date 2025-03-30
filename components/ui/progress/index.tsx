import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function UIProgress({ progress }: { progress: number }) {
  const progressValue = useSharedValue(progress);

  useEffect(() => {
    progressValue.value = withTiming(progress);
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progressValue.value * 100}%`,
  }));

  return (
    <View className="h-[12px] w-full overflow-hidden rounded-full bg-[#ECECEC]">
      <Animated.View
        className="h-[12px] flex-row items-center justify-end rounded-full bg-primary"
        style={[animatedStyle]}>
        <View className="mr-px h-[10px] w-[10px] items-center justify-center rounded-full bg-white">
          <View className="h-[8px] w-[8px] rounded-full bg-black" />
        </View>
      </Animated.View>
    </View>
  );
}
