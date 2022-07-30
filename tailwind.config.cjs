/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui',],
        'quicksand': ['Quicksand', 'system-ui',],
        'serif': ['ui-serif', 'Georgia',],
        'mono': ['ui-monospace', 'SFMono-Regular',]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          50: '#FBFCFF',
          100: '#CAD8FE',
          200: '#9DB7FE',
          300: '#7599FD',
          400: '#517EFD',
          500: '#3066FD',
          600: '#0240ED',
          700: '#0239D3',
          800: '#0233BC',
          900: '#022DA7',
        },
        secondary: colors.orange,
        gray: colors.stone,
        success: colors.emerald,
        danger: colors.red,
        warning: colors.amber,
        info: colors.teal,
      },
      width: {
        'content': 'fit-content',
      },
      height: {
        'screen-nav': 'calc(100vh - 56px)'
      }
    },
  },
  safelist: [
    'hidden',
  ],
  plugins: [],
}
