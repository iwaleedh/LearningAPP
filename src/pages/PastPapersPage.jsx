import { useState } from 'react';
import { FileQuestion, Clock, Play, BarChart3, ArrowLeft, Download, ChevronDown, ChevronUp, FileText, Beaker, Atom, Dna, Calculator } from 'lucide-react';
import TimedExam from '../components/pastpapers/TimedExam';
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
import { downloadFile, generateFileName, filterPapers, sortPapersByDate, getPaperTypeBadge } from '../services/pastPapers/pastPaperService';
import './Pages.css';

// Subject configuration
const subjects = [
    {
        id: 'chemistry', name: 'Chemistry', icon: Beaker, color: '#10b981',
        papers: chemistryPastPapers, years: availableYears, units: availableUnits
    },
    {
        id: 'physics', name: 'Physics', icon: Atom, color: '#8b5cf6',
        papers: physicsPastPapers, years: physicsAvailableYears, units: physicsAvailableUnits
    },
    {
        id: 'biology', name: 'Biology', icon: Dna, color: '#3b82f6',
        papers: biologyPastPapers, years: biologyAvailableYears, units: biologyAvailableUnits
    },
    {
        id: 'mathematics', name: 'Maths', icon: Calculator, color: '#f59e0b',
        papers: mathematicsPastPapers, years: mathsAvailableYears, units: mathsAvailableUnits
    },
    {
        id: 'business', name: 'Business', icon: FileText, color: '#ec4899',
        papers: businessPastPapers, years: businessAvailableYears, units: businessAvailableUnits
    },
    {
        id: 'economics', name: 'Economics', icon: BarChart3, color: '#14b8a6',
        papers: economicsPastPapers, years: economicsAvailableYears, units: economicsAvailableUnits
    },
    {
        id: 'accounting', name: 'Accounting', icon: FileQuestion, color: '#f97316',
        papers: accountingPastPapers, years: accountingAvailableYears, units: accountingAvailableUnits
    },
    {
        id: 'cae', name: 'CAE (C1)', icon: FileText, color: '#6366f1',
        papers: caePastPapers, years: [2022], units: caeComponents.map(c => ({ code: c.id, name: c.name, type: 'C1 Advanced' }))
    },
    {
        id: 'cpe', name: 'CPE (C2)', icon: FileText, color: '#0ea5e9',
        papers: cpePastPapers, years: [2022], units: cpeComponents.map(c => ({ code: c.id, name: c.name, type: 'C2 Proficiency' }))
    },
];

