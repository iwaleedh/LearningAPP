import { useState } from 'react';
import {
    LayoutDashboard, Users, AlertTriangle, Clock, Download,
    CheckCircle, XCircle, TrendingUp, TrendingDown, Filter,
    Mail, ChevronDown, ChevronUp, BarChart3
} from 'lucide-react';
import './TeacherDashboard.css';

/* ─── Sample Data ─── */
const STUDENTS = [
    { id: 1, name: 'Sarah Ahmed', avatar: '👩‍🔬' },
    { id: 2, name: 'Ali Hassan', avatar: '👨‍🎓' },
    { id: 3, name: 'Fatima Noor', avatar: '👩‍💻' },
    { id: 4, name: 'Omar Khalid', avatar: '🧑‍🔬' },
    { id: 5, name: 'Aisha Latheef', avatar: '👩‍🎓' },
    { id: 6, name: 'Ibrahim Waleed', avatar: '👨‍💻' },
    { id: 7, name: 'Mariam Didi', avatar: '👩‍🔬' },
    { id: 8, name: 'Ahmed Riyaz', avatar: '🧑‍🎓' },
];

const TOPICS = [
    'Atomic Structure', 'Chemical Bonding', 'Stoichiometry',
    'States of Matter', 'Chemical Energetics', 'Electrochemistry',
];

// Mastery data: student × topic → percentage
const MASTERY_DATA = [
    [92, 78, 65, 45, 30, 20], // Sarah
    [85, 82, 70, 60, 40, 35], // Ali
    [88, 75, 55, 50, 25, 15], // Fatima
    [70, 60, 45, 35, 20, 10], // Omar
    [80, 72, 60, 55, 45, 30], // Aisha
    [75, 68, 50, 40, 30, 25], // Ibrahim
    [60, 55, 40, 30, 15, 10], // Mariam
    [65, 58, 48, 38, 22, 18], // Ahmed
];

const QUESTIONS = [
    { id: 1, stem: 'What is the atomic number of Carbon?', topic: 'Atomic Structure', attempts: 120, successRate: 85, avgTime: '18s', flagged: false },
    { id: 2, stem: 'Which subatomic particle has no charge?', topic: 'Atomic Structure', attempts: 115, successRate: 72, avgTime: '22s', flagged: false },
    { id: 3, stem: 'Define an isotope.', topic: 'Atomic Structure', attempts: 98, successRate: 45, avgTime: '35s', flagged: true },
    { id: 4, stem: 'What type of bond forms between Na and Cl?', topic: 'Chemical Bonding', attempts: 105, successRate: 68, avgTime: '25s', flagged: false },
    { id: 5, stem: 'Draw the dot-and-cross diagram for H₂O.', topic: 'Chemical Bonding', attempts: 88, successRate: 28, avgTime: '45s', flagged: true },
    { id: 6, stem: 'Balance: Fe + O₂ → Fe₂O₃', topic: 'Stoichiometry', attempts: 95, successRate: 38, avgTime: '40s', flagged: true },
    { id: 7, stem: 'Calculate moles from 6g of Carbon.', topic: 'Stoichiometry', attempts: 80, successRate: 55, avgTime: '30s', flagged: false },
    { id: 8, stem: 'Describe metallic bonding.', topic: 'Chemical Bonding', attempts: 72, successRate: 62, avgTime: '28s', flagged: false },
];

const TIME_DATA = [
    { activity: 'Notes Reading', avgMinutes: 18, sessions: 45 },
    { activity: 'MCQ Exercises', avgMinutes: 12, sessions: 38 },
    { activity: 'Past Papers', avgMinutes: 25, sessions: 22 },
    { activity: 'Flashcard Review', avgMinutes: 8, sessions: 30 },
    { activity: 'Fill-in-the-Blank', avgMinutes: 10, sessions: 15 },
    { activity: 'Drag & Drop', avgMinutes: 7, sessions: 12 },
];

