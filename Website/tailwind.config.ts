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
        ivory: "#F7F5F0",
        midnight: "#061D37",
        "midnight-deep": "#04152A",
        gold: "#C4A05F",
        "gold-light": "#E4C77D",
        "gold-dark": "#8C6A2D",
        red: "#941715",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
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
