import { useMemo } from 'react';
import { Flame } from 'lucide-react';
import { useReadProgressSummary } from '../../hooks/useNoteReadStatus.js';
import './Gamification.css';

export default function StreakTracker() {
    const readProgress = useReadProgressSummary();
    // 12 full weeks, Sunday-first, ending with the current week so the Mon/Wed/Fri rows are true.
    const heatmapData = useMemo(() => {
        const activityMap = readProgress.activityByDate;
        const days = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const start = new Date(today);
        start.setDate(today.getDate() - today.getDay() - 7 * 11);

        for (let i = 0; i < 84; i++) {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            const isFuture = date > today;
            const dateStr = date.toLocaleDateString('en-CA'); // local YYYY-MM-DD (toISOString is UTC and shifts days)
            const count = isFuture ? 0 : activityMap[dateStr] || 0;
            const intensity = count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : 3;
            days.push({
                date: dateStr,
                month: date.toLocaleDateString('en-US', { month: 'short' }),
                isFuture,
                count,
                intensity,
                label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            });
        }
        return days;
    }, [readProgress]);

    const currentStreak = readProgress.currentStreak;
    const longestStreak = readProgress.longestStreak;
    const totalActiveDays = heatmapData.filter(d => d.intensity > 0).length;

    const weeks = useMemo(() => {
        const w = [];
        for (let i = 0; i < heatmapData.length; i += 7) {
            w.push(heatmapData.slice(i, i + 7));
        }
        return w;
    }, [heatmapData]);

    // A week column is labelled when it contains the first day of a month (or is the first column).
    const monthLabelByWeek = useMemo(() => {
        const labels = weeks.map((week) => week.find((day) => day.date.endsWith('-01'))?.month || '');
        // Label the first column too, unless a month starts within the next two weeks (labels would collide)
        if (!labels[0] && !labels[1] && !labels[2]) labels[0] = weeks[0][0].month;
        return labels;
    }, [weeks]);

    return (
        <section className="streak-tracker" aria-labelledby="streak-tracker-title">
            <div className="streak-header">
                <h2 className="progress-card-title" id="streak-tracker-title">Study streak</h2>
                <div className="streak-flame">
                    <Flame size={22} className="flame-icon" aria-hidden="true" />
                    <span className="streak-count">{currentStreak}</span>
                    <span className="streak-label">{currentStreak === 1 ? 'day' : 'days'} in a row</span>
                </div>
                <p className="streak-substats">
                    Longest {longestStreak} {longestStreak === 1 ? 'day' : 'days'} · {totalActiveDays} active {totalActiveDays === 1 ? 'day' : 'days'} in 12 weeks
                </p>
            </div>

            <div className="heatmap-container">
                <div className="heatmap-body">
                    <div className="heatmap-days">
                        <span className="heatmap-month-spacer" aria-hidden="true"></span>
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
                                <span className="heatmap-month" aria-hidden="true">{monthLabelByWeek[wi]}</span>
                                {week.map((day, di) => (
                                    <div
                                        key={di}
                                        className={`heatmap-cell intensity-${day.intensity}${day.isFuture ? ' is-future' : ''}`}
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
        </section>
    );
}
