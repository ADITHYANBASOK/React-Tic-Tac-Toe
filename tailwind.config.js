/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-bg': '#1a1a1a',
        'board-bg': '#2a2a2a',
        'square-bg': '#333333',
        'square-hover': '#444444',
        'primary': '#646cff',
        'primary-hover': '#535bf2',
        'winner': '#4caf50',
      },
    },
  },
  plugins: [],
}