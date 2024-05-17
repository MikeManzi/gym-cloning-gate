/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "12rem",
        "3xl": "16rem",
        "4xl": "20rem",
      },
      margin: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "12rem",
        "3xl": "16rem",
        "4xl": "20rem",
      },
    },
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

