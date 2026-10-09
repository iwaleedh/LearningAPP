import { memo, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import { getSubjectLabel, normalizeSubjectKey, subjectNoteCounts } from '../data/syllabusIndex';
import { SUBJECT_GROUPS, findSubjectGroupId } from '../data/subjectGroups.js';
import { useSyllabus } from '../hooks/useSyllabus.js';
import { useReadProgressSummary } from '../hooks/useNoteReadStatus.js';
import { readRecentNote } from '../services/notes/recentNote.js';
import PageHeader from '../components/common/PageHeader.jsx';
import ProgressLine from '../components/common/ProgressLine.jsx';
import SubjectIcon from '../components/common/SubjectIcon.jsx';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import './Pages.css';

// ── Topic row: collapsible, shows read progress and links to every subtopic ──

// Memoized so expanding one topic doesn't re-render all 200+ subtopic rows
const TopicRow = memo(function TopicRow({ topic, unitId, subject, readAtByNoteId, defaultOpen }) {
    const [open, setOpen] = useState(defaultOpen);
    const noteId = (index) => `note:${subject}:${unitId}:${topic.id}:${index}`;
    const readCount = topic.subtopics.filter((_, index) => readAtByNoteId[noteId(index)]).length;
    const isComplete = readCount === topic.subtopics.length && readCount > 0;

    return (
        <div className={`outline-topic ${open ? 'is-open' : ''}`}>
            <button
                className="outline-topic-header"
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
            >
                <span className={`outline-topic-number ${isComplete ? 'is-complete' : ''}`} aria-hidden="true">
                    {isComplete ? <Check size={16} /> : topic.id}
                </span>
                <span className="outline-topic-main">
                    <span className="outline-topic-title">{topic.title}</span>
                    <ProgressLine value={readCount} total={topic.subtopics.length} />
                </span>
                <ChevronRight size={18} className="outline-topic-chevron" aria-hidden="true" />
            </button>

            {open && (
                <ol className="outline-subtopics">
                    {topic.subtopics.map((subtopic, index) => {
                        const isRead = Boolean(readAtByNoteId[noteId(index)]);
                        return (
                            <li key={`${topic.id}-${index}`}>
                                <Link
                                    className={`outline-subtopic ${isRead ? 'is-read' : ''}`}
                                    to={`/notes/${subject}/${unitId}/${topic.id}/${index}`}
                                    aria-label={`Open note for ${subtopic}${isRead ? ' (read)' : ''}`}
                                >
                                    <span className="outline-subtopic-marker" aria-hidden="true">
                                        {isRead ? <Check size={14} /> : index + 1}
                                    </span>
                                    <span className="outline-subtopic-text">{subtopic}</span>
                                    <ChevronRight size={16} className="outline-subtopic-chevron" aria-hidden="true" />
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
});

// ── No subject chosen: pick one ──

function SubjectChooser({ readNoteIds }) {
    const [groupId, setGroupId] = useState(() => findSubjectGroupId(readRecentNote()?.subject));
    const group = SUBJECT_GROUPS.find((item) => item.id === groupId) || SUBJECT_GROUPS[0];
    const readBySubject = useMemo(() => {
        const counts = {};
        readNoteIds.forEach((id) => {
            const key = id.split(':')[1];
            counts[key] = (counts[key] || 0) + 1;
        });
        return counts;
    }, [readNoteIds]);

    return (
        <div className="chapter-page">
            <PageHeader title="Notes" description="Syllabus-ordered notes for every unit and topic. Pick a subject to start." />

            <div className="segmented outline-group-tabs" role="tablist" aria-label="Qualification">
                {SUBJECT_GROUPS.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={item.id === group.id}
                        className="segmented-option"
                        onClick={() => setGroupId(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="list-card" role="tabpanel" aria-label={`${group.label} subjects`}>
                {group.subjects.map((subject) => {
                    const total = subjectNoteCounts[subject.id] || 0;
                    const read = Math.min(readBySubject[subject.id] || 0, total);
                    return (
                        <Link key={subject.id} to={`/chapters?subject=${subject.id}`} className="list-row outline-subject-row">
                            <span className="list-row-icon"><SubjectIcon subject={subject.id} size={20} /></span>
                            <span className="list-row-main">
                                <span className="list-row-title">{subject.name}</span>
                                <ProgressLine value={read} total={total} label={`${group.id === 'igcse' ? `${subject.code} · ` : ''}${read} of ${total} notes read`} />
                            </span>
                            <ChevronRight size={18} className="list-row-end" aria-hidden="true" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

// ── Main ChapterPage ───────────────────────────────────────────────────────────

export default function ChapterPage() {
    const [searchParams] = useSearchParams();
    const rawSubject = searchParams.get('subject');
    const subject = useMemo(() => normalizeSubjectKey(rawSubject || 'chemistry'), [rawSubject]);
    const { syllabus, error, isLoading } = useSyllabus(subject);
    const { readAtByNoteId, readNoteIds } = useReadProgressSummary();
    const subjectLabel = useMemo(() => getSubjectLabel(subject), [subject]);
    const recent = useMemo(() => readRecentNote(), []);

    const totals = useMemo(() => {
        let subtopics = 0;
        let read = 0;
        (syllabus?.units || []).forEach((unit) => unit.topics.forEach((topic) => topic.subtopics.forEach((_, index) => {
            subtopics += 1;
            if (readAtByNoteId[`note:${subject}:${unit.id}:${topic.id}:${index}`]) read += 1;
        })));
        return { subtopics, read };
    }, [readAtByNoteId, subject, syllabus]);

    if (!rawSubject) {
        return <SubjectChooser readNoteIds={readNoteIds} />;
    }

    if (isLoading) {
        return (
            <div className="chapter-page">
                <div className="card content-status-card">Loading syllabus...</div>
            </div>
        );
    }

    if (error || !syllabus) {
        return (
            <div className="chapter-page">
                <div className="card content-status-card">Could not load this syllabus right now.</div>
            </div>
        );
    }

    return (
        <div className="chapter-page">
            <Link to="/chapters" className="outline-back">
                <ArrowLeft size={16} aria-hidden="true" /> All subjects
            </Link>

            <PageHeader title={subjectLabel} description={syllabus.qualification} />

            <div className="outline-summary">
                <ProgressLine value={totals.read} total={totals.subtopics} label={`${totals.read} of ${totals.subtopics} notes read`} />
            </div>

            <div className="outline-units">
                {syllabus.units.map((unit) => {
                    let unitTotal = 0;
                    let unitRead = 0;
                    unit.topics.forEach((topic) => topic.subtopics.forEach((_, index) => {
                        unitTotal += 1;
                        if (readAtByNoteId[`note:${subject}:${unit.id}:${topic.id}:${index}`]) unitRead += 1;
                    }));
                    return (
                        <ErrorBoundary key={`eb-unit-${unit.id}`} name={`ChapterUnit:${unit.id}`} inline resetKeys={[unit.id]}>
                            <section className="outline-unit" aria-labelledby={`unit-${unit.id}-title`}>
                                <div className="outline-unit-head">
                                    <h2 className="outline-unit-title" id={`unit-${unit.id}-title`}>
                                        <span className="outline-unit-number">Unit {unit.id}</span>
                                        {unit.title}
                                    </h2>
                                    <span className="outline-unit-count">{unitRead} / {unitTotal}</span>
                                </div>

                                <div className="list-card outline-topic-list">
                                    {unit.topics.map((topic) => (
                                        <TopicRow
                                            key={`${unit.id}-${topic.id}`}
                                            topic={topic}
                                            unitId={unit.id}
                                            subject={subject}
                                            readAtByNoteId={readAtByNoteId}
                                            defaultOpen={recent?.subject === subject && String(recent?.unitId) === String(unit.id) && String(recent?.topicId) === String(topic.id)}
                                        />
                                    ))}
                                </div>
                            </section>
                        </ErrorBoundary>
                    );
                })}
            </div>
        </div>
    );
}
