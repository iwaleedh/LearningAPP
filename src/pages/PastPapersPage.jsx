import { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileQuestion, Clock, Download, ChevronDown, FileText, Beaker, Atom, Dna, Calculator, X, Eye, PenTool, TrendingUp, BookOpen, Ellipsis, BarChart3 } from 'lucide-react';
import { loadPastPaperSubject, subjectPaperCounts } from '../data/pastPapers/index.js';
import { downloadFile, generateFileName, generateOLevelFileName, filterPapers, sortPapersByDate, getPaperTypeBadge } from '../services/pastPapers/pastPaperService';
import { incrementPapersViewed } from '../services/activityStore.js';
import { recordPastPaperActivity } from '../services/studyAttemptService.js';
import { api, callQuery, getClient } from '../convex-client.js';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import PageHeader from '../components/common/PageHeader.jsx';
import SubjectPicker from '../components/common/SubjectPicker.jsx';
import './Pages.css';

const PerformanceChart = lazy(() => import('../components/pastpapers/PerformanceChart'));
const EMPTY_LIST = [];

// Subject configuration
const subjects = [
    {
        id: 'chemistry', name: 'AL Chemistry', icon: Beaker, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'physics', name: 'AL Physics', icon: Atom, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'biology', name: 'AL Biology', icon: Dna, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'mathematics', name: 'AL Mathematics', icon: Calculator, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'business', name: 'AL Business', icon: FileText, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'economics', name: 'AL Economics', icon: FileText, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'accounting', name: 'AL Accounting', icon: FileQuestion, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'cae', name: 'C1 Advanced', icon: FileText, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'cpe', name: 'C2 Proficiency', icon: FileText, color: 'var(--color-primary)',
        isOLevel: false,
    },
    {
        id: 'olevel-chemistry', name: 'IGCSE Chemistry', icon: Beaker, color: 'var(--color-primary)',
        isOLevel: true,
    },
    {
        id: 'olevel-physics', name: 'IGCSE Physics', icon: Atom, color: 'var(--color-primary)',
        isOLevel: true,
    },
    {
        id: 'olevel-biology', name: 'IGCSE Biology', icon: Dna, color: 'var(--color-primary)',
        isOLevel: true,
    },
    {
        id: 'olevel-mathematics', name: 'IGCSE Mathematics', icon: Calculator, color: 'var(--color-primary)',
        isOLevel: true,
    },
    {
        id: 'olevel-business', name: 'IGCSE Business', icon: FileText, color: 'var(--color-primary)',
        isOLevel: true,
    },
    {
        id: 'olevel-accounting', name: 'IGCSE Accounting', icon: BookOpen, color: 'var(--color-primary)',
        isOLevel: true,
    },
    {
        id: 'olevel-economics', name: 'IGCSE Economics', icon: TrendingUp, color: 'var(--color-primary)',
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
                        <h3 id="attempt-modal-title">Log your score</h3>
                        <p>{paper.unit} • {paper.unitName}</p>
                    </div>
                    <button type="button" className="btn btn-ghost btn-sm" onClick={onClose} disabled={saving} aria-label="Close">
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
                        <span>Time spent (minutes)</span>
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
                        {saving ? 'Saving…' : 'Save score'}
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
            className="paper-more-item"
            onClick={handleDownload}
            disabled={!url}
            title={!url ? 'Not available yet' : `${label} (PDF)`}
        >
            <Icon size={16} aria-hidden="true" />
            {status === 'success' ? 'Downloaded' : status === 'error' ? 'Download failed, try again' : label}
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
            className={`btn btn-sm btn-outline paper-view-btn${type === 'question' ? ' paper-view-btn--main' : ''}`}
            onClick={handleView}
            disabled={!url}
            title={!url ? 'Not available yet' : `Open the ${label.toLowerCase()} in a new tab`}
        >
            {type === 'question' ? <Eye size={16} aria-hidden="true" /> : <FileText size={16} aria-hidden="true" />}
            {label}
        </button>
    );
}

