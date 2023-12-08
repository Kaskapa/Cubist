/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main': '#A388EE',
        'accentAqua': '#87CEEB'
      }
    },
    fontFamily: {
      'LexendMega': ['"Lexend Mega"', 'sans-serif']
    }
  },
  plugins: [],
}

