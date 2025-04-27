/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        vietnam: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        white: '#ffffff',
        grey: '#f1f2f2',
        lightpurple: '#e9e2ee',
        darkpurple: '#a99abd',
        whitepurple: '#faf7ff',
        lilac: '#d6d6e9',
        green: '#cbe6c0',
        pink: '#eedbe6',
      },
    },
  },
  plugins: [],
}
