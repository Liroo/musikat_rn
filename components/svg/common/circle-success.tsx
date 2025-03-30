import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg';

export default function SvgCircleSuccess({ ...rest }: SvgProps) {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...rest}>
      <G clipPath="url(#clip0_5_809)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 15C5 9.47715 9.47715 5 15 5C20.5228 5 25 9.47715 25 15C25 20.5228 20.5228 25 15 25C9.47715 25 5 20.5228 5 15ZM19.1639 13.2216C19.519 12.8665 19.519 12.2909 19.1639 11.9359C18.8089 11.5809 18.2333 11.5809 17.8783 11.9359L13.5827 16.2315L12.0508 14.6995C11.6958 14.3445 11.1202 14.3445 10.7652 14.6995C10.4101 15.0546 10.4101 15.6302 10.7652 15.9852L12.9399 18.1599L12.9541 18.1741C13.3091 18.5291 13.8847 18.5291 14.2397 18.1741C14.2859 18.1279 14.3261 18.0779 14.3603 18.0252L19.1639 13.2216Z"
          fill="#CFFF5E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5_809">
          <Rect width="20" height="20" fill="white" transform="translate(5 5)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
