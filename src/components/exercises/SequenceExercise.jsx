import { useState, useRef } from 'react';
import { CheckCircle, XCircle, RotateCcw, GripVertical, ArrowRight } from 'lucide-react';
import './Exercises.css';

export default function SequenceExercise({ question, onNext, onMistake, onAttempt }) {
    const [items, setItems] = useState(() => {
        const shuffled = question.steps.map((text, i) => ({ text, correctIndex: i }));
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    });
    const [submitted, setSubmitted] = useState(false);
    const dragIndexRef = useRef(null);
    const [startedAt] = useState(() => Date.now());

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

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleReset = () => {
        const shuffled = question.steps.map((text, i) => ({ text, correctIndex: i }));
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        setItems(shuffled);
        setSubmitted(false);
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

            <div className="seq-list">
                {items.map((item, i) => {
                    let className = 'seq-item';
                    if (submitted) {
                        className += item.correctIndex === i ? ' correct' : ' incorrect';
                    }

                    return (
                        <div
                            key={item.text}
                            className={className}
                            draggable={!submitted}
                            onDragStart={() => handleDragStart(i)}
                            onDragOver={e => e.preventDefault()}
                            onDrop={() => handleDrop(i)}
                        >
                            <span className="seq-number">{i + 1}</span>
                            <GripVertical size={14} className="dd-grip" />
                            <span className="seq-text">{item.text}</span>
                            {submitted && item.correctIndex === i && (
                                <CheckCircle size={16} className="correct-icon" />
                            )}
                            {submitted && item.correctIndex !== i && (
                                <span className="seq-correct-pos">
                                    <XCircle size={16} className="incorrect-icon" />
                                    <span className="seq-hint">→ Step {item.correctIndex + 1}</span>
                                </span>
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
