import { escapeHtml, isSafeCssColor } from '../../utils/sanitize.js';

const DEFAULT_HIGHLIGHT_COLOR = '#facc15';
const DEFAULT_HIGHLIGHT_COLOR_NAME = 'highlight';

function safeTimestamp(value) {
    const timestamp = new Date(value);
    return Number.isNaN(timestamp.getTime()) ? 'Unknown time' : timestamp.toLocaleString();
}

function sanitizeHighlight(value) {
    if (!value || typeof value !== 'object') return null;

    const text = typeof value.text === 'string' ? value.text.trim() : '';
    if (!text) return null;

    const color = isSafeCssColor(value.color) ? value.color.trim() : DEFAULT_HIGHLIGHT_COLOR;
    const colorName = typeof value.colorName === 'string' && value.colorName.trim()
        ? value.colorName.trim()
        : DEFAULT_HIGHLIGHT_COLOR_NAME;

    return {
        text,
        color,
        colorName,
        createdAt: safeTimestamp(value.createdAt),
    };
}

function sanitizeStickyNote(value) {
    if (!value || typeof value !== 'object') return null;

    const content = typeof value.content === 'string' ? value.content : '';
    return {
        content: content.trim() || '(empty note)',
    };
}

export function parseStoredExportItems(raw, sanitizer) {
    if (!raw) return [];

    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch {
        return [];
    }

    if (!Array.isArray(parsed)) return [];
    return parsed.map(sanitizer).filter(Boolean);
}

export function parseStoredHighlights(raw) {
    return parseStoredExportItems(raw, sanitizeHighlight);
}

export function parseStoredStickyNotes(raw) {
    return parseStoredExportItems(raw, sanitizeStickyNote);
}

export function buildExportHtml({ chapterTitle, highlights, notes, generatedAt = new Date() }) {
    const safeTitle = escapeHtml(chapterTitle || 'Chapter');
    const safeDate = generatedAt.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data:; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'">
    <title>${safeTitle} - Study Notes Export</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; padding: 40px; color: #1a1a2e; line-height: 1.6; }
        h1 { font-size: 24px; margin-bottom: 8px; color: #3b82f6; }
        .subtitle { color: #6b7280; font-size: 13px; margin-bottom: 32px; }
        h2 { font-size: 18px; margin: 24px 0 12px; padding-bottom: 6px; border-bottom: 2px solid #e5e7eb; }
        .highlight-item { display: flex; align-items: flex-start; gap: 12px; padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
        .highlight-swatch { width: 16px; height: 16px; border-radius: 4px; flex-shrink: 0; margin-top: 3px; }
        .highlight-text { font-size: 14px; }
        .highlight-meta { font-size: 11px; color: #9ca3af; margin-top: 2px; }
        .note-card { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 12px 16px; margin-bottom: 12px; font-size: 14px; white-space: pre-wrap; }
        .empty { color: #9ca3af; font-style: italic; font-size: 14px; }
        @media print { body { padding: 20px; } }
    </style>
</head>
<body>
    <h1>📒 ${safeTitle}</h1>
    <p class="subtitle">Study Notes Export · ${safeDate}</p>

    <h2>🖍️ Highlights (${highlights.length})</h2>
    ${highlights.length === 0
        ? '<p class="empty">No highlights saved for this chapter.</p>'
        : highlights.map((highlight) => `
        <div class="highlight-item">
            <div class="highlight-swatch" style="background:${highlight.color}"></div>
            <div>
                <div class="highlight-text">&ldquo;${escapeHtml(highlight.text)}&rdquo;</div>
                <div class="highlight-meta">${escapeHtml(highlight.colorName)} · ${escapeHtml(highlight.createdAt)}</div>
            </div>
        </div>
    `).join('')}

    <h2>📝 Sticky Notes (${notes.length})</h2>
    ${notes.length === 0
        ? '<p class="empty">No sticky notes for this chapter.</p>'
        : notes.map((note) => `<div class="note-card">${escapeHtml(note.content)}</div>`).join('')}
</body>
</html>`;
}