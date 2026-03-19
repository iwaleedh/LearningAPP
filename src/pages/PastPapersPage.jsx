import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileQuestion, Clock, Download, ChevronDown, ChevronUp, FileText, Beaker, Atom, Dna, Calculator, X, Eye, PenTool } from 'lucide-react';
import PerformanceChart from '../components/pastpapers/PerformanceChart';
import { chemistryPastPapers, availableYears, availableUnits } from '../data/chemistryPastPapers';
import { physicsPastPapers, physicsAvailableYears, physicsAvailableUnits } from '../data/physicsPastPapers';
import { biologyPastPapers, biologyAvailableYears, biologyAvailableUnits } from '../data/biologyPastPapers';
import { mathematicsPastPapers, mathsAvailableYears, mathsAvailableUnits } from '../data/mathematicsPastPapers';
import { businessPastPapers, businessAvailableYears, businessAvailableUnits } from '../data/businessPastPapers';
import { economicsPastPapers, economicsAvailableYears, economicsAvailableUnits } from '../data/economicsPastPapers';
import { accountingPastPapers, accountingAvailableYears, accountingAvailableUnits } from '../data/accountingPastPapers';
import { caePastPapers, caeComponents } from '../data/caePastPapers';
import { cpePastPapers, cpeComponents } from '../data/cpePastPapers';
import { oLevelChemistryPastPapers, oLevelChemistryAvailableYears, oLevelChemistryAvailableUnits } from '../data/oLevelChemistryPastPapers';
import { oLevelPhysicsPastPapers, oLevelPhysicsAvailableYears, oLevelPhysicsAvailableUnits } from '../data/oLevelPhysicsPastPapers';
import { oLevelBiologyPastPapers, oLevelBiologyAvailableYears, oLevelBiologyAvailableUnits } from '../data/oLevelBiologyPastPapers';
import { oLevelMathematicsPastPapers, oLevelMathematicsAvailableYears, oLevelMathematicsAvailableUnits } from '../data/oLevelMathematicsPastPapers';
import { oLevelBusinessPastPapers, oLevelBusinessAvailableYears, oLevelBusinessAvailableUnits } from '../data/oLevelBusinessPastPapers';
import { downloadFile, generateFileName, generateOLevelFileName, filterPapers, sortPapersByDate, getPaperTypeBadge } from '../services/pastPapers/pastPaperService';
import './Pages.css';

// Subject configuration
const subjects = [
    {
        id: 'chemistry', name: 'AL Chemistry', icon: Beaker, color: '#10b981',
        papers: chemistryPastPapers, years: availableYears, units: availableUnits, isOLevel: false
    },
    {
        id: 'physics', name: 'AL Physics', icon: Atom, color: '#8b5cf6',
        papers: physicsPastPapers, years: physicsAvailableYears, units: physicsAvailableUnits, isOLevel: false
    },
    {
        id: 'biology', name: 'AL Biology', icon: Dna, color: '#3b82f6',
        papers: biologyPastPapers, years: biologyAvailableYears, units: biologyAvailableUnits, isOLevel: false
    },
    {
        id: 'mathematics', name: 'AL Mathematics', icon: Calculator, color: '#f59e0b',
        papers: mathematicsPastPapers, years: mathsAvailableYears, units: mathsAvailableUnits, isOLevel: false
    },
    {
        id: 'business', name: 'AL Business', icon: FileText, color: '#ec4899',
        papers: businessPastPapers, years: businessAvailableYears, units: businessAvailableUnits, isOLevel: false
    },
    {
        id: 'economics', name: 'AL Economics', icon: FileText, color: '#14b8a6',
        papers: economicsPastPapers, years: economicsAvailableYears, units: economicsAvailableUnits, isOLevel: false
    },
    {
        id: 'accounting', name: 'AL Accounting', icon: FileQuestion, color: '#f97316',
        papers: accountingPastPapers, years: accountingAvailableYears, units: accountingAvailableUnits, isOLevel: false
    },
    {
        id: 'cae', name: 'CAE (C1)', icon: FileText, color: '#6366f1',
        papers: caePastPapers, years: [2022], units: caeComponents.map(c => ({ code: c.id, name: c.name, type: 'C1 Advanced' })), isOLevel: false
    },
    {
        id: 'cpe', name: 'CPE (C2)', icon: FileText, color: '#0ea5e9',
        papers: cpePastPapers, years: [2022], units: cpeComponents.map(c => ({ code: c.id, name: c.name, type: 'C2 Proficiency' })), isOLevel: false
    },
    {
        id: 'olevel-chemistry', name: 'O Level Chemistry', icon: Beaker, color: '#059669',
        papers: oLevelChemistryPastPapers, years: oLevelChemistryAvailableYears, units: oLevelChemistryAvailableUnits, isOLevel: true
    },
    {
        id: 'olevel-physics', name: 'O Level Physics', icon: Atom, color: '#7c3aed',
        papers: oLevelPhysicsPastPapers, years: oLevelPhysicsAvailableYears, units: oLevelPhysicsAvailableUnits, isOLevel: true
    },
    {
        id: 'olevel-biology', name: 'O Level Biology', icon: Dna, color: '#2563eb',
        papers: oLevelBiologyPastPapers, years: oLevelBiologyAvailableYears, units: oLevelBiologyAvailableUnits, isOLevel: true
    },
    {
        id: 'olevel-mathematics', name: 'O Level Mathematics', icon: Calculator, color: '#d97706',
        papers: oLevelMathematicsPastPapers, years: oLevelMathematicsAvailableYears, units: oLevelMathematicsAvailableUnits, isOLevel: true
    },
    {
        id: 'olevel-business', name: 'O Level Business', icon: FileText, color: '#be185d',
        papers: oLevelBusinessPastPapers, years: oLevelBusinessAvailableYears, units: oLevelBusinessAvailableUnits, isOLevel: true
    },
];

