import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#07111F",
        sand: "#0B1728",
        mist: "#0F1D31",
        cloud: "#13253D",
        ink: "#EAF2FF",
        slate: "#AFC0D6",
        brand: "#2CCB8F",
        "brand-dark": "#23B27D",
        accent: "#31C7C0",
        sky: "#4DA3FF"
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "Trebuchet MS", "sans-serif"],
        display: ["Aptos Display", "Aptos", "Trebuchet MS", "sans-serif"]
      },
      boxShadow: {
        panel: "0 28px 80px rgba(0, 0, 0, 0.34)",
        soft: "0 18px 48px rgba(0, 0, 0, 0.26)"
      },
      backgroundImage: {
        "hero-shell":
          "radial-gradient(circle at top left, rgba(49, 199, 192, 0.18), transparent 34%), radial-gradient(circle at 85% 14%, rgba(77, 163, 255, 0.18), transparent 26%), linear-gradient(180deg, rgba(7, 17, 31, 0.98), rgba(11, 23, 40, 0.98))",
        "surface-glow":
          "radial-gradient(circle at top left, rgba(49, 199, 192, 0.08), transparent 28%), linear-gradient(180deg, rgba(15,29,49,0.98), rgba(11,23,40,0.98))"
      }
    }
  },
  plugins: []
};

export default config;
