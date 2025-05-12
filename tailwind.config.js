/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        vietnam: ['Be Vietnam Pro', 'sans-serif'],
      },
      colors: {
        black: '#4c4654',
        white: '#ffffff',
        grey: '#f1f2f2',
        lightpurple: '#e9e2ee',
        darkpurple: '#a99abd',
        whitepurple: '#faf7ff',
        lilac: '#d6d6e9',
        green: '#cbe6c0',
        pink: '#eedbe6',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
