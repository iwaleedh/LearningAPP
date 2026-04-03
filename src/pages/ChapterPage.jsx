import { memo, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, ListTree, ChevronDown, ChevronUp } from 'lucide-react';
import { getSubjectLabel, normalizeSubjectKey } from '../data/syllabusIndex';
import { useSyllabus } from '../hooks/useSyllabus.js';
import './Pages.css';

// ── Subtopic dropdown (accordion) ─────────────────────────────────────────────

// Memoized to prevent all 200+ subtopic rows re-rendering on any ChapterPage state change
const TopicAccordion = memo(function TopicAccordion({ topic, unitId, subject, defaultOpen }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="chapter-topic-accordion card">
            <button
                className="chapter-topic-header"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <div className="chapter-topic-header-left">
                    <span className="chapter-topic-badge">Topic {topic.id}</span>
                    <span className="chapter-topic-title" title={topic.title}>{topic.title}</span>
                    <span className="chapter-topic-count">{topic.subtopics.length} subtopics</span>
                </div>
                <span className="chapter-topic-chevron">
                    {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
            </button>

            {open && (
                <ul className="chapter-subtopic-list">
                    {topic.subtopics.map((subtopic, index) => (
                        <li key={`${topic.id}-${index}`} className="chapter-subtopic-item">
                            <Link
                                className="chapter-subtopic-left chapter-subtopic-link"
                                to={`/notes/${subject}/${unitId}/${topic.id}/${index}`}
                            >
                                <span className="chapter-subtopic-index">{index + 1}</span>
                                <span className="chapter-subtopic-text">{subtopic}</span>
                            </Link>
                            <Link
                                className="btn btn-sm btn-ghost"
                                to={`/notes/${subject}/${unitId}/${topic.id}/${index}`}
                            >
                                Open Note →
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

// ── Main ChapterPage ───────────────────────────────────────────────────────────

export default function ChapterPage() {
    const [searchParams] = useSearchParams();
    const subject = useMemo(
        () => normalizeSubjectKey(searchParams.get('subject') || 'chemistry'),
        [searchParams],
    );
    const { syllabus, error, isLoading } = useSyllabus(subject);
    const subjectLabel = useMemo(() => getSubjectLabel(subject), [subject]);

    const totalTopics = useMemo(
        () => (syllabus?.units || []).reduce((sum, u) => sum + u.topics.length, 0),
        [syllabus]
    );
    const totalSubtopics = useMemo(
        () => (syllabus?.units || []).reduce((sum, u) => sum + u.topics.reduce((s, t) => s + t.subtopics.length, 0), 0),
        [syllabus]
    );

    if (isLoading) {
        return (
            <div className="chapter-page animate-fade-in">
                <div className="card content-status-card">
                    Loading syllabus...
                </div>
            </div>
        );
    }

    if (error || !syllabus) {
        return (
            <div className="chapter-page animate-fade-in">
                <div className="card content-status-card">
                    Could not load this syllabus right now.
                </div>
            </div>
        );
    }

    return (
        <div className="chapter-page animate-fade-in">

            {/* ── Header ── */}
            <div className="chapter-page-header">
                <div className="chapter-title-group">
                    <div className="chapter-subject-icon">
                        <span>📗</span>
                    </div>
                    <div>
                        <h1 className="chapter-page-title">{subjectLabel}</h1>
                        <p className="chapter-page-qual">{syllabus.qualification}</p>
                    </div>
                </div>
                <div className="chapter-meta-boxes">
                    <div className="meta-box">
                        <div className="meta-icon"><BookOpen size={18} /></div>
                        <div className="meta-text">
                            <strong>{totalTopics}</strong>
                            <span>Topics</span>
                        </div>
                    </div>
                    <div className="meta-box">
                        <div className="meta-icon"><ListTree size={18} /></div>
                        <div className="meta-text">
                            <strong>{totalSubtopics}</strong>
                            <span>Subtopics</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── All units stacked ── */}
            <div className="chapter-units-container">
                {syllabus.units.map((unit, unitIndex) => {
                    const unitSubtopics = unit.topics.reduce((s, t) => s + t.subtopics.length, 0);
                    return (
                        <div key={unit.id} className="chapter-unit-section animate-slide-in-up" style={{ animationDelay: `${0.1 + unitIndex * 0.05}s` }}>
                            <div className="chapter-unit-meta">
                                <h2 className="chapter-unit-heading">
                                    <span className="unit-number">Unit {unit.id}</span>
                                    <span className="unit-name">{unit.title}</span>
                                </h2>
                                <div className="chapter-meta">
                                    <span className="meta-pill"><BookOpen size={14} /> {unit.topics.length} topic{unit.topics.length !== 1 ? 's' : ''}</span>
                                    <span className="meta-pill"><ListTree size={14} /> {unitSubtopics} subtopics</span>
                                    <span className="meta-source">Source: {syllabus.source}</span>
                                </div>
                            </div>

                            <div className="chapter-topics-list">
                                {unit.topics.map((topic) => (
                                    <TopicAccordion
                                        key={`${unit.id}-${topic.id}`}
                                        topic={topic}
                                        unitId={unit.id}
                                        subject={subject}
                                        defaultOpen={false}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