function PaperRow({ paper, isOLevel, subjectId, onRecordAttempt }) {
    const [moreOpen, setMoreOpen] = useState(false);
    const navigate = useNavigate();
    const moreId = `paper-more-${paper.id}`.replace(/[^a-zA-Z0-9-]/g, '-');

    return (
        <li className="paper-row">
            <div className="paper-row-main">
                <div className="paper-row-tags">
                    <span className="paper-row-code">{paper.unit}</span>
                    {paper.type && <span className={`badge ${getPaperTypeBadge(paper.type)}`}>{paper.type}</span>}
                </div>
                <p className="paper-row-title">{paper.unitName}</p>
                <p className="paper-row-meta">
                    <Clock size={13} aria-hidden="true" /> {paper.duration} · {paper.totalMarks} marks
                </p>
            </div>
            <div className="paper-row-actions">
                <ViewPdfButton paper={paper} type="question" label="Question paper" subjectId={subjectId} />
                <ViewPdfButton paper={paper} type="marking" label="Mark scheme" subjectId={subjectId} />
                <button
                    type="button"
                    className="btn btn-ghost btn-icon paper-more-btn"
                    aria-expanded={moreOpen}
                    aria-controls={moreId}
                    aria-label={`More options for ${paper.unit} ${paper.unitName}`}
                    onClick={() => setMoreOpen((value) => !value)}
                >
                    <Ellipsis size={18} aria-hidden="true" />
                </button>
            </div>
            {moreOpen && (
                <div className="paper-more" id={moreId}>
                    <DownloadButton paper={paper} type="question" label="Download paper" icon={Download} isOLevel={isOLevel} subjectId={subjectId} />
                    <DownloadButton paper={paper} type="marking" label="Download mark scheme" icon={Download} isOLevel={isOLevel} subjectId={subjectId} />
                    {paper.questionPaperUrl && (
                        <button className="paper-more-item" onClick={() => navigate(`/annotate/${paper.id}`)}>
                            <PenTool size={16} aria-hidden="true" /> Annotate on screen
                        </button>
                    )}
                    <button className="paper-more-item" onClick={() => onRecordAttempt?.(paper)}>
                        <TrendingUp size={16} aria-hidden="true" /> Log your score
                    </button>
                </div>
            )}
        </li>
    );
}

// One exam session (e.g. "January 2026"), collapsible; the newest session starts open
function ExamSessionCard({ year, month, papers, isOLevel = false, subjectId, onRecordAttempt, defaultExpanded = false }) {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const sessionId = `pastpaper-session-${year}-${String(month).toLowerCase()}`.replace(/[^a-z0-9-]/g, '-');

    return (
        <section className={`paper-session ${expanded ? 'is-open' : ''}`}>
            <h2 className="paper-session-heading">
                <button
                    type="button"
                    className="paper-session-head"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-controls={sessionId}
                >
                    <span className="paper-session-title">{month} {year}</span>
                    <span className="paper-session-count">{papers.length} {papers.length === 1 ? 'paper' : 'papers'}</span>
                    <ChevronDown size={18} className="paper-session-chevron" aria-hidden="true" />
                </button>
            </h2>
            {expanded && (
                <ul className="list-card paper-list" id={sessionId}>
                    {papers.map((paper) => (
                        <PaperRow key={paper.id} paper={paper} isOLevel={isOLevel} subjectId={subjectId} onRecordAttempt={onRecordAttempt} />
                    ))}
                </ul>
            )}
        </section>
    );
}

const PAPER_GROUPS = [
    { id: 'alevel', label: 'A Level' },
    { id: 'igcse', label: 'IGCSE' },
    { id: 'english', label: 'English' },
];

