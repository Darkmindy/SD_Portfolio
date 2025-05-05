const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['Inter', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'monospace'],
          'cursive': ['Nanum Pen Script', 'cursive', 'Georgia', ...defaultTheme.fontFamily.serif], 
      },
      colors: {
        'accent-secondary': '#a21caf', // Esempio: un viola scuro
      },
    },
  },
  plugins: [],
}