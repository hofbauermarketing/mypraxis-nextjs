import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',    // Dunkelblau - Vertrauen, Medizin
        secondary: '#2b6cb0',  // Mittelblau
        accent: '#38a169',     // Grün - Förderung, Wachstum
        dark: '#1a202c',
        light: '#f7fafc',
      },
    },
  },
  plugins: [],
}
export default config
