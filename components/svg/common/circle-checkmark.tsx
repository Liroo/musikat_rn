import Svg, { Path, SvgProps } from 'react-native-svg';

export default function SvgCircleCheckmark({ ...rest }: SvgProps) {
  return (
    <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...rest}>
      <Path
        d="M12.3583 8.14167L7.64167 12.8583M12.3583 12.8583L7.64167 8.14167M10 18C5.85 18 2.5 14.6425 2.5 10.5C2.5 6.35 5.8575 3 10 3C14.1425 3 17.5 6.3575 17.5 10.5C17.5 14.6425 14.1425 18 10 18Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
