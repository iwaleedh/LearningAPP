import { Download } from 'lucide-react';
import './StudentTools.css';

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

        // Build printable HTML
        const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${chapterTitle} — Study Notes Export</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', system-ui, sans-serif; padding: 40px; color: #1a1a2e; line-height: 1.6; }
        h1 { font-size: 24px; margin-bottom: 8px; color: #6366f1; }
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
    <h1>📒 ${chapterTitle}</h1>
    <p class="subtitle">Study Notes Export · ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>

    <h2>🖍️ Highlights (${highlights.length})</h2>
    ${highlights.length === 0
                ? '<p class="empty">No highlights saved for this chapter.</p>'
                : highlights.map(h => `
            <div class="highlight-item">
                <div class="highlight-swatch" style="background:${h.color}"></div>
                <div>
                    <div class="highlight-text">"${h.text}"</div>
                    <div class="highlight-meta">${h.colorName} · ${new Date(h.createdAt).toLocaleString()}</div>
                </div>
            </div>
        `).join('')
            }

    <h2>📝 Sticky Notes (${notes.length})</h2>
    ${notes.length === 0
                ? '<p class="empty">No sticky notes for this chapter.</p>'
                : notes.map(n => `<div class="note-card">${n.content || '(empty note)'}</div>`).join('')
            }
</body>
</html>`;

        // Open print dialog
        const printWindow = window.open('', '_blank');
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
