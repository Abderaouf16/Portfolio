/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#282928',
      },
      fontFamily:{
        rubik: ['rubik', 'sans-serif']
      },
      screens: {
        'max-768px' : { 'max': '768px'}
      }
    },
  },
  plugins: [],
}
