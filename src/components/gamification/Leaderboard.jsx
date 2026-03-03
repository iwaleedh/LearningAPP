import { useState } from 'react';
import { Trophy, Medal, Crown, ChevronUp, ChevronDown, Minus } from 'lucide-react';
import './Gamification.css';

const LEADERBOARD_DATA = [
    { rank: 1, name: 'Sarah Ahmed', avatar: '👩‍🔬', score: 2450, papers: 18, streak: 12, trend: 'up' },
    { rank: 2, name: 'Ali Hassan', avatar: '👨‍🎓', score: 2280, papers: 16, streak: 9, trend: 'up' },
    { rank: 3, name: 'Fatima Noor', avatar: '👩‍💻', score: 2150, papers: 15, streak: 7, trend: 'same' },
    { rank: 4, name: 'Omar Khalid', avatar: '🧑‍🔬', score: 1920, papers: 13, streak: 5, trend: 'down' },
    { rank: 5, name: 'Aisha Latheef', avatar: '👩‍🎓', score: 1850, papers: 12, streak: 4, trend: 'up' },
    { rank: 6, name: 'Ibrahim Waleed', avatar: '👨‍💻', score: 1740, papers: 11, streak: 3, trend: 'up' },
    { rank: 7, name: 'Mariam Didi', avatar: '👩‍🔬', score: 1580, papers: 9, streak: 2, trend: 'down' },
    { rank: 8, name: 'Ahmed Riyaz', avatar: '🧑‍🎓', score: 1420, papers: 8, streak: 1, trend: 'same' },
];

export default function Leaderboard() {
    const [activeTab, setActiveTab] = useState('score');

    const sorted = [...LEADERBOARD_DATA].sort((a, b) => {
        if (activeTab === 'score') return b.score - a.score;
        if (activeTab === 'papers') return b.papers - a.papers;
        return b.streak - a.streak;
    }).map((item, i) => ({ ...item, rank: i + 1 }));

    const getRankIcon = (rank) => {
        if (rank === 1) return <Crown size={18} className="rank-gold" />;
        if (rank === 2) return <Medal size={18} className="rank-silver" />;
        if (rank === 3) return <Medal size={18} className="rank-bronze" />;
        return <span className="rank-number">{rank}</span>;
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <ChevronUp size={14} className="trend-up" />;
        if (trend === 'down') return <ChevronDown size={14} className="trend-down" />;
        return <Minus size={14} className="trend-same" />;
    };

    return (
        <div className="leaderboard">
            <div className="leaderboard-header">
                <Trophy size={20} />
                <h3>Hall of Fame</h3>
            </div>

            <div className="leaderboard-tabs">
                {['score', 'papers', 'streak'].map(tab => (
                    <button
                        key={tab}
                        className={`lb-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === 'score' ? '🏆 Score' : tab === 'papers' ? '📝 Papers' : '🔥 Streak'}
                    </button>
                ))}
            </div>

            {/* Top 3 Podium */}
            <div className="podium">
                {sorted.slice(0, 3).map((player, i) => (
                    <div key={player.name} className={`podium-place place-${i + 1}`}>
                        <div className="podium-avatar">{player.avatar}</div>
                        <div className="podium-name">{player.name.split(' ')[0]}</div>
                        <div className="podium-score">
                            {activeTab === 'score' ? player.score : activeTab === 'papers' ? `${player.papers} papers` : `${player.streak} days`}
                        </div>
                        <div className="podium-bar">
                            {getRankIcon(i + 1)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Full Table */}
            <div className="leaderboard-table">
                {sorted.map(player => (
                    <div
                        key={player.name}
                        className={`lb-row ${player.name === 'Ibrahim Waleed' ? 'lb-row-self' : ''}`}
                    >
                        <div className="lb-rank">{getRankIcon(player.rank)}</div>
                        <div className="lb-avatar">{player.avatar}</div>
                        <div className="lb-name">
                            {player.name}
                            {player.name === 'Ibrahim Waleed' && <span className="lb-you">You</span>}
                        </div>
                        <div className="lb-score">
                            {activeTab === 'score' ? player.score.toLocaleString() : activeTab === 'papers' ? player.papers : player.streak}
                        </div>
                        <div className="lb-trend">{getTrendIcon(player.trend)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
