import { useState, useEffect, useMemo } from 'react';
import { api, subscribe } from '../convex-client.js';
import { useAuth } from './useAuth.js';

const FEATURE_KEYS = [
    'notes',
    'exercises',
    'pastPapers',
    'flashcards',
    'progress',
    'mistakeBank',
    'liveClass',
    'requireApproval',
    'payments',
];

const DEFAULT_FLAGS = Object.freeze(
    Object.fromEntries(FEATURE_KEYS.map((key) => [key, true])),
);

// Convex is only available when VITE_CONVEX_URL is configured.
// If it is not set (e.g. in E2E tests or offline mode), all feature
// queries are skipped and DEFAULT_FLAGS (all enabled) are used.
const CONVEX_CONFIGURED = Boolean(import.meta.env.VITE_CONVEX_URL);

export function useFeatureFlags() {
    const { isLoaded, isSignedIn } = useAuth();
    const [rawFlags, setRawFlags] = useState(undefined);

    useEffect(() => {
        if (!isLoaded || !isSignedIn || !CONVEX_CONFIGURED) return;

        // Use the imperative subscribe helper so ConvexProvider is not required
        // in the React tree (MaybeConvexProvider may omit it when CONVEX_URL is
        // absent, which would otherwise crash useQuery).
        return subscribe(api.featureFlags.getAllFlags, {}, (result) => {
            setRawFlags(result);
        });
    }, [isLoaded, isSignedIn]);

    const flags = useMemo(() => {
        if (!rawFlags) {
            return { ...DEFAULT_FLAGS };
        }

        const nextFlags = { ...DEFAULT_FLAGS };
        rawFlags.forEach((flag) => {
            nextFlags[flag.key] = flag.enabled;
        });
        return nextFlags;
    }, [rawFlags]);

    return {
        flags,
        // isLoading is only true if Convex IS configured and we have not yet
        // received the first flags response.  When Convex is not configured the
        // hook resolves immediately with DEFAULT_FLAGS and isLoading stays false.
        isLoading: Boolean(CONVEX_CONFIGURED && isLoaded && isSignedIn && rawFlags === undefined),
        isEnabled: (featureKey) => flags[featureKey] ?? true,
    };
}
