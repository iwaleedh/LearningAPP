import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { initConvex, getCurrentUserId, getMyPendingInvites, callQuery, api } from '../convex-client.js';
import { useAuth } from '../hooks/useAuth.js';
import { createSessionSync } from '../services/annotation/sessionSync.js';
import ShareDialog from '../components/annotation/ShareDialog.jsx';
import { getPaperById } from '../data/pastPapers/index.js';
import { savePageAnnotation, getPageAnnotations } from '../services/annotation/annotationStore';
import { createUndoManager } from '../services/annotation/undoManager';
import { loadPdfJs } from '../services/pdf/loadPdfJs.js';
import AnnotationToolbar from '../components/annotation/AnnotationToolbar';
import ThumbnailSidebar from '../components/annotation/ThumbnailSidebar';
import AnnotationCanvas from '../components/annotation/AnnotationCanvas';
import { DEFAULT_TEXT_FONT } from '../components/liveclass/fontDefaults.js';
import './Pages.css';

const PDF_SCALE = 1.5;

export default function AnnotatePage() {
    const { paperId } = useParams();
    const navigate = useNavigate();
    const { username, isSignedIn, canSignIn } = useAuth();

    // Paper + PDF
    const [paper, setPaper] = useState(null);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pdfDimensions, setPdfDimensions] = useState(null);
    const [pdfStatus, setPdfStatus] = useState('loading'); // 'loading' | 'ready' | 'error'

    // Tools
    const [activeTool, setActiveTool] = useState('pen');
    const [toolOptions, setToolOptions] = useState({
        color: '#ef4444',
        width: 4,
        ...DEFAULT_TEXT_FONT,
        fill: '#ef4444',
    });

    // Persistence
    const [dirty, setDirty] = useState(false);
    const [saveStatus, setSaveStatus] = useState(null); // null | 'saving' | 'saved'
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);

    // Refs
    const canvasRef = useRef(null);        // AnnotationCanvas imperative handle
    const pdfCanvasRef = useRef(null);     // raw <canvas> for pdf.js rendering
    const renderTaskRef = useRef(null);
    const loadingTaskRef = useRef(null);
    const undoMgr = useRef(createUndoManager());
    const annotationsCache = useRef({});   // pageNum → fabricJson
    const autoSaveTimer = useRef(null);

    // ── Live session state ────────────────────────────────────────────────
    const [activeSession, setActiveSession] = useState(null);
    const [sessionParticipants, setSessionParticipants] = useState([]);
    const [pendingInvites, setPendingInvites] = useState([]);
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [shareAuthMessage, setShareAuthMessage] = useState('');
    const [spaceReady, setSpaceReady] = useState(false);
    const [myIdentityHex, setMyIdentityHex] = useState('');
    const sessionSyncRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        let cancelled = false;

        setPaper(null);

        void getPaperById(paperId).then((resolvedPaper) => {
            if (cancelled) return;

            if (!resolvedPaper) {
                navigate('/past-papers', { replace: true });
                return;
            }

            setPaper(resolvedPaper);
        });

        return () => {
            cancelled = true;
        };
    }, [paperId, navigate]);

    // ── PDF document loading ──────────────────────────────────────────────
    useEffect(() => {
        if (!paper?.questionPaperUrl) return;
        setPdfStatus('loading');
        setPdfDoc(null);
        setPageCount(0);
        setCurrentPage(1);

        let cancelled = false;

        void loadPdfJs()
            .then((pdfjsLib) => {
                if (cancelled) return;

                const task = pdfjsLib.getDocument(paper.questionPaperUrl);
                loadingTaskRef.current = task;
                return task.promise.then((pdf) => {
                    if (cancelled) return;
                    setPdfDoc(pdf);
                    setPageCount(pdf.numPages);
                    setPdfStatus('ready');
                });
            })
            .catch(() => {
                if (!cancelled) {
                    setPdfStatus('error');
                }
            });

        return () => {
            cancelled = true;
            loadingTaskRef.current?.destroy?.();
        };
    }, [paper]);

    // ── Load cached annotations from IndexedDB ────────────────────────────
    useEffect(() => {
        if (!paper) return;
        getPageAnnotations(paper.id).then((annotations) => {
            annotationsCache.current = annotations;
        });
    }, [paper]);

    // ── Render current PDF page ───────────────────────────────────────────
    useEffect(() => {
        if (!pdfDoc || !pdfCanvasRef.current) return;
        const dpr = window.devicePixelRatio || 1;

        renderTaskRef.current?.cancel();

        pdfDoc.getPage(currentPage).then((page) => {
            if (!pdfCanvasRef.current) return;
            const viewport = page.getViewport({ scale: PDF_SCALE * dpr });
            const canvas = pdfCanvasRef.current;

            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const logW = viewport.width / dpr;
            const logH = viewport.height / dpr;
            canvas.style.width = logW + 'px';
            canvas.style.height = logH + 'px';

            setPdfDimensions({ width: logW, height: logH });

            const ctx = canvas.getContext('2d');
            const task = page.render({ canvasContext: ctx, viewport });
            renderTaskRef.current = task;
            task.promise.catch(() => {}); // cancelled renders are silent
        });
    }, [pdfDoc, currentPage]);

    // ── Load annotation layer when page or canvas is ready ───────────────
    useEffect(() => {
        if (!canvasRef.current || !pdfDimensions) return;
        const stored = annotationsCache.current[currentPage];
        canvasRef.current.loadFromJSON(stored ?? null);
        setCanUndo(undoMgr.current.canUndo(currentPage));
        setCanRedo(undoMgr.current.canRedo(currentPage));
    }, [currentPage, pdfDimensions]);

    // ── Save helpers ──────────────────────────────────────────────────────
    const savePage = useCallback(async (pageNum) => {
        if (!paper || !canvasRef.current) return;
        const json = canvasRef.current.toJSON();
        annotationsCache.current[pageNum] = json;
        await savePageAnnotation(paper.id, pageNum, json);
    }, [paper]);

    const scheduleAutoSave = useCallback(() => {
        clearTimeout(autoSaveTimer.current);
        autoSaveTimer.current = setTimeout(async () => {
            await savePage(currentPage);
            setDirty(false);
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus(null), 2000);
        }, 2000);
    }, [currentPage, savePage]);

    // ── Canvas change callback (from AnnotationCanvas) ───────────────────
    const handleCanvasChange = useCallback(({ prevState }) => {
        undoMgr.current.push(currentPage, prevState);
        setCanUndo(true);
        setCanRedo(false);
        setDirty(true);
        scheduleAutoSave();
    }, [currentPage, scheduleAutoSave]);

    // ── Undo / Redo ───────────────────────────────────────────────────────
    const handleUndo = useCallback(() => {
        if (!canvasRef.current || !undoMgr.current.canUndo(currentPage)) return;
        const currentState = canvasRef.current.toJSON();
        const prevState = undoMgr.current.undo(currentPage, currentState);
        canvasRef.current.loadFromJSON(prevState ?? null);
        setCanUndo(undoMgr.current.canUndo(currentPage));
        setCanRedo(undoMgr.current.canRedo(currentPage));
        setDirty(true);
        scheduleAutoSave();
    }, [currentPage, scheduleAutoSave]);

    const handleRedo = useCallback(() => {
        if (!canvasRef.current || !undoMgr.current.canRedo(currentPage)) return;
        const currentState = canvasRef.current.toJSON();
        const nextState = undoMgr.current.redo(currentPage, currentState);
        if (nextState) canvasRef.current.loadFromJSON(nextState);
        setCanUndo(undoMgr.current.canUndo(currentPage));
        setCanRedo(undoMgr.current.canRedo(currentPage));
        setDirty(true);
        scheduleAutoSave();
    }, [currentPage, scheduleAutoSave]);

    // ── Manual save ───────────────────────────────────────────────────────
    const handleSave = useCallback(async () => {
        setSaveStatus('saving');
        await savePage(currentPage);
        setDirty(false);
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus(null), 2000);
    }, [currentPage, savePage]);

    // ── Clear page ────────────────────────────────────────────────────────
    const handleClear = useCallback(() => {
        if (!window.confirm('Clear all annotations on this page?')) return;
        const prevState = canvasRef.current?.toJSON();
        if (prevState) undoMgr.current.push(currentPage, prevState);
        canvasRef.current?.clear();
        setCanUndo(true);
        setCanRedo(false);
        setDirty(true);
        scheduleAutoSave();
    }, [currentPage, scheduleAutoSave]);

    // ── Export ────────────────────────────────────────────────────────────
    const handleExport = useCallback(async () => {
        if (!paper || !pdfDimensions) return;
        await savePage(currentPage);
        const { exportAnnotatedPDF } = await import('../services/annotation/pdfExport.js');
        await exportAnnotatedPDF(paper, annotationsCache.current, pdfDimensions);
    }, [paper, currentPage, savePage, pdfDimensions]);

    // ── Page navigation ───────────────────────────────────────────────────
    const handlePageSelect = useCallback(async (newPage) => {
        if (newPage === currentPage || newPage < 1 || newPage > pageCount) return;
        await savePage(currentPage);
        setCurrentPage(newPage);
    }, [currentPage, pageCount, savePage]);

    const handlePrevPage = useCallback(() => handlePageSelect(currentPage - 1), [currentPage, handlePageSelect]);
    const handleNextPage = useCallback(() => handlePageSelect(currentPage + 1), [currentPage, handlePageSelect]);

    // ── Close ─────────────────────────────────────────────────────────────
    const handleClose = useCallback(async () => {
        if (dirty) await savePage(currentPage);
        navigate('/past-papers');
    }, [dirty, currentPage, savePage, navigate]);

    // ── Keyboard shortcuts ────────────────────────────────────────────────
    useEffect(() => {
        const onKey = (e) => {
            // Don't intercept when user is typing in an input or in fabric text editing
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.target.isContentEditable) return;

            if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key === 'z') { e.preventDefault(); handleUndo(); return; }
            if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'z') { e.preventDefault(); handleRedo(); return; }
            if ((e.metaKey || e.ctrlKey) && e.key === 's') { e.preventDefault(); handleSave(); return; }

            if (!e.metaKey && !e.ctrlKey && !e.altKey) {
                const toolMap = { p: 'pen', h: 'highlighter', t: 'text', r: 'rect', c: 'circle', l: 'line', e: 'eraser', v: 'select' };
                if (toolMap[e.key]) { setActiveTool(toolMap[e.key]); return; }
                if (e.key === 'ArrowLeft') { e.preventDefault(); handlePrevPage(); }
                if (e.key === 'ArrowRight') { e.preventDefault(); handleNextPage(); }
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [handleUndo, handleRedo, handleSave, handlePrevPage, handleNextPage]);

    // ── Unsaved changes guard (beforeunload only — useBlocker requires data router) ─
    useEffect(() => {
        const handler = (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } };
        window.addEventListener('beforeunload', handler);
        return () => window.removeEventListener('beforeunload', handler);
    }, [dirty]);

    // ── Cleanup ───────────────────────────────────────────────────────────
    useEffect(() => () => clearTimeout(autoSaveTimer.current), []);

    // ── Convex init (Phase 2) ───────────────────────────────────────
    useEffect(() => {
        initConvex()
            .then(() => {
                setSpaceReady(true);
                const userId = getCurrentUserId();
                if (userId) setMyIdentityHex(userId);
            })
            .catch(() => {
                // Convex unavailable — collaboration disabled, local annotation still works
            });
    }, []);

    // ── Session sync controller (Phase 2) ────────────────────────────────
    useEffect(() => {
        if (!spaceReady) return;
        const sync = createSessionSync({
            onStrokeAdded: (_strokeId, _pageNumber, fabricObjectJson) => {
                try {
                    const parsed = JSON.parse(fabricObjectJson);
                    const clientId = parsed?.data?.strokeClientId;
                    canvasRef.current?.applyStrokeDelta('created', _strokeId, clientId, fabricObjectJson);
                } catch {/* ignore */}
            },
            onStrokeUpdated: (_strokeId, fabricObjectJson) => {
                try {
                    const parsed = JSON.parse(fabricObjectJson);
                    const clientId = parsed?.data?.strokeClientId;
                    canvasRef.current?.applyStrokeDelta('updated', _strokeId, clientId, fabricObjectJson);
                } catch {/* ignore */}
            },
            onStrokeDeleted: (_strokeId, clientId) => {
                canvasRef.current?.applyStrokeDelta('deleted', _strokeId, clientId, null);
            },
            onParticipantsChanged: (participants) => {
                setSessionParticipants(participants);
            },
            onSessionEnded: () => {
                setActiveSession(null);
                setSessionParticipants([]);
            },
        });
        sessionSyncRef.current = sync;
        return () => {
            sync.leaveSession();
            sessionSyncRef.current = null;
        };
    }, [spaceReady]);

    // ── Auto-join session from URL ?session= param (Phase 2) ─────────────
    useEffect(() => {
        if (!spaceReady || !paper) return;
        const params = new URLSearchParams(location.search);
        const sessionId = params.get('session');
        if (!sessionId) return;
        if (!isSignedIn) {
            setShareAuthMessage(
                canSignIn
                    ? 'Sign in from the top-right menu to join live annotation sessions. Local annotation still works without an account.'
                    : 'Live annotation sessions require sign-in, but authentication is not configured in this environment.'
            );
            return;
        }
        const sync = sessionSyncRef.current;
        if (!sync) return;
        const sid = sessionId;
        callQuery(api.sessions.getSessionByStringId, { sessionId: sid }).then((session) => {
            if (!session) {
                throw new Error('This live session is not available.');
            }
            if (session.paperId !== paper.id) {
                throw new Error('This live session belongs to a different paper.');
            }
            setActiveSession(session);
            return sync.joinSession(sid);
        }).then((existingStrokes) => {
            for (const stroke of existingStrokes) {
                try {
                    const parsed = JSON.parse(stroke.fabricObjectJson);
                    const clientId = parsed?.data?.strokeClientId;
                    canvasRef.current?.applyStrokeDelta('created', stroke.strokeId ?? stroke._id, clientId, stroke.fabricObjectJson);
                } catch {/* ignore */}
            }
            callQuery(api.sessions.getParticipants, { sessionId: sid }).then(parts => {
                if (parts) setSessionParticipants(parts);
            }).catch(() => {});
        }).catch(e => {
            const message = String(e?.message || '');
            if (
                message.toLowerCase().includes('do not have access') ||
                message.toLowerCase().includes('not authorized')
            ) {
                setShareAuthMessage('This live session is invite-only. Ask the host to invite you before opening the link.');
            } else {
                setShareAuthMessage(message || 'Could not join this live session.');
            }
            console.error('Could not join session:', e);
        });
    }, [canSignIn, isSignedIn, spaceReady, paper, location.search]);

    // ── Poll pending invites (Phase 2) ───────────────────────────────────
    useEffect(() => {
        if (!spaceReady) return;
        if (!isSignedIn) {
            setPendingInvites([]);
            return;
        }
        let cancelled = false;

        const poll = async () => {
            const invites = await getMyPendingInvites(username);
            if (!cancelled) {
                setPendingInvites(invites);
            }
        };

        void poll();
        const interval = setInterval(() => {
            void poll();
        }, 15000);

        return () => {
            cancelled = true;
            clearInterval(interval);
        };
    }, [isSignedIn, spaceReady, username]);

    if (!paper) {
        return (
            <div className="annotate-page">
                <div className="annotate-status">
                    <div className="annotate-spinner" />
                    <span>Loading paper…</span>
                </div>
            </div>
        );
    }

    const paperTitle = `${paper.year} ${paper.month} — ${paper.unit} ${paper.unitName}`;

    // ── Session handlers ───────────────────────────────────────
    const handleCreateSession = async () => {
        if (!isSignedIn) {
            setShareAuthMessage(
                canSignIn
                    ? 'Sign in from the top-right menu before starting a live annotation session.'
                    : 'Live annotation sessions need sign-in, but authentication is not configured here.'
            );
            return;
        }
        const sync = sessionSyncRef.current;
        if (!sync) return;
        try {
            setShareAuthMessage('');
            const session = await sync.startSession(paper.id, paperTitle);
            setActiveSession(session);
        } catch (e) {
            setShareAuthMessage(e?.message || 'Could not start a live session right now.');
            console.error('Could not start live session:', e);
        }
    };

    const handleShareOpen = () => {
        if (!isSignedIn) {
            setShareAuthMessage(
                canSignIn
                    ? 'Sign in from the top-right menu to use live annotation and sharing.'
                    : 'Live annotation and sharing require sign-in, but authentication is not configured in this environment.'
            );
            return;
        }
        setShareAuthMessage('');
        setIsShareOpen(true);
    };

    const handleInviteUser = (user) => {
        const sync = sessionSyncRef.current;
        const sid = sync?.getActiveSessionId();
        if (!sync || !sid) return;
        sync.sendInvite(sid, user);
    };

    const handleRespondInvite = async (inviteId, accept) => {
        const sync = sessionSyncRef.current;
        if (!sync) return;
        const invite = pendingInvites.find((item) => String(item._id ?? item.inviteId) === String(inviteId));

        try {
            setShareAuthMessage('');
            await sync.respondToInvite(inviteId, accept);
            setPendingInvites(prev => prev.filter(i => String(i._id ?? i.inviteId) !== String(inviteId)));

            if (accept && invite?.sessionId) {
                const session = await callQuery(api.sessions.getSessionByStringId, { sessionId: invite.sessionId }).catch(() => null);
                if (session?.paperId) {
                    setIsShareOpen(false);
                    navigate(`/annotate/${session.paperId}?session=${invite.sessionId}`);
                }
            }
        } catch (e) {
            setShareAuthMessage(e?.message || 'Could not respond to that invite.');
            console.error('Could not respond to invite:', e);
        }
    };

    const handleEndSession = () => {
        const sync = sessionSyncRef.current;
        const sid = sync?.getActiveSessionId();
        if (!sync || !sid) return;
        sync.endSession(sid);
        setActiveSession(null);
        setSessionParticipants([]);
        setIsShareOpen(false);
    };

    const handleStrokeEvent = (eventType, { clientId, json }) => {
        const sync = sessionSyncRef.current;
        const sid = sync?.getActiveSessionId();
        if (!sync || !sid) return;
        if (eventType === 'created') {
            sync.sendStroke(sid, currentPage, json, clientId);
        } else if (eventType === 'modified') {
            sync.sendStrokeUpdate(clientId, json);
        } else if (eventType === 'deleted') {
            sync.sendStrokeDelete(clientId);
        }
    };

    return (
        <div className="annotate-page">
            <AnnotationToolbar
                activeTool={activeTool}
                onToolChange={setActiveTool}
                toolOptions={toolOptions}
                onOptionsChange={(partial) => setToolOptions((prev) => ({ ...prev, ...partial }))}
                canUndo={canUndo}
                canRedo={canRedo}
                onUndo={handleUndo}
                onRedo={handleRedo}
                onClear={handleClear}
                onSave={handleSave}
                onExport={handleExport}
                onClose={handleClose}
                saveStatus={saveStatus}
                dirty={dirty}
                paperTitle={paperTitle}
                currentPage={currentPage}
                pageCount={pageCount}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                activeSession={activeSession}
                participantCount={sessionParticipants.length}
                pendingInviteCount={pendingInvites.length}
                onShareOpen={handleShareOpen}
            />

            {shareAuthMessage && (
                <div className="annotate-auth-notice card" role="status">
                    {shareAuthMessage}
                </div>
            )}

            <div className="annotate-body">
                {pdfDoc && pageCount > 0 && (
                    <ThumbnailSidebar
                        pdfDoc={pdfDoc}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        onPageSelect={handlePageSelect}
                    />
                )}

                <div className="annotate-scroll-area">
                    {pdfStatus === 'loading' && (
                        <div className="annotate-status">
                            <div className="annotate-spinner" />
                            <span>Loading PDF…</span>
                        </div>
                    )}
                    {pdfStatus === 'error' && (
                        <div className="annotate-status annotate-status--error">
                            Could not load the PDF. Check your connection or try again.
                        </div>
                    )}
                    {pdfStatus === 'ready' && (
                        <div
                            className="annotate-canvas-wrapper"
                            style={pdfDimensions
                                ? { width: pdfDimensions.width, height: pdfDimensions.height }
                                : { minWidth: 600, minHeight: 800 }
                            }
                        >
                            {/* Layer 1 — PDF rendered by pdf.js */}
                            <canvas ref={pdfCanvasRef} className="annotate-pdf-canvas" />

                            {/* Layer 2 — fabric.js annotation canvas */}
                            {pdfDimensions && (
                                <AnnotationCanvas
                                    ref={canvasRef}
                                    width={pdfDimensions.width}
                                    height={pdfDimensions.height}
                                    activeTool={activeTool}
                                    toolOptions={toolOptions}
                                    onCanvasChange={handleCanvasChange}
                                    onStrokeEvent={handleStrokeEvent}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>

            {isShareOpen && (
                <ShareDialog
                    paper={paper}
                    activeSession={activeSession}
                    participants={sessionParticipants}
                    pendingInvites={pendingInvites}
                    myIdentityHex={myIdentityHex}
                    onCreateSession={handleCreateSession}
                    onInviteUser={handleInviteUser}
                    onRespondInvite={handleRespondInvite}
                    onEndSession={handleEndSession}
                    onClose={() => setIsShareOpen(false)}
                />
            )}
        </div>
    );
}
