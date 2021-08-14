const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url(img/hero-bg.png)",
        'quienesSomos-bg': "url(img/quienesSomos-bg.png)",
        'modoUso-bg': "url(img/modoUso-bg.png)"
      }),

      colors: {
        primary: '#DD0040',
        'primary-dark': '#ad0031',
        secondary: '#96A911',
        'secondary-dark': '#70800d',
        black1: '#111111',
        black95: '#000000f2',
        black85: '#000000d9',
        black60: '#00000099',
        black30: '#1111114d'
      },

      screens: {
        '2xl': '1400px',
        '3xl': '1700px'
      },

      zIndex: {
        '-10': '-10',
       }
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
            maxWidth: '1350px',
          },
          '@screen 3xl': {
            maxWidth: '1550px',
          },
        }
      })
    }
  ],
};
