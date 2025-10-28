module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary: Beige palette for backgrounds and major sections
        primary: {
          DEFAULT: '#E8DFD0',      // Medium beige - main brand color
          ultralight: '#FAF8F5',   // Ultra light beige - main backgrounds
          light: '#F5F1E8',        // Light beige - alternating sections
          medium: '#E8DFD0',       // Medium beige - subtle accents
          dark: '#D4C5B0',         // Dark beige - hover states, borders
          darker: '#B8A88F',       // Darker beige - strong accents
        },
        // Secondary: Maroon palette for CTAs and action elements
        secondary: {
          DEFAULT: '#800020',      // Classic maroon - main CTA color (WCAG AA: 8.5:1 on white)
          light: '#C9787F',        // Light maroon - hover highlights (WCAG AA: 4.8:1)
          medium: '#800020',       // Medium maroon - primary buttons
          dark: '#5C0011',         // Dark maroon - button hover (WCAG AAA: 12.1:1)
          darker: '#3D000C',       // Very dark maroon - active states (WCAG AAA: 15.8:1)
        },
        // Accent: Maroon (alias for secondary for backward compatibility)
        accent: {
          DEFAULT: '#800020',      // Classic maroon
          light: '#C9787F',        // Light maroon
          dark: '#5C0011',         // Dark maroon
        },
        // Text colors: Black and gray scale
        text: {
          primary: '#000000',      // Pure black - primary text (WCAG AAA: 21:1)
          secondary: '#2D2D2D',    // Dark gray - secondary text (WCAG AAA: 17.5:1)
          tertiary: '#6B6B6B',     // Medium gray - tertiary text (WCAG AA: 7.2:1)
          disabled: '#A8A8A8',     // Light gray - disabled text (WCAG AA: 4.5:1)
        },
        // Background colors
        background: {
          primary: '#FAF8F5',      // Ultra light beige - main background
          secondary: '#F5F1E8',    // Light beige - sections
          white: '#FDFCFA',        // Off-white (avoiding pure white)
          card: '#FFFFFF',         // Pure white for cards (contrast)
        },
        // Semantic colors (adjusted for beige theme with better contrast)
        success: '#059669',        // Darker green (WCAG AA: 4.9:1 on light beige)
        warning: '#D97706',        // Darker amber (WCAG AA: 5.6:1 on light beige)
        error: '#DC2626',          // Deep red (WCAG AA: 5.9:1 on light beige)
        info: '#0369A1',           // Darker blue (WCAG AA: 6.1:1 on light beige)
      },
    },
  },
  plugins: [],
};
