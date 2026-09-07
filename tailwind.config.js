/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tertiary-iris': '#6366f1',
        'tertiary-purple': '#a855f7',
        'tertiary-orange': '#f97316',
        'tertiary-gold': '#eab308',
        'tertiary-cream': '#fef08a',
        'ink-0': '#0b0e14',
      },
      fontFamily: {
        display: ['Outfit', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      maxWidth: {
        '360': '90rem',
      },
    },
  },
  plugins: [],
};
