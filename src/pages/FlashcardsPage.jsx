import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from 'convex/react';
import { ThumbsUp, ThumbsDown, RotateCcw, ArrowLeft, ArrowRight, Layers, CheckCircle, BookOpen } from 'lucide-react';
import { listFlashcards } from '../services/notes/noteStore.js';
import { api } from '../convex-client.js';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import './Pages.css';

const STATUS_KEY = 'lt_flashcard_status';
const OLD_KNOWN_KEY = 'lt_flashcard_known';
const OLD_LEARNING_KEY = 'lt_flashcard_learning';

/**
 * D11: Single status map eliminates the non-atomic dual-write problem where
 * a browser crash between two localStorage writes could leave a card in both
 * the known and learning lists. One key = one atomic write.
 *
 * Returns { [cardId]: "known" | "learning" }
 */
function loadStatus() {
    try {
        const raw = localStorage.getItem(STATUS_KEY);
        if (raw) return JSON.parse(raw);

        // Migrate from old dual-key format
        const oldKnown = JSON.parse(localStorage.getItem(OLD_KNOWN_KEY) || '[]');
        const oldLearning = JSON.parse(localStorage.getItem(OLD_LEARNING_KEY) || '[]');
        if (oldKnown.length === 0 && oldLearning.length === 0) return {};
        const migrated = {};
        for (const id of oldKnown) migrated[id] = 'known';
        for (const id of oldLearning) migrated[id] = 'learning'; // learning wins on overlap
        localStorage.setItem(STATUS_KEY, JSON.stringify(migrated));
        localStorage.removeItem(OLD_KNOWN_KEY);
        localStorage.removeItem(OLD_LEARNING_KEY);
        return migrated;
    } catch {
        return {};
    }
}

function clearLegacyStatus() {
    try {
        localStorage.removeItem(STATUS_KEY);
        localStorage.removeItem(OLD_KNOWN_KEY);
        localStorage.removeItem(OLD_LEARNING_KEY);
    } catch {
        // ignore local cleanup failures
    }
}

function mapServerProgressRows(rows) {
    if (!Array.isArray(rows)) return {};
    // D11: If duplicate rows exist for the same cardId, pick the one with the
    // highest updatedAt so the client always reflects the most recent write.
    const best = {};
    for (const row of rows) {
        if (!row?.cardId || (row.status !== 'known' && row.status !== 'learning')) continue;
        const current = best[row.cardId];
        if (!current || (Number(row.updatedAt) || 0) > (Number(current.updatedAt) || 0)) {
            best[row.cardId] = row;
        }
    }
    return Object.fromEntries(Object.entries(best).map(([id, row]) => [id, row.status]));
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
    const [status, setStatus] = useState({});
    const flipTimerRef = useRef(null); // track flip-transition timer to prevent unmount leaks
    const legacyStatusRef = useRef(loadStatus());
    const migratedLegacyRef = useRef(false);
    const serverProgressRows = useQuery(api.flashcards.listFlashcardProgress);
    const setFlashcardProgress = useMutation(api.flashcards.setFlashcardProgress);
    const bulkUpsertFlashcardProgress = useMutation(api.flashcards.bulkUpsertFlashcardProgress);
    const resetFlashcardProgress = useMutation(api.flashcards.resetFlashcardProgress);

    const known = useMemo(() =>
        Object.entries(status).filter(([, v]) => v === 'known').map(([k]) => k),
        [status]
    );
    const learning = useMemo(() =>
        Object.entries(status).filter(([, v]) => v === 'learning').map(([k]) => k),
        [status]
    );

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
            // Clear any pending flip-transition timer to prevent setState after unmount
            if (flipTimerRef.current !== null) {
                clearTimeout(flipTimerRef.current);
                flipTimerRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (serverProgressRows === undefined) return;

        const serverStatus = mapServerProgressRows(serverProgressRows);
        const legacyStatus = legacyStatusRef.current;

        if (!migratedLegacyRef.current && Object.keys(serverStatus).length === 0 && Object.keys(legacyStatus).length > 0) {
            migratedLegacyRef.current = true;
            setStatus(legacyStatus);
            void bulkUpsertFlashcardProgress({ statusesJson: JSON.stringify(legacyStatus) })
                .then(() => {
                    legacyStatusRef.current = {};
                    clearLegacyStatus();
                })
                .catch(() => {
                    migratedLegacyRef.current = false;
                });
            return;
        }

        if (Object.keys(serverStatus).length > 0) {
            legacyStatusRef.current = {};
            clearLegacyStatus();
        }

        setStatus(serverStatus);
    }, [bulkUpsertFlashcardProgress, serverProgressRows]);

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
        if (flipTimerRef.current !== null) clearTimeout(flipTimerRef.current);
        flipTimerRef.current = setTimeout(() => {
            flipTimerRef.current = null;
            setCurrentIndex((prev) => (prev + 1) % totalCards);
        }, 120);
    };

    const goPrev = () => {
        setIsFlipped(false);
        if (flipTimerRef.current !== null) clearTimeout(flipTimerRef.current);
        flipTimerRef.current = setTimeout(() => {
            flipTimerRef.current = null;
            setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
        }, 120);
    };

    const persistStatus = (nextStatus) => {
        if (!card?.id) return;
        setStatus((prev) => ({ ...prev, [card.id]: nextStatus }));
        void setFlashcardProgress({ cardId: card.id, status: nextStatus });
    };

    const markKnown = () => {
        persistStatus('known');
        goNext();
    };

    const markLearning = () => {
        persistStatus('learning');
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
                <ErrorBoundary name="FlashcardDisplay" inline resetKeys={[card?.id]}>
                <button
                    className="flashcard-wrapper"
                    onClick={() => setIsFlipped(!isFlipped)}
                    aria-label={isFlipped ? `Hide answer. Card ${currentIndex + 1} of ${totalCards}: ${card.front}` : `Reveal answer for card ${currentIndex + 1} of ${totalCards}: ${card.front}`}
                    aria-pressed={isFlipped}
                >
                    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} aria-hidden="true">
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
                </button>

                <span className="flashcard-counter">{currentIndex + 1} / {totalCards}</span>

                {sourcePath && (
                    <Link className="btn btn-sm btn-ghost" to={sourcePath}>
                        From note: {card.sourceLabel || card.sourceNoteId}
                    </Link>
                )}

                <div className="flashcard-controls">
                    <button
                        className="btn btn-secondary"
                        onClick={goPrev}
                        aria-label="Previous flashcard"
                    >
                        <ArrowLeft size={18} aria-hidden="true" />
                    </button>
                    <button
                        className="btn btn-danger btn-lg"
                        onClick={markLearning}
                        aria-label="Mark as still learning and go to next card"
                    >
                        <ThumbsDown size={18} aria-hidden="true" /> Learning
                    </button>
                    <button
                        className="btn btn-success btn-lg"
                        onClick={markKnown}
                        aria-label="Mark as known and go to next card"
                    >
                        <ThumbsUp size={18} aria-hidden="true" /> Got it!
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={goNext}
                        aria-label="Next flashcard"
                    >
                        <ArrowRight size={18} aria-hidden="true" />
                    </button>
                </div>

                <button
                    className="btn btn-ghost"
                    onClick={() => {
                        setStatus({});
                        clearLegacyStatus();
                        setCurrentIndex(0);
                        setIsFlipped(false);
                        void resetFlashcardProgress();
                    }}
                    aria-label="Reset all flashcard progress"
                >
                    <RotateCcw size={16} aria-hidden="true" /> Reset Progress
                </button>
                </ErrorBoundary>
            </div>
        </div>
    );
}
