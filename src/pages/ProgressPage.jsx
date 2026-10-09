import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import BadgeSystem from '../components/gamification/BadgeSystem';
import StreakTracker from '../components/gamification/StreakTracker';
import Leaderboard from '../components/gamification/Leaderboard';
import PageHeader from '../components/common/PageHeader.jsx';
import ProgressLine from '../components/common/ProgressLine.jsx';
import SubjectIcon from '../components/common/SubjectIcon.jsx';
import { subjectNoteCounts } from '../data/syllabusIndex.js';
import { SUBJECT_GROUPS } from '../data/subjectGroups.js';
import { useReadProgressSummary } from '../hooks/useNoteReadStatus';
import { useActivityRefresh } from '../hooks/useActivityRefresh.js';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import './Pages.css';

// Every subject with notes, labelled the way the rest of the app labels them.
const SUBJECTS = SUBJECT_GROUPS.flatMap((group) => group.subjects.map((subject) => ({
    id: subject.id,
    label: group.id === 'igcse' ? `IGCSE ${subject.name}` : subject.name,
    level: group.label,
})));

function localDateKey(date) {
    return date.toLocaleDateString('en-CA'); // local YYYY-MM-DD, same keys as activityByDate
}

function WeekCard({ activityByDate, totalRead, startedCount }) {
    const days = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return Array.from({ length: 7 }, (_, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() - (6 - index));
            return {
                key: localDateKey(date),
                short: date.toLocaleDateString(undefined, { weekday: 'short' }),
                full: date.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' }),
                isToday: index === 6,
                count: activityByDate?.[localDateKey(date)] || 0,
            };
        });
    }, [activityByDate]);

    const weekTotal = days.reduce((sum, day) => sum + day.count, 0);
    const activeDays = days.filter((day) => day.count > 0).length;
    const scaleMax = Math.max(4, ...days.map((day) => day.count));

    return (
        <section className="card progress-week" aria-labelledby="progress-week-title">
            <div className="progress-week-head">
                <h2 className="progress-card-title" id="progress-week-title">Last 7 days</h2>
                <p className="progress-week-summary">
                    {weekTotal === 0
                        ? 'Nothing logged yet this week. Reading one note starts your streak.'
                        : `${weekTotal} study ${weekTotal === 1 ? 'action' : 'actions'} on ${activeDays} of 7 days.`}
                </p>
            </div>

            <ol className="week-chart">
                {days.map((day) => (
                    <li key={day.key} className={`week-day${day.isToday ? ' is-today' : ''}${day.count ? ' has-activity' : ''}`}>
                        <span className="week-day-count" aria-hidden="true">{day.count || ''}</span>
                        <span className="week-day-bar" aria-hidden="true">
                            <span className="week-day-fill" style={{ '--fill': day.count / scaleMax }} />
                        </span>
                        <span className="week-day-label" aria-hidden="true">{day.isToday ? 'Today' : day.short}</span>
                        <span className="sr-only">{day.full}: {day.count} study {day.count === 1 ? 'action' : 'actions'}</span>
                    </li>
                ))}
            </ol>

            <dl className="progress-stats">
                <div>
                    <dt>Notes read</dt>
                    <dd>{totalRead}</dd>
                </div>
                <div>
                    <dt>Subjects started</dt>
                    <dd>{startedCount}</dd>
                </div>
                <div>
                    <dt>Active days</dt>
                    <dd>{activeDays}<span> / 7</span></dd>
                </div>
            </dl>
        </section>
    );
}

export default function ProgressPage() {
    useActivityRefresh();
    const readProgress = useReadProgressSummary();

    const subjects = useMemo(() => {
        const readBySubject = {};
        readProgress.readNoteIds.forEach((id) => {
            const key = id.split(':')[1];
            readBySubject[key] = (readBySubject[key] || 0) + 1;
        });
        return SUBJECTS
            .map((subject) => {
                const total = subjectNoteCounts[subject.id] || 0;
                const read = Math.min(readBySubject[subject.id] || 0, total);
                return { ...subject, total, read, pct: total ? Math.round((read / total) * 100) : 0 };
            })
            .filter((subject) => subject.total > 0);
    }, [readProgress.readNoteIds]);

    const started = subjects.filter((subject) => subject.read > 0).sort((a, b) => b.pct - a.pct);
    const notStarted = subjects.filter((subject) => subject.read === 0);

    return (
        <div className="progress-hub progress-page">
            <PageHeader title="Progress" description="How your revision is going: this week, each subject, and what you have earned." />

            <ErrorBoundary name="ProgressWeek" inline>
                <WeekCard
                    activityByDate={readProgress.activityByDate}
                    totalRead={readProgress.totalRead}
                    startedCount={started.length}
                />
            </ErrorBoundary>

            <div className="progress-columns">
                <ErrorBoundary name="SubjectProgress" inline>
                    <section className="progress-subjects" aria-labelledby="progress-subjects-title">
                        <h2 className="section-heading" id="progress-subjects-title">Subjects</h2>
                        {started.length > 0 ? (
                            <div className="list-card">
                                {started.map((subject) => (
                                    <Link key={subject.id} to={`/chapters?subject=${subject.id}`} className="list-row progress-subject-row">
                                        <span className="list-row-icon"><SubjectIcon subject={subject.id} size={20} /></span>
                                        <span className="list-row-main">
                                            <span className="list-row-title">{subject.label}</span>
                                            <ProgressLine value={subject.read} total={subject.total} label={`${subject.read} of ${subject.total} notes read`} />
                                        </span>
                                        <span className="list-row-end progress-subject-pct">
                                            {subject.pct}%
                                            <ChevronRight size={18} aria-hidden="true" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="card progress-subjects-empty">
                                <p>Subjects appear here once you read your first note.</p>
                                <Link to="/chapters" className="btn btn-primary btn-sm">Browse notes</Link>
                            </div>
                        )}

                        {notStarted.length > 0 && (
                            <details className="progress-not-started">
                                <summary>
                                    Not started yet <span className="chip-count">{notStarted.length}</span>
                                    <ChevronRight size={16} className="progress-not-started-chevron" aria-hidden="true" />
                                </summary>
                                <div className="chip-row">
                                    {notStarted.map((subject) => (
                                        <Link key={subject.id} to={`/chapters?subject=${subject.id}`} className="chip subject-chip">
                                            <SubjectIcon subject={subject.id} size={16} />
                                            <span>{subject.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </details>
                        )}
                    </section>
                </ErrorBoundary>

                <ErrorBoundary name="StreakTracker" inline><StreakTracker /></ErrorBoundary>
            </div>

            <ErrorBoundary name="BadgeSystem" inline><BadgeSystem /></ErrorBoundary>
            <ErrorBoundary name="Leaderboard" inline><Leaderboard /></ErrorBoundary>
        </div>
    );
}
