import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // WSLやDockerなら必要かも
    },
    hmr: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        parallax: 'parallax.html', // ← 他のhtmlをここで指定
        textanimation: 'text-animation.html', // ← 他のhtmlをここで指定
      }
    }
  }
});
