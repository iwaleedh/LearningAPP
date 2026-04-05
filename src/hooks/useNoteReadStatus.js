/**
 * useNoteReadStatus
 *
 * Persists a per-note "read" flag to localStorage.
 * Key format: "lt_read:<noteId>"   e.g. "lt_read:note:chemistry:1:1:0"
 * Value: ISO timestamp string of when it was first marked read, or null.
 *
 * Also exposes a helper to get the total read count across all notes
 * (used by ProgressPage / stats).
 */

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { getRecordedActivityByDate, subscribeToActivityUpdates } from '../services/activityStore.js';
import { api, callMutation, callQuery, getClient } from '../convex-client.js';

const PREFIX = 'lt_read:';

// Module-level cache to avoid O(n) localStorage scans on every render.
let _readCache = null; // Map<noteId, isoTimestamp> | null

function getReadCache() {
    if (_readCache) return _readCache;
    const cache = new Map();
    try {
        const indexStr = localStorage.getItem('lt_read_index');
        if (indexStr) {
            const index = JSON.parse(indexStr);
            for (const key of index) {
                const val = localStorage.getItem(PREFIX + key);
                if (val) cache.set(key, val);
            }
        } else {
            const index = [];
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.startsWith(PREFIX)) {
                    const noteId = k.slice(PREFIX.length);
                    cache.set(noteId, localStorage.getItem(k));
                    index.push(noteId);
                }
            }
            localStorage.setItem('lt_read_index', JSON.stringify(index));
        }
    } catch { /* ignore */ }
    _readCache = cache;
    return cache;
}

// Do not invalidate cache on activity update; instead cache is mutated directly.

function storageKey(noteId) {
    return `${PREFIX}${noteId}`;
}

function toLocalDateKey(value) {
    return new Date(value).toLocaleDateString('en-CA');
}

function markReadLocally(noteId, readAt) {
    const key = storageKey(noteId);
    try {
        localStorage.setItem(key, readAt);
        const cache = getReadCache();
        cache.set(noteId, readAt);
        localStorage.setItem('lt_read_index', JSON.stringify(Array.from(cache.keys())));
    } catch {
        // storage quota exceeded — ignore
    }
}

function markUnreadLocally(noteId) {
    const key = storageKey(noteId);
    try {
        localStorage.removeItem(key);
        const cache = getReadCache();
        cache.delete(noteId);
        localStorage.setItem('lt_read_index', JSON.stringify(Array.from(cache.keys())));
    } catch {
        // ignore
    }
}

function emitReadProgressUpdate() {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('lt:activity-updated'));
    }
}

function computeCurrentStreakFromDates(dateKeys) {
    if (dateKeys.size === 0) return 0;

    const today = new Date();
    const todayStr = today.toLocaleDateString('en-CA');
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toLocaleDateString('en-CA');

    if (!dateKeys.has(todayStr) && !dateKeys.has(yesterdayStr)) return 0;

    const startOffset = dateKeys.has(todayStr) ? 0 : 1;
    let streak = 0;
    for (let offset = startOffset; ; offset += 1) {
        const date = new Date(today);
        date.setDate(date.getDate() - offset);
        if (dateKeys.has(date.toLocaleDateString('en-CA'))) {
            streak += 1;
        } else {
            break;
        }
    }
    return streak;
}

function computeLongestStreakFromDates(sortedDateKeys) {
    if (sortedDateKeys.length === 0) return 0;
    let longest = 1;
    let current = 1;
    for (let i = 1; i < sortedDateKeys.length; i += 1) {
        const diff = Math.round(
            (new Date(sortedDateKeys[i]) - new Date(sortedDateKeys[i - 1])) / 86400000,
        );
        if (diff === 1) {
            current += 1;
            if (current > longest) longest = current;
        } else {
            current = 1;
        }
    }
    return longest;
}

function buildSummary(readAtByNoteId, extraActivityByDate = {}) {
    const normalizedReadAtByNoteId = { ...readAtByNoteId };
    const readNoteIds = Object.keys(normalizedReadAtByNoteId).sort();
    const activityByDate = { ...extraActivityByDate };

    for (const readAt of Object.values(normalizedReadAtByNoteId)) {
        if (!readAt) continue;
        const dateKey = toLocalDateKey(readAt);
        activityByDate[dateKey] = (activityByDate[dateKey] || 0) + 1;
    }

    const activeDates = Object.keys(activityByDate)
        .filter((dateKey) => Number(activityByDate[dateKey]) > 0)
        .sort();
    const activeDateSet = new Set(activeDates);

    return {
        readNoteIds,
        readAtByNoteId: normalizedReadAtByNoteId,
        totalRead: readNoteIds.length,
        activityByDate,
        currentStreak: computeCurrentStreakFromDates(activeDateSet),
        longestStreak: computeLongestStreakFromDates(activeDates),
    };
}

function buildLocalReadSummary() {
    const readAtByNoteId = Object.fromEntries(getReadCache().entries());
    return buildSummary(readAtByNoteId, getRecordedActivityByDate());
}

