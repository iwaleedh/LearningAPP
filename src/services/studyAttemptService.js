import { api, callMutation, getClient } from '../convex-client.js';

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

export async function recordStudyAttempt(payload) {
    if (!getClient()) return { success: false, error: 'Not authenticated or client missing' };

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
            metadataJson: stringifyMetadata(payload.metadata),
        });
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
