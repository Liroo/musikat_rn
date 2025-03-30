import { useMemo } from 'react';
import { Text, TextProps } from 'react-native';

import { twMerge } from '@/utils/twMerge';

const textVariants = {
  headline1: 'font-extrabold text-headline1',
  headline2: 'font-bold text-headline2',
  headline3: 'font-bold text-headline3',
  headline4: 'font-bold text-headline4',
  subtitle1: 'font-semibold text-subtitle1',
  subtitle2: 'font-semibold text-subtitle2',
  subtitle3: 'font-semibold text-subtitle3',
  body1: 'font-medium text-body1',
  body2: 'font-normal text-body2',
  body3: 'font-normal text-body3',
  body4: 'font-normal text-body4',
  details: 'font-light text-details',
};

export type UITextVariant = keyof typeof textVariants;

export default function UIText({
  className,
  variant = 'body4',
  font = 'inter',
  weight = 'regular',
  ...props
}: TextProps & {
  className?: string;
  variant?: UITextVariant;
  font?: 'inter' | 'monument' | 'system';
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
}) {
  const style = useMemo(() => {
    if (font === 'inter')
      return {
        fontFamily: `Inter_${weight}`,
      };
    if (font === 'monument')
      return {
        fontFamily: `MonumentExtended_${weight}`,
      };
    return {};
  }, [font, weight]);

  return (
    <Text
      className={twMerge(textVariants[variant], 'leading-[1.1] tracking-[-0.02em]', className)}
      style={style}
      {...props}
    />
  );
}
