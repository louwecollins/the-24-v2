import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#030003",
        paper: "#FFFFFF",
        bone: "#F2F2F2",
        hairline: "#030003",
      },
      fontFamily: {
        display: ["var(--font-display)", "Instrument Serif", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Hubot Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.055em",
        displaytight: "-0.02em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        page: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
