import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    BookOpen, FlaskConical, FileQuestion, Brain,
    ArrowRight, Flame, Target, TrendingUp, Sparkles, Radio
} from 'lucide-react';
import {
    getMyPendingLiveClassInvites,
    onConvexReady,
    subscribe,
    api,
    callQuery,
    getClient,
} from '../convex-client.js';
import { useAuth } from '../hooks/useAuth.js';
import { useActivityRefresh } from '../hooks/useActivityRefresh.js';
import { useReadProgressSummary } from '../hooks/useNoteReadStatus.js';
import { useFeatureFlags } from '../hooks/useFeatureFlags.js';
import { subjectNoteCounts } from '../data/syllabusIndex.js';
import './HomePage.css';

const STAT_META = [
    { key: 'chaptersRead', label: 'Chapters Read', icon: BookOpen, tone: 'primary' },
    { key: 'exercisesDone', label: 'Exercises Done', icon: FlaskConical, tone: 'success' },
    { key: 'papersViewed', label: 'Papers Viewed', icon: FileQuestion, tone: 'accent' },
    { key: 'streak', label: 'Study Streak', icon: Flame, tone: 'error' },
];

const aLevelSubjects = [
    { id: 'chemistry', name: 'AL Chemistry', chapters: 12, color: '#3b82f6', emoji: '⚗️' },
    { id: 'biology', name: 'AL Biology', chapters: 10, color: '#10b981', emoji: '🧬' },
    { id: 'physics', name: 'AL Physics', chapters: 14, color: '#f59e0b', emoji: '⚡' },
    { id: 'mathematics', name: 'AL Mathematics', chapters: 16, color: '#ef4444', emoji: '📐' },
    { id: 'business', name: 'AL Business', chapters: 20, color: '#0ea5e9', emoji: '💼' },
    { id: 'economics', name: 'AL Economics', chapters: 23, color: '#14b8a6', emoji: '📊' },
    { id: 'accounting', name: 'AL Accounting', chapters: 15, color: '#f97316', emoji: '📒' },
    { id: 'cae', name: 'CAE (C1 Advanced)', chapters: 10, color: '#3b82f6', emoji: '🇬🇧' },
    { id: 'cpe', name: 'CPE (C2 Proficiency)', chapters: 10, color: '#0ea5e9', emoji: '🎓' },
];

const oLevelSubjects = [
    { id: 'olevel_biology', name: 'IGCSE Biology', chapters: 21, color: '#10b981', emoji: '🔬' },
    { id: 'olevel_chemistry', name: 'IGCSE Chemistry', chapters: 12, color: '#8b5cf6', emoji: '🧪' },
    { id: 'olevel_physics', name: 'IGCSE Physics', chapters: 22, color: '#3b82f6', emoji: '⚡' },
    { id: 'olevel_business', name: 'IGCSE Business', chapters: 6, color: '#f59e0b', emoji: '💼' },
    { id: 'olevel_maths_core', name: 'IGCSE Maths Core', chapters: 9, color: '#ef4444', emoji: '📐' },
    { id: 'olevel_maths_extended', name: 'IGCSE Maths Extended', chapters: 9, color: '#e11d48', emoji: '🧮' },
];

