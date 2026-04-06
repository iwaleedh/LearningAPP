import { useMemo } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api.js';
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

export function useFeatureFlags() {
    const { isLoaded, isSignedIn } = useAuth();
    const rawFlags = useQuery(
        api.featureFlags.getAllFlags,
        isLoaded && isSignedIn ? {} : 'skip',
    );

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
        isLoading: Boolean(isLoaded && isSignedIn && rawFlags === undefined),
        isEnabled: (featureKey) => flags[featureKey] ?? true,
    };
}