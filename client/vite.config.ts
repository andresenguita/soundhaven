// client/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  // Cargamos dinámicamente el plugin ESM-only de Tailwind
  const tailwindcss = (await import('@tailwindcss/vite')).default;

  return {
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
  };
});
