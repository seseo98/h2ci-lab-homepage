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
          orange: "#F5A01A",
          red: "#C2305A",
          crimson: "#9E1B44",
          light: "#FFF5EE",
          soft: "#FFF8F3",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #F5A01A 0%, #E06020 50%, #C2305A 100%)",
        "brand-gradient-subtle": "linear-gradient(135deg, #FFF5EE 0%, #FFF0F5 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
