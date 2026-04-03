import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import packageJson from './package.json' with { type: 'json' }

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const productionBase = (() => {
  if (process.env.VERCEL) {
    return '/'
  }

  const homepage = packageJson.homepage

  if (!homepage) {
    return '/'
  }

  try {
    const pathname = new URL(homepage).pathname
    return pathname.endsWith('/') ? pathname : `${pathname}/`
  } catch {
    return homepage.endsWith('/') ? homepage : `${homepage}/`
  }
})()

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? productionBase : '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/');

          if (!normalizedId.includes('/node_modules/')) {
            return undefined;
          }

          if (
            normalizedId.includes('/node_modules/pdfjs-dist/')
          ) {
            return 'pdf-render-vendor';
          }

          if (
            normalizedId.includes('/node_modules/pdf-lib/') ||
            normalizedId.includes('/node_modules/pako/') ||
            normalizedId.includes('/node_modules/@pdf-lib/upng/') ||
            normalizedId.includes('/node_modules/@pdf-lib/standard-fonts/')
          ) {
            return 'pdf-edit-vendor';
          }

          if (
            normalizedId.includes('/node_modules/fabric/')
          ) {
            return 'fabric-vendor';
          }

          if (
            normalizedId.includes('/node_modules/chart.js/') ||
            normalizedId.includes('/node_modules/react-chartjs-2/') ||
            normalizedId.includes('/node_modules/@kurkle/color/')
          ) {
            return 'chart-vendor';
          }

          if (
            normalizedId.includes('/node_modules/@clerk/') ||
            normalizedId.includes('/node_modules/convex/')
          ) {
            return 'auth-data-vendor';
          }

          if (normalizedId.includes('/node_modules/lucide-react/')) {
            return 'icons-vendor';
          }

          if (normalizedId.includes('/node_modules/dompurify/')) {
            return 'note-render-vendor';
          }

          if (
            normalizedId.includes('/node_modules/react/') ||
            normalizedId.includes('/node_modules/react-dom/') ||
            normalizedId.includes('/node_modules/scheduler/')
          ) {
            return 'react-vendor';
          }

          if (
            normalizedId.includes('/node_modules/react-router-dom/') ||
            normalizedId.includes('/node_modules/react-router/') ||
            normalizedId.includes('/node_modules/@remix-run/router/')
          ) {
            return 'router-vendor';
          }

          return 'vendor';
        },
      },
    },
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
      // Basic CSP to catch injection issues in development
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // unsafe-eval needed by Vite HMR
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob: https:",
        "connect-src 'self' wss: https:",
        "frame-src 'self' https:",
        "worker-src 'self' blob:",
      ].join('; '),
    },
  },
}))
