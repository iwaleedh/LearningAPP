import { useMemo, useState } from 'react';
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

export default function MCQExercise({ question, onNext }) {
    const [selected, setSelected] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [showRationale, setShowRationale] = useState(false);
    const shuffledOptions = useMemo(() => {
        const indexed = question.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        return shuffleArray(indexed);
    }, [question.options]);

    const handleSubmit = () => {
        if (selected === null) return;
        setSubmitted(true);
    };

    const handleNext = () => {
        setSelected(null);
        setSubmitted(false);
        setShowRationale(false);
        onNext?.();
    };

    const isCorrect = submitted && shuffledOptions[selected]?.originalIndex === question.correctAnswer;

    if (shuffledOptions.length === 0) return null;

    return (
        <div className="mcq-exercise card animate-fade-in">
            <div className="mcq-stem">
                <h3>{question.stem}</h3>
            </div>

            <div className="mcq-options">
                {shuffledOptions.map((opt, i) => {
                    const letter = String.fromCharCode(65 + i);
                    let optionClass = 'mcq-option';

                    if (submitted) {
                        if (opt.originalIndex === question.correctAnswer) {
                            optionClass += ' correct';
                        } else if (i === selected) {
                            optionClass += ' incorrect';
                        } else {
                            optionClass += ' disabled';
                        }
                    } else if (i === selected) {
                        optionClass += ' selected';
                    }

                    return (
                        <button
                            key={i}
                            className={optionClass}
                            onClick={() => !submitted && setSelected(i)}
                            disabled={submitted}
                        >
                            <span className="mcq-option-letter">{letter}</span>
                            <span className="mcq-option-text">{opt.text}</span>
                            {submitted && opt.originalIndex === question.correctAnswer && (
                                <CheckCircle size={18} className="mcq-option-icon correct-icon" />
                            )}
                            {submitted && i === selected && opt.originalIndex !== question.correctAnswer && (
                                <XCircle size={18} className="mcq-option-icon incorrect-icon" />
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
