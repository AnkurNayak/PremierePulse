import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslintPlugin from "vite-plugin-eslint";
import tailwindcss from "tailwindcss";
import daisyui from "daisyui";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), tailwindcss(), daisyui],
  base: "/premierepulse/",
});
