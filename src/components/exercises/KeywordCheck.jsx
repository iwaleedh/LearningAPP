import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Search, ArrowRight } from 'lucide-react';
import { escapeRegExp } from '../../utils/sanitize';
import './Exercises.css';

export default function KeywordCheck({ question, onNext, onMistake, onAttempt }) {
    const [answer, setAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showModel, setShowModel] = useState(false);
    const startedAtRef = useRef(0);
    const getElapsedSeconds = useRef(() => 0);

    useEffect(() => {
        const t0 = performance.now();
        startedAtRef.current = t0;
        getElapsedSeconds.current = () => Math.round((performance.now() - t0) / 1000);
    }, []);

    const handleSubmit = () => {
        if (answer.trim() === '') return;
        setSubmitted(true);
    };

    const handleNext = () => {
        onAttempt?.({
            correct: percentage >= 70,
            scorePercent: percentage,
            durationSeconds: getElapsedSeconds.current(),
            userAnswer: answer.trim(),
            correctAnswer: question.modelAnswer,
        });
        if (submitted && score < total) {
            const missing = question.keywords.filter(kw => !foundKeywords.includes(kw));
            onMistake?.({
                question: question.stem,
                yourAnswer: answer.trim().slice(0, 120) || '(no answer)',
                correctAnswer: missing.length > 0
                    ? `Missing keywords: ${missing.join(', ')}`
                    : question.modelAnswer,
                topic: question.topic || '',
            });
        }
        setAnswer('');
        setSubmitted(false);
        setShowModel(false);
        onNext?.();
    };

    const foundKeywords = submitted
        ? question.keywords.filter(kw => answer.toLowerCase().includes(kw.toLowerCase()))
        : [];

    const highlightKeywords = () => {
        if (!submitted) return answer;
        let highlighted = answer;
        question.keywords.forEach(kw => {
            // Escape metacharacters to prevent regex injection crash
            const regex = new RegExp(`(${escapeRegExp(kw)})`, 'gi');
            highlighted = highlighted.replace(regex, '⟨$1⟩');
        });
        return highlighted;
    };

    const score = foundKeywords.length;
    const total = question.keywords.length;
    // Guard against division by zero: 0 keywords means trivially correct (100%)
    const percentage = total > 0 ? Math.round((score / total) * 100) : 100;

    return (
        <div className="keyword-exercise card animate-fade-in">
            <div className="mcq-stem">
                <h3>{question.stem}</h3>
                <span className="kw-marks">{question.marks} marks</span>
            </div>

            <textarea
                className="kw-textarea"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                disabled={submitted}
                rows={6}
            />

            {submitted && (
                <div className="kw-results animate-slide-in-up">
                    <div className="kw-score-bar">
                        <div className="kw-score-info">
                            <Search size={16} />
                            <span>Keywords found: {score}/{total}{total > 0 ? ` (${percentage}%)` : ''}</span>
                        </div>
                        <div className="kw-progress">
                            <div
                                className="kw-progress-fill"
                                style={{ width: `${percentage}%`, background: percentage >= 70 ? 'var(--color-success)' : percentage >= 40 ? 'var(--color-warning)' : 'var(--color-error)' }}
                            />
                        </div>
                    </div>

                    <div className="kw-keyword-chips">
                        {question.keywords.map(kw => {
                            const found = foundKeywords.includes(kw);
                            return (
                                <span key={kw} className={`kw-chip ${found ? 'found' : 'missing'}`}>
                                    {found && <CheckCircle size={12} />}
                                    {kw}
                                </span>
                            );
                        })}
                    </div>

                    <div className="kw-highlighted-answer">
                        <strong>Your answer (keywords highlighted):</strong>
                        <p>{highlightKeywords()}</p>
                    </div>

                    <button
                        className="btn btn-ghost btn-sm"
                        onClick={() => setShowModel(!showModel)}
                    >
                        {showModel ? 'Hide' : 'Show'} Model Answer
                    </button>

                    {showModel && (
                        <div className="kw-model-answer animate-fade-in">
                            <strong>Model Answer:</strong>
                            <p>{question.modelAnswer}</p>
                        </div>
                    )}
                </div>
            )}

            <div className="mcq-actions">
                {!submitted ? (
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={handleSubmit}
                        disabled={answer.trim() === ''}
                    >
                        <Search size={18} /> Scan for Keywords
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
