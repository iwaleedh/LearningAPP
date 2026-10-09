import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
    FlaskConical, FileQuestion, Brain,
    ArrowRight, Flame, TrendingUp, ChevronRight, GraduationCap, Play,
} from 'lucide-react';
import {
    api,
    callQuery,
    getClient,
} from '../convex-client.js';
import { useActivityRefresh } from '../hooks/useActivityRefresh.js';
import { useReadProgressSummary } from '../hooks/useNoteReadStatus.js';
import { useFeatureFlags } from '../hooks/useFeatureFlags.js';
import { useAuth } from '../hooks/useAuth.js';
import { subjectNoteCounts } from '../data/syllabusIndex.js';
import { readRecentNote } from '../services/notes/recentNote.js';
import { SUBJECT_GROUPS, findSubjectGroupId } from '../data/subjectGroups.js';
import { friendlyDisplayName } from '../utils/displayName.js';
import './HomePage.css';

const DAILY_NOTE_GOAL = 3;
const RING_RADIUS = 22;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function greetingForHour(hour) {
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
}

function friendlyName(username) {
    return friendlyDisplayName(username).split(/\s+/)[0];
}

function ProgressRing({ pct }) {
    const offset = RING_CIRCUMFERENCE * (1 - pct / 100);
    return (
        <svg className="subject-ring" viewBox="0 0 52 52" aria-hidden="true">
            <circle className="subject-ring-track" cx="26" cy="26" r={RING_RADIUS} />
            <circle
                className="subject-ring-fill"
                cx="26"
                cy="26"
                r={RING_RADIUS}
                strokeDasharray={RING_CIRCUMFERENCE}
                style={{ '--ring-from': RING_CIRCUMFERENCE, '--ring-to': offset }}
                strokeDashoffset={offset}
            />
        </svg>
    );
}

