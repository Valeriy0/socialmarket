/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['"helveticaNeue"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: '#ffffff',
        'black-100': 'rgba(0, 0, 0, 0.10)',
        'black-200': 'rgba(0, 0, 0, 0.20)',
        'black-300': 'rgba(0, 0, 0, 0.30)',
        'black-400': 'rgba(0, 0, 0, 0.40)',
        'black-500': 'rgba(0, 0, 0, 0.50)',
        'black-600': 'rgba(0, 0, 0, 0.60)',
        'black-700': 'rgba(0, 0, 0, 0.70)',
        'black-800': 'rgba(0, 0, 0, 0.80)',
        'black-900': 'rgba(0, 0, 0, 0.90)',
        'white-50': 'rgba(255,255,255,.0)',
        'white-100': 'rgba(255,255,255,.1)',
        'white-200': 'rgba(255,255,255,.2)',
        'white-300': 'rgba(255,255,255,.3)',
        'white-400': 'rgba(255,255,255,.4)',
        'white-500': 'rgba(255,255,255,.5)',
        'white-600': 'rgba(255,255,255,.6)',
        'white-700': 'rgba(255,255,255,.7)',
        'white-800': 'rgba(255,255,255,.8)',
      }
    },
   
    
  },
  plugins: [],
}

