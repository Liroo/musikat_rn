import { Asset } from 'expo-asset';
import { AudioContext } from 'react-native-audio-api';

import { Instrument, Note } from '@/features/learn/types/notes';
import { guitarAudioFiles, pianoAudioFiles } from '@/features/learn/utils/instruments';

type PR<T> = Partial<Record<string, T>>;

const audioContext = new AudioContext();

const bufferMapRef: PR<AudioBuffer> = {};

async function loadInstrument(instrument: Instrument) {
  const sourceList = instrument === Instrument.Piano ? pianoAudioFiles : guitarAudioFiles;

  const audioFiles = await Asset.loadAsync(sourceList.map((file) => file[1]));

  for (let i = 0; i < audioFiles.length; i++) {
    const file = audioFiles[i];
    const fileName = sourceList[i][0];
    bufferMapRef[`${instrument}:${fileName}`] = await audioContext.decodeAudioDataSource(
      file.localUri!
    );
  }
}

loadInstrument(Instrument.Piano);
loadInstrument(Instrument.Guitar);

export function playNote(instrument: Instrument, note: Note) {
  const buffer = bufferMapRef[`${instrument}:${note.filename}`];

  if (!audioContext || !buffer) {
    return;
  }

  const source = audioContext.createBufferSource();
  (source as any).buffer = buffer;

  source.connect(audioContext.destination);
  source.start();
}
