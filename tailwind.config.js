/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3ab8',
        secondary: '#2a50cc',
        accent: '#ff8a00',
        dark: '#1a202c',
        light: '#f7fafc',
      },
    },
  },
  plugins: [],
}
