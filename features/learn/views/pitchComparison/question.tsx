import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useTranslations } from 'use-intl';

import LearnExerciseFooter from '@/features/learn/components/exercise/footer';
import LearnExerciseFooterAnswer from '@/features/learn/components/exercise/footer/answer';
import LearnExerciseProgress from '@/features/learn/components/exercise/progress';
import LearnExerciseQuestionButton from '@/features/learn/components/exercise/question/button';
import LearnExerciseQuestionTitle from '@/features/learn/components/exercise/question/title';
import usePitchComparison from '@/features/learn/hooks/usePitchComparison';
import { Tone } from '@/features/learn/types/notes';
import { learnFlatNoteToSharpNote } from '@/features/learn/utils/notes';
import { pianoSound } from '@/features/learn/utils/sound';
import { twMerge } from '@/utils/twMerge';

export default function LearnPitchComparisonQuestion() {
  const t = useTranslations('features.learn');
  const {
    exerciseData,
    nextQuestion,
    answerQuestion,
    currentQuestion,
    currentAnswer,
    correctMessage,
    incorrectMessage,
  } = usePitchComparison();

  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(null);

  const startTimer = useRef(Date.now());

  const onPressCheck = () => {
    if (currentAnswer) {
      pianoSound.stopEveryNote();
      nextQuestion();
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

  // Intro "animation"
  const [introIndex, setIntroIndex] = useState(0);
  useEffect(() => {
    setIntroIndex(0);
    pianoSound.playNote(currentQuestion.notes[0]);
    setTimeout(() => {
      setIntroIndex(1);
      pianoSound.playNote(currentQuestion.notes[1]);
      setTimeout(() => {
        setIntroIndex(-1);
        startTimer.current = Date.now();
      }, 500);
    }, 500);
  }, [currentQuestion.id]);

  return (
    <>
      <View
        className={twMerge(
          'absolute inset-0 z-20 bg-black/50 transition-opacity duration-150',
          introIndex >= 0 ? 'opacity-100' : 'opacity-0'
        )}
        pointerEvents={introIndex >= 0 ? 'auto' : 'none'}
      />
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
            className={introIndex === 0 ? 'pointer-events-none z-50' : ''}
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
              (!currentAnswer && selectedButtonIndex === 0) || introIndex === 0
                ? 'bg-communicative-informative'
                : ''
            }
            onPress={() => {
              pianoSound.playNote(currentQuestion.notes[0]);
              if (currentAnswer) return;
              setSelectedButtonIndex(0);
            }}
          />
          <LearnExerciseQuestionButton
            className={introIndex === 1 ? 'pointer-events-none z-50' : ''}
            label={
              currentAnswer
                ? t('notes.' + learnFlatNoteToSharpNote(currentQuestion.notes[1]).note, {
                    octave: '',
                    modifier: learnFlatNoteToSharpNote(currentQuestion.notes[1]).modifier || '',
                  })
                : t('pitch_comparison.question.button.note', { note: '02' })
            }
            buttonClassName={
              (!currentAnswer && selectedButtonIndex === 1) || introIndex === 1
                ? 'bg-communicative-informative'
                : ''
            }
            correct={
              currentAnswer &&
              ((currentAnswer?.noteIndex === 1 && currentAnswer.isCorrect) ||
                currentQuestion.correctNoteIndex === 1)
            }
            incorrect={currentAnswer && currentAnswer?.noteIndex === 1 && !currentAnswer.isCorrect}
            onPress={() => {
              pianoSound.playNote(currentQuestion.notes[1]);
              if (currentAnswer) return;
              setSelectedButtonIndex(1);
            }}
          />
        </View>

        <LearnExerciseFooter
          disabled={!currentAnswer && selectedButtonIndex === null}
          label={
            currentAnswer
              ? t('pitch_comparison.footer.continue')
              : t('pitch_comparison.footer.check')
          }
          onPress={onPressCheck}
          className={currentAnswer && !currentAnswer.isCorrect ? 'bg-communicative-negative' : ''}
        />

        {currentAnswer && (
          <LearnExerciseFooterAnswer
            correct={currentAnswer?.isCorrect ?? false}
            message={currentAnswer?.isCorrect ? correctMessage : incorrectMessage}
          />
        )}
      </View>
    </>
  );
}
