import { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileQuestion, Clock, Download, ChevronDown, ChevronUp, FileText, Beaker, Atom, Dna, Calculator, X, Eye, PenTool, TrendingUp, BookOpen } from 'lucide-react';
import { loadPastPaperSubject, subjectPaperCounts } from '../data/pastPapers/index.js';
import { downloadFile, generateFileName, generateOLevelFileName, filterPapers, sortPapersByDate, getPaperTypeBadge } from '../services/pastPapers/pastPaperService';
import { incrementPapersViewed } from '../services/activityStore.js';
import { recordPastPaperActivity } from '../services/studyAttemptService.js';
import { api, callQuery, getClient } from '../convex-client.js';
import './Pages.css';

const PerformanceChart = lazy(() => import('../components/pastpapers/PerformanceChart'));

// Subject configuration
const subjects = [
    {
        id: 'chemistry', name: 'AL Chemistry', icon: Beaker, color: '#10b981',
        isOLevel: false,
    },
    {
        id: 'physics', name: 'AL Physics', icon: Atom, color: '#8b5cf6',
        isOLevel: false,
    },
    {
        id: 'biology', name: 'AL Biology', icon: Dna, color: '#3b82f6',
        isOLevel: false,
    },
    {
        id: 'mathematics', name: 'AL Mathematics', icon: Calculator, color: '#f59e0b',
        isOLevel: false,
    },
    {
        id: 'business', name: 'AL Business', icon: FileText, color: '#ec4899',
        isOLevel: false,
    },
    {
        id: 'economics', name: 'AL Economics', icon: FileText, color: '#14b8a6',
        isOLevel: false,
    },
    {
        id: 'accounting', name: 'AL Accounting', icon: FileQuestion, color: '#f97316',
        isOLevel: false,
    },
    {
        id: 'cae', name: 'CAE (C1)', icon: FileText, color: '#3b82f6',
        isOLevel: false,
    },
    {
        id: 'cpe', name: 'CPE (C2)', icon: FileText, color: '#0ea5e9',
        isOLevel: false,
    },
    {
        id: 'olevel-chemistry', name: 'O Level Chemistry', icon: Beaker, color: '#059669',
        isOLevel: true,
    },
    {
        id: 'olevel-physics', name: 'O Level Physics', icon: Atom, color: '#1d4ed8',
        isOLevel: true,
    },
    {
        id: 'olevel-biology', name: 'O Level Biology', icon: Dna, color: '#2563eb',
        isOLevel: true,
    },
    {
        id: 'olevel-mathematics', name: 'O Level Mathematics', icon: Calculator, color: '#d97706',
        isOLevel: true,
    },
    {
        id: 'olevel-business', name: 'O Level Business', icon: FileText, color: '#be185d',
        isOLevel: true,
    },
    {
        id: 'olevel-accounting', name: 'O Level Accounting', icon: BookOpen, color: '#65a30d',
        isOLevel: true,
    },
    {
        id: 'olevel-economics', name: 'O Level Economics', icon: TrendingUp, color: '#0891b2',
        isOLevel: true,
    },
];

// Resolve a local asset path to an absolute URL.
// In production, VITE_PDF_CDN_BASE points at GitHub raw content so PDFs
// are served from there instead of the Vercel deployment (where large
// binary assets are excluded). In development, falls back to BASE_URL.
function resolveUrl(url) {
    if (!url || url.startsWith('https://')) return url;
    const cdnBase = import.meta.env.VITE_PDF_CDN_BASE;
    if (cdnBase) return cdnBase + url; // e.g. https://raw.githubusercontent.com/.../public/pastpapers/x.pdf
    return import.meta.env.BASE_URL + url.slice(1);
}

function parseDurationToMinutes(durationLabel) {
    const text = String(durationLabel || '').toLowerCase();
    const hours = Number(text.match(/(\d+)\s*hour/)?.[1] || 0);
    const minutes = Number(text.match(/(\d+)\s*minute/)?.[1] || 0);
    const total = hours * 60 + minutes;
    return total > 0 ? total : 60;
}

