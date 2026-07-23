/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F8F7F4',
          dark: '#F0EEE8',
        },
        charcoal: {
          DEFAULT: '#2C3E50',
          muted: 'rgba(44, 62, 80, 0.65)',
          subtle: 'rgba(44, 62, 80, 0.4)',
          faint: 'rgba(44, 62, 80, 0.08)',
          border: 'rgba(44, 62, 80, 0.15)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      }
    },
  },
  plugins: [],
}
