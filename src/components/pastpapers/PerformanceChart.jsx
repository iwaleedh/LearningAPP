import { useEffect, useRef } from 'react';
import { BarChart3 } from 'lucide-react';
import Chart from 'chart.js/auto';
import { useTheme } from '../../hooks/useTheme.js';
import './PastPapers.css';

export default function PerformanceChart({ attempts }) {
    const { theme } = useTheme();
    const barRef = useRef(null);
    const radarRef = useRef(null);
    const barChartRef = useRef(null);
    const radarChartRef = useRef(null);

    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement);
        const gridColor = rootStyles.getPropertyValue('--chart-grid-color').trim() || 'rgba(148, 163, 184, 0.14)';
        const tickColor = rootStyles.getPropertyValue('--chart-tick-color').trim() || 'rgba(203, 213, 225, 0.72)';
        const primaryColor = rootStyles.getPropertyValue('--color-primary').trim() || '#6366f1';
        const primaryFill = rootStyles.getPropertyValue('--color-primary-200').trim() || 'rgba(99, 102, 241, 0.2)';
        const pointBorder = rootStyles.getPropertyValue('--chart-point-border').trim() || '#ffffff';

        // Bar chart — score over attempts
        if (barRef.current) {
            if (barChartRef.current) barChartRef.current.destroy();
            barChartRef.current = new Chart(barRef.current, {
                type: 'bar',
                data: {
                    labels: attempts.map((a, i) => a.label || `Attempt ${i + 1}`),
                    datasets: [{
                        label: 'Score %',
                        data: attempts.map(a => a.percentage),
                        backgroundColor: attempts.map(a =>
                            a.percentage >= 70 ? 'rgba(16, 185, 129, 0.7)' :
                                a.percentage >= 50 ? 'rgba(245, 158, 11, 0.7)' :
                                    'rgba(239, 68, 68, 0.7)'
                        ),
                        borderRadius: 8,
                        barThickness: 32,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: { color: gridColor },
                            ticks: { color: tickColor, callback: v => v + '%' },
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: tickColor },
                        },
                    },
                },
            });
        }

        // Radar chart — score by topic
        if (radarRef.current && attempts.length > 0) {
            const topicMap = {};
            attempts.forEach(a => {
                if (a.topicScores) {
                    Object.entries(a.topicScores).forEach(([topic, score]) => {
                        if (!topicMap[topic]) topicMap[topic] = [];
                        topicMap[topic].push(score);
                    });
                }
            });

            const topics = Object.keys(topicMap);
            const avgScores = topics.map(t => {
                const scores = topicMap[t];
                return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
            });

            if (radarChartRef.current) radarChartRef.current.destroy();
            if (topics.length >= 3) {
                radarChartRef.current = new Chart(radarRef.current, {
                    type: 'radar',
                    data: {
                        labels: topics,
                        datasets: [{
                            label: 'Average %',
                            data: avgScores,
                            fill: true,
                            backgroundColor: primaryFill,
                            borderColor: primaryColor,
                            pointBackgroundColor: primaryColor,
                            pointBorderColor: pointBorder,
                        }],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                        },
                        scales: {
                            r: {
                                beginAtZero: true,
                                max: 100,
                                grid: { color: gridColor },
                                angleLines: { color: gridColor },
                                pointLabels: { color: tickColor, font: { size: 11 } },
                                ticks: { display: false },
                            },
                        },
                    },
                });
            }
        }

        return () => {
            if (barChartRef.current) barChartRef.current.destroy();
            if (radarChartRef.current) radarChartRef.current.destroy();
        };
    }, [attempts, theme]);

    if (attempts.length === 0) {
        return (
            <div className="perf-empty card">
                <BarChart3 size={32} />
                <p>Complete a paper to see your performance analytics</p>
            </div>
        );
    }

    const latest = attempts[attempts.length - 1];
    const best = Math.max(...attempts.map(a => a.percentage));
    const avg = Math.round(attempts.reduce((s, a) => s + a.percentage, 0) / attempts.length);

    return (
        <div className="perf-dashboard animate-fade-in">
            <h3 className="perf-title"><BarChart3 size={18} /> Performance Analytics</h3>

            <div className="perf-stats">
                <div className="perf-stat-card">
                    <span className="perf-stat-value">{latest.percentage}%</span>
                    <span className="perf-stat-label">Latest</span>
                </div>
                <div className="perf-stat-card">
                    <span className="perf-stat-value">{best}%</span>
                    <span className="perf-stat-label">Best</span>
                </div>
                <div className="perf-stat-card">
                    <span className="perf-stat-value">{avg}%</span>
                    <span className="perf-stat-label">Average</span>
                </div>
                <div className="perf-stat-card">
                    <span className="perf-stat-value">{attempts.length}</span>
                    <span className="perf-stat-label">Attempts</span>
                </div>
            </div>

            <div className="perf-charts">
                <div className="perf-chart-card card">
                    <h4>Score Trend</h4>
                    <div className="perf-chart-container">
                        <canvas ref={barRef} />
                    </div>
                </div>
                <div className="perf-chart-card card">
                    <h4>Topic Mastery</h4>
                    <div className="perf-chart-container">
                        <canvas ref={radarRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}
