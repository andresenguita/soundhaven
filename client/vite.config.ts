import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// @ts-ignore: plugin is ESM-only
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // Deshabilitamos la generación de sourcemaps para evitar errores en plugins
    sourcemap: false,
  },
});
