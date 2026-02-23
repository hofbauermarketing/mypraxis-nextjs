/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d4fd6',
        secondary: '#3b62e8',
        accent: '#ff8a00',
        dark: '#1a202c',
        light: '#f7fafc',
      },
    },
  },
  plugins: [],
}
