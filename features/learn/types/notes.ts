export enum Instrument {
  Piano = 'piano',
  Guitar = 'guitar',
}

export type NoteName = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
export type NoteModifier = '#' | 'b';

export type Note = {
  note: NoteName;
  modifier?: NoteModifier;
  octave: number;
  filename: string;
  frequency: number;
};

export enum Interval {
  Unison = 'P1',
  MinorSecond = 'm2',
  MajorSecond = 'M2',
  MinorThird = 'm3',
  MajorThird = 'M3',
  PerfectFourth = 'P4',
  Tritone = 'TT',
  PerfectFifth = 'P5',
  MinorSixth = 'm6',
  MajorSixth = 'M6',
  MinorSeventh = 'm7',
  MajorSeventh = 'M7',
  Octave = 'P8',
}

export const IntervalToSemitone: Record<Interval, number> = {
  [Interval.Unison]: 0,
  [Interval.MinorSecond]: 1,
  [Interval.MajorSecond]: 2,
  [Interval.MinorThird]: 3,
  [Interval.MajorThird]: 4,
  [Interval.PerfectFourth]: 5,
  [Interval.Tritone]: 6,
  [Interval.PerfectFifth]: 7,
  [Interval.MinorSixth]: 8,
  [Interval.MajorSixth]: 9,
  [Interval.MinorSeventh]: 10,
  [Interval.MajorSeventh]: 11,
  [Interval.Octave]: 12,
};

export enum IntervalType {
  Ascending = 'ascending',
  Descending = 'descending',
}

export type NoteAndInterval = {
  note: Note;
  interval: Interval;
  intervalType: IntervalType;
};

export enum Tone {
  High = 'High',
  Low = 'Low',
}

export enum IntervalComparison {
  Higher = 'Higher',
  Lower = 'Lower',
  Same = 'Same',
}

