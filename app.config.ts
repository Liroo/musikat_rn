import { ConfigContext, ExpoConfig } from 'expo/config';
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Musikat',
  slug: 'musikat',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'musikat',
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  jsEngine: 'hermes',
  backgroundColor: '#000000',
  ios: {
    runtimeVersion: '0.1.0',
    supportsTablet: true,
    bundleIdentifier: 'com.liroodev.musikat',
    appStoreUrl: 'https://apps.apple.com/app/6743946329',
    googleServicesFile: './credentials/firebase/GoogleService-Info.plist',
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    runtimeVersion: {
      policy: 'appVersion',
    },
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#1CD02E',
        image: './assets/images/icon.png',
        width: 200,
      },
    ],
    // Firebase
    '@react-native-firebase/app',
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
          deploymentTarget: '16.2',
        },
      },
    ],
    // (Not sure) Data persistence redux
    'expo-secure-store',
    // Tracking purpose
    [
      'expo-tracking-transparency',
      {
        userTrackingPermission:
          '$(PRODUCT_NAME) requires tracking permission for analytics purposes',
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: '2283758e-c154-423f-bc3e-351caf9d567b',
    },
  },
  owner: 'liroo',

  updates: {
    url: 'https://u.expo.dev/2283758e-c154-423f-bc3e-351caf9d567b',
  },
});
