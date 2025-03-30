import { StyleProp, View, ViewStyle } from 'react-native';

import SvgCircleArrow from '@/components/svg/common/circle-arrow';
import UIPressable, { HapticsType } from '@/components/ui/pressable';
import UIText from '@/components/ui/text';
import { twMerge } from '@/utils/twMerge';

export default function HubHomeExercise({
  title,
  className,
  tint,
  style,
  tags,
  onPress,
}: {
  title: string;
  className?: string;
  tint?: 'black' | 'white';
  style?: StyleProp<ViewStyle>;
  tags: string[];
  onPress: () => void;
}) {
  return (
    <UIPressable
      className={twMerge('gap-[20px] rounded-[16px] p-[20px] pb-[40px]', className)}
      hapticType={HapticsType.ImpactLight}
      style={style}
      onPress={onPress}>
      <UIText
        variant="body2"
        className={twMerge('text-[26px]', tint === 'white' ? 'text-white' : 'text-black')}>
        {title}
      </UIText>
      <View className="flex-row justify-between gap-[10px]">
        <View className="flex-row gap-[4px]">
          {tags.map((tag) => (
            <View
              key={tag}
              className={twMerge(
                'h-[37px] items-center justify-center gap-[4px] rounded-full border px-[16px]',
                tint === 'white' ? 'border-white' : 'border-black'
              )}>
              <UIText
                variant="body2"
                className={twMerge(tint === 'white' ? 'text-white' : 'text-black')}>
                {tag}
              </UIText>
            </View>
          ))}
        </View>
        <SvgCircleArrow />
      </View>
    </UIPressable>
  );
}
