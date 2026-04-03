import { useState, useRef, useCallback } from 'react';
import { CheckCircle, XCircle, RotateCcw, GripVertical } from 'lucide-react';
import './Exercises.css';

/**
 * Assign each item a stable numeric _idx at initialisation time.
 * This prevents the duplicate-text bug where two items sharing the same text
 * were both removed/keyed as one because identity was based on item.text.
 */
function initItems(rawItems) {
    const shuffled = [...rawItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.map((item, idx) => ({ ...item, _idx: idx }));
}

export default function DragDropExercise({ question, onNext, onMistake, onAttempt }) {
    const [zones, setZones] = useState(() => {
        const initial = {};
        question.categories.forEach(cat => { initial[cat] = []; });
        return initial;
    });
    const [bank, setBank] = useState(() => initItems(question.items));
    const [submitted, setSubmitted] = useState(false);
    const [results, setResults] = useState(null);
    const dragItemRef = useRef(null);
    const dragSourceRef = useRef(null);
    // Keyboard drag-and-drop state
    const [keyboardSelected, setKeyboardSelected] = useState(null); // { item, source }
    const [lastAction, setLastAction] = useState('');
    const [startedAt] = useState(() => Date.now());

    /** Remove item by stable _idx (not text) to fix the duplicate-text bug. */
    const removeFromSource = useCallback((source, idx) => {
        if (source === 'bank') {
            setBank(prev => prev.filter(i => i._idx !== idx));
        } else {
            setZones(prev => ({
                ...prev,
                [source]: prev[source].filter(i => i._idx !== idx),
            }));
        }
    }, []);

    const addToTarget = useCallback((targetZone, item) => {
        if (targetZone === 'bank') {
            setBank(prev => [...prev, item]);
        } else {
            setZones(prev => ({
                ...prev,
                [targetZone]: [...prev[targetZone], item],
            }));
        }
    }, []);

    // ── Mouse/touch drag handlers ──────────────────────────────────────────────

    const handleDragStart = (item, source) => {
        dragItemRef.current = item;
        dragSourceRef.current = source;
    };

    const handleDrop = (targetZone) => {
        if (submitted || !dragItemRef.current) return;
        const item = dragItemRef.current;
        const source = dragSourceRef.current;
        if (source === targetZone) { dragItemRef.current = null; dragSourceRef.current = null; return; }

        removeFromSource(source, item._idx);
        addToTarget(targetZone, item);

        dragItemRef.current = null;
        dragSourceRef.current = null;
    };

    // ── Keyboard drag handlers ─────────────────────────────────────────────────
    // Space/Enter on an item = "pick up". Space/Enter on a zone = "drop here".
    // Escape = cancel.

    const handleItemKeyDown = (e, item, source) => {
        if (submitted) return;
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (keyboardSelected && keyboardSelected.item._idx === item._idx) {
                // Second press on same item = cancel selection
                setKeyboardSelected(null);
            } else {
                setKeyboardSelected({ item, source });
            }
        }
        if (e.key === 'Escape') {
            setKeyboardSelected(null);
        }
    };

    const handleZoneKeyDown = (e, targetZone) => {
        if (submitted || !keyboardSelected) return;
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            const { item, source } = keyboardSelected;
            if (source === targetZone) { setKeyboardSelected(null); return; }
            removeFromSource(source, item._idx);
            addToTarget(targetZone, item);
            setKeyboardSelected(null);
        }
        if (e.key === 'Escape') {
            setKeyboardSelected(null);
        }
    };

    const handleBankZoneKeyDown = (e) => {
        if (submitted || !keyboardSelected) return;
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            const { item, source } = keyboardSelected;
            if (source === 'bank') { setKeyboardSelected(null); return; }
            removeFromSource(source, item._idx);
            addToTarget('bank', item);
            setKeyboardSelected(null);
        }
    };

    // ── Submit / Reset ─────────────────────────────────────────────────────────

    const handleSubmit = () => {
        const checks = {};
        question.categories.forEach(cat => {
            checks[cat] = zones[cat].map(item => {
                const correct = item.category === cat;
                return { ...item, correct };
            });
        });
        setResults(checks);
        setSubmitted(true);
    };

    const handleReset = () => {
        setBank(initItems(question.items));
        const initial = {};
        question.categories.forEach(cat => { initial[cat] = []; });
        setZones(initial);
        setSubmitted(false);
        setResults(null);
        setKeyboardSelected(null);
    };

    const allPlaced = bank.length === 0;
    const isKbSelected = (item) => keyboardSelected?.item._idx === item._idx;

    // ── Explicit "Move to" keyboard controls ──────────────────────────────────
    // Called when user clicks a "Move [item] to [category]" button directly.
    const moveItemToCategory = (item, source, targetZone) => {
        if (submitted) return;
        if (source === targetZone) return;
        removeFromSource(source, item._idx);
        addToTarget(targetZone, item);
        setKeyboardSelected(null);
        // Announce the action to screen readers via the live region
        setLastAction(`Moved "${item.text}" to ${targetZone}`);
    };

    const moveItemToBank = (item, source) => {
        if (submitted || source === 'bank') return;
        removeFromSource(source, item._idx);
        addToTarget('bank', item);
        setKeyboardSelected(null);
        setLastAction(`Returned "${item.text}" to the item bank`);
    };

    return (
        <div className="dragdrop-exercise card animate-fade-in">
            <div className="mcq-stem">
                <h3>{question.stem}</h3>
            </div>

            {/* Screen-reader live region for action announcements */}
            <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
                {lastAction}
            </div>

            {keyboardSelected && (
                <div className="dd-keyboard-hint" role="status" aria-live="polite">
                    ⌨️ "<strong>{keyboardSelected.item.text}</strong>" selected —
                    press Space/Enter on a category to drop it there, or Escape to cancel.
                </div>
            )}

            {/* Item Bank */}
            <div
                className="dd-bank"
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleDrop('bank')}
                onKeyDown={handleBankZoneKeyDown}
                role="listbox"
                aria-label="Item bank — available items to categorise"
            >
                <span className="dd-bank-label">Drag (or Tab+Space) items to the correct category</span>
                <div className="dd-bank-items">
                    {bank.map((item) => (
                        <div key={item._idx} className="dd-item-wrapper">
                            <div
                                className={`dd-item${isKbSelected(item) ? ' kb-selected' : ''}`}
                                draggable={!submitted}
                                onDragStart={() => handleDragStart(item, 'bank')}
                                onKeyDown={e => handleItemKeyDown(e, item, 'bank')}
                                tabIndex={submitted ? -1 : 0}
                                role="option"
                                aria-selected={isKbSelected(item)}
                                aria-label={`${item.text}. Press Space to select, then Space on a category to drop.`}
                            >
                                <GripVertical size={14} className="dd-grip" aria-hidden="true" />
                                {item.text}
                            </div>
                            {/* Explicit keyboard move-to buttons — always visible, primary a11y path */}
                            {!submitted && (
                                <div className="dd-move-btns" role="group" aria-label={`Move "${item.text}" to category`}>
                                    {question.categories.map(cat => (
                                        <button
                                            key={cat}
                                            className="btn btn-sm dd-move-btn"
                                            onClick={() => moveItemToCategory(item, 'bank', cat)}
                                            aria-label={`Move "${item.text}" to ${cat}`}
                                        >
                                            → {cat}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    {bank.length === 0 && (
                        <span className="dd-empty">All items placed ✓</span>
                    )}
                </div>
            </div>

            {/* Drop Zones */}
            <div className="dd-zones">
                {question.categories.map(cat => (
                    <div
                        key={cat}
                        className={`dd-zone ${submitted ? 'submitted' : ''}${keyboardSelected && !submitted ? ' kb-droppable' : ''}`}
                        onDragOver={e => e.preventDefault()}
                        onDrop={() => handleDrop(cat)}
                        onKeyDown={e => handleZoneKeyDown(e, cat)}
                        role="listbox"
                        aria-label={`Category: ${cat}. ${keyboardSelected ? 'Press Space to drop selected item here.' : ''}`}
                        tabIndex={keyboardSelected && !submitted ? 0 : -1}
                    >
                        <div className="dd-zone-header">{cat}</div>
                        <div className="dd-zone-items">
                            {(results ? results[cat] : zones[cat]).map(item => (
                                <div key={item._idx} className="dd-item-wrapper">
                                    <div
                                        className={`dd-item ${submitted ? (item.correct ? 'correct' : 'incorrect') : ''}${isKbSelected(item) ? ' kb-selected' : ''}`}
                                        draggable={!submitted}
                                        onDragStart={() => handleDragStart(item, cat)}
                                        onKeyDown={e => handleItemKeyDown(e, item, cat)}
                                        tabIndex={submitted ? -1 : 0}
                                        role="option"
                                        aria-selected={isKbSelected(item)}
                                        aria-label={`${item.text}${submitted ? (item.correct ? ', correct' : ', incorrect') : ''}. Press Space to select.`}
                                    >
                                        <GripVertical size={14} className="dd-grip" aria-hidden="true" />
                                        {item.text}
                                        {submitted && item.correct && <CheckCircle size={14} className="correct-icon" aria-hidden="true" />}
                                        {submitted && !item.correct && <XCircle size={14} className="incorrect-icon" aria-hidden="true" />}
                                    </div>
                                    {/* Return to bank button for keyboard users */}
                                    {!submitted && (
                                        <button
                                            className="btn btn-sm dd-move-btn dd-move-btn--return"
                                            onClick={() => moveItemToBank(item, cat)}
                                            aria-label={`Return "${item.text}" to the item bank`}
                                        >
                                            ← Back
                                        </button>
                                    )}
                                </div>
                            ))}
                            {(results ? results[cat] : zones[cat]).length === 0 && (
                                <span className="dd-empty">
                                    {keyboardSelected && !submitted ? 'Press Space to drop here' : 'Drop here'}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mcq-actions">
                {submitted ? (
                    <>
                        <button className="btn btn-secondary" onClick={handleReset}>
                            <RotateCcw size={16} /> Try Again
                        </button>
                        <button className="btn btn-primary btn-lg" onClick={() => {
                            const wrong = results && Object.entries(results)
                                .flatMap(([cat, items]) => items.filter(it => !it.correct).map(it => ({ ...it, placedIn: cat })));
                            const totalItems = question.items.length || 1;
                            const correctItems = totalItems - (wrong?.length || 0);
                            onAttempt?.({
                                correct: (wrong?.length || 0) === 0,
                                scorePercent: Math.round((correctItems / totalItems) * 100),
                                durationSeconds: (Date.now() - startedAt) / 1000,
                                userAnswer: Object.entries(zones)
                                    .flatMap(([cat, items]) => items.map((item) => `${item.text} -> ${cat}`))
                                    .join(' | '),
                            });
                            if (wrong && wrong.length > 0) {
                                onMistake?.({
                                    question: question.stem,
                                    yourAnswer: `${wrong[0].text} → ${wrong[0].placedIn}`,
                                    correctAnswer: `${wrong[0].text} → ${wrong[0].category}`,
                                    topic: question.topic || '',
                                });
                            }
                            onNext?.();
                        }}>
                            Next →
                        </button>
                    </>
                ) : (
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={handleSubmit}
                        disabled={!allPlaced}
                    >
                        Check Answers
                    </button>
                )}
            </div>
        </div>
    );
}