function buildAttemptLabel(paper) {
    return `${paper.unit} ${paper.month} ${paper.year}`;
}

function RecordAttemptModal({ paper, onClose, onSave, saving }) {
    const [scorePercent, setScorePercent] = useState('');
    const [durationMinutes, setDurationMinutes] = useState(String(parseDurationToMinutes(paper.duration)));
    const [confidence, setConfidence] = useState('Medium');

    const isScoreValid = scorePercent !== '' && Number(scorePercent) >= 0 && Number(scorePercent) <= 100;
    const isDurationValid = Number(durationMinutes) > 0;

    return (
        <div className="attempt-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="attempt-modal-title">
            <div className="attempt-modal card">
                <div className="attempt-modal-header">
                    <div>
                        <h3 id="attempt-modal-title">Record Past Paper Attempt</h3>
                        <p>{paper.unit} • {paper.unitName}</p>
                    </div>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={onClose} disabled={saving}>
                        <X size={14} />
                    </button>
                </div>

                <div className="attempt-modal-body">
                    <label className="attempt-field">
                        <span>Score (%)</span>
                        <input
                            className="input"
                            type="number"
                            min="0"
                            max="100"
                            value={scorePercent}
                            onChange={(event) => setScorePercent(event.target.value)}
                            placeholder="e.g. 74"
                        />
                    </label>

                    <label className="attempt-field">
                        <span>Time Spent (minutes)</span>
                        <input
                            className="input"
                            type="number"
                            min="1"
                            value={durationMinutes}
                            onChange={(event) => setDurationMinutes(event.target.value)}
                        />
                    </label>

                    <label className="attempt-field">
                        <span>Confidence</span>
                        <select
                            className="input"
                            value={confidence}
                            onChange={(event) => setConfidence(event.target.value)}
                        >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </label>
                </div>

                <div className="attempt-modal-actions">
                    <button type="button" className="btn btn-secondary" onClick={onClose} disabled={saving}>
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => onSave({
                            scorePercent: Number(scorePercent),
                            durationMinutes: Number(durationMinutes),
                            confidence,
                        })}
                        disabled={saving || !isScoreValid || !isDurationValid}
                    >
                        {saving ? 'Saving…' : 'Save Attempt'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Download button component
function DownloadButton({ paper, type, label, icon: Icon, isOLevel = false, subjectId }) { // eslint-disable-line no-unused-vars
    const [status, setStatus] = useState(null);

    const url = type === 'question' ? paper.questionPaperUrl : paper.markingSchemeUrl;
    const filename = isOLevel ? generateOLevelFileName(paper, type) : generateFileName(paper, type);

    const handleDownload = () => {
        if (!url) return;

        const resolved = resolveUrl(url);
        const activityType = type === 'question' ? 'download_question' : 'download_marking';
        const prompt = `${paper.unitName} ${label}`;

        // External / CDN URLs — open in new tab (cross-origin download attr is ignored by browsers)
        if (resolved.startsWith('https://')) {
            window.open(resolved, '_blank', 'noopener,noreferrer');
            incrementPapersViewed();
            void recordPastPaperActivity({
                subject: subjectId,
                activityType,
                questionKey: `${paper.id}:${activityType}`,
                prompt,
                topic: paper.unit,
                paperId: paper.id,
                paperTitle: paper.unitName,
                metadata: { type, month: paper.month, year: paper.year },
            });
            setStatus('success');
            setTimeout(() => setStatus(null), 2000);
            return;
        }

        const result = downloadFile(resolved, filename);

        if (result.success) {
            incrementPapersViewed();
            void recordPastPaperActivity({
                subject: subjectId,
                activityType,
                questionKey: `${paper.id}:${activityType}`,
                prompt,
                topic: paper.unit,
                paperId: paper.id,
                paperTitle: paper.unitName,
                metadata: { type, month: paper.month, year: paper.year },
            });
            setStatus('success');
            setTimeout(() => setStatus(null), 2000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus(null), 3000);
        }
    };

    return (
        <button
            className={`btn btn-sm pastpaper-action-btn ${status === 'success' ? 'btn-success' : status === 'error' ? 'btn-ghost' : 'btn-primary'}`}
            onClick={handleDownload}
            disabled={!url}
            title={!url ? 'Coming soon' : `${label} PDF`}
        >
            <Icon size={14} />
            {status === 'success' ? 'Downloaded!' : status === 'error' ? 'Failed' : label}
        </button>
    );
}

// View PDF button component — always opens in a new browser tab
function ViewPdfButton({ paper, type, label, subjectId }) {
    const url = type === 'question' ? paper.questionPaperUrl : paper.markingSchemeUrl;

    const handleView = () => {
        if (!url) return;
        const resolved = resolveUrl(url);
        // GitHub raw and other CDN URLs set Content-Disposition: attachment which
        // forces a download. Route through Google Docs Viewer to display inline.
        const viewUrl = resolved.startsWith('https://')
            ? `https://docs.google.com/viewer?url=${encodeURIComponent(resolved)}`
            : resolved;
        window.open(viewUrl, '_blank', 'noopener,noreferrer');
        incrementPapersViewed();
        void recordPastPaperActivity({
            subject: subjectId,
            activityType: type === 'question' ? 'view_question' : 'view_marking',
            questionKey: `${paper.id}:${type}:view`,
            prompt: `${paper.unitName} ${label}`,
            topic: paper.unit,
            paperId: paper.id,
            paperTitle: paper.unitName,
            metadata: { type, month: paper.month, year: paper.year },
        });
    };

    return (
        <button
            className="btn btn-sm btn-outline pastpaper-action-btn"
            onClick={handleView}
            disabled={!url}
            title={!url ? 'Coming soon' : `Open ${label} in new tab`}
        >
            <Eye size={14} />
            {label}
        </button>
    );
}

// Past paper card component - grouped by year/month
function ExamSessionCard({ year, month, papers, isOLevel = false, subjectId, onRecordAttempt }) {
    const [expanded, setExpanded] = useState(false);
    const [expandedPaperId, setExpandedPaperId] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="past-paper-card card">
            {/* Year/Month Main Header */}
            <div className="past-paper-session-header" onClick={() => setExpanded(!expanded)}>
                <div className="past-paper-session-main">
                    <span className="past-paper-year">{year}</span>
                    <span className="past-paper-month">{month}</span>
                    <span className="past-paper-count">{papers.length} papers</span>
                </div>
                <div className="past-paper-expand">
                    {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>

            {/* Papers List (shown when expanded) */}
            {expanded && (
                <div className="past-paper-papers-list">
                    {papers.map((paper) => (
                        <div key={paper.id} className="past-paper-item">
                            <div
                                className={`past-paper-item-header ${expandedPaperId === paper.id ? 'expanded' : ''}`}
                                onClick={() => setExpandedPaperId(expandedPaperId === paper.id ? null : paper.id)}
                            >
                                <div className="past-paper-item-info">
                                    <div className="past-paper-unit">
                                        <span className="unit-badge">{paper.unit}</span>
                                        <span className={`badge ${getPaperTypeBadge(paper.type)}`}>{paper.type}</span>
                                    </div>
                                    <p className="past-paper-unit-name">{paper.unitName}</p>
                                    <p className="past-paper-meta">
                                        <Clock size={12} /> {paper.duration} · {paper.totalMarks} marks
                                    </p>
                                </div>
                                <div className="past-paper-expand">
                                    {expandedPaperId === paper.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </div>
                            </div>

                            {/* Paper Actions (shown when paper is expanded) */}
                            {expandedPaperId === paper.id && (
                                <div className="past-paper-item-actions">
                                    <ViewPdfButton
                                        paper={paper}
                                        type="question"
                                        label="View Question Paper"
                                        subjectId={subjectId}
                                    />
                                    <DownloadButton
                                        paper={paper}
                                        type="question"
                                        label="Download QP"
                                        icon={Download}
                                        isOLevel={isOLevel}
                                        subjectId={subjectId}
                                    />
                                    <ViewPdfButton
                                        paper={paper}
                                        type="marking"
                                        label="View Marking Scheme"
                                        subjectId={subjectId}
                                    />
                                    <DownloadButton
                                        paper={paper}
                                        type="marking"
                                        label="Download MS"
                                        icon={Download}
                                        isOLevel={isOLevel}
                                        subjectId={subjectId}
                                    />
                                    {paper.questionPaperUrl && (
                                        <button
                                            className="btn btn-sm btn-primary pastpaper-action-btn"
                                            onClick={() => navigate(`/annotate/${paper.id}`)}
                                            title="Open in annotation mode"
                                        >
                                            <PenTool size={14} />
                                            Do it Live
                                        </button>
                                    )}
                                    <button
                                        className="btn btn-sm btn-secondary pastpaper-action-btn"
                                        onClick={() => onRecordAttempt?.(paper)}
                                        title="Record a completed paper score"
                                    >
                                        <TrendingUp size={14} />
                                        Log Attempt
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function PastPapersPage() {
    const [activeSubject, setActiveSubject] = useState('chemistry');
    const [filterYear, setFilterYear] = useState('all');
    const [filterMonth, setFilterMonth] = useState('all');
    const [filterUnit, setFilterUnit] = useState('all');
    const [attempts, setAttempts] = useState([]);
    const [attemptsState, setAttemptsState] = useState('idle');
    const [showPerformance, setShowPerformance] = useState(false);
    const [subjectDataById, setSubjectDataById] = useState({});
    const [subjectLoadError, setSubjectLoadError] = useState(null);
    const [attemptPaper, setAttemptPaper] = useState(null);
    const [attemptSaveState, setAttemptSaveState] = useState('idle');

    // Get active subject config
    const subjectConfig = subjects.find(s => s.id === activeSubject);
    const activeSubjectData = subjectDataById[activeSubject];
    const subjectPapers = activeSubjectData?.papers || [];
    const subjectYears = activeSubjectData?.years || [];
    const subjectUnits = activeSubjectData?.units || [];
    const isLoadingSubject = !activeSubjectData && !subjectLoadError;

    useEffect(() => {
        let cancelled = false;

        if (subjectDataById[activeSubject]) {
            return;
        }

        void loadPastPaperSubject(activeSubject)
            .then((subjectData) => {
                if (cancelled) return;
                setSubjectLoadError(null);
                setSubjectDataById((prev) => prev[activeSubject]
                    ? prev
                    : { ...prev, [activeSubject]: subjectData });
            })
            .catch((error) => {
                if (cancelled) return;
                setSubjectLoadError(error);
            });

        return () => {
            cancelled = true;
        };
    }, [activeSubject, subjectDataById]);

    useEffect(() => {
        let cancelled = false;

        async function loadAttempts() {
            const client = getClient();
            if (!client) {
                if (!cancelled) {
                    setAttempts([]);
                    setAttemptsState('offline');
                }
                return;
            }

            try {
                setAttemptsState('loading');
                const rows = await callQuery(api.studyAttempts.listMyPastPaperSessions, { subject: activeSubject });
                if (cancelled) return;
                setAttempts(rows || []);
                setAttemptsState('ready');
            } catch {
                if (!cancelled) {
                    setAttempts([]);
                    setAttemptsState('error');
                }
            }
        }

        void loadAttempts();

        return () => {
            cancelled = true;
        };
    }, [activeSubject]);

    // Get available months based on selected year
    const getAvailableMonths = () => {
        const filteredByYear = filterYear !== 'all'
            ? subjectPapers.filter(p => p.year === parseInt(filterYear))
            : subjectPapers;
        const months = [...new Set(filteredByYear.map(p => p.month))].sort((a, b) => {
            const monthOrder = ['January', 'May', 'October'];
            return monthOrder.indexOf(a) - monthOrder.indexOf(b);
        });
        return months;
    };

    const availableMonths = getAvailableMonths();

    // Reset filters when switching subjects
    const handleSubjectChange = (id) => {
        setSubjectLoadError(null);
        setActiveSubject(id);
        setFilterYear('all');
        setFilterMonth('all');
        setFilterUnit('all');
    };

    const handleSubjectPrefetch = (id) => {
        if (id === activeSubject || subjectDataById[id]) {
            return;
        }

        void loadPastPaperSubject(id)
            .then((subjectData) => {
                setSubjectDataById((prev) => prev[id]
                    ? prev
                    : { ...prev, [id]: subjectData });
            })
            .catch(() => {
                // Ignore prefetch failures and let the active load path handle UI errors.
            });
    };

    // Reset month when year changes
    const handleYearChange = (year) => {
        setFilterYear(year);
        setFilterMonth('all');
    };

    // Filter papers
    const groupedPapersArray = useMemo(() => {
        const filteredPapers = filterPapers(subjectPapers, {
            year: filterYear !== 'all' ? parseInt(filterYear) : null,
            month: filterMonth !== 'all' ? filterMonth : null,
            unit: filterUnit !== 'all' ? filterUnit : null,
        });

        // Sort by date (newest first)
        const sortedPapers = sortPapersByDate(filteredPapers, false);

        // Group papers by year and month (exam session)
        const groupedPapers = sortedPapers.reduce((groups, paper) => {
            const key = `${paper.year}-${paper.month}`;
            if (!groups[key]) {
                groups[key] = {
                    year: paper.year,
                    month: paper.month,
                    papers: []
                };
            }
            groups[key].papers.push(paper);
            return groups;
        }, {});

        return Object.values(groupedPapers);
    }, [subjectPapers, filterYear, filterMonth, filterUnit]);

    const handleSaveAttempt = async ({ scorePercent, durationMinutes, confidence }) => {
        if (!attemptPaper) return;

        setAttemptSaveState('saving');
        await recordPastPaperActivity({
            subject: activeSubject,
            activityType: 'completed_session',
            questionKey: `${attemptPaper.id}:completed:${Date.now()}`,
            prompt: attemptPaper.unitName,
            topic: attemptPaper.unit,
            paperId: attemptPaper.id,
            paperTitle: buildAttemptLabel(attemptPaper),
            scorePercent,
            durationSeconds: durationMinutes * 60,
            confidence,
            metadata: {
                month: attemptPaper.month,
                year: attemptPaper.year,
                totalMarks: attemptPaper.totalMarks,
                duration: attemptPaper.duration,
                type: attemptPaper.type,
            },
        });

        try {
            const rows = await callQuery(api.studyAttempts.listMyPastPaperSessions, { subject: activeSubject });
            setAttempts(rows || []);
            setAttemptsState('ready');
        } catch {
            setAttemptsState('error');
        }

        setAttemptSaveState('idle');
        setAttemptPaper(null);
        setShowPerformance(true);
    };

    return (
        <div className="pastpaper-hub animate-fade-in">
            {/* Bento Header */}
            <div className="pastpaper-page-header">
                <div className="pastpaper-title-group">
                    <div className="pastpaper-subject-icon">
                        <FileQuestion size={28} />
                    </div>
                    <div>
                        <h1 className="pastpaper-page-title">Past Papers</h1>
                        <p className="pastpaper-page-qual">
                            View and download real exam papers with marking schemes — {isLoadingSubject
                                ? `Loading papers… (${subjectPaperCounts[activeSubject] ?? 0} available)`
                                : `${subjectPapers.length} papers available`}
                        </p>
                    </div>
                </div>
            </div>

            {/* Subject Tabs */}
            <div className="pastpaper-subject-buttons">
                {subjects.map(subject => {
                    const Icon = subject.icon;
                    const isActive = activeSubject === subject.id;
                    return (
                        <button
                            key={subject.id}
                            className={`pastpaper-subject-btn ${isActive ? 'active' : ''}`}
                            onClick={() => handleSubjectChange(subject.id)}
                            onMouseEnter={() => handleSubjectPrefetch(subject.id)}
                            onFocus={() => handleSubjectPrefetch(subject.id)}
                            style={{
                                '--subject-accent': subject.color,
                                '--subject-accent-soft': `${subject.color}15`,
                            }}
                        >
                            <Icon size={20} />
                            <span>{subject.name}</span>
                            <span className="pastpaper-subject-count">
                                {subjectDataById[subject.id]?.papers.length ?? subjectPaperCounts[subject.id] ?? '…'}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Filters */}
            <div className="pastpaper-filter-bar">
                <select
                    className="input pastpaper-filter-select"
                    value={filterYear}
                    onChange={e => handleYearChange(e.target.value)}
                    disabled={isLoadingSubject}
                >
                    <option value="all">All Years</option>
                    {subjectYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <select
                    className="input pastpaper-filter-select"
                    value={filterMonth}
                    onChange={e => setFilterMonth(e.target.value)}
                    disabled={filterYear === 'all' || isLoadingSubject}
                >
                    <option value="all">All Months</option>
                    {availableMonths.map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>

                <select
                    className="input pastpaper-filter-select-wide"
                    value={filterUnit}
                    onChange={e => setFilterUnit(e.target.value)}
                    disabled={isLoadingSubject}
                >
                    <option value="all">All Units</option>
                    {subjectUnits.map(unit => (
                        <option key={unit.code} value={unit.code}>
                            {unit.code} – {unit.name.length > 30 ? unit.name.substring(0, 30) + '…' : unit.name}
                        </option>
                    ))}
                </select>

                <button
                    className={`btn ${showPerformance ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setShowPerformance(!showPerformance)}
                >
                    <FileText size={16} /> Analytics
                </button>
            </div>

            {/* Performance Chart */}
            {showPerformance && (
                <Suspense fallback={<div className="card animate-fade-in">Loading analytics...</div>}>
                    {attemptsState === 'loading' ? (
                        <div className="card animate-fade-in">Loading past paper analytics...</div>
                    ) : (
                        <PerformanceChart attempts={attempts} />
                    )}
                </Suspense>
            )}

            {/* Past Papers List */}
            <div className="past-papers-list">
                {isLoadingSubject ? (
                    <div className="empty-state">
                        <div className="empty-state-icon">
                            <Clock size={36} />
                        </div>
                        <h3>Loading papers</h3>
                        <p>Fetching {subjectConfig?.name} papers now</p>
                    </div>
                ) : subjectLoadError ? (
                    <div className="empty-state">
                        <div className="empty-state-icon">
                            <X size={36} />
                        </div>
                        <h3>Could not load papers</h3>
                        <p>Try switching subjects or refreshing the page.</p>
                    </div>
                ) : groupedPapersArray.length > 0 ? (
                    groupedPapersArray.map((session) => (
                        <ExamSessionCard
                            key={`${session.year}-${session.month}`}
                            year={session.year}
                            month={session.month}
                            papers={session.papers}
                            isOLevel={activeSubjectData?.isOLevel || subjectConfig?.isOLevel || false}
                            subjectId={activeSubject}
                            onRecordAttempt={setAttemptPaper}
                        />
                    ))
                ) : (
                    <div className="empty-state">
                        <div className="empty-state-icon">
                            <FileQuestion size={36} />
                        </div>
                        <h3>No papers found</h3>
                        <p>Try adjusting your filters</p>
                    </div>
                )}
            </div>

            {attemptPaper && (
                <RecordAttemptModal
                    paper={attemptPaper}
                    onClose={() => {
                        if (attemptSaveState === 'saving') return;
                        setAttemptPaper(null);
                    }}
                    onSave={handleSaveAttempt}
                    saving={attemptSaveState === 'saving'}
                />
            )}

        </div>
    );
}
