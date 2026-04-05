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
import { closeSyncChannel } from '../services/liveclass/localLiveClassStore.js';
import { createLiveClassSync } from '../services/liveclass/liveClassSync.js';
import { useAuth } from '../hooks/useAuth.js';
import LiveClassToolbar from '../components/liveclass/LiveClassToolbar.jsx';
import FontPicker from '../components/liveclass/FontPicker.jsx';
import { DEFAULT_TEXT_FONT } from '../components/liveclass/fontDefaults.js';
import LaserPointerOverlay from '../components/liveclass/LaserPointerOverlay.jsx';
import SpotlightOverlay from '../components/liveclass/SpotlightOverlay.jsx';
import RulerWidget from '../components/liveclass/RulerWidget.jsx';
import TeacherStudentGrid from '../components/liveclass/TeacherStudentGrid.jsx';
import HandRaisePanel from '../components/liveclass/HandRaisePanel.jsx';
import StudentAdmissionPanel from '../components/liveclass/StudentAdmissionPanel.jsx';
import ClassTimer from '../components/liveclass/ClassTimer.jsx';
import LivePollPanel from '../components/liveclass/LivePollPanel.jsx';
import MobileSheetPortal from '../components/liveclass/MobileSheetPortal.jsx';
import StudentPollOverlay from '../components/liveclass/StudentPollOverlay.jsx';
import StudentNotePanel from '../components/liveclass/StudentNotePanel.jsx';
import StencilPalette from '../components/liveclass/StencilPalette.jsx';
import TemplatePicker from '../components/liveclass/TemplatePicker.jsx';
import GraphWidget from '../components/liveclass/GraphWidget.jsx';
import {
  createProcessNode, createDecisionNode, createTerminalNode,
  createEdge, updateEdgesForNode, isFlowchartNode, snapNodeToGrid,
} from '../components/liveclass/FlowchartTool.js';
import { useTheme } from '../hooks/useTheme.js';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import './Pages.css';

const ImportMediaDialog = lazy(() => import('../components/liveclass/ImportMediaDialog.jsx'));
const DEFAULT_CANVAS_INK = '#1f2937';
const DEFAULT_CANVAS_ACCENT = '#3b82f6';
const DEFAULT_ERASER_MODE = 'precision';
const DEFAULT_HIGHLIGHTER_MODE = 'freehand';
const TOOL_SHORTCUT_KEY_MAP = {
  p: 'pen',
  h: 'highlight',
  e: 'eraser',
  l: 'lasso',
  v: 'pointer',
  k: 'laser',
  o: 'spotlight',
  r: 'ruler',
  t: 'text',
  1: 'rect',
  2: 'circle',
  3: 'triangle',
  4: 'line',
  5: 'arrow',
  6: 'diamond',
  7: 'star',
  8: 'hexagon',
  q: 'fc-process',
  w: 'fc-decision',
  a: 'fc-terminal',
  s: 'fc-connector',
};
const TEACHER_ONLY_SHORTCUT_TOOLS = new Set([
  'pointer',
  'laser',
  'spotlight',
  'ruler',
  'fc-process',
  'fc-decision',
  'fc-terminal',
  'fc-connector',
]);

function readThemeColor(variableName, fallback) {
  if (typeof window === 'undefined') return fallback;
  const value = window.getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
  return value || fallback;
}

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

const SHAPE_TOOLS = ['rect', 'circle', 'triangle', 'line', 'arrow', 'diamond', 'star', 'hexagon'];

function createEmptyShapeDrawState() {
  return {
    isDown: false,
    shape: null,
    startPt: null,
    lastPt: null,
    tool: null,
    canvas: null,
  };
}

function getArrowHeadSize(strokeWidth) {
  return Math.max(12, strokeWidth * 4);
}

function getShapeDragMetrics(startPt, endPt) {
  const dx = endPt.x - startPt.x;
  const dy = endPt.y - startPt.y;
  const width = Math.abs(dx);
  const height = Math.abs(dy);

  return {
    dx,
    dy,
    width,
    height,
    left: dx < 0 ? endPt.x : startPt.x,
    top: dy < 0 ? endPt.y : startPt.y,
    centerX: (startPt.x + endPt.x) / 2,
    centerY: (startPt.y + endPt.y) / 2,
    length: Math.hypot(dx, dy),
  };
}

function isShapeDragTooSmall(toolId, startPt, endPt) {
  if (!startPt || !endPt) return true;

  const metrics = getShapeDragMetrics(startPt, endPt);

  if (toolId === 'rect' || toolId === 'triangle') {
    return metrics.width < 8 || metrics.height < 8;
  }

  if (toolId === 'circle') {
    return Math.max(metrics.width, metrics.height) < 8;
  }

  if (toolId === 'line') {
    return metrics.length < 8;
  }

  if (toolId === 'arrow') {
    return metrics.length < 12;
  }

  if (toolId === 'diamond') {
    return metrics.width < 10 || metrics.height < 10;
  }

  if (toolId === 'star' || toolId === 'hexagon') {
    return Math.min(metrics.width, metrics.height) < 12;
  }

  return metrics.length < 8;
}

function refreshPathBounds(shape) {
  if (!shape) return;

  if (typeof shape.setBoundingBox === 'function') {
    shape.setBoundingBox(true);
  } else if (typeof shape.setDimensions === 'function') {
    shape.setDimensions();
  }

  shape.setCoords();
}

function updateShapeFromDrag(shape, toolId, startPt, endPt, color, strokeWidth) {
  if (!shape || !startPt || !endPt) return;

  const metrics = getShapeDragMetrics(startPt, endPt);

  if (toolId === 'rect' || toolId === 'triangle') {
    shape.set({
      left: metrics.left,
      top: metrics.top,
      width: metrics.width,
      height: metrics.height,
    });
    return;
  }

  if (toolId === 'circle') {
    const diameter = Math.max(metrics.width, metrics.height);
    const radius = diameter / 2;
    shape.set({
      radius,
      left: metrics.dx < 0 ? startPt.x - diameter : startPt.x,
      top: metrics.dy < 0 ? startPt.y - diameter : startPt.y,
    });
    return;
  }

  if (toolId === 'line') {
    shape.set({ x2: endPt.x, y2: endPt.y });
    return;
  }

  if (toolId === 'arrow') {
    shape.set({
      path: fabricUtil.parsePath(makeArrowPath(startPt.x, startPt.y, endPt.x, endPt.y, getArrowHeadSize(strokeWidth))),
      stroke: color,
      strokeWidth,
    });
    refreshPathBounds(shape);
    return;
  }

  if (toolId === 'diamond') {
    shape.set({ points: diamondPoints(metrics.left, metrics.top, metrics.width, metrics.height) });
    shape.setDimensions();
    shape.setCoords();
    return;
  }

  if (toolId === 'star') {
    const outerR = Math.min(metrics.width, metrics.height) / 2;
    shape.set({ points: starPoints(metrics.centerX, metrics.centerY, outerR, outerR * 0.4) });
    shape.setDimensions();
    shape.setCoords();
    return;
  }

  if (toolId === 'hexagon') {
    shape.set({ points: hexagonPoints(metrics.centerX, metrics.centerY, Math.min(metrics.width, metrics.height) / 2) });
    shape.setDimensions();
    shape.setCoords();
  }
}

function createShapeObject(toolId, point, color, strokeWidth) {
  const base = { fill: 'transparent', stroke: color, strokeWidth, selectable: false, evented: false };

  if (toolId === 'rect') return new FabricRect({ ...base, left: point.x, top: point.y, width: 0, height: 0 });
  if (toolId === 'circle') return new FabricCircle({ ...base, left: point.x, top: point.y, radius: 0 });
  if (toolId === 'triangle') return new FabricTriangle({ ...base, left: point.x, top: point.y, width: 0, height: 0 });
  if (toolId === 'line') return new FabricLine([point.x, point.y, point.x, point.y], { stroke: color, strokeWidth, selectable: false, evented: false });
  if (toolId === 'arrow') {
    return new FabricPath(makeArrowPath(point.x, point.y, point.x + 1, point.y, getArrowHeadSize(strokeWidth)), {
      stroke: color,
      fill: 'transparent',
      strokeWidth,
      selectable: false,
      evented: false,
    });
  }
  if (toolId === 'diamond') return new FabricPolygon(diamondPoints(point.x, point.y, 1, 1), { ...base });
  if (toolId === 'star') return new FabricPolygon(starPoints(point.x, point.y, 1, 0.4), { ...base });
  if (toolId === 'hexagon') return new FabricPolygon(hexagonPoints(point.x, point.y, 1), { ...base });

  return null;
}

function isShapeToolObject(obj) {
  return Boolean(obj?.data?.shapeToolId && SHAPE_TOOLS.includes(obj.data.shapeToolId));
}

function inferShapeToolId(obj) {
  if (obj instanceof FabricRect) return 'rect';
  if (obj instanceof FabricCircle) return 'circle';
  if (obj instanceof FabricTriangle) return 'triangle';
  if (obj instanceof FabricPolygon) return 'polygon';
  return null;
}

function isEditableShapeObject(obj) {
  if (!obj || obj?.data?.objectRole === 'shape-label') return false;
  return isShapeToolObject(obj) || Boolean(inferShapeToolId(obj));
}

function getLinkedShapeLabel(canvas, shape) {
  const shapeId = shape?.data?.strokeClientId;
  if (!canvas || !shapeId) return null;
  return canvas.getObjects().find((candidate) => candidate?.data?.parentShapeId === shapeId) ?? null;
}

function getShapeLabelMetrics(shape) {
  const center = shape.getCenterPoint();
  const bounds = shape.getBoundingRect();
  return {
    center,
    width: Math.max(64, bounds.width * 0.85),
  };
}

function positionShapeLabel(shape, label) {
  if (!shape || !label) return;
  const { center, width } = getShapeLabelMetrics(shape);
  label.set({
    left: center.x,
    top: center.y,
    width,
    originX: 'center',
    originY: 'center',
    textAlign: 'center',
  });
  label.setCoords();
}

function createShapeLabel(shape, textValue, options = {}) {
  const label = new FabricIText(textValue, {
    fontSize: options.fontSize ?? 18,
    fontFamily: options.fontFamily || DEFAULT_TEXT_FONT.fontFamily,
    fill: options.fill || '#111827',
    fontWeight: options.fontWeight || 'normal',
    fontStyle: options.fontStyle || 'normal',
    textDecoration: options.textDecoration || '',
    editable: false,
    selectable: false,
    evented: false,
    hoverCursor: 'default',
    lockMovementX: true,
    lockMovementY: true,
    hasControls: false,
    hasBorders: false,
    data: options.data || {},
  });
  positionShapeLabel(shape, label);
  return label;
}

