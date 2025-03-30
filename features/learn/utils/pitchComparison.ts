import * as Crypto from 'expo-crypto';

import {
  Exercise,
  ExerciseAnswer,
  ExerciseData,
  ExerciseQuestion,
  ExerciseType,
} from '@/features/learn/types/exercise';
import { Note, NotesSortedByFrequency, Tone } from '@/features/learn/types/notes';
import { learnGetNotesByOctave } from '@/features/learn/utils/notes';

export interface PitchComparisonQuestion extends ExerciseQuestion {
  notes: [Note, Note];
  tone: Tone;
  correctNoteIndex: number;
}

export interface PitchComparisonAnswer extends ExerciseAnswer {
  noteIndex: number;
}

export type PitchComparisonExerciseData = ExerciseData<
  PitchComparisonQuestion,
  PitchComparisonAnswer
>;

export class PitchComparisonExercise extends Exercise<
  PitchComparisonQuestion,
  PitchComparisonAnswer
> {
  type = ExerciseType.PitchComparison;

  generateData(): PitchComparisonExerciseData {
    return {
      ...super.generateEmptyData(),
      questions: this.generateQuestions({ nbQuestions: 10 }),
    };
  }

  generateQuestion(): PitchComparisonQuestion {
    const noteIndex = Math.floor(Math.random() * NotesSortedByFrequency.length);
    const note1 = NotesSortedByFrequency[noteIndex];

    const noteFromSameOctave = learnGetNotesByOctave(note1.octave);
    // generate a note from the same octave but not the same note
    let note2 = noteFromSameOctave[Math.floor(Math.random() * noteFromSameOctave.length)];

    while (note1.note === note2.note) {
      note2 = noteFromSameOctave[Math.floor(Math.random() * noteFromSameOctave.length)];
    }

    const tone = Math.random() < 0.5 ? Tone.High : Tone.Low;

    const notes: [Note, Note] = [note1, note2];
    const question: PitchComparisonQuestion = {
      id: Crypto.randomUUID(),
      notes,
      tone,
      correctNoteIndex: 0,
    };

    question.correctNoteIndex = notes.findIndex((_, index) =>
      this.verifyAnswer(question, { noteIndex: index })
    );

    return question;
  }

  generateQuestions(settings: Record<string, any>): PitchComparisonQuestion[] {
    const nbQuestions = settings.nbQuestions || 10;

    // Use an arrow function to maintain the 'this' context
    return Array.from({ length: nbQuestions }, () => this.generateQuestion());
  }

  verifyAnswer(
    question: PitchComparisonQuestion,
    answer: Partial<PitchComparisonAnswer> & { noteIndex: number }
  ): boolean {
    const { notes, tone } = question;
    const { noteIndex } = answer;

    const noteFrequency = notes[noteIndex].frequency;

    if (tone === Tone.High && notes.some((note) => note.frequency > noteFrequency)) return false;
    if (tone === Tone.Low && notes.some((note) => note.frequency < noteFrequency)) return false;

    return true;
  }
}
