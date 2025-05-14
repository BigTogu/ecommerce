import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        textPrimary: "#000000",
        textSecondary: "#FFFFFF",
        textTertiary: "#646464",
        accent: "#252525",
        hover: "#BEAF87",
      },
      fontFamily: {
        display: ["var(--font-barlow)"],
        serif: ["var(--font-playfair)"],
        base: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
