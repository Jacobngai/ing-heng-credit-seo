/**
 * OPTION 1: INDUSTRIAL TRUST (Logo-based Bronze/Brown)
 * Style: Traditional, Established, Heritage
 * Best For: B2B industrial clients, contractors, logistics
 *
 * To use: Copy this into clients/ing-heng/website/tailwind.config.mjs
 */

export default {
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#8B6F47',  // Bronze (from logo)
          50: '#F5F1EC',
          100: '#E8DFD4',
          200: '#D4BFA8',
          300: '#C09F7D',
          400: '#AC7F51',
          500: '#8B6F47',  // Main bronze
          600: '#6B5437',
          700: '#4F3E29',
          800: '#33281A',
          900: '#1A140D',
        },
        secondary: {
          DEFAULT: '#D4A574',  // Gold accent
          50: '#FBF7F1',
          100: '#F5EBE0',
          200: '#EBD7C1',
          300: '#E1C3A2',
          400: '#D7AF83',
          500: '#D4A574',  // Main gold
          600: '#BF9463',
          700: '#9F7B52',
          800: '#7F6241',
          900: '#5F4931',
        },
        accent: {
          DEFAULT: '#2D1810',  // Dark brown
          50: '#E8E5E4',
          100: '#CAC2BE',
          200: '#9D8D85',
          300: '#70574C',
          400: '#4C3729',
          500: '#2D1810',  // Main dark
          600: '#24130D',
          700: '#1B0F0A',
          800: '#120B07',
          900: '#090604',
        },
        neutral: {
          DEFAULT: '#F5F5DC',  // Beige
          50: '#FEFEFE',
          100: '#FCFCF9',
          200: '#F9F9F1',
          300: '#F7F7EA',
          400: '#F6F6E3',
          500: '#F5F5DC',  // Main beige
          600: '#E8E8C8',
          700: '#DBDBB4',
          800: '#CECEA0',
          900: '#C1C18C',
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
USAGE IN ASTRO/TAILWIND:

Hero Section:
<section class="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
  <h1 class="text-6xl font-display font-extra-bold uppercase">
    Equipment Financing <span class="text-secondary-500">Made Simple</span>
  </h1>
</section>

Primary Button:
<button class="bg-secondary-500 text-accent-500 border-3 border-accent-500 font-bold px-8 py-4 hover:bg-secondary-600">
  Get Free Quote
</button>

Secondary Button:
<button class="bg-transparent text-white border-3 border-white font-bold px-8 py-4 hover:bg-white/10">
  WhatsApp Us
</button>

Card:
<div class="bg-white border-3 border-accent-500 shadow-lg p-8">
  <h3 class="text-2xl font-bold text-primary-500 mb-4">Hire Purchase</h3>
  <p class="text-gray-700">Content here...</p>
</div>
*/
