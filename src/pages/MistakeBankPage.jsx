import { useEffect, useState } from 'react';
import { AlertTriangle, RotateCcw, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import { listMistakes, removeMistake, clearMistakes } from '../services/mistakeStore.js';
import './Pages.css';

function timeAgo(isoString) {
    const diff = Date.now() - new Date(isoString).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
}

export default function MistakeBankPage() {
    const [mistakes, setMistakes] = useState([]);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        let cancelled = false;

        async function loadMistakes() {
            setStatus('loading');
            const rows = await listMistakes();
            if (cancelled) return;
            setMistakes(rows);
            setStatus('ready');
        }

        void loadMistakes();

        return () => {
            cancelled = true;
        };
    }, []);

    async function dismiss(id) {
        const removed = await removeMistake(id);
        if (!removed) return;
        setMistakes((prev) => prev.filter((mistake) => mistake.id !== id));
    }

    async function dismissAll() {
        const cleared = await clearMistakes();
        if (!cleared) return;
        setMistakes([]);
    }

    if (status === 'loading') {
        return (
            <div className="mistake-hub animate-fade-in">
                <div className="mistake-page-header">
                    <div className="mistake-title-group">
                        <div className="mistake-subject-icon">
                            <AlertTriangle size={28} />
                        </div>
                        <div>
                            <h1 className="mistake-page-title">Mistake Bank</h1>
                            <p className="mistake-page-qual">Loading your saved mistakes...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (mistakes.length === 0) {
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
                    <h3>All clear!</h3>
                    <p>Wrong answers from exercises will appear here for review. Keep practising!</p>
                </div>
            </div>
        );
    }

    const totalAttempts = mistakes.reduce((s, m) => s + m.attempts, 0);

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
                        <p className="mistake-page-qual">Questions you got wrong — review and dismiss when mastered</p>
                    </div>
                </div>
                <div className="mistake-meta-boxes">
                    <div className="meta-box">
                        <div className="meta-icon meta-icon--danger">
                            <XCircle size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{mistakes.length}</strong>
                            <span>To Review</span>
                        </div>
                    </div>
                    <div className="meta-box">
                        <div className="meta-icon meta-icon--success">
                            <RotateCcw size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{totalAttempts}</strong>
                            <span>Total Attempts</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mistake-toolbar">
                <button className="btn btn-ghost btn-sm" onClick={() => void dismissAll()}>
                    <Trash2 size={14} /> Clear All
                </button>
            </div>

            {/* Mistake Cards */}
            <div className="mistake-list">
                {mistakes.map((mistake, i) => (
                    <div
                        key={mistake.id}
                        className="mistake-card card animate-fade-in"
                        style={{ animationDelay: `${i * 0.05}s` }}
                    >
                        <div className="mistake-header">
                            <span className="mistake-topic badge badge-primary">{mistake.topic}</span>
                            <span className="mistake-attempts">
                                {mistake.attempts} attempt{mistake.attempts !== 1 ? 's' : ''} · {timeAgo(mistake.lastAttempt)}
                            </span>
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
                        <button className="btn btn-ghost btn-sm" onClick={() => void dismiss(mistake.id)}>
                            <CheckCircle size={14} /> Mark as Mastered
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
