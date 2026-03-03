import { useState, useEffect } from 'react';
import { Trophy, Star, Flame, BookOpen, Target, Zap, Crown, Award, Lock } from 'lucide-react';
import './Gamification.css';

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
        color: '#a78bfa',
        gradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
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

export default function BadgeSystem() {
    const getDefaultStats = () => ({
        logins: 1,
        pagesVisited: 4,
        exercisesCompleted: 2,
        currentStreak: 1,
        perfectScores: 0,
        papersCompleted: 1,
        fastCompletions: 0,
        badgesEarned: ['first_login', 'explorer'],
    });

    const getInitialState = () => {
        let baseStats;
        try {
            const saved = localStorage.getItem('gamification_stats');
            baseStats = saved ? JSON.parse(saved) : getDefaultStats();
        } catch {
            baseStats = getDefaultStats();
        }

        const newBadges = [];
        BADGE_DEFINITIONS.forEach(badge => {
            if (!baseStats.badgesEarned.includes(badge.id) && badge.criteria(baseStats)) {
                newBadges.push(badge.id);
            }
        });

        if (newBadges.length > 0) {
            const updated = {
                ...baseStats,
                badgesEarned: [...baseStats.badgesEarned, ...newBadges],
            };
            try {
                localStorage.setItem('gamification_stats', JSON.stringify(updated));
            } catch {
                // Ignore storage sync failures for non-critical gamification data.
            }
            return { stats: updated, justEarned: newBadges[0] };
        }

        return { stats: baseStats, justEarned: null };
    };

    const [state, setState] = useState(getInitialState);
    const { stats, justEarned } = state;

    useEffect(() => {
        if (!justEarned) return undefined;
        const timeoutId = setTimeout(() => {
            setState((prev) => ({ ...prev, justEarned: null }));
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [justEarned]);

    const earnedCount = stats.badgesEarned.length;
    const totalCount = BADGE_DEFINITIONS.length;

    return (
        <div className="badge-system">
            <div className="badge-header">
                <Trophy size={20} />
                <h3>Achievements</h3>
                <span className="badge-progress">{earnedCount}/{totalCount}</span>
            </div>

            {/* Toast */}
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