// Download button component
function DownloadButton({ paper, type, label, icon: Icon, isOLevel = false }) {
    const [status, setStatus] = useState(null);

    const url = type === 'question' ? paper.questionPaperUrl : paper.markingSchemeUrl;
    const filename = isOLevel ? generateOLevelFileName(paper, type) : generateFileName(paper, type);

    const handleDownload = () => {
        if (!url) return;

        // External URLs (gceguide.cc, Cambridge Int'l) — open in new tab
        if (url.startsWith('https://')) {
            window.open(url, '_blank', 'noopener,noreferrer');
            setStatus('success');
            setTimeout(() => setStatus(null), 2000);
            return;
        }

        const result = downloadFile(url, filename);

        if (result.success) {
            setStatus('success');
            setTimeout(() => setStatus(null), 2000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus(null), 3000);
        }
    };

    return (
        <button
            className={`btn btn-sm ${status === 'success' ? 'btn-success' : status === 'error' ? 'btn-ghost' : 'btn-primary'}`}
            onClick={handleDownload}
            disabled={!url}
            title={!url ? 'Coming soon' : `${label} PDF`}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
            }}
        >
            <Icon size={14} />
            {status === 'success' ? 'Downloaded!' : status === 'error' ? 'Failed' : label}
        </button>
    );
}

// View PDF button component — always opens in a new browser tab
function ViewPdfButton({ paper, type, label }) {
    const url = type === 'question' ? paper.questionPaperUrl : paper.markingSchemeUrl;

    return (
        <button
            className="btn btn-sm btn-outline"
            onClick={() => url && window.open(url, '_blank', 'noopener,noreferrer')}
            disabled={!url}
            title={!url ? 'Coming soon' : `Open ${label} in new tab`}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
            }}
        >
            <Eye size={14} />
            {label}
        </button>
    );
}

