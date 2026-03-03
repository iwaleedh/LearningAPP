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
