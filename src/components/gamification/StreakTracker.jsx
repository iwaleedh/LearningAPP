import { useMemo } from 'react';
import { Flame } from 'lucide-react';
import {
    getActivityByDate,
    computeStudyStreak,
    computeLongestStreak,
} from '../../hooks/useNoteReadStatus.js';
import { useActivityRefresh } from '../../hooks/useActivityRefresh.js';
import './Gamification.css';

export default function StreakTracker() {
    const activityVersion = useActivityRefresh();
    const heatmapData = useMemo(() => {
        void activityVersion;
        const activityMap = getActivityByDate();
        const days = [];
        const today = new Date();

        for (let i = 83; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().slice(0, 10);
            const count = activityMap[dateStr] || 0;
            const intensity = count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : 3;
            days.push({
                date: dateStr,
                day: date.getDay(),
                count,
                intensity,
                label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            });
        }
        return days;
    }, [activityVersion]);

    const currentStreak = useMemo(() => {
        void activityVersion;
        return computeStudyStreak();
    }, [activityVersion]);
    const longestStreak = useMemo(() => {
        void activityVersion;
        return computeLongestStreak();
    }, [activityVersion]);
    const totalActiveDays = heatmapData.filter(d => d.intensity > 0).length;

    const weeks = useMemo(() => {
        const w = [];
        for (let i = 0; i < heatmapData.length; i += 7) {
            w.push(heatmapData.slice(i, i + 7));
        }
        return w;
    }, [heatmapData]);

    const monthLabels = useMemo(() => {
        const labels = [];
        let lastMonth = '';
        weeks.forEach((week, wi) => {
            const month = new Date(week[0].date).toLocaleDateString('en-US', { month: 'short' });
            if (month !== lastMonth) {
                labels.push({ label: month, col: wi });
                lastMonth = month;
            }
        });
        return labels;
    }, [weeks]);

    return (
        <div className="streak-tracker">
            <div className="streak-header">
                <div className="streak-flame">
                    <Flame size={28} className="flame-icon" />
                    <div>
                        <div className="streak-count">{currentStreak}</div>
                        <div className="streak-label">Day Streak</div>
                    </div>
                </div>
                <div className="streak-stats">
                    <div className="streak-stat">
                        <span className="stat-value">{longestStreak}</span>
                        <span className="stat-label">Longest</span>
                    </div>
                    <div className="streak-stat">
                        <span className="stat-value">{totalActiveDays}</span>
                        <span className="stat-label">Active Days</span>
                    </div>
                </div>
            </div>

            <div className="heatmap-container">
                <div className="heatmap-months">
                    {monthLabels.map((m, i) => (
                        <span key={i} style={{ gridColumn: m.col + 2 }}>{m.label}</span>
                    ))}
                </div>

                <div className="heatmap-body">
                    <div className="heatmap-days">
                        <span></span>
                        <span>Mon</span>
                        <span></span>
                        <span>Wed</span>
                        <span></span>
                        <span>Fri</span>
                        <span></span>
                    </div>

                    <div className="heatmap-grid">
                        {weeks.map((week, wi) => (
                            <div key={wi} className="heatmap-col">
                                {week.map((day, di) => (
                                    <div
                                        key={di}
                                        className={`heatmap-cell intensity-${day.intensity}`}
                                        title={`${day.label}: ${day.count > 0 ? `${day.count} study action${day.count === 1 ? '' : 's'}` : 'No activity'}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="heatmap-legend">
                    <span>Less</span>
                    <div className="heatmap-cell intensity-0" />
                    <div className="heatmap-cell intensity-1" />
                    <div className="heatmap-cell intensity-2" />
                    <div className="heatmap-cell intensity-3" />
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}
