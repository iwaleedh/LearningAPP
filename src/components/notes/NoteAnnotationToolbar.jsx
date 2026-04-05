import {
    ChevronLeft,
    ChevronRight,
    Download,
    Highlighter,
    MousePointer2,
    Redo2,
    Save,
    Undo2,
    ZoomIn,
    ZoomOut,
} from 'lucide-react';

const HIGHLIGHTER_COLORS = [
    { value: '#ffeb3b', label: 'Yellow' },
    { value: '#4caf50', label: 'Green' },
    { value: '#2196f3', label: 'Blue' },
    { value: '#e91e63', label: 'Pink' },
    { value: '#ff9800', label: 'Orange' },
];

const THICKNESSES = [
    { value: 8, label: 'Thin' },
    { value: 16, label: 'Medium' },
    { value: 24, label: 'Thick' },
];

export default function NoteAnnotationToolbar({
    title,
    compact,
    hidden,
    activeTool,
    pointerActive,
    toolOptions,
    canUndo,
    canRedo,
    saveStatus,
    dirty,
    hasPrevNote,
    hasNextNote,
    hasPrevSection,
    hasNextSection,
    onActivateHighlighter,
    onTogglePointer,
    onUndo,
    onRedo,
    onSave,
    onExport,
    onExit,
    onPrevNote,
    onNextNote,
    onPrevSection,
    onNextSection,
    onToolOptionsChange,
}) {
    const saveLabel = saveStatus === 'saving' ? 'Saving…' : saveStatus === 'saved' ? 'Saved' : dirty ? 'Save*' : 'Save';

    return (
        <div
            className={[
                'note-fullscreen-toolbar',
                compact ? 'note-fullscreen-toolbar--compact note-overlay-controls' : '',
                compact && hidden ? 'note-overlay-controls--hidden' : '',
                compact && !hidden ? 'note-overlay-controls--visible' : '',
            ].filter(Boolean).join(' ')}
            role="toolbar"
            aria-label="Fullscreen note tools"
        >
            <div className="note-fullscreen-toolbar__title" title={title}>{title}</div>

            <div className="note-fullscreen-toolbar__cluster" aria-label="Note navigation">
                <button type="button" className="btn btn-sm btn-ghost" onClick={onPrevNote} disabled={!hasPrevNote} aria-label="Previous note">
                    <ChevronLeft size={16} aria-hidden="true" />
                    <span className="note-btn-label">Prev note</span>
                </button>
                <button type="button" className="btn btn-sm btn-ghost" onClick={onNextNote} disabled={!hasNextNote} aria-label="Next note">
                    <span className="note-btn-label">Next note</span>
                    <ChevronRight size={16} aria-hidden="true" />
                </button>
            </div>

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

            <div className="note-fullscreen-toolbar__cluster" aria-label="Annotation tools">
                <button
                    type="button"
                    className={`btn btn-sm ${activeTool === 'highlighter' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={onActivateHighlighter}
                    aria-label="Toggle highlighter"
                    aria-pressed={activeTool === 'highlighter'}
                >
                    <Highlighter size={16} aria-hidden="true" />
                    <span className="note-btn-label">Highlight</span>
                </button>
                <button
                    type="button"
                    className={`btn btn-sm ${pointerActive ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={onTogglePointer}
                    aria-label="Toggle laser pointer"
                    aria-pressed={pointerActive}
                >
                    <MousePointer2 size={16} aria-hidden="true" />
                    <span className="note-btn-label">Pointer</span>
                </button>
            </div>

            <div className="note-fullscreen-toolbar__cluster note-fullscreen-toolbar__cluster--palette" aria-label="Highlighter options">
                {HIGHLIGHTER_COLORS.map((color) => (
                    <button
                        key={color.value}
                        type="button"
                        className={`note-highlight-swatch ${toolOptions.color === color.value ? 'note-highlight-swatch--active' : ''}`}
                        onClick={() => onToolOptionsChange({ color: color.value })}
                        aria-label={`${color.label} highlight colour`}
                        aria-pressed={toolOptions.color === color.value}
                        style={{ '--note-highlight-color': color.value }}
                    />
                ))}
                <div className="note-highlight-widths" role="group" aria-label="Highlighter thickness">
                    {THICKNESSES.map((width) => (
                        <button
                            key={width.value}
                            type="button"
                            className={`btn btn-sm btn-ghost ${toolOptions.width === width.value ? 'note-highlight-width--active' : ''}`}
                            onClick={() => onToolOptionsChange({ width: width.value })}
                            aria-label={`${width.label} highlighter thickness`}
                            aria-pressed={toolOptions.width === width.value}
                        >
                            {width.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="note-fullscreen-toolbar__cluster" aria-label="Annotation history and save">
                <button type="button" className="btn btn-sm btn-ghost" onClick={onUndo} disabled={!canUndo} aria-label="Undo annotation">
                    <Undo2 size={16} aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-sm btn-ghost" onClick={onRedo} disabled={!canRedo} aria-label="Redo annotation">
                    <Redo2 size={16} aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-sm btn-primary" onClick={onSave} aria-label="Save note annotations">
                    <Save size={16} aria-hidden="true" />
                    <span className="note-btn-label">{saveLabel}</span>
                </button>
                <button type="button" className="btn btn-sm btn-ghost" onClick={onExport} aria-label="Export note annotations">
                    <Download size={16} aria-hidden="true" />
                    <span className="note-btn-label">Export</span>
                </button>
            </div>

            <div className="note-fullscreen-toolbar__cluster" aria-label="Fullscreen controls">
                <button type="button" className="btn btn-sm btn-ghost" aria-label="Zoom in" disabled>
                    <ZoomIn size={16} aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-sm btn-secondary" onClick={onExit} aria-label="Exit fullscreen note view">
                    <ZoomOut size={16} aria-hidden="true" />
                    <span className="note-btn-label">Exit</span>
                </button>
            </div>
        </div>
    );
}