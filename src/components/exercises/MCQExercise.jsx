import { useMemo, useRef, useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, Lightbulb } from 'lucide-react';
import './Exercises.css';

function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default function MCQExercise({ question, onNext, onMistake, onAttempt }) {
    const [selected, setSelected] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [showRationale, setShowRationale] = useState(false);
    const [startedAt] = useState(() => Date.now());
    const optionRefs = useRef([]);

    const shuffledOptions = useMemo(() => {
        const indexed = question.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        return shuffleArray(indexed);
    }, [question.options]);

    const handleSubmit = () => {
        if (selected === null) return;
        setSubmitted(true);
    };

    const handleNext = () => {
        onAttempt?.({
            correct: Boolean(isCorrect),
            scorePercent: isCorrect ? 100 : 0,
            durationSeconds: (Date.now() - startedAt) / 1000,
            userAnswer: shuffledOptions[selected]?.text || '',
            correctAnswer: question.options[question.correctAnswer] || '',
        });
        if (submitted && !isCorrect) {
            onMistake?.({
                question: question.stem,
                yourAnswer: shuffledOptions[selected]?.text || '',
                correctAnswer: question.options[question.correctAnswer] || '',
                topic: question.topic || '',
            });
        }
        setSelected(null);
        setSubmitted(false);
        setShowRationale(false);
        onNext?.();
    };

    const isCorrect = submitted && shuffledOptions[selected]?.originalIndex === question.correctAnswer;

    // ── Keyboard navigation: radiogroup pattern (arrow keys cycle options) ─────
    const handleGroupKeyDown = (e) => {
        if (submitted) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            const next = selected === null ? 0 : (selected + 1) % shuffledOptions.length;
            setSelected(next);
            optionRefs.current[next]?.focus();
        }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const prev = selected === null
                ? shuffledOptions.length - 1
                : (selected - 1 + shuffledOptions.length) % shuffledOptions.length;
            setSelected(prev);
            optionRefs.current[prev]?.focus();
        }
        // Home/End: jump to first or last option (ARIA Authoring Practices requirement)
        if (e.key === 'Home') {
            e.preventDefault();
            setSelected(0);
            optionRefs.current[0]?.focus();
        }
        if (e.key === 'End') {
            e.preventDefault();
            const last = shuffledOptions.length - 1;
            setSelected(last);
            optionRefs.current[last]?.focus();
        }
        if ((e.key === ' ' || e.key === 'Enter') && selected !== null) {
            e.preventDefault();
            handleSubmit();
        }
    };

    if (shuffledOptions.length === 0) return null;

    return (
        <div className="mcq-exercise card animate-fade-in">
            <div className="mcq-stem">
                <h3 id={`mcq-stem-${question.id || 'q'}`}>{question.stem}</h3>
            </div>

            {/* radiogroup: arrow keys (↑ ↓ ← →), Home, End navigate; Space/Enter submits */}
            <div
                className="mcq-options"
                role="radiogroup"
                aria-labelledby={`mcq-stem-${question.id || 'q'}`}
                aria-required="true"
                onKeyDown={handleGroupKeyDown}
            >
                {shuffledOptions.map((opt, i) => {
                    const letter = String.fromCharCode(65 + i);
                    const isSelected = i === selected;
                    const isThisCorrect = opt.originalIndex === question.correctAnswer;

                    let optionClass = 'mcq-option';
                    if (submitted) {
                        if (isThisCorrect) optionClass += ' correct';
                        else if (isSelected) optionClass += ' incorrect';
                        else optionClass += ' disabled';
                    } else if (isSelected) {
                        optionClass += ' selected';
                    }

                    return (
                        <button
                            key={i}
                            ref={el => { optionRefs.current[i] = el; }}
                            className={optionClass}
                            onClick={() => !submitted && setSelected(i)}
                            // tabIndex: only the selected or first option is in tab order (roving tabindex)
                            tabIndex={!submitted ? (isSelected || (selected === null && i === 0) ? 0 : -1) : -1}
                            role="radio"
                            aria-checked={isSelected}
                            aria-disabled={submitted}
                            disabled={submitted}
                        >
                            <span className="mcq-option-letter" aria-hidden="true">{letter}</span>
                            <span className="mcq-option-text">{opt.text}</span>
                            {submitted && isThisCorrect && (
                                <CheckCircle size={18} className="mcq-option-icon correct-icon" aria-label="Correct answer" />
                            )}
                            {submitted && isSelected && !isThisCorrect && (
                                <XCircle size={18} className="mcq-option-icon incorrect-icon" aria-label="Your incorrect answer" />
                            )}
                        </button>
                    );
                })}
            </div>

            {submitted && (
                <div className={`mcq-feedback animate-slide-in-up ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="mcq-feedback-header">
                        {isCorrect ? (
                            <>
                                <CheckCircle size={22} />
                                <span>Correct! Well done! 🎉</span>
                            </>
                        ) : (
                            <>
                                <XCircle size={22} />
                                <span>Not quite right</span>
                            </>
                        )}
                    </div>

                    {!showRationale && (
                        <button className="btn btn-ghost btn-sm" onClick={() => setShowRationale(true)}>
                            <Lightbulb size={14} /> Show Explanation
                        </button>
                    )}

                    {showRationale && (
                        <p className="mcq-rationale animate-fade-in">{question.rationale}</p>
                    )}
                </div>
            )}

            <div className="mcq-actions">
                {!submitted ? (
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={handleSubmit}
                        disabled={selected === null}
                    >
                        Check Answer
                    </button>
                ) : (
                    <button className="btn btn-primary btn-lg" onClick={handleNext}>
                        Next Question <ArrowRight size={18} />
                    </button>
                )}
            </div>
        </div>
    );
}