export default function HomePage() {
    const { isEnabled } = useFeatureFlags();
    const { username } = useAuth();
    const activityVersion = useActivityRefresh();
    const readProgress = useReadProgressSummary();
    const [badgeMetrics, setBadgeMetrics] = useState(null);
    const [activityMetrics, setActivityMetrics] = useState(null);
    const [recentNote] = useState(readRecentNote);
    const notesEnabled = isEnabled('notes');

    const initialGroup = useMemo(() => findSubjectGroupId(recentNote?.subject), [recentNote]);
    const [activeGroupId, setActiveGroupId] = useState(initialGroup);

    const practiceLinks = [
        isEnabled('exercises') ? { key: 'exercises', to: '/exercises', icon: FlaskConical, title: 'Exercises', description: 'Questions on every topic' } : null,
        isEnabled('flashcards') ? { key: 'flashcards', to: '/flashcards', icon: Brain, title: 'Flashcards', description: 'Quick active-recall reviews' } : null,
        isEnabled('pastPapers') ? { key: 'past-papers', to: '/past-papers', icon: FileQuestion, title: 'Past papers', description: 'Timed exam practice' } : null,
        isEnabled('mistakeBank') ? { key: 'mistakes', to: '/mistakes', icon: GraduationCap, title: 'Mistake bank', description: 'Revisit what you got wrong' } : null,
        isEnabled('progress') ? { key: 'progress', to: '/progress', icon: TrendingUp, title: 'Progress', description: 'Streaks and subject mastery' } : null,
    ].filter(Boolean);

    useEffect(() => {
        let cancelled = false;

        async function loadMetrics() {
            if (!getClient()) {
                if (!cancelled) {
                    setBadgeMetrics(null);
                    setActivityMetrics(null);
                }
                return;
            }

            try {
                const [nextBadgeMetrics, nextActivityMetrics] = await Promise.all([
                    callQuery(api.badgeMetrics.getMyBadgeMetrics),
                    callQuery(api.activityMetrics.getMyActivityMetrics),
                ]);

                if (!cancelled) {
                    setBadgeMetrics(nextBadgeMetrics || null);
                    setActivityMetrics(nextActivityMetrics || null);
                }
            } catch {
                if (!cancelled) {
                    setBadgeMetrics(null);
                    setActivityMetrics(null);
                }
            }
        }

        void loadMetrics();

        return () => {
            cancelled = true;
        };
    }, [activityVersion]);

    const stats = useMemo(() => ({
        chaptersRead: readProgress.totalRead,
        exercisesDone: badgeMetrics?.exercisesCompleted ?? activityMetrics?.exercisesDone ?? 0,
        papersViewed: activityMetrics?.papersViewed ?? 0,
        streak: readProgress.currentStreak,
    }), [activityMetrics, badgeMetrics, readProgress]);

    const readCountBySubject = useMemo(() => {
        const counts = {};
        readProgress.readNoteIds.forEach((noteId) => {
            const subject = noteId.split(':')[1];
            if (subject) counts[subject] = (counts[subject] || 0) + 1;
        });
        return counts;
    }, [readProgress]);

    const now = new Date();
    const todayKey = now.toDateString();
    const notesToday = Object.values(readProgress.readAtByNoteId || {})
        .filter((readAt) => readAt && new Date(readAt).toDateString() === todayKey).length;
    const goalPct = Math.min(100, Math.round((notesToday / DAILY_NOTE_GOAL) * 100));
    const todayMessage = notesToday >= DAILY_NOTE_GOAL
        ? 'Goal reached for today. Nice work.'
        : notesToday > 0
            ? `${DAILY_NOTE_GOAL - notesToday} more to hit today's goal.`
            : stats.streak > 0
                ? `Read a note today to keep your ${stats.streak}-day streak.`
                : 'Read your first note tonight to start a streak.';

    // Progress through the topic the student was last reading
    const recentTopicRead = recentNote?.topicId !== undefined
        ? readProgress.readNoteIds.filter((noteId) => noteId.startsWith(`note:${recentNote.subject}:${recentNote.unitId}:${recentNote.topicId}:`)).length
        : 0;
    const recentTopicSize = recentNote?.topicSize || 0;
    const name = friendlyName(username);
    const greeting = `${greetingForHour(now.getHours())}${name ? `, ${name}` : ''}`;
    const dateLine = now.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' });
    const activeGroup = SUBJECT_GROUPS.find((group) => group.id === activeGroupId) || SUBJECT_GROUPS[0];
    const streakDays = stats.streak;

    return (
        <div className="home-page">
            <header className="home-head home-reveal">
                <div className="home-head-text">
                    <h1 className="home-greeting">{greeting}</h1>
                    <p className="home-date">{dateLine}</p>
                </div>
                <div className={`streak-chip ${streakDays > 0 ? 'is-lit' : ''}`}>
                    <Flame size={18} aria-hidden="true" />
                    {streakDays > 0 ? (
                        <>
                            <span className="streak-chip-value">{streakDays}</span>
                            <span className="streak-chip-label">day streak</span>
                        </>
                    ) : (
                        <span className="streak-chip-label">Start your streak tonight</span>
                    )}
                </div>
            </header>

            <section className="home-hero home-reveal" aria-label="Your study today">
                {notesEnabled && (recentNote ? (
                    <Link to={recentNote.path} className="continue-card" aria-label={`Continue learning: ${recentNote.subtopicTitle || 'your last note'}`}>
                        <div className="continue-card-body">
                            <h2 className="continue-card-title">{recentNote.subtopicTitle || 'Your last note'}</h2>
                            <p className="continue-card-subject">{recentNote.subjectLabel || 'Notes'}{recentNote.topicTitle ? ` · ${recentNote.topicTitle}` : ''}</p>
                            {recentTopicSize > 0 && (
                                <div className="continue-card-progress">
                                    <div className="continue-card-track" aria-hidden="true">
                                        <div className="continue-card-fill" style={{ transform: `scaleX(${Math.min(recentTopicRead, recentTopicSize) / recentTopicSize})` }} />
                                    </div>
                                    <span>{Math.min(recentTopicRead, recentTopicSize)} of {recentTopicSize} read in this topic</span>
                                </div>
                            )}
                        </div>
                        <span className="continue-card-action">
                            <Play size={16} aria-hidden="true" fill="currentColor" />
                            Resume
                        </span>
                    </Link>
                ) : (
                    <Link to="/chapters" className="continue-card">
                        <div className="continue-card-body">
                            <h2 className="continue-card-title">Pick a subject and open your first note</h2>
                            <p className="continue-card-subject">Notes follow your exam board's syllabus, topic by topic.</p>
                        </div>
                        <span className="continue-card-action">
                            Browse notes
                            <ArrowRight size={16} aria-hidden="true" />
                        </span>
                    </Link>
                ))}

                <div className="today-card">
                    <h2 className="today-card-heading">Today</h2>
                    <p className="today-goal">
                        <span className="today-goal-value">{Math.min(notesToday, DAILY_NOTE_GOAL)}</span>
                        <span className="today-goal-of">/ {DAILY_NOTE_GOAL} notes read</span>
                    </p>
                    <div
                        className="today-goal-track"
                        role="progressbar"
                        aria-label="Daily note goal"
                        aria-valuemin={0}
                        aria-valuemax={DAILY_NOTE_GOAL}
                        aria-valuenow={Math.min(notesToday, DAILY_NOTE_GOAL)}
                    >
                        <div className="today-goal-fill" style={{ transform: `scaleX(${goalPct / 100})` }} />
                    </div>
                    <p className="today-message">{todayMessage}</p>
                    <p className="today-totals">
                        All time: {stats.chaptersRead} notes · {stats.exercisesDone} exercises · {stats.papersViewed} papers
                    </p>
                </div>
            </section>

            {notesEnabled && (
                <section className="home-section home-reveal" aria-labelledby="home-subjects-title">
                    <div className="home-section-head">
                        <h2 id="home-subjects-title">Your subjects</h2>
                        <div className="home-tabs" role="tablist" aria-label="Qualification">
                            {SUBJECT_GROUPS.map((group) => (
                                <button
                                    key={group.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={group.id === activeGroup.id}
                                    className={`home-tab ${group.id === activeGroup.id ? 'is-active' : ''}`}
                                    onClick={() => setActiveGroupId(group.id)}
                                >
                                    {group.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="subject-grid" role="tabpanel" aria-label={`${activeGroup.label} subjects`}>
                        {activeGroup.subjects.map((subject) => {
                            const total = subjectNoteCounts[subject.id] || 0;
                            const read = Math.min(readCountBySubject[subject.id] || 0, total);
                            const pct = total ? Math.round((read / total) * 100) : 0;
                            return (
                                <Link
                                    key={subject.id}
                                    to={`/chapters?subject=${subject.id}`}
                                    className="subject-tile"
                                    aria-label={`${activeGroup.label} ${subject.name}: ${pct}% read`}
                                >
                                    <div className="subject-tile-ring">
                                        <ProgressRing pct={pct} />
                                        <span className="subject-tile-pct">{pct}<small>%</small></span>
                                    </div>
                                    <div className="subject-tile-text">
                                        <span className="subject-tile-name">{subject.name}</span>
                                        <span className="subject-tile-meta">
                                            {activeGroup.id === 'igcse' ? `${subject.code} · ` : ''}{read} of {total} notes
                                        </span>
                                    </div>
                                    <ChevronRight size={18} className="subject-tile-chevron" aria-hidden="true" />
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}

            {practiceLinks.length > 0 && (
                <section className="home-section home-reveal" aria-labelledby="home-practice-title">
                    <div className="home-section-head">
                        <h2 id="home-practice-title">Practice</h2>
                    </div>
                    <nav className="practice-list" aria-label="Practice tools">
                        {practiceLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link key={item.key} to={item.to} className="practice-row">
                                    <span className="practice-row-icon"><Icon size={20} aria-hidden="true" /></span>
                                    <span className="practice-row-text">
                                        <span className="practice-row-title">{item.title}</span>
                                        <span className="practice-row-desc">{item.description}</span>
                                    </span>
                                    <ChevronRight size={18} className="practice-row-chevron" aria-hidden="true" />
                                </Link>
                            );
                        })}
                    </nav>
                </section>
            )}
        </div>
    );
}
