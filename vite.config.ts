import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],


  },

  server: {
    host: true, // Permite conexiones desde cualquier dirección IP de red local
    port: 3000, // Puerto en el que quieres ejecutar tu proyecto
  },
});
