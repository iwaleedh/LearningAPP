import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Link2, Check, Hand, Users, Copy, BookOpen as NoteIcon } from 'lucide-react';
import { Canvas as FabricCanvas, PencilBrush, Image as FabricImage, Text as FabricText, IText as FabricIText, Rect as FabricRect, Circle as FabricCircle, Ellipse as FabricEllipse, Line as FabricLine, Triangle as FabricTriangle, Polygon as FabricPolygon, Path as FabricPath, util as fabricUtil } from 'fabric';
import {
  onConvexReady, onConvexError, onConvexDisconnect,
  getCurrentUserId,
  getLiveClassById,
  isTeacher as convexIsTeacher,
  subscribeToJoinStatus, subscribeToJoinRequests,
} from '../convex-client.js';
import { createLiveClassSync } from '../services/liveclass/liveClassSync.js';
import LiveClassToolbar from '../components/liveclass/LiveClassToolbar.jsx';
import FontPicker from '../components/liveclass/FontPicker.jsx';
import { DEFAULT_TEXT_FONT } from '../components/liveclass/fontDefaults.js';
import LaserPointerOverlay from '../components/liveclass/LaserPointerOverlay.jsx';
import SpotlightOverlay from '../components/liveclass/SpotlightOverlay.jsx';
import RulerWidget from '../components/liveclass/RulerWidget.jsx';
import TeacherStudentGrid from '../components/liveclass/TeacherStudentGrid.jsx';
import HandRaisePanel from '../components/liveclass/HandRaisePanel.jsx';
import StudentAdmissionPanel from '../components/liveclass/StudentAdmissionPanel.jsx';
import StudentNotePanel from '../components/liveclass/StudentNotePanel.jsx';
import ClassTimer from '../components/liveclass/ClassTimer.jsx';
import LivePollPanel from '../components/liveclass/LivePollPanel.jsx';
import StudentPollOverlay from '../components/liveclass/StudentPollOverlay.jsx';
import StencilPalette from '../components/liveclass/StencilPalette.jsx';
import TemplatePicker from '../components/liveclass/TemplatePicker.jsx';
import GraphWidget from '../components/liveclass/GraphWidget.jsx';
import {
  createProcessNode, createDecisionNode, createTerminalNode,
  createEdge, updateEdgesForNode, isFlowchartNode, snapNodeToGrid,
} from '../components/liveclass/FlowchartTool.js';
import './Pages.css';

const ImportMediaDialog = lazy(() => import('../components/liveclass/ImportMediaDialog.jsx'));

// ── Canvas background CSS patterns ───────────────────────────────────────────
const BG_STYLE = {
  white:  { background: '#ffffff' },
  lined:  {
    background: '#ffffff',
    backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 31px, #c8d3e8 31px, #c8d3e8 32px)',
  },
  grid:   {
    background: '#ffffff',
    backgroundImage:
      'repeating-linear-gradient(#e5e7f0 0 1px, transparent 1px 100%), ' +
      'repeating-linear-gradient(90deg, #e5e7f0 0 1px, transparent 1px 100%)',
    backgroundSize: '32px 32px',
  },
  dotted: {
    background: '#ffffff',
    backgroundImage: 'radial-gradient(circle, #b0b8d4 1px, transparent 1px)',
    backgroundSize: '24px 24px',
  },
  yellow: {
    background: '#fffde7',
    backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 31px, #f0d080 31px, #f0d080 32px)',
  },
};

// ── Snap freehand stroke to nearest geometric shape ─────────────────────────
function snapShape(path, FabricCircleCls, FabricRectCls) {
  const cmds = path?.path;
  if (!cmds || cmds.length < 5) return null;
  const bb = path.getBoundingRect();
  if (bb.width < 30 || bb.height < 30) return null;

  // Collect the endpoint of every path command (M L Q C Z)
  const pts = cmds
    .filter(cmd => cmd[0] !== 'z' && cmd[0] !== 'Z')
    .map(cmd => ({ x: cmd[cmd.length - 2], y: cmd[cmd.length - 1] }))
    .filter(p => typeof p.x === 'number' && typeof p.y === 'number');
  if (pts.length < 3) return null;

  const first = pts[0];
  const last  = pts[pts.length - 1];
  const closeDist = Math.sqrt((last.x - first.x) ** 2 + (last.y - first.y) ** 2);
  const diagonal  = Math.sqrt(bb.width ** 2 + bb.height ** 2);
  // Require stroke to be roughly closed (end near start)
  if (closeDist > diagonal * 0.4) return null;

  const ratio = bb.width / Math.max(bb.height, 1);
  const common = {
    fill: 'transparent',
    stroke: path.stroke,
    strokeWidth: path.strokeWidth,
    selectable: true,
    evented: true,
  };

  if (ratio > 0.62 && ratio < 1.6) {
    // Roughly square bounding box → Circle
    const r = Math.min(bb.width, bb.height) / 2;
    return new FabricCircleCls({
      ...common,
      left: bb.left + bb.width / 2 - r,
      top:  bb.top  + bb.height / 2 - r,
      radius: r,
    });
  }
  // Elongated closed shape → Rectangle
  return new FabricRectCls({ ...common, left: bb.left, top: bb.top, width: bb.width, height: bb.height });
}

// ── Arrow path helper ────────────────────────────────────────────────────────
function makeArrowPath(x1, y1, x2, y2, headSize) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const l1x = x2 - headSize * Math.cos(angle - Math.PI / 6);
  const l1y = y2 - headSize * Math.sin(angle - Math.PI / 6);
  const l2x = x2 - headSize * Math.cos(angle + Math.PI / 6);
  const l2y = y2 - headSize * Math.sin(angle + Math.PI / 6);
  return `M ${x1} ${y1} L ${x2} ${y2} M ${l1x} ${l1y} L ${x2} ${y2} L ${l2x} ${l2y}`;
}
function diamondPoints(x, y, w, h) {
  const cx = x + w / 2, cy = y + h / 2;
  return [{ x: cx, y }, { x: x + w, y: cy }, { x: cx, y: y + h }, { x, y: cy }];
}
function starPoints(cx, cy, outerR, innerR) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
  }
  return pts;
}
function hexagonPoints(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (i * Math.PI) / 3 - Math.PI / 6;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
}

// ── Stamp helper ─────────────────────────────────────────────────────────────
function addStamp(canvas, emoji, color, x, y) {
  const text = new FabricText(emoji, {
    left: x, top: y, fontSize: 32, selectable: true,
    data: { strokeClientId: 'stamp_' + Date.now() },
  });
  canvas.add(text);
  canvas.requestRenderAll();
  return text;
}

// ─────────────────────────────────────────────────────────────────────────────

