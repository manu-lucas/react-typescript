// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "7xl": "0px 1px 21px -1px rgba(0,0,0,0.7)",
      },
      spacing: {
        15: "15%",
        85: "85%",
        140: "32rem", // Esto añade una clase de utilidad `w-35rem` para aplicar un ancho de 35rem
      },
      colors: {
        enfasis: "#2BD99A",
        verdeFondo: "#006F76",
        amarillo: "#FFC300",
        naranja:"#FF5733",
        grisBarra : "#FDFEFE",
        grisFondo:"#F1F1F1"
      },
      /*fontFamily: {
        'body': 'Orkney',
      }*/
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
