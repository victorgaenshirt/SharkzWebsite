import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        darkBlue: "#081e4c",
        blue: "#103d98",
        offBlue: "#5777b6",
        lightBlue: "#b7c4e0",
        lightestBlue: "#e7ebf4",
        red: "#831b1b",
        lightRosa: "#FFF8F9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        customFont: ["CustomFont", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
} satisfies Config

