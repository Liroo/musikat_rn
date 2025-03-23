import { ReactNode } from 'react';
import { Text } from 'react-native';

// These tags are available
type Tag = 'br';

type UIRichTextProps = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function UIRichText({ children }: UIRichTextProps) {
  return (
    <>
      {children({
        br: () => <Text>{'\n'}</Text>,
      })}
    </>
  );
}
