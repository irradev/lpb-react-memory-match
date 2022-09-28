/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            JosefinSans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
            Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
         },
         colors: {
            primary: '#ed9728',
            secondary: '#a65e09',
            tertiary: '#faf494',
            strongBrown: '#403121',
            window: '#292830',
         },
         keyframes: {
            appear: {
               '0%': { opacity: '0' },
               '50%': { opacity: '0.5' },
               '100%': { opacity: '1' },
            },
         },
         animation: {
            appear: 'appear 0.7s ease-in forwards',
         },
      },
   },
   plugins: [],
};