export default function LiveClassPage() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const classId = sessionId ?? null;

  // Convex connection status
  const [stdbStatus, setStdbStatus] = useState('connecting'); // 'connecting' | 'connected' | 'offline'

  // Role
  const [role, setRole] = useState(null); // 'teacher' | 'student'
  const [sessionData, setSessionData] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [participants, setParticipants] = useState([]);
  const [cursors, setCursors] = useState([]);
  const [handRaises, setHandRaises] = useState([]);
  const [timerState, setTimerState] = useState(null);
  const [backgroundType, setBackgroundType] = useState('white');

  // Tool state
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('#1f2937');
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [textFont, setTextFont] = useState(DEFAULT_TEXT_FONT);
  const [spotlightEnabled, setSpotlightEnabled] = useState(false);
  const [snapHint, setSnapHint] = useState(false); // shows "hold 2 s to snap" toast
  const snapHintTimerRef = useRef(null);
  const snapHoldTimerRef = useRef(null);

  // Laser tool state
  const [laserMode, setLaserMode] = useState('dot'); // 'dot' | 'trail'
  const [laserTrails, setLaserTrails] = useState([]); // Array of {id, points, identity, createdAt}
  const laserDrawingRef = useRef(false); // whether currently drawing a trail
  const currentLaserTrailRef = useRef([]); // current trail being drawn

  // UI panels
  const [showStudentGrid, setShowStudentGrid] = useState(false);
  const [showHandPanel, setShowHandPanel] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [endedMsg, setEndedMsg] = useState('');
  const [_linkCopied, setLinkCopied] = useState(false);  // reserved for share-link UX
  const [codeCopied, setCodeCopied] = useState(false);

  // Join-request state (student side)
  const [joinRequestId, setJoinRequestId] = useState(null); // Convex _id string
  const [joinStatus, setJoinStatus] = useState(null); // 'pending' | 'accepted' | 'rejected'
  const [joinTempId, setJoinTempId] = useState(null);

  // Admission panel (teacher side)
  const [joinRequests, setJoinRequests] = useState([]);
  const [autoAccept, setAutoAccept] = useState(false);

  // Student notes panel
  const [showMyNotes, setShowMyNotes] = useState(false);

  // Poll state
  const [polls, setPolls] = useState([]);
  const [showPollPanel, setShowPollPanel] = useState(false);
  const [myPollAnswers, setMyPollAnswers] = useState({}); // { pollId: true }
  const [pollResult, setPollResult] = useState(null); // result to show student after close

  // Stencil state
  const [showStencilPanel, setShowStencilPanel] = useState(false);

  // Template state
  const [showTemplatePicker, setShowTemplatePicker] = useState(false);

  // Graph plotter state
  const [showGraphWidget, setShowGraphWidget] = useState(false);

  // Dropdown anchor rects (for portal-positioned panels)
  const handsBtnRef = useRef(null);
  const studentsBtnRef = useRef(null);
  const [handsAnchor, setHandsAnchor] = useState(null);
  const [studentsAnchor, setStudentsAnchor] = useState(null);
  const [pollAnchor, setPollAnchor] = useState(null);
  const [stencilAnchor, setStencilAnchor] = useState(null);
  const [templateAnchor, setTemplateAnchor] = useState(null);
  const [graphAnchor, setGraphAnchor] = useState(null);

  // Flowchart connector state — first node clicked while in fc-connector mode
  const fcConnectorSourceRef = useRef(null);

  // ── Canvas history (undo/redo) ────────────────────────────────────────────
  const historyStack = useRef([]);      // array of JSON-stringified canvas snapshots
  const historyIndex = useRef(-1);      // current position in historyStack
  const skipHistory = useRef(false);    // guard: true during undo/redo/remote-add
  const historyDebounce = useRef(null); // rAF handle for debouncing object:added
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  // ── Multi-page tabs ────────────────────────────────────────────────────────
  const [tabs, setTabs] = useState([{ id: 1, label: 'Page 1' }]);
  const [activeTabId, setActiveTabId] = useState(1);
  const tabSnapshotsRef = useRef({ 1: null }); // tabId → JSON string
  const [renamingTabId, setRenamingTabId] = useState(null);
  const [renameValue, setRenameValue] = useState('');
  const renameInputRef = useRef(null);

  function saveCurrentTabSnapshot() {
    const fc = fabricRef.current;
    if (!fc) return;
    tabSnapshotsRef.current[activeTabId] = JSON.stringify(fc.toJSON(['data']));
  }

  const handleAddTab = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    saveCurrentTabSnapshot();
    const newId = Date.now();
    const newLabel = `Page ${tabs.length + 1}`;
    tabSnapshotsRef.current[newId] = null;
    setTabs(prev => [...prev, { id: newId, label: newLabel }]);
    setActiveTabId(newId);
    // Clear canvas and reset history for the new blank page
    skipHistory.current = true;
    fc.clear();
    skipHistory.current = false;
    historyStack.current = [JSON.stringify(fc.toJSON(['data']))];
    historyIndex.current = 0;
    setCanUndo(false);
    setCanRedo(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs]);

  const handleSwitchTab = useCallback((tabId) => {
    if (tabId === activeTabId) return;
    const fc = fabricRef.current;
    if (!fc) return;
    saveCurrentTabSnapshot();
    setActiveTabId(tabId);
    const snapshot = tabSnapshotsRef.current[tabId];
    skipHistory.current = true;
    if (snapshot) {
      fc.loadFromJSON(JSON.parse(snapshot), () => {
        skipHistory.current = false;
        fc.requestRenderAll();
        historyStack.current = [snapshot];
        historyIndex.current = 0;
        setCanUndo(false);
        setCanRedo(false);
      });
    } else {
      fc.clear();
      skipHistory.current = false;
      historyStack.current = [JSON.stringify(fc.toJSON(['data']))];
      historyIndex.current = 0;
      setCanUndo(false);
      setCanRedo(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTabId]);

  const handleCloseTab = useCallback((e, tabId) => {
    e.stopPropagation();
    if (tabs.length === 1) return; // can't close last page
    const nextTabs = tabs.filter(t => t.id !== tabId);
    delete tabSnapshotsRef.current[tabId];
    if (tabId === activeTabId) {
      const idx = tabs.findIndex(t => t.id === tabId);
      const switchTo = nextTabs[Math.min(idx, nextTabs.length - 1)];
      const fc = fabricRef.current;
      if (fc) {
        const snapshot = tabSnapshotsRef.current[switchTo.id];
        skipHistory.current = true;
        if (snapshot) {
          fc.loadFromJSON(JSON.parse(snapshot), () => {
            skipHistory.current = false;
            fc.requestRenderAll();
            historyStack.current = [snapshot];
            historyIndex.current = 0;
            setCanUndo(false);
            setCanRedo(false);
          });
        } else {
          fc.clear();
          skipHistory.current = false;
          historyStack.current = [JSON.stringify(fc.toJSON(['data']))];
          historyIndex.current = 0;
          setCanUndo(false);
          setCanRedo(false);
        }
      }
      setActiveTabId(switchTo.id);
    }
    setTabs(nextTabs);
  }, [tabs, activeTabId]);

  const handleRenameCommit = useCallback(() => {
    if (!renamingTabId) return;
    const trimmed = renameValue.trim();
    if (trimmed) {
      setTabs(prev => prev.map(t => t.id === renamingTabId ? { ...t, label: trimmed } : t));
    }
    setRenamingTabId(null);
  }, [renamingTabId, renameValue]);

  const broadcastCanvasState = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    const json = fc.toJSON(['data']);
    // Local same-browser sync
    broadcastRef.current?.postMessage({ type: 'canvas-state', data: json });

  }, []);

  const saveHistory = useCallback(() => {
    if (skipHistory.current) return;
    // Debounce via rAF so multi-object adds (templates, connector line+arrow) merge
    if (historyDebounce.current) cancelAnimationFrame(historyDebounce.current);
    historyDebounce.current = requestAnimationFrame(() => {
      historyDebounce.current = null;
      if (skipHistory.current) return;
      const fc = fabricRef.current;
      if (!fc) return;
      // Truncate any forward (redo) history then push current state
      historyStack.current = historyStack.current.slice(0, historyIndex.current + 1);
      historyStack.current.push(JSON.stringify(fc.toJSON(['data'])));
      historyIndex.current = historyStack.current.length - 1;
      setCanUndo(historyIndex.current > 0);
      setCanRedo(false);
      // Broadcast to student tabs via BroadcastChannel
      broadcastCanvasState();
    });
  }, [broadcastCanvasState]);

  // Present mode state
  const [presentState, setPresentState] = useState(null); // { presenterIdentity, presenterName, status }

  // eslint-disable-next-line no-unused-vars -- reserved for share-link UX
  const handleCopyLink = useCallback(() => {
    const url = new URL(`live/${sessionId}`, window.location.origin + import.meta.env.BASE_URL).href;
    navigator.clipboard.writeText(url).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  }, [sessionId]);

  const handleCopyCode = useCallback(() => {
    const code = sessionData?.joinCode;
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    });
  }, [sessionData]);

  // Canvas
  const canvasWrapRef = useRef(null);
  const teacherBoardWrapRef = useRef(null); // student's teacher-board container
  const teacherCanvasRef = useRef(null); // teacher's fabric canvas (full edit)
  const myCanvasRef = useRef(null);       // student's own canvas
  const fabricRef = useRef(null);
  const myFabricRef = useRef(null);
  const syncRef = useRef(null);
  const broadcastRef = useRef(null);

  const [canvasSize, setCanvasSize] = useState({ w: 1, h: 1 });

  // ── Ruler tool state ──────────────────────────────────────────────────────
  const rulerStateRef = useRef({ x: 200, y: 200, angle: 0 });
  const handleRulerStateChange = useCallback(({ x, y, angle }) => {
    rulerStateRef.current = { x, y, angle };
  }, []);

  // ── Offline/demo init: use navigation state session if Convex unavailable ──
  useEffect(() => {
    const navSession = location.state?.session;
    if (!navSession || role) return;
    setSessionData({
      ...navSession,
      classId: navSession.classId,
      hostUserId: navSession.hostIdentity ?? navSession.hostUserId,
    });
    setBackgroundType(navSession.backgroundType ?? 'white');
    const userId = getCurrentUserId();
    const isTeacher = userId ? (navSession.hostIdentity === userId || navSession.hostUserId === userId) : true;
    setRole(isTeacher ? 'teacher' : 'student');
    setStdbStatus('offline');
  }, [location.state, role]);

  // ── Handle join-request flow (student arriving from JoinClassModal) ───────
  useEffect(() => {
    const navState = location.state;
    const storedJoinRequest = classId
      ? sessionStorage.getItem(`lt_joinRequest_${classId}`)
      : null;
    let requestState = navState?.joinRequestId
      ? {
          joinRequestId: navState.joinRequestId,
          tempId: navState.tempId,
          studentName: navState.studentName,
        }
      : null;

    if (!requestState && storedJoinRequest) {
      try {
        const parsed = JSON.parse(storedJoinRequest);
        if (parsed?.requestId) {
          requestState = {
            joinRequestId: String(parsed.requestId),
            tempId: parsed.tempId,
            studentName: parsed.studentName,
          };
        }
      } catch {
        // Ignore malformed stored join-request state.
      }
    }

    if (!requestState?.joinRequestId) return;
    const reqId = requestState.joinRequestId;
    const tId = requestState.tempId;
    const sName = requestState.studentName;
    setJoinRequestId(reqId);
    setJoinTempId(tId);
    if (sName) setStudentName(sName);

    // Subscribe to status changes
    const unsub = subscribeToJoinStatus(reqId, (data) => {
      if (!data) return;
      setJoinStatus(data.status);
      if (data.status === 'accepted') {
        void getLiveClassById(classId).then((session) => {
          if (session) {
            setSessionData(session);
            setBackgroundType(session.backgroundType ?? 'white');
          }
          setRole('student');
        });
      }
    });

    // Initial check in case auto-accepted
    setJoinStatus('pending');

    return () => unsub?.();
  }, [classId, location.state]);

  // ── Init Convex & detect role (online mode) ──────────────────────────
  useEffect(() => {
    onConvexError(() => {
      // Only update to offline if we haven't already connected
      setStdbStatus(prev => prev === 'connected' ? 'connected' : 'offline');
    });

    onConvexDisconnect(() => {
      // WebSocket dropped — mark as offline so UI updates
      setStdbStatus('offline');
    });

    let cancelled = false;

    onConvexReady(() => {
      void (async () => {
        setStdbStatus('connected');
        const userId = getCurrentUserId();
        if (!userId || cancelled) return;

        const session = await getLiveClassById(classId);
        if (cancelled) return;

        if (!session) {
          // Don't override if student already joined via dialog or we have an offline session
          setRole(prev => {
            if (prev) return prev; // already set — keep it
            if (!location.state?.session) {
              setEndedMsg('Class not found or already ended.');
            }
            return prev;
          });
          return;
        }

        setSessionData(session);
        setBackgroundType(session.backgroundType ?? 'white');

        const isHost = session.hostUserId === userId;
        const hasTeacherRole = await convexIsTeacher();
        const hasFullSessionAccess = Boolean(session.hostUserId);
        if (cancelled) return;

        if (isHost || hasTeacherRole) {
          setRole(prev => prev ?? 'teacher');
          return;
        }

        if (hasFullSessionAccess) {
          setRole(prev => prev ?? 'student');
        }
      })();
    });

    return () => {
      cancelled = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  // ── Teacher: subscribe to join requests ──────────────────────────────────
  useEffect(() => {
    if (role !== 'teacher' || !classId) return;
    const unsub = subscribeToJoinRequests(classId, (data) => {
      if (Array.isArray(data)) setJoinRequests(data);
    });
    return () => unsub?.();
  }, [role, classId]);

  // Keep autoAccept in sync with sessionData
  useEffect(() => {
    if (sessionData?.autoAccept !== undefined) setAutoAccept(sessionData.autoAccept);
  }, [sessionData?.autoAccept]);

  // ── Set up sync once role is known ─────────────────────────────────────────
  useEffect(() => {
    if (!role || !classId) return;

    const sync = createLiveClassSync({
      onStrokeAdded: (strokeId, json) => {
        const targetFabric = fabricRef.current;
        if (!targetFabric) return;
        try {
          const parsed = JSON.parse(json);
          fabricUtil.enlivenObjects([parsed]).then((objs) => {
            skipHistory.current = true;
            objs.forEach(obj => {
              obj.selectable = false;
              obj.evented = false;
              targetFabric.add(obj);
            });
            skipHistory.current = false;
            targetFabric.requestRenderAll();
          });
        } catch { /* noop */ }
      },
      onStrokeUpdated: () => {
        // Handled via object mutation — skip for now
      },
      onStrokeDeleted: (_id, clientId) => {
        const targetFabric = fabricRef.current;
        if (!targetFabric || !clientId) return;
        const obj = targetFabric.getObjects().find(o => o.data?.strokeClientId === clientId);
        if (obj) { targetFabric.remove(obj); targetFabric.requestRenderAll(); }
      },
      onParticipantsChanged: setParticipants,
      onCursorMoved: (cursor) => {
        setCursors(prev => {
          const idx = prev.findIndex(c => c.identity === cursor.identity);
          if (idx >= 0) { const next = [...prev]; next[idx] = cursor; return next; }
          return [...prev, cursor];
        });
      },
      onLaserTrail: (trail) => {
        // Add remote laser trail
        setLaserTrails(prev => [...prev, trail]);
      },
      onHandRaisesChanged: setHandRaises,
      onTimerUpdated: setTimerState,
      onBackgroundChanged: (bg) => setBackgroundType(bg),
      onSessionEnded: () => setEndedMsg('Class has ended.'),
      onPollCreated: (poll) => {
        setPolls(prev => [...prev.filter(p => p.id !== poll.id), poll]);
      },
      onPollClosed: (poll) => {
        setPolls(prev => prev.map(p => p.id === poll.id ? { ...poll } : p));
        // Show result to student
        const myAnswer = myPollAnswers[poll.id];
        if (myAnswer !== undefined) {
          setPollResult({
            correctIndex: poll.correctIndex,
            selectedIndex: typeof myAnswer === 'object' ? myAnswer.selectedIndex : -1,
            options: poll.options,
            responses: poll.responses,
          });
        }
      },
      onPollResponseReceived: (poll) => {
        setPolls(prev => prev.map(p => p.id === poll.id ? { ...poll } : p));
      },
      onPresentStatusChanged: (state) => setPresentState(state?.status === 'ended' ? null : state),
    });

    syncRef.current = sync;

    if (role === 'teacher') {
      // Re-attach DB listeners (the sync instance from TeacherDashboard was
      // abandoned on navigation, so we must attach fresh listeners here).
      const existingStrokes = sync.watchClass(classId);
      // Pre-populate canvas with any strokes already in DB (e.g. after remount)
      if (existingStrokes.length > 0) {
        const fc = fabricRef.current;
        existingStrokes.forEach(s => {
          try {
            const parsed = JSON.parse(s.fabricObjectJson);
            fabricUtil.enlivenObjects([parsed]).then((objs) => {
              objs.forEach(o => { o.selectable = false; o.evented = false; fc?.add(o); });
              fc?.requestRenderAll();
            });
          } catch { /* noop */ }
        });
      }
    } else {
      sync.joinClass(classId).then(existingStrokes => {
        const fc = fabricRef.current;
        if (!fc) return;
        existingStrokes.forEach(s => {
          try {
            const parsed = JSON.parse(s.fabricObjectJson);
            fabricUtil.enlivenObjects([parsed]).then((objs) => {
              objs.forEach(o => { o.selectable = false; o.evented = false; fc.add(o); });
              fc.requestRenderAll();
            });
          } catch { /* noop */ }
        });
      }).catch(() => { /* offline — BroadcastChannel sync will handle it */ });
    }

    return () => {
      sync.leaveClass();
    };
  // stdbStatus is included so the sync re-runs once Convex connects — this
  // handles the race where offline-init sets role before client is available,
  // causing watchClass/joinClass to no-op on a null client.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, classId, stdbStatus]);

  // ── BroadcastChannel sync (same-origin real-time sync) ─────────────────────
  useEffect(() => {
    if (!role || !classId) return;
    const channelName = `lc-sync-${classId}`;
    const bc = new BroadcastChannel(channelName);
    broadcastRef.current = bc;

    if (role === 'teacher') {
      // Track students joining via BroadcastChannel (same-browser fallback)
      bc.onmessage = (e) => {
        const { type, data } = e.data;
        if (type === 'student-join') {
          setParticipants(prev => {
            if (prev.some(p => p._bcId === data.bcId)) return prev;
            return [...prev, {
              _bcId: data.bcId,
              sessionId: classId,
              userId: data.bcId,
              username: data.name,
              joinedAt: data.joinedAt,
            }];
          });
        } else if (type === 'student-leave') {
          setParticipants(prev => prev.filter(p => p._bcId !== data.bcId));
        }
      };
    }

    if (role === 'student') {
      // Announce presence to teacher tab
      const bcId = 'bc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      bc.postMessage({ type: 'student-join', data: { bcId, name: studentName || 'Student', joinedAt: Date.now() } });

      bc.onmessage = (e) => {
        const { type, data } = e.data;
        const fc = fabricRef.current;
        if (!fc) return;

        if (type === 'canvas-state') {
          skipHistory.current = true;
          fc.loadFromJSON(data, () => {
            fc.getObjects().forEach(o => { o.selectable = false; o.evented = false; });
            skipHistory.current = false;
            fc.requestRenderAll();
          });
        } else if (type === 'bg-change') {
          setBackgroundType(data);
        } else if (type === 'class-ended') {
          setEndedMsg('Class has ended.');
        }
      };

      // Announce leave on cleanup
      return () => {
        bc.postMessage({ type: 'student-leave', data: { bcId } });
        bc.close();
        broadcastRef.current = null;
      };
    }

    return () => {
      bc.close();
      broadcastRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, classId]);

  // ── Init Fabric canvases ───────────────────────────────────────────────────
  useEffect(() => {
    if (!role || !teacherCanvasRef.current) return;

    const isTeacherRole = role === 'teacher';

    const fc = new FabricCanvas(teacherCanvasRef.current, {
      isDrawingMode: isTeacherRole,
      backgroundColor: 'transparent',
      selection: false,
    });
    fabricRef.current = fc;

    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        fc.setDimensions({ width, height });
        setCanvasSize({ w: width, h: height });
        fc.requestRenderAll();
      }
    });
    // For teacher: observe the main canvas wrap; for student: observe the teacher board wrap
    const observeTarget = isTeacherRole ? canvasWrapRef.current : teacherBoardWrapRef.current;
    if (observeTarget) ro.observe(observeTarget);

    // Teacher gets full tool + stroke sync; students only view
    if (isTeacherRole) {
      applyTool(fc, tool, color, strokeWidth);

      // Seed initial empty history snapshot
      historyStack.current = [];
      historyIndex.current = -1;
      historyStack.current.push(JSON.stringify(fc.toJSON(['data'])));
      historyIndex.current = 0;
      setCanUndo(false);
      setCanRedo(false);

      // Auto-save history on any object add or modification (debounced)
      fc.on('object:added', saveHistory);
      fc.on('object:modified', saveHistory);

      // Stroke sync on path:created
      fc.on('path:created', (e) => {
        const path = e.path;
        const clientId = 'stroke_' + Date.now() + '_' + Math.random().toString(36).slice(2);
        if (!path.data) path.data = {};
        path.data.strokeClientId = clientId;
        syncRef.current?.sendStroke(classId, JSON.stringify(path.toJSON(['data'])), clientId);
      });
    }

    return () => {
      fc.dispose();
      ro.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  // Student also has their own canvas
  useEffect(() => {
    if (role !== 'student' || !myCanvasRef.current) return;
    const fc = new FabricCanvas(myCanvasRef.current, {
      isDrawingMode: true,
      backgroundColor: 'transparent',
      selection: false,
    });
    myFabricRef.current = fc;
    applyTool(fc, tool, color, strokeWidth);
    return () => fc.dispose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  // Re-apply tool whenever selection changes
  useEffect(() => {
    if (role === 'teacher') {
      applyTool(fabricRef.current, tool, color, strokeWidth);
    }
    applyTool(myFabricRef.current, tool, color, strokeWidth);
    if (tool === 'spotlight') setSpotlightEnabled(true);
    else setSpotlightEnabled(false);
  }, [tool, color, strokeWidth, role]);

  // ── Close all dropdown panels on outside click ────────────────────────────
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.closest('.lc-dropdown-panel') || e.target.closest('.lc-dropdown-trigger')) return;
      setShowHandPanel(false); setHandsAnchor(null);
      setShowStudentGrid(false); setStudentsAnchor(null);
      setShowPollPanel(false); setPollAnchor(null);
      setShowStencilPanel(false); setStencilAnchor(null);
      setShowTemplatePicker(false); setTemplateAnchor(null);
      setShowGraphWidget(false); setGraphAnchor(null);
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // ── Laser tool: dot mode (cursor following) and trail mode (freehand drawing) ──
  useEffect(() => {
    const fc = fabricRef.current;
    if (!fc || tool !== 'laser') return;
    const wrap = canvasWrapRef.current;
    if (!wrap) return;
    const myIdentityHex = getCurrentUserId() ?? 'local';

    // Cleanup old trails periodically
    const cleanupTrails = () => {
      const now = Date.now();
      setLaserTrails(prev => prev.filter(t => now - t.createdAt < 3000));
    };
    const cleanupInterval = setInterval(cleanupTrails, 500);

    if (laserMode === 'dot') {
      // Dot mode: follow cursor with glowing dot
      const handler = (e) => {
        const rect = wrap.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // Broadcast to other users
        syncRef.current?.broadcastCursor(classId, x, y, tool, laserMode);

        // Update local cursor state
        setCursors(prev => {
          const idx = prev.findIndex(c => c.identity === myIdentityHex);
          const newCursor = { x, y, tool, mode: laserMode, identity: myIdentityHex };
          if (idx >= 0) { const next = [...prev]; next[idx] = newCursor; return next; }
          return [...prev, newCursor];
        });
      };
      wrap.addEventListener('mousemove', handler);
      return () => {
        wrap.removeEventListener('mousemove', handler);
        clearInterval(cleanupInterval);
      };
    } else {
      // Trail mode: draw freehand strokes that fade out (GoodNotes style)
      const getCoords = (e) => {
        const rect = wrap.getBoundingClientRect();
        return {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        };
      };

      const onDown = (e) => {
        laserDrawingRef.current = true;
        const coords = getCoords(e);
        currentLaserTrailRef.current = [coords];
      };

      const onMove = (e) => {
        if (!laserDrawingRef.current) return;
        const coords = getCoords(e);
        currentLaserTrailRef.current.push(coords);

        // Broadcast current trail point
        syncRef.current?.broadcastCursor(classId, coords.x, coords.y, tool, laserMode);

        // Update local trails in real-time
        setLaserTrails(prev => {
          // Update or add the current drawing trail
          const existing = prev.find(t => t.id === 'current_drawing');
          if (existing) {
            return prev.map(t => t.id === 'current_drawing'
              ? { ...t, points: [...currentLaserTrailRef.current] }
              : t
            );
          }
          return [...prev, {
            id: 'current_drawing',
            points: [...currentLaserTrailRef.current],
            identity: myIdentityHex,
            createdAt: Date.now()
          }];
        });
      };

      const onUp = () => {
        if (!laserDrawingRef.current) return;
        laserDrawingRef.current = false;

        // Finalize the trail with a unique ID and timestamp
        const finalPoints = [...currentLaserTrailRef.current];
        if (finalPoints.length > 1) {
          const trailId = 'trail_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
          setLaserTrails(prev => {
            const filtered = prev.filter(t => t.id !== 'current_drawing');
            return [...filtered, {
              id: trailId,
              points: finalPoints,
              identity: myIdentityHex,
              createdAt: Date.now()
            }];
          });

          // Broadcast completed trail to other users
          syncRef.current?.broadcastLaserTrail?.(classId, trailId, finalPoints);
        }
        currentLaserTrailRef.current = [];
      };

      wrap.addEventListener('mousedown', onDown);
      wrap.addEventListener('mousemove', onMove);
      wrap.addEventListener('mouseup', onUp);
      wrap.addEventListener('mouseleave', onUp);

      return () => {
        wrap.removeEventListener('mousedown', onDown);
        wrap.removeEventListener('mousemove', onMove);
        wrap.removeEventListener('mouseup', onUp);
        wrap.removeEventListener('mouseleave', onUp);
        clearInterval(cleanupInterval);
      };
    }
  }, [tool, laserMode, classId]);

  function applyTool(fc, toolId, col, sw) {
    if (!fc) return;
    switch (toolId) {
      case 'pen':
        fc.isDrawingMode = true;
        fc.selection = false;
        fc.freeDrawingBrush = new PencilBrush(fc);
        fc.freeDrawingBrush.color = col;
        fc.freeDrawingBrush.width = sw;
        break;
      case 'highlight':
        fc.isDrawingMode = true;
        fc.selection = false;
        fc.freeDrawingBrush = new PencilBrush(fc);
        fc.freeDrawingBrush.color = col + '66'; // 40% opacity
        fc.freeDrawingBrush.width = sw * 4;
        break;
      case 'eraser':
        fc.isDrawingMode = false;
        fc.selection = false;
        break;
      case 'lasso':
        fc.isDrawingMode = false;
        fc.selection = true;
        break;
      case 'text':
        fc.isDrawingMode = false;
        fc.selection = true; // Allow selection for text editing
        break;
      case 'fc-process':
      case 'fc-decision':
      case 'fc-terminal':
        fc.isDrawingMode = false;
        fc.selection = false;
        break;
      case 'fc-connector':
        fc.isDrawingMode = false;
        fc.selection = true; // need to click on nodes
        break;
      case 'ruler':
        fc.isDrawingMode = false;
        fc.selection = false;
        break;
      default:
        fc.isDrawingMode = false;
        fc.selection = false;
    }
  }

  // ── Mouse handlers for eraser & shape tools ───────────────────────────────
  useEffect(() => {
    const fc = fabricRef.current;
    if (!fc || role !== 'teacher') return;

    if (tool === 'eraser') {
      const onDown = (e) => {
        if (!e.target) return;
        const obj = e.target;
        fc.remove(obj);
        fc.requestRenderAll();
        const cid = obj.data?.strokeClientId;
        if (cid) syncRef.current?.sendStrokeDelete(cid);
      };
      fc.on('mouse:down', onDown);
      return () => fc.off('mouse:down', onDown);
    }

    if (tool === 'pen' || tool === 'highlight') {
      // Last drawn path + when it was created (for the 1.2 s window)
      const state = { path: null, time: 0 };

      const onPathCreated = (e) => {
        state.path = e.path;
        state.time = Date.now();
        // Show hint toast for 1.5 s
        clearTimeout(snapHintTimerRef.current);
        setSnapHint(true);
        snapHintTimerRef.current = setTimeout(() => setSnapHint(false), 1500);
      };

      const onDown = () => {
        if (!state.path) return;
        if (Date.now() - state.time > 1200) { state.path = null; return; }
        // Start 2 s hold timer
        clearTimeout(snapHoldTimerRef.current);
        snapHoldTimerRef.current = setTimeout(() => {
          const p = state.path;
          if (!p) return;
          const snapped = snapShape(p, FabricCircle, FabricRect);
          if (snapped) {
            const cid = p.data?.strokeClientId ?? ('snap_' + Date.now());
            if (!snapped.data) snapped.data = {};
            snapped.data.strokeClientId = cid;
            fc.remove(p);
            fc.add(snapped);
            fc.requestRenderAll();
            syncRef.current?.sendStroke(classId, JSON.stringify(snapped.toJSON(['data'])), cid);
            setSnapHint(false);
          }
          state.path = null;
          snapHoldTimerRef.current = null;
        }, 2000);
      };

      const onCancelHold = () => {
        clearTimeout(snapHoldTimerRef.current);
        snapHoldTimerRef.current = null;
      };

      fc.on('path:created', onPathCreated);
      fc.on('mouse:down',   onDown);
      fc.on('mouse:up',     onCancelHold);
      fc.on('mouse:move',   onCancelHold);
      return () => {
        fc.off('path:created', onPathCreated);
        fc.off('mouse:down',   onDown);
        fc.off('mouse:up',     onCancelHold);
        fc.off('mouse:move',   onCancelHold);
        clearTimeout(snapHoldTimerRef.current);
        clearTimeout(snapHintTimerRef.current);
      };
    }

    if (['rect', 'circle', 'triangle', 'line', 'arrow', 'diamond', 'star', 'hexagon'].includes(tool)) {
      let shapeObj = null;
      let startPt = null;

      const onDown = (e) => {
        if (e.target) return; // don't start on existing object
        const p = fc.getPointer(e.e);
        startPt = { x: p.x, y: p.y };
        const base = { fill: 'transparent', stroke: color, strokeWidth, selectable: false, evented: false };
        if (tool === 'rect')     shapeObj = new FabricRect({ ...base, left: p.x, top: p.y, width: 0, height: 0 });
        else if (tool === 'circle')   shapeObj = new FabricCircle({ ...base, left: p.x, top: p.y, radius: 0 });
        else if (tool === 'triangle') shapeObj = new FabricTriangle({ ...base, left: p.x, top: p.y, width: 0, height: 0 });
        else if (tool === 'ruler')    shapeObj = new FabricLine([p.x, p.y, p.x, p.y], { stroke: color, strokeWidth, selectable: false, evented: false });
        else if (tool === 'line')     shapeObj = new FabricLine([p.x, p.y, p.x, p.y], { stroke: color, strokeWidth, selectable: false, evented: false });
        else if (tool === 'arrow')    shapeObj = new FabricPath(makeArrowPath(p.x, p.y, p.x + 1, p.y, Math.max(12, strokeWidth * 4)), { stroke: color, fill: 'transparent', strokeWidth, selectable: false, evented: false });
        else if (tool === 'diamond')  shapeObj = new FabricPolygon(diamondPoints(p.x, p.y, 1, 1), { ...base });
        else if (tool === 'star')     shapeObj = new FabricPolygon(starPoints(p.x, p.y, 1, 0.4), { ...base });
        else if (tool === 'hexagon')  shapeObj = new FabricPolygon(hexagonPoints(p.x, p.y, 1), { ...base });
        if (shapeObj) { fc.add(shapeObj); fc.requestRenderAll(); }
      };

      const onMove = (e) => {
        if (!shapeObj || !startPt) return;
        const p = fc.getPointer(e.e);
        if (tool === 'rect' || tool === 'triangle') {
          const w = p.x - startPt.x;
          const h = p.y - startPt.y;
          shapeObj.set({
            width: Math.abs(w), height: Math.abs(h),
            left: w < 0 ? p.x : startPt.x,
            top:  h < 0 ? p.y : startPt.y,
          });
        } else if (tool === 'circle') {
          const r = Math.sqrt((p.x - startPt.x) ** 2 + (p.y - startPt.y) ** 2) / 2;
          shapeObj.set({ radius: r, left: startPt.x - r, top: startPt.y - r });
        } else if (tool === 'ruler' || tool === 'line') {
          shapeObj.set({ x2: p.x, y2: p.y });
        } else if (tool === 'arrow') {
          const headSize = Math.max(12, strokeWidth * 4);
          fc.remove(shapeObj);
          shapeObj = new FabricPath(makeArrowPath(startPt.x, startPt.y, p.x, p.y, headSize), { stroke: color, fill: 'transparent', strokeWidth, selectable: false, evented: false });
          fc.add(shapeObj);
        } else if (tool === 'diamond') {
          const w = Math.abs(p.x - startPt.x);
          const h = Math.abs(p.y - startPt.y);
          const x = Math.min(p.x, startPt.x);
          const y = Math.min(p.y, startPt.y);
          fc.remove(shapeObj);
          shapeObj = new FabricPolygon(diamondPoints(x, y, w, h), { fill: 'transparent', stroke: color, strokeWidth, selectable: false, evented: false });
          fc.add(shapeObj);
        } else if (tool === 'star') {
          const w = Math.abs(p.x - startPt.x);
          const h = Math.abs(p.y - startPt.y);
          const cx = (p.x + startPt.x) / 2;
          const cy = (p.y + startPt.y) / 2;
          const outerR = Math.min(w, h) / 2;
          fc.remove(shapeObj);
          shapeObj = new FabricPolygon(starPoints(cx, cy, outerR, outerR * 0.4), { fill: 'transparent', stroke: color, strokeWidth, selectable: false, evented: false });
          fc.add(shapeObj);
        } else if (tool === 'hexagon') {
          const w = Math.abs(p.x - startPt.x);
          const h = Math.abs(p.y - startPt.y);
          const cx = (p.x + startPt.x) / 2;
          const cy = (p.y + startPt.y) / 2;
          fc.remove(shapeObj);
          shapeObj = new FabricPolygon(hexagonPoints(cx, cy, Math.min(w, h) / 2), { fill: 'transparent', stroke: color, strokeWidth, selectable: false, evented: false });
          fc.add(shapeObj);
        }
        fc.requestRenderAll();
      };

      const onUp = () => {
        if (!shapeObj) return;
        const shape = shapeObj;
        shapeObj = null;
        startPt = null;
        shape.set({ selectable: true, evented: true });
        const cid = 'stroke_' + Date.now() + '_' + Math.random().toString(36).slice(2);
        if (!shape.data) shape.data = {};
        shape.data.strokeClientId = cid;
        syncRef.current?.sendStroke(classId, JSON.stringify(shape.toJSON(['data'])), cid);
      };

      fc.on('mouse:down', onDown);
      fc.on('mouse:move', onMove);
      fc.on('mouse:up',   onUp);
      return () => {
        fc.off('mouse:down', onDown);
        fc.off('mouse:move', onMove);
        fc.off('mouse:up',   onUp);
      };
    }

    // Text tool: click to create editable text
    if (tool === 'text') {
      const onDown = (e) => {
        if (e.target) return; // Don't create on existing object
        const p = fc.getPointer(e.e);

        // Use IText which is specifically designed for interactive text editing
        const text = new FabricIText('Type here...', {
          left: p.x,
          top: p.y,
          fontFamily: textFont?.fontFamily || 'Inter, sans-serif',
          fontSize: textFont?.fontSize || 24,
          fontWeight: textFont?.fontWeight || 'normal',
          textDecoration: textFont?.textDecoration || '',
          fontStyle: textFont?.fontStyle || 'normal',
          textAlign: textFont?.textAlign || 'left',
          fill: textFont?.fill || color || '#1f2937',
          selectable: true,
          evented: true,
          editable: true,
          originX: 'left',
          originY: 'top',
        });
        fc.add(text);
        fc.setActiveObject(text);
        fc.requestRenderAll();

        // Focus the upper canvas element (where Fabric.js handles events)
        const upperCanvas = fc.upperCanvasEl;
        if (upperCanvas) {
          upperCanvas.focus();
        }

        // Enter editing mode immediately
        text.enterEditing();
        text.selectAll();
        fc.requestRenderAll();

        // Sync to other users
        const cid = 'text_' + Date.now() + '_' + Math.random().toString(36).slice(2);
        if (!text.data) text.data = {};
        text.data.strokeClientId = cid;

        const sendText = () => {
          syncRef.current?.sendStroke(classId, JSON.stringify(text.toJSON(['data'])), cid);
        };

        const onTextChange = () => {
          sendText();
        };

        const onTextExit = () => {
          text.off('changed', onTextChange);
          text.off('editing:exited', onTextExit);
          sendText();
        };

        text.on('changed', onTextChange);
        text.on('editing:exited', onTextExit);
      };

      fc.on('mouse:down', onDown);
      return () => {
        fc.off('mouse:down', onDown);
      };
    }
  }, [tool, color, strokeWidth, role, textFont, classId]);

  // ── Flowchart node placement & connector tool ─────────────────────────────
  useEffect(() => {
    const fc = fabricRef.current;
    if (!fc || role !== 'teacher') return;

    // Node placement: click canvas to drop a node
    if (['fc-process', 'fc-decision', 'fc-terminal'].includes(tool)) {
      const onDown = (e) => {
        if (e.target) return; // don't place on existing object
        const p = fc.getPointer(e.e);
        let node;
        if (tool === 'fc-process')  node = createProcessNode(p.x, p.y, 'Process', color);
        if (tool === 'fc-decision') node = createDecisionNode(p.x, p.y, 'Decision', color);
        if (tool === 'fc-terminal') node = createTerminalNode(p.x, p.y, 'Start', color);
        if (!node) return;
        fc.add(node);
        fc.setActiveObject(node);
        fc.requestRenderAll();
        // Sync node as JSON
        const cid = node.data.strokeClientId;
        syncRef.current?.sendStroke(classId, JSON.stringify(node.toJSON(['data'])), cid);
      };
      fc.on('mouse:down', onDown);
      return () => fc.off('mouse:down', onDown);
    }

    // Connector tool: click nodeA → click nodeB → create edge
    if (tool === 'fc-connector') {
      fcConnectorSourceRef.current = null;
      const onDown = (e) => {
        const target = e.target;
        // Accept Group-level click or click inside a Group
        const node = target && isFlowchartNode(target) ? target
                   : target?.group && isFlowchartNode(target.group) ? target.group
                   : null;
        if (!node) { fcConnectorSourceRef.current = null; return; }

        if (!fcConnectorSourceRef.current) {
          // First click — mark source
          fcConnectorSourceRef.current = node;
          node.set({ borderColor: '#6366f1', borderDashArray: [4, 4] });
          fc.requestRenderAll();
        } else {
          // Second click — create edge
          const src = fcConnectorSourceRef.current;
          // Bug fix 1: same-node click must clear the dashed highlight before returning
          if (src.data.fcNodeId === node.data.fcNodeId) {
            src.set({ borderColor: '', borderDashArray: null });
            fcConnectorSourceRef.current = null;
            fc.requestRenderAll();
            return;
          }
          const result = createEdge(src, node, color);
          if (result) {
            fc.add(result.line);
            fc.add(result.arrow);
            fc.requestRenderAll();
            // Sync edge line
            syncRef.current?.sendStroke(classId, JSON.stringify(result.line.toJSON(['data'])), result.line.data.strokeClientId);
            // Bug fix 2: also sync the arrowhead so remote users see it
            const arrowCid = 'fc_arrow_' + Date.now() + '_' + Math.random().toString(36).slice(2);
            if (!result.arrow.data) result.arrow.data = {};
            result.arrow.data.strokeClientId = arrowCid;
            syncRef.current?.sendStroke(classId, JSON.stringify(result.arrow.toJSON(['data'])), arrowCid);
          }
          // Reset source styling
          src.set({ borderColor: '', borderDashArray: null });
          fcConnectorSourceRef.current = null;
          fc.requestRenderAll();
        }
      };
      fc.on('mouse:down', onDown);
      return () => {
        fc.off('mouse:down', onDown);
        // Bug fix 3: clear source node highlight when switching away from connector tool
        const src = fcConnectorSourceRef.current;
        if (src) {
          src.set({ borderColor: '', borderDashArray: null });
          fc.requestRenderAll();
        }
        fcConnectorSourceRef.current = null;
      };
    }

    // ── Ruler: draw constrained-straight lines along the ruler axis ──────────
    if (tool === 'ruler') {
      fc.isDrawingMode = false;
      const SNAP_DIST = 32; // px — how close to the ruler axis to engage snap

      const project = (px, py) => {
        const { x: rx, y: ry, angle: deg } = rulerStateRef.current;
        const θ = deg * Math.PI / 180;
        const cosA = Math.cos(θ), sinA = Math.sin(θ);
        const dx = px - rx, dy = py - ry;
        const t = dx * cosA + dy * sinA;
        return {
          projX: rx + t * cosA,
          projY: ry + t * sinA,
          perpDist: Math.abs(-dx * sinA + dy * cosA),
        };
      };

      let activeLine = null;
      let startPt    = null;

      const onDown = (e) => {
        const p = fc.getPointer(e.e);
        const { projX, projY, perpDist } = project(p.x, p.y);
        if (perpDist > SNAP_DIST) return;
        startPt = { x: projX, y: projY };
        activeLine = new FabricLine([projX, projY, projX, projY], {
          stroke: color, strokeWidth, strokeLineCap: 'round',
          selectable: false, evented: false,
        });
        skipHistory.current = true;
        fc.add(activeLine);
        skipHistory.current = false;
        fc.requestRenderAll();
      };

      const onMove = (e) => {
        if (!activeLine || !startPt) return;
        const p = fc.getPointer(e.e);
        const { projX, projY } = project(p.x, p.y);
        activeLine.set({ x2: projX, y2: projY });
        fc.requestRenderAll();
      };

      const onUp = () => {
        if (!activeLine) return;
        const line = activeLine;
        activeLine = null;
        startPt    = null;
        // Discard near-zero lines (accidental taps)
        const len = Math.hypot((line.x2 ?? line.x1) - line.x1, (line.y2 ?? line.y1) - line.y1);
        if (len < 6) { fc.remove(line); fc.requestRenderAll(); return; }
        line.set({ selectable: true, evented: true });
        const cid = 'stroke_' + Date.now() + '_' + Math.random().toString(36).slice(2);
        if (!line.data) line.data = {};
        line.data.strokeClientId = cid;
        syncRef.current?.sendStroke(classId, JSON.stringify(line.toJSON(['data'])), cid);
        saveHistory();
      };

      fc.on('mouse:down', onDown);
      fc.on('mouse:move', onMove);
      fc.on('mouse:up',   onUp);
      return () => {
        fc.off('mouse:down', onDown);
        fc.off('mouse:move', onMove);
        fc.off('mouse:up',   onUp);
      };
    }
  }, [tool, color, strokeWidth, role, classId, saveHistory]);

  // ── Flowchart: snap-to-grid + edge redraw on node move ────────────────────
  useEffect(() => {
    const fc = fabricRef.current;
    if (!fc) return;
    const onMoving = (e) => {
      const obj = e.target;
      if (!isFlowchartNode(obj)) return;
      snapNodeToGrid(obj);
      updateEdgesForNode(fc, obj);
    };
    fc.on('object:moving', onMoving);
    return () => fc.off('object:moving', onMoving);
  }, []);

  // ── Flowchart: double-click a node to edit its text label ─────────────────
  useEffect(() => {
    const fc = fabricRef.current;
    if (!fc || role !== 'teacher') return;

    const onDblClick = (e) => {
      const target = e.target;
      const node = target && isFlowchartNode(target) ? target
                 : target?.group && isFlowchartNode(target.group) ? target.group
                 : null;
      if (!node) return;

      // Find the IText label inside the group
      const textObj = node.getObjects().find(o => o instanceof FabricIText);
      if (!textObj) return;

      // Get the node's absolute centre on the canvas
      const center = node.getCenterPoint();

      // Overlay a temporary standalone IText for editing
      const tempText = new FabricIText(textObj.text || '', {
        left: center.x,
        top: center.y,
        fontSize: textObj.fontSize || 14,
        fontFamily: textObj.fontFamily || 'Inter, sans-serif',
        fill: textObj.fill || '#1f2937',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
        editable: true,
        width: node.getScaledWidth() * 0.85,
      });

      // Hide the node while the overlay is active
      // Guard: adding/removing the temp IText must not pollute the history stack
      skipHistory.current = true;
      node.set('visible', false);
      fc.add(tempText);
      skipHistory.current = false;
      fc.setActiveObject(tempText);
      tempText.enterEditing();
      tempText.selectAll();
      fc.requestRenderAll();

      const onExited = () => {
        tempText.off('editing:exited', onExited);
        textObj.set('text', tempText.text ?? '');
        node.set('visible', true);
        skipHistory.current = true;
        fc.remove(tempText);
        skipHistory.current = false;
        fc.setActiveObject(node);
        // Re-sync the node with updated label
        syncRef.current?.sendStroke(classId, JSON.stringify(node.toJSON(['data'])), node.data.strokeClientId);
        fc.requestRenderAll();
        // Save history after the label edit is complete
        saveHistory();
      };
      tempText.on('editing:exited', onExited);
    };

    fc.on('mouse:dblclick', onDblClick);
    return () => fc.off('mouse:dblclick', onDblClick);
  }, [role, classId, saveHistory]);

  // ── Undo / Redo ─────────────────────────────────────────────────────────────

  const handleUndo = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc || historyIndex.current <= 0) return;
    historyIndex.current -= 1;
    const snap = historyStack.current[historyIndex.current];
    skipHistory.current = true;
    fc.loadFromJSON(JSON.parse(snap)).then(() => {
      skipHistory.current = false;
      fc.requestRenderAll();
      setCanUndo(historyIndex.current > 0);
      setCanRedo(true);
      broadcastCanvasState();
      // Reconcile Convex strokes with current canvas state (cross-device sync)
      syncRef.current?.syncFullCanvasState(classId, fc.getObjects().map(o => o.toJSON(['data'])));
    });
  }, [classId, broadcastCanvasState]);

  const handleRedo = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc || historyIndex.current >= historyStack.current.length - 1) return;
    historyIndex.current += 1;
    const snap = historyStack.current[historyIndex.current];
    skipHistory.current = true;
    fc.loadFromJSON(JSON.parse(snap)).then(() => {
      skipHistory.current = false;
      fc.requestRenderAll();
      setCanUndo(historyIndex.current > 0);
      setCanRedo(historyIndex.current < historyStack.current.length - 1);
      broadcastCanvasState();
      // Reconcile Convex strokes with current canvas state (cross-device sync)
      syncRef.current?.syncFullCanvasState(classId, fc.getObjects().map(o => o.toJSON(['data'])));
    });
  }, [classId, broadcastCanvasState]);

  function handleClear() {
    const fc = fabricRef.current;
    if (!fc) return;
    skipHistory.current = true;
    const objs = [...fc.getObjects()];
    objs.forEach(o => {
      fc.remove(o);
      const cid = o.data?.strokeClientId;
      if (cid) syncRef.current?.sendStrokeDelete(cid);
    });
    skipHistory.current = false;
    fc.requestRenderAll();
    // Save the now-empty canvas as a history snapshot
    saveHistory();
  }

  // Keyboard shortcuts: Ctrl/Cmd+Z = undo, Ctrl/Cmd+Y / Ctrl/Cmd+Shift+Z = redo
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable) return;
      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key === 'z') {
        e.preventDefault();
        handleUndo();
      } else if ((e.metaKey || e.ctrlKey) && (e.key === 'y' || (e.shiftKey && e.key === 'z'))) {
        e.preventDefault();
        handleRedo();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [handleUndo, handleRedo]);

  // ── Import: place a single image ──────────────────────────────────────────
  function handlePlaceImage(dataUrl) {
    const fc = fabricRef.current;
    if (!fc) return;
    FabricImage.fromURL(dataUrl).then((img) => {
      const maxW = fc.getWidth() * 0.6;
      if (img.width > maxW) img.scaleToWidth(maxW);
      img.left = (fc.getWidth()  - (img.width  * (img.scaleX ?? 1))) / 2;
      img.top  = (fc.getHeight() - (img.height * (img.scaleY ?? 1))) / 2;
      fc.add(img);
      fc.setActiveObject(img);
      fc.requestRenderAll();
    });
  }

  // ── Import: place PDF pages stacked vertically ────────────────────────────
  function handlePlaceImages(dataUrls) {
    const fc = fabricRef.current;
    if (!fc) return;
    const canvasW = fc.getWidth();
    let currentY = 20;
    dataUrls.reduce((promise, url) => {
      return promise.then(() =>
        FabricImage.fromURL(url).then((img) => {
          const maxW = canvasW - 40;
          if (img.width > maxW) img.scaleToWidth(maxW);
          img.left = 20;
          img.top  = currentY;
          currentY += (img.height * (img.scaleY ?? 1)) + 16;
          fc.add(img);
          fc.requestRenderAll();
        })
      );
    }, Promise.resolve());
  }

  // ── Stamp ────────────────────────────────────────────────────────────────────
  function handleStampSelect(stampId, emoji) {
    const fc = fabricRef.current;
    if (!fc) return;
    const center = fc.getCenter();
    addStamp(fc, emoji, color, center.left, center.top);
  }

  // ── Timer ────────────────────────────────────────────────────────────────────
  function handleTimerUpdate(newState, elapsedMs, targetMs, mode) {
    // Update UI immediately (offline-safe — no Convex round trip needed)
    setTimerState({
      state: newState,
      mode,
      elapsedMs: Number(elapsedMs),
      targetMs: Number(targetMs),
    });
    // Attempt to broadcast to students via Convex (no-op if offline)
    syncRef.current?.updateTimer(classId, mode, newState, elapsedMs, targetMs);
  }

  // ── Poll handlers ─────────────────────────────────────────────────────────
  function handleCreatePoll(question, type, options, correctIndex) {
    const poll = syncRef.current?.createPoll(classId, question, type, options, correctIndex);
    if (poll) setPolls(prev => [...prev, poll]);
  }

  function handleClosePoll(pollId) {
    const poll = syncRef.current?.closePoll(pollId);
    if (poll) setPolls(prev => prev.map(p => p.id === pollId ? { ...poll } : p));
  }

  function handleSubmitPollResponse(pollId, response) {
    syncRef.current?.submitPollResponse(pollId, response);
    setMyPollAnswers(prev => ({ ...prev, [pollId]: response }));
  }

  function handleDismissPollResult() {
    setPollResult(null);
  }

  // ── Present mode handlers ─────────────────────────────────────────────────
  function _handleInvitePresent(identityHex, name) {
    if (presentState?.status === 'requesting' && presentState.presenterIdentity === identityHex) {
      syncRef.current?.approvePresent(classId);
    } else {
      syncRef.current?.invitePresenter(classId, identityHex, name);
    }
  }

  function handleEndPresent() {
    syncRef.current?.endPresent(classId);
  }

  function handleRequestPresent() {
    syncRef.current?.requestPresent(classId);
  }

  const isPresenting = presentState?.status === 'active';
  const isMyPresentation = isPresenting && presentState?.presenterIdentity === getCurrentUserId();

  // ── Stencil handlers ──────────────────────────────────────────────────────
  /** Place an SVG stencil on the canvas (click from palette or drag-drop) */
  /** Load a template: create Fabric objects from template.objects and add to canvas */
  function handleLoadTemplate(template) {
    const fc = fabricRef.current;
    if (!fc || !template?.objects?.length) return;
    const objs = template.objects.flat();
    const TYPE_MAP = {
      rect: FabricRect, circle: FabricCircle, line: null,
      triangle: FabricTriangle, text: null, ellipse: FabricEllipse,
      polygon: FabricPolygon,
    };
    objs.forEach((spec) => {
      const { type, ...props } = spec;
      if (type === 'line') {
        const obj = new FabricLine([props.x1 || 0, props.y1 || 0, props.x2 || 100, props.y2 || 100], {
          stroke: props.stroke || '#1f2937',
          strokeWidth: props.strokeWidth || 2,
          strokeDashArray: props.strokeDashArray || null,
          selectable: props.selectable !== false,
        });
        fc.add(obj);
      } else if (type === 'text') {
        const obj = new FabricText(props.text || '', props);
        fc.add(obj);
      } else {
        const Ctor = TYPE_MAP[type];
        if (!Ctor) return;
        const obj = new Ctor(props);
        fc.add(obj);
      }
    });
    fc.requestRenderAll();
    setShowTemplatePicker(false);
  }

  function handleDropStencil(stencil, dropX, dropY) {
    const fc = fabricRef.current;
    if (!fc) return;
    const blob = new Blob([stencil.svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    FabricImage.fromURL(url).then((img) => {
      URL.revokeObjectURL(url);
      const w = stencil.defaultWidth || 60;
      const h = stencil.defaultHeight || 60;
      img.scaleToWidth(w);
      img.set({
        left: dropX ?? (fc.getWidth() - w) / 2,
        top: dropY ?? (fc.getHeight() - h) / 2,
      });
      fc.add(img);
      fc.setActiveObject(img);
      fc.requestRenderAll();
    }).catch(() => { URL.revokeObjectURL(url); });
  }

  /** Handle HTML5 drag-drop from StencilPalette onto canvas wrapper */
  function handleCanvasDrop(e) {
    e.preventDefault();
    const raw = e.dataTransfer?.getData('application/x-stencil');
    if (!raw) return;
    try {
      const stencil = JSON.parse(raw);
      const rect = canvasWrapRef.current?.getBoundingClientRect();
      const dropX = rect ? e.clientX - rect.left : undefined;
      const dropY = rect ? e.clientY - rect.top : undefined;
      handleDropStencil(stencil, dropX, dropY);
    } catch { /* ignore bad data */ }
  }

  function handleCanvasDragOver(e) {
    if (e.dataTransfer?.types?.includes('application/x-stencil')) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    }
  }

  if (endedMsg) {
    return (
      <div className="lc-ended animate-fade-in">
        <h2>{endedMsg}</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Dashboard</button>
      </div>
    );
  }

  // ── Waiting for teacher admission ──────────────────────────────────────────
  if (joinRequestId && joinStatus === 'pending') {
    return (
      <div className="lc-join-overlay animate-fade-in">
        <div className="lc-join-dialog card lc-waiting-dialog">
          <div className="lc-join-icon">⏳</div>
          <h2 className="lc-join-title">Waiting for admission</h2>
          <p className="lc-join-subtitle">
            Hi <strong>{studentName || 'there'}</strong>! Your teacher will admit you shortly.
          </p>
          <div className="lc-waiting-spinner" aria-label="Waiting" />
          <button
            type="button"
            className="btn btn-ghost lc-join-teacher-btn"
            onClick={() => { navigate('/'); }}
          >
            Leave
          </button>
        </div>
      </div>
    );
  }

  if (joinRequestId && joinStatus === 'rejected') {
    return (
      <div className="lc-join-overlay animate-fade-in">
        <div className="lc-join-dialog card">
          <div className="lc-join-icon">🚫</div>
          <h2 className="lc-join-title">Not admitted</h2>
          <p className="lc-join-subtitle">Your teacher has declined your join request.</p>
          <button className="btn btn-primary lc-join-btn" onClick={() => navigate('/')}>
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!role) {
    // Students opening a direct shared link still need teacher admission.
    const isSharedLink = !location.state?.session;
    if (isSharedLink) {
      if (stdbStatus === 'connecting') {
        return <div className="lc-loading animate-fade-in">Connecting to class…</div>;
      }

      return (
        <div className="lc-join-overlay animate-fade-in">
          <div className="lc-join-dialog card">
            <div className="lc-join-icon">🎓</div>
            <h2 className="lc-join-title">Teacher Admission Required</h2>
            <p className="lc-join-subtitle">
              This live class only opens after your teacher admits you. Use the Join Live Class
              option from the sidebar with your class code, or wait for an invite.
            </p>
            <button className="btn btn-primary lc-join-btn" onClick={() => navigate('/')}>
              Back to Dashboard
            </button>
          </div>
        </div>
      );
    }
    return <div className="lc-loading">Joining class…</div>;
  }

  const isTeacher = role === 'teacher';
  const bgStyle = BG_STYLE[backgroundType] ?? BG_STYLE.white;

  return (
    <div className={`lc-page animate-fade-in ${isTeacher ? 'lc-page--teacher' : 'lc-page--student'}`}>
      {/* ── Top bar ──────────────────────────────────────────────── */}
      <div className="lc-topbar card">
        <div className="lc-topbar-left">
          {isTeacher ? (
            <button
              className="badge lc-live-badge lc-live-badge--end"
              onClick={() => {
                broadcastRef.current?.postMessage({ type: 'class-ended' });
                syncRef.current?.endClass(classId);
                navigate('/teacher');
              }}
              title="End class"
            >● LIVE</button>
          ) : (
            <span className="badge lc-live-badge">● LIVE</span>
          )}
          {/* ── Page tabs (teacher only) ───────────────────────── */}
          {isTeacher && (
            <div className="lc-tab-strip">
              {tabs.map(tab => (
                <div
                  key={tab.id}
                  className={`lc-tab-pill${tab.id === activeTabId ? ' lc-tab-pill--active' : ''}`}
                >
                  {renamingTabId === tab.id ? (
                    <input
                      ref={renameInputRef}
                      className="lc-tab-rename-input"
                      value={renameValue}
                      onChange={e => setRenameValue(e.target.value)}
                      onBlur={handleRenameCommit}
                      onKeyDown={e => {
                        if (e.key === 'Enter') handleRenameCommit();
                        if (e.key === 'Escape') setRenamingTabId(null);
                        e.stopPropagation();
                      }}
                      onClick={e => e.stopPropagation()}
                      autoFocus
                    />
                  ) : (
                    <span
                      className="lc-tab-label"
                      onClick={() => handleSwitchTab(tab.id)}
                      onDoubleClick={e => {
                        e.stopPropagation();
                        setRenamingTabId(tab.id);
                        setRenameValue(tab.label);
                      }}
                      title="Double-click to rename"
                    >{tab.label}</span>
                  )}
                  {tabs.length > 1 && (
                    <button
                      className="lc-tab-close"
                      onClick={e => handleCloseTab(e, tab.id)}
                      title="Close page"
                    >×</button>
                  )}
                </div>
              ))}
              <button
                className="lc-tab-add"
                onClick={handleAddTab}
                title="Add new page"
              >+</button>
            </div>
          )}
          <span className="lc-session-title">{sessionData?.title ?? 'Live Class'}</span>
          <span className="lc-participant-count">{participants.length} student{participants.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="lc-topbar-right">
          <span
            className={`lc-stdb-pill lc-stdb-pill--${stdbStatus}`}
            title={
              stdbStatus === 'connected' ? 'Convex: connected (cross-device sync active)' :
              stdbStatus === 'offline'   ? 'Convex: offline (same-browser sync only)' :
                                          'Convex: connecting…'
            }
          >
            <span className="lc-stdb-dot" />
            {stdbStatus === 'connected' ? 'Synced' : stdbStatus === 'offline' ? 'Local' : 'Connecting'}
          </span>
          {/* Join code badge — teacher only */}
          {isTeacher && sessionData?.joinCode && (
            <button
              className={`btn btn-sm lc-share-btn lc-code-badge ${codeCopied ? 'lc-share-btn--copied' : ''}`}
              onClick={handleCopyCode}
              title="Click to copy class code"
            >
              {codeCopied ? <Check size={14} /> : <Copy size={14} />}
              <span className="lc-join-code-badge-text">{sessionData.joinCode}</span>
            </button>
          )}
          {/* My Notes button — student only */}
          {!isTeacher && (
            <button
              className={`btn btn-sm lc-share-btn ${showMyNotes ? 'lc-share-btn--active' : ''}`}
              onClick={() => setShowMyNotes(v => !v)}
              title="My notes"
            >
              <NoteIcon size={14} />
              <span className="lc-share-btn-label">My Notes</span>
            </button>
          )}
          {isTeacher && (
            <>
              <button
                ref={handsBtnRef}
                className={`btn btn-sm lc-share-btn lc-dropdown-trigger ${showHandPanel ? 'lc-share-btn--active' : ''}`}
                onClick={() => {
                  const rect = handsBtnRef.current?.getBoundingClientRect();
                  if (showHandPanel) { setShowHandPanel(false); setHandsAnchor(null); }
                  else { setHandsAnchor(rect); setShowHandPanel(true); }
                }}
                title="Hand raises"
              >
                <Hand size={14} />
                <span className="lc-share-btn-label">Hands{handRaises.length > 0 ? ` (${handRaises.length})` : ''}</span>
              </button>
              <button
                ref={studentsBtnRef}
                className={`btn btn-sm lc-share-btn lc-dropdown-trigger ${showStudentGrid ? 'lc-share-btn--active' : ''}`}
                onClick={() => {
                  const rect = studentsBtnRef.current?.getBoundingClientRect();
                  if (showStudentGrid) { setShowStudentGrid(false); setStudentsAnchor(null); }
                  else { setStudentsAnchor(rect); setShowStudentGrid(true); }
                }}
                title="Admitted students + pending requests"
              >
                <Users size={14} />
                <span className="lc-share-btn-label">
                  Students
                  {joinRequests.filter(r => r.status === 'pending').length > 0 && (
                    <span className="lc-pending-badge">
                      {joinRequests.filter(r => r.status === 'pending').length}
                    </span>
                  )}
                </span>
              </button>
            </>
          )}
          <ClassTimer
            timerState={timerState}
            isTeacher={isTeacher}
            onUpdate={handleTimerUpdate}
          />
        </div>
      </div>

      {/* ── Toolbar ──────────────────────────────────────────────── */}
      <LiveClassToolbar
        tool={tool}
        color={color}
        strokeWidth={strokeWidth}
        backgroundType={backgroundType}
        isTeacher={isTeacher}
        handCount={handRaises.length}
        textFont={textFont}
        laserMode={laserMode}
        onToolChange={setTool}
        onColorChange={setColor}
        onStrokeWidthChange={setStrokeWidth}
        onBgChange={(bg) => {
          setBackgroundType(bg);
          syncRef.current?.setBackground(classId, bg);
          broadcastRef.current?.postMessage({ type: 'bg-change', data: bg });

        }}
        onFontChange={setTextFont}
        onLaserModeChange={setLaserMode}
        onStampSelect={handleStampSelect}
        onOpenImport={() => setShowImportDialog(true)}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onClear={handleClear}
        canUndo={canUndo}
        canRedo={canRedo}
        onZoomIn={() => {
          const fc = fabricRef.current;
          if (fc) { fc.setZoom(Math.min(fc.getZoom() * 1.2, 5)); fc.requestRenderAll(); }
        }}
        onZoomOut={() => {
          const fc = fabricRef.current;
          if (fc) { fc.setZoom(Math.max(fc.getZoom() / 1.2, 0.2)); fc.requestRenderAll(); }
        }}
        onToggleStudentGrid={() => setShowStudentGrid(v => !v)}
        onToggleHandPanel={() => setShowHandPanel(v => !v)}
        onRaiseHand={() => syncRef.current?.raiseHand(classId)}
        onTogglePollPanel={(rect) => {
          if (showPollPanel) { setShowPollPanel(false); setPollAnchor(null); }
          else { setPollAnchor(rect); setShowPollPanel(true); }
        }}
        activePollCount={polls.filter(p => p.status === 'active').length}
        isPollPanelOpen={showPollPanel}
        isStencilPanelOpen={showStencilPanel}
        isTemplatePanelOpen={showTemplatePicker}
        isGraphPanelOpen={showGraphWidget}
        onToggleStencilPanel={(rect) => {
          if (showStencilPanel) { setShowStencilPanel(false); setStencilAnchor(null); }
          else { setStencilAnchor(rect); setShowStencilPanel(true); }
        }}
        onToggleTemplatePicker={(rect) => {
          if (showTemplatePicker) { setShowTemplatePicker(false); setTemplateAnchor(null); }
          else { setTemplateAnchor(rect); setShowTemplatePicker(true); }
        }}
        onToggleGraphWidget={(rect) => {
          if (showGraphWidget) { setShowGraphWidget(false); setGraphAnchor(null); }
          else { setGraphAnchor(rect); setShowGraphWidget(true); }
        }}
      />

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="lc-body">
        {/* Student split-panel: left = teacher live (read-only), right = own canvas */}
        {!isTeacher && (
          <div className="lc-student-panel">
            <div className="lc-panel-label">Teacher's Board</div>
            <div ref={teacherBoardWrapRef} className="lc-canvas-wrap lc-canvas-wrap--readonly" style={bgStyle}>
              <canvas ref={teacherCanvasRef} />
              <LaserPointerOverlay cursors={cursors} trails={laserTrails} width={canvasSize.w} height={canvasSize.h} localMode={laserMode} />
              <SpotlightOverlay width={canvasSize.w} height={canvasSize.h} enabled={false} />
            </div>
          </div>
        )}

        {/* Teacher / student own canvas */}
        <div className={`lc-main-canvas-wrap ${!isTeacher ? 'lc-my-panel' : ''}${isMyPresentation ? ' lc-canvas-presenting' : ''}`}>
          {!isTeacher && (
            <div className="lc-panel-label">
              My Notes
              {isMyPresentation && <span className="lc-present-live-badge">● Presenting</span>}
              {!isMyPresentation && !isPresenting && (
                <button className="lc-present-request-btn btn btn-ghost btn-sm" onClick={handleRequestPresent}>
                  Request to Present
                </button>
              )}
            </div>
          )}
          <div
            ref={canvasWrapRef}
            className="lc-canvas-wrap"
            style={bgStyle}
            tabIndex={0}
            onDrop={handleCanvasDrop}
            onDragOver={handleCanvasDragOver}
          >
            <canvas ref={isTeacher ? teacherCanvasRef : myCanvasRef} />
            {isTeacher && <LaserPointerOverlay cursors={cursors} trails={laserTrails} width={canvasSize.w} height={canvasSize.h} localMode={laserMode} />}
            {isTeacher && <SpotlightOverlay width={canvasSize.w} height={canvasSize.h} enabled={spotlightEnabled} />}
            {isTeacher && tool === 'ruler' && (
              <RulerWidget
                containerRef={canvasWrapRef}
                canvasW={canvasSize.w}
                canvasH={canvasSize.h}
                onChange={handleRulerStateChange}
              />
            )}
            {isTeacher && snapHint && (tool === 'pen' || tool === 'highlight') && (
              <div className="lc-snap-hint">
                Hold <strong>2 s</strong> to snap to shape
              </div>
            )}
          </div>
        </div>

        {/* PiP overlay when a student is presenting (teacher view) */}
        {isTeacher && isPresenting && (
          <div className="lc-present-pip">
            <div className="lc-present-pip-header">
              <span className="lc-present-pip-name">
                <span className="lc-present-pip-dot" /> {presentState.presenterName ?? 'Student'} is presenting
              </span>
              <button className="btn btn-ghost btn-sm lc-present-pip-end" onClick={handleEndPresent}>
                End
              </button>
            </div>
            <div className="lc-present-pip-canvas">
              {/* Placeholder — real canvas streaming would require WebRTC */}
              <div className="lc-present-pip-placeholder">
                <span>{presentState.presenterName ?? 'Student'}'s Board</span>
              </div>
            </div>
          </div>
        )}

        {/* (teacher panels rendered as portal dropdowns below) */}

        {/* Student poll overlay */}
        {!isTeacher && (() => {
          const activePoll = polls.find(p => p.status === 'active');
          if (!activePoll && !pollResult) return null;
          return (
            <StudentPollOverlay
              poll={activePoll || polls.find(p => p.status === 'closed')}
              hasAnswered={activePoll ? !!myPollAnswers[activePoll.id] : false}
              result={pollResult}
              onSubmit={handleSubmitPollResponse}
              onDismiss={handleDismissPollResult}
            />
          );
        })()}
      </div>

      {/* ── Import Media Dialog ──────────────────────────────────── */}
      {showImportDialog && (
        <Suspense fallback={null}>
          <ImportMediaDialog
            onClose={() => setShowImportDialog(false)}
            onPlaceImage={handlePlaceImage}
            onPlaceImages={handlePlaceImages}
          />
        </Suspense>
      )}

      {/* ── Topbar dropdown panels (portal) ──────────────────────── */}
      {isTeacher && showHandPanel && handsAnchor && createPortal(
        <div className="lc-dropdown-panel" style={{ top: handsAnchor.bottom + 6, left: handsAnchor.left }}>
          <HandRaisePanel
            raises={handRaises}
            participants={participants}
            onAcknowledge={(raiseId) => syncRef.current?.acknowledgeRaise(raiseId)}
          />
        </div>,
        document.body
      )}
      {isTeacher && showStudentGrid && studentsAnchor && createPortal(
        <StudentAdmissionPanel
          anchor={studentsAnchor}
          sessionId={classId}
          autoAccept={autoAccept}
          onClose={() => { setShowStudentGrid(false); setStudentsAnchor(null); }}
          onAutoAcceptChange={setAutoAccept}
        />,
        document.body
      )}

      {/* ── Toolbar dropdown panels (portal) ─────────────────────── */}
      {isTeacher && showPollPanel && pollAnchor && createPortal(
        <div className="lc-dropdown-panel" style={{ top: pollAnchor.bottom + 6, left: pollAnchor.left }}>
          <LivePollPanel
            polls={polls}
            studentCount={participants.length}
            onCreatePoll={handleCreatePoll}
            onClosePoll={handleClosePoll}
            onClose={() => { setShowPollPanel(false); setPollAnchor(null); }}
          />
        </div>,
        document.body
      )}
      {isTeacher && showStencilPanel && stencilAnchor && createPortal(
        <div className="lc-dropdown-panel" style={{ top: stencilAnchor.bottom + 6, left: stencilAnchor.left }}>
          <StencilPalette
            onDropStencil={(stencil) => handleDropStencil(stencil)}
            onClose={() => { setShowStencilPanel(false); setStencilAnchor(null); }}
          />
        </div>,
        document.body
      )}
      {isTeacher && showTemplatePicker && templateAnchor && createPortal(
        <div className="lc-dropdown-panel" style={{ top: templateAnchor.bottom + 6, left: templateAnchor.left }}>
          <TemplatePicker
            onLoadTemplate={handleLoadTemplate}
            onClose={() => { setShowTemplatePicker(false); setTemplateAnchor(null); }}
          />
        </div>,
        document.body
      )}
      {isTeacher && showGraphWidget && graphAnchor && createPortal(
        <div className="lc-dropdown-panel" style={{ top: graphAnchor.bottom + 6, left: graphAnchor.left }}>
          <GraphWidget
            onStampToCanvas={(dataUrl) => {
              handlePlaceImage(dataUrl);
              setShowGraphWidget(false);
              setGraphAnchor(null);
            }}
            onClose={() => { setShowGraphWidget(false); setGraphAnchor(null); }}
          />
        </div>,
        document.body
      )}

      {/* ── Student notes panel ───────────────────────────────────── */}
      {!isTeacher && showMyNotes && (
        <StudentNotePanel
          sessionId={classId}
          tempId={joinTempId}
          onClose={() => setShowMyNotes(false)}
        />
      )}
    </div>
  );
}
