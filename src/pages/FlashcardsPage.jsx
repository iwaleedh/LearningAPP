import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, RotateCcw, ArrowLeft, ArrowRight } from 'lucide-react';
import { listFlashcards } from '../services/notes/noteStore.js';
import './Pages.css';

const sampleFlashcards = [
    { id: 'sample-1', front: 'What is an isotope?', back: 'Atoms of the same element with different numbers of neutrons.', topic: 'Atomic Structure' },
    { id: 'sample-2', front: 'Define electronegativity', back: 'The ability of an atom to attract bonding electrons in a covalent bond.', topic: 'Chemical Bonding' },
    { id: 'sample-3', front: 'What is Avogadro\'s number?', back: '6.022 × 10^23 particles per mole.', topic: 'Stoichiometry' },
];

function parseNoteId(noteId) {
    const parts = String(noteId || '').split(':');
    if (parts.length !== 5 || parts[0] !== 'note') return null;
    return `/notes/${parts[1]}/${parts[2]}/${parts[3]}/${parts[4]}`;
}

export default function FlashcardsPage() {
    const [userCards, setUserCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [known, setKnown] = useState([]);
    const [learning, setLearning] = useState([]);

    useEffect(() => {
        let cancelled = false;

        listFlashcards().then((cards) => {
            if (cancelled) return;
            setUserCards(cards || []);
            setCurrentIndex(0);
            setIsFlipped(false);
        });

        return () => {
            cancelled = true;
        };
    }, []);

    const cards = useMemo(() => {
        if (userCards.length > 0) {
            return userCards.map((card) => ({
                id: card.cardId,
                front: card.front,
                back: card.back,
                topic: card.subject || 'Generated',
                sourceNoteId: card.sourceNoteId,
                sourceLabel: card.sourceLabel,
            }));
        }

        return sampleFlashcards;
    }, [userCards]);

    const totalCards = cards.length;
    const card = cards[Math.min(currentIndex, Math.max(0, totalCards - 1))];

    const goNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % totalCards);
        }, 120);
    };

    const goPrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
        }, 120);
    };

    const markKnown = () => {
        if (!known.includes(card.id)) setKnown((prev) => [...prev, card.id]);
        goNext();
    };

    const markLearning = () => {
        if (!learning.includes(card.id)) setLearning((prev) => [...prev, card.id]);
        goNext();
    };

    if (!card) {
        return <div className="card">No flashcards available yet.</div>;
    }

    const sourcePath = parseNoteId(card.sourceNoteId);

    return (
        <div className="animate-fade-in" style={{ maxWidth: '680px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-2)' }}>Flashcards</h1>
            <p style={{ textAlign: 'center', marginBottom: 'var(--space-2)' }}>
                Tap to flip · Review generated cards from your notes
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                <span className="badge badge-success">✓ {known.length} Known</span>
                <span className="badge badge-warning">📖 {learning.length} Learning</span>
                <span className="badge badge-info">{totalCards} Total</span>
            </div>

            <div className="flashcard-container">
                <div className="flashcard-wrapper" onClick={() => setIsFlipped(!isFlipped)}>
                    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                        <div className="flashcard-face flashcard-front">
                            <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: 'var(--space-4)' }}>
                                {card.topic}
                            </span>
                            <h3>{card.front}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-4)' }}>
                                Tap to reveal answer
                            </p>
                        </div>
                        <div className="flashcard-face flashcard-back">
                            <span className="badge badge-primary" style={{ marginBottom: 'var(--space-4)' }}>Answer</span>
                            <p>{card.back}</p>
                        </div>
                    </div>
                </div>

                <span className="flashcard-counter">{currentIndex + 1} / {totalCards}</span>

                {sourcePath && (
                    <Link className="btn btn-sm btn-ghost" to={sourcePath}>
                        From note: {card.sourceLabel || card.sourceNoteId}
                    </Link>
                )}

                <div className="flashcard-controls">
                    <button className="btn btn-secondary" onClick={goPrev}>
                        <ArrowLeft size={18} />
                    </button>
                    <button className="btn btn-danger btn-lg" onClick={markLearning} title="Still learning">
                        <ThumbsDown size={18} /> Learning
                    </button>
                    <button className="btn btn-success btn-lg" onClick={markKnown} title="I know this">
                        <ThumbsUp size={18} /> Got it!
                    </button>
                    <button className="btn btn-secondary" onClick={goNext}>
                        <ArrowRight size={18} />
                    </button>
                </div>

                <button
                    className="btn btn-ghost"
                    onClick={() => {
                        setKnown([]);
                        setLearning([]);
                        setCurrentIndex(0);
                        setIsFlipped(false);
                    }}
                >
                    <RotateCcw size={16} /> Reset Progress
                </button>
            </div>
        </div>
    );
}
