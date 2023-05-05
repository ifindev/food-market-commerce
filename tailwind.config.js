/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          darkish: '#020202'
        },
        grey: {
          lightest: '#F9FAFF',
          light: '#FAFAFC',
          lightish: '#8D92A3'
        },
        yellow: {
          DEFAULT: '#FFC700'
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