function paperGroupOf(subjectId = '') {
    if (subjectId.startsWith('olevel')) return 'igcse';
    if (subjectId === 'cae' || subjectId === 'cpe') return 'english';
    return 'alevel';
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
    const subjectPapers = useMemo(() => activeSubjectData?.papers || EMPTY_LIST, [activeSubjectData]);
    const subjectYears = useMemo(() => activeSubjectData?.years || EMPTY_LIST, [activeSubjectData]);
    const subjectUnits = useMemo(() => activeSubjectData?.units || EMPTY_LIST, [activeSubjectData]);
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

    const activePaperGroup = paperGroupOf(activeSubject);
    const paperSubjectGroups = PAPER_GROUPS.map((group) => ({
        ...group,
        subjects: subjects
            .filter((subject) => paperGroupOf(subject.id) === group.id)
            .map((subject) => ({
                id: subject.id,
                name: subject.name.replace(/^(AL|IGCSE) /, ''),
                count: subjectDataById[subject.id]?.papers.length ?? subjectPaperCounts[subject.id] ?? null,
            })),
    }));

    return (
        <div className="pastpaper-hub">
            <PageHeader
                title="Past papers"
                description={isLoadingSubject
                    ? 'Real exam papers with mark schemes. Loading…'
                    : 'Real exam papers with mark schemes, newest session first.'}
            />

            <SubjectPicker
                groups={paperSubjectGroups}
                groupId={activePaperGroup}
                subjectId={activeSubject}
                onGroupChange={(group) => {
                    const first = subjects.find((subject) => paperGroupOf(subject.id) === group.id);
                    if (first && paperGroupOf(activeSubject) !== group.id) handleSubjectChange(first.id);
                }}
                onSubjectChange={handleSubjectChange}
                onSubjectIntent={handleSubjectPrefetch}
            />

            {/* Filters */}
            <div className="pastpaper-filter-bar">
                <select
                    className="select pastpaper-filter-select"
                    value={filterYear}
                    onChange={e => handleYearChange(e.target.value)}
                    disabled={isLoadingSubject}
                    aria-label="Filter papers by year"
                >
                    <option value="all">All years</option>
                    {subjectYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <select
                    className="select pastpaper-filter-select"
                    value={filterMonth}
                    onChange={e => setFilterMonth(e.target.value)}
                    disabled={filterYear === 'all' || isLoadingSubject}
                    aria-label="Filter papers by exam session"
                >
                    <option value="all">All sessions</option>
                    {availableMonths.map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>

                <select
                    className="select pastpaper-filter-select-wide"
                    value={filterUnit}
                    onChange={e => setFilterUnit(e.target.value)}
                    disabled={isLoadingSubject}
                    aria-label="Filter papers by unit"
                >
                    <option value="all">All units</option>
                    {subjectUnits.map(unit => (
                        <option key={unit.code} value={unit.code}>
                            {unit.code} – {unit.name.length > 30 ? unit.name.substring(0, 30) + '…' : unit.name}
                        </option>
                    ))}
                </select>

                <button
                    type="button"
                    className="btn btn-outline pastpaper-analytics-btn"
                    onClick={() => setShowPerformance(!showPerformance)}
                    aria-expanded={showPerformance}
                    aria-pressed={showPerformance}
                >
                    <BarChart3 size={16} aria-hidden="true" /> Your scores
                </button>
            </div>

            {/* Performance Chart */}
            {showPerformance && (
                <Suspense fallback={<div className="card">Loading your scores…</div>}>
                    <ErrorBoundary name="PerformanceChart" inline>
                    {attemptsState === 'loading' ? (
                        <div className="card">Loading your scores…</div>
                    ) : (
                        <PerformanceChart attempts={attempts} />
                    )}
                    </ErrorBoundary>
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
                        <h3>Could not load these papers</h3>
                        <p>Check your connection, then pick the subject again or refresh the page.</p>
                    </div>
                ) : groupedPapersArray.length > 0 ? (
                    groupedPapersArray.map((session, sessionIndex) => (
                        <ErrorBoundary key={`eb-${session.year}-${session.month}`} name={`ExamSession:${session.year}-${session.month}`} inline>
                        <ExamSessionCard
                            key={`${session.year}-${session.month}`}
                            year={session.year}
                            month={session.month}
                            papers={session.papers}
                            isOLevel={activeSubjectData?.isOLevel || subjectConfig?.isOLevel || false}
                            subjectId={activeSubject}
                            onRecordAttempt={setAttemptPaper}
                            defaultExpanded={sessionIndex === 0}
                        />
                        </ErrorBoundary>
                    ))
                ) : (
                    <div className="empty-state">
                        <div className="empty-state-icon">
                            <FileQuestion size={36} />
                        </div>
                        <h3>No papers match these filters</h3>
                        <p>Try a different year, session or unit.</p>
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
