import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MonitorPlay, BookOpen, ListTree, ChevronDown, ChevronUp } from 'lucide-react';
import { getSubjectLabel, getSyllabusBySubject } from '../data/syllabusIndex';
import { getSeedNote } from '../data/seedNotes/index';
import { getSubjectTheme } from '../components/presentation/slideEngine';
import '../components/presentation/Presentation.css';
import './Pages.css';

// ── Subtopic row for Presentation browse ─────────────────────────────────────

function PresentationTopicAccordion({ topic, unitId, subject, defaultOpen }) {
    const [open, setOpen] = useState(defaultOpen);
    const theme = getSubjectTheme(subject);

    return (
        <div className="chapter-topic-accordion card">
            <button
                className="chapter-topic-header"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <div className="chapter-topic-header-left">
                    <span className="chapter-topic-badge">Topic {topic.id}</span>
                    <span className="chapter-topic-title">{topic.title}</span>
                    <span className="chapter-topic-count">{topic.subtopics.length} subtopics</span>
                </div>
                <span className="chapter-topic-chevron">
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
            </button>

            {open && (
                <ul className="chapter-subtopic-list">
                    {topic.subtopics.map((subtopic, index) => {
                        const noteId = `note:${subject}:${unitId}:${topic.id}:${index}`;
                        const hasSlides = !!getSeedNote(noteId);
                        return (
                            <li key={`${topic.id}-${index}`} className="chapter-subtopic-item">
                                <div className="chapter-subtopic-left">
                                    <span className="chapter-subtopic-index">{index + 1}</span>
                                    <span className="chapter-subtopic-text">{subtopic}</span>
                                </div>
                                {hasSlides ? (
                                    <Link
                                        className="btn btn-sm pres-browse-btn"
                                        to={`/presentation/${subject}/${unitId}/${topic.id}/${index}`}
                                        style={{ '--pres-color': theme.primary }}
                                    >
                                        <MonitorPlay size={14} />
                                        Open Slideshow
                                    </Link>
                                ) : (
                                    <span className="pres-no-slides-badge">No slides yet</span>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

// ── Subject list ─────────────────────────────────────────────────────────────

const SUBJECTS = ['chemistry', 'physics', 'biology', 'mathematics', 'economics', 'business', 'accounting', 'english'];
const SUBJECT_EMOJIS = {
    chemistry: '⚗️', physics: '⚡', biology: '🧬', mathematics: '📐',
    economics: '📊', business: '💼', accounting: '🧾', english: '📝',
};

// ── Main PresentationBrowsePage ───────────────────────────────────────────────

export default function PresentationBrowsePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const subject = (searchParams.get('subject') || 'chemistry').toLowerCase();
    const syllabus = useMemo(() => getSyllabusBySubject(subject), [subject]);
    const subjectLabel = useMemo(() => getSubjectLabel(subject), [subject]);
    const theme = getSubjectTheme(subject);

    const totalTopics = useMemo(
        () => syllabus.units.reduce((sum, u) => sum + u.topics.length, 0),
        [syllabus]
    );
    const totalSubtopics = useMemo(
        () => syllabus.units.reduce((sum, u) => sum + u.topics.reduce((s, t) => s + t.subtopics.length, 0), 0),
        [syllabus]
    );

    return (
        <div className="chapter-page animate-fade-in">

            {/* ── Page hero header ── */}
            <div className="pres-browse-header">
                <div
                    className="pres-browse-header-icon"
                    style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.dark})` }}
                >
                    <MonitorPlay size={28} color="#fff" />
                </div>
                <div>
                    <h1 className="chapter-page-title" style={{ margin: 0 }}>Presentation Mode</h1>
                    <p className="chapter-page-qual" style={{ margin: 0 }}>
                        Animated, teacher-facing slideshows — select a subtopic below
                    </p>
                </div>
            </div>

            {/* ── Two-column layout: subject sidebar + content ── */}
            <div className="chapter-layout">

                {/* Subject picker sidebar */}
                <aside className="chapter-sidebar card">
                    <div className="chapter-sidebar-title">
                        <BookOpen size={14} />
                        Subjects
                    </div>
                    {SUBJECTS.map(s => (
                        <button
                            key={s}
                            onClick={() => setSearchParams({ subject: s })}
                            className={`chapter-sidebar-item ${s === subject ? 'active' : ''}`}
                        >
                            {SUBJECT_EMOJIS[s]} {getSubjectLabel(s)}
                        </button>
                    ))}
                </aside>

                {/* Content area */}
                <div className="chapter-content">
                    <div className="chapter-page-header">
                        <div>
                            <h2 className="chapter-page-title">
                                {SUBJECT_EMOJIS[subject]} {subjectLabel}
                            </h2>
                            <p className="chapter-page-qual">{syllabus.qualification}</p>
                        </div>
                        <div className="chapter-meta">
                            <span><BookOpen size={14} /> {totalTopics} topics</span>
                            <span><ListTree size={14} /> {totalSubtopics} subtopics</span>
                        </div>
                    </div>

                    {syllabus.units.map((unit) => {
                        const unitSubtopics = unit.topics.reduce((s, t) => s + t.subtopics.length, 0);
                        return (
                            <div key={unit.id} className="chapter-unit-section">
                                <div className="chapter-unit-meta">
                                    <h3 className="chapter-unit-heading">
                                        Unit {unit.id}: {unit.title}
                                    </h3>
                                    <div className="chapter-meta">
                                        <span><BookOpen size={14} /> {unit.topics.length} topic{unit.topics.length !== 1 ? 's' : ''}</span>
                                        <span><ListTree size={14} /> {unitSubtopics} subtopics</span>
                                        <span>Source: {syllabus.source}</span>
                                    </div>
                                </div>

                                <div className="chapter-topics-list">
                                    {unit.topics.map((topic) => (
                                        <PresentationTopicAccordion
                                            key={`${unit.id}-${topic.id}`}
                                            topic={topic}
                                            unitId={unit.id}
                                            subject={subject}
                                            defaultOpen={unit.id === syllabus.units[0]?.id}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
