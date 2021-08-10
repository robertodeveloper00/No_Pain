const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('img/hero-bg.png')",
      }),

      colors: {
        primary: '#DD0040',
        secondary: '#96A911',
        'secondary-dark': '#70800d',
        black1: '#111111',
        black95: '#000000f2',
        black60: '#00000099',
        black30: '#1111114d'
      },

      screens: {
        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
    },

    container: {
      center: true,
    },

    fontFamily: {
      'display': ['"Work Sans"', 'sans-serif'],
      'paragraph': ['Montserrat', 'sans-serif']
    },
  },


  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '798px',
          },
          '@screen lg': {
            maxWidth: '984px',
          },
          '@screen xl': {
            maxWidth: '1240px',
          },
          '@screen 2xl': {
            maxWidth: '1300px',
          },
          '@screen 3xl': {
            maxWidth: '1520px',
          },
        }
      })
    }
  ],
};
