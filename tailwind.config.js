/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0284c7', // Sky-600
          dark: '#0369a1',    // Sky-700
        },
        accent: {
          DEFAULT: '#e11d48', // Rose-600
          hover: '#be123c',   // Rose-700
        },
        neutral: {
          dark: '#111827',    // Gray-900
          light: '#f3f4f6',   // Gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}