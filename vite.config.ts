import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// Determine the mode and environment
const mode = process.env.NODE_ENV ?? "production";
const isProd = mode === "production";

export default defineConfig({
  plugins: [
    react(), // Enables React fast-refresh
    svgr(), // Enables SVG as React components
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Adjust according to your project structure
    },
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[local]__[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        // Add your global SCSS here
      },
      less: {
        // lessOptions for projects using LESS
        javascriptEnabled: true,
      },
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
    IS_PROD: isProd,
    IS_DEV: !isProd,
  },

  build: {
    rollupOptions: {
      // If you have specific rollup options from your Webpack config, they can go here
    },
    // For the `date-fns` issue, consider manually aliasing or ensuring the correct import path
    // This might require adjustments based on the specific version and usage
  },
});
