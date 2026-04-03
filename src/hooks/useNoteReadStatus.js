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

import { useState, useCallback } from 'react';
import { getRecordedActivityByDate, subscribeToActivityUpdates } from '../services/activityStore.js';

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

/**
 * Returns { isRead, readAt, markRead, markUnread }
 * @param {string} noteId  e.g. "note:chemistry:1:1:0"
 */
export function useNoteReadStatus(noteId) {
    const key = storageKey(noteId);

    const [readAt, setReadAt] = useState(() => {
        try {
            return localStorage.getItem(key) || null;
        } catch {
            return null;
        }
    });

    const markRead = useCallback(() => {
        if (readAt) return;
        const now = new Date().toISOString();
        try {
            localStorage.setItem(key, now);
            const cache = getReadCache();
            cache.set(noteId, now);
            localStorage.setItem('lt_read_index', JSON.stringify(Array.from(cache.keys())));
        } catch {
            // storage quota exceeded — ignore
        }
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('lt:activity-updated'));
        }
        setReadAt(now);
    }, [key, readAt, noteId]);

    const markUnread = useCallback(() => {
        try {
            localStorage.removeItem(key);
            const cache = getReadCache();
            cache.delete(noteId);
            localStorage.setItem('lt_read_index', JSON.stringify(Array.from(cache.keys())));
        } catch {
            // ignore
        }
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('lt:activity-updated'));
        }
        setReadAt(null);
    }, [key, noteId]);

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
    return getReadCache().size;
}

/**
 * Computes the current study streak (consecutive days with at least one read).
 * Counts back from today; if today has no reads, checks from yesterday.
 */
export function computeStudyStreak() {
    const dates = new Set();
    try {
        for (const ts of getReadCache().values()) {
            if (ts) {
                // Use local date (en-CA produces YYYY-MM-DD in browser locale timezone)
                // to avoid off-by-one day errors for users outside UTC.
                dates.add(new Date(ts).toLocaleDateString('en-CA'));
            }
        }
    } catch {
        return 0;
    }
    if (dates.size === 0) return 0;

    const today = new Date();
    const todayStr = today.toLocaleDateString('en-CA');
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toLocaleDateString('en-CA');

    if (!dates.has(todayStr) && !dates.has(yesterdayStr)) return 0;

    const startOffset = dates.has(todayStr) ? 0 : 1;
    let streak = 0;
    for (let d = startOffset; ; d++) {
        const date = new Date(today);
        date.setDate(date.getDate() - d);
        if (dates.has(date.toLocaleDateString('en-CA'))) {
            streak++;
        } else {
            break;
        }
    }
    return streak;
}

/**
 * Returns a map of { 'YYYY-MM-DD': count } for every day a note was read.
 */
export function getActivityByDate() {
    const map = { ...getRecordedActivityByDate() };
    try {
        for (const ts of getReadCache().values()) {
            if (ts) {
                // Use local date for heatmap accuracy in non-UTC timezones.
                const date = new Date(ts).toLocaleDateString('en-CA');
                map[date] = (map[date] || 0) + 1;
            }
        }
    } catch { /* ignore */ }
    return map;
}

/**
 * Returns the longest ever consecutive-day study streak.
 */
export function computeLongestStreak() {
    const map = getActivityByDate();
    const sorted = Object.keys(map).sort();
    if (sorted.length === 0) return 0;
    let longest = 1;
    let current = 1;
    for (let i = 1; i < sorted.length; i++) {
        const diff = Math.round(
            (new Date(sorted[i]) - new Date(sorted[i - 1])) / 86400000
        );
        if (diff === 1) {
            current++;
            if (current > longest) longest = current;
        } else {
            current = 1;
        }
    }
    return longest;
}

/**
 * Returns a Set of all noteIds that have been marked read.
 * Uses the module-level cache to avoid O(n) localStorage scans.
 */
export function getReadNoteIds() {
    return new Set(getReadCache().keys());
}

export function subscribeToReadProgressUpdates(callback) {
    return subscribeToActivityUpdates(callback);
}
