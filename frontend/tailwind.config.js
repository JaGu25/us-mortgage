module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
  darkMode: false,
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      width: {
        '104' : "28rem"
      },
      fontSize: {
        'xss' : "10px",
        '2xxl' : "1.675rem"
      },
      fontFamily: {
        gobold: ['Gobold'],
        mabry: ['Mabry'],
        roboto: ['Roboto']
      },
      colors :{
        main: {
          DEFAULT: "#1f284c"
        },
        seconday: {
          DEFAULT: "#ababab"
        },
        hover: {
          DEFAULT: "#313D6D"
        },
        myred: {
          DEFAULT: "#8d1727"
        }
      },
      borderRadius: {
        "mid": '0.255rem',
        "4xl": "2rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
//