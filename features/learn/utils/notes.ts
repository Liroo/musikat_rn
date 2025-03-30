import {
  Interval,
  IntervalType,
  Note,
  NoteAndInterval,
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

export function learnGenerateRandomInterval(): NoteAndInterval {
  const intervalArray = Object.values(Interval);

  const intervalIndex = Math.floor(Math.random() * intervalArray.length);
  const intervalType = Math.random() < 0.5 ? IntervalType.Ascending : IntervalType.Descending;

  let noteIndex: number;
  if (intervalType === IntervalType.Ascending) {
    const maxNoteIndex = NotesSortedByFrequency.length - intervalIndex - 1;
    noteIndex = Math.floor(Math.random() * maxNoteIndex);
  } else {
    const minNoteIndex = intervalIndex;
    const maxNoteIndex = NotesSortedByFrequency.length;
    noteIndex = Math.floor(Math.random() * (maxNoteIndex - minNoteIndex)) + minNoteIndex;
  }

  const note = NotesSortedByFrequency[noteIndex];

  return {
    note,
    interval: intervalArray[intervalIndex],
    intervalType,
  };
}

export function learnGetResultingNoteFromNoteAndInterval(noteAndInterval: NoteAndInterval): Note {
  const { note, interval, intervalType } = noteAndInterval;

  const intervalArray = Object.values(Interval);
  const intervalIndex = intervalArray.findIndex((i) => i === interval);

  const noteIndex = NotesSortedByFrequency.findIndex(
    (n) => n.note === note.note && n.octave === note.octave && n.modifier === note.modifier
  );

  const resultingNoteIndex =
    noteIndex + (intervalType === IntervalType.Ascending ? +1 : -1) * intervalIndex;

  return NotesSortedByFrequency[resultingNoteIndex];
}
