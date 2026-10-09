import { useState, useEffect, useMemo } from 'react';
import { Star, Flame, BookOpen, Target, Zap, Crown, Award, Lock, ChevronDown } from 'lucide-react';
import { useReadProgressSummary } from '../../hooks/useNoteReadStatus.js';
import { useActivityRefresh } from '../../hooks/useActivityRefresh.js';
import { api, callQuery, getClient } from '../../convex-client.js';
import './Gamification.css';

// Brand palette: burgundy, rose, streak gold, mint and a warm white
const CONFETTI_COLORS = ['#a3264c', '#f27b9f', '#f2b544', '#4cc38a', '#fbe9ef', '#d94f78'];

function Confetti({ active }) {
    const particles = useMemo(() => {
        if (!active) return [];
        return Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: (i * 17) % 100,
            color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            delay: (i % 7) * 0.08,
            duration: 1.2 + (i % 5) * 0.2,
            width: 6 + (i % 8),
            height: 4 + (i % 6),
            rotation: (i * 37) % 360,
        }));
    }, [active]);

    if (!active) return null;

    return (
        <div className="confetti-overlay" aria-hidden="true">
            {particles.map(p => (
                <div
                    key={p.id}
                    className="confetti-particle"
                    style={{
                        left: `${p.left}%`,
                        backgroundColor: p.color,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                        width: p.width,
                        height: p.height,
                        '--rotation': `${p.rotation}deg`,
                    }}
                />
            ))}
        </div>
    );
}

// Each badge is a threshold on one live metric, so progress toward it can be shown honestly.
// perfectScores and fastCompletions are not tracked yet; those badges unlock once timed-exam tracking lands.
const BADGE_DEFINITIONS = [
    { id: 'first_login', name: 'First sign-in', description: 'Sign in for the first time.', icon: Star, metric: 'logins', goal: 1 },
    { id: 'explorer', name: 'Explorer', description: 'Read 3 different notes.', icon: BookOpen, metric: 'notesRead', goal: 3 },
    { id: 'first_exercise', name: 'First steps', description: 'Complete your first exercise.', icon: Target, metric: 'exercisesCompleted', goal: 1 },
    { id: 'notes_5', name: 'Studious', description: 'Read 5 notes.', icon: BookOpen, metric: 'notesRead', goal: 5 },
    { id: 'notes_25', name: 'Bookworm', description: 'Read 25 notes.', icon: BookOpen, metric: 'notesRead', goal: 25 },
    { id: 'exercises_10', name: 'Practice makes perfect', description: 'Complete 10 exercises.', icon: Target, metric: 'exercisesCompleted', goal: 10 },
    { id: 'streak_3', name: '3-day streak', description: 'Study 3 days in a row.', icon: Flame, metric: 'currentStreak', goal: 3 },
    { id: 'streak_7', name: 'Week warrior', description: 'Study 7 days in a row.', icon: Flame, metric: 'currentStreak', goal: 7 },
    { id: 'quiz_master', name: 'Quiz master', description: 'Score 100% on an exam.', icon: Crown, metric: 'perfectScores', goal: 1 },
    { id: 'paper_pro', name: 'Paper pro', description: 'Complete 5 past papers.', icon: Award, metric: 'papersCompleted', goal: 5 },
    { id: 'speed_demon', name: 'Speed demon', description: 'Finish an exam with over half the time left.', icon: Zap, metric: 'fastCompletions', goal: 1 },
].map((badge) => ({ ...badge, criteria: (stats) => (stats[badge.metric] || 0) >= badge.goal }));

/**
 * SECURITY NOTE — Badge spoofing defence:
 * We deliberately do NOT load the earned badge list from localStorage and trust it.
 * Instead, we re-evaluate every badge's criteria against live stats on every render.
 * localStorage is only used to track which badges have already triggered confetti,
 * preventing the confetti from firing again on every reload.
 *
 * This means a user who edits `lt_badge_celebrated` in DevTools only sees confetti
 * suppressed/re-fired — badge display is always determined by real activity data.
 */
const CELEBRATED_KEY = 'lt_badge_celebrated'; // only stores badge IDs already celebrated

function loadCelebrated() {
    try {
        const raw = localStorage.getItem(CELEBRATED_KEY);
        if (!raw) return new Set();
        const parsed = JSON.parse(raw);
        // Only accept known badge IDs to prevent injection of garbage
        const knownIds = new Set(BADGE_DEFINITIONS.map(b => b.id));
        return new Set(Array.isArray(parsed) ? parsed.filter(id => knownIds.has(id)) : []);
    } catch {
        return new Set();
    }
}

function saveCelebrated(set) {
    try {
        localStorage.setItem(CELEBRATED_KEY, JSON.stringify([...set]));
    } catch { /* ignore */ }
}

function buildLiveStats(serverMetrics, readProgress) {
    const notesRead = readProgress.totalRead;
    return {
        // D5: Use real login-day count from userSessions. Falls back to 1 so the
        // first_login badge is always earned when the component renders (user is
        // authenticated and this component only mounts for authenticated users).
        logins: serverMetrics?.loginCount ?? 1,
        exercisesCompleted: serverMetrics?.exercisesCompleted ?? 0,
        currentStreak: readProgress.currentStreak,
        perfectScores: serverMetrics?.perfectScores ?? 0,
        fastCompletions: serverMetrics?.fastCompletions ?? 0,
        papersCompleted: serverMetrics?.papersCompleted ?? 0,
        // D5: notesRead is real data from noteReadProgress via useReadProgressSummary.
        // The explorer badge criterion was updated to use notesRead directly.
        notesRead,
    };
}

