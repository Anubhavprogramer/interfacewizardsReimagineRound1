/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: {
          brown: '#6E4F32',
        },
      },
    },
  },
  plugins: [],
}