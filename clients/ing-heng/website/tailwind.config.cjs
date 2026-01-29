/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // Enable dark mode with class strategy
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // ====================================
        // INDUSTRIAL TRUST BRAND IDENTITY
        // Premium Bronze & Gold Color System
        // ====================================

        // PRIMARY BRONZE - Main brand color (complete 50-900 scale)
        primary: {
          DEFAULT: '#8B6F47', // Primary Bronze
          50: '#FAF8F5',      // Lightest bronze tint
          100: '#F5F1EB',     // Very light bronze
          200: '#E8DFD4',     // Light bronze
          300: '#D4BFA8',     // Primary Light
          400: '#BFA88E',     // Medium bronze
          500: '#8B6F47',     // Main bronze (DEFAULT)
          600: '#7A5F3D',     // Darker bronze
          700: '#6B5437',     // Primary Dark
          800: '#5C4830',     // Deep bronze
          900: '#4D3D28',     // Darkest bronze
          light: '#D4BFA8',   // Primary Light (named)
          dark: '#6B5437',    // Primary Dark (named)
        },

        // SECONDARY GOLD - Accent & highlights
        secondary: {
          DEFAULT: '#D4A574', // Secondary Gold
          50: '#FBF9F6',      // Lightest gold tint
          100: '#F5F0E8',     // Very light gold
          200: '#E8DFD4',     // Neutral Light
          300: '#E0C9AC',     // Light gold
          400: '#D4A574',     // Secondary Gold (DEFAULT)
          500: '#BF9463',     // Secondary Dark
          600: '#AB8252',     // Deeper gold
          700: '#977042',     // Rich gold
          800: '#835F36',     // Deep gold
          900: '#6F4E2B',     // Darkest gold
          light: '#E8DFD4',   // Secondary Light
          dark: '#BF9463',    // Secondary Dark (named)
        },

        // ACCENT COLORS - Dark Browns
        accent: {
          DEFAULT: '#2D1810', // Accent Dark Brown
          50: '#F7F3F0',      // Lightest accent
          100: '#EDE5DF',     // Very light accent
          200: '#D9C8BC',     // Light accent
          300: '#C5AB99',     // Medium light accent
          400: '#B18E76',     // Medium accent
          500: '#4C3729',     // Accent Light
          600: '#3D2E21',     // Medium dark
          700: '#2D1810',     // Accent Dark Brown (DEFAULT)
          800: '#241410',     // Very dark
          900: '#1A0F0B',     // Darkest accent
          light: '#4C3729',   // Accent Light (named)
          dark: '#1A0F0B',    // Deeper dark (named)
        },

        // NEUTRAL BEIGE - Backgrounds & surfaces
        neutral: {
          DEFAULT: '#F5F5DC', // Neutral Beige
          50: '#FCFCF9',      // Lightest neutral
          100: '#F9F9F3',     // Very light neutral
          200: '#F5F5DC',     // Neutral Beige (DEFAULT)
          300: '#F0F0C8',     // Light beige
          400: '#EAEAB8',     // Medium beige
          500: '#E8E8C8',     // Neutral Dark
          600: '#D4D4AE',     // Deeper beige
          700: '#C0C094',     // Rich beige
          800: '#ACAC7A',     // Deep beige
          900: '#989860',     // Darkest beige
          dark: '#E8E8C8',    // Neutral Dark (named)
        },

        // TEXT COLORS - Typography hierarchy
        text: {
          primary: '#1A140D',   // Text Primary (darkest)
          secondary: '#4F3E29', // Text Secondary
          muted: '#6B5437',     // Text Muted
          light: '#8B7355',     // Light text
          inverse: '#F5F5DC',   // For dark backgrounds
        },

        // BACKGROUND COLORS - Surface hierarchy
        bg: {
          primary: '#FFFFFF',   // Background Primary
          secondary: '#F5F5DC', // Background Secondary
          tertiary: '#F5F1EC',  // Background Tertiary
          dark: '#1A140D',      // Dark mode background
        },

        // DARK MODE SPECIFIC COLORS
        dark: {
          primary: '#C09F7D',   // Dark Mode Primary (lighter bronze)
          secondary: '#D4A574', // Dark Mode Secondary
          accent: '#E8DFD4',    // Dark Mode Accent
          bg: '#1A140D',        // Dark Mode Background
          surface: '#2D1810',   // Dark Mode Surface
          text: '#F5F5DC',      // Dark Mode Text
          muted: '#B8A890',     // Dark Mode Muted Text
        },

        // LEGACY COLORS - Maintaining backward compatibility
        // These now map to Industrial Trust bronze tones
        navy: {
          900: '#2D1810', // Maps to accent dark
          800: '#4C3729', // Maps to accent light
          700: '#6B5437', // Maps to primary dark
        },
        blue: {
          50: '#FAF8F5',
          100: '#F5F1EB',
          200: '#E8DFD4',
          300: '#D4BFA8',
          400: '#BFA88E',
          500: '#8B6F47',
          600: '#7A5F3D',
          700: '#6B5437',
        },
        yellow: {
          50: '#FBF9F6',
          100: '#F5F0E8',
          200: '#E8DFD4',
          300: '#E0C9AC',
          400: '#D4A574',
          500: '#BF9463',
          600: '#AB8252',
          700: '#977042',
          800: '#835F36',
          900: '#6F4E2B',
        },
      },

      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        chinese: ['Noto Sans SC', 'sans-serif'],
      },

      boxShadow: {
        // Light mode shadows (using primary dark)
        'brutal-sm': '4px 4px 0 #6B5437',
        'brutal': '6px 6px 0 #6B5437',
        'brutal-md': '6px 6px 0 #6B5437',
        'brutal-lg': '8px 8px 0 #6B5437',
        'brutal-xl': '10px 10px 0 #6B5437',
        'brutal-2xl': '12px 12px 0 #6B5437',
        // Dark mode shadows (using accent dark)
        'brutal-dark-sm': '4px 4px 0 #2D1810',
        'brutal-dark-md': '6px 6px 0 #2D1810',
        'brutal-dark-lg': '8px 8px 0 #2D1810',
      },

      borderWidth: {
        '3': '3px',
        '4': '4px',
      },

      // Smooth transitions for dark mode
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
};
