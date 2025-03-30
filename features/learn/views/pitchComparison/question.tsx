import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useTranslations } from 'use-intl';

import LearnExerciseFooter from '@/features/learn/components/exercise/footer';
import LearnExerciseFooterAnswer from '@/features/learn/components/exercise/footer/answer';
import LearnExerciseProgress from '@/features/learn/components/exercise/progress';
import LearnExerciseQuestionButton from '@/features/learn/components/exercise/question/button';
import LearnExerciseQuestionTitle from '@/features/learn/components/exercise/question/title';
import useExercise from '@/features/learn/hooks/useExercise';
import { ExerciseType } from '@/features/learn/types/exercise';
import { Instrument, Tone } from '@/features/learn/types/notes';
import { learnFlatNoteToSharpNote } from '@/features/learn/utils/notes';
import { playNote } from '@/features/learn/utils/sound';

export default function LearnPitchComparisonQuestion() {
  const { exerciseData, nextQuestion, answerQuestion, currentQuestion, currentAnswer } =
    useExercise<ExerciseType.PitchComparison>(ExerciseType.PitchComparison);
  const t = useTranslations('features.learn');

  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(null);

  const startTimer = useRef(Date.now());

  const onPressCheck = () => {
    if (currentAnswer) {
      nextQuestion();
      startTimer.current = Date.now();
      return;
    }

    if (selectedButtonIndex === null) return;

    answerQuestion({
      id: currentQuestion.id,
      questionId: currentQuestion.id,
      noteIndex: selectedButtonIndex,
      time: Date.now() - startTimer.current,
    });

    setSelectedButtonIndex(null);
  };

  useEffect(() => {
    playNote(Instrument.Piano, currentQuestion.notes[0]);
    setTimeout(() => {
      playNote(Instrument.Piano, currentQuestion.notes[1]);
    }, 500);
  }, [currentQuestion.id]);

  return (
    <View className="mt-[8px] flex-1">
      <LearnExerciseProgress
        currentQuestionIndex={exerciseData.currentQuestionIndex + (currentAnswer ? 1 : 0)}
        totalQuestions={exerciseData.questions.length}
      />

      <LearnExerciseQuestionTitle
        title={
          currentQuestion.tone === Tone.High
            ? t('pitch_comparison.question.tone_higher')
            : t('pitch_comparison.question.tone_lower')
        }
      />

      <View className="mx-[20px] mt-[40%] flex-1 flex-row gap-[10px]">
        <LearnExerciseQuestionButton
          label={
            currentAnswer
              ? t('notes.' + learnFlatNoteToSharpNote(currentQuestion.notes[0]).note, {
                  octave: '',
                  modifier: learnFlatNoteToSharpNote(currentQuestion.notes[0]).modifier || '',
                })
              : t('pitch_comparison.question.button.note', { note: '01' })
          }
          correct={
            currentAnswer &&
            ((currentAnswer?.noteIndex === 0 && currentAnswer.isCorrect) ||
              currentQuestion.correctNoteIndex === 0)
          }
          incorrect={currentAnswer && currentAnswer?.noteIndex === 0 && !currentAnswer.isCorrect}
          buttonClassName={
            !currentAnswer && selectedButtonIndex === 0 ? 'bg-communicative-informative' : ''
          }
          onPress={() => {
            playNote(Instrument.Piano, currentQuestion.notes[0]);
            if (currentAnswer) return;
            setSelectedButtonIndex(0);
          }}
        />
        <LearnExerciseQuestionButton
          label={
            currentAnswer
              ? t('notes.' + learnFlatNoteToSharpNote(currentQuestion.notes[1]).note, {
                  octave: '',
                  modifier: learnFlatNoteToSharpNote(currentQuestion.notes[1]).modifier || '',
                })
              : t('pitch_comparison.question.button.note', { note: '02' })
          }
          buttonClassName={
            !currentAnswer && selectedButtonIndex === 1 ? 'bg-communicative-informative' : ''
          }
          correct={
            currentAnswer &&
            ((currentAnswer?.noteIndex === 1 && currentAnswer.isCorrect) ||
              currentQuestion.correctNoteIndex === 1)
          }
          incorrect={currentAnswer && currentAnswer?.noteIndex === 1 && !currentAnswer.isCorrect}
          onPress={() => {
            playNote(Instrument.Piano, currentQuestion.notes[1]);
            if (currentAnswer) return;
            setSelectedButtonIndex(1);
          }}
        />
      </View>

      <LearnExerciseFooter
        disabled={!currentAnswer && selectedButtonIndex === null}
        label={
          currentAnswer ? t('pitch_comparison.footer.continue') : t('pitch_comparison.footer.check')
        }
        onPress={onPressCheck}
        className={currentAnswer && !currentAnswer.isCorrect ? 'bg-communicative-negative' : ''}
      />

      {currentAnswer && (
        <LearnExerciseFooterAnswer
          correct={currentAnswer?.isCorrect ?? false}
          message={
            currentAnswer?.isCorrect
              ? t('pitch_comparison.answer.correct', {
                  correct_note: t(
                    'notes.' + learnFlatNoteToSharpNote(currentQuestion.notes[0]).note,
                    {
                      octave: '',
                      modifier: learnFlatNoteToSharpNote(currentQuestion.notes[0]).modifier || '',
                    }
                  ),
                })
              : t('pitch_comparison.answer.incorrect', {
                  correct_note: t(
                    'notes.' + learnFlatNoteToSharpNote(currentQuestion.notes[0]).note,
                    {
                      octave: '',
                      modifier: learnFlatNoteToSharpNote(currentQuestion.notes[0]).modifier || '',
                    }
                  ),
                })
          }
        />
      )}
    </View>
  );
}
