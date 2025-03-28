import { Href } from 'expo-router';
import { ScrollView } from 'react-native';
import { useTranslations } from 'use-intl';

import HubHomeListItem from './item';

type Exercise = {
  id: string;
  icon: string;
};

const EXERCISES: Exercise[] = [
  {
    id: 'pitch_comparison',
    icon: '~',
  },
  {
    id: 'interval_comparison',
    icon: '↔',
  },
  {
    id: 'find_interval_easy',
    icon: '🎵',
  },
  {
    id: 'find_interval_expert',
    icon: '🔥',
  },
  {
    id: 'note_and_interval',
    icon: '🎼',
  },
];

export default function HubHomeList() {
  const t = useTranslations('features.learn');
  return (
    <ScrollView className="flex-1 px-[16px] pt-[10px]" contentContainerClassName="gap-[10px]">
      {EXERCISES.map((exercise) => (
        <HubHomeListItem
          key={exercise.id}
          title={t(`${exercise.id}.title`)}
          description={t(`${exercise.id}.description`)}
          icon={exercise.icon}
          href={`/(app)/(learn)/${exercise.id.replaceAll('_', '-')}` as Href}
        />
      ))}
    </ScrollView>
  );
}
