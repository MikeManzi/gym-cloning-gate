/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'something',
        secondary: {
          100: 'something',
          200: 'something'
        }
      },
      fontFamily: {
        body: ['something']
      }
    },
  },
  plugins: [],
}