function getCanvasPoint(canvas, event) {
  if (!canvas || !event) return { x: 0, y: 0 };
  if (typeof canvas.getScenePoint === 'function') {
    return canvas.getScenePoint(event);
  }
  if (typeof canvas.getPointer === 'function') {
    return canvas.getPointer(event);
  }
  return { x: 0, y: 0 };
}

function getCanvasTarget(canvas, fabricEvent, { allowFindTarget = false } = {}) {
  if (fabricEvent?.e && fabricEvent?.target) return fabricEvent.target;
  if (!allowFindTarget) return null;
  const nativeEvent = fabricEvent?.e ?? fabricEvent;
  if (canvas && nativeEvent && typeof canvas.findTarget === 'function') {
    const resolved = canvas.findTarget(nativeEvent);
    return resolved?.target ?? resolved?.currentTarget ?? resolved ?? null;
  }
  return null;
}

function getCanvasTargetFromPointer(canvas, fabricEvent) {
  const target = getCanvasTarget(canvas, fabricEvent, { allowFindTarget: true });
  if (target) return target;
  if (!canvas) return null;

  const nativeEvent = fabricEvent?.e ?? fabricEvent;
  const point = nativeEvent ? getCanvasPoint(canvas, nativeEvent) : null;
  if (!point) return null;

  const objects = canvas.getObjects?.() ?? [];
  for (let index = objects.length - 1; index >= 0; index -= 1) {
    const obj = objects[index];
    if (!obj || obj.visible === false || obj.excludeFromExport) continue;

    const bounds = typeof obj.getBoundingRect === 'function'
      ? obj.getBoundingRect()
      : null;
    if (!bounds) continue;

    const padding = Math.max(10, (obj.strokeWidth ?? 0) * 2);
    const withinBounds = (
      point.x >= bounds.left - padding &&
      point.x <= bounds.left + bounds.width + padding &&
      point.y >= bounds.top - padding &&
      point.y <= bounds.top + bounds.height + padding
    );
    if (!withinBounds) continue;

    if (typeof obj.containsPoint === 'function') {
      try {
        if (obj.containsPoint(point)) return obj;
      } catch {
        // Fall back to padded bounds below.
      }
    }

    return obj;
  }

  return null;
}

function getColorAlpha(colorValue) {
  if (typeof colorValue !== 'string') return 1;
  const color = colorValue.trim();

  if (/^#[0-9a-fA-F]{8}$/.test(color)) {
    return parseInt(color.slice(7, 9), 16) / 255;
  }

  const rgbaMatch = color.match(/^rgba\([^,]+,[^,]+,[^,]+,\s*([0-9]*\.?[0-9]+)\)$/i);
  if (rgbaMatch) {
    const alpha = Number(rgbaMatch[1]);
    return Number.isFinite(alpha) ? alpha : 1;
  }

  return 1;
}

function isHighlighterStrokeObject(obj) {
  if (!obj) return false;
  if (obj?.data?.drawingToolId === 'highlight') return true;
  if (obj?.type !== 'path') return false;
  return getColorAlpha(obj.stroke) < 0.95;
}

