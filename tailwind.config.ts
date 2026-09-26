import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16233F",      // deep navy — primary text & brand
        ink2: "#2C3B5C",     // lighter navy for secondary text
        paper: "#FAF7F1",    // warm neutral background
        paper2: "#F1ECE1",   // slightly deeper warm neutral for panels
        gold: "#AB7D2E",     // muted warm gold accent
        goldSoft: "#E7D9BC", // pale gold for hairlines/highlights
        moss: "#3F6B52",     // soft green — success/active status
        rust: "#9C4A3B",     // muted status color — overdue/attention
        line: "#DDD4C2",     // hairline border color
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "38rem",
      },
    },
  },
  plugins: [],
};
export default config;
