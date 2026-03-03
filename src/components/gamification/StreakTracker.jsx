import { useMemo } from 'react';
import { Flame } from 'lucide-react';
import './Gamification.css';

export default function StreakTracker() {
    // Generate heatmap data for last 12 weeks (84 days)
    const heatmapData = useMemo(() => {
        const days = [];
        const today = new Date();
        // Simulate activity: some days active, some not
        const activePattern = [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1];

        for (let i = 83; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const active = activePattern[83 - i] || 0;
            const deterministicSeed = date.getDate() + date.getMonth() + i;
            const intensity = active ? (deterministicSeed % 2 === 0 ? 2 : 1) : 0;
            days.push({
                date: date.toISOString().split('T')[0],
                day: date.getDay(),
                intensity,
                label: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            });
        }
        return days;
    }, []);

    // Calculate streak
    const currentStreak = useMemo(() => {
        let streak = 0;
        for (let i = heatmapData.length - 1; i >= 0; i--) {
            if (heatmapData[i].intensity > 0) streak++;
            else break;
        }
        return streak;
    }, [heatmapData]);

    const longestStreak = 12; // simulated
    const totalActiveDays = heatmapData.filter(d => d.intensity > 0).length;

    // Group by weeks
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
            const firstDay = week[0];
            const month = new Date(firstDay.date).toLocaleDateString('en-US', { month: 'short' });
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
                {/* Month labels */}
                <div className="heatmap-months">
                    {monthLabels.map((m, i) => (
                        <span key={i} style={{ gridColumn: m.col + 2 }}>{m.label}</span>
                    ))}
                </div>

                <div className="heatmap-body">
                    {/* Day labels */}
                    <div className="heatmap-days">
                        <span></span>
                        <span>Mon</span>
                        <span></span>
                        <span>Wed</span>
                        <span></span>
                        <span>Fri</span>
                        <span></span>
                    </div>

                    {/* Grid */}
                    <div className="heatmap-grid">
                        {weeks.map((week, wi) => (
                            <div key={wi} className="heatmap-col">
                                {week.map((day, di) => (
                                    <div
                                        key={di}
                                        className={`heatmap-cell intensity-${day.intensity}`}
                                        title={`${day.label}: ${day.intensity > 0 ? 'Active' : 'No activity'}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="heatmap-legend">
                    <span>Less</span>
                    <div className="heatmap-cell intensity-0" />
                    <div className="heatmap-cell intensity-1" />
                    <div className="heatmap-cell intensity-2" />
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}
