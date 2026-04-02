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

const PREFIX = 'lt_read:';

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
        const now = new Date().toISOString();
        try {
            localStorage.setItem(key, now);
        } catch {
            // storage quota exceeded — ignore
        }
        setReadAt(now);
    }, [key]);

    const markUnread = useCallback(() => {
        try {
            localStorage.removeItem(key);
        } catch {
            // ignore
        }
        setReadAt(null);
    }, [key]);

    return {
        isRead: Boolean(readAt),
        readAt,
        markRead,
        markUnread,
    };
}

/**
 * Returns the count of all notes that have been marked as read.
 * Scans localStorage for keys with the lt_read: prefix.
 */
export function getTotalReadCount() {
    try {
        let count = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.startsWith(PREFIX)) count++;
        }
        return count;
    } catch {
        return 0;
    }
}

/**
 * Computes the current study streak (consecutive days with at least one read).
 * Counts back from today; if today has no reads, checks from yesterday.
 */
export function computeStudyStreak() {
    const dates = new Set();
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.startsWith(PREFIX)) {
                const ts = localStorage.getItem(k);
                if (ts) dates.add(ts.slice(0, 10)); // "YYYY-MM-DD" (UTC)
            }
        }
    } catch {
        return 0;
    }
    if (dates.size === 0) return 0;

    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);

    if (!dates.has(todayStr) && !dates.has(yesterdayStr)) return 0;

    const startOffset = dates.has(todayStr) ? 0 : 1;
    let streak = 0;
    for (let d = startOffset; ; d++) {
        const date = new Date(today);
        date.setDate(date.getDate() - d);
        if (dates.has(date.toISOString().slice(0, 10))) {
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
    const map = {};
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.startsWith(PREFIX)) {
                const ts = localStorage.getItem(k);
                if (ts) {
                    const date = ts.slice(0, 10);
                    map[date] = (map[date] || 0) + 1;
                }
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
 */
export function getReadNoteIds() {
    const ids = new Set();
    try {
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.startsWith(PREFIX)) {
                ids.add(k.slice(PREFIX.length));
            }
        }
    } catch {
        // ignore
    }
    return ids;
}
