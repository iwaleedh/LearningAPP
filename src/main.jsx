import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerServiceWorker } from './pwa/registerServiceWorker'
import { initSpacetimeDB } from './spacetime.js'

// Initialize SpacetimeDB client before the app renders
initSpacetimeDB().catch(console.error);

// In dev mode: aggressively unregister any existing service worker and wipe
// all caches. SW caches unhashed module URLs which causes stale content after
// every code change. This runs once on every dev page load.
if (import.meta.env.DEV) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((reg) => reg.unregister());
    });
  }
  if ('caches' in window) {
    caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
  }
} else {
  registerServiceWorker();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
