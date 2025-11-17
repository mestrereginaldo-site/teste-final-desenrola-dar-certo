import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: ".", // A raiz é onde está o index.html
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // Isso mapeia "@/" para "client/src"
    },
  },
  publicDir: "public",
});
