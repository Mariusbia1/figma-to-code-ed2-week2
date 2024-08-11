/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {

   

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing:{

      '1': '5px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '55px',
      '12': '60px',
      '16': '75px',
      '8': '90px',
      '10':'100px',
      '11':'120px',
      '15':'200px',
      '17':'350px',
      '18':'400px',
      '19':'450px',
      '20':'500px',
      '32':'8rem',
      '36':'9rem',
      '40':'10rem',
      '44':'11rem',
      '48':'12rem',
      '52':'13rem',
      '56':'14rem',
      '60':'15rem',
        
    },
    extend: {
      fontFamily: {
        custom: ['chillax', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}