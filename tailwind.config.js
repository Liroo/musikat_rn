/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    './flux/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        primary: {
          DEFAULT: '#1CD02E',
          disabled: '#0B5312',
        },
        grey: {
          0: '#F5F5F5',
          1: '#E7E7E7',
          2: '#C1C1C1',
          3: '#9B9C9D',
          4: '#727377',
          5: '#424242',
          6: '#323333',
          7: '#252525',
          8: '#151515',
          9: '#121212',
        },

        ios: {
          blue: '#007AFF',
          green: '#4CD964',
          indigo: '#5856D6',
          orange: '#FF9500',
          pink: '#FF2D55',
          purple: '#AF52DE',
          red: '#FF3B30',
          teal: '#5AC8FA',
          yellow: '#FFCC00',
        },

        communicative: {
          positive: '#1CD02E',
          negative: '#D01C1C',
          informative: '#D0A31C',
          notification: '#1C64D0',
        },
      },
      fontFamily: {},

      fontSize: {
        headline1: ['28px'],
        headline2: ['24px'],
        headline3: ['20px'],
        headline4: ['18px'],

        subtitle1: ['18px'],
        subtitle2: ['17px'],
        subtitle3: ['16px'],

        body1: ['17px'],
        body2: ['16px'],
        body3: ['15px'],
        body4: ['14px'],

        details: ['12px'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
