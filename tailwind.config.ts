import TailwindAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      colors: {
        accent: "hsl(var(--accent))",
        primary: "hsl(var(--primary))",
        background: "hsl(var(--background))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [TailwindAnimate],
} satisfies Config;
