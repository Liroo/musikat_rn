import { Href, useRouter } from 'expo-router';

import UIPressable, { HapticsType } from '@/components/ui/pressable';
import UIText from '@/components/ui/text';

export default function HubHomeListItem({
  href,
  title,
  description,
  icon,
}: {
  href: Href;
  title: string;
  description: string;
  icon?: string;
}) {
  const router = useRouter();
  const onPress = () => {
    router.push(href);
  };

  return (
    <UIPressable
      className="gap-[6px] rounded-[6px] bg-grey-8 p-[10px] transition-opacity duration-150 active:opacity-80"
      onPress={onPress}
      hapticType={HapticsType.ImpactLight}>
      <UIText variant="body2" className="text-white">
        {icon} {title}
      </UIText>
      <UIText variant="details" className="max-w-[70%] flex-1 text-grey-3">
        {description}
      </UIText>
    </UIPressable>
  );
}
