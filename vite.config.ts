import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Оптимизация сборки
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Разделение vendor и app кода
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Минификация CSS
    cssMinify: true,
    // Оптимизация размера
    minify: 'terser',
  },
  // Оптимизация dev сервера
  server: {
    hmr: {
      overlay: false,
    },
  },
})
