import { ExerciseData, ExerciseState } from '@/features/learn/types/exercise';

export function generateDefaultExerciseData(): ExerciseData {
  return {
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    correctAnswers: 0,
    state: ExerciseState.Idle,
  };
}
