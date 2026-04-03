import { useState, useEffect, useCallback, useRef } from 'react';
import { Clock, AlertTriangle, CheckCircle, XCircle, ArrowRight, Lightbulb, Lock } from 'lucide-react';
import { incrementPerfectScores, incrementFastCompletions } from '../../services/activityStore.js';
import './PastPapers.css';

export default function TimedExam({ paper, questions, onFinish }) {
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState(() => questions.map(() => null));
    const [confidence, setConfidence] = useState(() => questions.map(() => null));
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(paper.durationSeconds);
    const [timedOut, setTimedOut] = useState(false);
    // endTimeRef holds the absolute wall-clock target so ticks stay accurate
    // even when the main thread is busy (setInterval(1000) can fire late).
    // null until the first effect run to avoid calling Date.now() during render.
    const endTimeRef = useRef(null);

    // Timer — drift-free: remaining = endTime - Date.now()
    useEffect(() => {
        if (submitted) return;
        // Lazily initialise the end-time once so re-renders don't reset it.
        if (endTimeRef.current === null) {
            endTimeRef.current = Date.now() + paper.durationSeconds * 1000;
        }
        const interval = setInterval(() => {
            const remaining = Math.round((endTimeRef.current - Date.now()) / 1000);
            if (remaining <= 0) {
                clearInterval(interval);
                setTimeLeft(0);
                setTimedOut(true);
                setSubmitted(true);
            } else {
                setTimeLeft(remaining);
            }
        }, 500); // poll at 500ms so display updates promptly
        return () => clearInterval(interval);
    }, [submitted, paper.durationSeconds]);

    const formatTime = (secs) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const handleSelect = (optionIndex) => {
        if (submitted) return;
        setAnswers(prev => {
            const updated = [...prev];
            updated[currentQ] = optionIndex;
            return updated;
        });
    };

    const handleConfidence = (level) => {
        if (submitted) return;
        setConfidence(prev => {
            const updated = [...prev];
            updated[currentQ] = level;
            return updated;
        });
    };

    const handleSubmit = useCallback(() => {
        if (submitted) return;
        setSubmitted(true);
        // D5: Record badge-relevant stats for manual (non-timeout) submissions.
        const scoreNow = questions.reduce(
            (acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0), 0
        );
        const pct = questions.length > 0 ? (scoreNow / questions.length) * 100 : 0;
        if (pct === 100) incrementPerfectScores();
        // Fast completion: >50% of total time still on the clock.
        const remaining = endTimeRef.current ? (endTimeRef.current - Date.now()) / 1000 : 0;
        if (remaining > paper.durationSeconds * 0.5) incrementFastCompletions();
    }, [submitted, questions, answers, paper.durationSeconds]);


    const score = submitted
        ? questions.reduce((acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0), 0)
        : 0;

    const answeredCount = answers.filter(a => a !== null).length;

    const timePercent = (timeLeft / paper.durationSeconds) * 100;
    const isLowTime = timeLeft < 60;

    const q = questions[currentQ];

    // Results view
    if (submitted) {
        const percentage = Math.round((score / questions.length) * 100);
        const mistakes = questions
            .map((q, i) => ({ ...q, userAnswer: answers[i], index: i }))
            .filter(item => item.userAnswer !== item.correctAnswer);

        return (
            <div className="timed-exam animate-fade-in">
                <div className="exam-results-header">
                    {timedOut && (
                        <div className="exam-timeout-banner">
                            <AlertTriangle size={18} />
                            Time's up! Your answers have been locked.
                        </div>
                    )}
                    <h2>Exam Complete</h2>
                    <div className="exam-score-display">
                        <div className={`exam-score-ring ${percentage >= 70 ? 'pass' : 'fail'}`}>
                            <span className="exam-score-number">{percentage}%</span>
                        </div>
                        <div className="exam-score-details">
                            <p><strong>{score}/{questions.length}</strong> correct</p>
                            <p className="exam-score-label">
                                {percentage >= 70 ? '🎉 Well done!' : percentage >= 50 ? '📚 Keep studying' : '💪 More practice needed'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Review each question */}
                <div className="exam-review">
                    <h3>Question Review</h3>
                    {questions.map((q, i) => {
                        const isCorrect = answers[i] === q.correctAnswer;
                        return (
                            <div key={i} className={`exam-review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                                <div className="exam-review-header">
                                    <span className="exam-review-q">Q{i + 1}</span>
                                    {isCorrect ? <CheckCircle size={16} className="correct-icon" /> : <XCircle size={16} className="incorrect-icon" />}
                                    {confidence[i] && (
                                        <span className={`confidence-badge conf-${confidence[i]}`}>{confidence[i]}</span>
                                    )}
                                </div>
                                <p className="exam-review-stem">{q.stem}</p>
                                <div className="exam-review-answers">
                                    {q.options.map((opt, j) => {
                                        let cls = 'exam-review-option';
                                        if (j === q.correctAnswer) cls += ' correct';
                                        if (j === answers[i] && j !== q.correctAnswer) cls += ' incorrect';
                                        return <div key={j} className={cls}>{String.fromCharCode(65 + j)}. {opt}</div>;
                                    })}
                                </div>
                                {q.rationale && <p className="exam-review-rationale"><Lightbulb size={12} /> {q.rationale}</p>}

                                {/* Marking Scheme Dropdown */}
                                {(q.markingScheme || q.rationale) && (
                                    <details className="marking-scheme-details">
                                        <summary className="marking-scheme-summary" style={{
                                            cursor: 'pointer',
                                            marginTop: 'var(--space-2)',
                                            fontSize: 'var(--font-size-sm)',
                                            color: 'var(--color-primary)',
                                            fontWeight: '500'
                                        }}>
                                            View Marking Scheme
                                        </summary>
                                        <div style={{
                                            marginTop: 'var(--space-2)',
                                            padding: 'var(--space-3)',
                                            background: 'var(--color-bg-tertiary)',
                                            borderRadius: 'var(--radius-sm)',
                                            fontSize: 'var(--font-size-sm)'
                                        }}>
                                            {q.markingScheme && (
                                                <div style={{ marginBottom: 'var(--space-2)' }}>
                                                    <strong>Mark Scheme:</strong> {q.markingScheme}
                                                </div>
                                            )}
                                            {q.marks && (
                                                <div style={{ marginBottom: 'var(--space-2)' }}>
                                                    <strong>Marks:</strong> {q.marks}
                                                </div>
                                            )}
                                            {q.rationale && (
                                                <div>
                                                    <strong>Explanation:</strong> {q.rationale}
                                                </div>
                                            )}
                                        </div>
                                    </details>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mcq-actions">
                    <button className="btn btn-primary btn-lg" onClick={() => onFinish?.({
                        score, total: questions.length, percentage, answers, confidence,
                        mistakes: mistakes.map(m => ({
                            question: m.stem,
                            yourAnswer: m.options[m.userAnswer] || 'Unanswered',
                            correctAnswer: m.options[m.correctAnswer],
                            topic: m.topic,
                        })),
                    })}>
                        Done <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="timed-exam animate-fade-in">
            {/* Timer Bar */}
            <div className={`exam-timer ${isLowTime ? 'low-time' : ''}`}>
                <div className="exam-timer-bar">
                    <div className="exam-timer-fill" style={{ width: `${timePercent}%` }} />
                </div>
                <div className="exam-timer-info">
                    <Clock size={14} />
                    <span>{formatTime(timeLeft)}</span>
                    <span className="exam-timer-count">{answeredCount}/{questions.length} answered</span>
                </div>
            </div>

            {/* Question Navigator */}
            <div className="exam-nav">
                {questions.map((_, i) => (
                    <button
                        key={i}
                        className={`exam-nav-btn ${i === currentQ ? 'active' : ''} ${answers[i] !== null ? 'answered' : ''}`}
                        onClick={() => setCurrentQ(i)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* Question */}
            <div className="exam-question card">
                <div className="exam-q-header">
                    <span className="badge badge-primary">Question {currentQ + 1} of {questions.length}</span>
                    {q.topic && <span className="badge badge-info">{q.topic}</span>}
                </div>

                <h3 className="exam-q-stem">{q.stem}</h3>

                <div className="mcq-options">
                    {q.options.map((opt, i) => {
                        const letter = String.fromCharCode(65 + i);
                        let cls = 'mcq-option';
                        if (answers[currentQ] === i) cls += ' selected';

                        return (
                            <button key={i} className={cls} onClick={() => handleSelect(i)}>
                                <span className="mcq-option-letter">{letter}</span>
                                <span className="mcq-option-text">{opt}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Confidence Rating */}
                <div className="confidence-section">
                    <span className="confidence-label">How confident are you?</span>
                    <div className="confidence-buttons">
                        {['Easy', 'Medium', 'Hard'].map(level => (
                            <button
                                key={level}
                                className={`btn btn-sm confidence-btn conf-${level} ${confidence[currentQ] === level ? 'active' : ''}`}
                                onClick={() => handleConfidence(level)}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="exam-actions">
                <button
                    className="btn btn-ghost"
                    disabled={currentQ === 0}
                    onClick={() => setCurrentQ(prev => prev - 1)}
                >
                    ← Previous
                </button>
                {currentQ < questions.length - 1 ? (
                    <button
                        className="btn btn-primary"
                        onClick={() => setCurrentQ(prev => prev + 1)}
                    >
                        Next →
                    </button>
                ) : (
                    <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
                        <Lock size={16} /> Submit Exam
                    </button>
                )}
            </div>
        </div>
    );
}
