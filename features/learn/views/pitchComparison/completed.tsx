import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslations } from 'use-intl';

import SvgCircleCheckmark from '@/components/svg/common/circle-checkmark';
import SvgCircleClock from '@/components/svg/common/circle-clock';
import SvgCircleDelete from '@/components/svg/common/circle-delete';
import UIPressable, { HapticsType } from '@/components/ui/pressable';
import UIRichText from '@/components/ui/richText';
import UIText from '@/components/ui/text';
import useExercise from '@/features/learn/hooks/useExercise';
import { ExerciseType } from '@/features/learn/types/exercise';
import { formatTime } from '@/utils/format';

export default function LearnPitchComparisonCompleted() {
  const t = useTranslations('features.learn');

  const { exerciseData } = useExercise<ExerciseType.PitchComparison>(ExerciseType.PitchComparison);

  const totalTime = exerciseData.answers.reduce((acc, answer) => acc + answer.time, 0);

  const router = useRouter();

  const onFinish = () => {
    router.dismissTo('/(app)/(hub)');
  };

  return (
    <SafeAreaView className="bg-purple flex-1 items-center">
      <UIText
        className="mt-[56px] text-center text-[35px] tracking-normal"
        variant="headline1"
        font="monument">
        <UIRichText>{(tags) => t.rich('exercise.completed', tags)}</UIRichText>
      </UIText>
      <View className="w-full flex-1 items-center justify-center px-[32px]">
        <Image
          source={require('@/assets/images/exercise/completed_background.png')}
          className="w-full max-w-[300px] flex-1"
          contentFit="contain"
        />
      </View>

      <View className="w-full flex-row gap-[12px] px-[20px] py-[60px]">
        <View className="h-[112px] flex-1 rounded-[8px] bg-black">
          <View className="h-full w-full translate-x-[-2px] translate-y-[-2px] items-center justify-between rounded-[8px] border border-black bg-communicative-negative">
            <UIText className="pt-[10px] text-[12px] text-white" weight="semibold">
              {t('exercise.wrong')}
            </UIText>

            <View className="w-full p-[2px]">
              <View className="h-[65px] w-full flex-row items-center justify-center gap-[4px] rounded-b-[6px] rounded-t-[8px] bg-white">
                <SvgCircleDelete width={20} height={20} />
                <UIText className="text-[15px]" weight="bold">
                  {(
                    100 -
                    (exerciseData.correctAnswers / exerciseData.answers.length) * 100
                  ).toFixed(0)}
                  %
                </UIText>
              </View>
            </View>
          </View>
        </View>

        <View className="h-[112px] flex-1 rounded-[8px] bg-black">
          <View className="h-full w-full translate-x-[-2px] translate-y-[-2px] items-center justify-between rounded-[8px] border border-black bg-communicative-positive">
            <UIText className="pt-[10px] text-[12px] text-black" weight="semibold">
              {t('exercise.good')}
            </UIText>

            <View className="w-full p-[2px]">
              <View className="h-[65px] w-full flex-row items-center justify-center gap-[4px] rounded-b-[6px] rounded-t-[8px] bg-white">
                <SvgCircleCheckmark width={20} height={20} />
                <UIText className="text-[15px]" weight="bold">
                  {((exerciseData.correctAnswers / exerciseData.answers.length) * 100).toFixed(0)}%
                </UIText>
              </View>
            </View>
          </View>
        </View>

        <View className="h-[112px] flex-1 rounded-[8px] bg-black">
          <View className="h-full w-full translate-x-[-2px] translate-y-[-2px] items-center justify-between rounded-[8px] border border-black bg-communicative-notification">
            <UIText className="pt-[10px] text-[12px] text-black" weight="semibold">
              {t('exercise.time')}
            </UIText>

            <View className="w-full p-[2px]">
              <View className="h-[65px] w-full flex-row items-center justify-center gap-[4px] rounded-b-[6px] rounded-t-[8px] bg-white">
                <SvgCircleClock width={20} height={20} />
                <UIText className="text-[15px]" weight="bold">
                  {formatTime(Math.round(totalTime / 1000))}
                </UIText>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="w-full px-[20px]">
        <UIPressable
          hapticType={HapticsType.ImpactLight}
          className="mb-[20px] h-[47px] w-full items-center justify-center rounded-[8px] border border-black bg-black"
          onPress={onFinish}>
          <UIText className="text-[15px] text-white">{t('exercise.finish')}</UIText>
        </UIPressable>
      </View>
    </SafeAreaView>
  );
}
