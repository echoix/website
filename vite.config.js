import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
  preview: {
    port: 3000,
  },
  define: {
    "process.env.SEGMENT_KEY": JSON.stringify(process.env.SEGMENT_KEY),
  },
});
