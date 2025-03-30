// eslint-disable-next-line prettier/prettier
import '@formatjs/intl-getcanonicallocales/polyfill';
// eslint-disable-next-line prettier/prettier
import '@formatjs/intl-locale/polyfill';
// eslint-disable-next-line prettier/prettier
import '@formatjs/intl-pluralrules/polyfill-force';
// eslint-disable-next-line prettier/prettier
import '@formatjs/intl-pluralrules/locale-data/en';

import '@/assets/css/global.css';
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from '@expo-google-fonts/inter';
import { BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { cssInterop } from 'nativewind';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import Svg from 'react-native-svg';
import { IntlProvider } from 'use-intl';

import MonumentExtended_400Regular from '@/assets/fonts/MonumentExtended-Regular.otf';
import StoreProvider from '@/components/providers/store';
import UIToaster from '@/components/ui/toaster';
import locales from '@/locales';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

SplashScreen.preventAutoHideAsync();

cssInterop(Image, { className: 'style' });
cssInterop(Svg, { className: 'style' });
cssInterop(LinearGradient, { className: 'style' });
cssInterop(BottomSheetView, { className: 'style' });

export default function Layout() {
  const [loaded, error] = useFonts({
    // Inter
    Inter_thin: Inter_100Thin,
    Inter_extralight: Inter_200ExtraLight,
    Inter_light: Inter_300Light,
    Inter_regular: Inter_400Regular,
    Inter_medium: Inter_500Medium,
    Inter_semibold: Inter_600SemiBold,
    Inter_bold: Inter_700Bold,
    Inter_extrabold: Inter_800ExtraBold,
    Inter_black: Inter_900Black,
    // Monument Extended
    MonumentExtended_regular: MonumentExtended_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      setTimeout(() => SplashScreen.hideAsync(), 1000);
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <IntlProvider messages={locales['fr']} locale="fr">
      <StoreProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <BottomSheetModalProvider>
            <Slot />
          </BottomSheetModalProvider>
          <UIToaster />
        </GestureHandlerRootView>
      </StoreProvider>
    </IntlProvider>
  );
}
