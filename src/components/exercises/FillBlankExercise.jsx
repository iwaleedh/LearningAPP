import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, Lightbulb } from 'lucide-react';
import './Exercises.css';

function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = a[i - 1] === b[j - 1]
                ? dp[i - 1][j - 1]
                : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }
    return dp[m][n];
}

export default function FillBlankExercise({ question, onNext, onMistake }) {
    const [answers, setAnswers] = useState(
        () => question.blanks.map(() => '')
    );
    const [submitted, setSubmitted] = useState(false);
    const [results, setResults] = useState([]);
    const [showRationale, setShowRationale] = useState(false);

    const handleChange = (index, value) => {
        setAnswers(prev => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    const handleSubmit = () => {
        const checks = question.blanks.map((blank, i) => {
            const userAnswer = answers[i].trim().toLowerCase();
            const correctAnswer = blank.answer.toLowerCase();
            const distance = levenshtein(userAnswer, correctAnswer);
            const isExact = userAnswer === correctAnswer;
            const isFuzzy = distance <= 2 && distance > 0;
            return {
                correct: isExact || isFuzzy,
                isExact,
                isFuzzy,
                expected: blank.answer,
            };
        });
        setResults(checks);
        setSubmitted(true);
    };

    const handleNext = () => {
        if (submitted && !allCorrect) {
            const firstWrong = results.findIndex(r => !r.correct);
            onMistake?.({
                question: question.stem,
                yourAnswer: answers[firstWrong] || answers[0] || '',
                correctAnswer: question.blanks[firstWrong]?.answer || question.blanks[0]?.answer || '',
                topic: question.topic || '',
            });
        }
        setAnswers(question.blanks.map(() => ''));
        setSubmitted(false);
        setResults([]);
        setShowRationale(false);
        onNext?.();
    };

    const allCorrect = results.length > 0 && results.every(r => r.correct);
    const score = results.filter(r => r.correct).length;

    // Build rendered content with inline blanks
    const renderContent = () => {
        const parts = question.template.split(/(__BLANK__)/g);
        let blankIndex = 0;

        return parts.map((part, i) => {
            if (part === '__BLANK__') {
                const idx = blankIndex++;
                const result = submitted ? results[idx] : null;
                let className = 'fb-input';
                if (result) {
                    className += result.correct ? ' correct' : ' incorrect';
                }

                return (
                    <span key={i} className="fb-input-wrapper">
                        <input
                            type="text"
                            className={className}
                            value={answers[idx]}
                            onChange={e => handleChange(idx, e.target.value)}
                            disabled={submitted}
                            placeholder="..."
                            autoComplete="off"
                        />
                        {result && !result.correct && (
                            <span className="fb-correct-answer">{result.expected}</span>
                        )}
                        {result && result.isFuzzy && result.correct && (
                            <span className="fb-fuzzy-badge">Close enough ✓</span>
                        )}
                    </span>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <div className="fill-blank-exercise card animate-fade-in">
            <div className="mcq-stem">
                <h3>{question.stem}</h3>
            </div>

            <div className="fb-content">
                <p className="fb-text">{renderContent()}</p>
            </div>

            {submitted && (
                <div className={`mcq-feedback animate-slide-in-up ${allCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="mcq-feedback-header">
                        {allCorrect ? (
                            <>
                                <CheckCircle size={22} />
                                <span>All correct! 🎉</span>
                            </>
                        ) : (
                            <>
                                <XCircle size={22} />
                                <span>{score}/{results.length} correct</span>
                            </>
                        )}
                    </div>

                    {!showRationale && question.rationale && (
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
                        disabled={answers.some(a => a.trim() === '')}
                    >
                        Check Answers
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
