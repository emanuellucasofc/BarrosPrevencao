/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626', // Vermelho Principal de Emergência
          700: '#b91c1c', // Vermelho Escuro
          800: '#991b1b', // Bordô Emergência
          900: '#7f1d1d',
          950: '#450a0a',
        },
        accent: {
          amber: '#f59e0b',
          orange: '#ea580c',
          yellow: '#eab308',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'emergency': '0 10px 30px -10px rgba(220, 38, 38, 0.25)',
        'emergency-lg': '0 20px 40px -15px rgba(220, 38, 38, 0.35)',
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 30px -10px rgba(15, 23, 42, 0.12)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
