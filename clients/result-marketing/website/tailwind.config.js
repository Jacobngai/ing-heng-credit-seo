/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Emerald Green (from ci-option-2.html)
        primary: {
          50: '#D1FAE5',
          100: '#A7F3D0',
          200: '#6EE7B7',
          300: '#34D399',
          400: '#10B981', // Main primary
          500: '#059669',
          600: '#047857',
          700: '#065F46',
          800: '#064E3B',
          900: '#022c22'
        },
        // Secondary - Navy Blue
        secondary: {
          50: '#DBEAFE',
          100: '#BFDBFE',
          200: '#93C5FD',
          300: '#60A5FA',
          400: '#3B82F6',
          500: '#2563EB', // Main secondary
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#1e293b'
        },
        // Accent - Amber
        accent: {
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Main accent
          600: '#D97706'
        },
        // Neutrals
        dark: {
          DEFAULT: '#111827',
          800: '#1F2937',
          700: '#374151'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        'card': '0 10px 30px rgba(16, 185, 129, 0.15)',
        'card-hover': '0 20px 40px rgba(16, 185, 129, 0.25)'
      },
      spacing: {
        'section': '5rem',
        'section-mobile': '3rem'
      },
      borderRadius: {
        'card': '1rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
