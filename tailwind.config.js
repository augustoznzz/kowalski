/** @type {import('tailwindcss').Config} */
export default {
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
        lime: '#CDFF00', // Verde Lima para acentuação
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        neutral: {
          900: '#0a0a0a',
          800: '#171717',
          100: '#ededed',
          0: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in-down': 'fade-in-down 1.2s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) both',
        'scale-on-hover': 'scale-on-hover 0.3s ease-in-out',
      },
      keyframes: {
        'fade-in-down': {
          'from': { opacity: '0', transform: 'translateY(-40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-on-hover': {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.05)' }
        }
      }
    },
  },
  plugins: [],
};
