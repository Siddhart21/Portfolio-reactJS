/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#f5f3f1', // Add custom color
        'button-color':'#5BCFD5',
        'blue-back':'#d1eafa',
        'dark-blue':'#3f6c88',
        'card':'#dfefd7',
        'Text':'#00000080',
        'skills':'#b3d9a0',
        'ligth-blue':'#90d8f4',
        'newblue':'#1789a3',
        'card2':'#fad1d1',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        lustria: ['Lustria', 'serif'],
        style:   ['Oooh Baby', 'cursive']
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.scroll-smooth': {
        scrollBehavior: 'smooth',
      },
    });
  },],
}


// #fbfaf8