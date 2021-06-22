module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
  darkMode: false,
  theme: {
    extend: {
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