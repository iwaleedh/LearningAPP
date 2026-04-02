import { AlertTriangle, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
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
            <div className="mistake-hub animate-fade-in">
                <div className="mistake-page-header">
                    <div className="mistake-title-group">
                        <div className="mistake-subject-icon">
                            <CheckCircle size={28} />
                        </div>
                        <div>
                            <h1 className="mistake-page-title">Mistake Bank</h1>
                            <p className="mistake-page-qual">All clear — no pending mistakes</p>
                        </div>
                    </div>
                </div>
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
        <div className="mistake-hub animate-fade-in">
            {/* Bento Header */}
            <div className="mistake-page-header">
                <div className="mistake-title-group">
                    <div className="mistake-subject-icon">
                        <AlertTriangle size={28} />
                    </div>
                    <div>
                        <h1 className="mistake-page-title">Mistake Bank</h1>
                        <p className="mistake-page-qual">Questions you got wrong — clear them by answering correctly twice</p>
                    </div>
                </div>
                <div className="mistake-meta-boxes">
                    <div className="meta-box">
                        <div className="meta-icon" style={{ background: 'linear-gradient(135deg,#fecaca,#fca5a5)', color: '#dc2626' }}>
                            <XCircle size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{sampleMistakes.length}</strong>
                            <span>To Review</span>
                        </div>
                    </div>
                    <div className="meta-box">
                        <div className="meta-icon" style={{ background: 'linear-gradient(135deg,#d1fae5,#a7f3d0)', color: '#059669' }}>
                            <RotateCcw size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{sampleMistakes.reduce((s, m) => s + m.attempts, 0)}</strong>
                            <span>Total Attempts</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mistake Cards */}
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
                        <div className="mistake-answers">
                            <span className="mistake-yours">
                                <XCircle size={13} /> Your answer: <strong>{mistake.yourAnswer}</strong>
                            </span>
                            <span className="mistake-correct">
                                <CheckCircle size={13} /> Correct: <strong>{mistake.correctAnswer}</strong>
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
