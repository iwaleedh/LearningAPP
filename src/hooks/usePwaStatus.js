import { useSyncExternalStore } from 'react';
import { getPwaStatus, subscribePwaStatus } from '../pwa/pwaStatusStore';

export default function usePwaStatus() {
    return useSyncExternalStore(subscribePwaStatus, getPwaStatus, getPwaStatus);
}
