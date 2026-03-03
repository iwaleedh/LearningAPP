import { GraduationCap, RotateCcw, CheckCircle } from 'lucide-react';
import './Pages.css';

const sampleMistakes = [
    {
        id: 1,
        question: 'What is the relative charge of a proton?',
        yourAnswer: '-1',
        correctAnswer: '+1',
        topic: 'Atomic Structure',
        attempts: 1,
        lastAttempt: '2 hours ago',
    },
    {
        id: 2,
        question: 'Which type of bonding involves the transfer of electrons?',
        yourAnswer: 'Covalent',
        correctAnswer: 'Ionic',
        topic: 'Chemical Bonding',
        attempts: 2,
        lastAttempt: 'Yesterday',
    },
];

export default function MistakeBankPage() {
    if (sampleMistakes.length === 0) {
        return (
            <div className="animate-fade-in">
                <h1 style={{ marginBottom: 'var(--space-2)' }}>Mistake Bank</h1>
                <div className="empty-state">
                    <div className="empty-state-icon">
                        <CheckCircle size={36} />
                    </div>
                    <h3>All clear! 🎉</h3>
                    <p>You have no pending mistakes. Keep up the great work!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in" style={{ maxWidth: '800px' }}>
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Mistake Bank</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                Questions you got wrong are collected here. Clear them by answering correctly twice.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                <span className="badge badge-error">{sampleMistakes.length} mistakes to review</span>
            </div>

            <div className="mistake-list">
                {sampleMistakes.map((mistake, i) => (
                    <div
                        key={mistake.id}
                        className="mistake-card card animate-fade-in"
                        style={{ animationDelay: `${i * 0.08}s` }}
                    >
                        <div className="mistake-header">
                            <span className="mistake-topic badge badge-primary">{mistake.topic}</span>
                            <span className="mistake-attempts">{mistake.attempts} attempt(s) · {mistake.lastAttempt}</span>
                        </div>
                        <p className="mistake-question">{mistake.question}</p>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-3)' }}>
                            <span style={{ color: 'var(--color-error)' }}>
                                ✗ Your answer: <strong>{mistake.yourAnswer}</strong>
                            </span>
                            <span style={{ color: 'var(--color-success)' }}>
                                ✓ Correct: <strong>{mistake.correctAnswer}</strong>
                            </span>
                        </div>
                        <button className="btn btn-primary btn-sm">
                            <RotateCcw size={14} /> Retry This Question
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
