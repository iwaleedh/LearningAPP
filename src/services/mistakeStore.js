import { api, callMutation, callQuery, getClient, getCurrentIdentityMode } from '../convex-client.js';

const STORAGE_KEY = 'lt_mistakes';
const MAX_MISTAKES = 200;
const MISTAKE_EVENT = 'lt:mistakes-updated';

function emitMistakeUpdate() {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent(MISTAKE_EVENT));
}

function emitToast(type, message) {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent('app:toast', { detail: { type, message } }));
}

function loadLocalMistakes() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function saveLocalMistakes(mistakes) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mistakes));
    } catch {
        // ignore
    }
}

function buildMistakeKey(mistake) {
    const questionKey = String(mistake.questionKey || '').trim().toLowerCase();
    if (questionKey) return questionKey;

    return [mistake.subject, mistake.topic, mistake.question]
        .map((part) => String(part || '').trim().toLowerCase())
        .join('|');
}

function normalizeMistake(mistake) {
    const question = String(mistake?.question || '').trim();
    if (!question) return null;

    const normalized = {
        id: String(mistake?.id || `m:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`),
        questionKey: String(mistake?.questionKey || '').trim() || undefined,
        question,
        yourAnswer: String(mistake?.yourAnswer || '').trim(),
        correctAnswer: String(mistake?.correctAnswer || '').trim(),
        topic: String(mistake?.topic || 'General').trim() || 'General',
        subject: String(mistake?.subject || '').trim().toLowerCase(),
        attempts: Math.max(1, Number(mistake?.attempts || 1)),
        firstAttemptAt: String(mistake?.firstAttemptAt || mistake?.lastAttempt || new Date().toISOString()),
        lastAttempt: String(mistake?.lastAttempt || new Date().toISOString()),
    };

    return normalized;
}

function saveMistakeLocally(mistake) {
    const normalized = normalizeMistake(mistake);
    if (!normalized) return false;

    const mistakes = loadLocalMistakes();
    const mistakeKey = buildMistakeKey(normalized);
    const existing = mistakes.find((entry) => buildMistakeKey(entry) === mistakeKey);

    if (existing) {
        existing.attempts = Math.max(1, Number(existing.attempts || 1)) + 1;
        existing.questionKey = normalized.questionKey;
        existing.yourAnswer = normalized.yourAnswer;
        existing.correctAnswer = normalized.correctAnswer;
        existing.topic = normalized.topic;
        existing.subject = normalized.subject;
        existing.lastAttempt = normalized.lastAttempt;
    } else {
        mistakes.unshift(normalized);
    }

    saveLocalMistakes(
        mistakes
            .slice()
            .sort((left, right) => String(right.lastAttempt).localeCompare(String(left.lastAttempt)))
            .slice(0, MAX_MISTAKES)
    );
    return true;
}

function isAuthenticatedIntent() {
    return getCurrentIdentityMode() === 'authenticated';
}

function toBulkSyncPayload(mistakes) {
    return mistakes
        .map((mistake) => normalizeMistake(mistake))
        .filter(Boolean)
        .map((mistake) => ({
            questionKey: mistake.questionKey,
            question: mistake.question,
            yourAnswer: mistake.yourAnswer,
            correctAnswer: mistake.correctAnswer,
            topic: mistake.topic,
            subject: mistake.subject,
            attempts: mistake.attempts,
            firstAttemptAt: mistake.firstAttemptAt,
            lastAttemptAt: mistake.lastAttempt,
        }));
}

export function clearLocalMistakes() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        // ignore
    }
}

export async function saveMistake(mistake) {
    const normalized = normalizeMistake(mistake);
    if (!normalized) return false;

    if (!getClient() || !isAuthenticatedIntent()) {
        const saved = saveMistakeLocally(normalized);
        emitMistakeUpdate();
        return saved;
    }

    try {
        await callMutation(api.mistakes.saveMistake, {
            questionKey: normalized.questionKey,
            question: normalized.question,
            yourAnswer: normalized.yourAnswer,
            correctAnswer: normalized.correctAnswer,
            topic: normalized.topic,
            subject: normalized.subject,
        });
        emitMistakeUpdate();
        return true;
    } catch {
        emitToast('warning', 'Mistake could not be synced right now.');
        return false;
    }
}

export async function listMistakes() {
    const localMistakes = loadLocalMistakes()
        .map((mistake) => normalizeMistake(mistake))
        .filter(Boolean)
        .sort((left, right) => String(right.lastAttempt).localeCompare(String(left.lastAttempt)));

    if (!getClient() || !isAuthenticatedIntent()) {
        return localMistakes;
    }

    try {
        let serverMistakes = await callQuery(api.mistakes.listMyMistakes, {});
        if ((!Array.isArray(serverMistakes) || serverMistakes.length === 0) && localMistakes.length > 0) {
            await callMutation(api.mistakes.bulkSyncMistakes, {
                mistakesJson: JSON.stringify(toBulkSyncPayload(localMistakes)),
            });
            clearLocalMistakes();
            emitMistakeUpdate();
            serverMistakes = await callQuery(api.mistakes.listMyMistakes, {});
        }
        return Array.isArray(serverMistakes) ? serverMistakes : [];
    } catch {
        emitToast('warning', 'Mistake Bank is unavailable right now.');
        return [];
    }
}

export async function removeMistake(id) {
    if (!id) return false;

    if (!getClient() || !isAuthenticatedIntent()) {
        saveLocalMistakes(loadLocalMistakes().filter((mistake) => mistake.id !== id));
        emitMistakeUpdate();
        return true;
    }

    try {
        await callMutation(api.mistakes.removeMistake, { mistakeId: id });
        emitMistakeUpdate();
        return true;
    } catch {
        emitToast('warning', 'Mistake could not be removed right now.');
        return false;
    }
}

export async function clearMistakes() {
    if (!getClient() || !isAuthenticatedIntent()) {
        clearLocalMistakes();
        emitMistakeUpdate();
        return true;
    }

    try {
        await callMutation(api.mistakes.clearMyMistakes, {});
        clearLocalMistakes();
        emitMistakeUpdate();
        return true;
    } catch {
        emitToast('warning', 'Mistake Bank could not be cleared right now.');
        return false;
    }
}
