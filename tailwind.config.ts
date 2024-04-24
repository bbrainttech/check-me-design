import TailwindAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      backgroundImage: {
        radial:
          "radial-gradient(at center, hsla(330,100%,50%,0.3) 0%, transparent 55%)",
      },
      transitionDuration: {
        "20k": "20s",
        "25k": "25s",
        "30k": "30s",
      },
      fontFamily: {
        opensans: "var(--font-opensans)",
        poppins: "var(--font-poppins)",
      },
      colors: {
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        primary: "hsl(var(--primary))",
        foreground: "hsl(var(--foreground))",
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
