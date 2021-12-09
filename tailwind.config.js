const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: "#AB804F",
      grey: colors.coolGray,
      black: colors.black,
      white: colors.warmGray,
      red: colors.red
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
