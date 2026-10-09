// Remembers the last note a student opened so Home can offer "Continue learning".
const RECENT_NOTE_KEY = 'lt_recent_note';

export function saveRecentNote(entry) {
    if (typeof window === 'undefined' || !entry?.path) return;
    try {
        window.localStorage.setItem(RECENT_NOTE_KEY, JSON.stringify({ ...entry, openedAt: Date.now() }));
    } catch {
        // Storage can be unavailable (private mode, quota); Home simply shows no resume card.
    }
}

export function readRecentNote() {
    if (typeof window === 'undefined') return null;
    try {
        const value = JSON.parse(window.localStorage.getItem(RECENT_NOTE_KEY) || 'null');
        return value && typeof value.path === 'string' && value.path.startsWith('/notes/') ? value : null;
    } catch {
        return null;
    }
}
