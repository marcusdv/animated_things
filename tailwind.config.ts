import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson-red': '#D7263D',
        'oxford-blue': '#02182B',
        'dodger-blue': '#0197F6',
        'lapis-lazuli-blue': '#175676',
        'munsell-blue': '#448FA3',
        'sky-blue': '#68C5DB',
        'icterine-yellow': '#F0EC57',
        'smoky-black': '#0B0A07',
        'lavender-blush': '#F9E9EC',
        'animateless-bg': '#EFD6AC',
      }
    },
  },
  plugins: [],
} satisfies Config;
