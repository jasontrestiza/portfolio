/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors:{
      'primaryLight': 'red',
      'primaryDark': '#1b2430',

    },
    backgroundColor:{
      'dark': '#1b2430',
      'light': '#DDDDDD'
    }
  },
  plugins: [],
}
