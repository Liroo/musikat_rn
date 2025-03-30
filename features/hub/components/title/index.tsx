import { useTranslations } from 'use-intl';

import UIRichText from '@/components/ui/richText';
import UIText from '@/components/ui/text';

export default function HubTitle({ tKey }: { tKey: string }) {
  const t = useTranslations();

  return (
    <UIText className="mt-[20px] text-[40px]">
      <UIRichText>{(tags) => t.rich(tKey, tags)}</UIRichText>
    </UIText>
  );
}
