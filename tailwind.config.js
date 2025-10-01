/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0a192f',
        'light-slate': '#a8b2d1',
      },
    },
  },
  plugins: [],
}