// Past paper card component - grouped by year/month
function ExamSessionCard({ year, month, papers, isOLevel = false }) {
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
                                    />
                                    <DownloadButton
                                        paper={paper}
                                        type="question"
                                        label="Download QP"
                                        icon={Download}
                                        isOLevel={isOLevel}
                                    />
                                    <ViewPdfButton
                                        paper={paper}
                                        type="marking"
                                        label="View Marking Scheme"
                                    />
                                    <DownloadButton
                                        paper={paper}
                                        type="marking"
                                        label="Download MS"
                                        icon={Download}
                                        isOLevel={isOLevel}
                                    />
                                    {paper.questionPaperUrl && (
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => navigate(`/annotate/${paper.id}`)}
                                            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                            title="Open in annotation mode"
                                        >
                                            <PenTool size={14} />
                                            Do it Live
                                        </button>
                                    )}
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
    const [showPerformance, setShowPerformance] = useState(false);

    // Get active subject config
    const subjectConfig = subjects.find(s => s.id === activeSubject);
    const subjectPapers = subjectConfig?.papers || [];
    const subjectYears = subjectConfig?.years || [];
    const subjectUnits = subjectConfig?.units || [];

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
        setActiveSubject(id);
        setFilterYear('all');
        setFilterMonth('all');
        setFilterUnit('all');
    };

    // Reset month when year changes
    const handleYearChange = (year) => {
        setFilterYear(year);
        setFilterMonth('all');
    };

    // Filter papers
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

    const groupedPapersArray = Object.values(groupedPapers);

    return (
        <div className="animate-fade-in" style={{ maxWidth: '1100px' }}>
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Past Papers</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                View and download real exam papers with marking schemes — {subjectPapers.length} papers available
            </p>

            {/* Subject Tabs */}
            <div className="subject-buttons" style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
                {subjects.map(subject => {
                    const Icon = subject.icon;
                    const isActive = activeSubject === subject.id;
                    return (
                        <button
                            key={subject.id}
                            className={`subject-btn ${isActive ? 'active' : ''}`}
                            onClick={() => handleSubjectChange(subject.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-2)',
                                padding: 'var(--space-3) var(--space-4)',
                                borderRadius: 'var(--radius-md)',
                                border: isActive ? `2px solid ${subject.color}` : '2px solid var(--color-border)',
                                background: isActive ? `${subject.color}15` : 'var(--color-bg)',
                                color: isActive ? subject.color : 'var(--color-text)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                fontWeight: isActive ? 700 : 500,
                            }}
                        >
                            <Icon size={20} style={{ color: subject.color }} />
                            <span>{subject.name}</span>
                            <span style={{
                                fontSize: 'var(--font-size-xs)',
                                background: isActive ? subject.color : 'var(--color-bg-secondary)',
                                color: isActive ? '#fff' : 'var(--color-text-tertiary)',
                                borderRadius: 'var(--radius-full)',
                                padding: '1px 7px',
                                fontWeight: 600,
                            }}>
                                {subject.papers.length}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Filters */}
            <div className="filter-bar" style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
                <select
                    className="input"
                    value={filterYear}
                    onChange={e => handleYearChange(e.target.value)}
                    style={{ minWidth: '120px' }}
                >
                    <option value="all">All Years</option>
                    {subjectYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <select
                    className="input"
                    value={filterMonth}
                    onChange={e => setFilterMonth(e.target.value)}
                    style={{ minWidth: '140px' }}
                    disabled={filterYear === 'all'}
                >
                    <option value="all">All Months</option>
                    {availableMonths.map(month => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>

                <select
                    className="input"
                    value={filterUnit}
                    onChange={e => setFilterUnit(e.target.value)}
                    style={{ minWidth: '200px' }}
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
            {showPerformance && <PerformanceChart attempts={attempts} />}

            {/* Past Papers List */}
            <div className="past-papers-list">
                {groupedPapersArray.length > 0 ? (
                    groupedPapersArray.map((session) => (
                        <ExamSessionCard
                            key={`${session.year}-${session.month}`}
                            year={session.year}
                            month={session.month}
                            papers={session.papers}
                            isOLevel={subjectConfig?.isOLevel || false}
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

            {/* PDF Modal Styles */}
            <style>{`
                .pdf-modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.85);
                    -webkit-backdrop-filter: blur(4px);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 3000;
                    padding: var(--space-4);
                }

                .pdf-modal-content {
                    width: 100%;
                    max-width: 1000px;
                    height: 90vh;
                    background: var(--color-surface);
                    border-radius: var(--radius-xl);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    box-shadow: var(--shadow-2xl);
                }

                .pdf-modal-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--space-4) var(--space-5);
                    border-bottom: 1px solid var(--color-border);
                }

                .pdf-modal-header h3 {
                    margin: 0;
                    font-size: var(--font-size-base);
                    font-weight: var(--font-weight-semibold);
                }

                .pdf-modal-body {
                    flex: 1;
                    overflow: hidden;
                }

                .pdf-iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }

                .pdf-modal-footer {
                    display: flex;
                    justify-content: center;
                    padding: var(--space-3) var(--space-5);
                    border-top: 1px solid var(--color-border);
                }
            `}</style>
        </div>
    );
}
