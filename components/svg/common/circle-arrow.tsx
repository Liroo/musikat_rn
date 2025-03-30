import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

export default function SvgCircleArrow({ fill = 'white', ...rest }: SvgProps) {
  return (
    <Svg width="30" height="31" viewBox="0 0 30 31" fill="none" {...rest}>
      <Rect y="0.5" width="30" height="30" rx="15" fill="#292B2D" />
      <Path
        d="M23.0303 16.0303C23.3232 15.7374 23.3232 15.2626 23.0303 14.9697L18.2574 10.1967C17.9645 9.90381 17.4896 9.90381 17.1967 10.1967C16.9038 10.4896 16.9038 10.9645 17.1967 11.2574L21.4393 15.5L17.1967 19.7426C16.9038 20.0355 16.9038 20.5104 17.1967 20.8033C17.4896 21.0962 17.9645 21.0962 18.2574 20.8033L23.0303 16.0303ZM7.5 16.25L22.5 16.25L22.5 14.75L7.5 14.75L7.5 16.25Z"
        fill={fill}
      />
    </Svg>
  );
}
