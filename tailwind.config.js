// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '7xl': '0px 1px 21px -1px rgba(0,0,0,0.7)',
      },
      colors: {
        'verdeFondo': '#2BD99A',
        'verdePie':'#006F76'
      },

    },
  },
  darkMode: "class",
  plugins: [nextui()]
}