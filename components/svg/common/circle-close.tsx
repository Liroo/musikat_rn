import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

export default function SvgCircleClose({ fill = 'white', ...rest }: SvgProps) {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...rest}>
      <Rect
        x="30"
        y="30"
        width="30"
        height="30"
        rx="15"
        transform="rotate(-180 30 30)"
        fill="#292B2D"
      />
      <Path
        d="M9.375 9.375L20.625 20.625M20.625 9.375L9.375 20.625"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