// Sample papers with embedded questions (for practice mode)
const samplePapers = [
    {
        id: 1, year: 2024, subject: 'Chemistry', variant: 'Paper 1',
        questions: 10, duration: '1 hour', durationSeconds: 300, type: 'MCQ',
        questionBank: [
            {
                stem: 'What is the relative charge of a proton?',
                options: ['+1', '-1', '0', '+2'],
                correctAnswer: 0,
                rationale: 'A proton has a relative charge of +1.',
                topic: 'Atomic Structure',
            },
            {
                stem: 'Which subatomic particle has a relative mass of approximately 1/1840?',
                options: ['Proton', 'Neutron', 'Electron', 'Positron'],
                correctAnswer: 2,
                rationale: 'Electrons have a very small mass, approximately 1/1840 of a proton.',
                topic: 'Atomic Structure',
            },
            {
                stem: 'The atomic number of an element is the number of:',
                options: ['Neutrons', 'Protons', 'Protons + Neutrons', 'Electrons in outer shell'],
                correctAnswer: 1,
                rationale: 'The atomic number (Z) equals the number of protons in the nucleus.',
                topic: 'Atomic Structure',
            },
            {
                stem: 'Isotopes of an element have the same number of:',
                options: ['Neutrons', 'Protons', 'Mass number', 'Nucleons'],
                correctAnswer: 1,
                rationale: 'Isotopes have the same atomic number (protons) but different mass numbers.',
                topic: 'Isotopes',
            },
            {
                stem: 'What type of bonding involves the sharing of electrons?',
                options: ['Ionic', 'Metallic', 'Covalent', 'Hydrogen'],
                correctAnswer: 2,
                rationale: 'Covalent bonding involves the sharing of electron pairs between atoms.',
                topic: 'Chemical Bonding',
            },
            {
                stem: 'In ionic bonding, electrons are:',
                options: ['Shared equally', 'Shared unequally', 'Transferred', 'Delocalised'],
                correctAnswer: 2,
                rationale: 'Ionic bonding involves the transfer of electrons from metal to non-metal atoms.',
                topic: 'Chemical Bonding',
            },
            {
                stem: 'The maximum number of electrons in the second shell is:',
                options: ['2', '8', '18', '32'],
                correctAnswer: 1,
                rationale: 'The second electron shell can hold a maximum of 8 electrons (2n², where n=2).',
                topic: 'Electron Configuration',
            },
            {
                stem: 'Which element has the electron configuration 2,8,1?',
                options: ['Lithium', 'Sodium', 'Potassium', 'Magnesium'],
                correctAnswer: 1,
                rationale: 'Sodium (Na, Z=11) has 2 electrons in the first shell, 8 in the second, and 1 in the third.',
                topic: 'Electron Configuration',
            },
            {
                stem: 'A cation is formed when an atom:',
                options: ['Gains electrons', 'Loses electrons', 'Shares electrons', 'Gains neutrons'],
                correctAnswer: 1,
                rationale: 'A cation (positive ion) is formed when an atom loses one or more electrons.',
                topic: 'Ions',
            },
            {
                stem: 'What is the formula of magnesium oxide?',
                options: ['MgO', 'Mg₂O', 'MgO₂', 'Mg₂O₃'],
                correctAnswer: 0,
                rationale: 'Mg²⁺ combines with O²⁻ in a 1:1 ratio, giving the formula MgO.',
                topic: 'Chemical Formulae',
            },
        ],
    },
    {
        id: 2, year: 2024, subject: 'Chemistry', variant: 'Paper 2',
        questions: 6, duration: '1h 15m', durationSeconds: 300, type: 'Theory',
        questionBank: [],
    },
    {
        id: 3, year: 2023, subject: 'Chemistry', variant: 'Paper 1',
        questions: 10, duration: '1 hour', durationSeconds: 300, type: 'MCQ',
        questionBank: [
            {
                stem: 'Which particle is negatively charged?',
                options: ['Proton', 'Neutron', 'Electron', 'Alpha particle'],
                correctAnswer: 2,
                rationale: 'Electrons carry a negative charge of -1.',
                topic: 'Atomic Structure',
            },
            {
                stem: 'The mass number is the total number of:',
                options: ['Protons', 'Electrons', 'Protons and neutrons', 'Protons and electrons'],
                correctAnswer: 2,
                rationale: 'Mass number (A) = protons + neutrons (nucleons in the nucleus).',
                topic: 'Atomic Structure',
            },
            {
                stem: 'Diamond is a form of carbon with:',
                options: ['Ionic bonds', 'Metallic bonds', 'Covalent bonds', 'Van der Waals forces only'],
                correctAnswer: 2,
                rationale: 'Diamond has a giant covalent structure with strong covalent bonds between carbon atoms.',
                topic: 'Chemical Bonding',
            },
            {
                stem: 'What is the charge on a chloride ion?',
                options: ['+1', '-1', '+2', '-2'],
                correctAnswer: 1,
                rationale: 'Chlorine gains one electron to form Cl⁻ with a charge of -1.',
                topic: 'Ions',
            },
            {
                stem: 'Group 1 metals react with water to form:',
                options: ['An acid', 'A hydroxide and hydrogen', 'An oxide', 'A sulphate'],
                correctAnswer: 1,
                rationale: 'Group 1 metals react with water to produce a metal hydroxide and hydrogen gas.',
                topic: 'Reactivity',
            },
        ],
    },
    {
        id: 4, year: 2023, subject: 'Chemistry', variant: 'Paper 2',
        questions: 6, duration: '1h 15m', durationSeconds: 300, type: 'Theory',
        questionBank: [],
    },
    {
        id: 5, year: 2022, subject: 'Chemistry', variant: 'Paper 1',
        questions: 10, duration: '1 hour', durationSeconds: 300, type: 'MCQ',
        questionBank: [],
    },
    {
        id: 6, year: 2022, subject: 'Chemistry', variant: 'Paper 2',
        questions: 6, duration: '1h 15m', durationSeconds: 300, type: 'Theory',
        questionBank: [],
    },
];

// Download status component
function DownloadButton({ paper, type, label }) {
    const [downloading, setDownloading] = useState(false);
    const [status, setStatus] = useState(null);

    const url = type === 'question' ? paper.questionPaperUrl : paper.markingSchemeUrl;
    const filename = generateFileName(paper, type);

    const handleDownload = async () => {
        if (!url) return;

        setDownloading(true);
        setStatus(null);

        const result = await downloadFile(url, filename);

        setDownloading(false);

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
            className={`btn btn-sm ${status === 'success' ? 'btn-success' : status === 'error' ? 'btn-ghost' : 'btn-outline'}`}
            onClick={handleDownload}
            disabled={downloading || !url}
            title={!url ? 'Coming soon' : `Download ${label}`}
        >
            <Download size={14} />
            {downloading ? 'Downloading...' : status === 'success' ? 'Downloaded!' : status === 'error' ? 'Failed' : label}
        </button>
    );
}

