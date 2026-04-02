import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Users, AlertTriangle, Clock, Download,
    CheckCircle, XCircle, TrendingUp, TrendingDown,
    Mail, ChevronDown, ChevronUp, BarChart3, BookOpen, Save, Radio
} from 'lucide-react';
import { upsertNote } from '../services/notes/noteStore.js';
import SessionStartModal from '../components/liveclass/SessionStartModal.jsx';
import { createLiveClassSync } from '../services/liveclass/liveClassSync.js';
import { api, callQuery, getClient } from '../convex-client.js';
import { useAuth } from '../hooks/useAuth.js';
import { seedNoteKeys, getSeedNote } from '../data/seedNotes/index.js';
import './TeacherDashboard.css';

/* ─── Helper: Heatmap Color ─── */
function getMasteryColor(pct) {
    if (pct >= 80) return 'var(--mastery-strong)';
    if (pct >= 60) return 'var(--mastery-good)';
    if (pct >= 40) return 'var(--mastery-mid)';
    if (pct >= 20) return 'var(--mastery-low)';
    return 'var(--mastery-risk)';
}

function formatDurationMinutes(value) {
    if (!value) return '—';
    return `${value} min`;
}

/* ─── Component ─── */
export default function TeacherDashboard() {
    const navigate = useNavigate();
    const { isAccessReady, role } = useAuth();
    const [activeTab, setActiveTab] = useState('heatmap');
    const [questionSort, setQuestionSort] = useState('successRate');
    const [sortAsc, setSortAsc] = useState(true);
    const [showStartModal, setShowStartModal] = useState(false);
    const [startError, setStartError] = useState('');
    const [analytics, setAnalytics] = useState(null);
    const [analyticsState, setAnalyticsState] = useState('idle');
    const [analyticsError, setAnalyticsError] = useState('');
    const isTeacher = role === 'teacher';
    const startBlockedReason = !isAccessReady
        ? 'Checking your account access. Try again in a moment.'
        : 'Only teacher accounts can create live classes.';

    const [syncStatus, setSyncStatus] = useState('');
    const handleSyncNotes = async () => {
        try {
            setSyncStatus('Syncing all seed notes... This may take a minute.');
            const keysToSync = seedNoteKeys;
            for (const key of keysToSync) {
                const note = await getSeedNote(key);
                if (note) {
                    const parts = key.split(':');
                    await upsertNote({
                        noteId: `note:${key}`,
                        subject: parts[0],
                        topicTitle: 'Topic ' + parts[2],
                        subtopicTitle: 'Topic ' + parts[2],
                        blocks: note.blocks || [],
                        recall: note.recall || { enabled: true, cues: [] },
                        confidenceScore: 3,
                    });
                }
            }
            setSyncStatus(`Sync complete! ${keysToSync.length} notes synced.`);
            setTimeout(() => setSyncStatus(''), 5000);
        } catch (e) {
            setSyncStatus(`Error: ${e.message}`);
        }
    };

    // Expose for automated browser testing (dev only)
    useEffect(() => {
        if (import.meta.env.DEV) {
            window.__upsertNote = upsertNote;
            return () => { delete window.__upsertNote; };
        }
    }, []);

    // Note Editor State
    const [noteSubject, setNoteSubject] = useState('chemistry');
    const [noteUnitId, setNoteUnitId] = useState('1');
    const [noteTopicId, setNoteTopicId] = useState('1');
    const [noteSubtopicIndex, setNoteSubtopicIndex] = useState('0');
    const [noteTitle, setNoteTitle] = useState('');
    const [noteJson, setNoteJson] = useState('{\n  "blocks": [],\n  "recall": {}\n}');
    const [noteSaveStatus, setNoteSaveStatus] = useState('');

    const handleSaveNote = async () => {
        try {
            setNoteSaveStatus('Saving...');
            const parsed = JSON.parse(noteJson);
            const noteDoc = {
                noteId: `note:${noteSubject}:${noteUnitId}:${noteTopicId}:${noteSubtopicIndex}`,
                subject: noteSubject,
                topicTitle: noteTitle,
                subtopicTitle: noteTitle,
                blocks: parsed.blocks || [],
                recall: parsed.recall || { enabled: true, cues: [] },
                confidenceScore: 3,
            };
            await upsertNote(noteDoc);
            setNoteSaveStatus('Saved successfully!');
            setTimeout(() => setNoteSaveStatus(''), 3000);
        } catch (e) {
            setNoteSaveStatus(`Error: ${e.message}`);
        }
    };

    useEffect(() => {
        let cancelled = false;

        async function loadAnalytics() {
            const client = getClient();
            if (!client || !isTeacher || !isAccessReady) {
                if (!cancelled) {
                    setAnalytics(null);
                    setAnalyticsState(client ? 'idle' : 'offline');
                    setAnalyticsError('');
                }
                return;
            }

            try {
                setAnalyticsState('loading');
                setAnalyticsError('');
                const result = await callQuery(api.teacherAnalytics.getDashboardSummary, {});
                if (cancelled) return;
                setAnalytics(result || null);
                setAnalyticsState('ready');
            } catch (error) {
                if (cancelled) return;
                setAnalytics(null);
                setAnalyticsState('error');
                setAnalyticsError(error?.message || 'Could not load live classroom analytics.');
            }
        }

        void loadAnalytics();

        return () => {
            cancelled = true;
        };
    }, [isAccessReady, isTeacher]);

    const hasRealAnalytics = analyticsState === 'ready' && Boolean(analytics);
    const heatmapTopics = hasRealAnalytics
        ? analytics.heatmap.topics.map((topic) => topic.label)
        : [];
    const heatmapRows = hasRealAnalytics ? analytics.heatmap.rows : [];
    const heatmapClassAverages = hasRealAnalytics
        ? analytics.heatmap.classAverages
        : [];
    const watchlistRows = hasRealAnalytics ? analytics.lowConfidenceNotes : [];
    const timeRows = hasRealAnalytics ? analytics.timeData : [];
    const exportRows = hasRealAnalytics ? analytics.recentActivity : [];
    const liveQuestionRows = hasRealAnalytics ? (analytics.questionAnalytics || []) : [];
    const hasQuestionTelemetry = liveQuestionRows.length > 0;
    const hasHeatmapData = heatmapRows.length > 0 && heatmapTopics.length > 0;
    const hasTimeData = timeRows.length > 0;
    const hasExportRows = exportRows.length > 0;


    // Summary stats
    const totalStudents = hasRealAnalytics ? analytics.summary.totalStudents : 0;
    const avgMastery = hasRealAnalytics
        ? analytics.summary.avgMastery
        : 0;
    const flaggedCount = hasRealAnalytics
        ? (hasQuestionTelemetry ? analytics.summary.flaggedQuestions : analytics.summary.lowConfidenceCount)
        : 0;
    const totalAttempts = hasRealAnalytics
        ? (analytics.summary.totalAttempts || analytics.summary.totalNotes)
        : 0;

    // Sort questions
    const sortedQuestions = [...liveQuestionRows].sort((a, b) => {
        const mul = sortAsc ? 1 : -1;
        return mul * (a[questionSort] - b[questionSort]);
    });

    const handleSort = (field) => {
        if (questionSort === field) setSortAsc(!sortAsc);
        else { setQuestionSort(field); setSortAsc(true); }
    };

    // CSV Export
    const exportCSV = () => {
        if (!hasExportRows) return;

        const headers = ['Student', 'Activity', 'Subject', 'Item', 'Outcome', 'Duration Minutes', 'Recorded At'];
        const rows = exportRows.map((row) => [
            row.student,
            row.activity,
            row.subject,
            `"${row.itemTitle}"`,
            `"${row.outcome}"`,
            row.durationMinutes || '',
            new Date(row.recordedAt).toISOString().split('T')[0],
        ].join(','));
        const csv = [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `student_activity_analytics_${new Date().toISOString().split('T')[0]}.csv`;
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

    const handleStartClass = async (title, backgroundType) => {
        if (!isTeacher) {
            const error = new Error(startBlockedReason);
            setStartError(error.message);
            throw error;
        }

        const sync = createLiveClassSync({ onSessionEnded: () => {} });
        try {
            setStartError('');
            const session = await sync.createClass(title, backgroundType, { actorRole: role });
            if (!session) {
                throw new Error('Could not create a live class right now. Please try again.');
            }

            const navState = {
                session: {
                    classId: session._id.toString(),
                    title: session.title,
                    backgroundType: session.backgroundType,
                    status: session.status,
                    hostIdentity: session.hostUserId ?? 'local',
                    joinCode: session.joinCode,
                },
            };
            navigate(`/live/${session._id}`, { state: navState });
            setShowStartModal(false);
            return session;
        } catch (err) {
            setStartError(err?.message || 'Failed to create a live class.');
            if (import.meta.env.DEV) console.error('[LiveClass] Failed to create session:', err);
            throw err;
        }
    };

    const tabs = [
        { id: 'heatmap', label: 'Topic Mastery', icon: BarChart3 },
        { id: 'questions', label: 'Question Validity', icon: AlertTriangle },
        { id: 'time', label: 'Time Analytics', icon: Clock },
        { id: 'notes', label: 'Manage Notes', icon: BookOpen },
        { id: 'export', label: 'Data Export', icon: Download },
    ];

    return (
        <div className="teacher-dashboard animate-fade-in">
            <div className="teacher-dashboard-header">
                <div>
                    <h1>Teacher Dashboard</h1>
                    <p className="teacher-subtitle">Monitor student performance and curriculum effectiveness</p>
                </div>
                <button
                    className="btn btn-primary lc-start-btn"
                    onClick={() => {
                        if (!isTeacher || !isAccessReady) {
                            setStartError(startBlockedReason);
                            return;
                        }
                        setStartError('');
                        setShowStartModal(true);
                    }}
                    disabled={!isTeacher || !isAccessReady}
                    title={isTeacher ? 'Create and start a new live class' : startBlockedReason}
                >
                    <Radio size={16} />
                    Start Live Class
                </button>
            </div>

            {showStartModal && (
                <SessionStartModal
                    onStart={handleStartClass}
                    onClose={() => {
                        setShowStartModal(false);
                        setStartError('');
                    }}
                    canStart={isTeacher && isAccessReady}
                    errorMessage={startError}
                    blockedReason={isTeacher ? '' : startBlockedReason}
                />
            )}

            {isTeacher && analyticsState === 'loading' && (
                <div className="card teacher-status-message">
                    Loading live classroom analytics from Convex...
                </div>
            )}

            {isTeacher && analyticsState === 'error' && (
                <div className="card teacher-status-message teacher-status-message--error">
                    {analyticsError}
                </div>
            )}

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
                        <div className="stat-desc">{hasRealAnalytics ? (hasQuestionTelemetry ? 'Flagged Questions' : 'Needs Follow-Up') : 'Flagged Questions'}</div>
                    </div>
                </div>
                <div className="teacher-stat-card">
                    <LayoutDashboard size={20} />
                    <div>
                        <div className="stat-big">{totalAttempts}</div>
                        <div className="stat-desc">{hasRealAnalytics ? 'Total Attempts' : 'Total Attempts'}</div>
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
                        <p className="section-desc">
                            {hasRealAnalytics
                                ? 'Live data from saved notes and recorded exercise outcomes. Green = strong mastery, red = follow-up needed.'
                                : 'Connect Convex and collect student activity to populate the mastery heatmap with real telemetry.'}
                        </p>
                        {hasHeatmapData ? (
                            <>
                                <div className="mastery-heatmap">
                                    <table className="heatmap-table">
                                        <thead>
                                            <tr>
                                                <th>Student</th>
                                                {heatmapTopics.map(topic => <th key={topic}>{topic}</th>)}
                                                <th>Avg</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {heatmapRows.map((student) => {
                                                const avg = student.average;
                                                return (
                                                    <tr key={student.studentId}>
                                                        <td className="heatmap-student">
                                                            <span>{student.avatar}</span>
                                                            {student.name}
                                                        </td>
                                                        {student.scores.map((pct, topicIndex) => (
                                                            <td key={topicIndex}>
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
                                                {heatmapClassAverages.map((avg, topicIndex) => (
                                                    <td key={topicIndex}>
                                                        <div className="heatmap-cell-value" style={{ backgroundColor: getMasteryColor(avg) }}>{avg}%</div>
                                                    </td>
                                                ))}
                                                <td>
                                                    <div className="heatmap-cell-value avg-cell" style={{ backgroundColor: getMasteryColor(avgMastery) }}>{avgMastery}%</div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="mastery-legend">
                                    <span>Legend:</span>
                                    {[
                                        { label: '80%+', color: 'var(--mastery-strong)' },
                                        { label: '60-79%', color: 'var(--mastery-good)' },
                                        { label: '40-59%', color: 'var(--mastery-mid)' },
                                        { label: '20-39%', color: 'var(--mastery-low)' },
                                        { label: '<20%', color: 'var(--mastery-risk)' },
                                    ].map(l => (
                                        <span key={l.label} className="legend-item">
                                            <span className="legend-swatch" style={{ backgroundColor: l.color }} />
                                            {l.label}
                                        </span>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="teacher-empty-state">
                                No topic-level mastery data yet. Once students save notes or complete scored activities, the heatmap will populate here.
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'questions' && (
                    <div className="questions-section">
                        {hasQuestionTelemetry ? (
                            <>
                                <h3>Question Validity Tracker</h3>
                                <p className="section-desc">Live exercise-attempt telemetry from Convex. Questions with &lt;30% success rate are auto-flagged for review.</p>
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
                            </>
                        ) : hasRealAnalytics ? (
                            <>
                                <h3>Low Confidence Watchlist</h3>
                                <p className="section-desc">Real notes that students saved with low confidence. This stays as a fallback until exercise attempt history appears.</p>
                                {watchlistRows.length === 0 ? (
                                    <div className="teacher-empty-state">
                                        No low-confidence notes or graded exercise attempts have been recorded yet.
                                    </div>
                                ) : (
                                    <>
                                        <table className="questions-table">
                                            <thead>
                                                <tr>
                                                    <th>Student</th>
                                                    <th>Subject</th>
                                                    <th>Note</th>
                                                    <th>Confidence</th>
                                                    <th>Est. Read</th>
                                                    <th>Last Updated</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {watchlistRows.map((row) => (
                                                    <tr key={row.noteId} className="flagged-row">
                                                        <td>{row.student}</td>
                                                        <td><span className="topic-chip">{row.subject}</span></td>
                                                        <td className="question-stem">{row.noteTitle}</td>
                                                        <td>
                                                            <span className="success-badge bad">
                                                                <XCircle size={12} />
                                                                {row.confidenceScore}/5
                                                            </span>
                                                        </td>
                                                        <td>{row.estimatedReadMinutes} min</td>
                                                        <td>{new Date(row.lastEditedAt).toLocaleDateString()}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="question-summary">
                                            <span>⚠️ <strong>{flaggedCount}</strong> low-confidence notes need teacher follow-up</span>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <h3>Question Validity Tracker</h3>
                                <p className="section-desc">Real exercise telemetry will appear here once students start submitting marked attempts.</p>
                                <div className="teacher-empty-state">
                                    No question-level attempt data yet. The table will unlock automatically after students complete exercises.
                                </div>
                            </>
                        )}
                    </div>
                )}

                {activeTab === 'time' && (
                    <div className="time-section">
                        <h3>Time-on-Task Analytics</h3>
                        <p className="section-desc">
                            {hasRealAnalytics
                                ? 'Live averages from saved notes plus recorded exercise and past-paper durations.'
                                : 'Average time-on-task appears here once live student activity is available.'}
                        </p>
                        {hasTimeData ? (
                            <>
                                <div className="time-bars">
                                    {timeRows.map(item => {
                                        const maxMinutes = Math.max(...timeRows.map(d => d.avgMinutes), 1);
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
                                    💡 These timings now combine note study time with real exercise and past-paper session durations.
                                </div>
                            </>
                        ) : (
                            <div className="teacher-empty-state">
                                No timed study sessions yet. Duration charts will appear after students read notes or submit timed attempts.
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'export' && (
                    <div className="export-section">
                        <h3>Data Export</h3>
                        <p className="section-desc">
                            {hasRealAnalytics
                                ? 'Download recent mixed student activity from notes, exercises, and past papers as CSV.'
                                : 'Download becomes available once live student activity has been recorded.'}
                        </p>

                        {hasExportRows ? (
                            <div className="export-preview">
                                <h4>Preview (Recent Student Activity)</h4>
                                <table className="export-table">
                                    <thead>
                                        <tr>
                                            <th>Student</th>
                                            <th>Activity</th>
                                            <th>Subject</th>
                                            <th>Item</th>
                                            <th>Outcome</th>
                                            <th>Duration</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {exportRows.map((row) => (
                                            <tr key={row.id}>
                                                <td>{row.student}</td>
                                                <td>{row.activity}</td>
                                                <td>{row.subject}</td>
                                                <td className="question-stem">{row.itemTitle}</td>
                                                <td>{row.outcome}</td>
                                                <td>{formatDurationMinutes(row.durationMinutes)}</td>
                                                <td>{new Date(row.recordedAt).toLocaleDateString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="teacher-empty-state">
                                No recent student activity is available to export yet.
                            </div>
                        )}

                        <button className="btn btn-primary export-btn" onClick={exportCSV} disabled={!hasExportRows}>
                            <Download size={16} /> Export as CSV
                        </button>
                    </div>
                )}

                {activeTab === 'notes' && (
                    <div className="notes-editor-section">
                        <h3>Raw Note Editor (Convex Sync)</h3>
                        <p className="section-desc">Create or update notes directly in the database to test CRUD operations.</p>

                        <div className="card note-form">
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <label>Subject</label>
                                    <input className="search-input" value={noteSubject} onChange={e => setNoteSubject(e.target.value)} />
                                </div>
                                <div>
                                    <label>Title (Topic/Subtopic)</label>
                                    <input className="search-input" value={noteTitle} onChange={e => setNoteTitle(e.target.value)} />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <label>Unit ID</label>
                                    <input type="number" className="search-input" value={noteUnitId} onChange={e => setNoteUnitId(e.target.value)} />
                                </div>
                                <div>
                                    <label>Topic ID</label>
                                    <input type="number" className="search-input" value={noteTopicId} onChange={e => setNoteTopicId(e.target.value)} />
                                </div>
                                <div>
                                    <label>Subtopic Index</label>
                                    <input type="number" className="search-input" value={noteSubtopicIndex} onChange={e => setNoteSubtopicIndex(e.target.value)} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label>Content JSON (Blocks & Recall)</label>
                                <textarea
                                    className="search-input"
                                    style={{ width: '100%', height: '200px', fontFamily: 'monospace', padding: '0.5rem' }}
                                    value={noteJson}
                                    onChange={e => setNoteJson(e.target.value)}
                                />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <button className="btn btn-primary" onClick={handleSaveNote}>
                                    <Save size={16} /> Save to Convex
                                </button>
                                {noteSaveStatus && (
                                    <span style={{ color: noteSaveStatus.includes('Error') ? 'var(--danger-color)' : 'var(--success-color)' }}>
                                        {noteSaveStatus}
                                    </span>
                                )}
                            </div>

                            <hr style={{ margin: '1.5rem 0', opacity: 0.2 }} />

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <button className="btn btn-secondary" onClick={handleSyncNotes}>
                                    <Save size={16} /> Sync All Seed Notes to DB
                                </button>
                                {syncStatus && (
                                    <span style={{ color: syncStatus.includes('Error') ? 'var(--danger-color)' : 'var(--success-color)' }}>
                                        {syncStatus}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
