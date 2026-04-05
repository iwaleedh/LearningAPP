import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getSubjectLabel } from '../data/syllabusIndex.js';
import { getSyllabusBySubject as getStaticSyllabusBySubject } from '../data/syllabusCatalog.js';
import { resolveNoteContext } from '../services/notes/noteContext.js';
import { getSeedNote, hasSeedNote } from '../data/seedNotes/index.js';
import NoteBlockRenderer from '../components/notes/NoteBlockRenderer.jsx';
import Highlighter from '../components/student/Highlighter.jsx';
import StickyNotes from '../components/student/StickyNotes.jsx';
import ExportPDF from '../components/student/ExportPDF.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import { useNoteReadStatus } from '../hooks/useNoteReadStatus.js';
import { useSyllabus } from '../hooks/useSyllabus.js';
import './Pages.css';
import './NotePage.css';

// ── Table of Contents ──────────────────────────────────────────────────────

function buildToc(blocks) {
    return (blocks || [])
        .filter((b) => b.type === 'heading' && b.data?.text && (b.data?.level || 2) <= 3)
        .map((b) => ({
            id: b.id,
            text: b.data.text,
            level: b.data.level || 2,
        }));
}

function useViewportMatch(query) {
    const getMatches = useCallback(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return false;
        return window.matchMedia(query).matches;
    }, [query]);

    const [matches, setMatches] = useState(getMatches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const updateMatch = (event) => setMatches(event.matches);

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', updateMatch);
            return () => mediaQuery.removeEventListener('change', updateMatch);
        }

        mediaQuery.addListener(updateMatch);
        return () => mediaQuery.removeListener(updateMatch);
    }, [query]);

    return matches;
}

function getFocusableElements(container) {
    if (!container) return [];

    return [...container.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
        .filter((element) => !element.hasAttribute('hidden') && element.getAttribute('aria-hidden') !== 'true');
}

function useOverlayA11y({ open, containerRef, returnFocusRef, onClose }) {
    useEffect(() => {
        if (!open) return undefined;

        const container = containerRef.current;
        if (!container) return undefined;

        const previousFocus = document.activeElement;
        const returnFocusTarget = returnFocusRef?.current;
        const nextFocusable = getFocusableElements(container)[0] || container;
        const focusTimer = window.requestAnimationFrame(() => {
            nextFocusable.focus?.();
        });

        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onClose?.();
                return;
            }

            if (event.key !== 'Tab') return;

            const focusables = getFocusableElements(container);
            if (!focusables.length) {
                event.preventDefault();
                container.focus?.();
                return;
            }

            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            const active = document.activeElement;

            if (event.shiftKey && active === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);

        return () => {
            window.cancelAnimationFrame(focusTimer);
            document.removeEventListener('keydown', onKeyDown);
            (returnFocusTarget || previousFocus)?.focus?.();
        };
    }, [containerRef, onClose, open, returnFocusRef]);
}

function useBodyScrollLock(active) {
    useEffect(() => {
        if (!active) return undefined;

        const previousBodyOverflow = document.body.style.overflow;
        const previousHtmlOverflow = document.documentElement.style.overflow;

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.documentElement.style.overflow = previousHtmlOverflow;
        };
    }, [active]);
}

