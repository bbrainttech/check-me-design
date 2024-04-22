import TailwindAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "400px"
      },
      backgroundImage:{
        'radial':'radial-gradient(at center, hsla(var(--primary)/5) 0%, transparent 50%)'
      },
      transitionDuration:{
        '20k':'20s',
        '25k':'25s',
        '30k':'30s',
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      colors: {
        accent: "hsl(var(--accent))",
        primary: "hsl(var(--primary))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      keyframes: {

      },
      animation: {
      },
    },
  },
  plugins: [TailwindAnimate],
} satisfies Config;
