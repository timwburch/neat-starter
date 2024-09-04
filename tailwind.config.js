const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        cormorant: ['"Cormorant"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
