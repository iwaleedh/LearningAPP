import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Layers3, Wrench, MoreHorizontal, Maximize2, Minimize2 } from 'lucide-react';
import { getSubjectLabel } from '../data/syllabusIndex.js';
import { getSyllabusBySubject as getStaticSyllabusBySubject } from '../data/syllabusCatalog.js';
import { resolveNoteContext } from '../services/notes/noteContext.js';
import { getSeedNote, hasSeedNote } from '../data/seedNotes/index.js';
import NoteReadingToolbar from '../components/notes/NoteReadingToolbar.jsx';
import NoteBlockRenderer from '../components/notes/NoteBlockRenderer.jsx';
import Highlighter from '../components/student/Highlighter.jsx';
import StickyNotes from '../components/student/StickyNotes.jsx';
import ExportPDF from '../components/student/ExportPDF.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import { useNoteReadStatus } from '../hooks/useNoteReadStatus.js';
import { useSyllabus } from '../hooks/useSyllabus.js';
import { trackNoteEvent } from '../services/observability/clientTelemetry.js';
import './Pages.css';
import './NotePage.css';

// ── Table of Contents ──────────────────────────────────────────────────────

const DEV_FULLSCREEN_CHECKLIST_ENABLED = import.meta.env.DEV;

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

const NOTE_FULLSCREEN_STORAGE_KEY = 'LT_NOTE_FULLSCREEN';
const PAGE_CONTENT_FULLSCREEN_CLASS = 'page-content--note-fullscreen';
const ROOT_FULLSCREEN_CLASS = 'note-fullscreen-active';

function readFullscreenPreference() {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(NOTE_FULLSCREEN_STORAGE_KEY) === 'true';
}

