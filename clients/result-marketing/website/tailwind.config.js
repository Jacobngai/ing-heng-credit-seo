/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Bold & Disruptive - Electric Purple
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED', // Main primary - Electric Purple
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        // Secondary - Dark Grays for backgrounds
        secondary: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252', // Main secondary - Dark Gray
          700: '#404040',
          800: '#262626',
          900: '#171717', // Card background
        },
        // Accent - Hot Pink
        accent: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899', // Main accent - Hot Pink
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
        // Success - Lime Green
        success: {
          50: '#F7FEE7',
          100: '#ECFCCB',
          200: '#D9F99D',
          300: '#BEF264',
          400: '#A3E635',
          500: '#84CC16', // Main success - Lime Green
          600: '#65A30D',
          700: '#4D7C0F',
          800: '#3F6212',
          900: '#365314',
        },
        // Warning - Electric Yellow
        warning: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15', // Main warning - Electric Yellow
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },
        // Dark Mode Colors
        dark: {
          DEFAULT: '#000000', // Pure black - main background
          900: '#171717', // Card backgrounds
          800: '#262626', // Borders
          700: '#404040', // Hover states
          600: '#525252', // Secondary text
          500: '#A3A3A3', // Meta text
          400: '#D4D4D4', // Disabled
        }
      },
      fontFamily: {
        heading: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 12px 48px rgba(124, 58, 237, 0.2)',
        'glow-purple': '0 4px 20px rgba(124, 58, 237, 0.4)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.5)',
        'glow-green': '0 0 20px rgba(132, 204, 22, 0.4)',
        'disruptive': '0 12px 48px rgba(236, 72, 153, 0.3)',
      },
      spacing: {
        'section': '6rem',
        'section-mobile': '4rem'
      },
      borderRadius: {
        'card': '12px',
        'sharp': '4px',
        'button': '4px',
      },
      fontWeight: {
        'black': '900',
        'extrabold': '800',
      },
      letterSpacing: {
        'tighter': '-0.025em',
        'tight': '-0.015em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