export default function HomePage() {
    const navigate = useNavigate();
    const { debugAuthEnabled, username } = useAuth();
    const { isEnabled } = useFeatureFlags();
    const activityVersion = useActivityRefresh();
    const readProgress = useReadProgressSummary();
    const [liveInvites, setLiveInvites] = useState([]);
    const [badgeMetrics, setBadgeMetrics] = useState(null);
    const [activityMetrics, setActivityMetrics] = useState(null);
    const notesEnabled = isEnabled('notes');
    const pastPapersEnabled = isEnabled('pastPapers');
    const liveClassEnabled = isEnabled('liveClass');

    const quickActions = [
        isEnabled('exercises') ? {
            key: 'exercises',
            to: '/exercises',
            icon: FlaskConical,
            title: 'Practice Exercises',
            description: 'Test your understanding with interactive questions',
        } : null,
        isEnabled('flashcards') ? {
            key: 'flashcards',
            to: '/flashcards',
            icon: Brain,
            title: 'Flashcard Review',
            description: 'Quick active recall study sessions',
        } : null,
        pastPapersEnabled ? {
            key: 'past-papers',
            to: '/past-papers',
            icon: Target,
            title: 'Mock Exam',
            description: 'Timed past paper practice under exam conditions',
        } : null,
        isEnabled('progress') ? {
            key: 'progress',
            to: '/progress',
            icon: TrendingUp,
            title: 'View Progress',
            description: 'Track your study streak and performance',
        } : null,
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
    const subjectProgress = useMemo(() => {
        const readIds = readProgress.readNoteIds;
        const counts = {};
        readIds.forEach(noteId => {
            const subject = noteId.split(':')[1];
            if (subject) counts[subject] = (counts[subject] || 0) + 1;
        });
        const progress = {};
        Object.entries(counts).forEach(([subject, count]) => {
            const total = subjectNoteCounts[subject];
            if (total) progress[subject] = Math.min(100, Math.round((count / total) * 100));
        });
        return progress;
    }, [readProgress]);

    useEffect(() => {
        if (debugAuthEnabled) {
            return undefined;
        }

        let cancelled = false;
        let unsubInvites = null;

        async function refreshLiveInvites() {
            const invites = await getMyPendingLiveClassInvites(username);
            if (!cancelled) {
                setLiveInvites(invites);
            }
        }

        // M7: capture unsubscribe so we can remove the callback if effect cleans up
        // before Convex is ready, and check `cancelled` inside the callback.
        const unsubReady = onConvexReady(() => {
            if (cancelled) return;
            void refreshLiveInvites();

            if (!username) return;

            unsubInvites?.();
            unsubInvites = subscribe(api.invites.getMyPendingInvites, {}, () => {
                void refreshLiveInvites();
            });
        });

        return () => {
            cancelled = true;
            unsubReady();
            unsubInvites?.();
        };
    }, [debugAuthEnabled, username]);

    return (
        <div className="home-page animate-fade-in">
            {/* Live Class invite banner */}
            {liveClassEnabled && liveInvites.length > 0 && (
                <div className="lc-invite-banner animate-fade-in">
                    <Radio size={18} />
                    <span>Your teacher has started a live class!</span>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate(`/live/${liveInvites[0]?.sessionId}`)}
                    >
                        Join Now
                    </button>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={() => setLiveInvites([])}>Dismiss</button>
                </div>
            )}
            {/* Welcome Banner */}
            <div className="welcome-banner">
                <div className="welcome-content">
                    <div className="welcome-badge">
                        <Sparkles size={14} />
                        <span>Interactive Learning Platform</span>
                    </div>
                    <h1>Welcome to Living Textbook</h1>
                    <p>Your personal, interactive study companion — notes, exercises, past papers, and flashcards, all in one place.</p>
                    <div className="welcome-actions">
                        {notesEnabled && (
                            <Link to="/chapters" className="btn btn-primary btn-lg">
                                <BookOpen size={20} />
                                Start Learning
                            </Link>
                        )}
                        {pastPapersEnabled && (
                            <Link to="/past-papers" className="btn btn-secondary btn-lg">
                                <FileQuestion size={20} />
                                Practice Papers
                            </Link>
                        )}
                    </div>
                </div>
                <div className="welcome-decoration">
                    <div className="floating-icon fi-1">📚</div>
                    <div className="floating-icon fi-2">🧪</div>
                    <div className="floating-icon fi-3">🎯</div>
                    <div className="floating-icon fi-4">⭐</div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="stats-grid">
                {STAT_META.map((stat, i) => {
                    const Icon = stat.icon;
                    const value = stat.key === 'streak'
                        ? `${stats.streak} day${stats.streak !== 1 ? 's' : ''}`
                        : String(stats[stat.key]);
                    return (
                        <div
                            key={stat.key}
                            className={`stat-card stat-card--${stat.tone} card animate-slide-in-up`}
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <div className="stat-icon">
                                <Icon size={24} strokeWidth={2.5} />
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">{value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* A Level Subjects */}
            {notesEnabled && (
                <>
                    <div className="section-header">
                        <h2>A Level</h2>
                        <Link to="/chapters" className="btn btn-ghost">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="subjects-grid">
                        {aLevelSubjects.map((subject, i) => {
                            const pct = subjectProgress[subject.id] || 0;
                            return (
                                <Link
                                    key={subject.id}
                                    to={`/chapters?subject=${subject.id}`}
                                    className="subject-card card card-hover animate-slide-in-up"
                                    style={{
                                        animationDelay: `${0.1 + i * 0.05}s`,
                                        '--subject-accent': subject.color,
                                        '--subject-accent-soft': `${subject.color}18`,
                                    }}
                                >
                                    <div className="subject-card-header">
                                        <div className="subject-emoji">{subject.emoji}</div>
                                    </div>
                                    <div>
                                        <h3>{subject.name}</h3>
                                        <p>{subject.chapters} Chapters</p>
                                        <div className="subject-progress subject-progress--spaced">
                                            <div className="progress-bar-container">
                                                <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                                            </div>
                                            <span className="progress-text">{pct}% Complete</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="section-header section-header--spaced">
                        <h2>O Level / IGCSE</h2>
                    </div>
                    <div className="subjects-grid">
                        {oLevelSubjects.map((subject, i) => {
                            const pct = subjectProgress[subject.id] || 0;
                            return (
                                <Link
                                    key={subject.id}
                                    to={`/chapters?subject=${subject.id}`}
                                    className="subject-card card card-hover animate-slide-in-up"
                                    style={{
                                        animationDelay: `${0.1 + i * 0.05}s`,
                                        '--subject-accent': subject.color,
                                        '--subject-accent-soft': `${subject.color}18`,
                                    }}
                                >
                                    <div className="subject-card-header">
                                        <div className="subject-emoji">{subject.emoji}</div>
                                    </div>
                                    <div>
                                        <h3>{subject.name}</h3>
                                        <p>{subject.chapters} Chapters</p>
                                        <div className="subject-progress subject-progress--spaced">
                                            <div className="progress-bar-container">
                                                <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
                                            </div>
                                            <span className="progress-text">{pct}% Complete</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </>
            )}

            {/* Quick Actions Grid */}
            {quickActions.length > 0 && (
                <>
                    <div className="section-header">
                        <h2>Quick Actions</h2>
                    </div>
                    <div className="actions-grid">
                        {quickActions.map((action) => {
                            const Icon = action.icon;
                            return (
                                <Link key={action.key} to={action.to} className="action-card card card-hover">
                                    <Icon size={28} className="action-icon" />
                                    <h4>{action.title}</h4>
                                    <p>{action.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}
