import { defineConfig } from 'astro/vite';

export default defineConfig({
  // Build optimizations
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      // Increase memory for large builds
      maxParallelFileOps: 50,
    },
    // Reduce memory pressure
    minify: 'esbuild',
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['@astrojs/react', '@astrojs/tailwind'],
    exclude: ['astro:scripts/page-ssr.js'],
    force: false,
  },
  // Server settings
  server: {
    hmr: {
      timeout: 60000,
    },
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        '**/.astro/**',
        '**/public/**',
      ],
    },
  },
  // CSS handling
  css: {
    devSourcemap: false,
  },
});
