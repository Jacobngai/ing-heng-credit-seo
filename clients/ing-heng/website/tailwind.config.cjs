module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Bold Industrial Blue/Yellow Brand Identity
        primary: {
          DEFAULT: '#1E3A8A', // Navy 900
          dark: '#1E40AF',    // Navy 800
          light: '#3B82F6',   // Blue 500
        },
        secondary: {
          DEFAULT: '#2563EB', // Blue 600
          dark: '#1D4ED8',    // Blue 700
          light: '#60A5FA',   // Blue 400
        },
        accent: {
          DEFAULT: '#FBBF24', // Yellow 400
          dark: '#F59E0B',    // Yellow 500
          light: '#FCD34D',   // Yellow 300
        },
        navy: {
          900: '#1E3A8A',
          800: '#1E40AF',
          700: '#1D4ED8',
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        yellow: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        chinese: ['Noto Sans SC', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '4px 4px 0 #1E3A8A',
        'brutal-md': '6px 6px 0 #1E3A8A',
        'brutal-lg': '8px 8px 0 #1E3A8A',
        'brutal-xl': '10px 10px 0 #1E3A8A',
        'brutal-2xl': '12px 12px 0 #1E3A8A',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
    },
  },
  plugins: [],
};
