import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: '/LearningAPP/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    headers: {
      // Prevent the browser from HTTP-caching sw.js — always fetch fresh from disk
      'Service-Worker-Allowed': '/',
    },
  },
})
