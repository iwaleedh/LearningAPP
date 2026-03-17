import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, ListTree, ChevronDown, ChevronUp } from 'lucide-react';
import { getSubjectLabel, getSyllabusBySubject } from '../data/syllabusIndex';
import './Pages.css';

// ── Subtopic dropdown (accordion) ─────────────────────────────────────────────

function TopicAccordion({ topic, unitId, subject, defaultOpen }) {
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
                    <span className="chapter-topic-title">{topic.title}</span>
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
}

// ── Main ChapterPage ───────────────────────────────────────────────────────────

export default function ChapterPage() {
    const [searchParams] = useSearchParams();
    const subject = (searchParams.get('subject') || 'chemistry').toLowerCase();
    const syllabus = useMemo(() => getSyllabusBySubject(subject), [subject]);
    const subjectLabel = useMemo(() => getSubjectLabel(subject), [subject]);

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

            {/* ── Header ── */}
            <div className="chapter-page-header">
                <div>
                    <h1 className="chapter-page-title">📗 {subjectLabel}</h1>
                    <p className="chapter-page-qual">{syllabus.qualification}</p>
                </div>
                <div className="chapter-meta">
                    <span><BookOpen size={14} /> {totalTopics} topics</span>
                    <span><ListTree size={14} /> {totalSubtopics} subtopics</span>
                </div>
            </div>

            {/* ── All units stacked ── */}
            {syllabus.units.map((unit) => {
                const unitSubtopics = unit.topics.reduce((s, t) => s + t.subtopics.length, 0);
                return (
                    <div key={unit.id} className="chapter-unit-section">
                        <div className="chapter-unit-meta">
                            <h2 className="chapter-unit-heading">
                                Unit {unit.id}: {unit.title}
                            </h2>
                            <div className="chapter-meta">
                                <span><BookOpen size={14} /> {unit.topics.length} topic{unit.topics.length !== 1 ? 's' : ''}</span>
                                <span><ListTree size={14} /> {unitSubtopics} subtopics</span>
                                <span>Source: {syllabus.source}</span>
                            </div>
                        </div>

                        <div className="chapter-topics-list">
                            {unit.topics.map((topic) => (
                                <TopicAccordion
                                    key={`${unit.id}-${topic.id}`}
                                    topic={topic}
                                    unitId={unit.id}
                                    subject={subject}
                                    defaultOpen={true}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