export const Notes: Note[] = [
  // C notes (C1 to C8)
  { note: 'C', octave: 1, filename: 'C1.mp3', frequency: 32.7 },
  { note: 'C', octave: 2, filename: 'C2.mp3', frequency: 65.41 },
  { note: 'C', octave: 3, filename: 'C3.mp3', frequency: 130.81 },
  { note: 'C', octave: 4, filename: 'C4.mp3', frequency: 261.63 },
  { note: 'C', octave: 5, filename: 'C5.mp3', frequency: 523.25 },
  { note: 'C', octave: 6, filename: 'C6.mp3', frequency: 1046.5 },
  { note: 'C', octave: 7, filename: 'C7.mp3', frequency: 2093.0 },
  { note: 'C', octave: 8, filename: 'C8.mp3', frequency: 4186.01 },

  // D♭/C# notes
  { note: 'C', modifier: '#', octave: 1, filename: 'Db1.mp3', frequency: 34.65 },
  { note: 'C', modifier: '#', octave: 2, filename: 'Db2.mp3', frequency: 69.3 },
  { note: 'C', modifier: '#', octave: 3, filename: 'Db3.mp3', frequency: 138.59 },
  { note: 'C', modifier: '#', octave: 4, filename: 'Db4.mp3', frequency: 277.18 },
  { note: 'C', modifier: '#', octave: 5, filename: 'Db5.mp3', frequency: 554.37 },
  { note: 'C', modifier: '#', octave: 6, filename: 'Db6.mp3', frequency: 1108.73 },
  { note: 'C', modifier: '#', octave: 7, filename: 'Db7.mp3', frequency: 2217.46 },

  // D notes
  { note: 'D', octave: 1, filename: 'D1.mp3', frequency: 36.71 },
  { note: 'D', octave: 2, filename: 'D2.mp3', frequency: 73.42 },
  { note: 'D', octave: 3, filename: 'D3.mp3', frequency: 146.83 },
  { note: 'D', octave: 4, filename: 'D4.mp3', frequency: 293.66 },
  { note: 'D', octave: 5, filename: 'D5.mp3', frequency: 587.33 },
  { note: 'D', octave: 6, filename: 'D6.mp3', frequency: 1174.66 },
  { note: 'D', octave: 7, filename: 'D7.mp3', frequency: 2349.32 },

  // E♭/D# notes
  { note: 'D', modifier: '#', octave: 1, filename: 'Eb1.mp3', frequency: 38.89 },
  { note: 'D', modifier: '#', octave: 2, filename: 'Eb2.mp3', frequency: 77.78 },
  { note: 'D', modifier: '#', octave: 3, filename: 'Eb3.mp3', frequency: 155.56 },
  { note: 'D', modifier: '#', octave: 4, filename: 'Eb4.mp3', frequency: 311.13 },
  { note: 'D', modifier: '#', octave: 5, filename: 'Eb5.mp3', frequency: 622.25 },
  { note: 'D', modifier: '#', octave: 6, filename: 'Eb6.mp3', frequency: 1244.51 },
  { note: 'D', modifier: '#', octave: 7, filename: 'Eb7.mp3', frequency: 2489.02 },

  // E notes
  { note: 'E', octave: 1, filename: 'E1.mp3', frequency: 41.2 },
  { note: 'E', octave: 2, filename: 'E2.mp3', frequency: 82.41 },
  { note: 'E', octave: 3, filename: 'E3.mp3', frequency: 164.81 },
  { note: 'E', octave: 4, filename: 'E4.mp3', frequency: 329.63 },
  { note: 'E', octave: 5, filename: 'E5.mp3', frequency: 659.26 },
  { note: 'E', octave: 6, filename: 'E6.mp3', frequency: 1318.51 },
  { note: 'E', octave: 7, filename: 'E7.mp3', frequency: 2637.02 },

  // F notes
  { note: 'F', octave: 1, filename: 'F1.mp3', frequency: 43.65 },
  { note: 'F', octave: 2, filename: 'F2.mp3', frequency: 87.31 },
  { note: 'F', octave: 3, filename: 'F3.mp3', frequency: 174.61 },
  { note: 'F', octave: 4, filename: 'F4.mp3', frequency: 349.23 },
  { note: 'F', octave: 5, filename: 'F5.mp3', frequency: 698.46 },
  { note: 'F', octave: 6, filename: 'F6.mp3', frequency: 1396.91 },
  { note: 'F', octave: 7, filename: 'F7.mp3', frequency: 2793.83 },

  // G♭/F# notes
  { note: 'F', modifier: '#', octave: 1, filename: 'Gb1.mp3', frequency: 46.25 },
  { note: 'F', modifier: '#', octave: 2, filename: 'Gb2.mp3', frequency: 92.5 },
  { note: 'F', modifier: '#', octave: 3, filename: 'Gb3.mp3', frequency: 185 },
  { note: 'F', modifier: '#', octave: 4, filename: 'Gb4.mp3', frequency: 370 },
  { note: 'F', modifier: '#', octave: 5, filename: 'Gb5.mp3', frequency: 740 },
  { note: 'F', modifier: '#', octave: 6, filename: 'Gb6.mp3', frequency: 1480 },
  { note: 'F', modifier: '#', octave: 7, filename: 'Gb7.mp3', frequency: 2960 },

  // G notes
  { note: 'G', octave: 1, filename: 'G1.mp3', frequency: 48.99 },
  { note: 'G', octave: 2, filename: 'G2.mp3', frequency: 97.99 },
  { note: 'G', octave: 3, filename: 'G3.mp3', frequency: 195.99 },
  { note: 'G', octave: 4, filename: 'G4.mp3', frequency: 391.99 },
  { note: 'G', octave: 5, filename: 'G5.mp3', frequency: 783.99 },
  { note: 'G', octave: 6, filename: 'G6.mp3', frequency: 1567.98 },
  { note: 'G', octave: 7, filename: 'G7.mp3', frequency: 3135.96 },

  // A♭/G# notes
  { note: 'G', modifier: '#', octave: 1, filename: 'Ab1.mp3', frequency: 51.91 },
  { note: 'G', modifier: '#', octave: 2, filename: 'Ab2.mp3', frequency: 103.83 },
  { note: 'G', modifier: '#', octave: 3, filename: 'Ab3.mp3', frequency: 207.65 },
  { note: 'G', modifier: '#', octave: 4, filename: 'Ab4.mp3', frequency: 415.3 },
  { note: 'G', modifier: '#', octave: 5, filename: 'Ab5.mp3', frequency: 830.61 },
  { note: 'G', modifier: '#', octave: 6, filename: 'Ab6.mp3', frequency: 1661.22 },
  { note: 'G', modifier: '#', octave: 7, filename: 'Ab7.mp3', frequency: 3322.44 },

  // A notes
  { note: 'A', octave: 0, filename: 'A0.mp3', frequency: 27.5 },
  { note: 'A', octave: 1, filename: 'A1.mp3', frequency: 55 },
  { note: 'A', octave: 2, filename: 'A2.mp3', frequency: 110 },
  { note: 'A', octave: 3, filename: 'A3.mp3', frequency: 220 },
  { note: 'A', octave: 4, filename: 'A4.mp3', frequency: 440 },
  { note: 'A', octave: 5, filename: 'A5.mp3', frequency: 880 },
  { note: 'A', octave: 6, filename: 'A6.mp3', frequency: 1760 },
  { note: 'A', octave: 7, filename: 'A7.mp3', frequency: 3520 },

  // B♭/A# notes
  { note: 'A', modifier: '#', octave: 0, filename: 'Bb0.mp3', frequency: 24.5 },
  { note: 'A', modifier: '#', octave: 1, filename: 'Bb1.mp3', frequency: 58.27 },
  { note: 'A', modifier: '#', octave: 2, filename: 'Bb2.mp3', frequency: 116.54 },
  { note: 'A', modifier: '#', octave: 3, filename: 'Bb3.mp3', frequency: 233.08 },
  { note: 'A', modifier: '#', octave: 4, filename: 'Bb4.mp3', frequency: 466.16 },
  { note: 'A', modifier: '#', octave: 5, filename: 'Bb5.mp3', frequency: 932.33 },
  { note: 'A', modifier: '#', octave: 6, filename: 'Bb6.mp3', frequency: 1864.66 },
  { note: 'A', modifier: '#', octave: 7, filename: 'Bb7.mp3', frequency: 3729.31 },

  // B notes
  { note: 'B', octave: 0, filename: 'B0.mp3', frequency: 29.14 },
  { note: 'B', octave: 1, filename: 'B1.mp3', frequency: 61.74 },
  { note: 'B', octave: 2, filename: 'B2.mp3', frequency: 123.47 },
  { note: 'B', octave: 3, filename: 'B3.mp3', frequency: 246.94 },
  { note: 'B', octave: 4, filename: 'B4.mp3', frequency: 493.88 },
  { note: 'B', octave: 5, filename: 'B5.mp3', frequency: 987.77 },
  { note: 'B', octave: 6, filename: 'B6.mp3', frequency: 1975.53 },
  { note: 'B', octave: 7, filename: 'B7.mp3', frequency: 3951.07 },
];

export const NotesSortedByFrequency = Notes.sort((a, b) => a.frequency - b.frequency);
