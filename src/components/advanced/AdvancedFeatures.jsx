import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Brain, Send, CheckCircle, XCircle, Loader,
    Upload, Save, FileText, Trash2, Camera, AlertTriangle
} from 'lucide-react';
import { gradeTheoryAnswer } from '../../services/grading/gradingClient';
import useDraftAutosave, { createDraftStorageKey } from '../../hooks/useDraftAutosave';
import {
    DEFAULT_UPLOAD_CONFIG,
    fileFingerprint,
    validateFileBatch,
} from '../../utils/uploadValidation';
import './Advanced.css';

const THEORY_QUESTION = 'Explain how metallic bonding gives metals their properties of electrical conductivity and malleability.';
const THEORY_MARK_SCHEME = 'Metallic bonding involves a lattice of positive metal ions surrounded by a sea of delocalized electrons. Electrical conductivity: delocalized electrons are free to move and carry charge. Malleability: layers of ions can slide over each other without breaking the metallic bond.';

function formatSavedTime(dateValue) {
    if (!dateValue) return '';
    return dateValue.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function AIGrading() {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState(null);
    const [requestState, setRequestState] = useState('idle');
    const [error, setError] = useState('');
    const [showMarkScheme, setShowMarkScheme] = useState(false);
    const mountedRef = useRef(true);
    const controllerRef = useRef(null);

    useEffect(() => {
        return () => {
            mountedRef.current = false;
            if (controllerRef.current) controllerRef.current.abort();
        };
    }, []);

    const handleGrade = async () => {
        if (!answer.trim()) return;

        if (controllerRef.current) controllerRef.current.abort();
        const controller = new AbortController();
        controllerRef.current = controller;

        setRequestState('grading');
        setError('');
        setResult(null);

        try {
            const graded = await gradeTheoryAnswer(
                {
                    question: THEORY_QUESTION,
                    answer,
                    markScheme: THEORY_MARK_SCHEME,
                    context: { topic: 'metallic-bonding', level: 'theory' },
                },
                { signal: controller.signal }
            );

            if (!mountedRef.current || controllerRef.current !== controller) return;

            setResult(graded);
            setRequestState('success');
        } catch (gradingError) {
            if (!mountedRef.current || controllerRef.current !== controller) return;
            if (gradingError?.name === 'AbortError') return;

            setRequestState('error');
            setError(gradingError?.message || 'Grading failed. Please try again.');
        }
    };

    const statusMessage = useMemo(() => {
        if (requestState === 'grading') return 'Grading in progress.';
        if (requestState === 'success') return 'Grading completed successfully.';
        if (requestState === 'error') return 'Grading failed.';
        return '';
    }, [requestState]);

    return (
        <div className="ai-grading avoid-break">
            <div className="ai-header">
                <Brain size={20} />
                <h3>AI Theory Grading</h3>
                <span className="ai-badge">Mock Provider</span>
            </div>

            <div className="ai-question">
                <strong>Question:</strong>
                <p>{THEORY_QUESTION}</p>
            </div>

            {import.meta.env.DEV && (
                <div className="ai-mark-scheme-toggle no-print">
                    <button className="btn btn-ghost btn-sm" onClick={() => setShowMarkScheme((prev) => !prev)}>
                        {showMarkScheme ? 'Hide Mark Scheme' : 'Show Mark Scheme (Dev)'}
                    </button>
                </div>
            )}

            {import.meta.env.DEV && showMarkScheme && (
                <div className="ai-marking-scheme">
                    <strong>Marking Scheme (dev only):</strong>
                    <p className="scheme-text">{THEORY_MARK_SCHEME}</p>
                </div>
            )}

            <div className="ai-answer-area">
                <label htmlFor="theory-answer">Your Answer:</label>
                <textarea
                    id="theory-answer"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    placeholder="Type your theory answer here..."
                    rows={5}
                />
                <button
                    className="btn btn-primary"
                    onClick={handleGrade}
                    disabled={requestState === 'grading' || !answer.trim()}
                >
                    {requestState === 'grading' ? (
                        <><Loader size={14} className="spin" /> Grading...</>
                    ) : (
                        <><Send size={14} /> Grade Answer</>
                    )}
                </button>
                <p className="sr-only" aria-live="polite">{statusMessage}</p>
            </div>

            {requestState === 'error' && (
                <div className="ai-error" role="alert">
                    <AlertTriangle size={14} />
                    <span>{error}</span>
                </div>
            )}

            {result && (
                <div className="ai-result animate-slide-up">
                    <div className="ai-score-ring">
                        <div className={`score-circle ${result.percentage >= 70 ? 'good' : result.percentage >= 40 ? 'ok' : 'poor'}`}>
                            {result.score}/{result.maxScore}
                        </div>
                        <span className="score-pct">{result.percentage}%</span>
                    </div>
                    <div className="ai-feedback">
                        {result.feedback.map((item, index) => (
                            <div key={index} className={`feedback-item ${item.type}`}>
                                {item.type === 'good' ? <CheckCircle size={14} /> : <XCircle size={14} />}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export function DraftAutoSave() {
    const location = useLocation();

    const storageKey = useMemo(() => {
        const routeKey = location.pathname.replaceAll('/', '_') || 'root';
        return createDraftStorageKey(routeKey, 'long-answer');
    }, [location.pathname]);

    const {
        value,
        setValue,
        clear,
        status,
        lastSavedAt,
        error,
    } = useDraftAutosave({
        key: storageKey,
        delayMs: 2000,
        maxChars: 5000,
    });

    const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

    const clearDraft = () => {
        if (!value) return;
        if (window.confirm('Clear this draft permanently?')) {
            clear();
        }
    };

    return (
        <div className="draft-autosave avoid-break">
            <div className="draft-header">
                <FileText size={20} />
                <h3>Draft Auto-Save</h3>
                <div className="draft-status" aria-live="polite">
                    {status === 'saved' && <span className="saved"><Save size={12} /> Saved at {formatSavedTime(lastSavedAt)}</span>}
                    {status === 'saving' && <span className="unsaved">Saving...</span>}
                    {status === 'error' && <span className="draft-error">Save failed</span>}
                </div>
            </div>
            <p className="draft-desc">
                Drafts are auto-saved every 2 seconds and restored per route context. Max length: 5000 characters.
            </p>
            <textarea
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Start typing your theory answer... it will auto-save."
                rows={8}
                className="draft-textarea"
                maxLength={5000}
            />
            {error && (
                <p className="draft-error-msg" role="alert">
                    <AlertTriangle size={14} /> {error}
                </p>
            )}
            <div className="draft-footer">
                <span className="word-count">{wordCount} words · {value.length}/5000 chars</span>
                {value && (
                    <button className="btn btn-ghost btn-sm no-print" onClick={clearDraft}>
                        <Trash2 size={14} /> Clear Draft
                    </button>
                )}
            </div>
        </div>
    );
}

export function PhotoUpload() {
    const [files, setFiles] = useState([]);
    const [dragActive, setDragActive] = useState(false);
    const [rejections, setRejections] = useState([]);
    const inputRef = useRef(null);
    const filesRef = useRef(files);

    useEffect(() => {
        filesRef.current = files;
    }, [files]);

    useEffect(() => {
        return () => {
            filesRef.current.forEach((file) => {
                if (file.preview) URL.revokeObjectURL(file.preview);
            });
        };
    }, []);

    const appendFiles = useCallback((fileList) => {
        const incoming = Array.from(fileList || []);
        if (incoming.length === 0) return;

        setFiles((prev) => {
            const { accepted, rejected } = validateFileBatch(prev, incoming, DEFAULT_UPLOAD_CONFIG);

            setRejections((existing) => [...rejected, ...existing].slice(0, 8));

            const mappedAccepted = accepted.map((file) => ({
                id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
                name: file.name,
                size: file.size,
                type: file.type,
                preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
                fingerprint: fileFingerprint(file),
            }));

            return [...prev, ...mappedAccepted];
        });
    }, []);

    const handleDrop = (event) => {
        event.preventDefault();
        setDragActive(false);
        appendFiles(event.dataTransfer.files);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => setDragActive(false);

    const removeFile = (id) => {
        setFiles((prev) => {
            const target = prev.find((file) => file.id === id);
            if (target?.preview) URL.revokeObjectURL(target.preview);
            return prev.filter((file) => file.id !== id);
        });
    };

    const formatSize = (bytes) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / 1048576).toFixed(1)} MB`;
    };

    const openFileDialog = () => inputRef.current?.click();

    const handleZoneKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openFileDialog();
        }
    };

    return (
        <div className="photo-upload avoid-break">
            <div className="upload-header">
                <Camera size={20} />
                <h3>Upload Handwritten Work</h3>
            </div>
            <p id="upload-guidance" className="upload-desc">
                Upload diagrams, equations, or essays for review. Max {DEFAULT_UPLOAD_CONFIG.maxFiles} files, 10MB each.
            </p>

            <div
                className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={openFileDialog}
                onKeyDown={handleZoneKeyDown}
                role="button"
                tabIndex={0}
                aria-describedby="upload-guidance upload-feedback"
                aria-label="Upload images or PDFs"
            >
                <Upload size={32} />
                <p>Drag and drop files, or <strong>click to browse</strong></p>
                <span>Accepted: JPG, PNG, WEBP, GIF, PDF · Max 10MB</span>
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif,application/pdf"
                    multiple
                    onChange={(event) => appendFiles(event.target.files)}
                    style={{ display: 'none' }}
                />
            </div>

            <div id="upload-feedback" className="sr-only" aria-live="polite">
                {rejections.length > 0 ? `${rejections.length} upload warning(s).` : `${files.length} files uploaded.`}
            </div>

            {rejections.length > 0 && (
                <div className="upload-rejections" role="alert">
                    {rejections.map((entry, index) => (
                        <div key={`${entry.fileName}-${index}`} className="upload-rejection-item">
                            <AlertTriangle size={14} />
                            <span><strong>{entry.fileName}</strong>: {entry.reason}</span>
                        </div>
                    ))}
                </div>
            )}

            {files.length > 0 && (
                <div className="uploaded-files">
                    {files.map((file) => (
                        <div key={file.id} className="file-card">
                            {file.preview ? (
                                <img src={file.preview} alt={file.name} className="file-preview" />
                            ) : (
                                <div className="file-icon"><FileText size={24} /></div>
                            )}
                            <div className="file-info">
                                <div className="file-name" title={file.name}>{file.name}</div>
                                <div className="file-size">{formatSize(file.size)}</div>
                            </div>
                            <button className="btn btn-icon btn-ghost no-print" onClick={() => removeFile(file.id)}>
                                <Trash2 size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
