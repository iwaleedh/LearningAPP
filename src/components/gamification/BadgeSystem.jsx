import { useState, useEffect, useMemo } from 'react';
import { Trophy, Star, Flame, BookOpen, Target, Zap, Crown, Award, Lock } from 'lucide-react';
import { getTotalReadCount, computeStudyStreak } from '../../hooks/useNoteReadStatus.js';
import { getExercisesDone, getPapersViewed, subscribeToActivityUpdates } from '../../services/activityStore.js';
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
        description: 'Visited 3 different pages.',
        icon: BookOpen,
        color: '#60a5fa',
        gradient: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
        criteria: (stats) => stats.pagesVisited >= 3,
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
        criteria: (stats) => stats.fastCompletions >= 1,
    },
];

const EARNED_KEY = 'lt_badge_earned';

function loadEarned() {
    try {
        const raw = localStorage.getItem(EARNED_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveEarned(ids) {
    try {
        localStorage.setItem(EARNED_KEY, JSON.stringify(ids));
    } catch { /* ignore */ }
}

function buildLiveStats(earned) {
    const notesRead = getTotalReadCount();
    return {
        logins: 1,
        pagesVisited: notesRead > 0 ? 5 : 1,
        exercisesCompleted: getExercisesDone(),
        currentStreak: computeStudyStreak(),
        perfectScores: 0,
        papersCompleted: getPapersViewed(),
        fastCompletions: 0,
        notesRead,
        badgesEarned: earned,
    };
}

function getInitialState() {
    const earned = [...new Set(loadEarned())];
    const stats = buildLiveStats(earned);

    const newBadges = BADGE_DEFINITIONS
        .filter(b => !earned.includes(b.id) && b.criteria(stats))
        .map(b => b.id);

    if (newBadges.length > 0) {
        const allEarned = [...earned, ...newBadges];
        saveEarned(allEarned);
        return { stats: { ...stats, badgesEarned: allEarned }, justEarned: newBadges[0] };
    }

    return { stats, justEarned: null };
}

export default function BadgeSystem() {
    const [state, setState] = useState(getInitialState);
    const { stats, justEarned } = state;

    useEffect(() => {
        return subscribeToActivityUpdates(() => {
            setState((prev) => {
                const earned = [...new Set(prev.stats?.badgesEarned || loadEarned())];
                const nextStats = buildLiveStats(earned);
                const newBadges = BADGE_DEFINITIONS
                    .filter((badge) => !earned.includes(badge.id) && badge.criteria(nextStats))
                    .map((badge) => badge.id);

                if (newBadges.length === 0) {
                    return {
                        stats: nextStats,
                        justEarned: prev.justEarned,
                    };
                }

                const allEarned = [...earned, ...newBadges];
                saveEarned(allEarned);
                return {
                    stats: { ...nextStats, badgesEarned: allEarned },
                    justEarned: newBadges[0],
                };
            });
        });
    }, []);

    useEffect(() => {
        if (!justEarned) return undefined;
        const id = setTimeout(() => {
            setState(prev => ({ ...prev, justEarned: null }));
        }, 3000);
        return () => clearTimeout(id);
    }, [justEarned]);

    const earnedCount = stats.badgesEarned.length;
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
                    const earned = stats.badgesEarned.includes(badge.id);
                    const Icon = badge.icon;

                    return (
                        <div
                            key={badge.id}
                            className={`badge-card ${earned ? 'earned' : 'locked'}`}
                        >
                            <div
                                className="badge-icon"
                                style={{
                                    background: earned ? badge.gradient : 'var(--color-bg-tertiary)',
                                }}
                            >
                                {earned ? <Icon size={24} color="white" /> : <Lock size={18} />}
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
