/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          active: '#1ABC9C'
        },
        black: {
          darkish: '#020202'
        },
        grey: {
          lighterer: '#FAFAFC',
          lightest: '#F9FAFF',
          light: '#FAFAFC',
          lightish: '#8D92A3'
        },
        yellow: {
          DEFAULT: '#FFC700'
        },
        red: {
          danger: '#D9435E'
        }
      },
      fontFamily: {
        'poppins-light': 'Poppins-Light',
        'poppins-regular': 'Poppins-Regular',
        'poppins-medium': 'Poppins-Medium'
      }
    }
  },
  plugins: []
}
