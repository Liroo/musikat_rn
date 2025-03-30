import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslations } from 'use-intl';

import HubTitle from '@/features/hub/components/title';
import HubHomeExercise from '@/features/hub/views/home/exercise';
import { ExerciseType } from '@/features/learn/types/exercise';

export default function HubHome() {
  const t = useTranslations();
  const { top, bottom } = useSafeAreaInsets();
  const router = useRouter();

  const onPressExercise = (exerciseType: ExerciseType) => {
    switch (exerciseType) {
      case ExerciseType.PitchComparison:
        router.push('/(app)/(learn)/pitchComparison');
        break;
      case ExerciseType.IntervalComparison:
        router.push('/(app)/(learn)/intervalComparison');
        break;
      case ExerciseType.FindInterval:
        router.push('/(app)/(learn)/findInterval');
        break;
      case ExerciseType.NoteAndInterval:
        router.push('/(app)/(learn)/noteAndInterval');
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView
      className="flex-1 px-[20px]"
      contentContainerStyle={{ paddingTop: top }}
      showsVerticalScrollIndicator={false}>
      <HubTitle tKey="features.hub.home.title" />

      <HubHomeExercise
        onPress={() => onPressExercise(ExerciseType.PitchComparison)}
        className="mt-[40px] bg-[#B9C5F9]"
        tint="black"
        title={t('features.learn.pitch_comparison.title')}
        tags={[t('commons.difficulty.easy'), t('commons.category.ear')]}
      />
      <HubHomeExercise
        onPress={() => onPressExercise(ExerciseType.IntervalComparison)}
        className="mt-[-20px] bg-[#CFFF5E]"
        tint="black"
        title={t('features.learn.interval_comparison.title')}
        tags={[t('commons.difficulty.easy'), t('commons.category.ear')]}
      />
      <HubHomeExercise
        onPress={() => onPressExercise(ExerciseType.FindInterval)}
        className="mt-[-20px] bg-[#4558C8]"
        tint="white"
        title={t('features.learn.find_interval.title')}
        tags={[t('commons.difficulty.hard'), t('commons.category.theory')]}
      />
      <HubHomeExercise
        onPress={() => onPressExercise(ExerciseType.NoteAndInterval)}
        className="mt-[-20px] bg-[#ECA9F9]"
        style={{ paddingBottom: bottom + 100 + 40 }}
        tint="black"
        title={t('features.learn.note_and_interval.title')}
        tags={[t('commons.difficulty.medium'), t('commons.category.theory')]}
      />
    </ScrollView>
  );
}
