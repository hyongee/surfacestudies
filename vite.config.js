import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // WSLやDockerなら必要かも
    },
    hmr: true,
  },
});