function TableOfContents({ toc, activeId, onSelect, className = '', showHeader = true }) {
    if (!toc.length) return null;
    return (
        <nav className={`note-toc ${className}`.trim()} aria-label="Table of contents">
            {showHeader ? <div className="note-toc-header">Contents</div> : null}
            <ul className="note-toc-list">
                {toc.map((item) => (
                    <li key={item.id} className={`note-toc-item level-${item.level}`}>
                        <button
                            className={`note-toc-link ${activeId === item.id ? 'active' : ''}`}
                            onClick={() => onSelect(item.id)}
                            title={item.text}
                        >
                            {item.text}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function MobileTableOfContents({ toc, activeId, onSelect, onClose, returnFocusRef }) {
    const containerRef = useRef(null);

    useOverlayA11y({ open: true, containerRef, returnFocusRef, onClose });

    return (
        <>
            <button
                className="note-sheet-backdrop"
                type="button"
                onClick={onClose}
                aria-label="Close table of contents"
            />
            <div
                ref={containerRef}
                className="note-sheet note-toc-sheet"
                role="dialog"
                aria-modal="true"
                aria-labelledby="note-toc-sheet-title"
                tabIndex={-1}
            >
                <div className="note-sheet-handle" aria-hidden="true" />
                <div className="note-sheet-header">
                    <h3 id="note-toc-sheet-title" className="note-sheet-title">Contents</h3>
                    <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={onClose}
                        aria-label="Close table of contents"
                    >
                        ✕
                    </button>
                </div>
                <TableOfContents
                    toc={toc}
                    activeId={activeId}
                    showHeader={false}
                    className="note-toc--sheet"
                    onSelect={(blockId) => {
                        onSelect(blockId);
                        onClose();
                    }}
                />
            </div>
        </>
    );
}

// ── Recall Panel ───────────────────────────────────────────────────────────

function RecallPanel({ recall, onClose, isMobileModal = false, returnFocusRef }) {
    const cues = recall?.cues || [];
    const [revealedSet, setRevealedSet] = useState(new Set());
    const [currentIdx, setCurrentIdx] = useState(0);
    const containerRef = useRef(null);
    const swipeStartRef = useRef(null);

    useOverlayA11y({ open: isMobileModal, containerRef, returnFocusRef, onClose });

    const movePrev = useCallback(() => {
        setCurrentIdx((index) => Math.max(0, index - 1));
    }, []);

    const moveNext = useCallback(() => {
        setCurrentIdx((index) => Math.min(cues.length - 1, index + 1));
    }, [cues.length]);

    const toggle = (id) => setRevealedSet((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
    });

    const cue = cues[currentIdx];
    const answer = cue?.answer || recall?.summaryText || 'See note content.';

    const handleTouchStart = useCallback((event) => {
        const touch = event.changedTouches?.[0];
        if (!touch) return;
        swipeStartRef.current = { x: touch.clientX, y: touch.clientY };
    }, []);

    const handleTouchEnd = useCallback((event) => {
        const touch = event.changedTouches?.[0];
        const start = swipeStartRef.current;
        swipeStartRef.current = null;
        if (!touch || !start) return;

        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;
        if (Math.abs(deltaX) < 48 || Math.abs(deltaY) > 40) return;

        if (deltaX > 0) {
            movePrev();
        } else {
            moveNext();
        }
    }, [moveNext, movePrev]);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            movePrev();
        }
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            moveNext();
        }
        if (event.key === 'Escape' && isMobileModal) {
            event.preventDefault();
            onClose?.();
        }
    }, [isMobileModal, moveNext, movePrev, onClose]);

    if (!cues.length) {
        return (
            <div
                ref={containerRef}
                className={`recall-panel ${isMobileModal ? 'recall-panel--modal' : ''}`}
                role={isMobileModal ? 'dialog' : 'complementary'}
                aria-modal={isMobileModal ? 'true' : undefined}
                aria-label="Recall mode"
                tabIndex={-1}
                onKeyDown={handleKeyDown}
            >
                <div className="recall-panel-header">
                    <span>🧠 Recall Mode</span>
                    <button className="btn btn-ghost btn-sm" onClick={onClose} aria-label="Close recall mode">✕</button>
                </div>
                <p className="recall-empty">No recall cues for this note yet.</p>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={`recall-panel ${isMobileModal ? 'recall-panel--modal' : ''}`}
            role={isMobileModal ? 'dialog' : 'complementary'}
            aria-modal={isMobileModal ? 'true' : undefined}
            aria-labelledby="recall-panel-title"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
        >
            <div className="recall-panel-header">
                <span id="recall-panel-title">🧠 Recall Mode <span className="recall-count">{currentIdx + 1} / {cues.length}</span></span>
                <button className="btn btn-ghost btn-sm" onClick={onClose} aria-label="Close recall mode">✕</button>
            </div>

            <div className="recall-progress-track">
                <div className="recall-progress-fill" style={{ width: `${((currentIdx + 1) / cues.length) * 100}%` }} />
            </div>

            {cue && (
                <div className="recall-cue-card" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <p className="recall-prompt">{cue.prompt}</p>
                    {!revealedSet.has(cue.id) ? (
                        <button
                            className="btn btn-primary btn-sm recall-reveal-btn"
                            onClick={() => toggle(cue.id)}
                        >
                            Show Answer
                        </button>
                    ) : (
                        <div className="recall-answer">
                            <div className="recall-answer-label">💡 Recall cue {currentIdx + 1}</div>
                            <p className="recall-answer-text">{answer}</p>
                        </div>
                    )}
                </div>
            )}

            <div className="recall-nav">
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={movePrev}
                    disabled={currentIdx === 0}
                >← Prev</button>
                <div className="recall-dots" role="tablist" aria-label="Recall cue navigation">
                    {cues.map((c, i) => (
                        <button
                            key={c.id}
                            className={`recall-dot ${i === currentIdx ? 'active' : ''} ${revealedSet.has(c.id) ? 'done' : ''}`}
                            onClick={() => setCurrentIdx(i)}
                            role="tab"
                            aria-label={`Cue ${i + 1}${revealedSet.has(c.id) ? ', answered' : ''}`}
                            aria-selected={i === currentIdx}
                            tabIndex={i === currentIdx ? 0 : -1}
                        />
                    ))}
                </div>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={moveNext}
                    disabled={currentIdx === cues.length - 1}
                >Next →</button>
            </div>
        </div>
    );
}

// ── Read Progress Bar ──────────────────────────────────────────────────────

function ReadProgressBar({ scrollRef, onScrollPct }) {
    const [pct, setPct] = useState(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const onScroll = () => {
            const max = el.scrollHeight - el.clientHeight;
            const next = max > 10 ? Math.min(100, Math.round((el.scrollTop / max) * 100)) : 100;
            setPct(next);
            onScrollPct?.(next);
        };
        el.addEventListener('scroll', onScroll, { passive: true });
        return () => el.removeEventListener('scroll', onScroll);
    }, [scrollRef, onScrollPct]);

    return (
        <div className="note-read-progress" title={`${pct}% read`}>
            <div className="note-read-progress-fill" style={{ width: `${pct}%` }} />
        </div>
    );
}

// ── Scroll To Top Button ───────────────────────────────────────────────────

function ScrollToTopButton({ scrollRef, scrollPct }) {
    const visible = scrollPct > 20;

    const handleClick = () => {
        scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`note-scroll-top-btn ${visible ? 'note-scroll-top-btn--visible' : ''}`}
            onClick={handleClick}
            aria-label="Scroll to top"
            title="Back to top"
        >
            ↑
        </button>
    );
}

