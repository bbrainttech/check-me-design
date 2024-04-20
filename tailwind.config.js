/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'macondo': 'var(--font-macondo)',
        'inter': 'var(--font-inter)',
      },
      colors:{
        primary:{
          DEFAULT:"hsla(var(--primary))",
          forground:"hsla(var(--primary-foreground))",
        },
        background:"hsla(var(--background))",
      }
    },
  },
  plugins: [],
}

