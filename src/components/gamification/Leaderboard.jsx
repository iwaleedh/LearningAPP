import { useEffect, useMemo, useState } from 'react';
import { Star, BookOpen, Target, FileText, Flame, Medal } from 'lucide-react';
import { useReadProgressSummary } from '../../hooks/useNoteReadStatus.js';
import { useActivityRefresh } from '../../hooks/useActivityRefresh.js';
import { api, callQuery, getClient } from '../../convex-client.js';
import './Gamification.css';

const LEVELS = [
    { level: 1, name: 'Beginner',  min: 0    },
    { level: 2, name: 'Student',   min: 100  },
    { level: 3, name: 'Learner',   min: 250  },
    { level: 4, name: 'Scholar',   min: 500  },
    { level: 5, name: 'Expert',    min: 1000 },
    { level: 6, name: 'Master',    min: 2000 },
    { level: 7, name: 'Champion',  min: 4000 },
];

function getLevel(xp) {
    let result = LEVELS[0];
    for (const l of LEVELS) {
        if (xp >= l.min) result = l;
    }
    return result;
}

export default function Leaderboard() {
    const activityVersion = useActivityRefresh();
    const readProgress = useReadProgressSummary();
    const [badgeMetrics, setBadgeMetrics] = useState(null);
    const [leaderboard, setLeaderboard] = useState({ rows: [], currentUserId: null, currentRow: null });
    const [leaderboardState, setLeaderboardState] = useState('idle');

    useEffect(() => {
        let cancelled = false;

        async function loadBadgeMetrics() {
            if (!getClient()) {
                if (!cancelled) {
                    setBadgeMetrics(null);
                }
                return;
            }

            try {
                const nextBadgeMetrics = await callQuery(api.badgeMetrics.getMyBadgeMetrics);
                if (!cancelled) {
                    setBadgeMetrics(nextBadgeMetrics || null);
                }
            } catch {
                if (!cancelled) {
                    setBadgeMetrics(null);
                }
            }
        }

        void loadBadgeMetrics();

        return () => {
            cancelled = true;
        };
    }, [activityVersion]);

    const stats = useMemo(() => {
        void activityVersion;
        const notesRead = readProgress.totalRead;
        const exercisesDone = badgeMetrics?.exercisesCompleted || 0;
        const papersViewed = badgeMetrics?.papersCompleted || 0;
        const streak = readProgress.currentStreak;
        const xp = notesRead * 10 + exercisesDone * 5 + papersViewed * 3 + streak * 20;
        return { notesRead, exercisesDone, papersViewed, streak, xp };
    }, [activityVersion, badgeMetrics, readProgress]);

    useEffect(() => {
        let cancelled = false;

        async function loadLeaderboard() {
            const client = getClient();
            if (!client) {
                if (!cancelled) {
                    setLeaderboardState('offline');
                }
                return;
            }

            try {
                setLeaderboardState('loading');
                const result = await callQuery(api.leaderboard.getStudentLeaderboard, {});
                if (cancelled) return;
                setLeaderboard(result || { rows: [], currentUserId: null, currentRow: null });
                setLeaderboardState('ready');
            } catch {
                if (!cancelled) {
                    setLeaderboardState('error');
                }
            }
        }

        void loadLeaderboard();

        return () => {
            cancelled = true;
        };
    }, [activityVersion]);

    const currentLevel = getLevel(stats.xp);
    const nextLevel = LEVELS.find(l => l.level === currentLevel.level + 1);
    const xpInLevel = stats.xp - currentLevel.min;
    const xpRange = nextLevel ? nextLevel.min - currentLevel.min : 1;
    const levelProgress = nextLevel ? Math.min(100, Math.round((xpInLevel / xpRange) * 100)) : 100;
    const currentRowOutsideTop = leaderboard.currentRow
        && !leaderboard.rows.some((row) => row.userId === leaderboard.currentRow.userId);

    const renderRow = (row) => (
        <li
            key={row.userId}
            className={`lb-row ${row.userId === leaderboard.currentUserId ? 'lb-row-self' : ''}`}
        >
            <div className="lb-rank">
                {row.rank <= 3
                    ? <Medal size={18} className={`rank-${['gold', 'silver', 'bronze'][row.rank - 1]}`} aria-label={`Rank ${row.rank}`} />
                    : <span className="rank-number">#{row.rank}</span>}
            </div>
            <div className="lb-avatar" aria-hidden="true">{row.avatar}</div>
            <div className="lb-name">
                <strong>{row.name}</strong>
                <div className="lb-meta">{row.mastery}% mastery · {row.streak} day streak · {row.notesSaved} notes</div>
            </div>
            <div className="lb-score"><strong>{row.score}</strong><span> pts</span></div>
        </li>
    );

    return (
        <section className="leaderboard" aria-labelledby="leaderboard-title">
            <div className="leaderboard-header">
                <h2 className="progress-card-title" id="leaderboard-title">Level and rank</h2>
            </div>

            <div className="xp-level-card">
                <div className="xp-level-badge" aria-hidden="true">
                    <Star size={18} />
                    <span>{currentLevel.level}</span>
                </div>
                <div className="xp-level-info">
                    <div className="xp-level-name">Level {currentLevel.level} · {currentLevel.name}</div>
                    <div className="xp-bar-wrap" aria-hidden="true">
                        <div className="xp-bar-fill" style={{ transform: `scaleX(${levelProgress / 100})` }} />
                    </div>
                    <div className="xp-bar-label">
                        {stats.xp} XP
                        {nextLevel ? ` · ${nextLevel.min - stats.xp} XP to ${nextLevel.name}` : ' · Top level reached'}
                    </div>
                </div>
            </div>

            <p className="xp-explainer">
                <span><BookOpen size={14} aria-hidden="true" /> Note +10</span>
                <span><Target size={14} aria-hidden="true" /> Exercise +5</span>
                <span><FileText size={14} aria-hidden="true" /> Paper +3</span>
                <span><Flame size={14} aria-hidden="true" /> Streak day +20</span>
            </p>

            {leaderboardState === 'ready' && leaderboard.rows.length > 0 ? (
                <ol className="leaderboard-table">
                    {leaderboard.rows.map(renderRow)}
                    {currentRowOutsideTop && renderRow(leaderboard.currentRow)}
                </ol>
            ) : (
                <p className="leaderboard-coming-soon">
                    {leaderboardState === 'loading'
                        ? 'Loading rankings…'
                        : 'Rankings appear here once classmates’ progress is shared.'}
                </p>
            )}
        </section>
    );
}
