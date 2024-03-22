/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'abc': ["Press Start 2P", "system-ui"],
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};