// tailwind.config.js
import { nextui } from "@nextui-org/react"; // Ajusta según la disponibilidad y correcta importación

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Asegúrate de que esta ruta sea correcta
  ],
  theme: {
    extend: {
      boxShadow: {
        "7xl": "0px 1px 21px -1px rgba(0,0,0,0.7)",
      },
      spacing: {
        15: "15%",
        85: "85%",
        140: "32rem",
      },
      colors: {
        verdeFondo: "#2BD99A",
        verdePie: "#006F76",
      },
    },
  },
  darkMode: "class", // Habilita el modo oscuro mediante la clase "dark"
  plugins: [nextui()], // Asegúrate de que esto esté correctamente configurado según NextUI
};
