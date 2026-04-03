import { useState, useEffect, useCallback } from 'react';
import { Highlighter as HighlighterIcon, X } from 'lucide-react';
import './StudentTools.css';

const HIGHLIGHT_COLORS = [
    { name: 'Yellow', color: 'rgba(250, 204, 21, 0.4)', solid: '#facc15' },
    { name: 'Green', color: 'rgba(74, 222, 128, 0.4)', solid: '#4ade80' },
    { name: 'Blue', color: 'rgba(96, 165, 250, 0.4)', solid: '#60a5fa' },
    { name: 'Pink', color: 'rgba(244, 114, 182, 0.4)', solid: '#f472b6' },
    { name: 'Orange', color: 'rgba(251, 146, 60, 0.4)', solid: '#fb923c' },
];

export default function Highlighter({ chapterId = 'default' }) {
    const storageKey = `highlights_${chapterId}`;
    const [highlights, setHighlights] = useState(() => {
        try {
            const saved = localStorage.getItem(`highlights_${chapterId}`);
            return saved ? JSON.parse(saved) : [];
        } catch { return []; }
    });
    const [activeColor, setActiveColor] = useState(HIGHLIGHT_COLORS[0]);
    const [isActive, setIsActive] = useState(false);


    // Save to localStorage
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(highlights));
    }, [highlights, storageKey]);

    // Apply existing highlights to DOM
    useEffect(() => {
        if ('highlights' in CSS) {
            CSS.highlights.clear();
            const colorMap = {};
            highlights.forEach(h => {
                const walker = document.createTreeWalker(
                    document.querySelector('.chapter-body') || document.body,
                    NodeFilter.SHOW_TEXT, null, false
                );
                let node;
                while ((node = walker.nextNode())) {
                    const idx = node.textContent.indexOf(h.text);
                    if (idx !== -1) {
                        const range = document.createRange();
                        range.setStart(node, idx);
                        range.setEnd(node, idx + h.text.length);
                        if (!colorMap[h.colorName]) colorMap[h.colorName] = [];
                        colorMap[h.colorName].push(range);
                        break;
                    }
                }
            });
            Object.entries(colorMap).forEach(([colorName, ranges]) => {
                const highlight = new Highlight(...ranges);
                CSS.highlights.set(`user-highlight-${colorName.toLowerCase()}`, highlight);
            });
            return;
        }

        // Clear all existing highlights first (fallback)
        document.querySelectorAll('.user-highlight').forEach(el => {
            const parent = el.parentNode;
            if (parent) {
                parent.replaceChild(document.createTextNode(el.textContent), el);
                parent.normalize();
            }
        });

        // Re-apply saved highlights
        highlights.forEach(h => {
            const walker = document.createTreeWalker(
                document.querySelector('.chapter-body') || document.body,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );

            let node;
            while ((node = walker.nextNode())) {
                const idx = node.textContent.indexOf(h.text);
                if (idx !== -1) {
                    const range = document.createRange();
                    range.setStart(node, idx);
                    range.setEnd(node, idx + h.text.length);
                    const mark = document.createElement('mark');
                    mark.className = 'user-highlight';
                    mark.style.backgroundColor = h.color;
                    mark.dataset.highlightId = h.id;
                    range.surroundContents(mark);
                    break;
                }
            }
        });
    }, [highlights]);

    // Listen for text selection
    const handleHighlight = useCallback(() => {
        if (!isActive) return;
        const selection = window.getSelection();
        const text = selection?.toString().trim();
        if (!text || text.length < 2) return;

        const newHighlight = {
            id: Date.now().toString(),
            text,
            color: activeColor.color,
            colorName: activeColor.name,
            createdAt: new Date().toISOString(),
        };

        setHighlights(prev => [...prev, newHighlight]);
        selection.removeAllRanges();
    }, [isActive, activeColor]);

    useEffect(() => {
        document.addEventListener('mouseup', handleHighlight);
        return () => document.removeEventListener('mouseup', handleHighlight);
    }, [handleHighlight]);

    const clearAll = () => {
        setHighlights([]);
    };

    return (
        <div className="highlighter-toolbar">
            <button
                className={`btn btn-sm highlighter-toggle ${isActive ? 'active' : ''}`}
                onClick={() => setIsActive(!isActive)}
                title="Toggle highlighter"
            >
                <HighlighterIcon size={14} />
                {isActive ? 'Highlighting ON' : 'Highlight'}
            </button>

            {isActive && (
                <div className="highlighter-colors">
                    {HIGHLIGHT_COLORS.map(c => (
                        <button
                            key={c.name}
                            className={`highlighter-swatch ${activeColor.name === c.name ? 'active' : ''}`}
                            style={{ backgroundColor: c.solid }}
                            onClick={() => setActiveColor(c)}
                            title={c.name}
                        />
                    ))}
                </div>
            )}

            {highlights.length > 0 && (
                <div className="highlighter-info">
                    <span className="highlighter-count">{highlights.length} highlights</span>
                    <button className="btn btn-ghost btn-sm" onClick={clearAll}>
                        <X size={12} /> Clear
                    </button>
                </div>
            )}
        </div>
    );
}
