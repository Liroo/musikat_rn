import { Asset } from 'expo-asset';
import * as Crypto from 'expo-crypto';
import { AudioBuffer, AudioBufferSourceNode, AudioContext } from 'react-native-audio-api';

import { Instrument, Note } from '@/features/learn/types/notes';
import { guitarAudioFiles, pianoAudioFiles } from '@/features/learn/utils/instruments';

type PR<T> = Partial<Record<string, T>>;

class InstrumentSound {
  private audioContext = new AudioContext();
  private bufferMap: PR<AudioBuffer> = {};
  private instrument: Instrument;
  private playingNote: PR<AudioBufferSourceNode> = {};

  constructor(instrument: Instrument) {
    this.instrument = instrument;
  }

  async loadInstrument() {
    const sourceList = this.instrument === Instrument.Piano ? pianoAudioFiles : guitarAudioFiles;

    const audioFiles = await Asset.loadAsync(sourceList.map((file) => file[1]));

    for (let i = 0; i < audioFiles.length; i++) {
      const file = audioFiles[i];
      const fileName = sourceList[i][0];
      this.bufferMap[fileName] = await this.audioContext.decodeAudioDataSource(file.localUri!);
    }
  }

  playNote(note: Note): AudioBufferSourceNode | undefined {
    const key = [note.note, note.octave, note.modifier, Crypto.randomUUID()].join('.');

    const buffer = this.bufferMap[note.filename];

    if (!this.audioContext || !buffer) {
      return;
    }

    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;

    source.connect(this.audioContext.destination);
    source.start();
    source.onended = () => {
      if (this.playingNote[key]) delete this.playingNote[key];
    };

    this.playingNote[key] = source as AudioBufferSourceNode;

    return source;
  }

  playNotes(notes: Note[], delay: number = 0) {
    notes.forEach((note, index) => {
      setTimeout(() => this.playNote(note), index * delay);
    });
  }

  stopEveryNote() {
    Object.keys(this.playingNote).forEach((key) => {
      if (this.playingNote[key]) {
        this.playingNote[key].stop();
        delete this.playingNote[key];
      }
    });
  }

  stopNote(note: Note) {
    Object.keys(this.playingNote).forEach((key) => {
      const [noteName, octave, modifier] = key.split('.');

      if (
        noteName === note.note &&
        +octave === note.octave &&
        modifier === note.modifier &&
        this.playingNote[key]
      ) {
        this.playingNote[key].stop();
        delete this.playingNote[key];
      }
    });
  }
}

export const guitarSound = new InstrumentSound(Instrument.Guitar);
export const pianoSound = new InstrumentSound(Instrument.Piano);
