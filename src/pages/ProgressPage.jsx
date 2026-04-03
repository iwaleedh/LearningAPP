import { Target, BookOpen, TrendingUp, Award } from 'lucide-react';
import BadgeSystem from '../components/gamification/BadgeSystem';
import StreakTracker from '../components/gamification/StreakTracker';
import Leaderboard from '../components/gamification/Leaderboard';
import { subjectNoteCounts } from '../data/syllabusIndex.js';
import { getReadNoteIds, getTotalReadCount } from '../hooks/useNoteReadStatus';
import { useActivityRefresh } from '../hooks/useActivityRefresh.js';
import './Pages.css';

const SUBJECTS = [
    { key: 'chemistry',            label: 'Chemistry',               group: 'alevel' },
    { key: 'biology',              label: 'Biology',                  group: 'alevel' },
    { key: 'physics',              label: 'Physics',                  group: 'alevel' },
    { key: 'mathematics',          label: 'Mathematics',              group: 'alevel' },
    { key: 'economics',            label: 'Economics',                group: 'alevel' },
    { key: 'business',             label: 'Business',                 group: 'alevel' },
    { key: 'accounting',           label: 'Accounting',               group: 'alevel' },
    { key: 'cae',                  label: 'CAE (C1 Advanced)',         group: 'alevel' },
    { key: 'cpe',                  label: 'CPE (C2 Proficiency)',      group: 'alevel' },
    { key: 'olevel_biology',       label: 'IGCSE Biology',            group: 'igcse' },
    { key: 'olevel_chemistry',     label: 'IGCSE Chemistry',          group: 'igcse' },
    { key: 'olevel_physics',       label: 'IGCSE Physics',            group: 'igcse' },
    { key: 'olevel_business',      label: 'IGCSE Business',           group: 'igcse' },
    { key: 'olevel_maths_core',    label: 'IGCSE Maths Core',         group: 'igcse' },
    { key: 'olevel_maths_extended',label: 'IGCSE Maths Extended',     group: 'igcse' },
];

function buildChapterProgress(readIds) {
    return SUBJECTS.map(({ key, label, group }) => {
        const total = subjectNoteCounts[key] || 0;
        const read = [...readIds].filter(id => id.startsWith(`note:${key}:`)).length;
        return { name: label, group, read, progress: total > 0 ? Math.round((read / total) * 100) : 0 };
    });
}

export default function ProgressPage() {
    useActivityRefresh();
    const readIds = getReadNoteIds();
    const totalRead = getTotalReadCount();
    const chapterProgress = buildChapterProgress(readIds);

    const startedSubjects = chapterProgress.filter(c => c.read > 0);
    // Average over ALL subjects that have notes — not just started ones.
    // The old approach (averaging only startedSubjects) inflated the % because
    // a subject with 1/1 notes read would count as 100% even if 14 other subjects
    // had 0% completion.
    const subjectsWithContent = chapterProgress.filter(c => (subjectNoteCounts[SUBJECTS.find(s => s.label === c.name)?.key] || 0) > 0);
    const overallProgress = subjectsWithContent.length > 0
        ? Math.round(subjectsWithContent.reduce((sum, c) => sum + c.progress, 0) / subjectsWithContent.length)
        : 0;

    const aLevelProgress = chapterProgress.filter(c => c.group === 'alevel');
    const igcseProgress = chapterProgress.filter(c => c.group === 'igcse');

    const circumference = 2 * Math.PI * 60;
    const strokeDashoffset = circumference - (overallProgress / 100) * circumference;

    return (
        <div className="progress-hub animate-fade-in">
            {/* Bento Header */}
            <div className="progress-page-header">
                <div className="progress-title-group">
                    <div className="progress-subject-icon">
                        <TrendingUp size={28} />
                    </div>
                    <div>
                        <h1 className="progress-page-title">Your Progress</h1>
                        <p className="progress-page-qual">Track your learning journey, study streaks, and achievements</p>
                    </div>
                </div>
                <div className="progress-meta-boxes">
                    <div className="meta-box">
                        <div className="meta-icon meta-icon--notes">
                            <BookOpen size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{totalRead}</strong>
                            <span>Notes Read</span>
                        </div>
                    </div>
                    <div className="meta-box">
                        <div className="meta-icon meta-icon--started">
                            <Target size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{startedSubjects.length}</strong>
                            <span>Subjects Started</span>
                        </div>
                    </div>
                    <div className="meta-box">
                        <div className="meta-icon meta-icon--overall">
                            <Award size={18} />
                        </div>
                        <div className="meta-text">
                            <strong>{overallProgress}%</strong>
                            <span>Overall</span>
                        </div>
                    </div>
                </div>
            </div>

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
                    <div className="progress-ring-stats">
                        <span><BookOpen size={14} /> {totalRead} notes read</span>
                        <span><Target size={14} /> {startedSubjects.length} subjects started</span>
                    </div>
                </div>

                {/* Chapter Progress */}
                <div className="card">
                    <h3 className="progress-chapter-title">Chapter Progress</h3>
                    <div className="chapter-progress-list">
                        <p className="progress-group-label">A Level</p>
                        {aLevelProgress.map((ch, i) => (
                            <div key={i} className="chapter-progress-item">
                                <span className="chapter-progress-name">{ch.name}</span>
                                <div className="chapter-progress-bar progress-bar">
                                    <div className="progress-bar-fill" style={{ width: `${ch.progress}%` }} />
                                </div>
                                <span className="chapter-progress-pct">{ch.progress}%</span>
                            </div>
                        ))}
                        <p className="progress-group-label progress-group-label--spaced">IGCSE / O Level</p>
                        {igcseProgress.map((ch, i) => (
                            <div key={i} className="chapter-progress-item">
                                <span className="chapter-progress-name">{ch.name}</span>
                                <div className="chapter-progress-bar progress-bar">
                                    <div className="progress-bar-fill" style={{ width: `${ch.progress}%` }} />
                                </div>
                                <span className="chapter-progress-pct">{ch.progress}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Study Streak Heatmap */}
            <div className="progress-section">
                <StreakTracker />
            </div>

            {/* Badges */}
            <div className="progress-section">
                <BadgeSystem />
            </div>

            {/* Leaderboard */}
            <div className="progress-section">
                <Leaderboard />
            </div>
        </div>
    );
}
