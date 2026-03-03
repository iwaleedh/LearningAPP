import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function createDraftStorageKey(routeKey, contextKey = 'default') {
    return `draft:${routeKey}:${contextKey}`;
}

export function normalizeDraftValue(value, maxChars) {
    const nextValue = typeof value === 'string' ? value : String(value ?? '');
    return maxChars > 0 ? nextValue.slice(0, maxChars) : nextValue;
}

function readInitialDraft(key, initialValue) {
    return readDraftFromStorage(localStorage, key, initialValue);
}

export function readDraftFromStorage(storage, key, initialValue) {
    try {
        const saved = storage.getItem(key);
        return saved ?? initialValue;
    } catch {
        return initialValue;
    }
}

export function writeDraftToStorage(storage, key, value) {
    try {
        storage.setItem(key, value);
        return { ok: true };
    } catch (error) {
        const message = error?.name === 'QuotaExceededError'
            ? 'Storage quota exceeded. Clear old drafts to continue saving.'
            : 'Draft could not be saved. Try again.';

        return { ok: false, message };
    }
}

export default function useDraftAutosave({
    key,
    initialValue = '',
    delayMs = 2000,
    maxChars = 6000,
}) {
    const [value, setValueState] = useState(() => normalizeDraftValue(readInitialDraft(key, initialValue), maxChars));
    const [status, setStatus] = useState('idle');
    const [lastSavedAt, setLastSavedAt] = useState(null);
    const [error, setError] = useState('');

    const timerRef = useRef(null);
    const dirtyRef = useRef(false);
    const valueRef = useRef(value);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    const saveNow = useCallback((nextValue) => {
        const result = writeDraftToStorage(localStorage, key, nextValue);
        if (result.ok) {
            setLastSavedAt(new Date());
            setStatus(nextValue ? 'saved' : 'idle');
            setError('');
            dirtyRef.current = false;
            return true;
        }

        setStatus('error');
        setError(result.message);
        return false;
    }, [key]);

    const flush = useCallback(() => {
        if (!dirtyRef.current) return;
        saveNow(valueRef.current);
    }, [saveNow]);

    const setValue = useCallback((nextValue) => {
        setValueState((prev) => {
            const resolved = typeof nextValue === 'function' ? nextValue(prev) : nextValue;
            const normalized = normalizeDraftValue(resolved, maxChars);

            dirtyRef.current = true;
            setStatus(normalized ? 'saving' : 'idle');
            setError('');
            return normalized;
        });
    }, [maxChars]);

    const clear = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        try {
            localStorage.removeItem(key);
        } catch {
            // Ignore storage removal issues to keep UI responsive.
        }

        dirtyRef.current = false;
        setValueState('');
        setStatus('idle');
        setLastSavedAt(null);
        setError('');
    }, [key]);

    useEffect(() => {
        if (!dirtyRef.current) return;

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            timerRef.current = null;
            saveNow(valueRef.current);
        }, delayMs);

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [delayMs, saveNow, value]);

    useEffect(() => {
        const onVisibilityChange = () => {
            if (document.visibilityState === 'hidden') flush();
        };

        window.addEventListener('beforeunload', flush);
        document.addEventListener('visibilitychange', onVisibilityChange);

        return () => {
            window.removeEventListener('beforeunload', flush);
            document.removeEventListener('visibilitychange', onVisibilityChange);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [flush]);

    const meta = useMemo(() => ({
        status,
        lastSavedAt,
        error,
    }), [error, lastSavedAt, status]);

    return {
        value,
        setValue,
        clear,
        ...meta,
    };
}
