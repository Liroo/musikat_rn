// eslint-disable-next-line prettier/prettier
import '@formatjs/intl-getcanonicallocales/polyfill';
// eslint-disable-next-line prettier/prettier
import '@formatjs/intl-locale/polyfill';
// eslint-disable-next-line prettier/prettier
import '@formatjs/intl-pluralrules/polyfill-force';
// eslint-disable-next-line prettier/prettier
import '@formatjs/intl-pluralrules/locale-data/en';

import '@/assets/css/global.css';
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
  useEffect(() => {
    setTimeout(() => SplashScreen.hideAsync(), 1000);
  }, []);

  return (
    <IntlProvider messages={locales['fr']} locale="fr">
      <StoreProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="light" />
          <BottomSheetModalProvider>
            <Slot />
          </BottomSheetModalProvider>
          <UIToaster />
        </GestureHandlerRootView>
      </StoreProvider>
    </IntlProvider>
  );
}
