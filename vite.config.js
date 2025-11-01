import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // HTML у public
  base: '',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
