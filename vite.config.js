// vite.config.js
import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: 'src/public',
  base: '/goit-advancedjs-hw-01/',

  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/public/index.html'),
        gallery: resolve(__dirname, 'src/public/1-gallery.html'),
        form: resolve(__dirname, 'src/public/2-form.html'),
      },
    },
  },
});
