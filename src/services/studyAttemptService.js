import { api, callMutation, getClient } from '../convex-client.js';
import { notifyActivityUpdated } from './activityStore.js';

function clampPercent(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
    return Math.max(0, Math.min(100, Math.round(value)));
}

function normalizeDuration(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) return undefined;
    return Math.max(1, Math.round(value));
}

function stringifyMetadata(value) {
    if (!value || typeof value !== 'object') return undefined;
    try {
        return JSON.stringify(value);
    } catch {
        return undefined;
    }
}

// D1: Generate a UUID for idempotency. Falls back to a timestamp-based key
// if the Web Crypto API is unavailable (older environments).
function generateClientAttemptId() {
    try {
        return crypto.randomUUID();
    } catch {
        return `fallback-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }
}

export async function recordStudyAttempt(payload) {
    if (!getClient()) return { success: false, error: 'Not authenticated or client missing' };

    const activityDateKey = typeof payload.activityDateKey === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(payload.activityDateKey)
        ? payload.activityDateKey
        : new Date().toLocaleDateString('en-CA');

    // D1: Use caller-supplied key (set at button-click time) or generate one now.
    const clientAttemptId = payload.clientAttemptId || generateClientAttemptId();

    try {
        const result = await callMutation(api.studyAttempts.recordAttempt, {
            sourceType: String(payload.sourceType || ''),
            activityType: String(payload.activityType || ''),
            subject: String(payload.subject || ''),
            unitId: typeof payload.unitId === 'number' ? payload.unitId : undefined,
            topicId: typeof payload.topicId === 'number' ? payload.topicId : undefined,
            questionKey: String(payload.questionKey || ''),
            prompt: String(payload.prompt || ''),
            topic: payload.topic ? String(payload.topic) : undefined,
            paperId: payload.paperId ? String(payload.paperId) : undefined,
            paperTitle: payload.paperTitle ? String(payload.paperTitle) : undefined,
            correct: typeof payload.correct === 'boolean' ? payload.correct : undefined,
            scorePercent: clampPercent(payload.scorePercent),
            confidence: payload.confidence ? String(payload.confidence) : undefined,
            durationSeconds: normalizeDuration(payload.durationSeconds),
            activityDateKey,
            metadataJson: stringifyMetadata(payload.metadata),
            clientAttemptId,
        });
        notifyActivityUpdated();
        return { success: true, data: result };
    } catch (error) {
        console.error('[StudyAttemptService] recordAttempt failed:', error);
        return { success: false, error: error.message };
    }
}

export async function recordExerciseAttempt(payload) {
    return await recordStudyAttempt({
        ...payload,
        sourceType: 'exercise',
    });
}

export async function recordPastPaperActivity(payload) {
    return await recordStudyAttempt({
        ...payload,
        sourceType: 'pastpaper',
    });
}
