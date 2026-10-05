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
        ivory: "#F2EEE6",
        midnight: "#16222F",
        "midnight-deep": "#0F1820",
        gold: "#9C7C4A",
        "gold-light": "#C3A77C",
        "gold-dark": "#7A5F38",
        red: "#8E2622",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        ui: ["var(--font-ui)", "sans-serif"],
        sans: ["var(--font-ui)", "sans-serif"],
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.2",
        normal: "1.25",
        relaxed: "1.3",
        body: "1.6",
        loose: "1.7",
      },
    },
  },
  plugins: [],
};

export default config;
