/**
 * OPTION 2: CURRENT INDUSTRIAL BLUE (Keep Current Website)
 * Style: Bold, Industrial, Modern Professional
 * Best For: Current branding, no rebranding needed
 *
 * ✅ THIS IS YOUR CURRENT WEBSITE COLORS
 * To use: Already implemented in your site!
 */

export default {
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#1E3A8A',  // Navy Blue
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',  // Main navy (your current)
        },
        secondary: {
          DEFAULT: '#FBBF24',  // Yellow
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',  // Main yellow (your current)
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        accent: {
          DEFAULT: '#1E293B',  // Dark Navy
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',  // Main dark
          900: '#0F172A',
        },
        neutral: {
          DEFAULT: '#EFF6FF',  // Light Blue
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'extra-bold': '800',
        'black': '900',
      },
    },
  },
}

/*
✅ YOUR CURRENT WEBSITE ALREADY USES THIS!

No changes needed. This is documented for reference.

Hero Section:
<section class="bg-gradient-to-br from-primary-900 to-primary-700 text-white">
  <h1 class="text-6xl font-display font-black uppercase">
    Equipment Financing <span class="text-secondary-400">Made Simple</span>
  </h1>
</section>

Primary Button:
<button class="bg-secondary-400 text-primary-900 border-3 border-primary-900 font-bold px-8 py-4 hover:bg-secondary-500">
  Get Free Quote
</button>

Secondary Button:
<button class="bg-transparent text-white border-3 border-white font-bold px-8 py-4 hover:bg-white/10">
  WhatsApp Us
</button>
*/
