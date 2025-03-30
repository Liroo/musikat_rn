import Svg, { Path, SvgProps } from 'react-native-svg';

export default function SvgHubHome({ fill = 'white', ...rest }: SvgProps) {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...rest}>
      <Path
        d="M5 10.75V26.25H25V10.75M2.5 12.5L15 3.75L27.5 12.5M18.75 26.25V18.75C18.75 17.3625 17.625 16.25 16.25 16.25H13.75C12.3625 16.25 11.25 17.3625 11.25 18.75V26.25"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
