import { useMemo } from 'react';

import { learnUISetExerciseByType } from '@/features/learn/flux/ui/reducer';
import { selectLearnUIExerciseByType } from '@/features/learn/flux/ui/selector';
import { ExerciseAnswer, ExerciseState, ExerciseType } from '@/features/learn/types/exercise';
import { IntervalComparisonExercise } from '@/features/learn/utils/intervalComparison';
import { PitchComparisonExercise } from '@/features/learn/utils/pitchComparison';
import { useAppDispatch, useAppSelector } from '@/flux/hooks';

export default function useExercise<T extends ExerciseType>(exerciseType: T) {
  const dispatch = useAppDispatch();
  const exerciseData = useAppSelector(selectLearnUIExerciseByType<T>(exerciseType));

  const currentQuestion: (typeof exerciseData)['questions'][number] = useMemo(() => {
    return exerciseData.questions[exerciseData.currentQuestionIndex];
  }, [exerciseData.questions, exerciseData.currentQuestionIndex]);

  const currentAnswer: (typeof exerciseData)['answers'][number] | null = useMemo(() => {
    const answer = exerciseData.answers.find(
      (answer: ExerciseAnswer) => answer.questionId === currentQuestion.id
    );
    return answer ?? null;
  }, [exerciseData.answers, currentQuestion]);

  const exercise = useMemo(() => {
    switch (exerciseType) {
      case ExerciseType.PitchComparison:
        return new PitchComparisonExercise();
      case ExerciseType.IntervalComparison:
        return new IntervalComparisonExercise();
      default:
        throw new Error(`Exercise type ${exerciseType} not supported`);
    }
  }, [exerciseType]);

  const resetExercise = () => {
    const exerciseData = exercise.generateData();

    dispatch(learnUISetExerciseByType({ type: exerciseType, data: exerciseData }));
  };

  const startExercise = () => {
    dispatch(
      learnUISetExerciseByType({
        type: exerciseType,
        data: {
          ...exerciseData,
          state: ExerciseState.Active,
        },
      })
    );
  };

  const answerQuestion = (answer: Omit<(typeof exerciseData)['answers'][number], 'isCorrect'>) => {
    const isCorrect = answer.index === currentQuestion.correctIndex;

    dispatch(
      learnUISetExerciseByType({
        type: exerciseType,
        data: {
          ...exerciseData,
          answers: [...exerciseData.answers, { ...answer, isCorrect }],
          correctAnswers: exerciseData.correctAnswers + (isCorrect ? 1 : 0),
        },
      })
    );
  };

  const nextQuestion = () => {
    if (exerciseData.currentQuestionIndex < exerciseData.questions.length - 1) {
      dispatch(
        learnUISetExerciseByType({
          type: exerciseType,
          data: { ...exerciseData, currentQuestionIndex: exerciseData.currentQuestionIndex + 1 },
        })
      );
    } else {
      dispatch(
        learnUISetExerciseByType({
          type: exerciseType,
          data: { ...exerciseData, state: ExerciseState.Completed },
        })
      );
    }
  };

  return {
    exerciseData,
    resetExercise,
    startExercise,
    answerQuestion,
    nextQuestion,
    currentQuestion,
    currentAnswer,
  };
}
