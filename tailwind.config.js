/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ['var(--font-be-vietnam)', 'sans-serif'],
      },
    },
    colors: {
      white: '#ffffff',
      grey: '#f1f2f2',
      lightpurple: '#e9e2ee',
      darkpurple: '#a99abd',
      whitepurple: '#faf7ff',
      pink: '#eedbe6'
    }
  },
  plugins: [],
}
