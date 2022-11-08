/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myOrange: 'hsl(26, 100%, 55%)',
        myPaleOrange: 'hsl(25, 100%, 94%)',
        myVeryDarkBlue: 'hsl(220, 13%, 13%)',
        myDarkGrayishBlue: 'hsl(219, 9%, 45%)',
        myGrayishBlue: 'hsl(220, 14%, 75%)',
        myLightGrayishBlue: 'hsl(223, 64%, 98%)',
        myWhite: 'hsl(0, 0%, 100%)',
        myBlack: 'hsl(0, 0%, 0%)'
      },
    },
  },
  plugins: [],
}
