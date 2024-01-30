/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: [
          'Bellefair',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        sans: [
          'Barlow Condensed',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        // primary color indigo 200. Set in app-config.js since Nuxt UI is being used
        indigo: {
          50: 'rgb(238 242 255)',
          100: 'rgb(224 231 255)',
          200: 'rgb(208, 214, 249)',
          300: 'rgb(165 180 252)',
          400: 'rgb(129 140 248)',
          500: 'rgb(99 102 241)',
          600: 'rgb(79 70 229)',
          700: 'rgb(67 56 202)',
          800: 'rgb(55 48 163)',
          900: 'rgb(49 46 129)',
          950: 'rgb(30 27 75)',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#f8b822',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#5c3411',
        },
        black: '#0B0D17',
      },
      screens: {
        sm: '426px',
      },
      letterSpacing: {
        widest: '4px',
      },
      textDecorationThickness: {
        20: '30px',
      },
    },
  },
  plugins: [],
}
