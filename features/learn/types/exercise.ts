export enum ExerciseState {
  Idle = 'idle',
  Active = 'active',
  Completed = 'completed',
}

export type ExerciseQuestion = {
  id: string;
};

export type ExerciseAnswer = {
  id: string;
  questionId: string;
  time: number;
  isCorrect: boolean;
};

export type ExerciseData<Q extends ExerciseQuestion = any, A extends ExerciseAnswer = any> = {
  currentQuestionIndex: number;
  questions: Q[];

  answers: A[];
  correctAnswers: number;

  state: ExerciseState;

  settings?: {
    nbQuestions?: number;
  } & Record<string, any>;
};

export enum ExerciseType {
  PitchComparison = 'pitchComparison',
  NoteAndInterval = 'noteAndInterval',
  IntervalComparison = 'intervalComparison',
  FindInterval = 'findInterval',
}

export abstract class Exercise<Q extends ExerciseQuestion, A extends ExerciseAnswer> {
  abstract type: ExerciseType;

  generateEmptyData(): ExerciseData<Q, A> {
    return {
      currentQuestionIndex: 0,
      questions: [],
      answers: [],
      correctAnswers: 0,
      state: ExerciseState.Idle,
    };
  }

  abstract generateData(): ExerciseData<Q, A>;
  abstract generateQuestion(): Q;
  abstract generateQuestions(settings: Record<string, any>): Q[];
  abstract verifyAnswer(question: Q, answer: Omit<A, 'isCorrect'>): boolean;
}

// export type ExercisePitchComparison = {
//   questions: {
//     notes: [Note, Note];
//     tone: Tone;
//   }[];

//   answers: {
//     noteIndex: number;
//     time: number;
//   }[];

//   correctAnswers: number;
// };

// // Interval comparison
// export type ExerciseIntervalComparison = {
//   questions: {
//     noteAndIntervals: [NoteAndInterval, NoteAndInterval];
//   }[];

//   answers: {
//     intervalComparison: IntervalComparison;
//     time: number;
//   }[];

//   correctAnswers: number;
// };

// // Find interval
// export type ExerciseFindInterval = {
//   nbChoices: number;
//   questions: {
//     noteAndInterval: NoteAndInterval;
//   }[];
//   answers: {
//     interval: Interval;
//     time: number;
//   }[];

//   correctAnswers: number;
// };

// // Note and interval
// export type ExerciseNoteAndInterval = {
//   nbChoices: number;
//   questions: {
//     noteAndInterval: NoteAndInterval;
//   }[];
//   answers: {
//     note: Note;
//     time: number;
//   }[];

//   correctAnswers: number;
// };
