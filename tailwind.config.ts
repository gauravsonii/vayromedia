import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Lora'", 'serif'],
        heading: ["'Orbitron'", 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        vayroOrange: "#FF8C00",
        limeCustom: "#CBF48F",
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(to right, #000000, #FF8C00)',
      },
    },
  },
  plugins: [],
} satisfies Config;
