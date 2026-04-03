/**
 * activityStore
 *
 * Lightweight localStorage counters for exercise questions answered
 * and past papers viewed. Consumed by HomePage stats.
 *
 * Keys:
 *   lt_exercises_done  — total exercise questions answered
 *   lt_papers_viewed   — total past-paper PDFs opened/downloaded
 *   lt_activity_days   — map of YYYY-MM-DD -> total study actions for heatmap/streak UI
 */

const EXERCISE_KEY = 'lt_exercises_done';
const PAPER_KEY = 'lt_papers_viewed';
const PERFECT_SCORES_KEY = 'lt_perfect_scores';  // D5
const FAST_COMPLETIONS_KEY = 'lt_fast_completions'; // D5
const ACTIVITY_DAYS_KEY = 'lt_activity_days';
const ACTIVITY_EVENT = 'lt:activity-updated';

function emitActivityUpdate() {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent(ACTIVITY_EVENT));
}

function readActivityDays() {
    try {
        const raw = localStorage.getItem(ACTIVITY_DAYS_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function writeActivityDays(days) {
    try {
        localStorage.setItem(ACTIVITY_DAYS_KEY, JSON.stringify(days));
    } catch (error) {
        console.error('[activityStore] writeActivityDays failed:', error);
        window.dispatchEvent(new CustomEvent('app:toast', { detail: { type: 'error', message: 'Local storage quota exceeded. Activity discarded.' } }));
    }
}

function incrementCounter(key, amount = 1) {
    try {
        const current = parseInt(localStorage.getItem(key) || '0', 10);
        localStorage.setItem(key, String(current + amount));
    } catch (error) {
        console.error(`[activityStore] incrementCounter failed for ${key}:`, error);
        window.dispatchEvent(new CustomEvent('app:toast', { detail: { type: 'error', message: 'Local storage quota exceeded. Count not saved.' } }));
    }
}

export function recordStudyActivity(amount = 1, when = new Date()) {
    // D14: Use local date (en-CA = YYYY-MM-DD) to avoid UTC off-by-one.
    const dateKey = new Date(when).toLocaleDateString('en-CA');
    const days = readActivityDays();
    days[dateKey] = (Number(days[dateKey]) || 0) + amount;
    writeActivityDays(days);
    emitActivityUpdate();
}

export function getRecordedActivityByDate() {
    const days = readActivityDays();
    return Object.fromEntries(
        Object.entries(days).map(([date, count]) => [date, Number(count) || 0]),
    );
}

export function subscribeToActivityUpdates(callback) {
    if (typeof window === 'undefined') {
        return () => {};
    }

    const handleCustom = () => callback();
    const handleStorage = (event) => {
        if (!event.key || [EXERCISE_KEY, PAPER_KEY, ACTIVITY_DAYS_KEY].includes(event.key)) {
            callback();
        }
    };

    window.addEventListener(ACTIVITY_EVENT, handleCustom);
    window.addEventListener('storage', handleStorage);

    return () => {
        window.removeEventListener(ACTIVITY_EVENT, handleCustom);
        window.removeEventListener('storage', handleStorage);
    };
}

export function getExercisesDone() {
    try {
        return parseInt(localStorage.getItem(EXERCISE_KEY) || '0', 10);
    } catch {
        return 0;
    }
}

export function incrementExercisesDone() {
    incrementCounter(EXERCISE_KEY, 1);
    recordStudyActivity(1);
}

export function getPapersViewed() {
    try {
        return parseInt(localStorage.getItem(PAPER_KEY) || '0', 10);
    } catch {
        return 0;
    }
}

export function incrementPapersViewed() {
    incrementCounter(PAPER_KEY, 1);
    recordStudyActivity(1);
}

// D5: Perfect score and fast-completion counters for BadgeSystem.
export function getPerfectScores() {
    try {
        return parseInt(localStorage.getItem(PERFECT_SCORES_KEY) || '0', 10);
    } catch {
        return 0;
    }
}

/** Call this when a timed exam is submitted with 100% score. */
export function incrementPerfectScores() {
    incrementCounter(PERFECT_SCORES_KEY, 1);
    emitActivityUpdate();
}

export function getFastCompletions() {
    try {
        return parseInt(localStorage.getItem(FAST_COMPLETIONS_KEY) || '0', 10);
    } catch {
        return 0;
    }
}

/** Call this when a timed exam is submitted with >50% time remaining. */
export function incrementFastCompletions() {
    incrementCounter(FAST_COMPLETIONS_KEY, 1);
    emitActivityUpdate();
}
