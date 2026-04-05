import { ChevronLeft, ChevronRight, Minimize2 } from 'lucide-react';

export default function NoteReadingToolbar({
    title,
    compact,
    hidden,
    hasPrevNote,
    hasNextNote,
    hasPrevSection,
    hasNextSection,
    onPrevNote,
    onNextNote,
    onPrevSection,
    onNextSection,
    onExit,
}) {
    return (
        <div
            className={[
                'note-fullscreen-toolbar',
                compact ? 'note-fullscreen-toolbar--compact note-overlay-controls' : '',
                compact && hidden ? 'note-overlay-controls--hidden' : '',
                compact && !hidden ? 'note-overlay-controls--visible' : '',
            ].filter(Boolean).join(' ')}
            role="toolbar"
            aria-label="Fullscreen note reading controls"
        >
            <div className="note-fullscreen-toolbar__title" title={title}>{title}</div>

            {!compact ? (
                <div className="note-fullscreen-toolbar__cluster" aria-label="Section navigation">
                    <button type="button" className="btn btn-sm btn-ghost" onClick={onPrevSection} disabled={!hasPrevSection} aria-label="Previous section">
                        <ChevronLeft size={16} aria-hidden="true" />
                        <span className="note-btn-label">Prev section</span>
                    </button>
                    <button type="button" className="btn btn-sm btn-ghost" onClick={onNextSection} disabled={!hasNextSection} aria-label="Next section">
                        <span className="note-btn-label">Next section</span>
                        <ChevronRight size={16} aria-hidden="true" />
                    </button>
                </div>
            ) : null}

            <div className="note-fullscreen-toolbar__cluster" aria-label="Note navigation">
                <button type="button" className="btn btn-sm btn-ghost" onClick={onPrevNote} disabled={!hasPrevNote} aria-label="Previous note">
                    <ChevronLeft size={16} aria-hidden="true" />
                    <span className="note-btn-label">Prev note</span>
                </button>
                <button type="button" className="btn btn-sm btn-ghost" onClick={onNextNote} disabled={!hasNextNote} aria-label="Next note">
                    <span className="note-btn-label">Next note</span>
                    <ChevronRight size={16} aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-sm btn-secondary" onClick={onExit} aria-label="Exit fullscreen note view">
                    <Minimize2 size={16} aria-hidden="true" />
                    <span className="note-btn-label">Exit</span>
                </button>
            </div>
        </div>
    );
}