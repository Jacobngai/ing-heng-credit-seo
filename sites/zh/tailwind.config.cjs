/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // Enable dark mode with class strategy
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // ====================================
        // HOBBY FINANCING - MODERN BLUE THEME
        // Clean, Professional, Trustworthy
        // ====================================

        // PRIMARY BLUE - Main brand color
        primary: {
          DEFAULT: '#1E40AF', // Professional Blue
          50: '#EFF6FF',      // Lightest blue
          100: '#DBEAFE',     // Very light blue
          200: '#BFDBFE',     // Light blue
          300: '#93C5FD',     // Primary Light
          400: '#60A5FA',     // Medium blue
          500: '#3B82F6',     // Bright blue
          600: '#2563EB',     // Main blue
          700: '#1D4ED8',     // Darker blue
          800: '#1E40AF',     // Primary (DEFAULT)
          900: '#1E3A8A',     // Darkest blue
          light: '#93C5FD',   // Primary Light (named)
          dark: '#1E3A8A',    // Primary Dark (named)
        },

        // SECONDARY - Accent Gold/Amber for CTAs
        secondary: {
          DEFAULT: '#F59E0B', // Amber
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',     // Main amber
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          light: '#FDE68A',
          dark: '#B45309',
        },

        // ACCENT - Dark Navy for contrast
        accent: {
          DEFAULT: '#0F172A', // Slate 900
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',     // Dark navy
          light: '#64748B',
          dark: '#020617',
        },

        // NEUTRAL - Clean grays
        neutral: {
          DEFAULT: '#F8FAFC', // Slate 50
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          dark: '#E2E8F0',
        },

        // TEXT COLORS
        text: {
          primary: '#0F172A',   // Dark slate
          secondary: '#475569', // Medium slate
          muted: '#64748B',     // Light slate
          light: '#94A3B8',     // Lighter
          inverse: '#FFFFFF',   // White
        },

        // BACKGROUND COLORS
        bg: {
          primary: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
          dark: '#0F172A',
        },

        // LEGACY - Keep for backward compatibility
        navy: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
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
        // Modern shadows
        'brutal-sm': '4px 4px 0 #1E3A8A',
        'brutal': '6px 6px 0 #1E3A8A',
        'brutal-md': '6px 6px 0 #1E3A8A',
        'brutal-lg': '8px 8px 0 #1E3A8A',
        'brutal-xl': '10px 10px 0 #1E3A8A',
        'brutal-2xl': '12px 12px 0 #1E3A8A',
        'brutal-dark-sm': '4px 4px 0 #0F172A',
        'brutal-dark-md': '6px 6px 0 #0F172A',
        'brutal-dark-lg': '8px 8px 0 #0F172A',
      },

      borderWidth: {
        '3': '3px',
        '4': '4px',
      },

      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
