/**
 * Shared sanitization helpers used by ExportPDF, KeywordCheck, and tests.
 *
 * escapeHtml  — Prevents XSS when interpolating into raw HTML strings.
 * escapeRegExp — Prevents ReDoS / regex injection when building RegExp from strings.
 */

/**
 * Escape HTML special characters to prevent XSS in raw HTML contexts.
 * Covers all five dangerous characters (& must be first to avoid double-escaping).
 */
export function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

/** Escape all regex metacharacters in a string before using it in new RegExp(). */
export function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const SAFE_COLOR_PATTERNS = [
    /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i,
    /^rgb\(\s*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,\s*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,\s*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*\)$/i,
    /^rgba\(\s*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,\s*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,\s*(?:25[0-5]|2[0-4]\d|1?\d?\d)\s*,\s*(?:0|0?\.\d+|1(?:\.0+)?)\s*\)$/i,
];

export function isSafeCssColor(value) {
    if (typeof value !== 'string') return false;
    const trimmed = value.trim();
    return SAFE_COLOR_PATTERNS.some((pattern) => pattern.test(trimmed));
}
