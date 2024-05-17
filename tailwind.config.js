/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#a18a4d',
        secondary: {
          100: 'something',
          200: 'something'
        }
      },
      fontFamily: {
        body: ['lato']
      }
    },
  },
  plugins: [],
}

