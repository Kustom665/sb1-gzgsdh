/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kustom: {
          purple: '#6B21A8',
          gold: '#FFB800',
          black: '#111111'
        }
      }
    },
  },
  plugins: [],
};