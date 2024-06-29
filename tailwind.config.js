/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: {
          brown: '#6E4F32',
          homeColor: '#D9C9BA',
          buttonColor: '#9B5A1D',
          now_trending: '#9D2E41',
        },
      },
    },
  },
  plugins: [],
}