// Past paper card component
function PastPaperCard({ paper, onStartPractice }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="past-paper-card card">
            <div className="past-paper-header" onClick={() => setExpanded(!expanded)}>
                <div className="past-paper-main">
                    <span className="past-paper-year">{paper.year}</span>
                    <span className="past-paper-month">{paper.month}</span>
                    <span className={`badge ${getPaperTypeBadge(paper.type)}`}>{paper.type}</span>
                </div>
                <div className="past-paper-info">
                    <h4>{paper.unit} - {paper.paper}</h4>
                    <p>{paper.unitName}</p>
                    <p className="past-paper-meta">
                        <Clock size={12} /> {paper.duration} · {paper.totalMarks} marks
                    </p>
                </div>
                <div className="past-paper-expand">
                    {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
            </div>

            {expanded && (
                <div className="past-paper-details">
                    <div className="past-paper-downloads">
                        <DownloadButton paper={paper} type="question" label="Question Paper" />
                        <DownloadButton paper={paper} type="marking" label="Marking Scheme" />
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.stopPropagation();
                            onStartPractice(paper);
                        }}
                    >
                        <Play size={14} /> Practice Questions
                    </button>
                </div>
            )}
        </div>
    );
}

// Marking scheme dropdown component
function MarkingSchemeDropdown({ question }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!question.rationale && !question.markingScheme) {
        return null;
    }

    return (
        <div className="marking-scheme-dropdown">
            <button
                className="btn btn-sm btn-outline marking-scheme-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FileText size={14} />
                Marking Scheme
                {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {isOpen && (
                <div className="marking-scheme-content">
                    {question.markingScheme && (
                        <div className="marking-scheme-section">
                            <strong>Mark Scheme:</strong>
                            <p>{question.markingScheme}</p>
                        </div>
                    )}
                    {question.rationale && (
                        <div className="marking-scheme-section">
                            <strong>Explanation:</strong>
                            <p>{question.rationale}</p>
                        </div>
                    )}
                    {question.marks && (
                        <div className="marking-scheme-marks">
                            <strong>Marks:</strong> {question.marks}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default function PastPapersPage() {
    const [activeSubject, setActiveSubject] = useState('chemistry');
    const [filterYear, setFilterYear] = useState('all');
    const [filterUnit, setFilterUnit] = useState('all');
    const [viewMode, setViewMode] = useState('downloads'); // 'downloads' or 'practice'
    const [activePaper, setActivePaper] = useState(null);
    const [attempts, setAttempts] = useState([]);
    const [showPerformance, setShowPerformance] = useState(false);

    // Get active subject config
    const subjectConfig = subjects.find(s => s.id === activeSubject);
    const subjectPapers = subjectConfig?.papers || [];
    const subjectYears = subjectConfig?.years || [];
    const subjectUnits = subjectConfig?.units || [];

    // Reset filters when switching subjects
    const handleSubjectChange = (id) => {
        setActiveSubject(id);
        setFilterYear('all');
        setFilterUnit('all');
    };

    // Filter papers
    const filteredPapers = filterPapers(subjectPapers, {
        year: filterYear !== 'all' ? parseInt(filterYear) : null,
        unit: filterUnit !== 'all' ? filterUnit : null,
    });

    // Sort by date (newest first)
    const sortedPapers = sortPapersByDate(filteredPapers, false);

    // Filter sample papers for practice mode
    const filteredSamplePapers = samplePapers.filter(p => {
        if (filterYear !== 'all' && p.year !== parseInt(filterYear)) return false;
        return true;
    });

    const handleStart = (paper) => {
        // Check if it's a real past paper (from chembase) or a sample
        if (paper.questionBank && paper.questionBank.length === 0) {
            alert('Questions for this paper are being prepared. Please download the question paper and try practice mode with sample questions.');
            return;
        }
        setActivePaper(paper);
    };

    const handleStartFromRealPaper = (paper) => {
        // Find matching sample paper or use first one
        const samplePaper = samplePapers.find(p =>
            p.year === paper.year && p.subject === paper.subject && p.type === paper.type
        ) || samplePapers[0];

        if (samplePaper.questionBank.length === 0) {
            alert('Sample questions not available for this paper yet.');
            return;
        }
        setActivePaper(samplePaper);
    };

    const handleFinish = (result) => {
        const topicScores = {};
        const paper = activePaper;
        paper.questionBank.forEach((q, i) => {
            const topic = q.topic;
            if (!topicScores[topic]) topicScores[topic] = { correct: 0, total: 0 };
            topicScores[topic].total++;
            if (result.answers[i] === q.correctAnswer) topicScores[topic].correct++;
        });

        const topicPercentages = {};
        Object.entries(topicScores).forEach(([topic, { correct, total }]) => {
            topicPercentages[topic] = Math.round((correct / total) * 100);
        });

        setAttempts(prev => [...prev, {
            label: `${paper.year} P${paper.variant.slice(-1)}`,
            percentage: result.percentage,
            score: result.score,
            total: result.total,
            topicScores: topicPercentages,
        }]);
        setActivePaper(null);
        setShowPerformance(true);
    };

    // Active exam
    if (activePaper) {
        return (
            <div className="animate-fade-in" style={{ maxWidth: '900px' }}>
                <button className="btn btn-ghost" onClick={() => setActivePaper(null)} style={{ marginBottom: 'var(--space-4)' }}>
                    <ArrowLeft size={16} /> Quit Exam
                </button>
                <h2 style={{ marginBottom: 'var(--space-2)' }}>
                    {activePaper.subject} — {activePaper.variant} ({activePaper.year})
                </h2>
                <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                    {activePaper.questionBank.length} questions · {activePaper.duration} time limit
                </p>
                <TimedExam
                    paper={activePaper}
                    questions={activePaper.questionBank}
                    onFinish={handleFinish}
                />
            </div>
        );
    }

    return (
        <div className="animate-fade-in" style={{ maxWidth: '1100px' }}>
            <h1 style={{ marginBottom: 'var(--space-2)' }}>Past Papers</h1>
            <p style={{ marginBottom: 'var(--space-6)' }}>
                Download real exam papers or practice with sample questions — {subjectPapers.length} papers available
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

            {/* View Mode Toggle */}
            <div className="view-mode-toggle" style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                <button
                    className={`btn ${viewMode === 'downloads' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setViewMode('downloads')}
                >
                    <Download size={16} /> Download Papers
                </button>
                <button
                    className={`btn ${viewMode === 'practice' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setViewMode('practice')}
                >
                    <Play size={16} /> Practice Mode
                </button>
            </div>

            {/* Filters */}
            <div className="filter-bar" style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
                <select
                    className="input"
                    value={filterYear}
                    onChange={e => setFilterYear(e.target.value)}
                    style={{ minWidth: '120px' }}
                >
                    <option value="all">All Years</option>
                    {subjectYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                {viewMode === 'downloads' && (
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
                )}

                <button
                    className={`btn ${showPerformance ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => setShowPerformance(!showPerformance)}
                >
                    <BarChart3 size={16} /> Analytics
                </button>
            </div>

            {/* Performance Chart */}
            {showPerformance && <PerformanceChart attempts={attempts} />}

            {/* Content based on view mode */}
            {viewMode === 'downloads' ? (
                <div className="past-papers-list">
                    {sortedPapers.length > 0 ? (
                        sortedPapers.map((paper) => (
                            <PastPaperCard
                                key={paper.id}
                                paper={paper}
                                onStartPractice={handleStartFromRealPaper}
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
            ) : (
                <div className="paper-list">
                    {filteredSamplePapers.map((paper, i) => (
                        <div
                            key={paper.id}
                            className="paper-card card card-hover animate-fade-in"
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            <div className="paper-info">
                                <span className="paper-year">{paper.year}</span>
                                <div className="paper-details">
                                    <h4>{paper.subject} — {paper.variant}</h4>
                                    <p>
                                        <Clock size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> {paper.duration} · {paper.questions} questions
                                    </p>
                                </div>
                            </div>
                            <div className="paper-badges">
                                <span className={`badge ${paper.type === 'MCQ' ? 'badge-primary' : 'badge-warning'}`}>
                                    {paper.type}
                                </span>
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => handleStart(paper)}
                                >
                                    <Play size={14} /> Start
                                </button>
                            </div>
                        </div>
                    ))}

                    {filteredSamplePapers.length === 0 && (
                        <div className="empty-state">
                            <div className="empty-state-icon">
                                <FileQuestion size={36} />
                            </div>
                            <h3>No papers found</h3>
                            <p>Try adjusting your filters</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
