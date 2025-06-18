import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Snapgram",
        short_name: "Snapgram",
        description: "A social platform for sharing snaps.",
        theme_color: "#040303",
        background_color: "#040303",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/assets/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
