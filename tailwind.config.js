/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070709',
        surface: {
          DEFAULT: '#0d0d11',
          muted: '#14141a',
          border: '#202028',
          card: '#101015',
        },
        accent: {
          DEFAULT: '#ff5500',
          hover: '#ff6c1a',
          glow: 'rgba(255, 85, 0, 0.25)',
          subtle: 'rgba(255, 85, 0, 0.08)',
          cyan: '#06b6d4',
          'cyan-glow': 'rgba(6, 182, 212, 0.2)',
        }
      },
      fontFamily: {
        display: ['Syne', 'Cabinet Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'tighter': '-0.04em',
        'widest-pill': '0.18em',
      }
    },
  },
  plugins: [],
}
