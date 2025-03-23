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
  ...props
}: TextProps & {
  className?: string;
  variant?: UITextVariant;
}) {
  return <Text className={twMerge(className, textVariants[variant])} {...props} />;
}
