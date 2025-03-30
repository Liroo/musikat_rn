import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg';

export default function SvgCircleFail({ ...rest }: SvgProps) {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" {...rest}>
      <Rect width="30" height="30" rx="15" fill="white" fillOpacity="0.1" />
      <G clipPath="url(#clip0_8_199)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 15C5 9.46697 9.47721 5 15 5C20.5233 5 25 9.4767 25 15C25 20.5233 20.5233 25 15 25C9.46697 25 5 20.5228 5 15ZM12.6413 11.5536C12.3409 11.2532 11.8538 11.2532 11.5534 11.5536C11.253 11.854 11.253 12.341 11.5534 12.6414L13.9121 15.0001L11.5534 17.3587C11.253 17.6591 11.253 18.1462 11.5534 18.4466C11.8538 18.747 12.3409 18.747 12.6413 18.4466L14.9999 16.0879L17.3586 18.4466C17.659 18.747 18.146 18.747 18.4464 18.4466C18.7468 18.1462 18.7468 17.6591 18.4464 17.3587L16.0878 15.0001L18.4464 12.6414C18.7468 12.341 18.7468 11.854 18.4464 11.5536C18.146 11.2532 17.659 11.2532 17.3586 11.5536L14.9999 13.9122L12.6413 11.5536Z"
          fill="#EE5E37"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8_199">
          <Rect width="20" height="20" fill="white" transform="translate(5 5)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
