import { defineConfig } from "vite";

export default defineConfig(() => ({
  base: process.env.VERCEL ? "/" : "/Portfolio/",
  build: { outDir: "dist" },
}));
