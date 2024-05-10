/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [`./public/**/*.{html,js}`],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IRANSans"],
      },
      colors: {
        white: "#ffff",
        black: "#000",
        smartgymlight: "#DDE4FE",
        smartgymprimary: "#232441",
        smartgymprimarydark: "#19192E",
        smartgymsecodary: "#52559f",
        smartgymyellow: "#e7fe58",
        smartgymbgfreeze: "rgba(90, 90, 90, 0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
