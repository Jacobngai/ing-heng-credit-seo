module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366',
          dark: '#002244',
        },
        secondary: {
          DEFAULT: '#0066cc',
          dark: '#0052a3',
        },
        accent: {
          DEFAULT: '#ff6600',
          dark: '#cc5200',
        },
      },
    },
  },
  plugins: [],
};
