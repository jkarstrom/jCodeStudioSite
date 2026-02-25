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
        darkpurple: '#5e4875',
        whitepurple: '#faf7ff',
        lilac: '#d6d6e9',
        // Greens
        green: '#cbe6c0',
        mint: '#c8f0e8',
        sage: '#d4e8d1',
        // Pinks
        pink: '#eedbe6',
        rose: '#f5d5e0',
        blush: '#fce4ec',
        // Blues
        sky: '#d6eaf8',
        powder: '#e3f2fd',
        periwinkle: '#c5cae9',
        // Accents
        peach: '#ffe5d9',
        lavender: '#e8e0f0',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
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
