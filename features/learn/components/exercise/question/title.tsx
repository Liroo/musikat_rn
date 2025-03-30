import { View } from 'react-native';

import UIText from '@/components/ui/text';

export default function LearnExerciseQuestionTitle({ title }: { title: string }) {
  return (
    <View className="mx-[20px] mt-[40px]">
      <UIText className="text-[22px] text-black">{title}</UIText>
    </View>
  );
}
