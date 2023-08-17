const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundColor: {
        orange: '#f78b04',
        blue: '#35B3EB',
      },
      textColor: {
        orange: '#808080',
        blue: '#35B3EB',
        white: '#ffffff',
      },
      spacing: {
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
        7: '7rem',
        8: '8rem',
        9: '9rem',
        10: '10rem',
        11: '11rem',
        12: '12rem',
        13: '13rem',
        14: '14rem',
        15: '15rem',
        16: '16rem',
        17: '17rem',
        18: '18rem',
        19: '19rem',
        20: '20rem',
        21: '21rem',
        22: '22rem',
        23: '23rem',
        24: '24rem',
        25: '25rem',
      },
    },
  },
  plugins: [],
};
