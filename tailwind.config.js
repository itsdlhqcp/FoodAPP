/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#333cc",
        red: "#e60000",
        secondary: "#555",
        primaryBG: "#f2f2f2"
      },
      fontFamily:{
        "primary" : ["Fredoka", "sans-serif"]
      }
    },
  },
  plugins: [],
}

