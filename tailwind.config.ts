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
        background: "#0A0A0A",
        cream: "#F3EFE6",
        "accent-lime": "#C6FF3D",
        "accent-violet": "#5B4CFF",
        "text-primary": "#F5F5F0",
        "text-secondary": "#8A8A8A",
        "ink-primary": "#1A1712",
        "ink-secondary": "#6B6255",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
