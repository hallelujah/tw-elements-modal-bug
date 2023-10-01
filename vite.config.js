import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build"
  },
  server: {
    host:"0.0.0.0",
    port:3000,
    strictPort: true,
  }
});

