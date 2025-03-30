import * as Crypto from 'expo-crypto';

import {
  Exercise,
  ExerciseAnswer,
  ExerciseData,
  ExerciseQuestion,
  ExerciseType,
} from '@/features/learn/types/exercise';
import { IntervalToSemitone, NoteAndInterval } from '@/features/learn/types/notes';
import { learnGenerateRandomInterval } from '@/features/learn/utils/notes';

export interface IntervalComparisonQuestion extends ExerciseQuestion {
  intervals: [NoteAndInterval, NoteAndInterval];
  correctIndex: number;
}

export interface IntervalComparisonAnswer extends ExerciseAnswer {
  index: number;
}

export type IntervalComparisonExerciseData = ExerciseData<
  IntervalComparisonQuestion,
  IntervalComparisonAnswer
>;

export class IntervalComparisonExercise extends Exercise<
  IntervalComparisonQuestion,
  IntervalComparisonAnswer
> {
  type = ExerciseType.IntervalComparison;

  generateData(): IntervalComparisonExerciseData {
    return {
      ...super.generateEmptyData(),
      questions: this.generateQuestions({ nbQuestions: 10 }),
    };
  }

  generateQuestion(): IntervalComparisonQuestion {
    const interval1 = learnGenerateRandomInterval();
    let interval2 = learnGenerateRandomInterval();

    while (IntervalToSemitone[interval1.interval] === IntervalToSemitone[interval2.interval]) {
      interval2 = learnGenerateRandomInterval();
    }

    const intervals: [NoteAndInterval, NoteAndInterval] = [interval1, interval2];
    const question: IntervalComparisonQuestion = {
      id: Crypto.randomUUID(),
      intervals,
      correctIndex: 0,
    };

    question.correctIndex = intervals.findIndex((_, index) =>
      this.verifyAnswer(question, { index })
    );

    return question;
  }

  generateQuestions(settings: Record<string, any>): IntervalComparisonQuestion[] {
    const nbQuestions = settings.nbQuestions || 10;

    return Array.from({ length: nbQuestions }, () => this.generateQuestion());
  }

  verifyAnswer(
    question: IntervalComparisonQuestion,
    answer: Partial<IntervalComparisonAnswer> & { index: number }
  ): boolean {
    const { intervals } = question;
    const { index } = answer;

    const correctIndex =
      IntervalToSemitone[intervals[0].interval] > IntervalToSemitone[intervals[1].interval] ? 0 : 1;

    return index === correctIndex;
  }
}
