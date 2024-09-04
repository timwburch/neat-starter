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
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