function createStraightHighlighterLine(startPoint, endPoint, colorValue, strokeWidthValue) {
  return new FabricLine([startPoint.x, startPoint.y, endPoint.x, endPoint.y], {
    stroke: colorValue,
    opacity: 0.4,
    strokeWidth: strokeWidthValue * 4,
    strokeLineCap: 'round',
    strokeLineJoin: 'round',
    selectable: false,
    evented: false,
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

function hasFullLiveClassAccess(session) {
  if (!session) return false;

  return Boolean(
    session.hostUserId &&
    session.joinCode &&
    session.createdAt
  );
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * Upsert a single stroke on a Fabric canvas, deduplicating by strokeClientId.
 * Removes ALL existing objects with the same clientId before adding the new one.
 * Used by both the BroadcastChannel and Convex onStrokeAdded paths so that a
 * stroke delivered twice (once via BC, once via Convex subscription) never
 * renders as a duplicate.
 */
function upsertStrokeOnCanvas(fc, obj) {
  const cid = obj.data?.strokeClientId;
  if (cid) {
    fc.getObjects()
      .filter(o => o.data?.strokeClientId === cid)
      .forEach(o => fc.remove(o));
  }
  obj.selectable = false;
  obj.evented = false;
  fc.add(obj);
}

export default function LiveClassPage() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAccessReady, role: authRole, userId: authUserId } = useAuth();
  const { theme } = useTheme();

  const classId = sessionId ?? null;

  // Convex connection status
  const [stdbStatus, setStdbStatus] = useState('connecting'); // 'connecting' | 'connected' | 'offline'

  // Role
  const [role, setRole] = useState(null); // 'teacher' | 'student'
  const isTeacher = role === 'teacher';
  // H-6: priority-aware role setter prevents race between offline/cache/Convex effects
  // Priorities: nav/cache (1) < convex/join (2). Higher priority always overrides.
  // Equal priority only sets if role is still null (first-writer-wins).
  const roleSourceRef = useRef('none'); // 'none' | 'nav' | 'cache' | 'convex' | 'join'
  const ROLE_PRIORITIES = useRef({ none: 0, nav: 1, cache: 1, convex: 2, join: 2 }).current;
  const setRoleWithPriority = useCallback((newRole, source) => {
    const cur = ROLE_PRIORITIES[roleSourceRef.current] ?? 0;
    const next = ROLE_PRIORITIES[source] ?? 0;
    if (next > cur) {
      roleSourceRef.current = source;
      setRole(newRole);
    } else if (next === cur) {
      // Equal priority: only set if role hasn't been set yet (first-writer-wins)
      setRole(prev => prev ?? newRole);
      if (!roleSourceRef.current || roleSourceRef.current === 'none') {
        roleSourceRef.current = source;
      }
    }
  }, [ROLE_PRIORITIES]);
  const [sessionData, setSessionData] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [participants, setParticipants] = useState([]);
  const [cursors, setCursors] = useState([]);
  const [handRaises, setHandRaises] = useState([]);
  const [timerState, setTimerState] = useState(null);
  const [backgroundType, setBackgroundType] = useState('white');
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const [themePalette, setThemePalette] = useState(() => ({
    ink: DEFAULT_CANVAS_INK,
    accent: DEFAULT_CANVAS_ACCENT,
  }));

  // Tool state
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState(DEFAULT_CANVAS_INK);
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [eraserMode, setEraserMode] = useState(DEFAULT_ERASER_MODE);
  const [highlighterMode, setHighlighterMode] = useState(DEFAULT_HIGHLIGHTER_MODE);
  const [textFont, setTextFont] = useState(() => ({
    ...DEFAULT_TEXT_FONT,
    fill: DEFAULT_CANVAS_INK,
  }));
  const [spotlightEnabled, setSpotlightEnabled] = useState(false);
  const [snapHint, setSnapHint] = useState(false); // shows "hold 2 s to snap" toast
  const snapHintTimerRef = useRef(null);
  const snapHoldTimerRef = useRef(null);

  // Laser tool state
  const [laserMode, setLaserMode] = useState('dot'); // 'dot' | 'trail'
  const [laserTrails, setLaserTrails] = useState([]); // Array of {id, points, identity, createdAt}
  const laserDrawingRef = useRef(false); // whether currently drawing a trail
  const currentLaserTrailRef = useRef([]); // current trail being drawn
  const activeDrawToolRef = useRef(tool);

  // UI panels
  const [showStudentGrid, setShowStudentGrid] = useState(false);
  const [showHandPanel, setShowHandPanel] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [showStudentNotes, setShowStudentNotes] = useState(false);
  const [endedMsg, setEndedMsg] = useState('');
  const [_linkCopied, setLinkCopied] = useState(false);  // reserved for share-link UX
  const [codeCopied, setCodeCopied] = useState(false);
  const copyTimersRef = useRef(new Set()); // M1: track copy-handler timers to clear on unmount

  // Join-request state (student side)
  const [joinRequestId, setJoinRequestId] = useState(null); // Convex _id string
  const [joinStatus, setJoinStatus] = useState(null); // 'pending' | 'accepted' | 'rejected'
  const [joinTempId, setJoinTempId] = useState(null);
  const [isStudentCompactLayout, setIsStudentCompactLayout] = useState(() => (
    typeof window !== 'undefined' ? window.innerWidth <= 900 : false
  ));
  const [isCompactToolbarPanelLayout, setIsCompactToolbarPanelLayout] = useState(() => (
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  ));
  const [studentMobileView, setStudentMobileView] = useState('board');

  // Admission panel (teacher side)
  const [joinRequests, setJoinRequests] = useState([]);
  const [autoAccept, setAutoAccept] = useState(false);

  // Poll state
  const [polls, setPolls] = useState([]);
  const [showPollPanel, setShowPollPanel] = useState(false);
  const [myPollAnswers, setMyPollAnswers] = useState({}); // { pollId: true }
  const myPollAnswersRef = useRef({}); // C-1: ref mirror for sync callbacks
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

  // ── Multi-page tabs (M-14: restored from sessionStorage on mount) ─────────
  const [tabs, setTabs] = useState(() => {
    if (!classId) return [{ id: 1, label: 'Page 1' }];
    try {
      const stored = sessionStorage.getItem(`lc_tabs_${classId}`);
      if (stored) { const p = JSON.parse(stored); if (Array.isArray(p.tabs) && p.tabs.length) return p.tabs; }
    } catch { /* ignore */ }
    return [{ id: 1, label: 'Page 1' }];
  });
  const [activeTabId, setActiveTabId] = useState(() => {
    if (!classId) return 1;
    try {
      const stored = sessionStorage.getItem(`lc_tabs_${classId}`);
      if (stored) { const p = JSON.parse(stored); if (p.activeTabId) return p.activeTabId; }
    } catch { /* ignore */ }
    return 1;
  });
  const tabSnapshotsRef = useRef((() => {
    if (!classId) return { 1: null };
    try {
      const stored = sessionStorage.getItem(`lc_tabs_${classId}`);
      if (stored) { const p = JSON.parse(stored); if (p.snapshots && typeof p.snapshots === 'object') return p.snapshots; }
    } catch { /* ignore */ }
    return { 1: null };
  })());
  const [renamingTabId, setRenamingTabId] = useState(null);
  const previousThemePaletteRef = useRef({
    ink: DEFAULT_CANVAS_INK,
    accent: DEFAULT_CANVAS_ACCENT,
  });

  useEffect(() => {
    const nextPalette = {
      ink: readThemeColor('--color-text', DEFAULT_CANVAS_INK),
      accent: readThemeColor('--color-primary', DEFAULT_CANVAS_ACCENT),
    };
    const previousPalette = previousThemePaletteRef.current;

    setThemePalette(nextPalette);
    setColor((current) => (
      !current || current === previousPalette.ink ? nextPalette.ink : current
    ));
    setTextFont((current) => ({
      ...current,
      fill: !current?.fill || current.fill === previousPalette.ink
        ? nextPalette.ink
        : current.fill,
    }));

    previousThemePaletteRef.current = nextPalette;
  }, [theme]);
  useEffect(() => {
    activeDrawToolRef.current = tool;
  }, [tool]);
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const updateLayoutMode = () => {
      setIsStudentCompactLayout(window.innerWidth <= 900);
      setIsCompactToolbarPanelLayout(window.innerWidth <= 768);
    };

    updateLayoutMode();
    window.addEventListener('resize', updateLayoutMode);
    return () => window.removeEventListener('resize', updateLayoutMode);
  }, []);
  useEffect(() => {
    if (isTeacher) {
      setShowStudentNotes(false);
      return;
    }
    if (!isStudentCompactLayout) {
      setStudentMobileView('board');
    }
  }, [isTeacher, isStudentCompactLayout]);

  const closeTeacherToolbarPanels = useCallback(() => {
    setShowPollPanel(false);
    setPollAnchor(null);
    setShowStencilPanel(false);
    setStencilAnchor(null);
    setShowTemplatePicker(false);
    setTemplateAnchor(null);
    setShowGraphWidget(false);
    setGraphAnchor(null);
  }, []);
  const [renameValue, setRenameValue] = useState('');
  const renameInputRef = useRef(null);

  function saveCurrentTabSnapshot() {
    const fc = fabricRef.current;
    if (!fc) return;
    tabSnapshotsRef.current[activeTabId] = JSON.stringify(fc.toJSON(['data']));
  }

  // M-14: auto-persist tab metadata + snapshots whenever tabs or activeTab change
  useEffect(() => {
    if (!classId) return;
    try {
      const payload = { tabs, activeTabId, snapshots: tabSnapshotsRef.current };
      sessionStorage.setItem(`lc_tabs_${classId}`, JSON.stringify(payload));
    } catch { /* quota exceeded — non-critical */ }
  }, [tabs, activeTabId, classId]);

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

  // Incremental stroke broadcasts for instant same-browser sync
  const broadcastStrokeAdded = useCallback((fabricObjJson) => {
    broadcastRef.current?.postMessage({ type: 'stroke-added', data: fabricObjJson });
  }, []);

  const broadcastStrokeDeleted = useCallback((strokeClientId) => {
    broadcastRef.current?.postMessage({ type: 'stroke-deleted', data: { strokeClientId } });
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
      // C-2: Cap history at 50 entries to prevent memory exhaustion
      const MAX_HISTORY = 50;
      if (historyStack.current.length > MAX_HISTORY) {
        const excess = historyStack.current.length - MAX_HISTORY;
        historyStack.current = historyStack.current.slice(excess);
        historyIndex.current = Math.max(0, historyIndex.current - excess);
      } else {
        historyIndex.current = historyStack.current.length - 1;
      }
      setCanUndo(historyIndex.current > 0);
      setCanRedo(false);
      // Leading + trailing throttle: fire immediately if the last broadcast was
      // >=3 s ago (leading edge), and always schedule a trailing flush so any
      // change made inside the throttle window is still delivered. This prevents
      // the previous leading-only pattern from silently dropping the last edit
      // in a burst (the window that caused the "full reconciliation fallback is
      // not actually guaranteed" bug).
      const now = Date.now();
      const timeSinceLast = now - lastFullBroadcastRef.current;
      if (timeSinceLast >= 3000) {
        // Leading edge — fire immediately and cancel any pending trailing call
        lastFullBroadcastRef.current = now;
        clearTimeout(fullBroadcastTrailingRef.current);
        fullBroadcastTrailingRef.current = null;
        broadcastCanvasState();
      } else {
        // Inside throttle window — (re)schedule trailing flush after the window expires
        clearTimeout(fullBroadcastTrailingRef.current);
        fullBroadcastTrailingRef.current = setTimeout(() => {
          fullBroadcastTrailingRef.current = null;
          if (unmountedRef.current) return; // M2: skip if component already unmounted
          lastFullBroadcastRef.current = Date.now();
          broadcastCanvasState();
        }, 3000 - timeSinceLast);
      }
    });
  }, [broadcastCanvasState]);

  // Present mode state
  const [presentState, setPresentState] = useState(null); // { presenterIdentity, presenterName, status }

  // eslint-disable-next-line no-unused-vars -- reserved for share-link UX
  const handleCopyLink = useCallback(() => {
    const url = new URL(`live/${sessionId}`, window.location.origin + import.meta.env.BASE_URL).href;
    navigator.clipboard.writeText(url).then(() => {
      setLinkCopied(true);
      const t = setTimeout(() => { copyTimersRef.current.delete(t); setLinkCopied(false); }, 2000);
      copyTimersRef.current.add(t);
    }).catch(err => console.warn('[LiveClass] clipboard copy failed:', err));
  }, [sessionId]);

  const handleCopyCode = useCallback(() => {
    const code = sessionData?.joinCode;
    if (!code) return;
    navigator.clipboard.writeText(code).then(() => {
      setCodeCopied(true);
      const t = setTimeout(() => { copyTimersRef.current.delete(t); setCodeCopied(false); }, 2000);
      copyTimersRef.current.add(t);
    }).catch(err => console.warn('[LiveClass] clipboard copy failed:', err));
  }, [sessionData]);

  // Canvas
  const canvasWrapRef = useRef(null);
  const teacherBoardWrapRef = useRef(null); // student's teacher-board container
  const teacherCanvasRef = useRef(null); // teacher's fabric canvas (full edit)
  // H-5: ref callback that triggers canvas init when DOM element mounts
  const [canvasElReady, setCanvasElReady] = useState(false);
  const teacherCanvasRefCallback = useCallback((el) => {
    teacherCanvasRef.current = el;
    setCanvasElReady(Boolean(el));
  }, []);
  const myCanvasRef = useRef(null);       // student's own canvas
  const [studentCanvasElReady, setStudentCanvasElReady] = useState(false);
  const studentCanvasRefCallback = useCallback((el) => {
    myCanvasRef.current = el;
    setStudentCanvasElReady(Boolean(el));
  }, []);
  const fabricRef = useRef(null);
  const myFabricRef = useRef(null);
  const syncRef = useRef(null);
  const broadcastRef = useRef(null);
  const lastFullBroadcastRef = useRef(0); // throttle full canvas-state broadcasts
  const fullBroadcastTrailingRef = useRef(null); // trailing timer for full canvas-state broadcasts
  const unmountedRef = useRef(false); // M2: guard flag to prevent timer callbacks after unmount

  const [canvasSize, setCanvasSize] = useState({ w: 1, h: 1 });

  // ── Ruler tool state ──────────────────────────────────────────────────────
  const rulerStateRef = useRef({ x: 200, y: 200, angle: 0 });
  const shapeDrawRef = useRef(createEmptyShapeDrawState());
  const handleRulerStateChange = useCallback(({ x, y, angle }) => {
    rulerStateRef.current = { x, y, angle };
  }, []);

  // M1: Clear copy-handler timers on unmount
  useEffect(() => {
    const timers = copyTimersRef.current;
    return () => {
      timers.forEach((t) => clearTimeout(t));
      timers.clear();
    };
  }, []);

  useEffect(() => {
    if (!classId) {
      setEndedMsg('Live class link is invalid.');
    }
  }, [classId]);

  // ── Offline/demo init: use navigation state session if Convex is unavailable ──
  useEffect(() => {
    const navSession = location.state?.session;
    if (!navSession) return;

    setSessionData((prev) => prev ?? {
      ...navSession,
      classId: navSession.classId ?? classId,
      hostUserId: navSession.hostUserId ?? navSession.hostIdentity ?? null,
    });
    setBackgroundType(navSession.backgroundType ?? 'white');

    if (isAccessReady) {
      setRoleWithPriority(authRole === 'teacher' ? 'teacher' : 'student', 'nav');
      setStdbStatus((prev) => (prev === 'connected' ? prev : 'offline'));
    }
  }, [authRole, classId, isAccessReady, location.state, setRoleWithPriority]);

  // ── Refresh recovery for already-authorized sessions (local or cached) ─────
  useEffect(() => {
    if (!classId || !isAccessReady || location.state?.session) return;

    let cancelled = false;

    void getLiveClassById(classId).then((session) => {
      if (cancelled || !hasFullLiveClassAccess(session)) return;

      setSessionData((prev) => prev ?? session);
      setBackgroundType(session.backgroundType ?? 'white');

      const isHost = Boolean(authUserId && session.hostUserId === authUserId);
      setRoleWithPriority(isHost && authRole === 'teacher' ? 'teacher' : 'student', 'cache');
      setStdbStatus((prev) => (prev === 'connected' ? prev : 'offline'));
    }).catch(() => {
      // Keep the dedicated online bootstrap path below as the source of truth.
    });

    return () => {
      cancelled = true;
    };
  }, [authRole, authUserId, classId, isAccessReady, location.state, setRoleWithPriority]);

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
          setRoleWithPriority('student', 'join');
        });
      }
    });

    // Initial check in case the request was already accepted before the subscription attached.
    void getLiveClassById(classId).then((session) => {
      if (!hasFullLiveClassAccess(session)) return;
      setJoinStatus('accepted');
      setSessionData(session);
      setBackgroundType(session.backgroundType ?? 'white');
      setRoleWithPriority('student', 'join');
    }).catch(() => {
      // Wait for subscription updates when the session is not yet available.
    });

    setJoinStatus('pending');

    return () => unsub?.();
  }, [classId, location.state, setRoleWithPriority]);

  // ── Init Convex & detect role (online mode) ──────────────────────────
  useEffect(() => {
    if (!classId) return;

    const unsubError = onConvexError(() => {
      // Only update to offline if we haven't already connected
      setStdbStatus(prev => prev === 'connected' ? 'connected' : 'offline');
    });

    const unsubDisconnect = onConvexDisconnect(() => {
      // WebSocket dropped — mark as offline so UI updates
      setStdbStatus('offline');
    });

    let cancelled = false;

    const unsubReady = onConvexReady(() => {
      if (cancelled) return;
      void (async () => {
        setStdbStatus('connected');
        const userId = getCurrentUserId();
        if (!userId || cancelled) return;

        const session = await getLiveClassById(classId);
        if (cancelled) return;

        if (!session) {
          if (!location.state?.session && !joinRequestId) {
            setEndedMsg('Class not found or already ended.');
          }
          return;
        }

        setSessionData(session);
        setBackgroundType(session.backgroundType ?? 'white');

        const isHost = session.hostUserId === userId;
        let hasTeacherRole = authRole === 'teacher';
        try {
          hasTeacherRole = hasTeacherRole || await convexIsTeacher();
        } catch {
          // Fall back to auth state when Convex role lookup is unavailable.
        }
        if (cancelled) return;

        if (isHost && hasTeacherRole) {
          setRoleWithPriority('teacher', 'convex');
          return;
        }

        if (hasTeacherRole && !joinRequestId) {
          setRoleWithPriority('teacher', 'convex');
          return;
        }

        if (hasFullLiveClassAccess(session)) {
          setRoleWithPriority('student', 'convex');
        }
      })();
    });

    return () => {
      cancelled = true;
      unsubReady();
      unsubError();
      unsubDisconnect();
    };
  }, [authRole, classId, joinRequestId, location.state, setRoleWithPriority]);

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
    if (!role || !classId || !isCanvasReady) return;
    console.log('[LiveClass] sync effect running', { role, classId, isCanvasReady, stdbStatus });

    let cancelled = false;

    const hydrateExistingStrokes = (existingStrokes = []) => {
      const targetFabric = fabricRef.current;
      if (!targetFabric || cancelled) return;

      existingStrokes.forEach((stroke) => {
        try {
          const parsed = JSON.parse(stroke.fabricObjectJson);
          fabricUtil.enlivenObjects([parsed]).then((objs) => {
            if (cancelled || !fabricRef.current) return;
            objs.forEach((obj) => {
              obj.selectable = false;
              obj.evented = false;
              targetFabric.add(obj);
            });
            targetFabric.requestRenderAll();
          });
        } catch {
          // Ignore malformed remote strokes.
        }
      });
    };

    const sync = createLiveClassSync({
      onStrokeAdded: (strokeId, json) => {
        const targetFabric = fabricRef.current;
        if (!targetFabric) return;
        try {
          const parsed = JSON.parse(json);
          fabricUtil.enlivenObjects([parsed]).then((objs) => {
            skipHistory.current = true;
            // Use upsert so that a stroke already rendered via BroadcastChannel
            // is not duplicated when the same data arrives through Convex.
            objs.forEach(obj => upsertStrokeOnCanvas(targetFabric, obj));
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
        // Remove ALL matches — stale duplicates can accumulate if prior dedup
        // failed; deleting only the first match would leave ghost objects.
        const toRemove = targetFabric.getObjects().filter(o => o.data?.strokeClientId === clientId);
        if (toRemove.length) {
          toRemove.forEach(o => targetFabric.remove(o));
          targetFabric.requestRenderAll();
        }
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
        // Show result to student (C-1: use ref to avoid stale closure)
        const myAnswer = myPollAnswersRef.current[poll.id];
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
      Promise.resolve(sync.watchClass(classId))
        .then((existingStrokes) => {
          hydrateExistingStrokes(existingStrokes);
        })
        .catch(() => {
          // BroadcastChannel/local fallback will keep the page functional.
        });
    } else {
      sync.joinClass(classId)
        .then((existingStrokes) => {
          hydrateExistingStrokes(existingStrokes);
        })
        .catch(() => {
          // Offline — BroadcastChannel sync will handle it.
        });
    }

    return () => {
      cancelled = true;
      sync.leaveClass();
      syncRef.current = null;
    };
  // stdbStatus is included so the sync re-runs once Convex connects — this
  // handles the race where offline-init sets role before client is available,
  // causing watchClass/joinClass to no-op on a null client.
  }, [role, classId, isCanvasReady, stdbStatus]);

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
        if (type === 'student-join' || type === 'request-canvas-state') {
          // H-12: send current canvas state to late-joiners
          const fc = fabricRef.current;
          if (fc) {
            bc.postMessage({ type: 'canvas-state', data: fc.toJSON(['data']) });
          }
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
          }
        } else if (type === 'student-leave') {
          setParticipants(prev => prev.filter(p => p._bcId !== data.bcId));
        }
      };
    }

    if (role === 'student') {
      // Announce presence to teacher tab
      const bcId = 'bc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
      bc.postMessage({ type: 'student-join', data: { bcId, name: studentName || 'Student', joinedAt: Date.now() } });
      // H-12: also request current canvas state in case student-join was missed
      bc.postMessage({ type: 'request-canvas-state' });

      bc.onmessage = (e) => {
        const { type, data } = e.data;
        const fc = fabricRef.current;
        if (!fc) return;

        if (type === 'stroke-added') {
          // Incremental: upsert a single stroke object (dedup by strokeClientId)
          try {
            const parsed = typeof data === 'string' ? JSON.parse(data) : data;
            fabricUtil.enlivenObjects([parsed]).then((objs) => {
              objs.forEach(obj => upsertStrokeOnCanvas(fc, obj));
              fc.requestRenderAll();
            });
          } catch { /* ignore malformed */ }
        } else if (type === 'stroke-deleted') {
          // Incremental: remove ALL matching strokes by clientId
          const cid = data?.strokeClientId;
          if (cid) {
            const toRemove = fc.getObjects().filter(o => o.data?.strokeClientId === cid);
            if (toRemove.length) {
              toRemove.forEach(o => fc.remove(o));
              fc.requestRenderAll();
            }
          }
        } else if (type === 'canvas-state') {
          // Full reconciliation fallback
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
        // M3: close module-level channel (parity with teacher path)
        closeSyncChannel();
        // M3: set unmounted guard so trailing timer callbacks become no-ops
        unmountedRef.current = true;
        // M3: clear any pending trailing canvas-state broadcast timer
        if (fullBroadcastTrailingRef.current) {
          clearTimeout(fullBroadcastTrailingRef.current);
          fullBroadcastTrailingRef.current = null;
        }
      };
    }

    return () => {
      bc.close();
      broadcastRef.current = null;
      // Close the module-level BroadcastChannel from localLiveClassStore so it
      // doesn't leak an event listener after the LiveClass page unmounts.
      closeSyncChannel();
      // M2: set unmounted guard so any trailing timer callbacks become no-ops
      unmountedRef.current = true;
      // Clear any pending trailing canvas-state broadcast timer
      if (fullBroadcastTrailingRef.current) {
        clearTimeout(fullBroadcastTrailingRef.current);
        fullBroadcastTrailingRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, classId]);

  // ── Init Fabric canvases (H-5: depends on canvasElReady to avoid race) ──
  useEffect(() => {
    if (!role || !canvasElReady || !teacherCanvasRef.current) return;

    const isTeacherRole = role === 'teacher';

    const fc = new FabricCanvas(teacherCanvasRef.current, {
      isDrawingMode: isTeacherRole,
      backgroundColor: 'transparent',
      selection: false,
    });
    fabricRef.current = fc;
    setIsCanvasReady(true);

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
      applyTool(fc, tool, color, strokeWidth, highlighterMode);

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
        const drawingToolId = activeDrawToolRef.current === 'highlight' ? 'highlight' : 'pen';
        if (!path.data) path.data = {};
        path.data.strokeClientId = clientId;
        path.data.drawingToolId = drawingToolId;
        const json = path.toJSON(['data']);
        syncRef.current?.sendStroke(classId, JSON.stringify(json), clientId);
        broadcastStrokeAdded(json);
      });
    }

    return () => {
      setIsCanvasReady(false);
      fabricRef.current = null;
      fc.dispose();
      ro.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, canvasElReady]);
  useEffect(() => {
    if (role !== 'student' || !studentCanvasElReady || !myCanvasRef.current) return;
    const fc = new FabricCanvas(myCanvasRef.current, {
      isDrawingMode: true,
      backgroundColor: 'transparent',
      selection: false,
    });
    myFabricRef.current = fc;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        fc.setDimensions({ width, height });
        fc.requestRenderAll();
      }
    });

    if (canvasWrapRef.current) {
      ro.observe(canvasWrapRef.current);
    }

    applyTool(fc, tool, color, strokeWidth, highlighterMode);
    return () => {
      ro.disconnect();
      myFabricRef.current = null;
      fc.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, studentCanvasElReady]);
  useEffect(() => {
    const studentMobileMode = !isTeacher && isStudentCompactLayout;
    if (!studentMobileMode || studentMobileView !== 'canvas') return;
    const fc = myFabricRef.current;
    const wrap = canvasWrapRef.current;
    if (!fc || !wrap) return;

    const rect = wrap.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      fc.setDimensions({ width: rect.width, height: rect.height });
      fc.requestRenderAll();
    }
  }, [isTeacher, isStudentCompactLayout, studentMobileView]);

  // Re-apply tool whenever selection changes
  useEffect(() => {
    if (role === 'teacher') {
      applyTool(fabricRef.current, tool, color, strokeWidth, highlighterMode);
    }
    applyTool(myFabricRef.current, tool, color, strokeWidth, highlighterMode);
    if (tool === 'spotlight') setSpotlightEnabled(true);
    else setSpotlightEnabled(false);
  }, [tool, color, strokeWidth, role, highlighterMode]);

  // ── Close all dropdown panels on outside click ────────────────────────────
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.closest('.lc-dropdown-panel') || e.target.closest('.lc-dropdown-trigger')) return;
      setShowHandPanel(false); setHandsAnchor(null);
      setShowStudentGrid(false); setStudentsAnchor(null);
      closeTeacherToolbarPanels();
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [closeTeacherToolbarPanels]);

  // ── Laser tool: dot mode (cursor following) and trail mode (freehand drawing) ──
  useEffect(() => {
    const fc = fabricRef.current;
    if (!fc || tool !== 'laser') return;
    const wrap = canvasWrapRef.current;
    if (!wrap) return;
    const myIdentityHex = getCurrentUserId() ?? 'local';
    const previousTouchAction = wrap.style.touchAction;
    let activePointerId = null;
    let cursorRafId = null;
    let trailRafId = null;

    wrap.style.touchAction = 'none';

    const removeLocalCursor = () => {
      setCursors((prev) => prev.filter((cursor) => cursor.identity !== myIdentityHex));
    };

    const getCoords = (event) => {
      const rect = wrap.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
    };

    const queueCursorUpdate = (coords) => {
      if (cursorRafId) return;
      cursorRafId = requestAnimationFrame(() => {
        cursorRafId = null;
        setCursors((prev) => {
          const idx = prev.findIndex((cursor) => cursor.identity === myIdentityHex);
          const nextCursor = { x: coords.x, y: coords.y, tool, mode: laserMode, identity: myIdentityHex };
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = nextCursor;
            return next;
          }
          return [...prev, nextCursor];
        });
      });
    };

    const broadcastCursorPoint = (coords) => {
      syncRef.current?.broadcastCursor(classId, coords.x, coords.y, tool, laserMode);
    };

    const canUsePointer = (event) => {
      if (event.pointerType === 'mouse') return true;
      if (event.pointerType === 'pen') return true;
      return event.pointerId === activePointerId;
    };

    // Cleanup old trails periodically
    const cleanupTrails = () => {
      const now = Date.now();
      setLaserTrails(prev => prev.filter(t => now - t.createdAt < 3000));
    };
    const cleanupInterval = setInterval(cleanupTrails, 500);

    if (laserMode === 'dot') {
      // Dot mode: mouse hover or touch/pen drag moves the laser point.
      const onPointerDown = (event) => {
        if (event.pointerType !== 'mouse') {
          activePointerId = event.pointerId;
          wrap.setPointerCapture?.(event.pointerId);
          event.preventDefault();
        }

        const coords = getCoords(event);
        broadcastCursorPoint(coords);
        queueCursorUpdate(coords);
      };

      const onPointerMove = (event) => {
        if (!canUsePointer(event)) return;
        if (event.pointerType !== 'mouse' && activePointerId === null) return;
        const coords = getCoords(event);
        if (event.pointerType !== 'mouse') event.preventDefault();
        broadcastCursorPoint(coords);
        queueCursorUpdate(coords);
      };

      const onPointerEnd = (event) => {
        if (event.pointerType !== 'mouse' && event.pointerId !== activePointerId) return;
        if (event.pointerType !== 'mouse') {
          activePointerId = null;
          removeLocalCursor();
        }
      };

      const onMouseLeave = () => {
        removeLocalCursor();
      };

      wrap.addEventListener('pointerdown', onPointerDown);
      wrap.addEventListener('pointermove', onPointerMove);
      wrap.addEventListener('pointerup', onPointerEnd);
      wrap.addEventListener('pointercancel', onPointerEnd);
      wrap.addEventListener('mouseleave', onMouseLeave);
      return () => {
        wrap.removeEventListener('pointerdown', onPointerDown);
        wrap.removeEventListener('pointermove', onPointerMove);
        wrap.removeEventListener('pointerup', onPointerEnd);
        wrap.removeEventListener('pointercancel', onPointerEnd);
        wrap.removeEventListener('mouseleave', onMouseLeave);
        if (cursorRafId) cancelAnimationFrame(cursorRafId);
        activePointerId = null;
        removeLocalCursor();
        wrap.style.touchAction = previousTouchAction;
        clearInterval(cleanupInterval);
      };
    } else {
      // Trail mode: draw freehand strokes that fade out (GoodNotes style).
      const onPointerDown = (event) => {
        activePointerId = event.pointerId;
        wrap.setPointerCapture?.(event.pointerId);
        event.preventDefault();
        laserDrawingRef.current = true;
        const coords = getCoords(event);
        currentLaserTrailRef.current = [coords];
        broadcastCursorPoint(coords);
      };

      const onPointerMove = (event) => {
        if (!canUsePointer(event)) return;
        if (!laserDrawingRef.current) return;
        const coords = getCoords(event);
        event.preventDefault();
        currentLaserTrailRef.current.push(coords);

        // Broadcast current trail point
        broadcastCursorPoint(coords);

        // M-11: throttle local trail state updates via rAF
        if (trailRafId) return;
        trailRafId = requestAnimationFrame(() => {
          trailRafId = null;
          // Update local trails in real-time
          setLaserTrails(prev => {
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
        });
      };

      const finalizeTrail = () => {
        if (!laserDrawingRef.current) return;
        laserDrawingRef.current = false;
        activePointerId = null;

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
        removeLocalCursor();
      };

      const onPointerEnd = (event) => {
        if (event.pointerId !== activePointerId) return;
        finalizeTrail();
      };

      wrap.addEventListener('pointerdown', onPointerDown);
      wrap.addEventListener('pointermove', onPointerMove);
      wrap.addEventListener('pointerup', onPointerEnd);
      wrap.addEventListener('pointercancel', onPointerEnd);
      wrap.addEventListener('mouseleave', finalizeTrail);

      return () => {
        wrap.removeEventListener('pointerdown', onPointerDown);
        wrap.removeEventListener('pointermove', onPointerMove);
        wrap.removeEventListener('pointerup', onPointerEnd);
        wrap.removeEventListener('pointercancel', onPointerEnd);
        wrap.removeEventListener('mouseleave', finalizeTrail);
        if (trailRafId) cancelAnimationFrame(trailRafId);
        activePointerId = null;
        currentLaserTrailRef.current = [];
        removeLocalCursor();
        wrap.style.touchAction = previousTouchAction;
        clearInterval(cleanupInterval);
      };
    }
  }, [tool, laserMode, classId]);

  function applyTool(fc, toolId, col, sw, highlighterModeId = DEFAULT_HIGHLIGHTER_MODE) {
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
        fc.isDrawingMode = highlighterModeId !== 'straight-line';
        fc.selection = false;
        if (highlighterModeId !== 'straight-line') {
          fc.freeDrawingBrush = new PencilBrush(fc);
          fc.freeDrawingBrush.color = col + '66'; // 40% opacity
          fc.freeDrawingBrush.width = sw * 4;
        }
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
      case 'rect':
      case 'circle':
      case 'triangle':
      case 'line':
      case 'arrow':
      case 'diamond':
      case 'star':
      case 'hexagon':
        fc.isDrawingMode = false;
        fc.selection = false;
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
    const fc = role === 'teacher' ? fabricRef.current : myFabricRef.current;
    if (!fc) return;
    const shouldSync = role === 'teacher';
    const mutateProvisionalShape = (fn) => {
      if (shouldSync) skipHistory.current = true;
      try {
        fn();
      } finally {
        if (shouldSync) skipHistory.current = false;
      }
    };
    const resetShapeDraw = () => {
      shapeDrawRef.current = createEmptyShapeDrawState();
    };

    if (tool === 'eraser') {
      if (!shouldSync) return;
      const eraseState = {
        isErasing: false,
        removedAny: false,
        removedIds: new Set(),
      };

      const removeObject = (obj) => {
        if (!obj) return false;
        if (eraserMode === 'highlighter' && !isHighlighterStrokeObject(obj)) return false;

        const cid = obj.data?.strokeClientId;
        if (cid && eraseState.removedIds.has(cid)) return false;

        const linkedLabel = isEditableShapeObject(obj) ? getLinkedShapeLabel(fc, obj) : null;
        const linkedCid = linkedLabel?.data?.strokeClientId;

        if (cid) eraseState.removedIds.add(cid);
        if (linkedCid) eraseState.removedIds.add(linkedCid);

        fc.remove(obj);
        if (linkedLabel) fc.remove(linkedLabel);
        fc.requestRenderAll();

        if (cid) {
          syncRef.current?.sendStrokeDelete(cid);
          broadcastStrokeDeleted(cid);
        }
        if (linkedCid) {
          syncRef.current?.sendStrokeDelete(linkedCid);
          broadcastStrokeDeleted(linkedCid);
        }

        eraseState.removedAny = true;
        return true;
      };

      const resolveTarget = (event) => {
        if (eraserMode === 'precision') {
          return getCanvasTarget(fc, event);
        }
        return getCanvasTargetFromPointer(fc, event);
      };

      const flushHistory = () => {
        if (!eraseState.removedAny) return;
        saveHistory();
        eraseState.removedAny = false;
        eraseState.removedIds.clear();
      };

      const onDown = (e) => {
        if (eraserMode === 'precision') {
          removeObject(resolveTarget(e));
          flushHistory();
          return;
        }

        eraseState.isErasing = true;
        removeObject(resolveTarget(e));
      };

      const onMove = (e) => {
        if (!eraseState.isErasing) return;
        removeObject(resolveTarget(e));
      };

      const onUp = () => {
        if (!eraseState.isErasing && !eraseState.removedAny) return;
        eraseState.isErasing = false;
        flushHistory();
      };

      fc.on('mouse:down', onDown);
      fc.on('mouse:move', onMove);
      fc.on('mouse:up', onUp);
      return () => {
        eraseState.isErasing = false;
        eraseState.removedIds.clear();
        fc.off('mouse:down', onDown);
        fc.off('mouse:move', onMove);
        fc.off('mouse:up', onUp);
      };
    }

    if (tool === 'pen' || (tool === 'highlight' && highlighterMode !== 'straight-line')) {
      if (!shouldSync) return;
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
            snapped.data.drawingToolId = p.data?.drawingToolId ?? (activeDrawToolRef.current === 'highlight' ? 'highlight' : 'pen');
            fc.remove(p);
            fc.add(snapped);
            fc.requestRenderAll();
            const snappedJson = snapped.toJSON(['data']);
            // Snap replaces the original path object — route through upsert so
            // Convex updates the existing row instead of inserting a second one.
            syncRef.current?.sendStrokeUpsert(classId, JSON.stringify(snappedJson), cid);
            broadcastStrokeAdded(snappedJson);
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

    if (tool === 'highlight' && highlighterMode === 'straight-line') {
      resetShapeDraw();

      const onDown = (e) => {
        if (getCanvasTarget(fc, e)) return;
        const point = getCanvasPoint(fc, e.e);
        const line = createStraightHighlighterLine(point, point, color, strokeWidth);
        shapeDrawRef.current = {
          isDown: true,
          shape: line,
          startPt: point,
          lastPt: point,
          tool,
          canvas: fc,
        };
        mutateProvisionalShape(() => {
          fc.add(line);
        });
        fc.requestRenderAll();
      };

      const onMove = (e) => {
        const drawState = shapeDrawRef.current;
        if (!drawState.isDown || !drawState.shape || !drawState.startPt) return;
        const point = getCanvasPoint(fc, e.e);
        drawState.lastPt = point;
        drawState.shape.set({ x2: point.x, y2: point.y });
        fc.requestRenderAll();
      };

      const onUp = () => {
        const { shape, canvas, startPt, lastPt } = shapeDrawRef.current;
        if (!shape || canvas !== fc) return;
        resetShapeDraw();

        if (isShapeDragTooSmall('line', startPt, lastPt ?? startPt)) {
          mutateProvisionalShape(() => {
            fc.remove(shape);
          });
          fc.requestRenderAll();
          return;
        }

        if (!shape.data) shape.data = {};
        shape.data.drawingToolId = 'highlight';
        shape.set({ selectable: true, evented: true });
        shape.setCoords();

        if (!shouldSync) {
          fc.requestRenderAll();
          return;
        }

        const cid = 'stroke_' + Date.now() + '_' + Math.random().toString(36).slice(2);
        shape.data.strokeClientId = cid;
        const lineJson = shape.toJSON(['data']);
        syncRef.current?.sendStroke(classId, JSON.stringify(lineJson), cid);
        broadcastStrokeAdded(lineJson);
        saveHistory();
        fc.requestRenderAll();
      };

      fc.on('mouse:down', onDown);
      fc.on('mouse:move', onMove);
      fc.on('mouse:up', onUp);
      return () => {
        const { isDown, shape, canvas } = shapeDrawRef.current;
        if (isDown && shape && canvas === fc) {
          mutateProvisionalShape(() => {
            fc.remove(shape);
          });
          resetShapeDraw();
          fc.requestRenderAll();
        }
        fc.off('mouse:down', onDown);
        fc.off('mouse:move', onMove);
        fc.off('mouse:up', onUp);
      };
    }

    if (SHAPE_TOOLS.includes(tool)) {
      resetShapeDraw();

      const onDown = (e) => {
        if (getCanvasTarget(fc, e)) return; // don't start on existing object
        const p = getCanvasPoint(fc, e.e);
        const shapeObj = createShapeObject(tool, p, color, strokeWidth);
        if (!shapeObj) return;
        shapeDrawRef.current = {
          isDown: true,
          shape: shapeObj,
          startPt: { x: p.x, y: p.y },
          lastPt: { x: p.x, y: p.y },
          tool,
          canvas: fc,
        };
        mutateProvisionalShape(() => {
          fc.add(shapeObj);
        });
        fc.requestRenderAll();
      };

      const onMove = (e) => {
        const drawState = shapeDrawRef.current;
        if (!drawState.isDown || !drawState.shape || !drawState.startPt) return;
        const p = getCanvasPoint(fc, e.e);
        const { shape, startPt, tool: activeTool } = drawState;
        drawState.lastPt = { x: p.x, y: p.y };
        updateShapeFromDrag(shape, activeTool, startPt, drawState.lastPt, color, strokeWidth);
        fc.requestRenderAll();
      };

      const onUp = () => {
        const { shape, tool: activeTool, canvas, startPt, lastPt } = shapeDrawRef.current;
        if (!shape || canvas !== fc) return;
        resetShapeDraw();

        if (isShapeDragTooSmall(activeTool, startPt, lastPt ?? startPt)) {
          mutateProvisionalShape(() => {
            fc.remove(shape);
          });
          fc.requestRenderAll();
          return;
        }

        shape.set({ selectable: true, evented: true });
        shape.setCoords();

        if (!shouldSync) {
          fc.requestRenderAll();
          return;
        }

        const cid = 'stroke_' + Date.now() + '_' + Math.random().toString(36).slice(2);
        if (!shape.data) shape.data = {};
        shape.data.strokeClientId = cid;
  shape.data.shapeToolId = activeTool;
        const shapeJson = shape.toJSON(['data']);
        syncRef.current?.sendStroke(classId, JSON.stringify(shapeJson), cid);
        broadcastStrokeAdded(shapeJson);
        saveHistory();
        fc.requestRenderAll();
      };

      fc.on('mouse:down', onDown);
      fc.on('mouse:move', onMove);
      fc.on('mouse:up',   onUp);
      return () => {
        const { isDown, shape, canvas } = shapeDrawRef.current;
        if (isDown && shape && canvas === fc) {
          mutateProvisionalShape(() => {
            fc.remove(shape);
          });
          resetShapeDraw();
          fc.requestRenderAll();
        }
        fc.off('mouse:down', onDown);
        fc.off('mouse:move', onMove);
        fc.off('mouse:up',   onUp);
      };
    }

    // Text tool: click to create editable text
    if (tool === 'text') {
      if (!shouldSync) return;
      const onDown = (e) => {
        if (e.target) return; // Don't create on existing object
        const p = getCanvasPoint(fc, e.e);

        // Use IText which is specifically designed for interactive text editing
        const text = new FabricIText('Type here...', {
          left: p.x,
          top: p.y,
          fontFamily: textFont?.fontFamily || DEFAULT_TEXT_FONT.fontFamily,
          fontSize: textFont?.fontSize || 24,
          fontWeight: textFont?.fontWeight || 'normal',
          textDecoration: textFont?.textDecoration || '',
          fontStyle: textFont?.fontStyle || 'normal',
          textAlign: textFont?.textAlign || 'left',
          fill: textFont?.fill || color || themePalette.ink,
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
          const textJson = text.toJSON(['data']);
          syncRef.current?.sendStrokeUpsert(classId, JSON.stringify(textJson), cid);
          broadcastStrokeAdded(textJson);
        };

        // H-4: Debounce text sync to prevent mutation flooding
        let textDebounceTimer = null;
        const onTextChange = () => {
          clearTimeout(textDebounceTimer);
          textDebounceTimer = setTimeout(sendText, 300);
        };

        const onTextExit = () => {
          clearTimeout(textDebounceTimer);
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
  }, [tool, color, strokeWidth, role, textFont, eraserMode, highlighterMode, classId, themePalette, broadcastStrokeAdded, broadcastStrokeDeleted, saveHistory]);

  // ── Flowchart node placement & connector tool ─────────────────────────────
  useEffect(() => {
    const fc = fabricRef.current;
    if (!fc || role !== 'teacher') return;

    // Node placement: click canvas to drop a node
    if (['fc-process', 'fc-decision', 'fc-terminal'].includes(tool)) {
      const onDown = (e) => {
        if (e.target) return; // don't place on existing object
        const p = getCanvasPoint(fc, e.e);
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
        const nodeJson = node.toJSON(['data']);
        syncRef.current?.sendStroke(classId, JSON.stringify(nodeJson), cid);
        broadcastStrokeAdded(nodeJson);
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
          node.set({ borderColor: themePalette.accent, borderDashArray: [4, 4] });
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
            const lineJson = result.line.toJSON(['data']);
            syncRef.current?.sendStroke(classId, JSON.stringify(lineJson), result.line.data.strokeClientId);
            broadcastStrokeAdded(lineJson);
            // Bug fix 2: also sync the arrowhead so remote users see it
            const arrowCid = 'fc_arrow_' + Date.now() + '_' + Math.random().toString(36).slice(2);
            if (!result.arrow.data) result.arrow.data = {};
            result.arrow.data.strokeClientId = arrowCid;
            const arrowJson = result.arrow.toJSON(['data']);
            syncRef.current?.sendStroke(classId, JSON.stringify(arrowJson), arrowCid);
            broadcastStrokeAdded(arrowJson);
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
        const p = getCanvasPoint(fc, e.e);
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
        const p = getCanvasPoint(fc, e.e);
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
        const lineJson = line.toJSON(['data']);
        syncRef.current?.sendStroke(classId, JSON.stringify(lineJson), cid);
        broadcastStrokeAdded(lineJson);
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
  }, [tool, color, strokeWidth, role, classId, saveHistory, themePalette, broadcastStrokeAdded]);

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
    if (!isCanvasReady || !fc || role !== 'teacher') return;

    const onDblClick = (e) => {
      const target = getCanvasTarget(fc, e, { allowFindTarget: true });
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
        fontFamily: textObj.fontFamily || DEFAULT_TEXT_FONT.fontFamily,
        fill: textObj.fill || themePalette.ink,
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
        // Re-sync the node with updated label — always an update (node already exists)
        const updatedNodeJson = node.toJSON(['data']);
        syncRef.current?.sendStrokeUpsert(classId, JSON.stringify(updatedNodeJson), node.data.strokeClientId);
        broadcastStrokeAdded(updatedNodeJson);
        fc.requestRenderAll();
        // Save history after the label edit is complete
        saveHistory();
      };
      tempText.on('editing:exited', onExited);
    };

    fc.on('mouse:dblclick', onDblClick);
    return () => fc.off('mouse:dblclick', onDblClick);
  }, [role, classId, saveHistory, themePalette, broadcastStrokeAdded, isCanvasReady]);

  // ── Shapes: double-click to add or edit a centered label ──────────────────
  useEffect(() => {
    const fc = fabricRef.current;
    if (!isCanvasReady || !fc || role !== 'teacher') return;
    const upperCanvas = fc.upperCanvasEl;
    if (!upperCanvas) return;

    const onDblClick = (nativeEvent) => {
      const target = getCanvasTarget(fc, nativeEvent, { allowFindTarget: true });
      const shape = isEditableShapeObject(target) ? target : null;
      if (!shape) return;

      if (!shape.data) shape.data = {};
      if (!shape.data.strokeClientId) {
        shape.data.strokeClientId = 'shape_' + Date.now() + '_' + Math.random().toString(36).slice(2);
      }
      if (!shape.data.shapeToolId) {
        shape.data.shapeToolId = inferShapeToolId(shape) || 'shape';
      }

      const existingLabel = getLinkedShapeLabel(fc, shape);
      const tempText = new FabricIText(existingLabel?.text || '', {
        fontSize: existingLabel?.fontSize ?? textFont?.fontSize ?? 18,
        fontFamily: existingLabel?.fontFamily || textFont?.fontFamily || DEFAULT_TEXT_FONT.fontFamily,
        fill: existingLabel?.fill || DEFAULT_CANVAS_INK,
        fontWeight: existingLabel?.fontWeight || textFont?.fontWeight || 'normal',
        fontStyle: existingLabel?.fontStyle || textFont?.fontStyle || 'normal',
        textDecoration: existingLabel?.textDecoration || textFont?.textDecoration || '',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
        editable: true,
      });
      positionShapeLabel(shape, tempText);

      skipHistory.current = true;
      if (existingLabel) existingLabel.set('visible', false);
      fc.add(tempText);
      skipHistory.current = false;
      fc.setActiveObject(tempText);
      tempText.enterEditing();
      tempText.selectAll();
      fc.requestRenderAll();

      const onExited = () => {
        tempText.off('editing:exited', onExited);
        const nextText = tempText.text?.trim() || '';

        skipHistory.current = true;
        fc.remove(tempText);
        skipHistory.current = false;

        if (!nextText) {
          if (existingLabel) {
            const labelCid = existingLabel.data?.strokeClientId;
            skipHistory.current = true;
            fc.remove(existingLabel);
            skipHistory.current = false;
            if (labelCid) {
              syncRef.current?.sendStrokeDelete(labelCid);
              broadcastStrokeDeleted(labelCid);
            }
            fc.requestRenderAll();
            saveHistory();
          }
          return;
        }

        let label = existingLabel;
        let isNewLabel = false;
        if (!label) {
          const labelCid = 'label_' + Date.now() + '_' + Math.random().toString(36).slice(2);
          label = createShapeLabel(shape, nextText, {
            fontSize: tempText.fontSize,
            fontFamily: tempText.fontFamily,
            fill: tempText.fill || DEFAULT_CANVAS_INK,
            fontWeight: tempText.fontWeight,
            fontStyle: tempText.fontStyle,
            textDecoration: tempText.textDecoration,
            data: {
              strokeClientId: labelCid,
              parentShapeId: shape.data?.strokeClientId,
              objectRole: 'shape-label',
            },
          });
          skipHistory.current = true;
          fc.add(label);
          skipHistory.current = false;
          isNewLabel = true;
        } else {
          label.set({
            text: nextText,
            visible: true,
            fontSize: tempText.fontSize,
            fontFamily: tempText.fontFamily,
            fill: tempText.fill,
            fontWeight: tempText.fontWeight,
            fontStyle: tempText.fontStyle,
            textDecoration: tempText.textDecoration,
          });
          positionShapeLabel(shape, label);
        }

        if (isNewLabel) {
          const labelJson = label.toJSON(['data']);
          syncRef.current?.sendStroke(classId, JSON.stringify(labelJson), label.data.strokeClientId);
          broadcastStrokeAdded(labelJson);
        } else {
          const labelJson = label.toJSON(['data']);
          syncRef.current?.sendStrokeUpsert(classId, JSON.stringify(labelJson), label.data.strokeClientId);
          broadcastStrokeAdded(labelJson);
        }

        fc.requestRenderAll();
        saveHistory();
      };

      tempText.on('editing:exited', onExited);
    };

    upperCanvas.addEventListener('dblclick', onDblClick);
    return () => upperCanvas.removeEventListener('dblclick', onDblClick);
  }, [role, classId, textFont, themePalette, saveHistory, broadcastStrokeAdded, broadcastStrokeDeleted, isCanvasReady]);

  // ── Keep shape labels centered while shapes move or resize ────────────────
  useEffect(() => {
    const fc = fabricRef.current;
    if (!isCanvasReady || !fc || role !== 'teacher') return;

    const updateShapeLabel = (shape, { syncRemote = false } = {}) => {
      if (!isEditableShapeObject(shape)) return;
      const label = getLinkedShapeLabel(fc, shape);
      if (!label) return;
      positionShapeLabel(shape, label);
      if (syncRemote) {
        const labelJson = label.toJSON(['data']);
        syncRef.current?.sendStrokeUpsert(classId, JSON.stringify(labelJson), label.data.strokeClientId);
        broadcastStrokeAdded(labelJson);
      }
      fc.requestRenderAll();
    };

    const onMoving = (e) => updateShapeLabel(e.target);
    const onModified = (e) => updateShapeLabel(e.target, { syncRemote: true });

    fc.on('object:moving', onMoving);
    fc.on('object:modified', onModified);
    return () => {
      fc.off('object:moving', onMoving);
      fc.off('object:modified', onModified);
    };
  }, [role, classId, broadcastStrokeAdded, isCanvasReady]);

  // ── Undo / Redo ─────────────────────────────────────────────────────────────

  const handleUndo = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc || historyIndex.current <= 0) return;
    historyIndex.current -= 1;
    const snap = historyStack.current[historyIndex.current];
    skipHistory.current = true;
    try {
      fc.loadFromJSON(JSON.parse(snap)).then(() => {
        skipHistory.current = false;
        fc.requestRenderAll();
        setCanUndo(historyIndex.current > 0);
        setCanRedo(true);
        broadcastCanvasState();
        syncRef.current?.syncFullCanvasState(classId, fc.getObjects().map(o => o.toJSON(['data'])));
      });
    } catch (err) {
      console.error('[LiveClass] undo loadFromJSON failed:', err);
      skipHistory.current = false;
    }
  }, [classId, broadcastCanvasState]);

  const handleRedo = useCallback(() => {
    const fc = fabricRef.current;
    if (!fc || historyIndex.current >= historyStack.current.length - 1) return;
    historyIndex.current += 1;
    const snap = historyStack.current[historyIndex.current];
    skipHistory.current = true;
    try {
      fc.loadFromJSON(JSON.parse(snap)).then(() => {
        skipHistory.current = false;
        fc.requestRenderAll();
        setCanUndo(historyIndex.current > 0);
        setCanRedo(historyIndex.current < historyStack.current.length - 1);
        broadcastCanvasState();
        syncRef.current?.syncFullCanvasState(classId, fc.getObjects().map(o => o.toJSON(['data'])));
      });
    } catch (err) {
      console.error('[LiveClass] redo loadFromJSON failed:', err);
      skipHistory.current = false;
    }
  }, [classId, broadcastCanvasState]);

  function handleClear() {
    const fc = fabricRef.current;
    if (!fc) return;
    skipHistory.current = true;
    const objs = [...fc.getObjects()];
    objs.forEach(o => {
      fc.remove(o);
      const cid = o.data?.strokeClientId;
      if (cid) {
        syncRef.current?.sendStrokeDelete(cid);
        broadcastStrokeDeleted(cid);
      }
    });
    skipHistory.current = false;
    fc.requestRenderAll();
    // Save the now-empty canvas as a history snapshot
    saveHistory();
  }

  const handleDeleteSelectedObjects = useCallback(() => {
    const fc = role === 'teacher' ? fabricRef.current : myFabricRef.current;
    if (!fc) return false;

    const activeObject = fc.getActiveObject?.();
    if (!activeObject || activeObject.isEditing) return false;

    const selectedObjects = activeObject.type === 'activeSelection' && typeof activeObject.getObjects === 'function'
      ? activeObject.getObjects()
      : [activeObject];

    const objectsToRemove = new Set();
    const strokeIdsToDelete = new Set();

    selectedObjects.forEach((obj) => {
      if (!obj) return;
      objectsToRemove.add(obj);

      if (isEditableShapeObject(obj)) {
        const linkedLabel = getLinkedShapeLabel(fc, obj);
        if (linkedLabel) objectsToRemove.add(linkedLabel);
      }
    });

    if (!objectsToRemove.size) return false;

    objectsToRemove.forEach((obj) => {
      const cid = obj?.data?.strokeClientId;
      if (cid) strokeIdsToDelete.add(cid);
    });

    fc.discardActiveObject();
    objectsToRemove.forEach((obj) => {
      fc.remove(obj);
    });
    fc.requestRenderAll();

    if (role === 'teacher') {
      strokeIdsToDelete.forEach((cid) => {
        syncRef.current?.sendStrokeDelete(cid);
        broadcastStrokeDeleted(cid);
      });
      saveHistory();
    }

    return true;
  }, [role, broadcastStrokeDeleted, saveHistory]);

  // Keyboard shortcuts: tool switching, Delete/Backspace for selected objects, Ctrl/Cmd+Z/Y for history
  useEffect(() => {
    const onKey = (e) => {
      const activeElement = document.activeElement;
      const tag = activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || activeElement?.isContentEditable) return;
      if (fabricRef.current?.getActiveObject?.()?.isEditing || myFabricRef.current?.getActiveObject?.()?.isEditing) return;

      const key = e.key.toLowerCase();

      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && key === 'z') {
        e.preventDefault();
        handleUndo();
        return;
      }

      if ((e.metaKey || e.ctrlKey) && (key === 'y' || (e.shiftKey && key === 'z'))) {
        e.preventDefault();
        handleRedo();
        return;
      }

      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === 'Backspace' || e.key === 'Delete') {
        if (handleDeleteSelectedObjects()) {
          e.preventDefault();
        }
        return;
      }

      const nextTool = TOOL_SHORTCUT_KEY_MAP[key];
      if (!nextTool) return;
      const isLetterShortcut = /^[a-z]$/.test(key);
      if (isLetterShortcut && !e.shiftKey) return;
      if (!isTeacher && TEACHER_ONLY_SHORTCUT_TOOLS.has(nextTool)) return;

      e.preventDefault();
      setTool(nextTool);
      if (nextTool === 'spotlight') {
        setSpotlightEnabled(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [handleDeleteSelectedObjects, handleRedo, handleUndo, isTeacher]);

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
    }, Promise.resolve()).catch((err) => {
      console.error('[LiveClass] Image import failed:', err);
    });
  }

  // ── Stamp ────────────────────────────────────────────────────────────────────
  function handleStampSelect(stampId, emoji) {
    const fc = fabricRef.current;
    if (!fc) return;
    const center = fc.getCenter();
    addStamp(fc, emoji, color, center.left, center.top);
  }

  // ── Timer ────────────────────────────────────────────────────────────────────
  function handleTimerUpdate(update) {
    const now = Date.now();
    const normalizedElapsedMs = Math.max(0, Number(update?.elapsedMs || 0));
    const normalizedTargetMs = Math.max(0, Number(update?.targetMs || 0));
    const nextMode = update?.mode || 'stopwatch';
    const nextState = update?.state || 'stopped';
    const expectedVersion = Number(update?.expectedVersion);
    const safeExpectedVersion = Number.isFinite(expectedVersion)
      ? expectedVersion
      : Number(timerState?.version ?? 0);

    // Update UI immediately (offline-safe — no Convex round trip needed)
    setTimerState((prev) => ({
      ...(prev || {}),
      state: nextState,
      mode: nextMode,
      elapsedMs: normalizedElapsedMs,
      accumulatedElapsedMs: normalizedElapsedMs,
      targetMs: normalizedTargetMs,
      anchorStartedAt: nextState === 'running' ? now : null,
      startedAt: now,
      updatedAt: now,
      version: Math.max(0, Number(prev?.version ?? safeExpectedVersion)) + 1,
    }));
    // Attempt to broadcast to students via Convex (no-op if offline)
    syncRef.current?.updateTimer(classId, {
      state: nextState,
      mode: nextMode,
      elapsedMs: normalizedElapsedMs,
      targetMs: normalizedTargetMs,
      expectedVersion: safeExpectedVersion,
    });
  }

  // ── Poll handlers ─────────────────────────────────────────────────────────
  async function handleCreatePoll(question, type, options, correctIndex) {
    const poll = await syncRef.current?.createPoll(classId, question, type, options, correctIndex);
    if (poll) setPolls(prev => [...prev.filter(p => p.id !== poll.id), poll]);
  }

  async function handleClosePoll(pollId) {
    const poll = await syncRef.current?.closePoll(pollId);
    if (poll) setPolls(prev => prev.map(p => p.id === pollId ? { ...poll } : p));
  }

  async function handleSubmitPollResponse(pollId, response) {
    void syncRef.current?.submitPollResponse(pollId, response);
    setMyPollAnswers(prev => {
      const next = { ...prev, [pollId]: response };
      myPollAnswersRef.current = next;
      return next;
    });
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
  const isStudentMobileMode = !isTeacher && isStudentCompactLayout;
  const showStudentToolbar = isTeacher || !isStudentMobileMode || studentMobileView === 'canvas';

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
      // H-2: Assign strokeClientId so template objects sync to remote participants
      const data = { ...(props.data || {}), strokeClientId: crypto.randomUUID() };
      if (type === 'line') {
        const obj = new FabricLine([props.x1 || 0, props.y1 || 0, props.x2 || 100, props.y2 || 100], {
          stroke: props.stroke || themePalette.ink,
          strokeWidth: props.strokeWidth || 2,
          strokeDashArray: props.strokeDashArray || null,
          selectable: props.selectable !== false,
          data,
        });
        fc.add(obj);
      } else if (type === 'text') {
        const obj = new FabricText(props.text || '', { ...props, data });
        fc.add(obj);
      } else {
        const Ctor = TYPE_MAP[type];
        if (!Ctor) return;
        const obj = new Ctor({ ...props, data });
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

  const bgStyle = BG_STYLE[backgroundType] ?? BG_STYLE.white;

  function renderTeacherToolbarPanel(isOpen, anchor, onClose, content) {
    if (!isTeacher || !isOpen || !anchor) return null;

    if (isCompactToolbarPanelLayout) {
      return (
        <MobileSheetPortal
          backdropClassName="lc-dropdown-panel-shell lc-dropdown-panel-shell--mobile"
          sheetClassName="lc-dropdown-panel lc-dropdown-panel--mobile"
          onClose={onClose}
          ariaLabel="Live Class panel"
        >
          {content}
        </MobileSheetPortal>
      );
    }

    return createPortal(
      <div className="lc-dropdown-panel" style={{ top: anchor.bottom + 6, left: anchor.left }}>
        {content}
      </div>,
      document.body
    );
  }

  function renderTeacherTopbarPanel(isOpen, anchor, onClose, content) {
    if (!isTeacher || !isOpen || !anchor) return null;

    if (isCompactToolbarPanelLayout) {
      return (
        <MobileSheetPortal
          backdropClassName="lc-dropdown-panel-shell--mobile"
          sheetClassName="lc-dropdown-panel lc-dropdown-panel--mobile"
          onClose={onClose}
          ariaLabel="Live Class panel"
        >
          {content}
        </MobileSheetPortal>
      );
    }

    return createPortal(
      <div className="lc-dropdown-panel" style={{ top: anchor.bottom + 6, left: anchor.left }}>
        {content}
      </div>,
      document.body
    );
  }

  return (
    <div className={`lc-page animate-fade-in ${isTeacher ? 'lc-page--teacher' : 'lc-page--student'}${isStudentMobileMode ? ' lc-page--student-mobile' : ''}${isStudentMobileMode && studentMobileView === 'canvas' ? ' lc-page--student-mobile-canvas' : ''}${isStudentMobileMode && studentMobileView === 'board' ? ' lc-page--student-mobile-board' : ''}`}>
      {/* ── Top bar ──────────────────────────────────────────────── */}
      <div className="lc-topbar card">
        <div className="lc-topbar-left">
          {isTeacher ? (
            <button
              className="badge lc-live-badge lc-live-badge--end"
              onClick={async () => {
                broadcastRef.current?.postMessage({ type: 'class-ended' });
                await syncRef.current?.endClass(classId);
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
          {/* My Notes button — student only: opens in a new tab */}
          {!isTeacher && joinTempId && !isStudentMobileMode && (
            <button
              className="btn btn-sm lc-share-btn"
              onClick={() => window.open(`/my-notes/${classId}/${joinTempId}`, '_blank', 'noopener,noreferrer')}
              title="Open my notes in a new tab"
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

      {isStudentMobileMode && (
        <div className="lc-student-mobile-switcher" role="tablist" aria-label="Student mobile view switcher">
          <button
            type="button"
            role="tab"
            aria-selected={studentMobileView === 'board'}
            className={`lc-student-mobile-switcher-btn ${studentMobileView === 'board' ? 'lc-student-mobile-switcher-btn--active' : ''}`}
            onClick={() => setStudentMobileView('board')}
          >
            Teacher Board
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={studentMobileView === 'canvas'}
            className={`lc-student-mobile-switcher-btn ${studentMobileView === 'canvas' ? 'lc-student-mobile-switcher-btn--active' : ''}`}
            onClick={() => setStudentMobileView('canvas')}
          >
            My Canvas
          </button>
        </div>
      )}

      {/* ── Toolbar ──────────────────────────────────────────────── */}
      {showStudentToolbar && <LiveClassToolbar
        tool={tool}
        color={color}
        strokeWidth={strokeWidth}
        eraserMode={eraserMode}
        highlighterMode={highlighterMode}
        backgroundType={backgroundType}
        isTeacher={isTeacher}
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
        onEraserModeChange={setEraserMode}
        onHighlighterModeChange={setHighlighterMode}
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
      />}

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="lc-body">
        {/* Student split-panel: left = teacher live (read-only), right = own canvas */}
        {!isTeacher && (
          <div className="lc-student-panel">
            <div className="lc-panel-label">Teacher's Board</div>
            <div ref={teacherBoardWrapRef} className="lc-canvas-wrap lc-canvas-wrap--readonly" style={bgStyle}>
              <ErrorBoundary name="LiveCanvas" inline resetKeys={[classId]}>
                <canvas ref={teacherCanvasRefCallback} />
                <LaserPointerOverlay cursors={cursors} trails={laserTrails} width={canvasSize.w} height={canvasSize.h} localMode={laserMode} />
                <SpotlightOverlay width={canvasSize.w} height={canvasSize.h} enabled={false} />
              </ErrorBoundary>
            </div>
          </div>
        )}

        {/* Teacher / student own canvas */}
        <div className={`lc-main-canvas-wrap${isMyPresentation ? ' lc-canvas-presenting' : ''}`}>
          {!isTeacher && isMyPresentation && (
            <div className="lc-panel-label">
              <span className="lc-present-live-badge">● Presenting</span>
            </div>
          )}
          {!isTeacher && !isMyPresentation && !isPresenting && (
            <div className="lc-panel-label">
              <button className="lc-present-request-btn btn btn-ghost btn-sm" onClick={handleRequestPresent}>
                Request to Present
              </button>
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
            <ErrorBoundary name="LiveCanvas" inline resetKeys={[classId]}>
              <canvas ref={isTeacher ? teacherCanvasRefCallback : studentCanvasRefCallback} />
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
            </ErrorBoundary>
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
              poll={activePoll || [...polls].reverse().find(p => p.status === 'closed')}
              hasAnswered={activePoll ? !!myPollAnswers[activePoll.id] : false}
              result={pollResult}
              onSubmit={handleSubmitPollResponse}
              onDismiss={handleDismissPollResult}
            />
          );
        })()}
      </div>

      {!isTeacher && isStudentMobileMode && (
        <div className="lc-student-mobile-actions" aria-label="Student quick actions">
          <button
            type="button"
            className="lc-student-mobile-fab lc-student-mobile-fab--secondary"
            onClick={() => syncRef.current?.raiseHand(classId)}
            title="Raise hand"
            aria-label="Raise hand"
          >
            <Hand size={18} />
            <span>Raise Hand</span>
          </button>
          {joinTempId && (
            <button
              type="button"
              className="lc-student-mobile-fab"
              onClick={() => setShowStudentNotes(true)}
              title="Open my notes"
              aria-label="Open my notes"
            >
              <NoteIcon size={18} />
              <span>My Notes</span>
            </button>
          )}
        </div>
      )}

      {!isTeacher && showStudentNotes && joinTempId && (
        <StudentNotePanel
          sessionId={classId}
          tempId={joinTempId}
          onClose={() => setShowStudentNotes(false)}
        />
      )}

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
      {renderTeacherTopbarPanel(
        showHandPanel,
        handsAnchor,
        () => { setShowHandPanel(false); setHandsAnchor(null); },
        (
          <HandRaisePanel
            raises={handRaises}
            participants={participants}
            onAcknowledge={(raiseId) => syncRef.current?.acknowledgeRaise(raiseId)}
            onClose={() => { setShowHandPanel(false); setHandsAnchor(null); }}
          />
        )
      )}
      {renderTeacherTopbarPanel(
        showStudentGrid,
        studentsAnchor,
        () => { setShowStudentGrid(false); setStudentsAnchor(null); },
        <StudentAdmissionPanel
          anchor={studentsAnchor}
          sessionId={classId}
          autoAccept={autoAccept}
          presentation={isCompactToolbarPanelLayout ? 'sheet' : 'anchored'}
          onClose={() => { setShowStudentGrid(false); setStudentsAnchor(null); }}
          onAutoAcceptChange={setAutoAccept}
        />
      )}

      {/* ── Toolbar dropdown panels (portal) ─────────────────────── */}
      {renderTeacherToolbarPanel(
        showPollPanel,
        pollAnchor,
        () => { setShowPollPanel(false); setPollAnchor(null); },
        (
          <LivePollPanel
            polls={polls}
            studentCount={participants.length}
            onCreatePoll={handleCreatePoll}
            onClosePoll={handleClosePoll}
            onClose={() => { setShowPollPanel(false); setPollAnchor(null); }}
          />
        )
      )}
      {renderTeacherToolbarPanel(
        showStencilPanel,
        stencilAnchor,
        () => { setShowStencilPanel(false); setStencilAnchor(null); },
        (
          <StencilPalette
            onDropStencil={(stencil) => handleDropStencil(stencil)}
            onClose={() => { setShowStencilPanel(false); setStencilAnchor(null); }}
          />
        )
      )}
      {renderTeacherToolbarPanel(
        showTemplatePicker,
        templateAnchor,
        () => { setShowTemplatePicker(false); setTemplateAnchor(null); },
        (
          <TemplatePicker
            onLoadTemplate={handleLoadTemplate}
            onClose={() => { setShowTemplatePicker(false); setTemplateAnchor(null); }}
          />
        )
      )}
      {renderTeacherToolbarPanel(
        showGraphWidget,
        graphAnchor,
        () => { setShowGraphWidget(false); setGraphAnchor(null); },
        (
          <GraphWidget
            onStampToCanvas={(dataUrl) => {
              handlePlaceImage(dataUrl);
              setShowGraphWidget(false);
              setGraphAnchor(null);
            }}
            onClose={() => { setShowGraphWidget(false); setGraphAnchor(null); }}
          />
        )
      )}


    </div>
  );
}
