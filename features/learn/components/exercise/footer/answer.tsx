import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslations } from 'use-intl';

import SvgCircleFail from '@/components/svg/common/circle-fail';
import SvgCircleSuccess from '@/components/svg/common/circle-success';
import UIRichText from '@/components/ui/richText';
import UIText from '@/components/ui/text';
import { twMerge } from '@/utils/twMerge';

export default function LearnExerciseFooterAnswer({
  correct,
  messageData,
}: {
  correct: boolean;
  messageData: {
    key: string;
    data: Record<string, string>;
  };
}) {
  const t = useTranslations();
  const { bottom } = useSafeAreaInsets();

  const backgroundColor = correct ? 'bg-communicative-positive/15' : 'bg-communicative-negative/15';

  return (
    <View className={twMerge('', backgroundColor)} style={{ paddingBottom: bottom + 20 + 47 + 20 }}>
      <View className="gap-[12px] p-[20px] pb-0">
        <View className="flex-row items-center gap-[4px]">
          {correct ? <SvgCircleSuccess /> : <SvgCircleFail />}
          <UIText className="text-[20px] text-black">
            {correct
              ? t('features.learn.exercise.correct')
              : t('features.learn.exercise.incorrect')}
          </UIText>
        </View>
        <UIText className="text-[15px] text-black">
          <UIRichText>
            {(tags) =>
              t.rich(messageData.key, {
                ...tags,
                ...messageData.data,
                bold: (chunks) => <UIText weight="bold">{chunks}</UIText>,
              })
            }
          </UIRichText>
        </UIText>
      </View>
    </View>
  );
}
