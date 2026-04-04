import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getSubjectLabel } from '../data/syllabusIndex.js';
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

function TableOfContents({ toc, activeId, onSelect }) {
    if (!toc.length) return null;
    return (
        <nav className="note-toc" aria-label="Table of contents">
            <div className="note-toc-header">Contents</div>
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

// ── Recall Panel ───────────────────────────────────────────────────────────

function RecallPanel({ recall, onClose }) {
    const cues = recall?.cues || [];
    const [revealedSet, setRevealedSet] = useState(new Set());
    const [currentIdx, setCurrentIdx] = useState(0);

    const toggle = (id) => setRevealedSet((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
    });

    const cue = cues[currentIdx];
    const answer = cue?.answer || recall?.summaryText || 'See note content.';

    if (!cues.length) {
        return (
            <div className="recall-panel" role="complementary" aria-label="Recall mode">
                <div className="recall-panel-header">
                    <span>🧠 Recall Mode</span>
                    <button className="btn btn-ghost btn-sm" onClick={onClose} aria-label="Close recall mode">✕</button>
                </div>
                <p className="recall-empty">No recall cues for this note yet.</p>
            </div>
        );
    }

    return (
        <div className="recall-panel" role="complementary" aria-label="Recall mode">
            <div className="recall-panel-header">
                <span id="recall-panel-title">🧠 Recall Mode <span className="recall-count">{currentIdx + 1} / {cues.length}</span></span>
                <button className="btn btn-ghost btn-sm" onClick={onClose} aria-label="Close recall mode">✕</button>
            </div>

            <div className="recall-progress-track">
                <div className="recall-progress-fill" style={{ width: `${((currentIdx + 1) / cues.length) * 100}%` }} />
            </div>

            {cue && (
                <div className="recall-cue-card">
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
                    onClick={() => { setCurrentIdx((i) => Math.max(0, i - 1)); }}
                    disabled={currentIdx === 0}
                >← Prev</button>
                <div className="recall-dots" role="tablist" aria-label="Recall cue navigation">
                    {cues.map((c, i) => (
                        <button
                            key={c.id}
                            className={`recall-dot ${i === currentIdx ? 'active' : ''} ${revealedSet.has(c.id) ? 'done' : ''}`}
                            onClick={() => setCurrentIdx(i)}
                            aria-label={`Cue ${i + 1}${revealedSet.has(c.id) ? ', answered' : ''}`}
                            aria-pressed={i === currentIdx}
                        />
                    ))}
                </div>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => { setCurrentIdx((i) => Math.min(cues.length - 1, i + 1)); }}
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
    const [tocOpen, setTocOpen] = useState(true);
    const [scrollPct, setScrollPct] = useState(0);
    const scrollRef = useRef(null);

    const { subjectKey: normalizedSubject, syllabus, isLoading: isLoadingSyllabus } = useSyllabus(subject || 'chemistry');
    const context = useMemo(
        () => resolveNoteContext({ subject: normalizedSubject, unitId, topicId, subtopicIndex }, syllabus),
        [normalizedSubject, unitId, topicId, subtopicIndex, syllabus]
    );

    const activeUnit = useMemo(() => {
        return syllabus?.units?.find((u) => String(u.id) === String(unitId)) || syllabus?.units?.[0] || null;
    }, [syllabus, unitId]);

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

    return (
        <div className="note-page animate-fade-in">

            {/* ── Toolbar ── */}
            <div className="note-toolbar card">
                {/* Left: breadcrumbs */}
                <div className="note-toolbar-left">
                    <span className="badge">{getSubjectLabel(context.subject)}</span>
                    <span className="badge">{context.unitCode || (isLoadingSyllabus ? '...' : 'Unknown unit')}</span>
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
                            >
                                ✓ Read
                            </button>
                        ) : (
                            <button
                                className={`btn btn-sm note-read-btn ${scrollPct >= 80 ? 'note-read-btn--ready' : 'note-read-btn--idle'}`}
                                onClick={scrollPct >= 80 ? markRead : undefined}
                                title={scrollPct >= 80 ? 'Mark this note as read' : `Scroll more to unlock — ${scrollPct}% read`}
                                disabled={scrollPct < 80}
                            >
                                {scrollPct >= 80 ? '✓ Mark as Read' : `${scrollPct}% read`}
                            </button>
                        )
                    )}

                    {/* ToC toggle */}
                    {hasNote && toc.length > 0 && (
                        <button
                            className={`btn btn-sm ${tocOpen ? 'btn-primary' : 'btn-ghost'}`}
                            onClick={() => setTocOpen((v) => !v)}
                            title="Toggle table of contents"
                        >
                            ☰ Contents
                        </button>
                    )}

                    {/* Recall mode toggle */}
                    {hasNote && hasCues && (
                        <button
                            className={`btn btn-sm ${recallOpen ? 'btn-primary' : 'btn-ghost'}`}
                            onClick={() => setRecallOpen((v) => !v)}
                            title="Toggle recall mode"
                        >
                            🧠 Recall
                        </button>
                    )}

                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => navigate(`/chapters?subject=${context.subject}`)}
                        aria-label={`Back to ${getSubjectLabel(context.subject)} chapters`}
                    >← Chapters</button>
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
                            <button className="topic-tab">
                                Topic {topic.id}: {topic.title}
                                <span className="topic-tab-caret">▼</span>
                            </button>
                            <div className="topic-subtopics-dropdown">
                                {topic.subtopics.map((sub, idx) => {
                                    const isActive = String(topic.id) === String(topicId) && String(idx) === String(subtopicIndex);
                                    return (
                                        <Link
                                            key={idx}
                                            to={`/notes/${context.subject}/${activeUnit.id}/${topic.id}/${idx}`}
                                            className={`dropdown-item ${isActive ? 'active' : ''}`}
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

            {/* ── Main content row ── */}
            <div className="note-body">

                {/* ToC sidebar */}
                {hasNote && toc.length > 0 && tocOpen && (
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
                {hasNote && recallOpen && (
                    <ErrorBoundary name="RecallPanel" inline resetKeys={[seedNote?.recall]}>
                        <RecallPanel recall={seedNote.recall} onClose={() => setRecallOpen(false)} />
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
