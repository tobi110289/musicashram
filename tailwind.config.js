const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      orange: "#AB804F",
      grey: colors.coolGray,
      black: colors.black,
      white: colors.warmGray,
      red: colors.red
    },
    extend: {
      backgroundImage: theme => ({
        'img1': "url('/images/background-1.webp')",
        'img2': "url('/images/background-2.webp')",
        'img3': "url('/images/background-3.webp')",
        'img4': "url('/images/background-4.webp')",
        'img5': "url('/images/background-5.webp')",
        'img6': "url('/images/background-6.webp')",
        'img7': "url('/images/background-7.webp')",
        'img8': "url('/images/background-8.webp')",
        'img9': "url('/images/background-9.webp')",
        'img10': "url('/images/background-10.webp')",
        'img11': "url('/images/background-11.webp')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
