import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['5d2426a25256.ngrok-free.app', 'd2d30550fe95.ngrok-free.app', '.ngrok-free.app'],
  },
});
