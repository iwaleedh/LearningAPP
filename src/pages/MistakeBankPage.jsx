import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import PageHeader from '../components/common/PageHeader.jsx';
import { listMistakes, removeMistake, clearMistakes } from '../services/mistakeStore.js';
import './Pages.css';

function timeAgo(isoString) {
    const diff = Date.now() - new Date(isoString).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins} min ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} h ago`;
    const days = Math.floor(hrs / 24);
    return days === 1 ? 'Yesterday' : `${days} days ago`;
}

export default function MistakeBankPage() {
    const [mistakes, setMistakes] = useState([]);
    const [status, setStatus] = useState('loading');
    const [confirmingClear, setConfirmingClear] = useState(false);

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
        setConfirmingClear(false);
    }

    const header = (
        <PageHeader
            title="Mistake bank"
            description="Questions you got wrong in Practice. Go over each one, then mark it as learned."
            actions={mistakes.length > 0 ? (
                confirmingClear ? (
                    <div className="mistake-clear-confirm" role="group" aria-label="Confirm clearing all mistakes">
                        <span>Clear all {mistakes.length}?</span>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => void dismissAll()}>Clear all</button>
                        <button type="button" className="btn btn-sm btn-ghost" onClick={() => setConfirmingClear(false)}>Cancel</button>
                    </div>
                ) : (
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => setConfirmingClear(true)}>
                        <Trash2 size={16} aria-hidden="true" /> Clear all
                    </button>
                )
            ) : null}
        />
    );

    if (status === 'loading') {
        return (
            <div className="mistake-hub">
                {header}
                <p className="exercise-status" role="status">Loading your mistakes…</p>
            </div>
        );
    }

    if (mistakes.length === 0) {
        return (
            <div className="mistake-hub">
                {header}
                <div className="card empty-state">
                    <div className="empty-state-icon">
                        <CheckCircle size={36} aria-hidden="true" />
                    </div>
                    <h3>Nothing to review</h3>
                    <p>When you get a question wrong in Practice, it is saved here so you can go over it later.</p>
                    <Link to="/exercises" className="btn btn-primary">
                        Go to Practice <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="mistake-hub">
            {header}

            <p className="mistake-count">{mistakes.length} {mistakes.length === 1 ? 'question' : 'questions'} to review</p>

            <ul className="list-card mistake-list">
                {mistakes.map((mistake) => (
                    <li key={mistake.id} className="mistake-item">
                        <div className="mistake-item-meta">
                            {mistake.topic && <span className="chip chip--static">{mistake.topic}</span>}
                            <span>
                                {mistake.attempts} {mistake.attempts === 1 ? 'attempt' : 'attempts'} · {timeAgo(mistake.lastAttempt)}
                            </span>
                        </div>
                        <p className="mistake-question">{mistake.question}</p>
                        <dl className="mistake-answer-pair">
                            <div className="mistake-answer is-yours">
                                <dt><XCircle size={16} aria-hidden="true" /> Your answer</dt>
                                <dd>{mistake.yourAnswer || '—'}</dd>
                            </div>
                            <div className="mistake-answer is-correct">
                                <dt><CheckCircle size={16} aria-hidden="true" /> Correct answer</dt>
                                <dd>{mistake.correctAnswer || '—'}</dd>
                            </div>
                        </dl>
                        <button type="button" className="btn btn-outline btn-sm mistake-learned-btn" onClick={() => void dismiss(mistake.id)}>
                            <Check size={16} aria-hidden="true" /> Mark as learned
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
