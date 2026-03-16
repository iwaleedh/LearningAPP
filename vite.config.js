import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  server: {
    headers: {
      // Prevent the browser from HTTP-caching sw.js — always fetch fresh from disk
      'Service-Worker-Allowed': '/',
    },
  },
})
