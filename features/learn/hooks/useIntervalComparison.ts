import { useMemo } from 'react';
import { useTranslations } from 'use-intl';

import useExercise from '@/features/learn/hooks/useExercise';
import { ExerciseType } from '@/features/learn/types/exercise';
import { IntervalToSemitone, IntervalType, Note } from '@/features/learn/types/notes';
import { learnGetResultingNoteFromNoteAndInterval } from '@/features/learn/utils/notes';

export default function useIntervalComparison() {
  const t = useTranslations('features.learn');

  const {
    exerciseData,
    nextQuestion,
    answerQuestion,
    currentQuestion,
    currentAnswer,
    startExercise,
    resetExercise,
  } = useExercise<ExerciseType.IntervalComparison>(ExerciseType.IntervalComparison);

  const interval = useMemo(() => {
    if (!currentQuestion) return null;
    return currentQuestion?.intervals[currentQuestion.correctIndex];
  }, [currentQuestion]);
  const otherInterval = useMemo(() => {
    if (!currentQuestion) return null;
    return currentQuestion?.intervals[currentQuestion.correctIndex === 0 ? 1 : 0];
  }, [currentQuestion]);

  const noteToName = (note: Note) => {
    return t('notes.' + note.note, {
      octave: '',
      modifier: note.modifier || '',
    });
  };

  const correctMessageData = useMemo(() => {
    if (!currentQuestion || !interval || !otherInterval) return {};

    const intervalTKey =
      interval.intervalType === IntervalType.Ascending ? 'ascending' : 'descending';
    const intervalGender = t('interval.gender.' + interval.interval);
    const intervalName = t('interval.' + intervalTKey + '.' + interval.interval);

    const otherIntervalTKey =
      otherInterval.intervalType === IntervalType.Ascending ? 'ascending' : 'descending';
    const otherIntervalGender = t('interval.gender.' + otherInterval.interval);
    const otherIntervalName = t('interval.' + otherIntervalTKey + '.' + otherInterval.interval);

    const correctNote = interval.note;
    const incorrectNote = otherInterval.note;
    const correctResultingNote = learnGetResultingNoteFromNoteAndInterval(interval);
    const incorrectResultingNote = learnGetResultingNoteFromNoteAndInterval(otherInterval);

    return {
      key: 'features.learn.interval_comparison.answer.correct',
      data: {
        semitones: IntervalToSemitone[interval.interval],
        interval: intervalGender + ' ' + intervalName,
        other_semitones: IntervalToSemitone[otherInterval.interval],
        other_interval: otherIntervalGender + ' ' + otherIntervalName,
        first_note: noteToName(correctNote),
        second_note: noteToName(correctResultingNote),
        other_first_note: noteToName(incorrectNote),
        other_second_note: noteToName(incorrectResultingNote),
      },
    };
  }, [currentQuestion]);

  const incorrectMessageData = useMemo(() => {
    if (!currentQuestion || !interval || !otherInterval) return {};

    const intervalTKey =
      interval.intervalType === IntervalType.Ascending ? 'ascending' : 'descending';
    const intervalGender = t('interval.gender.' + interval.interval);
    const intervalName = t('interval.' + intervalTKey + '.' + interval.interval);

    const otherIntervalTKey =
      otherInterval.intervalType === IntervalType.Ascending ? 'ascending' : 'descending';
    const otherIntervalGender = t('interval.gender.' + otherInterval.interval);
    const otherIntervalName = t('interval.' + otherIntervalTKey + '.' + otherInterval.interval);

    const correctNote = interval.note;
    const incorrectNote = otherInterval.note;
    const correctResultingNote = learnGetResultingNoteFromNoteAndInterval(interval);
    const incorrectResultingNote = learnGetResultingNoteFromNoteAndInterval(otherInterval);

    return {
      key: 'features.learn.interval_comparison.answer.incorrect',
      data: {
        correct_interval: (currentQuestion.correctIndex + 1).toString().padStart(2, '0'),
        semitones: IntervalToSemitone[interval.interval],
        interval: intervalGender + ' ' + intervalName,
        other_semitones: IntervalToSemitone[otherInterval.interval],
        other_interval: otherIntervalGender + ' ' + otherIntervalName,
        first_note: noteToName(correctNote),
        second_note: noteToName(correctResultingNote),
        other_first_note: noteToName(incorrectNote),
        other_second_note: noteToName(incorrectResultingNote),
      },
    };
  }, [currentQuestion]);

  return {
    exerciseData,
    nextQuestion,
    answerQuestion,
    startExercise,
    resetExercise,
    currentQuestion,
    currentAnswer,
    correctMessageData,
    incorrectMessageData,
  };
}
