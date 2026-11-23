import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/COVEBAR/pages',
  build: {
    outDir: 'build', // Для сборки в папку build
  },
  server: {
    proxy: {
      // Все запросы, начинающиеся с /api, будут перенаправляться на json-server
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // Если ваш json-server отдает данные без префикса /api, 
        // то переписываем путь: /api/data -> /data
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
})
