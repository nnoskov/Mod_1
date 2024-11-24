import { constants } from "buffer";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        constants: resolve(__dirname, "contacts.html"),
      },
    },
  },
});
