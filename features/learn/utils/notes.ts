import {
  Interval,
  IntervalType,
  Note,
  Notes,
  NotesSortedByFrequency,
} from '@/features/learn/types/notes';

export function learnGetNoteByNameAndOctave(
  noteName: string,
  octave: number,
  modifier?: string
): Note | undefined {
  return Notes.find(
    (note) =>
      note.note === noteName && note.octave === octave && note.modifier === (modifier || undefined)
  );
}

export function learnGetNotesByOctave(octave: number): Note[] {
  return Notes.filter((note) => note.octave === octave);
}

export function learnFlatNoteToSharpNote(note: Note): Note {
  if (note.note === 'A' && note.modifier === 'b') {
    return { ...note, note: 'G', modifier: '#' };
  }
  if (note.note === 'B' && note.modifier === 'b') {
    return { ...note, note: 'A', modifier: '#' };
  }
  if (note.note === 'C' && note.modifier === 'b') {
    return { ...note, note: 'B', modifier: '#' };
  }
  if (note.note === 'D' && note.modifier === 'b') {
    return { ...note, note: 'C', modifier: '#' };
  }
  if (note.note === 'E' && note.modifier === 'b') {
    return { ...note, note: 'D', modifier: '#' };
  }
  if (note.note === 'F' && note.modifier === 'b') {
    return { ...note, note: 'E', modifier: '#' };
  }
  if (note.note === 'G' && note.modifier === 'b') {
    return { ...note, note: 'F', modifier: '#' };
  }
  return note;
}

export function learnGetIntervalBetweenNotes(
  note1: Note,
  note2: Note
): { semitone: number; interval: Interval; intervalType: IntervalType } {
  const note1Index = NotesSortedByFrequency.findIndex(
    (note) =>
      note.note === note1.note && note.octave === note1.octave && note.modifier === note1.modifier
  );
  const note2Index = NotesSortedByFrequency.findIndex(
    (note) =>
      note.note === note2.note && note.octave === note2.octave && note.modifier === note2.modifier
  );

  const semitone = note2Index - note1Index;

  const intervalArray = Object.values(Interval);
  if (semitone > intervalArray.length) throw new Error('Interval out of range');
  const interval = intervalArray[Math.abs(semitone)];

  return {
    semitone,
    interval,
    intervalType: semitone > 0 ? IntervalType.Ascending : IntervalType.Descending,
  };
}
