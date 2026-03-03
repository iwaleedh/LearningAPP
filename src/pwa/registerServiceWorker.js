import { updatePwaStatus } from './pwaStatusStore';

let started = false;

function trackInstallingWorker(worker) {
    if (!worker) return;

    updatePwaStatus({
        swState: 'installing',
        message: 'Installing offline cache...',
        error: '',
    });

    worker.addEventListener('statechange', () => {
        if (worker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
                updatePwaStatus({
                    swState: 'waiting',
                    updateReady: true,
                    message: 'Update available. Refresh to activate the latest version.',
                    error: '',
                });
                return;
            }

            updatePwaStatus({
                swState: 'active',
                updateReady: false,
                message: 'Offline support is ready.',
                error: '',
            });
            return;
        }

        if (worker.state === 'activated') {
            updatePwaStatus({
                swState: 'active',
                updateReady: false,
                message: 'Service worker activated.',
                error: '',
            });
            return;
        }

        if (worker.state === 'redundant') {
            updatePwaStatus({
                swState: 'error',
                error: 'Service worker became redundant.',
                message: 'Offline cache may be unavailable until next reload.',
            });
        }
    });
}

export function registerServiceWorker() {
    if (typeof window === 'undefined' || started) return;
    started = true;

    updatePwaStatus({ online: navigator.onLine });

    window.addEventListener('online', () => {
        updatePwaStatus({ online: true, message: 'Back online.' });
    });

    window.addEventListener('offline', () => {
        updatePwaStatus({ online: false, message: 'You are offline. Cached content is still available.' });
    });

    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault();
        updatePwaStatus({ installable: true });
    });

    window.addEventListener('appinstalled', () => {
        updatePwaStatus({ installable: false, message: 'App installed successfully.' });
    });

    if (!('serviceWorker' in navigator)) {
        updatePwaStatus({
            supported: false,
            swState: 'unsupported',
            message: 'Service workers are not supported in this browser.',
            error: '',
        });
        return;
    }

    let registerCalled = false;

    const startRegistration = async () => {
        if (registerCalled) return;
        registerCalled = true;

        updatePwaStatus({
            supported: true,
            swState: 'registering',
            message: 'Registering service worker...',
            error: '',
        });

        try {
            const registration = await navigator.serviceWorker.register('/sw.js');

            if (registration.waiting) {
                updatePwaStatus({
                    swState: 'waiting',
                    updateReady: true,
                    message: 'Update available. Refresh to activate the latest version.',
                    error: '',
                });
            } else if (registration.active) {
                updatePwaStatus({
                    swState: 'active',
                    message: 'Service worker active.',
                    error: '',
                });
            }

            if (registration.installing) {
                trackInstallingWorker(registration.installing);
            }

            registration.addEventListener('updatefound', () => {
                trackInstallingWorker(registration.installing);
            });

            navigator.serviceWorker.addEventListener('controllerchange', () => {
                updatePwaStatus({
                    swState: 'active',
                    updateReady: false,
                    message: 'Updated offline cache is now active.',
                    error: '',
                });
            });

            navigator.serviceWorker.ready.then(() => {
                updatePwaStatus({
                    swState: 'active',
                    error: '',
                });
            });
        } catch (error) {
            updatePwaStatus({
                swState: 'error',
                error: error?.message || 'Failed to register service worker.',
                message: 'Offline features are currently unavailable.',
            });
        }
    };

    if (document.readyState === 'complete') {
        startRegistration();
    } else {
        window.addEventListener('load', startRegistration, { once: true });
    }
}
