import { Target, BookOpen } from 'lucide-react';
import BadgeSystem from '../components/gamification/BadgeSystem';
import StreakTracker from '../components/gamification/StreakTracker';
import Leaderboard from '../components/gamification/Leaderboard';
import { subjectNoteCounts } from '../data/syllabusIndex.js';
import { getReadNoteIds, getTotalReadCount } from '../hooks/useNoteReadStatus';
import './Pages.css';

const SUBJECTS = [
    { key: 'chemistry', label: 'Chemistry' },
    { key: 'biology', label: 'Biology' },
    { key: 'physics', label: 'Physics' },
    { key: 'mathematics', label: 'Mathematics' },
    { key: 'economics', label: 'Economics' },
    { key: 'business', label: 'Business' },
    { key: 'accounting', label: 'Accounting' },
];

function buildChapterProgress(readIds) {
    return SUBJECTS.map(({ key, label }) => {
        const total = subjectNoteCounts[key] || 0;
        const read = [...readIds].filter(id => id.startsWith(`note:${key}:`)).length;
        return { name: label, progress: total > 0 ? Math.round((read / total) * 100) : 0 };
    });
}

export default function ProgressPage() {
    const readIds = getReadNoteIds();
    const totalRead = getTotalReadCount();
    const chapterProgress = buildChapterProgress(readIds);

    const overallProgress = chapterProgress.length > 0
        ? Math.round(chapterProgress.reduce((sum, c) => sum + c.progress, 0) / chapterProgress.length)
        : 0;

    const circumference = 2 * Math.PI * 60;
    const strokeDashoffset = circumference - (overallProgress / 100) * circumference;

    return (
        <div className="animate-fade-in" style={{ maxWidth: '960px' }}>
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Your Progress</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                Track your learning journey, study streaks, and achievements
            </p>

            <div className="progress-overview">
                {/* Ring Chart */}
                <div className="card progress-ring-card">
                    <svg className="progress-ring" viewBox="0 0 140 140">
                        <circle
                            cx="70" cy="70" r="60"
                            fill="none"
                            stroke="var(--color-bg-tertiary)"
                            strokeWidth="10"
                        />
                        <circle
                            cx="70" cy="70" r="60"
                            fill="none"
                            stroke="var(--color-primary)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            className="progress-ring-circle"
                            transform="rotate(-90 70 70)"
                        />
                        <text x="70" y="65" textAnchor="middle" className="progress-ring-text"
                            fill="var(--color-text)" fontWeight="700" fontSize="28"
                        >
                            {overallProgress}%
                        </text>
                        <text x="70" y="85" textAnchor="middle"
                            fill="var(--color-text-tertiary)" fontSize="11"
                        >
                            Overall
                        </text>
                    </svg>

                    {/* Quick stats */}
                    <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
                        <span><BookOpen size={14} /> {totalRead} notes read</span>
                        <span><Target size={14} /> {chapterProgress.filter(c => c.progress > 0).length} subjects started</span>
                    </div>
                </div>

                {/* Chapter Progress */}
                <div className="card">
                    <h3 style={{ marginBottom: 'var(--space-4)' }}>Chapter Progress</h3>
                    <div className="chapter-progress-list">
                        {chapterProgress.map((ch, i) => (
                            <div key={i} className="chapter-progress-item">
                                <span className="chapter-progress-name">{ch.name}</span>
                                <div className="chapter-progress-bar progress-bar">
                                    <div
                                        className="progress-bar-fill"
                                        style={{ width: `${ch.progress}%` }}
                                    />
                                </div>
                                <span className="chapter-progress-pct">{ch.progress}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Study Streak Heatmap */}
            <div style={{ marginTop: 'var(--space-6)' }}>
                <StreakTracker />
            </div>

            {/* Badges */}
            <div style={{ marginTop: 'var(--space-6)' }}>
                <BadgeSystem />
            </div>

            {/* Leaderboard */}
            <div style={{ marginTop: 'var(--space-6)' }}>
                <Leaderboard />
            </div>
        </div>
    );
}
