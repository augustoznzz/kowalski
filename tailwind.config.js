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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 1.2s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-on-hover': 'scaleOnHover 0.3s ease-in-out',
        'bounce-subtle': 'bounceSubtle 3s infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-lime': 'pulseLime 2s infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(40px)' },
          'to': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleOnHover: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.05)' }
        },
        bounceSubtle: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
          '40%, 43%': { transform: 'translateY(-8px)' },
          '70%': { transform: 'translateY(-4px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        pulseLime: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(205, 255, 0, 0.7)' 
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(205, 255, 0, 0)'
          }
        },
        slideUp: {
          'from': { transform: 'translateY(100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
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
