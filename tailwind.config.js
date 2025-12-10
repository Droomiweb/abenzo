/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abenzo: {
          emerald: '#008278',    // The Green Color
          dark: '#050a08',       // The Dark Background
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};