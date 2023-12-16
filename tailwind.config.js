/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'backDrop': '4px 4px 0px black',
        'comboBoxBackDrob': '3px 2px 0px black'
      },
      colors: {
        'main': '#A388EE',
        'accentAqua': '#87CEEB',
        'accentGreen': '#90EE90',
        'accentYellow': '#F4D738',
        'comboBoxBlue': '#DAF5F0',
        'comboBoxBlueHover': '#dbebe5'
      }
    },
    fontFamily: {
      'LexendMega': ['"Lexend Mega"', 'sans-serif'],
      'CourierPrime': ['"Courier Prime"', 'monospace']
    }
  },
  plugins: [],
}

