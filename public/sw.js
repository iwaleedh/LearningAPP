/* Service Worker for Living Textbook PWA */
const CACHE_VERSION = 'v4';
const STATIC_CACHE = `living-textbook-static-${CACHE_VERSION}`;
const RUNTIME_CACHE = `living-textbook-runtime-${CACHE_VERSION}`;
const MAX_RUNTIME_ENTRIES = 80;

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/vite.svg',
    '/manifest.json',
    '/apple-touch-icon.png',
    '/icon-192.png',
    '/icon-512.png',
];

async function trimRuntimeCache(maxEntries) {
    const cache = await caches.open(RUNTIME_CACHE);
    const keys = await cache.keys();

    if (keys.length <= maxEntries) return;

    await cache.delete(keys[0]);
    await trimRuntimeCache(maxEntries);
}

async function putInCache(cacheName, request, response) {
    if (!response || (!response.ok && response.type !== 'opaque')) return;
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
}

async function staleWhileRevalidate(request) {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);

    const networkFetch = fetch(request)
        .then(async (response) => {
            await putInCache(STATIC_CACHE, request, response);
            return response;
        })
        .catch(() => null);

    if (cached) {
        networkFetch.catch(() => null);
        return cached;
    }

    const response = await networkFetch;
    if (response) return response;

    if (request.mode === 'navigate') {
        return caches.match('/index.html');
    }

    return new Response('Offline', { status: 503, statusText: 'Offline' });
}

async function networkFirst(request, { fallbackToShell = false } = {}) {
    try {
        const response = await fetch(request);
        await putInCache(RUNTIME_CACHE, request, response);
        await trimRuntimeCache(MAX_RUNTIME_ENTRIES);
        return response;
    } catch {
        const cached = await caches.match(request);
        if (cached) return cached;

        if (fallbackToShell) {
            const fallback = await caches.match('/index.html');
            if (fallback) return fallback;
        }

        return new Response('Offline', { status: 503, statusText: 'Offline' });
    }
}

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys
                .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
                .map((key) => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const { request } = event;

    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const sameOrigin = url.origin === self.location.origin;

    if (request.mode === 'navigate') {
        event.respondWith(networkFirst(request, { fallbackToShell: true }));
        return;
    }

    if (url.pathname.startsWith('/api') || url.pathname.startsWith('/convex')) {
        event.respondWith(networkFirst(request));
        return;
    }

    if (!sameOrigin) {
        event.respondWith(networkFirst(request));
        return;
    }

    event.respondWith(staleWhileRevalidate(request));
});
