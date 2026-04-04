import { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'convex/react';
import { Trophy, Star, Flame, BookOpen, Target, Zap, Crown, Award, Lock } from 'lucide-react';
import { useReadProgressSummary } from '../../hooks/useNoteReadStatus.js';
import { api } from '../../convex-client.js';
import './Gamification.css';

const CONFETTI_COLORS = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#ec4899', '#8b5cf6', '#06b6d4', '#facc15'];

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

const BADGE_DEFINITIONS = [
    {
        id: 'first_login',
        name: 'First Login',
        description: 'Welcome aboard! Your learning journey begins.',
        icon: Star,
        color: '#facc15',
        gradient: 'linear-gradient(135deg, #facc15, #f59e0b)',
        criteria: (stats) => stats.logins >= 1,
    },
    {
        id: 'explorer',
        name: 'Explorer',
        description: 'Read 3 different notes.',
        icon: BookOpen,
        color: '#60a5fa',
        gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
        // D5: Use real notesRead count — pagesVisited was a hardcoded approximation.
        criteria: (stats) => stats.notesRead >= 3,
    },
    {
        id: 'first_exercise',
        name: 'First Steps',
        description: 'Completed your first exercise.',
        icon: Target,
        color: '#4ade80',
        gradient: 'linear-gradient(135deg, #4ade80, #22c55e)',
        criteria: (stats) => stats.exercisesCompleted >= 1,
    },
    {
        id: 'notes_5',
        name: 'Studious',
        description: 'Read 5 notes.',
        icon: BookOpen,
        color: '#34d399',
        gradient: 'linear-gradient(135deg, #34d399, #059669)',
        criteria: (stats) => stats.notesRead >= 5,
    },
    {
        id: 'notes_25',
        name: 'Bookworm',
        description: 'Read 25 notes.',
        icon: BookOpen,
        color: '#a78bfa',
        gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
        criteria: (stats) => stats.notesRead >= 25,
    },
    {
        id: 'exercises_10',
        name: 'Practice Makes Perfect',
        description: 'Completed 10 exercises.',
        icon: Target,
        color: '#38bdf8',
        gradient: 'linear-gradient(135deg, #38bdf8, #0284c7)',
        criteria: (stats) => stats.exercisesCompleted >= 10,
    },
    {
        id: 'streak_3',
        name: '3-Day Streak',
        description: 'Studied for 3 days in a row!',
        icon: Flame,
        color: '#fb923c',
        gradient: 'linear-gradient(135deg, #fb923c, #f97316)',
        criteria: (stats) => stats.currentStreak >= 3,
    },
    {
        id: 'streak_7',
        name: 'Week Warrior',
        description: '7-day study streak. Unstoppable!',
        icon: Flame,
        color: '#ef4444',
        gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
        criteria: (stats) => stats.currentStreak >= 7,
    },
    {
        id: 'quiz_master',
        name: 'Quiz Master',
        description: 'Scored 100% on an exam.',
        icon: Crown,
        color: '#93c5fd',
        gradient: 'linear-gradient(135deg, #93c5fd, #8b5cf6)',
        // perfectScores not yet tracked in activityStore — badge is achievable
        // once the timed-exam perfect-score tracking is implemented.
        criteria: (stats) => stats.perfectScores >= 1,
    },
    {
        id: 'paper_pro',
        name: 'Paper Pro',
        description: 'Completed 5 past papers.',
        icon: Award,
        color: '#f472b6',
        gradient: 'linear-gradient(135deg, #f472b6, #ec4899)',
        criteria: (stats) => stats.papersCompleted >= 5,
    },
    {
        id: 'speed_demon',
        name: 'Speed Demon',
        description: 'Finished an exam with over 50% time remaining.',
        icon: Zap,
        color: '#fbbf24',
        gradient: 'linear-gradient(135deg, #fbbf24, #eab308)',
        // fastCompletions not yet tracked in activityStore — badge is achievable
        // once the timed-exam fast-finish tracking is implemented.
        criteria: (stats) => stats.fastCompletions >= 1,
    },
];

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
    const serverMetrics = useQuery(api.badgeMetrics.getMyBadgeMetrics);
    const readProgress = useReadProgressSummary();
    const [justEarned, setJustEarned] = useState(null);

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

    return (
        <div className="badge-system">
            <Confetti active={Boolean(justEarned)} />

            <div className="badge-header">
                <Trophy size={20} />
                <h3>Achievements</h3>
                <span className="badge-progress">{earnedCount}/{totalCount}</span>
            </div>

            {justEarned && (
                <div className="badge-toast animate-slide-up">
                    🎉 Badge Unlocked: <strong>{BADGE_DEFINITIONS.find(b => b.id === justEarned)?.name}</strong>
                </div>
            )}

            <div className="badge-grid">
                {BADGE_DEFINITIONS.map(badge => {
                    const isEarned = earned.includes(badge.id);
                    const Icon = badge.icon;

                    return (
                        <div
                            key={badge.id}
                            className={`badge-card ${isEarned ? 'earned' : 'locked'}`}
                        >
                            <div
                                className="badge-icon"
                                style={{
                                    background: isEarned ? badge.gradient : 'var(--color-bg-tertiary)',
                                }}
                            >
                                {isEarned ? <Icon size={24} color="white" /> : <Lock size={18} />}
                            </div>
                            <div className="badge-info">
                                <div className="badge-name">{badge.name}</div>
                                <div className="badge-desc">{badge.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