// ── Active heading tracker ─────────────────────────────────────────────────

function useActiveHeading(scrollRef, toc) {
    const [activeId, setActiveId] = useState(toc[0]?.id || '');

    useEffect(() => {
        const el = scrollRef.current;
        if (!el || !toc.length) return;

        let rafId = null;
        const onScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rafId = null;
                const headingEls = toc.map((item) => el.querySelector(`[data-block-id="${item.id}"]`)).filter(Boolean);
                let found = toc[0]?.id;
                for (const hEl of headingEls) {
                    const top = hEl.getBoundingClientRect().top - el.getBoundingClientRect().top;
                    if (top <= 80) found = hEl.dataset.blockId;
                }
                setActiveId(found);
            });
        };

        el.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            el.removeEventListener('scroll', onScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [scrollRef, toc]);

    return activeId;
}

// ── Main NotePage ──────────────────────────────────────────────────────────

export default function NotePage() {
    const { subject, unitId, topicId, subtopicIndex } = useParams();
    const navigate = useNavigate();
    const [recallOpen, setRecallOpen] = useState(false);
    const [tocPinnedOpen, setTocPinnedOpen] = useState(true);
    const [tocSheetOpen, setTocSheetOpen] = useState(false);
    const [openTopicId, setOpenTopicId] = useState(null);
    const [scrollPct, setScrollPct] = useState(0);
    const scrollRef = useRef(null);
    const tocButtonRef = useRef(null);
    const recallButtonRef = useRef(null);
    const isCompactLayout = useViewportMatch('(max-width: 899px)');
    const isPhoneLayout = useViewportMatch('(max-width: 599px)');

    const { subjectKey: normalizedSubject, syllabus, isLoading: isLoadingSyllabusAsync } = useSyllabus(subject || 'chemistry');
    const fallbackSyllabus = useMemo(
        () => getStaticSyllabusBySubject(subject || 'chemistry'),
        [subject]
    );
    const activeSyllabus = syllabus || fallbackSyllabus;
    const isLoadingSyllabus = !activeSyllabus && isLoadingSyllabusAsync;
    const context = useMemo(
        () => resolveNoteContext({ subject: normalizedSubject, unitId, topicId, subtopicIndex }, activeSyllabus),
        [normalizedSubject, unitId, topicId, subtopicIndex, activeSyllabus]
    );

    const activeUnit = useMemo(() => {
        return activeSyllabus?.units?.find((u) => String(u.id) === String(unitId)) || activeSyllabus?.units?.[0] || null;
    }, [activeSyllabus, unitId]);

    // Calculate Next Subtopic
    const nextSubtopicParams = useMemo(() => {
        if (!activeUnit) return null;
        const currentTopicIndex = activeUnit.topics.findIndex(t => String(t.id) === String(topicId));
        if (currentTopicIndex === -1) return null;

        const currentTopic = activeUnit.topics[currentTopicIndex];
        const nextSubIdx = Number(subtopicIndex) + 1;

        if (nextSubIdx < currentTopic.subtopics.length) {
            // Next subtopic in the same topic
            return {
                topicId: currentTopic.id,
                subtopicIndex: nextSubIdx,
                title: currentTopic.subtopics[nextSubIdx]
            };
        } else if (currentTopicIndex + 1 < activeUnit.topics.length) {
            // First subtopic of the next topic
            const nextTopic = activeUnit.topics[currentTopicIndex + 1];
            return {
                topicId: nextTopic.id,
                subtopicIndex: 0,
                title: nextTopic.subtopics[0]
            };
        }
        // No more subtopics in this unit
        return null;
    }, [activeUnit, topicId, subtopicIndex]);

    const noteId = `note:${context.subject}:${context.unitId}:${context.topicId}:${context.subtopicIndex}`;
    const noteExists = hasSeedNote(noteId);
    const [seedNote, setSeedNote] = useState(null);
    const [seedNoteStatus, setSeedNoteStatus] = useState(noteExists ? 'loading' : 'missing');

    // dbNote fetching is disabled — seed notes are the canonical source.
    // Enabling it caused stale IndexedDB/Convex data to overwrite updated
    // seed notes every 3 seconds. Re-enable only when user-editing is wired up
    // with a reliable way to tell user edits apart from old seed note snapshots.
    useEffect(() => {
        let cancelled = false;

        async function loadSeedNote() {
            if (!noteExists) {
                setSeedNote(null);
                setSeedNoteStatus('missing');
                return;
            }

            setSeedNote(null);
            setSeedNoteStatus('loading');
            const nextSeedNote = await getSeedNote(noteId);
            if (cancelled) return;

            setSeedNote(nextSeedNote);
            setSeedNoteStatus(nextSeedNote ? 'ready' : 'missing');
        }

        void loadSeedNote();

        return () => {
            cancelled = true;
        };
    }, [noteId, noteExists]);

    const { isRead, readAt, markRead, markUnread } = useNoteReadStatus(noteId);

    const toc = useMemo(() => buildToc(seedNote?.blocks), [seedNote]);
    const activeId = useActiveHeading(scrollRef, toc);

    const scrollToBlock = useCallback((blockId) => {
        const el = scrollRef.current;
        if (!el) return;
        const target = el.querySelector(`[data-block-id="${blockId}"]`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const hasNote = Boolean(seedNote);
    const hasCues = Boolean(seedNote?.recall?.cues?.length);
    const isModalLayerOpen = (isCompactLayout && tocSheetOpen) || (isPhoneLayout && recallOpen);

    useBodyScrollLock(isModalLayerOpen);

    useEffect(() => {
        const frameId = window.requestAnimationFrame(() => {
            setTocSheetOpen(false);
            setOpenTopicId(null);
            if (!isCompactLayout) {
                setTocPinnedOpen(true);
            }
        });

        return () => window.cancelAnimationFrame(frameId);
    }, [isCompactLayout]);

    useEffect(() => {
        const frameId = window.requestAnimationFrame(() => {
            setTocSheetOpen(false);
            setOpenTopicId(null);
        });

        return () => window.cancelAnimationFrame(frameId);
    }, [noteId]);

    useEffect(() => {
        const handlePointerDown = (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) return;
            if (target.closest('.topic-tab-container')) return;
            setOpenTopicId(null);
        };

        document.addEventListener('pointerdown', handlePointerDown);
        return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, []);

    const handleTocToggle = useCallback(() => {
        if (isCompactLayout) {
            setTocSheetOpen((value) => !value);
            return;
        }

        setTocPinnedOpen((value) => !value);
    }, [isCompactLayout]);

    return (
        <div className="note-page note-page--all-subjects animate-fade-in">

            {/* ── Toolbar ── */}
            <div className="note-toolbar card">
                {/* Left: breadcrumbs */}
                <div className="note-toolbar-left">
                    <span className="badge note-toolbar-subject-badge" title={getSubjectLabel(context.subject)}>{getSubjectLabel(context.subject)}</span>
                    <span className="badge note-toolbar-unit-badge">{context.unitCode || (isLoadingSyllabus ? '...' : 'Unknown unit')}</span>
                    <h2 className="note-toolbar-title">{context.subtopicTitle || (isLoadingSyllabus ? 'Loading topic...' : 'Untitled subtopic')}</h2>
                </div>

                {/* Right: actions */}
                <div className="note-toolbar-right">
                    {/* Mark as Read button */}
                    {hasNote && (
                        isRead ? (
                            <button
                                className="btn btn-sm note-read-btn note-read-btn--done"
                                onClick={markUnread}
                                title={`Marked as read on ${new Date(readAt).toLocaleDateString()}\nClick to undo`}
                                aria-label={`Marked as read on ${new Date(readAt).toLocaleDateString()}. Activate to mark unread.`}
                            >
                                <span className="note-btn-icon" aria-hidden="true">✓</span>
                                <span className="note-read-btn-text">Read</span>
                            </button>
                        ) : (
                            <button
                                className={`btn btn-sm note-read-btn ${scrollPct >= 80 ? 'note-read-btn--ready' : 'note-read-btn--idle'}`}
                                onClick={scrollPct >= 80 ? markRead : undefined}
                                title={scrollPct >= 80 ? 'Mark this note as read' : `Scroll more to unlock — ${scrollPct}% read`}
                                disabled={scrollPct < 80}
                                aria-label={scrollPct >= 80 ? 'Mark this note as read' : `${scrollPct}% read. Scroll more to unlock mark as read.`}
                            >
                                {scrollPct >= 80 ? (
                                    <>
                                        <span className="note-btn-icon" aria-hidden="true">✓</span>
                                        <span className="note-read-btn-text">Mark as Read</span>
                                    </>
                                ) : (
                                    <span className="note-read-btn-text">{`${scrollPct}% read`}</span>
                                )}
                            </button>
                        )
                    )}

                    {/* ToC toggle */}
                    {hasNote && toc.length > 0 && (
                        <button
                            ref={tocButtonRef}
                            className={`btn btn-sm ${(isCompactLayout ? tocSheetOpen : tocPinnedOpen) ? 'btn-primary' : 'btn-ghost'}`}
                            onClick={handleTocToggle}
                            title="Toggle table of contents"
                            aria-label="Toggle table of contents"
                            aria-expanded={isCompactLayout ? tocSheetOpen : tocPinnedOpen}
                            aria-haspopup={isCompactLayout ? 'dialog' : undefined}
                        >
                            <span className="note-btn-icon" aria-hidden="true">☰</span>
                            <span className="note-btn-label">Contents</span>
                        </button>
                    )}

                    {/* Recall mode toggle */}
                    {hasNote && hasCues && (
                        <button
                            ref={recallButtonRef}
                            className={`btn btn-sm ${recallOpen ? 'btn-primary' : 'btn-ghost'}`}
                            onClick={() => setRecallOpen((v) => !v)}
                            title="Toggle recall mode"
                            aria-label="Toggle recall mode"
                            aria-expanded={recallOpen}
                            aria-haspopup={isPhoneLayout ? 'dialog' : undefined}
                        >
                            <span className="note-btn-icon" aria-hidden="true">🧠</span>
                            <span className="note-btn-label">Recall</span>
                        </button>
                    )}

                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => navigate(`/chapters?subject=${context.subject}`)}
                        aria-label={`Back to ${getSubjectLabel(context.subject)} chapters`}
                    >
                        <span className="note-btn-icon" aria-hidden="true">←</span>
                        <span className="note-btn-label">Chapters</span>
                    </button>
                </div>
            </div>

            {/* ── Read progress bar ── */}
            {hasNote && (
                <ReadProgressBar scrollRef={scrollRef} onScrollPct={setScrollPct} />
            )}

            {/* ── Topic Tabs Navigation ── */}
            {activeUnit && (
                <div className="note-topics-tabs">
                    {activeUnit.topics.map((topic) => (
                        <div
                            key={topic.id}
                            className={`topic-tab-container ${String(topic.id) === String(topicId) ? 'active' : ''}`}
                        >
                            <button
                                className="topic-tab"
                                type="button"
                                aria-haspopup="menu"
                                aria-expanded={openTopicId === topic.id}
                                onClick={() => setOpenTopicId((current) => (current === topic.id ? null : topic.id))}
                            >
                                Topic {topic.id}: {topic.title}
                                <span className="topic-tab-caret">▼</span>
                            </button>
                            <div className={`topic-subtopics-dropdown ${openTopicId === topic.id ? 'topic-subtopics-dropdown--open' : ''}`} role="menu" aria-label={`Subtopics for topic ${topic.id}`}>
                                {topic.subtopics.map((sub, idx) => {
                                    const isActive = String(topic.id) === String(topicId) && String(idx) === String(subtopicIndex);
                                    return (
                                        <Link
                                            key={idx}
                                            to={`/notes/${context.subject}/${activeUnit.id}/${topic.id}/${idx}`}
                                            className={`dropdown-item ${isActive ? 'active' : ''}`}
                                            role="menuitem"
                                            onClick={() => setOpenTopicId(null)}
                                        >
                                            {sub}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {hasNote && toc.length > 0 && isCompactLayout && tocSheetOpen && (
                <MobileTableOfContents
                    toc={toc}
                    activeId={activeId}
                    onSelect={scrollToBlock}
                    onClose={() => setTocSheetOpen(false)}
                    returnFocusRef={tocButtonRef}
                />
            )}

            {/* ── Main content row ── */}
            <div className="note-body">

                {/* ToC sidebar */}
                {hasNote && toc.length > 0 && !isCompactLayout && tocPinnedOpen && (
                    <TableOfContents toc={toc} activeId={activeId} onSelect={scrollToBlock} />
                )}

                {/* Notes scrollable area */}
                {hasNote && (
                    <div className="note-scroll-area" ref={scrollRef}>
                        <ErrorBoundary name="StudyTools" inline>
                        <div className="note-study-tools">
                            <div className="student-tools-bar">
                                <Highlighter chapterId={noteId} contentSelector=".note-study-content" />
                                <div className="divider" aria-hidden="true" />
                                <ExportPDF chapterId={noteId} chapterTitle={context.subtopicTitle || context.topicTitle || 'Chapter'} />
                            </div>
                            <StickyNotes chapterId={noteId} />
                        </div>
                        </ErrorBoundary>

                        <ErrorBoundary name="NoteContent" inline resetKeys={[noteId]}>
                        <div className="note-study-content chapter-body">
                            <NoteBlockRenderer blocks={seedNote.blocks} />
                        </div>
                        </ErrorBoundary>

                        {nextSubtopicParams && (
                            <div className="note-footer-nav">
                                <Link
                                    to={`/notes/${context.subject}/${activeUnit.id}/${nextSubtopicParams.topicId}/${nextSubtopicParams.subtopicIndex}`}
                                    className="btn-next-subtopic"
                                >
                                    <span>Next Subtopic</span>
                                    <strong>{nextSubtopicParams.title} ➔</strong>
                                </Link>
                            </div>
                        )}
                        <ScrollToTopButton scrollRef={scrollRef} scrollPct={scrollPct} />
                    </div>
                )}

                {/* Recall panel (right column) */}
                {hasNote && recallOpen && !isPhoneLayout && (
                    <ErrorBoundary name="RecallPanel" inline resetKeys={[seedNote?.recall]}>
                        <RecallPanel recall={seedNote.recall} onClose={() => setRecallOpen(false)} returnFocusRef={recallButtonRef} />
                    </ErrorBoundary>
                )}

                {hasNote && recallOpen && isPhoneLayout && (
                    <ErrorBoundary name="RecallPanel" inline resetKeys={[seedNote?.recall]}>
                        <RecallPanel
                            recall={seedNote.recall}
                            onClose={() => setRecallOpen(false)}
                            isMobileModal
                            returnFocusRef={recallButtonRef}
                        />
                    </ErrorBoundary>
                )}

                {/* No note fallback */}
                {!hasNote && seedNoteStatus === 'loading' && (
                    <div className="note-empty">
                        <span>⏳</span>
                        <p className="note-empty-title">Loading note...</p>
                        <p className="note-empty-sub">Fetching this seed note now.</p>
                    </div>
                )}

                {!hasNote && seedNoteStatus !== 'loading' && (
                    <div className="note-empty">
                        <span>📝</span>
                        <p className="note-empty-title">No notes yet</p>
                        <p className="note-empty-sub">Notes for this subtopic haven't been added yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
