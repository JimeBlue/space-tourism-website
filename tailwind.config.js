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
        primary: 'rgb(208, 214, 249)',
        black: '#0B0D17',
      },
      screens: {
        sm: '426px',
      },
      letterSpacing: {
        widest: '4px',
      },
    },
  },
  plugins: [],
}
