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
        // Existing CSS variables (if defined in CSS)
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Custom colors for the podcast theme
        primary: "#2E3A59",       // deep blue, ideal for backgrounds
        accent: "#DAA520",        // gold for accents
        textPrimary: "#FFFFFF",   // white for primary text
        textSecondary: "#B0B0B0", // gray for subtitles and descriptions
      },
    },
  },
  plugins: [],
};

export default config;
