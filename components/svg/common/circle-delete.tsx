import Svg, { Path, SvgProps } from 'react-native-svg';

export default function SvgCircleDelete({ ...rest }: SvgProps) {
  return (
    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none" {...rest}>
      <Path
        d="M7.53667 10.7825L9.3425 12.5883L9.33083 12.5767L13.405 8.5025M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
