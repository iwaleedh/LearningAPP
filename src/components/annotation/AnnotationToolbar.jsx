import { Pen, Highlighter, Type, Square, Circle, Minus, Eraser, MousePointer2,
    Undo2, Redo2, Trash2, Save, Download, X, ChevronLeft, ChevronRight, Share2, Radio } from 'lucide-react';

const PRESET_COLORS = [
    { value: '#ef4444', label: 'Red' },
    { value: '#3b82f6', label: 'Blue' },
    { value: '#22c55e', label: 'Green' },
    { value: '#f59e0b', label: 'Amber' },
    { value: '#a855f7', label: 'Purple' },
    { value: '#111827', label: 'Black' },
    { value: '#f97316', label: 'Orange' },
    { value: '#ffffff', label: 'White' },
];

const WIDTHS = [
    { value: 2, label: 'Thin' },
    { value: 4, label: 'Med' },
    { value: 8, label: 'Thick' },
];

const TOOLS = [
    { id: 'pen',         icon: Pen,            label: 'Pen (P)' },
    { id: 'highlighter', icon: Highlighter,     label: 'Highlighter (H)' },
    { id: 'text',        icon: Type,            label: 'Text (T)' },
    { id: 'rect',        icon: Square,          label: 'Rectangle (R)' },
    { id: 'circle',      icon: Circle,          label: 'Circle (C)' },
    { id: 'line',        icon: Minus,           label: 'Line (L)' },
    { id: 'eraser',      icon: Eraser,          label: 'Eraser (E)' },
    { id: 'select',      icon: MousePointer2,   label: 'Select (V)' },
];

export default function AnnotationToolbar({
    activeTool, onToolChange,
    toolOptions, onOptionsChange,
    canUndo, canRedo, onUndo, onRedo,
    onClear, onSave, onExport, onClose,
    saveStatus, dirty,
    paperTitle, currentPage, pageCount,
    onPrevPage, onNextPage,
    activeSession, participantCount, pendingInviteCount, onShareOpen,
}) {
    const saveLabel = saveStatus === 'saving' ? 'Saving…'
        : saveStatus === 'saved' ? 'Saved ✓'
        : dirty ? 'Save*'
        : 'Save';

    return (
        <div className="annotate-toolbar">
            {/* Left: paper title + page nav */}
            <div className="annotate-toolbar-left">
                <button className="btn btn-sm btn-ghost annotate-close-btn" onClick={onClose} title="Back to Past Papers">
                    <X size={16} />
                </button>
                <span className="annotate-paper-title">{paperTitle}</span>
                {pageCount > 0 && (
                    <div className="annotate-page-nav">
                        <button className="btn btn-sm btn-ghost btn-icon" onClick={onPrevPage} disabled={currentPage <= 1} title="Previous page">
                            <ChevronLeft size={16} />
                        </button>
                        <span className="annotate-page-counter">{currentPage} / {pageCount}</span>
                        <button className="btn btn-sm btn-ghost btn-icon" onClick={onNextPage} disabled={currentPage >= pageCount} title="Next page">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                )}
            </div>

            {/* Centre: tools + options */}
            <div className="annotate-toolbar-centre">
                {/* Drawing tools */}
                <div className="annotate-tool-group">
                    {TOOLS.map(({ id, icon: Icon, label }) => (
                        <button
                            key={id}
                            className={`btn btn-sm btn-icon annotate-tool-btn ${activeTool === id ? 'annotate-tool-btn--active' : ''}`}
                            onClick={() => onToolChange(id)}
                            title={label}
                        >
                            <Icon size={16} />
                        </button>
                    ))}
                </div>

                <div className="annotate-toolbar-divider" />

                {/* Color swatches */}
                <div className="annotate-color-group">
                    {PRESET_COLORS.map(({ value, label }) => (
                        <button
                            key={value}
                            className={`annotate-color-swatch ${toolOptions.color === value ? 'annotate-color-swatch--active' : ''}`}
                            style={{ background: value, border: value === '#ffffff' ? '1px solid var(--color-border)' : undefined }}
                            onClick={() => onOptionsChange({ color: value })}
                            title={label}
                        />
                    ))}
                    <input
                        type="color"
                        value={toolOptions.color}
                        onChange={(e) => onOptionsChange({ color: e.target.value })}
                        className="annotate-color-custom"
                        title="Custom colour"
                    />
                </div>

                <div className="annotate-toolbar-divider" />

                {/* Stroke width */}
                <div className="annotate-width-group">
                    {WIDTHS.map(({ value, label }) => (
                        <button
                            key={value}
                            className={`btn btn-sm annotate-width-btn ${toolOptions.width === value ? 'annotate-width-btn--active' : ''}`}
                            onClick={() => onOptionsChange({ width: value })}
                            title={`${label} stroke`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right: undo/redo + actions */}
            <div className="annotate-toolbar-right">
                <button className="btn btn-sm btn-ghost btn-icon" onClick={onUndo} disabled={!canUndo} title="Undo (⌘Z)">
                    <Undo2 size={16} />
                </button>
                <button className="btn btn-sm btn-ghost btn-icon" onClick={onRedo} disabled={!canRedo} title="Redo (⌘⇧Z)">
                    <Redo2 size={16} />
                </button>

                <div className="annotate-toolbar-divider" />

                <button className="btn btn-sm btn-ghost btn-icon" onClick={onClear} title="Clear page">
                    <Trash2 size={16} />
                </button>
                <button
                    className={`btn btn-sm ${saveStatus === 'saved' ? 'btn-success' : 'btn-primary'} annotate-save-btn`}
                    onClick={onSave}
                    title="Save (⌘S)"
                >
                    <Save size={14} />
                    <span>{saveLabel}</span>
                </button>
                <button className="btn btn-sm btn-ghost" onClick={onExport} title="Export annotated PDF">
                    <Download size={14} />
                    <span>Export</span>
                </button>

                <div className="annotate-toolbar-divider" />

                {/* Share / Live Session button */}
                <button
                    className={`btn btn-sm annotate-live-btn${activeSession ? ' annotate-live-btn--active' : ''}`}
                    onClick={onShareOpen}
                    title={activeSession ? 'Live session active — Open share panel' : 'Start or join a live session'}
                >
                    {activeSession ? <Radio size={14} /> : <Share2 size={14} />}
                    <span>{activeSession ? 'Live' : 'Share'}</span>
                    {(pendingInviteCount > 0 || (activeSession && participantCount > 1)) && (
                        <span className="annotate-invite-badge">
                            {pendingInviteCount > 0 ? pendingInviteCount : participantCount}
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}
