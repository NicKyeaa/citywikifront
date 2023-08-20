import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/geonames-all-cities-with-a-population-1000.json": {
        target:
          "http://127.0.0.1:8080/geonames-all-cities-with-a-population-1000.json", // Your API server address
        changeOrigin: true,
      },
    },
  },
});
