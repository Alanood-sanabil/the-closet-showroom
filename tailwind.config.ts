import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9F9F9',
          100: '#F5F5F5',
          200: '#EFEFEF',
          300: '#E5E5E5',
          400: '#D4D4D4',
          500: '#A3A3A3',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          900: '#262626',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
