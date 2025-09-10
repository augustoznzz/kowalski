/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './emails/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: '#CDFF00', // Verde Lima principal
        'lime-dark': '#9ACD32', // Verde Lima escuro
        'lime-light': '#E6FF66', // Verde Lima claro
        primary: '#CDFF00', // Verde Lima como cor primária
        secondary: '#32CD32', // Verde complementar
        accent: '#CDFF00', // Verde Lima para acentos
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        neutral: {
          900: '#0a0a0a',
          800: '#171717',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#ededed',
          50: '#f5f5f5',
          0: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Varela Round', 'system-ui', 'sans-serif'],
        display: ['Varela Round', 'system-ui', 'sans-serif'],
        body: ['Varela Round', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-down': 'fade-in-down 1.2s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
        'scale-on-hover': 'scale-on-hover 0.3s ease-in-out',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'pulse-lime': 'pulse-lime 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-down': 'slide-down 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        'fade-in-down': {
          'from': { opacity: '0', transform: 'translateY(-40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          'from': { opacity: '0', transform: 'translateX(-40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          'from': { opacity: '0', transform: 'translateX(40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        'scale-on-hover': {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.05)' }
        },
        'bounce-subtle': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
          '40%, 43%': { transform: 'translateY(-8px)' },
          '70%': { transform: 'translateY(-4px)' }
        },
        'pulse-lime': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(205, 255, 0, 0.7)'
          },
          '50%': { 
            opacity: '0.8',
            boxShadow: '0 0 0 10px rgba(205, 255, 0, 0)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-up': {
          'from': { transform: 'translateY(100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        'glow': {
          'from': { 
            boxShadow: '0 0 5px #CDFF00, 0 0 10px #CDFF00, 0 0 15px #CDFF00',
          },
          'to': { 
            boxShadow: '0 0 10px #CDFF00, 0 0 20px #CDFF00, 0 0 30px #CDFF00',
          }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      }
    },
  },
  plugins: [],
};

export default config;
