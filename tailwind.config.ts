import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px", // Small screens (Mobile)
      md: "768px", // Medium screens (Tablet)
      lg: "1024px", // Large screens (Laptop)
      xl: "1280px", // Extra large screens (Desktop)
      "2xl": "1536px", // 2XL screens (Large desktop)
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
