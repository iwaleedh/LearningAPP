import { useState, useEffect, useRef } from 'react';
import { StickyNote as StickyNoteIcon, Plus, X, Trash2 } from 'lucide-react';
import './StudentTools.css';

const NOTE_COLORS = [
    'var(--sticky-yellow, #fef3c7)',
    'var(--sticky-green, #d1fae5)',
    'var(--sticky-blue, #dbeafe)',
    'var(--sticky-pink, #fce7f3)',
    'var(--sticky-purple, #ede9fe)',
];

export default function StickyNotes({ chapterId = 'default' }) {
    const storageKey = `stickynotes_${chapterId}`;
    const [notes, setNotes] = useState(() => {
        try {
            const saved = localStorage.getItem(`stickynotes_${chapterId}`);
            return saved ? JSON.parse(saved) : [];
        } catch { return []; }
    });
    const [isOpen, setIsOpen] = useState(false);
    const colorIndex = useRef(0);

    // Save
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(notes));
    }, [notes, storageKey]);

    const addNote = () => {
        const color = NOTE_COLORS[colorIndex.current % NOTE_COLORS.length];
        colorIndex.current++;
        setNotes(prev => [...prev, {
            id: Date.now().toString(),
            content: '',
            color,
            x: 40 + Math.random() * 100,
            y: 60 + Math.random() * 80,
        }]);
    };

    const updateNote = (id, content) => {
        setNotes(prev => prev.map(n => n.id === id ? { ...n, content } : n));
    };

    const deleteNote = (id) => {
        setNotes(prev => prev.filter(n => n.id !== id));
    };

    const handleDragStart = (e, noteId) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.dataTransfer.setData('noteId', noteId);
        e.dataTransfer.setData('offsetX', String(e.clientX - rect.left));
        e.dataTransfer.setData('offsetY', String(e.clientY - rect.top));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('noteId');
        const offsetX = parseInt(e.dataTransfer.getData('offsetX'));
        const offsetY = parseInt(e.dataTransfer.getData('offsetY'));
        const container = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - container.left - offsetX + e.currentTarget.scrollLeft;
        const y = e.clientY - container.top - offsetY + e.currentTarget.scrollTop;
        setNotes(prev => prev.map(n => n.id === id ? { ...n, x, y } : n));
    };

    return (
        <div className="sticky-notes-section">
            <div className="sticky-toggle-bar">
                <button
                    className={`btn btn-sm ${isOpen ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <StickyNoteIcon size={14} />
                    Notes ({notes.length})
                </button>
                {isOpen && (
                    <button className="btn btn-sm btn-ghost" onClick={addNote}>
                        <Plus size={14} /> Add Note
                    </button>
                )}
            </div>

            {isOpen && (
                <div
                    className="sticky-canvas"
                    onDrop={handleDrop}
                    onDragOver={e => e.preventDefault()}
                >
                    {notes.length === 0 && (
                        <div className="sticky-empty">
                            <StickyNoteIcon size={24} />
                            <p>Click "Add Note" to create a sticky note</p>
                        </div>
                    )}
                    {notes.map(note => (
                        <div
                            key={note.id}
                            className="sticky-note"
                            style={{
                                left: `${note.x}px`,
                                top: `${note.y}px`,
                                backgroundColor: note.color,
                            }}
                            draggable
                            onDragStart={(e) => handleDragStart(e, note.id)}
                        >
                            <div className="sticky-header">
                                <div className="sticky-drag-handle">≡</div>
                                <button
                                    className="sticky-delete"
                                    onClick={() => deleteNote(note.id)}
                                >
                                    <X size={12} />
                                </button>
                            </div>
                            <textarea
                                className="sticky-textarea"
                                value={note.content}
                                onChange={(e) => updateNote(note.id, e.target.value)}
                                placeholder="Type here..."
                                rows={4}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
