import { useMemo } from 'react';
import { useTranslations } from 'use-intl';

import useExercise from '@/features/learn/hooks/useExercise';
import { ExerciseType } from '@/features/learn/types/exercise';
import { IntervalType } from '@/features/learn/types/notes';
import { learnGetIntervalBetweenNotes } from '@/features/learn/utils/notes';

export default function usePitchComparison() {
  const t = useTranslations('features.learn');

  const { exerciseData, nextQuestion, answerQuestion, currentQuestion, currentAnswer } =
    useExercise<ExerciseType.PitchComparison>(ExerciseType.PitchComparison);

  const interval = useMemo(() => {
    return learnGetIntervalBetweenNotes(currentQuestion.notes[0], currentQuestion.notes[1]);
  }, [currentQuestion.notes]);

  const correctMessage = useMemo(() => {
    if (!currentQuestion || !interval) return '';

    const intervalTKey =
      interval.intervalType === IntervalType.Ascending ? 'ascending' : 'descending';
    const intervalGender = t('interval.gender.' + interval.interval);
    const intervalName = t('interval.' + intervalTKey + '.' + interval.interval);

    return t('pitch_comparison.answer.correct', {
      correct_note: t('notes.' + currentQuestion.notes[currentQuestion.correctNoteIndex].note, {
        octave: '',
        modifier: currentQuestion.notes[0].modifier || '',
      }),
      semitones: interval.semitone,
      interval: intervalGender + ' ' + intervalName,
    });
  }, [interval, currentQuestion]);

  const incorrectMessage = useMemo(() => {
    if (!currentQuestion || !interval) return '';

    const intervalTKey =
      interval.intervalType === IntervalType.Ascending ? 'ascending' : 'descending';
    const intervalGender = t('interval.gender.' + interval.interval);
    const intervalName = t('interval.' + intervalTKey + '.' + interval.interval);

    return t('pitch_comparison.answer.incorrect', {
      correct_note: t('notes.' + currentQuestion.notes[currentQuestion.correctNoteIndex].note, {
        octave: '',
        modifier: currentQuestion.notes[0].modifier || '',
      }),
      semitones: interval.semitone,
      interval: intervalGender + ' ' + intervalName,
    });
  }, [interval, currentQuestion]);

  return {
    exerciseData,
    nextQuestion,
    answerQuestion,
    currentQuestion,
    currentAnswer,
    interval,
    correctMessage,
    incorrectMessage,
  };
}
