/* Service Worker for Living Textbook PWA — v7 (cache-busting) */

// ── On install: skip waiting immediately so this SW activates right away ──
self.addEventListener('install', () => {
    self.skipWaiting();
});

// ── On activate: delete ALL caches, then claim all clients ──
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

// ── Fetch: Network-first for code modules, passthrough for others ──
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    const isCodeModule = url.pathname.endsWith('.js') || url.pathname.endsWith('.css');

    if (isCodeModule) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // Cache the fresh version
                    const clone = response.clone();
                    caches.open('code-cache-v7').then((cache) => {
                        cache.put(event.request, clone);
                    });
                    return response;
                })
                .catch(() => {
                    // Fallback to cache if network fails
                    return caches.match(event.request);
                })
        );
    }
    // For other assets, let the browser handle it normally.
});
