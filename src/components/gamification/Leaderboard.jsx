import { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'convex/react';
import { Trophy, Star, TrendingUp, BookOpen, Target, FileText, Flame, Medal } from 'lucide-react';
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
    const badgeMetrics = useQuery(api.badgeMetrics.getMyBadgeMetrics);
    const readProgress = useReadProgressSummary();
    const [leaderboard, setLeaderboard] = useState({ rows: [], currentUserId: null, currentRow: null });
    const [leaderboardState, setLeaderboardState] = useState('idle');

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
    const topThree = [leaderboard.rows[1], leaderboard.rows[0], leaderboard.rows[2]].filter(Boolean);
    const currentRowOutsideTop = leaderboard.currentRow
        && !leaderboard.rows.some((row) => row.userId === leaderboard.currentRow.userId);

    return (
        <div className="leaderboard">
            <div className="leaderboard-header">
                <Trophy size={20} />
                <h3>Your Rank</h3>
            </div>

            <div className="xp-level-card">
                <div className="xp-level-badge">
                    <Star size={20} />
                    <span>Lvl {currentLevel.level}</span>
                </div>
                <div className="xp-level-info">
                    <div className="xp-level-name">{currentLevel.name}</div>
                    <div className="xp-bar-wrap">
                        <div className="xp-bar-fill" style={{ width: `${levelProgress}%` }} />
                    </div>
                    <div className="xp-bar-label">
                        {stats.xp} XP
                        {nextLevel
                            ? ` / ${nextLevel.min} XP for Level ${nextLevel.level}`
                            : ' — Max Level!'}
                    </div>
                </div>
            </div>

            <div className="xp-stats-grid">
                <div className="xp-stat-item">
                    <div className="xp-stat-icon xp-stat-icon--notes">
                        <BookOpen size={16} />
                    </div>
                    <div className="xp-stat-val">{stats.notesRead}</div>
                    <div className="xp-stat-label">
                        Notes
                        <span className="xp-earn">+{stats.notesRead * 10} XP</span>
                    </div>
                </div>
                <div className="xp-stat-item">
                    <div className="xp-stat-icon xp-stat-icon--exercises">
                        <Target size={16} />
                    </div>
                    <div className="xp-stat-val">{stats.exercisesDone}</div>
                    <div className="xp-stat-label">
                        Exercises
                        <span className="xp-earn">+{stats.exercisesDone * 5} XP</span>
                    </div>
                </div>
                <div className="xp-stat-item">
                    <div className="xp-stat-icon xp-stat-icon--papers">
                        <FileText size={16} />
                    </div>
                    <div className="xp-stat-val">{stats.papersViewed}</div>
                    <div className="xp-stat-label">
                        Papers
                        <span className="xp-earn">+{stats.papersViewed * 3} XP</span>
                    </div>
                </div>
                <div className="xp-stat-item">
                    <div className="xp-stat-icon xp-stat-icon--streak">
                        <Flame size={16} />
                    </div>
                    <div className="xp-stat-val">{stats.streak}</div>
                    <div className="xp-stat-label">
                        Streak
                        <span className="xp-earn">+{stats.streak * 20} XP</span>
                    </div>
                </div>
            </div>

            {nextLevel && (
                <div className="xp-next-level">
                    <TrendingUp size={14} />
                    <span>{nextLevel.min - stats.xp} XP to reach <strong>{nextLevel.name}</strong></span>
                </div>
            )}

            {leaderboardState === 'ready' && leaderboard.rows.length > 0 ? (
                <>
                    <div className="podium">
                        {topThree.map((row) => (
                            <div key={row.userId} className={`podium-place place-${row.rank}`}>
                                <div className="podium-avatar">{row.avatar}</div>
                                <div className="podium-name">{row.name}</div>
                                <div className="podium-score">{row.score} pts</div>
                                <div className="podium-bar">
                                    <span>#{row.rank}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="leaderboard-table">
                        {leaderboard.rows.map((row) => (
                            <div
                                key={row.userId}
                                className={`lb-row ${row.userId === leaderboard.currentUserId ? 'lb-row-self' : ''}`}
                            >
                                <div className="lb-rank">
                                    {row.rank === 1 ? <Medal size={18} className="rank-gold" /> :
                                        row.rank === 2 ? <Medal size={18} className="rank-silver" /> :
                                            row.rank === 3 ? <Medal size={18} className="rank-bronze" /> :
                                                <span className="rank-number">#{row.rank}</span>}
                                </div>
                                <div className="lb-avatar">{row.avatar}</div>
                                <div className="lb-name">
                                    <div>
                                        <strong>{row.name}</strong>
                                        <div className="lb-meta">{row.mastery}% mastery • {row.streak} day streak • {row.notesSaved} notes • {row.attempts || 0} attempts</div>
                                    </div>
                                </div>
                                <div className="lb-score">
                                    <strong>{row.score}</strong>
                                </div>
                            </div>
                        ))}

                        {currentRowOutsideTop && (
                            <div className="lb-row lb-row-self">
                                <div className="lb-rank">
                                    <span className="rank-number">#{leaderboard.currentRow.rank}</span>
                                </div>
                                <div className="lb-avatar">{leaderboard.currentRow.avatar}</div>
                                <div className="lb-name">
                                    <div>
                                        <strong>{leaderboard.currentRow.name}</strong>
                                        <div className="lb-meta">{leaderboard.currentRow.mastery}% mastery • {leaderboard.currentRow.streak} day streak • {leaderboard.currentRow.notesSaved} notes • {leaderboard.currentRow.attempts || 0} attempts</div>
                                    </div>
                                </div>
                                <div className="lb-score">
                                    <strong>{leaderboard.currentRow.score}</strong>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="leaderboard-coming-soon">
                    <Trophy size={36} className="lb-coming-icon" />
                    <p>{leaderboardState === 'loading' ? 'Loading leaderboard...' : 'Leaderboard will appear once shared student data is available.'}</p>
                    <span>Your personal XP card above is already live.</span>
                </div>
            )}
        </div>
    );
}
