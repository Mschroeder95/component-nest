import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-1": "#22577a",
        "light-2": "#38a3a5",
        "light-3": "#57cc99",
        "light-4": "#80ed99",
        "light-5": "#c7f9cc",
        "light-6": "#ffffff",
        "dark-1": "#0d1b2a",
        "dark-2": "#1b263b",
        "dark-3": "#415a77",
        "dark-4": "#778da9",
        "dark-5": "#778da9",
        "dark-6": "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
