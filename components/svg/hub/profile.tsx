import Svg, { Path, SvgProps } from 'react-native-svg';

export default function SvgHubProfile({ fill = 'white', ...rest }: SvgProps) {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...rest}>
      <Path
        d="M6.25 25C6.25 21.875 8.75 19.5 11.75 19.5H18.125C21.25 19.5 23.625 22 23.625 25M18.75 6.5C20.875 8.625 20.875 12 18.75 14C16.625 16 13.25 16.125 11.25 14C9.25 11.875 9.125 8.5 11.25 6.5C13.375 4.5 16.625 4.5 18.75 6.5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
