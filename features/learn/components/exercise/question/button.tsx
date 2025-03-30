import { useMemo } from 'react';
import { View } from 'react-native';

import UIPressable, { HapticsType } from '@/components/ui/pressable';
import UIText from '@/components/ui/text';
import { twMerge } from '@/utils/twMerge';

export default function LearnExerciseQuestionButton({
  className,
  buttonClassName,
  onPress,
  label,
  correct,
  incorrect,
}: {
  className?: string;
  buttonClassName?: string;
  onPress: () => void;
  label: string;
  correct?: boolean | null;
  incorrect?: boolean | null;
}) {
  const backgroundClassname = useMemo(() => {
    if (correct) return 'bg-communicative-positive';
    if (incorrect) return 'bg-communicative-negative';
    return '';
  }, [correct, incorrect]);

  return (
    <View className={twMerge('h-[72px] flex-1 rounded-[8px] bg-black', className)}>
      <UIPressable
        onPress={onPress}
        hapticType={HapticsType.ImpactLight}
        className={twMerge(
          'h-[72px] w-full translate-x-[-2px] translate-y-[-2px] items-center justify-center rounded-[8px] border border-black bg-white transition-transform duration-150 active:translate-x-0 active:translate-y-0',
          buttonClassName,
          backgroundClassname
        )}>
        <UIText className="text-center text-[15px] text-black">{label}</UIText>
      </UIPressable>
    </View>
  );
}
