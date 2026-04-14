/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
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
      fontSize: {
        // ── Brand Type Scale ──────────────────────────────────────
        // Display: Fredoka Bold — hero headlines, big moments
        'display':    ['clamp(3.5rem, 8vw, 6rem)',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        // Headings: Fredoka Bold — section titles
        'h1':         ['clamp(2.5rem, 5vw, 3.75rem)', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'h2':         ['clamp(2rem, 4vw, 2.75rem)',   { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3':         ['clamp(1.5rem, 3vw, 2rem)',    { lineHeight: '1.25' }],
        'h4':         ['1.25rem',                     { lineHeight: '1.35' }],
        // Body: Be Vietnam Pro — readable, clean
        'body-lg':    ['1.125rem', { lineHeight: '1.75' }],
        'body-base':  ['1rem',     { lineHeight: '1.7'  }],
        'body-sm':    ['0.875rem', { lineHeight: '1.6'  }],
        // UI: Be Vietnam Pro — labels, tags, captions
        'caption':    ['0.8125rem', { lineHeight: '1.5' }],
        'label':      ['0.75rem',   { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'micro':      ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.1em'  }],
      },
      colors: {
        // ── Extended Brand Colors ─────────────────────────────────
        'brand':         '#5e4875',   // primary — darkpurple alias
        'brand-vivid':   '#7B4FA0',   // more saturated CTA purple
        'brand-light':   '#faf7ff',   // whitepurple alias
        'cream':         '#F5F3EE',   // warm off-white backgrounds
        'ink':           '#2d2438',   // near-black for body text
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
