import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, RotateCcw, ArrowLeft, ArrowRight, Layers, CheckCircle, BookOpen } from 'lucide-react';
import { listFlashcards } from '../services/notes/noteStore.js';
import './Pages.css';

const KNOWN_KEY = 'lt_flashcard_known';
const LEARNING_KEY = 'lt_flashcard_learning';

function loadStoredIds(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}


function parseNoteId(noteId) {
    const parts = String(noteId || '').split(':');
    if (parts.length !== 5 || parts[0] !== 'note') return null;
    return `/notes/${parts[1]}/${parts[2]}/${parts[3]}/${parts[4]}`;
}

export default function FlashcardsPage() {
    const [userCards, setUserCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [known, setKnown] = useState(() => loadStoredIds(KNOWN_KEY));
    const [learning, setLearning] = useState(() => loadStoredIds(LEARNING_KEY));

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

    useEffect(() => {
        localStorage.setItem(KNOWN_KEY, JSON.stringify(known));
    }, [known]);

    useEffect(() => {
        localStorage.setItem(LEARNING_KEY, JSON.stringify(learning));
    }, [learning]);

    const cards = useMemo(() => {
        return userCards.map((card) => ({
            id: card.cardId,
            front: card.front,
            back: card.back,
            topic: card.subject || 'Generated',
            sourceNoteId: card.sourceNoteId,
            sourceLabel: card.sourceLabel,
        }));
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

    if (totalCards === 0) {
        return (
            <div className="flashcard-hub animate-fade-in">
                <div className="flashcard-page-header">
                    <div className="flashcard-title-group">
                        <div className="flashcard-subject-icon">
                            <Layers size={28} />
                        </div>
                        <div>
                            <h1 className="flashcard-page-title">Flashcards</h1>
                            <p className="flashcard-page-qual">Tap to flip · Review generated cards from your notes</p>
                        </div>
                    </div>
                </div>
                <div className="card empty-state flashcard-empty-state">
                    <div className="empty-state-icon flashcard-empty-icon">
                        <Layers size={40} />
                    </div>
                    <h3>No Flashcards Yet</h3>
                    <p>
                        Flashcards are generated from your saved notes. Start reading and saving notes to build your deck.
                    </p>
                </div>
            </div>
        );
    }

    const sourcePath = parseNoteId(card.sourceNoteId);

    return (
        <div className="flashcard-hub animate-fade-in">
            {/* Bento Header */}
            <div className="flashcard-page-header">
                <div className="flashcard-title-group">
                    <div className="flashcard-subject-icon">
                        <Layers size={28} />
                    </div>
                    <div>
                        <h1 className="flashcard-page-title">Flashcards</h1>
                        <p className="flashcard-page-qual">Tap to flip · Review generated cards from your notes</p>
                    </div>
                </div>
                <div className="flashcard-meta-boxes">
                    <div className="meta-box">
                        <div className="meta-icon meta-icon--success">
                            <CheckCircle size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{known.length}</strong>
                            <span>Known</span>
                        </div>
                    </div>
                    <div className="meta-box">
                        <div className="meta-icon meta-icon--warning">
                            <BookOpen size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{learning.length}</strong>
                            <span>Learning</span>
                        </div>
                    </div>
                    <div className="meta-box">
                        <div className="meta-icon meta-icon--info">
                            <Layers size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{totalCards}</strong>
                            <span>Total</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flashcard-container">
                <div className="flashcard-wrapper" onClick={() => setIsFlipped(!isFlipped)}>
                    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                        <div className="flashcard-face flashcard-front">
                            <span className="flashcard-topic-badge">
                                {card.topic}
                            </span>
                            <h3>{card.front}</h3>
                            <p className="flashcard-hint">
                                Tap to reveal answer
                            </p>
                        </div>
                        <div className="flashcard-face flashcard-back">
                            <span className="badge badge-primary flashcard-answer-badge">Answer</span>
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
                        localStorage.removeItem(KNOWN_KEY);
                        localStorage.removeItem(LEARNING_KEY);
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
