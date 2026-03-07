import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerServiceWorker } from './pwa/registerServiceWorker'
import { initSpacetimeDB } from './spacetime.js'

// Initialize SpacetimeDB client before the app renders
initSpacetimeDB().catch(console.error);

// Only register service worker in production — in dev mode, SW caches
// unhashed module URLs which causes stale content after every code change.
if (!import.meta.env.DEV) {
  registerServiceWorker();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
