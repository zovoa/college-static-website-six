import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/college-static-website-six/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
