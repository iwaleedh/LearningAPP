import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Polyfill for Map.prototype.getOrInsertComputed (used by pdfjs-dist v5,
// not yet available in all browsers as of mid-2026)
if (typeof Map !== 'undefined' && !Map.prototype.getOrInsertComputed) {
  Map.prototype.getOrInsertComputed = function (key, callbackfn) {
    if (!this.has(key)) this.set(key, callbackfn(key));
    return this.get(key);
  };
}
import App from './App.jsx'
import { registerServiceWorker } from './pwa/registerServiceWorker'
import { initSpacetimeDB } from './spacetime.js'

// Initialize SpacetimeDB client before the app renders
try {
  initSpacetimeDB().catch(err => {
    console.warn('SpacetimeDB init failed (app will run in offline mode):', err?.message ?? err);
  });
} catch (err) {
  console.warn('SpacetimeDB init threw (app will run in offline mode):', err?.message ?? err);
}

// In dev mode: if an old service worker is still controlling this page, it will
// serve stale cached JS modules. Unregister it, wipe caches, and reload ONCE
// so the next page load has no SW intercepting fetches.
if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  console.log('🛠️ Dev Mode: Cleaning up Service Workers and Caches...');
  const swControlling = navigator.serviceWorker.controller;
  if (swControlling) {
    // SW is active on this page — nuke everything and reload once
    Promise.all([
      navigator.serviceWorker.getRegistrations().then(regs =>
        Promise.all(regs.map(r => r.unregister()))
      ),
      caches.keys().then(keys =>
        Promise.all(keys.map(k => caches.delete(k)))
      ),
    ]).then(() => {
      console.log('✅ SW and Caches nuked. Reloading...');
      // Reload so the next load has no SW controlling the page
      window.location.reload();
    });
  } else {
    // No SW controlling — still clean up any lingering registrations quietly
    navigator.serviceWorker.getRegistrations().then(regs =>
      regs.forEach(r => r.unregister())
    );
    if ('caches' in window) {
      caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
    }
  }
} else if (!import.meta.env.DEV) {
  registerServiceWorker();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