/** Evaluate which badges are earned from live stats. Never reads from localStorage for this. */
function getEarnedBadgeIds(stats) {
    return BADGE_DEFINITIONS
        .filter(b => b.criteria(stats))
        .map(b => b.id);
}

export default function BadgeSystem() {
    const activityVersion = useActivityRefresh();
    const readProgress = useReadProgressSummary();
    const [justEarned, setJustEarned] = useState(null);
    const [serverMetrics, setServerMetrics] = useState(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function loadBadgeMetrics() {
            if (!getClient()) {
                if (!cancelled) {
                    setServerMetrics(null);
                }
                return;
            }

            try {
                const nextServerMetrics = await callQuery(api.badgeMetrics.getMyBadgeMetrics);
                if (!cancelled) {
                    setServerMetrics(nextServerMetrics || null);
                }
            } catch {
                if (!cancelled) {
                    setServerMetrics(null);
                }
            }
        }

        void loadBadgeMetrics();

        return () => {
            cancelled = true;
        };
    }, [activityVersion]);

    const stats = useMemo(() => buildLiveStats(serverMetrics, readProgress), [readProgress, serverMetrics]);

    const earned = useMemo(() => getEarnedBadgeIds(stats), [stats]);

    useEffect(() => {
        const celebrated = loadCelebrated();
        const newlyCelebrated = earned.filter(id => !celebrated.has(id));
        if (newlyCelebrated.length === 0) return undefined;

        const updatedCelebrated = new Set([...celebrated, ...newlyCelebrated]);
        saveCelebrated(updatedCelebrated);
        const timerId = setTimeout(() => {
            setJustEarned(newlyCelebrated[0]);
        }, 0);

        return () => clearTimeout(timerId);
    }, [earned]);

    useEffect(() => {
        if (!justEarned) return undefined;
        const id = setTimeout(() => {
            setJustEarned(null);
        }, 3000);
        return () => clearTimeout(id);
    }, [justEarned]);

    const earnedCount = earned.length;
    const totalCount = BADGE_DEFINITIONS.length;
    const earnedBadges = BADGE_DEFINITIONS.filter((badge) => earned.includes(badge.id));
    // Closest locked badges first, so "next up" is always the most reachable goal
    const nextUp = BADGE_DEFINITIONS
        .filter((badge) => !earned.includes(badge.id))
        .map((badge) => ({ ...badge, current: Math.min(stats[badge.metric] || 0, badge.goal) }))
        .sort((a, b) => (b.current / b.goal) - (a.current / a.goal) || a.goal - b.goal)
        .slice(0, 3);

    return (
        <section className="badge-system" aria-labelledby="badge-system-title">
            <Confetti active={Boolean(justEarned)} />

            <div className="badge-header">
                <h2 className="progress-card-title" id="badge-system-title">Achievements</h2>
                <span className="badge-progress">{earnedCount} of {totalCount} earned</span>
            </div>

            {justEarned && (
                <div className="badge-toast animate-slide-up" role="status">
                    Badge unlocked: <strong>{BADGE_DEFINITIONS.find(b => b.id === justEarned)?.name}</strong>
                </div>
            )}

            {earnedBadges.length > 0 && (
                <ul className="badge-earned-row" aria-label="Earned badges">
                    {earnedBadges.map((badge) => {
                        const Icon = badge.icon;
                        return (
                            <li key={badge.id} className="badge-earned" title={badge.description}>
                                <span className="badge-icon is-earned"><Icon size={20} aria-hidden="true" /></span>
                                <span className="badge-earned-name">{badge.name}</span>
                            </li>
                        );
                    })}
                </ul>
            )}

            {nextUp.length > 0 && (
                <div className="badge-next">
                    <h3 className="badge-next-title">Next up</h3>
                    <ul className="badge-next-list">
                        {nextUp.map((badge) => {
                            const Icon = badge.icon;
                            return (
                                <li key={badge.id} className="badge-next-item">
                                    <span className="badge-icon"><Icon size={18} aria-hidden="true" /></span>
                                    <span className="badge-next-main">
                                        <span className="badge-name">{badge.name}</span>
                                        <span className="badge-desc">{badge.description}</span>
                                        <span className="badge-next-track" aria-hidden="true">
                                            <span style={{ transform: `scaleX(${badge.current / badge.goal})` }} />
                                        </span>
                                    </span>
                                    <span className="badge-next-count">{badge.current} / {badge.goal}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            <button
                type="button"
                className="btn btn-ghost btn-sm badge-toggle"
                aria-expanded={showAll}
                aria-controls="badge-all-grid"
                onClick={() => setShowAll((value) => !value)}
            >
                {showAll ? 'Hide all achievements' : `See all ${totalCount} achievements`}
                <ChevronDown size={16} aria-hidden="true" className={showAll ? 'is-flipped' : ''} />
            </button>

            {showAll && (
                <div className="badge-grid" id="badge-all-grid">
                    {BADGE_DEFINITIONS.map(badge => {
                        const isEarned = earned.includes(badge.id);
                        const Icon = badge.icon;

                        return (
                            <div
                                key={badge.id}
                                className={`badge-card ${isEarned ? 'earned' : 'locked'}`}
                            >
                                <div className={`badge-icon ${isEarned ? 'is-earned' : ''}`}>
                                    {isEarned ? <Icon size={22} aria-hidden="true" /> : <Lock size={18} aria-hidden="true" />}
                                </div>
                                <div className="achievement-info">
                                    <div className="badge-name">{badge.name}</div>
                                    <div className="badge-desc">{badge.description}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}
