/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
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

