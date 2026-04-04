import { escapeRegExp } from '../../utils/sanitize.js';

const MAX_KEYWORD_LENGTH = 200;

export function normalizeKeywords(keywords) {
    if (!Array.isArray(keywords)) return [];

    const seen = new Set();
    const normalized = [];

    for (const keyword of keywords) {
        if (typeof keyword !== 'string') continue;
        const trimmed = keyword.trim();
        if (!trimmed || trimmed.length > MAX_KEYWORD_LENGTH) continue;

        const key = trimmed.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        normalized.push(trimmed);
    }

    return normalized;
}

export function findKeywords(answer, keywords) {
    const normalizedAnswer = typeof answer === 'string' ? answer.toLowerCase() : '';
    const normalizedKeywords = normalizeKeywords(keywords);

    return normalizedKeywords.filter((keyword) => normalizedAnswer.includes(keyword.toLowerCase()));
}

export function highlightKeywords(answer, keywords) {
    if (typeof answer !== 'string' || !answer) return '';

    let highlighted = answer;
    for (const keyword of normalizeKeywords(keywords)) {
        const regex = new RegExp(`(${escapeRegExp(keyword)})`, 'gi');
        highlighted = highlighted.replace(regex, '⟨$1⟩');
    }

    return highlighted;
}