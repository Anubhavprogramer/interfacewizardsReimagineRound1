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
          mystery_nav: '#D6D6D7',
          mystery_nav_text:'#0E0F39',
          mystery_container: '#43434B',
          Science_and_fiction_nav: '#211D1C',
          biography_body:'#E3D5C8',
          sef_help_nav: '#211D1C',
          sef_help_body: '#F8F5EE',
          history_body: '#F5CCB8',
          poetry_nav: '#D9D9D9',
          book_1: '#D3AE81',
        },
      },
    },
  },
  plugins: [],
}