const isBrowser = typeof window !== 'undefined';
const supportsServiceWorker = isBrowser && 'serviceWorker' in navigator;

const baseStatus = {
    supported: supportsServiceWorker,
    online: isBrowser ? navigator.onLine : true,
    swState: supportsServiceWorker ? 'idle' : 'unsupported',
    installable: false,
    updateReady: false,
    message: supportsServiceWorker ? '' : 'Service workers are not supported in this browser.',
    error: '',
};

let status = { ...baseStatus };
const listeners = new Set();

export function getPwaStatus() {
    return status;
}

export function subscribePwaStatus(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export function updatePwaStatus(patch) {
    status = { ...status, ...patch };
    listeners.forEach((listener) => listener());
}
