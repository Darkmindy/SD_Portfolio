const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'], 
        'mono': ['Inter', 'monospace'], 
        'cursive': ['Nanum Pen Script', 'cursive', 'Georgia', ...defaultTheme.fontFamily.serif], 
      },
    },
  },
  plugins: [],
}