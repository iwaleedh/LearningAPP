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

    // Active unit — default to first unit
    const [activeUnitId, setActiveUnitId] = useState(syllabus.units[0]?.id ?? 1);

    // When syllabus changes (subject switch), reset to first unit
    const activeUnit = useMemo(() => {
        const found = syllabus.units.find((u) => String(u.id) === String(activeUnitId));
        return found ?? syllabus.units[0];
    }, [activeUnitId, syllabus]);

    // Recompute totals for the active unit
    const totalTopics = activeUnit?.topics?.length ?? 0;
    const totalSubtopics = useMemo(
        () => (activeUnit?.topics ?? []).reduce((sum, t) => sum + t.subtopics.length, 0),
        [activeUnit]
    );

    const handleUnitTab = (unitId) => {
        setActiveUnitId(unitId);
    };

    return (
        <div className="chapter-page animate-fade-in">

            {/* ── Header ── */}
            <div className="chapter-page-header">
                <div>
                    <h1 className="chapter-page-title">📗 {subjectLabel}</h1>
                    <p className="chapter-page-qual">{syllabus.qualification}</p>
                </div>
            </div>

            {/* ── Unit tabs ── */}
            <div className="chapter-tabs-wrap">
                <div className="chapter-tabs" role="tablist">
                    {syllabus.units.map((unit) => {
                        const isActive = String(unit.id) === String(activeUnit?.id);
                        return (
                            <button
                                key={unit.id}
                                role="tab"
                                aria-selected={isActive}
                                className={`chapter-tab ${isActive ? 'chapter-tab--active' : ''}`}
                                onClick={() => handleUnitTab(unit.id)}
                            >
                                <span className="chapter-tab-code">{unit.code}</span>
                                <span className="chapter-tab-title">{unit.title}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── Unit content ── */}
            {activeUnit && (
                <div className="chapter-unit-content" role="tabpanel">
                    <div className="chapter-unit-meta">
                        <h2 className="chapter-unit-heading">
                            Unit {activeUnit.id}: {activeUnit.title}
                        </h2>
                        <div className="chapter-meta">
                            <span><BookOpen size={14} /> {totalTopics} topic{totalTopics !== 1 ? 's' : ''}</span>
                            <span><ListTree size={14} /> {totalSubtopics} subtopics</span>
                            <span>Source: {syllabus.source}</span>
                        </div>
                    </div>

                    <div className="chapter-topics-list">
                        {activeUnit.topics.map((topic, i) => (
                            <TopicAccordion
                                key={`${activeUnit.id}-${topic.id}`}
                                topic={topic}
                                unitId={activeUnit.id}
                                subject={subject}
                                defaultOpen={i === 0}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