function writeFullscreenPreference(value) {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(NOTE_FULLSCREEN_STORAGE_KEY, value ? 'true' : 'false');
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

function MobileTopicsSheet({ activeUnit, context, topicId, subtopicIndex, onClose, returnFocusRef }) {
    const containerRef = useRef(null);

    useOverlayA11y({ open: true, containerRef, returnFocusRef, onClose });

    if (!activeUnit) return null;

    return (
        <>
            <button
                className="note-sheet-backdrop"
                type="button"
                onClick={onClose}
                aria-label="Close topics"
            />
            <div
                ref={containerRef}
                className="note-sheet note-topics-sheet"
                role="dialog"
                aria-modal="true"
                aria-labelledby="note-topics-sheet-title"
                tabIndex={-1}
            >
                <div className="note-sheet-handle" aria-hidden="true" />
                <div className="note-sheet-header">
                    <h3 id="note-topics-sheet-title" className="note-sheet-title">Topics</h3>
                    <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={onClose}
                        aria-label="Close topics"
                    >
                        ✕
                    </button>
                </div>
                <div className="note-mobile-sheet-body">
                    {activeUnit.topics.map((topic) => {
                        const topicIsActive = String(topic.id) === String(topicId);

                        return (
                            <section key={topic.id} className="note-mobile-topic-group">
                                <h4 className={`note-mobile-topic-heading ${topicIsActive ? 'active' : ''}`}>
                                    Topic {topic.id}: {topic.title}
                                </h4>
                                <div className="note-mobile-topic-links">
                                    {topic.subtopics.map((sub, idx) => {
                                        const isActive = topicIsActive && String(idx) === String(subtopicIndex);
                                        return (
                                            <Link
                                                key={`${topic.id}-${idx}`}
                                                to={`/notes/${context.subject}/${activeUnit.id}/${topic.id}/${idx}`}
                                                className={`note-mobile-topic-link ${isActive ? 'active' : ''}`}
                                                onClick={onClose}
                                            >
                                                {sub}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

function MobileStudyToolsSheet({ noteId, chapterTitle, onClose, returnFocusRef }) {
    const containerRef = useRef(null);

    useOverlayA11y({ open: true, containerRef, returnFocusRef, onClose });

    return (
        <>
            <button
                className="note-sheet-backdrop"
                type="button"
                onClick={onClose}
                aria-label="Close study tools"
            />
            <div
                ref={containerRef}
                className="note-sheet note-tools-sheet"
                role="dialog"
                aria-modal="true"
                aria-labelledby="note-tools-sheet-title"
                tabIndex={-1}
            >
                <div className="note-sheet-handle" aria-hidden="true" />
                <div className="note-sheet-header">
                    <h3 id="note-tools-sheet-title" className="note-sheet-title">Study Tools</h3>
                    <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={onClose}
                        aria-label="Close study tools"
                    >
                        ✕
                    </button>
                </div>
                <div className="note-mobile-sheet-body note-mobile-sheet-body--tools">
                    <div className="note-mobile-tool-block">
                        <Highlighter chapterId={noteId} contentSelector=".note-study-content" />
                    </div>
                    <div className="note-mobile-tool-block">
                        <ExportPDF chapterId={noteId} chapterTitle={chapterTitle} />
                    </div>
                    <div className="note-mobile-tool-block">
                        <StickyNotes chapterId={noteId} />
                    </div>
                </div>
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

function ReadProgressBar({ scrollRef, onScrollPct, className = '' }) {
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
        <div className={`note-read-progress ${className}`.trim()} title={`${pct}% read`}>
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

function FullscreenDebugChecklist({ visible, checks }) {
    if (!visible || !checks.length) return null;

    const passedChecks = checks.filter((check) => check.passed).length;

    return (
        <aside className="note-dev-checklist" aria-label="Fullscreen verification checklist">
            <div className="note-dev-checklist__header">
                <span>Dev Fullscreen Checklist</span>
                <span>{passedChecks}/{checks.length}</span>
            </div>
            <ul className="note-dev-checklist__list">
                {checks.map((check) => (
                    <li key={check.id} className={`note-dev-checklist__item ${check.passed ? 'is-pass' : 'is-fail'}`}>
                        <span className="note-dev-checklist__status" aria-hidden="true">{check.passed ? 'OK' : 'NO'}</span>
                        <span>
                            <span>{check.label}</span>
                            {check.detail ? <span className="note-dev-checklist__detail">{check.detail}</span> : null}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

// ── Main NotePage ──────────────────────────────────────────────────────────

export default function NotePage() {
    const { subject, unitId, topicId, subtopicIndex } = useParams();
    const navigate = useNavigate();
    const [recallOpen, setRecallOpen] = useState(false);
    const [tocPinnedOpen, setTocPinnedOpen] = useState(true);
    const [tocSheetOpen, setTocSheetOpen] = useState(false);
    const [topicSheetOpen, setTopicSheetOpen] = useState(false);
    const [toolsSheetOpen, setToolsSheetOpen] = useState(false);
    const [openTopicId, setOpenTopicId] = useState(null);
    const [scrollPct, setScrollPct] = useState(0);
    const [fullscreenActive, setFullscreenActive] = useState(readFullscreenPreference);
    const [mobileChromeHidden, setMobileChromeHidden] = useState(false);
    const [mobileHeaderCondensed, setMobileHeaderCondensed] = useState(false);
    const [fullscreenChecklist, setFullscreenChecklist] = useState([]);
    const scrollRef = useRef(null);
    const noteSurfaceRef = useRef(null);
    const tocButtonRef = useRef(null);
    const recallButtonRef = useRef(null);
    const topicsButtonRef = useRef(null);
    const toolsButtonRef = useRef(null);
    const fullscreenButtonRef = useRef(null);
    const lastScrollTopRef = useRef(0);
    const chromeRevealTimeoutRef = useRef(null);
    const overflowButtonRef = useRef(null);
    const [overflowMenuOpen, setOverflowMenuOpen] = useState(false);
    const [srAnnouncement, setSrAnnouncement] = useState('');
    const isCompactLayout = useViewportMatch('(max-width: 899px)');
    const isPhoneLayout = useViewportMatch('(max-width: 599px)');
    const notePageRef = useRef(null);
    const swipeStartRef = useRef(null);
    const lastTrackedNoteViewRef = useRef('');
    const previousRecallOpenRef = useRef(false);
    const previousFullscreenActiveRef = useRef(fullscreenActive);

    const setScrollAreaRef = useCallback((node) => {
        scrollRef.current = node;
        noteSurfaceRef.current = node;
    }, []);

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

    const previousSubtopicParams = useMemo(() => {
        if (!activeUnit) return null;
        const currentTopicIndex = activeUnit.topics.findIndex((topic) => String(topic.id) === String(topicId));
        if (currentTopicIndex === -1) return null;

        const currentTopic = activeUnit.topics[currentTopicIndex];
        const previousSubIdx = Number(subtopicIndex) - 1;

        if (previousSubIdx >= 0) {
            return {
                topicId: currentTopic.id,
                subtopicIndex: previousSubIdx,
                title: currentTopic.subtopics[previousSubIdx],
            };
        }

        if (currentTopicIndex - 1 >= 0) {
            const previousTopic = activeUnit.topics[currentTopicIndex - 1];
            const previousTopicSubtopicIndex = previousTopic.subtopics.length - 1;
            return {
                topicId: previousTopic.id,
                subtopicIndex: previousTopicSubtopicIndex,
                title: previousTopic.subtopics[previousTopicSubtopicIndex],
            };
        }

        return null;
    }, [activeUnit, subtopicIndex, topicId]);

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
    const activeTocIndex = useMemo(() => toc.findIndex((item) => item.id === activeId), [activeId, toc]);

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
    const mobileFullscreenActive = fullscreenActive && isPhoneLayout;
    const showDesktopTopicTabs = Boolean(activeUnit) && !isPhoneLayout && !fullscreenActive;
    const showMobileTopicsTrigger = Boolean(activeUnit) && isPhoneLayout && !fullscreenActive;
    const showInlineStudyTools = hasNote && !isPhoneLayout && !fullscreenActive;
    const showReadProgressStrip = hasNote && !fullscreenActive;

    useEffect(() => {
        if (!hasNote || seedNoteStatus !== 'ready') return;
        if (lastTrackedNoteViewRef.current === noteId) return;

        lastTrackedNoteViewRef.current = noteId;
        trackNoteEvent('note_view', {
            route: `/notes/${context.subject}/${context.unitId}/${context.topicId}/${context.subtopicIndex}`,
            noteId,
            subject: context.subject,
            unitId: context.unitId,
            topicId: context.topicId,
            subtopicIndex: context.subtopicIndex,
            hasRecall: hasCues,
            layout: isPhoneLayout ? 'phone' : isCompactLayout ? 'tablet' : 'desktop',
        });
    }, [context.subject, context.subtopicIndex, context.topicId, context.unitId, hasCues, hasNote, isCompactLayout, isPhoneLayout, noteId, seedNoteStatus]);

    useEffect(() => {
        if (!hasNote) {
            previousRecallOpenRef.current = recallOpen;
            return;
        }

        if (recallOpen && !previousRecallOpenRef.current) {
            trackNoteEvent('recall_open', {
                route: `/notes/${context.subject}/${context.unitId}/${context.topicId}/${context.subtopicIndex}`,
                noteId,
                subject: context.subject,
            });
        }

        previousRecallOpenRef.current = recallOpen;
    }, [context.subject, context.subtopicIndex, context.topicId, context.unitId, hasNote, noteId, recallOpen]);

    useEffect(() => {
        if (!hasNote) {
            previousFullscreenActiveRef.current = fullscreenActive;
            return;
        }

        if (fullscreenActive && !previousFullscreenActiveRef.current) {
            trackNoteEvent('fullscreen_enter', {
                route: `/notes/${context.subject}/${context.unitId}/${context.topicId}/${context.subtopicIndex}`,
                noteId,
                subject: context.subject,
                mobile: isPhoneLayout,
            });
        }

        previousFullscreenActiveRef.current = fullscreenActive;
    }, [context.subject, context.subtopicIndex, context.topicId, context.unitId, fullscreenActive, hasNote, isPhoneLayout, noteId]);
    const showFooterNextLink = Boolean(nextSubtopicParams);
    // Include overflowMenuOpen so toolbar doesn't auto-hide while the overflow menu is open
    const isAnySheetOpen = tocSheetOpen || topicSheetOpen || toolsSheetOpen || (isPhoneLayout && recallOpen) || overflowMenuOpen;
    const isModalLayerOpen = (isCompactLayout && tocSheetOpen) || topicSheetOpen || toolsSheetOpen || (isPhoneLayout && recallOpen);

    useBodyScrollLock(isModalLayerOpen);

    useEffect(() => {
        writeFullscreenPreference(fullscreenActive);
    }, [fullscreenActive]);

    useEffect(() => {
        if (typeof document === 'undefined') return undefined;

        const mainContent = document.getElementById('main-content');
        document.documentElement.classList.toggle(ROOT_FULLSCREEN_CLASS, fullscreenActive);
        mainContent?.classList.toggle(PAGE_CONTENT_FULLSCREEN_CLASS, fullscreenActive);

        return () => {
            document.documentElement.classList.remove(ROOT_FULLSCREEN_CLASS);
            mainContent?.classList.remove(PAGE_CONTENT_FULLSCREEN_CLASS);
        };
    }, [fullscreenActive]);

    useEffect(() => {
        if (!fullscreenActive || typeof document === 'undefined') return undefined;

        const target = notePageRef.current;
        if (!document.fullscreenElement && target?.requestFullscreen) {
            target.requestFullscreen().catch(() => {
                // App-level immersive mode remains available even if Fullscreen API fails.
            });
        }

        return undefined;
    }, [fullscreenActive]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (document.fullscreenElement) return;
            setFullscreenActive((value) => {
                if (!value) return value;
                setMobileChromeHidden(false);
                setSrAnnouncement('Exited fullscreen reading mode.');
                return false;
            });
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    useEffect(() => {
        const frameId = window.requestAnimationFrame(() => {
            setTocSheetOpen(false);
            setTopicSheetOpen(false);
            setToolsSheetOpen(false);
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
            setTopicSheetOpen(false);
            setToolsSheetOpen(false);
            setOpenTopicId(null);
            setOverflowMenuOpen(false);
        });

        return () => window.cancelAnimationFrame(frameId);
    }, [noteId]);

    useEffect(() => {
        return () => {
            if (chromeRevealTimeoutRef.current) {
                window.clearTimeout(chromeRevealTimeoutRef.current);
            }
        };
    }, []);

    const revealChromeTemporarily = useCallback(() => {
        if (!mobileFullscreenActive) return;

        setMobileChromeHidden(false);

        if (chromeRevealTimeoutRef.current) {
            window.clearTimeout(chromeRevealTimeoutRef.current);
        }

        chromeRevealTimeoutRef.current = window.setTimeout(() => {
            if (!isAnySheetOpen && (scrollRef.current?.scrollTop || 0) > 48) {
                setMobileChromeHidden(true);
            }
        }, 1800);
    }, [isAnySheetOpen, mobileFullscreenActive]);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el || !isPhoneLayout || !hasNote) return undefined;

        let rafId = null;
        const onScroll = () => {
            if (rafId) return;
            rafId = window.requestAnimationFrame(() => {
                rafId = null;
                const nextScrollTop = el.scrollTop;
                const previousScrollTop = lastScrollTopRef.current;
                const delta = nextScrollTop - previousScrollTop;
                const isScrollingDown = delta > 0;

                setMobileHeaderCondensed(nextScrollTop > 24);

                if (mobileFullscreenActive && !isAnySheetOpen) {
                    if (nextScrollTop <= 24) {
                        setMobileChromeHidden(false);
                    } else if (isScrollingDown && delta > 12 && nextScrollTop > 48) {
                        // Require a meaningful downward movement before hiding toolbar
                        setMobileChromeHidden(true);
                    } else if (!isScrollingDown && delta < -4) {
                        // Reveal on intentional upward scroll
                        setMobileChromeHidden(false);
                    }
                }

                lastScrollTopRef.current = nextScrollTop;
            });
        };

        el.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            el.removeEventListener('scroll', onScroll);
            if (rafId) window.cancelAnimationFrame(rafId);
        };
    }, [hasNote, isAnySheetOpen, isPhoneLayout, mobileFullscreenActive]);

    // Close overflow menu on outside click or Escape
    useEffect(() => {
        if (!overflowMenuOpen) return undefined;

        const handleOutside = (event) => {
            if (!overflowButtonRef.current?.closest('.note-overflow-wrapper')?.contains(event.target)) {
                setOverflowMenuOpen(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                setOverflowMenuOpen(false);
                overflowButtonRef.current?.focus?.();
            }
        };

        document.addEventListener('pointerdown', handleOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('pointerdown', handleOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [overflowMenuOpen]);

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
        setMobileChromeHidden(false);
        if (isCompactLayout) {
            setTopicSheetOpen(false);
            setToolsSheetOpen(false);
            setTocSheetOpen((value) => !value);
            return;
        }

        setTocPinnedOpen((value) => !value);
    }, [isCompactLayout]);

    const handleFullscreenToggle = useCallback((forcedValue) => {
        setRecallOpen(false);
        setOverflowMenuOpen(false);
        setFullscreenActive((value) => {
            const nextValue = typeof forcedValue === 'boolean' ? forcedValue : !value;
            setTocSheetOpen(false);
            setTopicSheetOpen(false);
            setToolsSheetOpen(false);
            setOpenTopicId(null);
            setMobileChromeHidden(false);
            if (!nextValue) {
                if (document.fullscreenElement && document.exitFullscreen) {
                    document.exitFullscreen().catch(() => {
                        // App-level fullscreen already exited.
                    });
                }
            }
            setSrAnnouncement(
                nextValue
                    ? 'Fullscreen reading mode activated. Press Escape to exit.'
                    : 'Exited fullscreen reading mode.'
            );

            if (!nextValue) {
                window.requestAnimationFrame(() => {
                    // On phone the toggle lives in the overflow menu — focus its trigger
                    (overflowButtonRef.current || fullscreenButtonRef.current)?.focus?.();
                });
            } else {
                window.requestAnimationFrame(() => {
                    noteSurfaceRef.current?.focus?.();
                });
            }

            return nextValue;
        });
    }, []);

    const navigateToNote = useCallback((target) => {
        if (!target || !activeUnit) return;
        navigate(`/notes/${context.subject}/${activeUnit.id}/${target.topicId}/${target.subtopicIndex}`);
    }, [activeUnit, context.subject, navigate]);

    const handleScrollTouchStart = useCallback((event) => {
        const touch = event.changedTouches?.[0];
        if (!touch) return;
        swipeStartRef.current = { x: touch.clientX, y: touch.clientY };
    }, []);

    const handleScrollTouchEnd = useCallback((event) => {
        if (!fullscreenActive) return;

        const touch = event.changedTouches?.[0];
        const start = swipeStartRef.current;
        swipeStartRef.current = null;
        if (!touch || !start) return;

        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;
        if (Math.abs(deltaX) < 72 || Math.abs(deltaY) > 48) return;

        if (deltaX > 0 && previousSubtopicParams) {
            void navigateToNote(previousSubtopicParams);
        } else if (deltaX < 0 && nextSubtopicParams) {
            void navigateToNote(nextSubtopicParams);
        }
    }, [fullscreenActive, navigateToNote, nextSubtopicParams, previousSubtopicParams]);

    useEffect(() => {
        if (!fullscreenActive) return undefined;

        const onKeyDown = (event) => {
            const hasModifier = event.metaKey || event.ctrlKey || event.altKey;

            if (event.key === 'Escape') {
                event.preventDefault();
                handleFullscreenToggle(false);
                return;
            }

            if (!hasModifier && event.key.toLowerCase() === 'f') {
                event.preventDefault();
                handleFullscreenToggle();
                return;
            }

            if (!hasModifier && event.key === 'ArrowLeft' && previousSubtopicParams) {
                event.preventDefault();
                void navigateToNote(previousSubtopicParams);
                return;
            }

            if (!hasModifier && event.key === 'ArrowRight' && nextSubtopicParams) {
                event.preventDefault();
                void navigateToNote(nextSubtopicParams);
                return;
            }

            if (!hasModifier && event.key === 'PageUp' && activeTocIndex > 0) {
                event.preventDefault();
                scrollToBlock(toc[activeTocIndex - 1].id);
                return;
            }

            if (!hasModifier && event.key === 'PageDown' && activeTocIndex >= 0 && activeTocIndex < toc.length - 1) {
                event.preventDefault();
                scrollToBlock(toc[activeTocIndex + 1].id);
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [
        activeTocIndex,
        fullscreenActive,
        handleFullscreenToggle,
        navigateToNote,
        nextSubtopicParams,
        previousSubtopicParams,
        scrollToBlock,
        toc,
    ]);

    const notePageClassName = ['note-page', 'note-page--all-subjects', 'animate-fade-in', fullscreenActive ? 'note-page--fullscreen' : '']
        .filter(Boolean)
        .join(' ');

    const hasPrevSection = activeTocIndex > 0;
    const hasNextSection = activeTocIndex >= 0 && activeTocIndex < toc.length - 1;

    const toolbarClassName = [
        'note-toolbar',
        'card',
        isPhoneLayout ? 'note-toolbar--mobile' : '',
        isPhoneLayout && mobileHeaderCondensed ? 'note-toolbar--condensed' : '',
    ].filter(Boolean).join(' ');

    const noteBodyClassName = ['note-body', fullscreenActive ? 'note-body--fullscreen' : '']
        .filter(Boolean)
        .join(' ');

    const noteScrollAreaClassName = ['note-scroll-area', fullscreenActive ? 'note-scroll-area--fullscreen' : '']
        .filter(Boolean)
        .join(' ');

    useEffect(() => {
        if (!DEV_FULLSCREEN_CHECKLIST_ENABLED || !fullscreenActive) return undefined;

        const updateChecklist = () => {
            const mainContent = document.getElementById('main-content');
            const header = document.querySelector('.app-header');
            const sidebar = document.querySelector('.app-sidebar');
            const noteBody = notePageRef.current?.querySelector('.note-body');
            const scrollArea = notePageRef.current?.querySelector('.note-scroll-area');
            const noteContent = notePageRef.current?.querySelector('.note-study-content');
            const tocSidebar = notePageRef.current?.querySelector('.note-toc');
            const annotationOverlay = notePageRef.current?.querySelector('.annotate-canvas-overlay');

            const headerHidden = !(header instanceof HTMLElement) || window.getComputedStyle(header).display === 'none';
            const sidebarHidden = !(sidebar instanceof HTMLElement) || window.getComputedStyle(sidebar).display === 'none';
            const bodyMaximized = noteBody instanceof HTMLElement
                ? window.getComputedStyle(noteBody).marginTop === '0px' && window.getComputedStyle(noteBody).marginLeft === '0px'
                : false;
            const scrollChromeRemoved = scrollArea instanceof HTMLElement
                ? window.getComputedStyle(scrollArea).borderTopWidth === '0px' && window.getComputedStyle(scrollArea).borderTopLeftRadius === '0px'
                : false;
            const contentTopOffset = noteContent instanceof HTMLElement
                ? Math.round(noteContent.getBoundingClientRect().top)
                : null;
            const viewportFillPct = scrollArea instanceof HTMLElement && window.innerHeight > 0
                ? Math.round((scrollArea.getBoundingClientRect().height / window.innerHeight) * 100)
                : null;

            setFullscreenChecklist([
                {
                    id: 'fullscreen-active',
                    label: 'Fullscreen state is active',
                    passed: fullscreenActive,
                },
                {
                    id: 'page-shell',
                    label: 'Page shell promoted to fullscreen',
                    passed: mainContent instanceof HTMLElement && mainContent.classList.contains(PAGE_CONTENT_FULLSCREEN_CLASS),
                },
                {
                    id: 'root-shell',
                    label: 'Root chrome hidden',
                    passed: document.documentElement.classList.contains(ROOT_FULLSCREEN_CLASS) && headerHidden && sidebarHidden,
                },
                {
                    id: 'note-surface',
                    label: 'Note surface expanded edge-to-edge',
                    passed: bodyMaximized && scrollChromeRemoved,
                    detail: bodyMaximized && scrollChromeRemoved ? 'Body margins cleared and scroll chrome removed' : 'Margins or scroll chrome still present',
                },
                {
                    id: 'content-offset',
                    label: 'Content starts near the top of the viewport',
                    passed: contentTopOffset !== null && contentTopOffset <= 140,
                    detail: contentTopOffset !== null ? `Measured top offset: ${contentTopOffset}px` : 'Content offset unavailable',
                },
                {
                    id: 'viewport-fill',
                    label: 'Reading surface fills most of the viewport',
                    passed: viewportFillPct !== null && viewportFillPct >= 85,
                    detail: viewportFillPct !== null ? `Viewport fill: ${viewportFillPct}%` : 'Viewport fill unavailable',
                },
                {
                    id: 'toc-hidden',
                    label: 'Table of contents removed from fullscreen',
                    passed: !tocSidebar,
                },
                {
                    id: 'annotations-hidden',
                    label: 'Annotation overlay absent',
                    passed: !annotationOverlay,
                },
            ]);
        };

        const frameId = window.requestAnimationFrame(updateChecklist);
        window.addEventListener('resize', updateChecklist);
        document.addEventListener('fullscreenchange', updateChecklist);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener('resize', updateChecklist);
            document.removeEventListener('fullscreenchange', updateChecklist);
        };
    }, [fullscreenActive, noteId]);

    return (
        <div
            ref={notePageRef}
            className={notePageClassName}
            role={fullscreenActive ? 'dialog' : undefined}
            aria-modal={fullscreenActive ? 'true' : undefined}
            aria-label={fullscreenActive ? 'Fullscreen note reading mode' : undefined}
        >

            {fullscreenActive ? (
                <NoteReadingToolbar
                    title={context.subtopicTitle || context.topicTitle || 'Note'}
                    compact={isPhoneLayout}
                    hidden={mobileFullscreenActive && mobileChromeHidden && !isAnySheetOpen}
                    hasPrevNote={Boolean(previousSubtopicParams)}
                    hasNextNote={Boolean(nextSubtopicParams)}
                    hasPrevSection={hasPrevSection}
                    hasNextSection={hasNextSection}
                    onExit={() => handleFullscreenToggle(false)}
                    onPrevNote={() => void navigateToNote(previousSubtopicParams)}
                    onNextNote={() => void navigateToNote(nextSubtopicParams)}
                    onPrevSection={() => hasPrevSection && scrollToBlock(toc[activeTocIndex - 1].id)}
                    onNextSection={() => hasNextSection && scrollToBlock(toc[activeTocIndex + 1].id)}
                />
            ) : null}

            {/* ── Toolbar ── */}
            {!fullscreenActive ? <div className={toolbarClassName}>
                {/* Left: breadcrumbs */}
                <div className="note-toolbar-left">
                    {(!isPhoneLayout || !mobileHeaderCondensed) && (
                        <span className="badge note-toolbar-subject-badge" title={getSubjectLabel(context.subject)}>{getSubjectLabel(context.subject)}</span>
                    )}
                    {!isPhoneLayout && (
                        <span className="badge note-toolbar-unit-badge">{context.unitCode || (isLoadingSyllabus ? '...' : 'Unknown unit')}</span>
                    )}
                    <h2 className={`note-toolbar-title ${isPhoneLayout ? 'note-toolbar-title--compact' : ''}`.trim()}>
                        {context.subtopicTitle || (isLoadingSyllabus ? 'Loading topic...' : 'Untitled subtopic')}
                    </h2>
                </div>

                {/* Right: actions */}
                <div className="note-toolbar-right">
                    {/* Mark as Read — shown on all layouts */}
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
                                        <span className="note-read-btn-text">{isPhoneLayout ? 'Read' : 'Mark as Read'}</span>
                                    </>
                                ) : (
                                    <span className="note-read-btn-text">{isPhoneLayout ? `${scrollPct}%` : `${scrollPct}% read`}</span>
                                )}
                            </button>
                        )
                    )}

                    {isPhoneLayout ? (
                        /* ── Phone: Topics + Back + ⋯ overflow (max 4 buttons = 1 grid row) ── */
                        <>
                            {showMobileTopicsTrigger && (
                                <button
                                    ref={topicsButtonRef}
                                    className={`btn btn-sm ${topicSheetOpen ? 'btn-primary' : 'btn-ghost'} note-mobile-topics-trigger`}
                                    onClick={() => {
                                        setMobileChromeHidden(false);
                                        setTocSheetOpen(false);
                                        setToolsSheetOpen(false);
                                        setOverflowMenuOpen(false);
                                        setTopicSheetOpen((value) => !value);
                                    }}
                                    title="Open topics"
                                    aria-label="Open topics"
                                    aria-expanded={topicSheetOpen}
                                    aria-haspopup="dialog"
                                >
                                    <Layers3 size={16} aria-hidden="true" />
                                </button>
                            )}

                            <button
                                className="btn btn-secondary btn-sm"
                                onClick={() => navigate(`/chapters?subject=${context.subject}`)}
                                aria-label={`Back to ${getSubjectLabel(context.subject)} chapters`}
                                title="Back to chapters"
                            >
                                <span className="note-btn-icon" aria-hidden="true">←</span>
                            </button>

                            {/* ⋯ More — overflow menu with Contents, Recall, Tools, Zoom controls */}
                            {hasNote && (
                                <div className="note-overflow-wrapper">
                                    <button
                                        ref={overflowButtonRef}
                                        className={`btn btn-sm ${overflowMenuOpen ? 'btn-primary' : 'btn-ghost'}`}
                                        onClick={() => setOverflowMenuOpen((v) => !v)}
                                        aria-label="More actions"
                                        aria-expanded={overflowMenuOpen}
                                        aria-haspopup="menu"
                                        title="More actions"
                                    >
                                        <MoreHorizontal size={16} aria-hidden="true" />
                                    </button>

                                    {overflowMenuOpen && (
                                        <div className="note-overflow-menu" role="menu" aria-label="More note actions">
                                            {toc.length > 0 && (
                                                <button
                                                    ref={tocButtonRef}
                                                    role="menuitem"
                                                    className={`note-overflow-item ${(isCompactLayout ? tocSheetOpen : tocPinnedOpen) ? 'note-overflow-item--active' : ''}`}
                                                    onClick={() => { handleTocToggle(); setOverflowMenuOpen(false); }}
                                                    aria-expanded={isCompactLayout ? tocSheetOpen : tocPinnedOpen}
                                                >
                                                    <span aria-hidden="true">☰</span> Contents
                                                </button>
                                            )}
                                            {hasCues && (
                                                <button
                                                    ref={recallButtonRef}
                                                    role="menuitem"
                                                    className={`note-overflow-item ${recallOpen ? 'note-overflow-item--active' : ''}`}
                                                    onClick={() => { setRecallOpen((v) => !v); setOverflowMenuOpen(false); }}
                                                    aria-expanded={recallOpen}
                                                >
                                                    <span aria-hidden="true">🧠</span> Recall
                                                </button>
                                            )}
                                            <button
                                                ref={toolsButtonRef}
                                                role="menuitem"
                                                className={`note-overflow-item ${toolsSheetOpen ? 'note-overflow-item--active' : ''}`}
                                                onClick={() => {
                                                    setMobileChromeHidden(false);
                                                    setTocSheetOpen(false);
                                                    setTopicSheetOpen(false);
                                                    setToolsSheetOpen(true);
                                                    setOverflowMenuOpen(false);
                                                }}
                                            >
                                                <Wrench size={14} aria-hidden="true" /> Study Tools
                                            </button>
                                            <button
                                                ref={fullscreenButtonRef}
                                                role="menuitem"
                                                className="note-overflow-item note-overflow-fullscreen"
                                                onClick={handleFullscreenToggle}
                                                aria-label="Enter fullscreen note view"
                                            >
                                                <Maximize2 size={14} aria-hidden="true" />
                                                Fullscreen
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </>
                    ) : (
                        /* ── Desktop / tablet: ToC + Recall + Back ── */
                        <>
                            <button
                                ref={fullscreenButtonRef}
                                className="btn btn-sm btn-ghost"
                                onClick={handleFullscreenToggle}
                                title="Enter fullscreen note view"
                                aria-label="Enter fullscreen note view"
                                aria-keyshortcuts="F"
                            >
                                <Maximize2 size={16} aria-hidden="true" />
                                <span className="note-btn-label">Fullscreen</span>
                            </button>
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

                            {hasNote && hasCues && (
                                <button
                                    ref={recallButtonRef}
                                    className={`btn btn-sm ${recallOpen ? 'btn-primary' : 'btn-ghost'}`}
                                    onClick={() => setRecallOpen((v) => !v)}
                                    title="Toggle recall mode"
                                    aria-label="Toggle recall mode"
                                    aria-expanded={recallOpen}
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
                        </>
                    )}
                </div>
            </div> : null}

            {/* Screen reader live region for fullscreen state changes */}
            <div role="status" aria-live="polite" className="note-sr-only">{srAnnouncement}</div>

            {/* Thin indicator strip — hints that toolbar is auto-hidden in fullscreen */}
            {mobileFullscreenActive && mobileChromeHidden && !isAnySheetOpen && (
                <div className="note-toolbar-hint" aria-hidden="true" />
            )}

            <FullscreenDebugChecklist
                visible={DEV_FULLSCREEN_CHECKLIST_ENABLED && fullscreenActive}
                checks={fullscreenChecklist}
            />

            {/* ── Read progress bar ── */}
            {showReadProgressStrip && (
                <ReadProgressBar scrollRef={scrollRef} onScrollPct={setScrollPct} />
            )}

            {/* ── Topic Tabs Navigation ── */}
            {showDesktopTopicTabs && (
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

            {showMobileTopicsTrigger && topicSheetOpen && (
                <MobileTopicsSheet
                    activeUnit={activeUnit}
                    context={context}
                    topicId={topicId}
                    subtopicIndex={subtopicIndex}
                    onClose={() => setTopicSheetOpen(false)}
                    returnFocusRef={topicsButtonRef}
                />
            )}

            {hasNote && isPhoneLayout && toolsSheetOpen && (
                <MobileStudyToolsSheet
                    noteId={noteId}
                    chapterTitle={context.subtopicTitle || context.topicTitle || 'Chapter'}
                    onClose={() => setToolsSheetOpen(false)}
                    returnFocusRef={toolsButtonRef}
                />
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
            <div className={noteBodyClassName}>

                {/* ToC sidebar */}
                {hasNote && toc.length > 0 && !isCompactLayout && !fullscreenActive && tocPinnedOpen && (
                    <TableOfContents toc={toc} activeId={activeId} onSelect={scrollToBlock} />
                )}

                {/* Notes scrollable area */}
                {hasNote && (
                    <div
                        className={noteScrollAreaClassName}
                        ref={setScrollAreaRef}
                        tabIndex={-1}
                        onPointerDown={mobileFullscreenActive ? revealChromeTemporarily : undefined}
                        onTouchStart={fullscreenActive ? handleScrollTouchStart : undefined}
                        onTouchEnd={fullscreenActive ? handleScrollTouchEnd : undefined}
                    >
                        {fullscreenActive && (
                            <ReadProgressBar
                                scrollRef={scrollRef}
                                onScrollPct={setScrollPct}
                                className="note-read-progress--overlay"
                            />
                        )}

                        {showInlineStudyTools && (
                            <ErrorBoundary name="StudyTools" inline>
                                <div className="note-study-tools note-study-tools--inline">
                                    <div className="student-tools-bar">
                                        <Highlighter chapterId={noteId} contentSelector=".note-study-content" />
                                        <div className="divider" aria-hidden="true" />
                                        <ExportPDF chapterId={noteId} chapterTitle={context.subtopicTitle || context.topicTitle || 'Chapter'} />
                                    </div>
                                    <StickyNotes chapterId={noteId} />
                                </div>
                            </ErrorBoundary>
                        )}

                        <ErrorBoundary name="NoteContent" inline resetKeys={[noteId]}>
                            <div className="note-study-content chapter-body">
                                <NoteBlockRenderer blocks={seedNote.blocks} />
                            </div>
                        </ErrorBoundary>

                        {showFooterNextLink && (
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
                {hasNote && recallOpen && !isPhoneLayout && !fullscreenActive && (
                    <ErrorBoundary name="RecallPanel" inline resetKeys={[seedNote?.recall]}>
                        <RecallPanel recall={seedNote.recall} onClose={() => setRecallOpen(false)} returnFocusRef={recallButtonRef} />
                    </ErrorBoundary>
                )}

                {hasNote && recallOpen && isPhoneLayout && !fullscreenActive && (
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
