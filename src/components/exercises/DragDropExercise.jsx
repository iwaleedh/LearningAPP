import { useState, useRef } from 'react';
import { CheckCircle, XCircle, RotateCcw, GripVertical } from 'lucide-react';
import './Exercises.css';

export default function DragDropExercise({ question, onNext, onMistake }) {
    const [zones, setZones] = useState(() => {
        const initial = {};
        question.categories.forEach(cat => { initial[cat] = []; });
        return initial;
    });
    const [bank, setBank] = useState(() => {
        const items = [...question.items];
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        return items;
    });
    const [submitted, setSubmitted] = useState(false);
    const [results, setResults] = useState(null);
    const dragItemRef = useRef(null);
    const dragSourceRef = useRef(null);

    const handleDragStart = (item, source) => {
        dragItemRef.current = item;
        dragSourceRef.current = source;
    };

    const handleDrop = (targetZone) => {
        if (submitted || !dragItemRef.current) return;
        const item = dragItemRef.current;
        const source = dragSourceRef.current;

        // Remove from source
        if (source === 'bank') {
            setBank(prev => prev.filter(i => i.text !== item.text));
        } else {
            setZones(prev => ({
                ...prev,
                [source]: prev[source].filter(i => i.text !== item.text),
            }));
        }

        // Add to target
        if (targetZone === 'bank') {
            setBank(prev => [...prev, item]);
        } else {
            setZones(prev => ({
                ...prev,
                [targetZone]: [...prev[targetZone], item],
            }));
        }

        dragItemRef.current = null;
        dragSourceRef.current = null;
    };

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
        const items = [...question.items];
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        setBank(items);
        const initial = {};
        question.categories.forEach(cat => { initial[cat] = []; });
        setZones(initial);
        setSubmitted(false);
        setResults(null);
    };

    const allPlaced = bank.length === 0;

    return (
        <div className="dragdrop-exercise card animate-fade-in">
            <div className="mcq-stem">
                <h3>{question.stem}</h3>
            </div>

            {/* Item Bank */}
            <div
                className="dd-bank"
                onDragOver={e => e.preventDefault()}
                onDrop={() => handleDrop('bank')}
            >
                <span className="dd-bank-label">Drag items to the correct category</span>
                <div className="dd-bank-items">
                    {bank.map((item, i) => (
                        <div
                            key={item.text}
                            className="dd-item"
                            draggable={!submitted}
                            onDragStart={() => handleDragStart(item, 'bank')}
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <GripVertical size={14} className="dd-grip" />
                            {item.text}
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
                        className={`dd-zone ${submitted ? 'submitted' : ''}`}
                        onDragOver={e => e.preventDefault()}
                        onDrop={() => handleDrop(cat)}
                    >
                        <div className="dd-zone-header">{cat}</div>
                        <div className="dd-zone-items">
                            {(results ? results[cat] : zones[cat]).map(item => (
                                <div
                                    key={item.text}
                                    className={`dd-item ${submitted ? (item.correct ? 'correct' : 'incorrect') : ''}`}
                                    draggable={!submitted}
                                    onDragStart={() => handleDragStart(item, cat)}
                                >
                                    <GripVertical size={14} className="dd-grip" />
                                    {item.text}
                                    {submitted && item.correct && <CheckCircle size={14} className="correct-icon" />}
                                    {submitted && !item.correct && <XCircle size={14} className="incorrect-icon" />}
                                </div>
                            ))}
                            {(results ? results[cat] : zones[cat]).length === 0 && (
                                <span className="dd-empty">Drop here</span>
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
