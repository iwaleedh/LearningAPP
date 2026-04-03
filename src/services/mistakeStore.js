/**
 * mistakeStore
 *
 * Persists wrong exercise answers to localStorage so MistakeBankPage
 * can show them for review.
 *
 * Key: lt_mistakes  →  JSON array of mistake objects
 *
 * Mistake shape:
 *   { id, question, yourAnswer, correctAnswer, topic, subject, attempts, lastAttempt }
 */

const STORAGE_KEY = 'lt_mistakes';
const MAX_MISTAKES = 200;

function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function save(mistakes) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mistakes));
    } catch { /* storage full — ignore */ }
}

/**
 * Record a wrong answer. If the same question already exists, increment
 * attempts and update the timestamp instead of creating a duplicate.
 */
export function saveMistake({ question, yourAnswer, correctAnswer, topic, subject }) {
    const mistakes = load();
    const now = new Date().toISOString();

    const existing = mistakes.find(m => m.question.toLowerCase() === question.toLowerCase());
    if (existing) {
        existing.attempts += 1;
        existing.yourAnswer = yourAnswer;
        existing.lastAttempt = now;
    } else {
        mistakes.unshift({
            id: `m:${Date.now()}:${Math.random().toString(36).slice(2, 6)}`,
            question,
            yourAnswer,
            correctAnswer,
            topic: topic || 'General',
            subject: subject || '',
            attempts: 1,
            lastAttempt: now,
        });
    }

    save(mistakes.slice(0, MAX_MISTAKES));
}

/** Returns all mistakes, most recent first. */
export function listMistakes() {
    return load();
}

/** Remove a single mistake by id (e.g. after the user masters it). */
export function removeMistake(id) {
    save(load().filter(m => m.id !== id));
}

/** Clear everything (used by a "clear all" action). */
export function clearMistakes() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch { /* ignore */ }
}
