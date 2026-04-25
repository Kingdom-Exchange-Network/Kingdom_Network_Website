import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0D1A",
          dark: "#070912",
          light: "#111527",
          border: "#1C2240",
        },
        gold: {
          DEFAULT: "#D4AF5A",
          light: "#E8C97A",
          dark: "#B8942F",
          muted: "#8A7040",
        },
        cream: {
          DEFAULT: "#F0EAD8",
          muted: "#A09880",
          subtle: "#7A7060",
        },
        tag: {
          teal: "#0D9488",
          purple: "#7C3AED",
          blue: "#2563EB",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(10,13,26,0.6) 0%, rgba(10,13,26,0.97) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
