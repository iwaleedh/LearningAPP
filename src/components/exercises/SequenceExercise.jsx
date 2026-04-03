import { useState, useRef, useCallback, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, GripVertical, ArrowRight } from 'lucide-react';
import './Exercises.css';

/**
 * Shuffles steps and stamps each with a stable _idx to prevent the
 * duplicate-text keying bug (two steps with same text colliding).
 */
function initItems(steps) {
    const shuffled = steps.map((text, i) => ({ text, correctIndex: i, _idx: i }));
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function SequenceExercise({ question, onNext, onMistake, onAttempt }) {
    const [items, setItems] = useState(() => initItems(question.steps));
    const [submitted, setSubmitted] = useState(false);
    // Mouse drag
    const dragIndexRef = useRef(null);
    // Keyboard drag: index of the item currently "grabbed"
    const [grabbedIndex, setGrabbedIndex] = useState(null);
    const [announcement, setAnnouncement] = useState('');
    const [startedAt] = useState(() => Date.now());

    // ── Mouse drag ─────────────────────────────────────────────────────────────

    const handleDragStart = (index) => {
        dragIndexRef.current = index;
    };

    const handleDrop = (dropIndex) => {
        if (submitted) return;
        const dragIndex = dragIndexRef.current;
        if (dragIndex === null || dragIndex === dropIndex) return;

        setItems(prev => {
            const updated = [...prev];
            const [removed] = updated.splice(dragIndex, 1);
            updated.splice(dropIndex, 0, removed);
            return updated;
        });
        dragIndexRef.current = null;
    };

    // ── Keyboard reordering ────────────────────────────────────────────────────
    // Space on an item grabs it; Up/Down moves it; Space/Enter drops it in place.

    const moveItem = useCallback((fromIndex, toIndex) => {
        setItems(prev => {
            const updated = [...prev];
            const [removed] = updated.splice(fromIndex, 1);
            updated.splice(toIndex, 0, removed);
            const direction = toIndex < fromIndex ? 'up' : 'down';
            setAnnouncement(`${removed.text} moved ${direction} to position ${toIndex + 1}`);
            return updated;
        });
    }, []);

    const handleItemKeyDown = (e, index) => {
        if (submitted) return;

        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (grabbedIndex === null) {
                setGrabbedIndex(index);
            } else {
                // Drop: move grabbed item to this position
                moveItem(grabbedIndex, index);
                setGrabbedIndex(null);
            }
        }

        if (e.key === 'Escape') {
            setGrabbedIndex(null);
        }

        // Arrow keys move the grabbed item (or the focused item if nothing grabbed)
        if (grabbedIndex !== null && grabbedIndex === index) {
            if (e.key === 'ArrowUp' && index > 0) {
                e.preventDefault();
                moveItem(index, index - 1);
                setGrabbedIndex(index - 1);
            }
            if (e.key === 'ArrowDown' && index < items.length - 1) {
                e.preventDefault();
                moveItem(index, index + 1);
                setGrabbedIndex(index + 1);
            }
        }
    };

    // ── Submit / Reset ─────────────────────────────────────────────────────────

    const handleSubmit = () => {
        setSubmitted(true);
        setGrabbedIndex(null);
    };

    const handleReset = () => {
        setItems(initItems(question.steps));
        setSubmitted(false);
        setGrabbedIndex(null);
    };

    const handleNext = () => {
        onAttempt?.({
            correct: Boolean(allCorrect),
            scorePercent: Math.round((correctCount / (items.length || 1)) * 100),
            durationSeconds: (Date.now() - startedAt) / 1000,
            userAnswer: items.map((item, index) => `Step ${index + 1}: ${item.text}`).join(' | '),
        });
        if (submitted && !allCorrect) {
            const firstWrong = items.find((item, i) => item.correctIndex !== i);
            if (firstWrong) {
                const placedAt = items.indexOf(firstWrong);
                onMistake?.({
                    question: question.stem,
                    yourAnswer: `Step ${placedAt + 1}: ${firstWrong.text}`,
                    correctAnswer: `Step ${firstWrong.correctIndex + 1}: ${firstWrong.text}`,
                    topic: question.topic || '',
                });
            }
        }
        handleReset();
        onNext?.();
    };

    const allCorrect = submitted && items.every((item, i) => item.correctIndex === i);
    const correctCount = submitted ? items.filter((item, i) => item.correctIndex === i).length : 0;

    return (
        <div className="sequence-exercise card animate-fade-in">
            <div className="mcq-stem">
                <h3>{question.stem}</h3>
            </div>

            {/* Screen-reader live region for move announcements */}
            <div role="status" aria-live="assertive" aria-atomic="true" className="sr-only">
                {announcement}
            </div>

            {grabbedIndex !== null && (
                <div className="dd-keyboard-hint" role="status" aria-live="polite">
                    ⌨️ "<strong>{items[grabbedIndex]?.text}</strong>" grabbed —
                    use ↑ ↓ to move, Space/Enter to release, Escape to cancel.
                </div>
            )}
            {grabbedIndex === null && !submitted && (
                <p className="seq-keyboard-hint">Drag to reorder, or Tab to an item and press Space to grab, then ↑ ↓ to move.</p>
            )}

            <div
                className="seq-list"
                role="list"
                aria-label="Sequence ordering — arrange steps in correct order"
            >
                {items.map((item, i) => {
                    const isGrabbed = grabbedIndex === i;
                    let className = 'seq-item';
                    if (submitted) {
                        className += item.correctIndex === i ? ' correct' : ' incorrect';
                    }
                    if (isGrabbed) className += ' kb-selected';

                    return (
                        <div
                            key={item._idx}
                            className={className}
                            draggable={!submitted}
                            onDragStart={() => handleDragStart(i)}
                            onDragOver={e => e.preventDefault()}
                            onDrop={() => handleDrop(i)}
                            onKeyDown={e => handleItemKeyDown(e, i)}
                            tabIndex={submitted ? -1 : 0}
                            role="listitem"
                            aria-roledescription="reorderable step"
                            aria-label={`Step ${i + 1} of ${items.length}: ${item.text}${submitted ? (item.correctIndex === i ? ', correct position' : `, should be step ${item.correctIndex + 1}`) : ''}. ${!submitted ? 'Press Space to grab and use arrow keys to move.' : ''}`}
                        >
                            <span className="seq-number" aria-hidden="true">{i + 1}</span>
                            <GripVertical size={14} className="dd-grip" aria-hidden="true" />
                            <span className="seq-text">{item.text}</span>
                            {submitted && item.correctIndex === i && (
                                <CheckCircle size={16} className="correct-icon" aria-hidden="true" />
                            )}
                            {submitted && item.correctIndex !== i && (
                                <span className="seq-correct-pos">
                                    <XCircle size={16} className="incorrect-icon" aria-hidden="true" />
                                    <span className="seq-hint">→ Step {item.correctIndex + 1}</span>
                                </span>
                            )}
                            {/* Explicit move buttons — primary keyboard / AT path */}
                            {!submitted && (
                                <div className="seq-move-btns" role="group" aria-label={`Move step ${i + 1}`}>
                                    <button
                                        className="seq-move-btn"
                                        onClick={() => { if (i > 0) moveItem(i, i - 1); }}
                                        disabled={i === 0}
                                        aria-label={`Move "${item.text}" up`}
                                        tabIndex={0}
                                    >↑</button>
                                    <button
                                        className="seq-move-btn"
                                        onClick={() => { if (i < items.length - 1) moveItem(i, i + 1); }}
                                        disabled={i === items.length - 1}
                                        aria-label={`Move "${item.text}" down`}
                                        tabIndex={0}
                                    >↓</button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {submitted && (
                <div className={`mcq-feedback animate-slide-in-up ${allCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="mcq-feedback-header">
                        {allCorrect ? (
                            <>
                                <CheckCircle size={22} />
                                <span>Perfect order! 🎉</span>
                            </>
                        ) : (
                            <>
                                <XCircle size={22} />
                                <span>{correctCount}/{items.length} in correct position</span>
                            </>
                        )}
                    </div>
                </div>
            )}

            <div className="mcq-actions">
                {submitted ? (
                    <>
                        <button className="btn btn-secondary" onClick={handleReset}>
                            <RotateCcw size={16} /> Try Again
                        </button>
                        <button className="btn btn-primary btn-lg" onClick={handleNext}>
                            Next <ArrowRight size={18} />
                        </button>
                    </>
                ) : (
                    <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
                        Check Order
                    </button>
                )}
            </div>
        </div>
    );
}