function toBulkSyncPayload(localSummary) {
    return localSummary.readNoteIds.map((noteId) => ({
        noteId,
        readAt: localSummary.readAtByNoteId[noteId],
        localDateKey: toLocalDateKey(localSummary.readAtByNoteId[noteId]),
    }));
}

export function clearLocalReadProgress() {
    try {
        localStorage.removeItem('lt_read_index');
        const cache = getReadCache();
        for (const noteId of Array.from(cache.keys())) {
            localStorage.removeItem(storageKey(noteId));
        }
        cache.clear();
    } catch {
        // ignore
    }
}

export async function getReadProgressSnapshot() {
    const client = getClient();
    if (!client) {
        return buildLocalReadSummary();
    }

    try {
        const serverSummary = await callQuery(api.readProgress.getMyReadProgressSummary, {});
        if (!serverSummary) {
            return buildLocalReadSummary();
        }
        return buildSummary(serverSummary.readAtByNoteId || {}, serverSummary.activityByDate || {});
    } catch {
        return buildLocalReadSummary();
    }
}

export function useReadProgressSummary() {
    const [localVersion, setLocalVersion] = useState(0);
    const [serverSummary, setServerSummary] = useState(() => (getClient() ? undefined : null));
    const migrationAttemptedRef = useRef(false);
    const client = getClient();

    useEffect(() => {
        return subscribeToActivityUpdates(() => {
            setLocalVersion((current) => current + 1);
        });
    }, []);

    const localSummary = useMemo(() => {
        void localVersion;
        return buildLocalReadSummary();
    }, [localVersion]);

    useEffect(() => {
        let cancelled = false;

        if (!client) {
            return () => {
                cancelled = true;
            };
        }

        async function loadServerSummary() {
            try {
                const nextSummary = await callQuery(api.readProgress.getMyReadProgressSummary, {});
                if (!cancelled) {
                    setServerSummary(nextSummary || {
                        totalRead: 0,
                        readAtByNoteId: {},
                        activityByDate: {},
                    });
                }
            } catch {
                if (!cancelled) {
                    setServerSummary(null);
                }
            }
        }

        void loadServerSummary();

        return () => {
            cancelled = true;
        };
    }, [client]);

    useEffect(() => {
        if (serverSummary === undefined || migrationAttemptedRef.current) return;
        if (!serverSummary) return;
        if (serverSummary.totalRead > 0 || localSummary.totalRead === 0) return;

        migrationAttemptedRef.current = true;
        void callMutation(api.readProgress.bulkSyncReadProgress, {
            readStatesJson: JSON.stringify(toBulkSyncPayload(localSummary)),
        }).catch(() => {
            migrationAttemptedRef.current = false;
        });
    }, [localSummary, serverSummary]);

    if (serverSummary === undefined) {
        return localSummary;
    }

    if (!serverSummary) {
        return localSummary;
    }

    if (serverSummary.totalRead === 0 && localSummary.totalRead > 0) {
        return localSummary;
    }

    return buildSummary(serverSummary.readAtByNoteId || {}, serverSummary.activityByDate || {});
}

/**
 * Returns { isRead, readAt, markRead, markUnread }
 * @param {string} noteId  e.g. "note:chemistry:1:1:0"
 */
export function useNoteReadStatus(noteId) {
    const summary = useReadProgressSummary();
    const client = getClient();
    const readAt = summary.readAtByNoteId[noteId] || null;

    const markRead = useCallback(() => {
        if (readAt) return;
        const now = new Date().toISOString();
        markReadLocally(noteId, now);
        emitReadProgressUpdate();
        if (client) {
            void callMutation(api.readProgress.markNoteRead, { noteId, readAt: now, localDateKey: toLocalDateKey(now) });
        }
    }, [client, noteId, readAt]);

    const markUnread = useCallback(() => {
        markUnreadLocally(noteId);
        emitReadProgressUpdate();
        if (client) {
            void callMutation(api.readProgress.markNoteUnread, { noteId });
        }
    }, [client, noteId]);

    return {
        isRead: Boolean(readAt),
        readAt,
        markRead,
        markUnread,
    };
}

/**
 * Returns the count of all notes that have been marked as read.
 * Uses the module-level cache to avoid O(n) localStorage scans.
 */
export function getTotalReadCount() {
    return buildLocalReadSummary().totalRead;
}

/**
 * Computes the current study streak (consecutive days with at least one read).
 * Counts back from today; if today has no reads, checks from yesterday.
 */
export function computeStudyStreak() {
    return buildLocalReadSummary().currentStreak;
}

/**
 * Returns a map of { 'YYYY-MM-DD': count } for every day a note was read.
 */
export function getActivityByDate() {
    return buildLocalReadSummary().activityByDate;
}

/**
 * Returns the longest ever consecutive-day study streak.
 */
export function computeLongestStreak() {
    return buildLocalReadSummary().longestStreak;
}

/**
 * Returns a Set of all noteIds that have been marked read.
 * Uses the module-level cache to avoid O(n) localStorage scans.
 */
export function getReadNoteIds() {
    return new Set(buildLocalReadSummary().readNoteIds);
}

export function subscribeToReadProgressUpdates(callback) {
    return subscribeToActivityUpdates(callback);
}