const STUDENT_ATTEMPTS = [
    { student: 'Sarah Ahmed', question: 'What is the atomic number of Carbon?', answer: 'C', correct: true, time: '15s', confidence: 'Easy', date: '2026-02-27' },
    { student: 'Ali Hassan', question: 'What is the atomic number of Carbon?', answer: 'B', correct: false, time: '22s', confidence: 'Medium', date: '2026-02-27' },
    { student: 'Fatima Noor', question: 'Define an isotope.', answer: 'A', correct: false, time: '38s', confidence: 'Hard', date: '2026-02-26' },
    { student: 'Omar Khalid', question: 'Balance: Fe + O₂ → Fe₂O₃', answer: 'D', correct: false, time: '42s', confidence: 'Hard', date: '2026-02-26' },
    { student: 'Sarah Ahmed', question: 'Which subatomic particle has no charge?', answer: 'A', correct: true, time: '12s', confidence: 'Easy', date: '2026-02-25' },
    { student: 'Ibrahim Waleed', question: 'Draw the dot-and-cross diagram for H₂O.', answer: 'C', correct: false, time: '48s', confidence: 'Hard', date: '2026-02-25' },
];

/* ─── Helper: Heatmap Color ─── */
function getMasteryColor(pct) {
    if (pct >= 80) return '#22c55e';
    if (pct >= 60) return '#84cc16';
    if (pct >= 40) return '#facc15';
    if (pct >= 20) return '#fb923c';
    return '#ef4444';
}

