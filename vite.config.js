import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "public", // ⚠️ головна директорія тепер public
  base: "",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "public/index.html"),
        gallery: resolve(__dirname, "public/1-gallery.html"),
        form: resolve(__dirname, "public/2-form.html"),
      },
    },
  },
});
