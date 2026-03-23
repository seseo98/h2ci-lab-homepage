import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F6A700",
          red: "#A61955",
          crimson: "#A61955",
          light: "#FFF5EE",
          soft: "#FFF8F3",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #F6A700 0%, #CE602A 35%, #A61955 100%)",
        "brand-gradient-subtle": "linear-gradient(135deg, #FFF5EE 0%, #FFF0F5 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