/* ─── Component ─── */
export default function TeacherDashboard() {
    const [activeTab, setActiveTab] = useState('heatmap');
    const [questionSort, setQuestionSort] = useState('successRate');
    const [sortAsc, setSortAsc] = useState(true);

    // Summary stats
    const totalStudents = STUDENTS.length;
    const avgMastery = Math.round(MASTERY_DATA.flat().reduce((s, v) => s + v, 0) / MASTERY_DATA.flat().length);
    const flaggedCount = QUESTIONS.filter(q => q.successRate < 30).length;
    const totalAttempts = QUESTIONS.reduce((s, q) => s + q.attempts, 0);

    // Sort questions
    const sortedQuestions = [...QUESTIONS].sort((a, b) => {
        const mul = sortAsc ? 1 : -1;
        return mul * (a[questionSort] - b[questionSort]);
    });

    const handleSort = (field) => {
        if (questionSort === field) setSortAsc(!sortAsc);
        else { setQuestionSort(field); setSortAsc(true); }
    };

    // CSV Export
    const exportCSV = () => {
        const headers = ['Student', 'Question', 'Answer', 'Correct', 'Time', 'Confidence', 'Date'];
        const rows = STUDENT_ATTEMPTS.map(a =>
            [a.student, `"${a.question}"`, a.answer, a.correct, a.time, a.confidence, a.date].join(',')
        );
        const csv = [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `student_attempts_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    };

    // Ask a Teacher
    const handleAskTeacher = (question) => {
        const subject = encodeURIComponent(`Question about: ${question.stem}`);
        const body = encodeURIComponent(
            `Hi Teacher,\n\nI need help with the following question:\n\n"${question.stem}"\n\nTopic: ${question.topic}\nSuccess Rate: ${question.successRate}%\nTotal Attempts: ${question.attempts}\n\nCould you provide additional explanation or resources?\n\nThank you!`
        );
        window.open(`mailto:teacher@school.edu?subject=${subject}&body=${body}`);
    };

    const tabs = [
        { id: 'heatmap', label: 'Topic Mastery', icon: BarChart3 },
        { id: 'questions', label: 'Question Validity', icon: AlertTriangle },
        { id: 'time', label: 'Time Analytics', icon: Clock },
        { id: 'export', label: 'Data Export', icon: Download },
    ];

    return (
        <div className="teacher-dashboard animate-fade-in">
            <h1>Teacher Dashboard</h1>
            <p className="teacher-subtitle">Monitor student performance and curriculum effectiveness</p>

            {/* Summary Cards */}
            <div className="teacher-stats-grid">
                <div className="teacher-stat-card">
                    <Users size={20} />
                    <div>
                        <div className="stat-big">{totalStudents}</div>
                        <div className="stat-desc">Active Students</div>
                    </div>
                </div>
                <div className="teacher-stat-card">
                    <TrendingUp size={20} />
                    <div>
                        <div className="stat-big">{avgMastery}%</div>
                        <div className="stat-desc">Avg Mastery</div>
                    </div>
                </div>
                <div className="teacher-stat-card warning">
                    <AlertTriangle size={20} />
                    <div>
                        <div className="stat-big">{flaggedCount}</div>
                        <div className="stat-desc">Flagged Questions</div>
                    </div>
                </div>
                <div className="teacher-stat-card">
                    <LayoutDashboard size={20} />
                    <div>
                        <div className="stat-big">{totalAttempts}</div>
                        <div className="stat-desc">Total Attempts</div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="teacher-tabs">
                {tabs.map(tab => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            className={`teacher-tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <Icon size={16} /> {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="teacher-content">
                {activeTab === 'heatmap' && (
                    <div className="heatmap-section">
                        <h3>Topic Mastery Heatmap</h3>
                        <p className="section-desc">Color grid showing student mastery by topic. Green = mastered, Red = struggling.</p>
                        <div className="mastery-heatmap">
                            <table className="heatmap-table">
                                <thead>
                                    <tr>
                                        <th>Student</th>
                                        {TOPICS.map(t => <th key={t}>{t}</th>)}
                                        <th>Avg</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {STUDENTS.map((student, si) => {
                                        const avg = Math.round(MASTERY_DATA[si].reduce((a, b) => a + b, 0) / MASTERY_DATA[si].length);
                                        return (
                                            <tr key={student.id}>
                                                <td className="heatmap-student">
                                                    <span>{student.avatar}</span>
                                                    {student.name}
                                                </td>
                                                {MASTERY_DATA[si].map((pct, ti) => (
                                                    <td key={ti}>
                                                        <div
                                                            className="heatmap-cell-value"
                                                            style={{ backgroundColor: getMasteryColor(pct) }}
                                                        >
                                                            {pct}%
                                                        </div>
                                                    </td>
                                                ))}
                                                <td>
                                                    <div
                                                        className="heatmap-cell-value avg-cell"
                                                        style={{ backgroundColor: getMasteryColor(avg) }}
                                                    >
                                                        {avg}%
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="heatmap-student"><strong>Class Avg</strong></td>
                                        {TOPICS.map((_, ti) => {
                                            const avg = Math.round(MASTERY_DATA.reduce((s, row) => s + row[ti], 0) / MASTERY_DATA.length);
                                            return (
                                                <td key={ti}>
                                                    <div className="heatmap-cell-value" style={{ backgroundColor: getMasteryColor(avg) }}>{avg}%</div>
                                                </td>
                                            );
                                        })}
                                        <td>
                                            <div className="heatmap-cell-value avg-cell" style={{ backgroundColor: getMasteryColor(avgMastery) }}>{avgMastery}%</div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        {/* Legend */}
                        <div className="mastery-legend">
                            <span>Legend:</span>
                            {[
                                { label: '80%+', color: '#22c55e' },
                                { label: '60-79%', color: '#84cc16' },
                                { label: '40-59%', color: '#facc15' },
                                { label: '20-39%', color: '#fb923c' },
                                { label: '<20%', color: '#ef4444' },
                            ].map(l => (
                                <span key={l.label} className="legend-item">
                                    <span className="legend-swatch" style={{ backgroundColor: l.color }} />
                                    {l.label}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'questions' && (
                    <div className="questions-section">
                        <h3>Question Validity Tracker</h3>
                        <p className="section-desc">Questions with &lt;30% success rate are auto-flagged for review.</p>
                        <table className="questions-table">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Topic</th>
                                    <th className="sortable" onClick={() => handleSort('attempts')}>
                                        Attempts {questionSort === 'attempts' && (sortAsc ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                                    </th>
                                    <th className="sortable" onClick={() => handleSort('successRate')}>
                                        Success {questionSort === 'successRate' && (sortAsc ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                                    </th>
                                    <th>Avg Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedQuestions.map(q => (
                                    <tr key={q.id} className={q.successRate < 30 ? 'flagged-row' : ''}>
                                        <td className="question-stem">{q.stem}</td>
                                        <td><span className="topic-chip">{q.topic}</span></td>
                                        <td>{q.attempts}</td>
                                        <td>
                                            <span className={`success-badge ${q.successRate >= 60 ? 'good' : q.successRate >= 30 ? 'warn' : 'bad'}`}>
                                                {q.successRate >= 60 ? <CheckCircle size={12} /> : q.successRate >= 30 ? <TrendingDown size={12} /> : <XCircle size={12} />}
                                                {q.successRate}%
                                            </span>
                                        </td>
                                        <td>{q.avgTime}</td>
                                        <td>
                                            {q.successRate < 30 ? (
                                                <span className="flag-badge">⚠️ Flagged</span>
                                            ) : (
                                                <span className="ok-badge">✓ OK</span>
                                            )}
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-ghost" onClick={() => handleAskTeacher(q)}>
                                                <Mail size={14} /> Review
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="question-summary">
                            <span>⚠️ <strong>{flaggedCount}</strong> questions need review (success rate &lt;30%)</span>
                        </div>
                    </div>
                )}

                {activeTab === 'time' && (
                    <div className="time-section">
                        <h3>Time-on-Task Analytics</h3>
                        <p className="section-desc">Average time spent on each activity type across all students.</p>
                        <div className="time-bars">
                            {TIME_DATA.map(item => {
                                const maxMinutes = Math.max(...TIME_DATA.map(d => d.avgMinutes));
                                const pct = (item.avgMinutes / maxMinutes) * 100;
                                return (
                                    <div key={item.activity} className="time-bar-row">
                                        <div className="time-bar-label">{item.activity}</div>
                                        <div className="time-bar-track">
                                            <div className="time-bar-fill" style={{ width: `${pct}%` }} />
                                        </div>
                                        <div className="time-bar-value">{item.avgMinutes} min</div>
                                        <div className="time-bar-sessions">{item.sessions} sessions</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="time-insight">
                            💡 Students spend the most time on <strong>Past Papers</strong> (avg 25 min/session)
                            and the least on <strong>Drag &amp; Drop</strong> exercises (avg 7 min/session).
                        </div>
                    </div>
                )}

                {activeTab === 'export' && (
                    <div className="export-section">
                        <h3>Data Export</h3>
                        <p className="section-desc">Download student attempt data as CSV for external analysis.</p>

                        <div className="export-preview">
                            <h4>Preview (Recent Attempts)</h4>
                            <table className="export-table">
                                <thead>
                                    <tr>
                                        <th>Student</th>
                                        <th>Question</th>
                                        <th>Correct</th>
                                        <th>Time</th>
                                        <th>Confidence</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {STUDENT_ATTEMPTS.map((a, i) => (
                                        <tr key={i}>
                                            <td>{a.student}</td>
                                            <td className="question-stem">{a.question}</td>
                                            <td>
                                                {a.correct ? <CheckCircle size={14} className="trend-up" /> : <XCircle size={14} className="trend-down" />}
                                            </td>
                                            <td>{a.time}</td>
                                            <td><span className={`confidence-chip ${a.confidence.toLowerCase()}`}>{a.confidence}</span></td>
                                            <td>{a.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <button className="btn btn-primary export-btn" onClick={exportCSV}>
                            <Download size={16} /> Export as CSV
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
