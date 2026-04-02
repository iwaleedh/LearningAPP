/**
 * activityStore
 *
 * Lightweight localStorage counters for exercise questions answered
 * and past papers viewed. Consumed by HomePage stats.
 *
 * Keys:
 *   lt_exercises_done  — total exercise questions answered
 *   lt_papers_viewed   — total past-paper PDFs opened/downloaded
 */

const EXERCISE_KEY = 'lt_exercises_done';
const PAPER_KEY = 'lt_papers_viewed';

export function getExercisesDone() {
    try {
        return parseInt(localStorage.getItem(EXERCISE_KEY) || '0', 10);
    } catch {
        return 0;
    }
}

export function incrementExercisesDone() {
    try {
        localStorage.setItem(EXERCISE_KEY, String(getExercisesDone() + 1));
    } catch { /* storage full — ignore */ }
}

export function getPapersViewed() {
    try {
        return parseInt(localStorage.getItem(PAPER_KEY) || '0', 10);
    } catch {
        return 0;
    }
}

export function incrementPapersViewed() {
    try {
        localStorage.setItem(PAPER_KEY, String(getPapersViewed() + 1));
    } catch { /* storage full — ignore */ }
}
