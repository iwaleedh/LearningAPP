/* Service Worker for Living Textbook PWA — v8 */

const BASE_PATH = new URL('./', self.location.href).pathname; // e.g. '/LearningAPP/'
const OFFLINE_PAGE = BASE_PATH + 'offline.html';
const OFFLINE_CACHE = 'offline-shell-v9';

// ── On install: pre-cache offline fallback page and skip waiting ──
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(OFFLINE_CACHE).then((cache) => cache.add(OFFLINE_PAGE))
    );
    self.skipWaiting();
});

// ── On activate: delete OLD caches, then claim all clients ──
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter(k => k !== OFFLINE_CACHE).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

// ── Fetch: Network-first for code modules, offline fallback for navigation ──
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const isCodeModule = url.pathname.endsWith('.js') || url.pathname.endsWith('.css');

    if (isCodeModule) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache the fresh version
                    const clone = response.clone();
                    caches.open('code-cache-v9').then((cache) => {
                        cache.put(event.request, clone);
                    });
                    return response;
                })
                .catch(() => {
                    // Fallback to cache if network fails
                    return caches.match(event.request);
                })
        );
        return;
    }

    // For HTML navigation requests, fall back to offline.html on network failure
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() =>
                caches.match(OFFLINE_PAGE)
            )
        );
    }
    // For other assets, let the browser handle it normally.
});
