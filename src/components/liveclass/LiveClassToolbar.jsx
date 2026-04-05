import { forwardRef, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Pen, Highlighter, Eraser, Square, Circle, Triangle,
  Lasso, MousePointer, Flashlight, Ruler, Stamp,
  FolderOpen, Hand, Users, BarChart3, Shapes, LayoutTemplate,
  ZoomIn, ZoomOut, Undo2, Redo2, Trash2, Type,
  ArrowRight, Minus, Diamond, Star, Hexagon,
  GitBranch, BoxSelect, PlayCircle, CircleDot, LineChart,
  MoreHorizontal, Palette, SlidersHorizontal, X,
} from 'lucide-react';
import BackgroundPicker from './BackgroundPicker.jsx';
import MobileSheetPortal from './MobileSheetPortal.jsx';
import StampPicker from './StampPicker.jsx';
import FontPicker from './FontPicker.jsx';
import { getLiveClassFontLabel } from './fontDefaults.js';

const TOOLS = [
  { id: 'pen',       icon: Pen,           label: 'Pen',          group: 'draw' },
  { id: 'highlight', icon: Highlighter,   label: 'Highlighter',  group: 'draw' },
  { id: 'eraser',    icon: Eraser,        label: 'Eraser',       group: 'draw' },
  { id: 'lasso',     icon: Lasso,         label: 'Lasso Select', group: 'draw' },
  { id: 'pointer',   icon: MousePointer,  label: 'Pointer',      group: 'interact' },
  { id: 'laser',     icon: Flashlight,    label: 'Laser',        group: 'interact' },
  { id: 'spotlight', icon: Circle,        label: 'Spotlight',    group: 'interact' },
  { id: 'ruler',     icon: Ruler,         label: 'Ruler',        group: 'interact' },
  { id: 'rect',      icon: Square,        label: 'Rectangle',    group: 'shape' },
  { id: 'circle',    icon: Circle,        label: 'Circle',       group: 'shape' },
  { id: 'triangle',  icon: Triangle,      label: 'Triangle',     group: 'shape' },
  { id: 'line',      icon: Minus,         label: 'Line',         group: 'shape' },
  { id: 'arrow',     icon: ArrowRight,    label: 'Arrow',        group: 'shape' },
  { id: 'diamond',   icon: Diamond,       label: 'Diamond',      group: 'shape' },
  { id: 'star',      icon: Star,          label: 'Star',         group: 'shape' },
  { id: 'hexagon',   icon: Hexagon,       label: 'Hexagon',      group: 'shape' },
  { id: 'text',      icon: Type,          label: 'Text',         group: 'text' },
  { id: 'stamp',     icon: Stamp,         label: 'Stamp',        group: 'misc' },
  { id: 'fc-process',   icon: BoxSelect,     label: 'Process',      group: 'diagram' },
  { id: 'fc-decision',  icon: Diamond,       label: 'Decision',     group: 'diagram' },
  { id: 'fc-terminal',  icon: PlayCircle,    label: 'Terminal',     group: 'diagram' },
  { id: 'fc-connector', icon: GitBranch,     label: 'Connector',    group: 'diagram' },
];

const LASER_MODES = [
  { id: 'dot',   label: 'Dot',   description: 'Follows cursor' },
  { id: 'trail', label: 'Trail', description: 'Draw fading strokes' },
];

const ERASER_MODES = [
  { id: 'precision', label: 'Precision Eraser', shortLabel: 'P', description: 'Erase only the object you click' },
  { id: 'stroke', label: 'Stroke Eraser', shortLabel: 'S', description: 'Drag to remove full strokes' },
  { id: 'highlighter', label: 'Erase Highlighter Only', shortLabel: 'H', description: 'Only clears highlighted strokes' },
];

const STRAIGHT_LINE_HIGHLIGHTER_MODE = 'straight-line';

const COLORS = [
  // Neutrals
  '#000000', '#1f2937', '#4b5563', '#9ca3af', '#d1d5db', '#f9fafb', '#ffffff', '#78350f',
  // Red / Orange / Yellow
  '#991b1b', '#ef4444', '#f97316', '#f59e0b', '#fbbf24', '#fef3c7', '#fca5a5', '#fde68a',
  // Green
  '#14532d', '#15803d', '#22c55e', '#4ade80', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0',
  // Blue / Cyan
  '#1e3a8a', '#1d4ed8', '#3b82f6', '#60a5fa', '#0891b2', '#06b6d4', '#22d3ee', '#93c5fd',
  // Purple / Pink
  '#581c87', '#7c3aed', '#8b5cf6', '#a78bfa', '#be185d', '#ec4899', '#f472b6', '#e879f9',
];

const STROKE_WIDTHS = [1, 2, 3, 4, 5, 10, 16];

const TOOL_SHORTCUT_LABELS = {
  pen: 'Shift+P',
  highlight: 'Shift+H',
  eraser: 'Shift+E',
  lasso: 'Shift+L',
  pointer: 'Shift+V',
  laser: 'Shift+K',
  spotlight: 'Shift+O',
  ruler: 'Shift+R',
  rect: '1',
  circle: '2',
  triangle: '3',
  line: '4',
  arrow: '5',
  diamond: '6',
  star: '7',
  hexagon: '8',
  text: 'Shift+T',
  'fc-process': 'Shift+Q',
  'fc-decision': 'Shift+W',
  'fc-terminal': 'Shift+A',
  'fc-connector': 'Shift+S',
};

const COMPACT_TOOLBAR_QUERY = '(max-width: 768px)';
const COMPACT_TEACHER_PRIMARY_TOOLS = ['pointer', 'pen', 'highlight', 'eraser'];
const COMPACT_STUDENT_PRIMARY_TOOLS = ['pen', 'highlight', 'eraser', 'text'];
const COMPACT_TEACHER_SHEET_TOOLS = ['laser', 'spotlight', 'ruler', 'lasso'];
const COMPACT_STUDENT_SHEET_TOOLS = ['lasso'];

const COLOR_NAMES = {
  '#000000': 'Black', '#1f2937': 'Dark Grey', '#4b5563': 'Grey', '#9ca3af': 'Cool Grey',
  '#d1d5db': 'Light Grey', '#f9fafb': 'Off White', '#ffffff': 'White', '#78350f': 'Brown',
  '#991b1b': 'Dark Red', '#ef4444': 'Red', '#f97316': 'Orange', '#f59e0b': 'Amber',
  '#fbbf24': 'Yellow', '#fef3c7': 'Cream', '#fca5a5': 'Light Red', '#fde68a': 'Light Yellow',
  '#14532d': 'Dark Green', '#15803d': 'Green', '#22c55e': 'Lime', '#4ade80': 'Light Green',
  '#10b981': 'Emerald', '#34d399': 'Teal', '#6ee7b7': 'Mint', '#a7f3d0': 'Pale Green',
  '#1e3a8a': 'Navy', '#1d4ed8': 'Blue', '#3b82f6': 'Sky Blue', '#60a5fa': 'Light Blue',
  '#0891b2': 'Cyan', '#06b6d4': 'Turquoise', '#22d3ee': 'Aqua', '#93c5fd': 'Pale Blue',
  '#581c87': 'Dark Purple', '#7c3aed': 'Violet', '#8b5cf6': 'Purple', '#a78bfa': 'Lavender',
  '#be185d': 'Dark Pink', '#ec4899': 'Pink', '#f472b6': 'Light Pink', '#e879f9': 'Magenta',
};

const BACKGROUND_LABELS = {
  white: 'Blank',
  lined: 'Lined',
  grid: 'Graph',
  dotted: 'Dotted',
  yellow: 'Notepad',
};

const CompactToolbarButton = forwardRef(function CompactToolbarButton({
  label,
  title,
  active = false,
  disabled = false,
  onClick,
  icon,
  indicator,
  badge,
}, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={`lc-toolbar-compact-btn ${active ? 'lc-toolbar-compact-btn--active' : ''}`}
      title={title || label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="lc-toolbar-compact-btn-icon">
        {icon}
        {indicator ? <span className="lc-toolbar-compact-indicator">{indicator}</span> : null}
        {badge ? <span className="lc-toolbar-compact-badge">{badge}</span> : null}
      </span>
      <span className="lc-toolbar-compact-btn-label">{label}</span>
    </button>
  );
});

const CompactSheetButton = forwardRef(function CompactSheetButton({
  label,
  active = false,
  onClick,
  icon,
  badge,
  meta,
}, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={`lc-toolbar-sheet-action ${active ? 'lc-toolbar-sheet-action--active' : ''}`}
      onClick={onClick}
    >
      <span className="lc-toolbar-sheet-action-icon-wrap">
        <span className="lc-toolbar-sheet-action-icon">{icon}</span>
        {badge ? <span className="lc-toolbar-sheet-action-badge">{badge}</span> : null}
      </span>
      <span className="lc-toolbar-sheet-action-copy">
        <span className="lc-toolbar-sheet-action-label">{label}</span>
        {meta ? <span className="lc-toolbar-sheet-action-meta">{meta}</span> : null}
      </span>
    </button>
  );
});

/**
 * LiveClassToolbar — main toolbar for the Live Class canvas.
 *
 * @param {Object} props
 * @param {string}   props.tool           — active tool id
 * @param {string}   props.color          — active color
 * @param {number}   props.strokeWidth
 * @param {string}   props.backgroundType — current paper type
 * @param {boolean}  props.isTeacher
 * @param {Object}   props.textFont       — current text font settings { fontFamily, fontSize, fontWeight, textDecoration, fontStyle }
 * @param {string}   props.eraserMode     — 'precision' | 'stroke' | 'highlighter'
 * @param {string}   props.highlighterMode — 'freehand' | 'straight-line'
 * @param {string}   props.laserMode      — 'dot' or 'trail'
 * @param {Function} props.onToolChange
 * @param {Function} props.onColorChange
 * @param {Function} props.onStrokeWidthChange
 * @param {Function} props.onBgChange
 * @param {Function} props.onFontChange   — (fontSettings) => void
 * @param {Function} props.onEraserModeChange — (mode: 'precision'|'stroke'|'highlighter') => void
 * @param {Function} props.onHighlighterModeChange — (mode: 'freehand'|'straight-line') => void
 * @param {Function} props.onLaserModeChange — (mode: 'dot'|'trail') => void
 * @param {Function} props.onStampSelect  — (stampId, emoji) => void
 * @param {Function} props.onOpenImport    — opens Import Media dialog
 * @param {Function} props.onUndo
 * @param {Function} props.onRedo
 * @param {Function} props.onClear
 * @param {Function} props.onZoomIn
 * @param {Function} props.onZoomOut
 * @param {Function} props.onRaiseHand
 */
export default function LiveClassToolbar({
  tool,
  color = '#1f2937',
  strokeWidth = 4,
  backgroundType = 'white',
  isTeacher,
  textFont,
  eraserMode = 'precision',
  highlighterMode = 'freehand',
  laserMode = 'dot',
  onToolChange,
  onColorChange,
  onStrokeWidthChange,
  onBgChange,
  onFontChange,
  onEraserModeChange,
  onHighlighterModeChange,
  onLaserModeChange,
  onStampSelect,
  onOpenImport,
  onUndo,
  onRedo,
  onClear,
  canUndo = false,
  canRedo = false,
  onZoomIn,
  onZoomOut,
  onRaiseHand,
  onTogglePollPanel,
  activePollCount = 0,
  isPollPanelOpen = false,
  isStencilPanelOpen = false,
  isTemplatePanelOpen = false,
  isGraphPanelOpen = false,
  onToggleStencilPanel,
  onToggleTemplatePicker,
  onToggleGraphWidget,
}) {
  const selectedFontLabel = getLiveClassFontLabel(textFont?.fontFamily);
  const [showBg, setShowBg] = useState(false);
  const [showStamps, setShowStamps] = useState(false);
  const [showFontPicker, setShowFontPicker] = useState(false);
  const [showLaserMode, setShowLaserMode] = useState(false);
  const [showEraserMode, setShowEraserMode] = useState(false);
  const [showHighlighterMode, setShowHighlighterMode] = useState(false);
  const [showShapes, setShowShapes] = useState(false);
  const [showDiagram, setShowDiagram] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showWidths, setShowWidths] = useState(false);
  const [isCompactToolbar, setIsCompactToolbar] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(COMPACT_TOOLBAR_QUERY).matches;
  });
  const [showCompactMore, setShowCompactMore] = useState(false);
  const [fontPickerPos, setFontPickerPos] = useState({ top: 0, left: 0 });
  const [eraserModePos, setEraserModePos] = useState({ top: 0, left: 0 });
  const [highlighterModePos, setHighlighterModePos] = useState({ top: 0, left: 0 });
  const [shapeDropdownPos, setShapeDropdownPos] = useState({ top: 0, left: 0 });
  const [diagramDropdownPos, setDiagramDropdownPos] = useState({ top: 0, left: 0 });
  const [laserModePos, setLaserModePos] = useState({ top: 0, left: 0 });
  const [colorDropdownPos, setColorDropdownPos] = useState({ top: 0, left: 0 });
  const [widthDropdownPos, setWidthDropdownPos] = useState({ top: 0, left: 0 });
  const fontBtnRef = useRef(null);
  const eraserBtnRef = useRef(null);
  const highlighterBtnRef = useRef(null);
  const shapeBtnRef = useRef(null);
  const diagramBtnRef = useRef(null);
  const laserBtnRef = useRef(null);
  const colorBtnRef = useRef(null);
  const widthBtnRef = useRef(null);

  const activeEraserMode = ERASER_MODES.find((mode) => mode.id === eraserMode) ?? ERASER_MODES[0];
  const isStraightLineHighlighter = highlighterMode === STRAIGHT_LINE_HIGHLIGHTER_MODE;

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mediaQuery = window.matchMedia(COMPACT_TOOLBAR_QUERY);
    const handleChange = (event) => {
      setIsCompactToolbar(event.matches);
      if (!event.matches) {
        setShowCompactMore(false);
        setShowStamps(false);
      }
    };
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (!showCompactMore) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowCompactMore(false);
        setShowStamps(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showCompactMore]);

  // M-8: Consolidated outside-click listener for all dropdowns
  useEffect(() => {
    const anyOpen = showLaserMode || showEraserMode || showHighlighterMode || showShapes || showDiagram || showColors || showWidths;
    if (!anyOpen) return;
    const handleClickOutside = (e) => {
      if (showLaserMode && laserBtnRef.current && !laserBtnRef.current.contains(e.target)) {
        const dropdown = document.getElementById('laser-mode-dropdown');
        if (!(dropdown && dropdown.contains(e.target))) setShowLaserMode(false);
      }
      if (showEraserMode && eraserBtnRef.current && !eraserBtnRef.current.contains(e.target)) {
        const dropdown = document.getElementById('eraser-mode-dropdown');
        if (!(dropdown && dropdown.contains(e.target))) setShowEraserMode(false);
      }
      if (showHighlighterMode && highlighterBtnRef.current && !highlighterBtnRef.current.contains(e.target)) {
        const dropdown = document.getElementById('highlighter-mode-dropdown');
        if (!(dropdown && dropdown.contains(e.target))) setShowHighlighterMode(false);
      }
      if (showShapes && shapeBtnRef.current && !shapeBtnRef.current.contains(e.target)) {
        setShowShapes(false);
      }
      if (showDiagram && diagramBtnRef.current && !diagramBtnRef.current.contains(e.target)) {
        setShowDiagram(false);
      }
      if (showColors && colorBtnRef.current && !colorBtnRef.current.contains(e.target)) {
        const dropdown = document.getElementById('lc-color-grid-dropdown');
        if (!(dropdown && dropdown.contains(e.target))) setShowColors(false);
      }
      if (showWidths && widthBtnRef.current && !widthBtnRef.current.contains(e.target)) {
        const dropdown = document.getElementById('lc-width-dropdown');
        if (!(dropdown && dropdown.contains(e.target))) setShowWidths(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLaserMode, showEraserMode, showHighlighterMode, showShapes, showDiagram, showColors, showWidths]);

  // M-13: close all dropdowns on window resize or scroll so portals don't float off
  useEffect(() => {
    const anyOpen = showLaserMode || showEraserMode || showHighlighterMode || showShapes || showDiagram || showColors || showWidths || showFontPicker;
    if (!anyOpen) return;
    const closeAll = () => {
      setShowLaserMode(false);
      setShowEraserMode(false);
      setShowHighlighterMode(false);
      setShowShapes(false);
      setShowDiagram(false);
      setShowColors(false);
      setShowWidths(false);
      setShowFontPicker(false);
    };
    window.addEventListener('resize', closeAll);
    window.addEventListener('scroll', closeAll, true);
    return () => {
      window.removeEventListener('resize', closeAll);
      window.removeEventListener('scroll', closeAll, true);
    };
  }, [showLaserMode, showEraserMode, showHighlighterMode, showShapes, showDiagram, showColors, showWidths, showFontPicker]);

  // M-5: Clamp a dropdown position so it stays within the viewport
  function clampDropdownPos(rect, dropdownWidth = 200, dropdownHeight = 260) {
    const gap = 6;
    let top = rect.bottom + gap;
    let left = rect.left;
    // Clamp right edge
    if (left + dropdownWidth > window.innerWidth - 8) {
      left = window.innerWidth - dropdownWidth - 8;
    }
    // Clamp left edge
    if (left < 8) left = 8;
    // Clamp bottom edge: flip above if it would overflow
    if (top + dropdownHeight > window.innerHeight - 8) {
      top = rect.top - dropdownHeight - gap;
    }
    // Clamp top edge
    if (top < 8) top = 8;
    return { top, left };
  }

  const handleColorBtnClick = () => {
    setShowCompactMore(false);
    if (!showColors && colorBtnRef.current) {
      const rect = colorBtnRef.current.getBoundingClientRect();
      setColorDropdownPos(clampDropdownPos(rect, 220, 200));
    }
    setShowColors(v => !v);
  };


  const handleWidthBtnClick = () => {
    setShowCompactMore(false);
    if (!showWidths && widthBtnRef.current) {
      const rect = widthBtnRef.current.getBoundingClientRect();
      setWidthDropdownPos(clampDropdownPos(rect, 180, 160));
    }
    setShowWidths(v => !v);
  };

  const handleFontBtnClick = () => {
    if (!showFontPicker && fontBtnRef.current) {
      const rect = fontBtnRef.current.getBoundingClientRect();
      setFontPickerPos(clampDropdownPos(rect, 360, 640));
    }
    setShowFontPicker(v => !v);
  };

  const handleEraserBtnClick = () => {
    if (!showEraserMode && eraserBtnRef.current) {
      const rect = eraserBtnRef.current.getBoundingClientRect();
      setEraserModePos(clampDropdownPos(rect, 220, 170));
    }
    setShowEraserMode((value) => !value);
  };

  const handleHighlighterBtnClick = () => {
    if (!showHighlighterMode && highlighterBtnRef.current) {
      const rect = highlighterBtnRef.current.getBoundingClientRect();
      setHighlighterModePos(clampDropdownPos(rect, 240, 110));
    }
    setShowHighlighterMode((value) => !value);
  };

  const handleShapesBtnClick = () => {
    setShowCompactMore(false);
    if (!showShapes && shapeBtnRef.current) {
      const rect = shapeBtnRef.current.getBoundingClientRect();
      setShapeDropdownPos(clampDropdownPos(rect, 200, 260));
    }
    setShowShapes(v => !v);
  };

  const handleDiagramBtnClick = () => {
    if (!showDiagram && diagramBtnRef.current) {
      const rect = diagramBtnRef.current.getBoundingClientRect();
      setDiagramDropdownPos(clampDropdownPos(rect, 200, 260));
    }
    setShowDiagram(v => !v);
  };

  const drawTools = TOOLS.filter(t => t.group === 'draw');
  const interactTools = TOOLS.filter(t => t.group === 'interact');
  const shapeTools = TOOLS.filter(t => t.group === 'shape');
  const diagramTools = TOOLS.filter(t => t.group === 'diagram');
  const textTools = TOOLS.filter(t => t.group === 'text');

  const activeShape = shapeTools.find(t => t.id === tool) ?? null;
  const ShapeIcon = activeShape ? activeShape.icon : Square;
  const activeDiagram = diagramTools.find(t => t.id === tool) ?? null;
  const DiagramIcon = activeDiagram ? activeDiagram.icon : GitBranch;
  const compactPrimaryTools = isTeacher ? COMPACT_TEACHER_PRIMARY_TOOLS : COMPACT_STUDENT_PRIMARY_TOOLS;
  const compactSheetTools = isTeacher ? COMPACT_TEACHER_SHEET_TOOLS : COMPACT_STUDENT_SHEET_TOOLS;
  const compactPollBadge = activePollCount > 9 ? '9+' : (activePollCount > 0 ? String(activePollCount) : null);
  const compactSecondaryToolIds = new Set([...compactSheetTools, 'stamp', ...diagramTools.map((item) => item.id)]);
  const activeCompactSecondaryToolLabel = compactSecondaryToolIds.has(tool)
    ? (TOOLS.find((item) => item.id === tool)?.label || null)
    : null;
  const currentBackgroundLabel = BACKGROUND_LABELS[backgroundType] || 'Blank';
  const isCompactMoreActive = showCompactMore
    || compactSheetTools.includes(tool)
    || tool === 'stamp'
    || diagramTools.some((item) => item.id === tool)
    || isPollPanelOpen
    || isStencilPanelOpen
    || isTemplatePanelOpen
    || isGraphPanelOpen;

  const handleCompactToolChange = (nextTool) => {
    onToolChange?.(nextTool);
    setShowCompactMore(false);
    setShowStamps(false);
  };

  const getCompactPanelAnchor = () => {
    const panelWidth = Math.min(window.innerWidth - 24, 320);
    return {
      bottom: 84,
      left: Math.max(12, Math.round((window.innerWidth - panelWidth) / 2)),
    };
  };

  const openCompactAnchoredPanel = (togglePanel) => {
    togglePanel?.(getCompactPanelAnchor());
    setShowCompactMore(false);
  };

  function getToolTitle(label, toolId, suffix = '') {
    const shortcut = TOOL_SHORTCUT_LABELS[toolId];
    return `${label}${shortcut ? ` (${shortcut})` : ''}${suffix}`;
  }

  function renderToolBtn(t) {
    const Icon = t.icon;
    const active = tool === t.id;
    return (
      <button
        key={t.id}
        className={`lc-tool-btn ${active ? 'lc-tool-btn--active' : ''}`}
        title={getToolTitle(t.label, t.id)}
        aria-pressed={active}
        onClick={() => {
          if (t.id === 'stamp') { setShowStamps(v => !v); return; }
          onToolChange?.(t.id);
        }}
      >
        <Icon size={18} />
      </button>
    );
  }

  if (isCompactToolbar) {
    return (
      <>
        <div className="lc-toolbar lc-toolbar--compact card" role="toolbar" aria-label="Whiteboard tools">
          <div className="lc-toolbar-compact-main">
            {compactPrimaryTools.map((toolId) => {
              const toolDef = TOOLS.find((candidate) => candidate.id === toolId);
              if (!toolDef) return null;
              const Icon = toolDef.icon;

              if (toolId === 'highlight') {
                const active = tool === toolId;
                return (
                  <div key={toolId} className="lc-toolbar-popover-wrap">
                    <CompactToolbarButton
                      ref={highlighterBtnRef}
                      label={toolDef.label}
                      title={getToolTitle(toolDef.label, toolId, active && isStraightLineHighlighter ? ' - Draw Straight Line on' : '')}
                      active={active}
                      onClick={(event) => {
                        event.stopPropagation();
                        if (!active) {
                          handleCompactToolChange(toolId);
                          setShowHighlighterMode(false);
                        } else {
                          handleHighlighterBtnClick();
                        }
                      }}
                      icon={<Icon size={18} />}
                      indicator={active && isStraightLineHighlighter ? 'SL' : null}
                    />
                  </div>
                );
              }

              if (toolId === 'eraser') {
                const active = tool === toolId;
                return (
                  <div key={toolId} className="lc-toolbar-popover-wrap">
                    <CompactToolbarButton
                      ref={eraserBtnRef}
                      label={toolDef.label}
                      title={getToolTitle(toolDef.label, toolId, active ? ` - ${activeEraserMode.label}` : '')}
                      active={active}
                      onClick={(event) => {
                        event.stopPropagation();
                        if (!active) {
                          handleCompactToolChange(toolId);
                          setShowEraserMode(false);
                        } else {
                          handleEraserBtnClick();
                        }
                      }}
                      icon={<Icon size={18} />}
                      indicator={active ? activeEraserMode.shortLabel : null}
                    />
                  </div>
                );
              }

              return (
                <div key={toolId} className="lc-toolbar-popover-wrap">
                  <CompactToolbarButton
                    label={toolDef.label}
                    title={getToolTitle(toolDef.label, toolId)}
                    active={tool === toolId}
                    onClick={() => handleCompactToolChange(toolId)}
                    icon={<Icon size={18} />}
                  />
                </div>
              );
            })}

            <div className="lc-toolbar-popover-wrap">
              <CompactToolbarButton
                ref={shapeBtnRef}
                label="Shapes"
                title={activeShape ? getToolTitle(activeShape.label, activeShape.id) : 'Shapes (1-8)'}
                active={Boolean(activeShape) || showShapes}
                onClick={handleShapesBtnClick}
                icon={<ShapeIcon size={18} />}
              />
            </div>

            <div className="lc-toolbar-popover-wrap">
              <CompactToolbarButton
                label="More"
                title="More tools"
                active={isCompactMoreActive}
                badge={compactPollBadge}
                onClick={() => {
                  setShowCompactMore((value) => !value);
                  setShowShapes(false);
                  setShowColors(false);
                  setShowWidths(false);
                }}
                icon={<MoreHorizontal size={18} />}
              />
            </div>
          </div>

          <div className={`lc-toolbar-compact-utils ${isTeacher ? 'lc-toolbar-compact-utils--teacher' : 'lc-toolbar-compact-utils--student'}`}>
            {isTeacher && (
              <div className="lc-toolbar-popover-wrap">
                <CompactToolbarButton
                  label="Text"
                  title={getToolTitle('Text', 'text')}
                  active={tool === 'text'}
                  onClick={() => handleCompactToolChange('text')}
                  icon={<Type size={18} />}
                />
              </div>
            )}

            <div className="lc-toolbar-popover-wrap">
              <CompactToolbarButton
                ref={colorBtnRef}
                label="Color"
                title="Color"
                active={showColors}
                onClick={handleColorBtnClick}
                icon={(
                  <>
                    <Palette size={16} />
                    <span className="lc-toolbar-compact-color-chip" style={{ background: color }} />
                  </>
                )}
              />
            </div>

            <div className="lc-toolbar-popover-wrap">
              <CompactToolbarButton
                ref={widthBtnRef}
                label="Size"
                title={`Size: ${strokeWidth}px`}
                active={showWidths}
                onClick={handleWidthBtnClick}
                icon={(
                  <>
                    <SlidersHorizontal size={16} />
                    <span
                      className="lc-toolbar-compact-width-chip"
                      style={{ width: Math.max(6, Math.min(strokeWidth + 2, 16)), height: Math.max(6, Math.min(strokeWidth + 2, 16)), background: color }}
                    />
                  </>
                )}
              />
            </div>

            <div className="lc-toolbar-popover-wrap">
              <CompactToolbarButton
                label="Undo"
                title="Undo (Ctrl+Z)"
                disabled={!canUndo}
                onClick={onUndo}
                icon={<Undo2 size={18} />}
              />
            </div>

            <div className="lc-toolbar-popover-wrap">
              <CompactToolbarButton
                label="Redo"
                title="Redo (Ctrl+Y)"
                disabled={!canRedo}
                onClick={onRedo}
                icon={<Redo2 size={18} />}
              />
            </div>
          </div>
        </div>

        {showCompactMore && (
          <MobileSheetPortal
            backdropClassName="lc-toolbar-sheet-backdrop"
            sheetClassName="lc-toolbar-sheet"
            ariaLabel="More whiteboard tools"
            onClose={() => { setShowCompactMore(false); setShowStamps(false); }}
          >
              <div className="lc-toolbar-sheet-header">
                <div>
                  <div className="lc-toolbar-sheet-eyebrow">Secondary tools</div>
                  <div className="lc-toolbar-sheet-title">More controls</div>
                </div>
                <button
                  type="button"
                  className="lc-toolbar-sheet-close"
                  aria-label="Close more tools"
                  onClick={() => { setShowCompactMore(false); setShowStamps(false); }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="lc-toolbar-sheet-section">
                <div className="lc-toolbar-sheet-section-head">
                  <div className="lc-toolbar-sheet-section-title">Tools</div>
                  {activeCompactSecondaryToolLabel ? (
                    <div className="lc-toolbar-sheet-section-meta">Current: {activeCompactSecondaryToolLabel}</div>
                  ) : null}
                </div>
                <div className="lc-toolbar-sheet-grid">
                  {compactSheetTools.map((toolId) => {
                    const toolDef = TOOLS.find((candidate) => candidate.id === toolId);
                    if (!toolDef) return null;
                    const Icon = toolDef.icon;

                    if (toolId === 'laser') {
                      const active = tool === toolId;
                      return (
                        <div key={toolId} className="lc-toolbar-popover-wrap">
                          <CompactSheetButton
                            ref={laserBtnRef}
                            label={toolDef.label}
                            active={active}
                            icon={<Icon size={18} />}
                            onClick={(event) => {
                              event.stopPropagation();
                              if (!active) {
                                handleCompactToolChange(toolId);
                                setShowLaserMode(false);
                              } else {
                                if (!showLaserMode && laserBtnRef.current) {
                                  const rect = laserBtnRef.current.getBoundingClientRect();
                                  setLaserModePos(clampDropdownPos(rect, 160, 100));
                                }
                                setShowLaserMode((value) => !value);
                              }
                            }}
                          />
                        </div>
                      );
                    }

                    return (
                      <div key={toolId} className="lc-toolbar-popover-wrap">
                        <CompactSheetButton
                          label={toolDef.label}
                          active={tool === toolId}
                          icon={<Icon size={18} />}
                          onClick={() => handleCompactToolChange(toolId)}
                        />
                      </div>
                    );
                  })}

                  <div className="lc-toolbar-popover-wrap">
                    <CompactSheetButton
                      ref={diagramBtnRef}
                      label={activeDiagram ? activeDiagram.label : 'Diagram'}
                      active={Boolean(activeDiagram) || showDiagram}
                      icon={<DiagramIcon size={18} />}
                      onClick={handleDiagramBtnClick}
                    />
                  </div>

                  <div className="lc-toolbar-popover-wrap">
                    <CompactSheetButton
                      label="Stamp"
                      active={showStamps || tool === 'stamp'}
                      icon={<Stamp size={18} />}
                      onClick={() => setShowStamps((value) => !value)}
                    />
                    {showStamps && (
                      <StampPicker
                        onSelect={(stampId, emoji) => {
                          onStampSelect?.(stampId, emoji);
                          setShowStamps(false);
                          setShowCompactMore(false);
                        }}
                        onClose={() => setShowStamps(false)}
                      />
                    )}
                  </div>

                  <div className="lc-toolbar-popover-wrap">
                    <CompactSheetButton
                      label="Import"
                      icon={<FolderOpen size={18} />}
                      onClick={() => {
                        onOpenImport?.();
                        setShowCompactMore(false);
                      }}
                    />
                  </div>
                </div>
              </div>

              {isTeacher && (
                <div className="lc-toolbar-sheet-section">
                  <div className="lc-toolbar-sheet-section-title">Teacher panels</div>
                  <div className="lc-toolbar-sheet-grid">
                    <div className="lc-toolbar-popover-wrap">
                      <CompactSheetButton
                        ref={fontBtnRef}
                        label="Font"
                        active={showFontPicker}
                        meta={selectedFontLabel}
                        icon={<Type size={18} />}
                        onClick={handleFontBtnClick}
                      />
                    </div>
                    <CompactSheetButton
                      label="Live Polls"
                      active={isPollPanelOpen}
                      badge={compactPollBadge}
                      icon={<BarChart3 size={18} />}
                      onClick={() => openCompactAnchoredPanel(onTogglePollPanel)}
                    />
                    <CompactSheetButton
                      label="Stencils"
                      active={isStencilPanelOpen}
                      icon={<Shapes size={18} />}
                      onClick={() => openCompactAnchoredPanel(onToggleStencilPanel)}
                    />
                    <CompactSheetButton
                      label="Templates"
                      active={isTemplatePanelOpen}
                      icon={<LayoutTemplate size={18} />}
                      onClick={() => openCompactAnchoredPanel(onToggleTemplatePicker)}
                    />
                    <CompactSheetButton
                      label="Graphs"
                      active={isGraphPanelOpen}
                      icon={<LineChart size={18} />}
                      onClick={() => openCompactAnchoredPanel(onToggleGraphWidget)}
                    />
                  </div>
                </div>
              )}

              {isTeacher && (
                <div className="lc-toolbar-sheet-section">
                  <div className="lc-toolbar-sheet-section-head">
                    <div className="lc-toolbar-sheet-section-title">Board background</div>
                    <div className="lc-toolbar-sheet-section-meta">Current: {currentBackgroundLabel}</div>
                  </div>
                  <div className="lc-toolbar-sheet-inline-picker">
                    <BackgroundPicker
                      current={backgroundType}
                      onChange={(nextBackground) => {
                        onBgChange?.(nextBackground);
                        setShowCompactMore(false);
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="lc-toolbar-sheet-section">
                <div className="lc-toolbar-sheet-section-title">Canvas actions</div>
                <div className="lc-toolbar-sheet-grid">
                  <CompactSheetButton
                    label="Zoom In"
                    icon={<ZoomIn size={18} />}
                    onClick={() => {
                      onZoomIn?.();
                      setShowCompactMore(false);
                    }}
                  />
                  <CompactSheetButton
                    label="Zoom Out"
                    icon={<ZoomOut size={18} />}
                    onClick={() => {
                      onZoomOut?.();
                      setShowCompactMore(false);
                    }}
                  />
                  <CompactSheetButton
                    label="Clear"
                    icon={<Trash2 size={18} />}
                    onClick={() => {
                      onClear?.();
                      setShowCompactMore(false);
                    }}
                  />
                  {!isTeacher && (
                    <CompactSheetButton
                      label="Raise Hand"
                      icon={<Hand size={18} />}
                      onClick={() => {
                        onRaiseHand?.();
                        setShowCompactMore(false);
                      }}
                    />
                  )}
                </div>
              </div>
          </MobileSheetPortal>
        )}

        {showHighlighterMode && tool === 'highlight' && createPortal(
          <div
            id="highlighter-mode-dropdown"
            className="lc-laser-mode-picker"
            style={{ position: 'fixed', top: highlighterModePos.top, left: highlighterModePos.left }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lc-laser-mode-header">Highlighter</div>
            <div className="lc-mode-toggle-row">
              <div className="lc-laser-mode-info">
                <span className="lc-laser-mode-label">Draw Straight Line</span>
                <span className="lc-laser-mode-desc">Keep the cursor constrained to a straight highlight while dragging.</span>
              </div>
              <button
                type="button"
                className={`toggle-switch ${isStraightLineHighlighter ? 'active' : ''}`}
                aria-pressed={isStraightLineHighlighter}
                title={`Draw Straight Line ${isStraightLineHighlighter ? 'on' : 'off'}`}
                onClick={(event) => {
                  event.stopPropagation();
                  onHighlighterModeChange?.(isStraightLineHighlighter ? 'freehand' : STRAIGHT_LINE_HIGHLIGHTER_MODE);
                }}
              />
            </div>
          </div>,
          document.body
        )}

        {showEraserMode && tool === 'eraser' && createPortal(
          <div
            id="eraser-mode-dropdown"
            className="lc-laser-mode-picker"
            style={{ position: 'fixed', top: eraserModePos.top, left: eraserModePos.left }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lc-laser-mode-header">Eraser Mode</div>
            {ERASER_MODES.map((mode) => (
              <button
                key={mode.id}
                className={`lc-laser-mode-option ${eraserMode === mode.id ? 'lc-laser-mode-option--active' : ''}`}
                onClick={(event) => {
                  event.stopPropagation();
                  onEraserModeChange?.(mode.id);
                  setShowEraserMode(false);
                }}
              >
                <span className="lc-laser-mode-icon">{mode.shortLabel}</span>
                <div className="lc-laser-mode-info">
                  <span className="lc-laser-mode-label">{mode.label}</span>
                  <span className="lc-laser-mode-desc">{mode.description}</span>
                </div>
              </button>
            ))}
          </div>,
          document.body
        )}

        {showLaserMode && tool === 'laser' && createPortal(
          <div
            id="laser-mode-dropdown"
            className="lc-laser-mode-picker"
            style={{ position: 'fixed', top: laserModePos.top, left: laserModePos.left }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lc-laser-mode-header">Laser Mode</div>
            {LASER_MODES.map((mode) => (
              <button
                key={mode.id}
                className={`lc-laser-mode-option ${laserMode === mode.id ? 'lc-laser-mode-option--active' : ''}`}
                onClick={(event) => {
                  event.stopPropagation();
                  onLaserModeChange?.(mode.id);
                  setShowLaserMode(false);
                }}
              >
                <span className="lc-laser-mode-icon">{mode.id === 'dot' ? '●' : '✦'}</span>
                <div className="lc-laser-mode-info">
                  <span className="lc-laser-mode-label">{mode.label}</span>
                  <span className="lc-laser-mode-desc">{mode.description}</span>
                </div>
              </button>
            ))}
          </div>,
          document.body
        )}

        {showShapes && createPortal(
          <div
            className="lc-shape-dropdown"
            style={{ position: 'fixed', top: shapeDropdownPos.top, left: shapeDropdownPos.left }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {shapeTools.map((shapeTool) => {
              const Icon = shapeTool.icon;
              return (
                <button
                  key={shapeTool.id}
                  className={`lc-shape-dropdown-item ${tool === shapeTool.id ? 'lc-shape-dropdown-item--active' : ''}`}
                  onClick={() => { handleCompactToolChange(shapeTool.id); setShowShapes(false); }}
                  title={shapeTool.label}
                >
                  <Icon size={16} />
                  <span>{shapeTool.label}</span>
                </button>
              );
            })}
          </div>,
          document.body
        )}

        {showDiagram && createPortal(
          <div
            className="lc-shape-dropdown"
            style={{ position: 'fixed', top: diagramDropdownPos.top, left: diagramDropdownPos.left }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {diagramTools.map((diagramTool) => {
              const Icon = diagramTool.icon;
              return (
                <button
                  key={diagramTool.id}
                  className={`lc-shape-dropdown-item ${tool === diagramTool.id ? 'lc-shape-dropdown-item--active' : ''}`}
                  onClick={() => { handleCompactToolChange(diagramTool.id); setShowDiagram(false); }}
                  title={diagramTool.label}
                >
                  <Icon size={16} />
                  <span>{diagramTool.label}</span>
                </button>
              );
            })}
          </div>,
          document.body
        )}

        {showFontPicker && createPortal(
          <FontPicker
            currentFont={textFont?.fontFamily}
            currentSize={textFont?.fontSize}
            currentWeight={textFont?.fontWeight}
            currentColor={color}
            currentAlign={textFont?.textAlign}
            isUnderline={textFont?.textDecoration === 'underline'}
            isItalic={textFont?.fontStyle === 'italic'}
            onChange={(settings) => {
              onFontChange?.(settings);
            }}
            style={{ position: 'fixed', top: fontPickerPos.top, left: fontPickerPos.left, transform: 'none' }}
            onClose={() => setShowFontPicker(false)}
          />,
          document.body
        )}

        {showWidths && createPortal(
          <div
            id="lc-width-dropdown"
            className="lc-width-dropdown"
            style={{ top: widthDropdownPos.top, left: widthDropdownPos.left }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {STROKE_WIDTHS.map((width) => (
              <button
                key={width}
                className={`lc-width-dropdown-item ${strokeWidth === width ? 'lc-width-dropdown-item--active' : ''}`}
                onClick={() => { onStrokeWidthChange?.(width); setShowWidths(false); }}
                title={`${width}px`}
              >
                <span className="lc-width-dropdown-preview">
                  <span style={{ width: Math.min(width * 2, 32), height: width, borderRadius: 999, background: color, display: 'block' }} />
                </span>
                <span className="lc-width-dropdown-label">{width}px</span>
              </button>
            ))}
          </div>,
          document.body
        )}

        {showColors && createPortal(
          <div
            id="lc-color-grid-dropdown"
            className="lc-color-dropdown"
            style={{ top: colorDropdownPos.top, left: colorDropdownPos.left }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {COLORS.map((swatch) => (
              <button
                key={swatch}
                className={`lc-color-swatch ${color === swatch ? 'lc-color-swatch--active' : ''}`}
                style={{ background: swatch }}
                onClick={() => { onColorChange?.(swatch); setShowColors(false); }}
                title={COLOR_NAMES[swatch] || swatch}
              />
            ))}
          </div>,
          document.body
        )}
      </>
    );
  }

  return (
    <div className="lc-toolbar card" role="toolbar" aria-label="Whiteboard tools">
      {/* Drawing tools */}
      <div className="lc-toolbar-group">
        {drawTools.map((t) => {
          if (t.id === 'highlight') {
            const Icon = t.icon;
            const active = tool === t.id;

            return (
              <div key={t.id} className="lc-toolbar-popover-wrap" ref={highlighterBtnRef}>
                <button
                  className={`lc-tool-btn ${active ? 'lc-tool-btn--active' : ''}`}
                  title={getToolTitle(t.label, t.id, active && isStraightLineHighlighter ? ' - Draw Straight Line on' : '')}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!active) {
                      onToolChange?.('highlight');
                      setShowHighlighterMode(false);
                    } else {
                      handleHighlighterBtnClick();
                    }
                  }}
                >
                  <Icon size={18} />
                  {active && isStraightLineHighlighter && <span className="lc-laser-mode-indicator">SL</span>}
                </button>
                {showHighlighterMode && active && createPortal(
                  <div
                    id="highlighter-mode-dropdown"
                    className="lc-laser-mode-picker"
                    style={{ position: 'fixed', top: highlighterModePos.top, left: highlighterModePos.left }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="lc-laser-mode-header">Highlighter</div>
                    <div className="lc-mode-toggle-row">
                      <div className="lc-laser-mode-info">
                        <span className="lc-laser-mode-label">Draw Straight Line</span>
                        <span className="lc-laser-mode-desc">Keep the cursor constrained to a straight highlight while dragging.</span>
                      </div>
                      <button
                        type="button"
                        className={`toggle-switch ${isStraightLineHighlighter ? 'active' : ''}`}
                        aria-pressed={isStraightLineHighlighter}
                        title={`Draw Straight Line ${isStraightLineHighlighter ? 'on' : 'off'}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          onHighlighterModeChange?.(isStraightLineHighlighter ? 'freehand' : STRAIGHT_LINE_HIGHLIGHTER_MODE);
                        }}
                      />
                    </div>
                  </div>,
                  document.body
                )}
              </div>
            );
          }

          if (t.id !== 'eraser') return renderToolBtn(t);

          const Icon = t.icon;
          const active = tool === t.id;

          return (
            <div key={t.id} className="lc-toolbar-popover-wrap" ref={eraserBtnRef}>
              <button
                className={`lc-tool-btn ${active ? 'lc-tool-btn--active' : ''}`}
                title={getToolTitle(t.label, t.id, active ? ` - ${activeEraserMode.label}` : '')}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!active) {
                    onToolChange?.('eraser');
                    setShowEraserMode(false);
                  } else {
                    handleEraserBtnClick();
                  }
                }}
              >
                <Icon size={18} />
                {active && <span className="lc-laser-mode-indicator">{activeEraserMode.shortLabel}</span>}
              </button>
              {showEraserMode && active && createPortal(
                <div
                  id="eraser-mode-dropdown"
                  className="lc-laser-mode-picker"
                  style={{ position: 'fixed', top: eraserModePos.top, left: eraserModePos.left }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="lc-laser-mode-header">Eraser Mode</div>
                  {ERASER_MODES.map((mode) => (
                    <button
                      key={mode.id}
                      className={`lc-laser-mode-option ${eraserMode === mode.id ? 'lc-laser-mode-option--active' : ''}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        onEraserModeChange?.(mode.id);
                        setShowEraserMode(false);
                      }}
                    >
                      <span className="lc-laser-mode-icon">{mode.shortLabel}</span>
                      <div className="lc-laser-mode-info">
                        <span className="lc-laser-mode-label">{mode.label}</span>
                        <span className="lc-laser-mode-desc">{mode.description}</span>
                      </div>
                    </button>
                  ))}
                </div>,
                document.body
              )}
            </div>
          );
        })}
      </div>
      <div className="lc-toolbar-divider" />

      {/* Teaching interaction tools */}
      {isTeacher && (
        <>
          <div className="lc-toolbar-group">
            {interactTools.map(t => {
              const Icon = t.icon;
              const active = tool === t.id;
              // Special handling for laser - shows mode picker on second click
              if (t.id === 'laser') {
                return (
                  <div key={t.id} className="lc-toolbar-popover-wrap" ref={laserBtnRef}>
                    <button
                      className={`lc-tool-btn ${active ? 'lc-tool-btn--active' : ''}`}
                      title={getToolTitle(t.label, t.id, active ? ' - click to change mode' : '')}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!active) {
                          // First click: select the laser tool
                          onToolChange?.('laser');
                          setShowLaserMode(false);
                        } else {
                          // Second click (already active): toggle mode picker
                          if (!showLaserMode && laserBtnRef.current) {
                            const rect = laserBtnRef.current.getBoundingClientRect();
                            setLaserModePos(clampDropdownPos(rect, 160, 100));
                          }
                          setShowLaserMode(prev => !prev);
                        }
                      }}
                    >
                      <Icon size={18} />
                      {active && <span className="lc-laser-mode-indicator">{laserMode === 'trail' ? '✦' : '●'}</span>}
                    </button>
                    {showLaserMode && active && createPortal(
                      <div
                        id="laser-mode-dropdown"
                        className="lc-laser-mode-picker"
                        style={{ position: 'fixed', top: laserModePos.top, left: laserModePos.left }}
                        onClick={e => e.stopPropagation()}
                      >
                        <div className="lc-laser-mode-header">Laser Mode</div>
                        {LASER_MODES.map(mode => (
                          <button
                            key={mode.id}
                            className={`lc-laser-mode-option ${laserMode === mode.id ? 'lc-laser-mode-option--active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onLaserModeChange?.(mode.id);
                              setShowLaserMode(false);
                            }}
                          >
                            <span className="lc-laser-mode-icon">
                              {mode.id === 'dot' ? '●' : '✦'}
                            </span>
                            <div className="lc-laser-mode-info">
                              <span className="lc-laser-mode-label">{mode.label}</span>
                              <span className="lc-laser-mode-desc">{mode.description}</span>
                            </div>
                          </button>
                        ))}
                      </div>,
                      document.body
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={t.id}
                  className={`lc-tool-btn ${active ? 'lc-tool-btn--active' : ''}`}
                  title={t.label}
                  onClick={() => onToolChange?.(t.id)}
                >
                  <Icon size={18} />
                </button>
              );
            })}
          </div>
          <div className="lc-toolbar-divider" />
        </>
      )}

      {/* Shapes — dropdown */}
      <div ref={shapeBtnRef} className="lc-toolbar-popover-wrap">
        <button
          className={`lc-tool-btn ${activeShape ? 'lc-tool-btn--active' : ''}`}
          title={activeShape ? getToolTitle(activeShape.label, activeShape.id) : 'Shapes (1-8)'}
          onClick={handleShapesBtnClick}
        >
          <ShapeIcon size={18} />
          <span className="lc-shape-chevron">▾</span>
        </button>
        {showShapes && createPortal(
          <div
            className="lc-shape-dropdown"
            style={{ position: 'fixed', top: shapeDropdownPos.top, left: shapeDropdownPos.left }}
            onMouseDown={e => e.stopPropagation()}
          >
            {shapeTools.map(t => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  className={`lc-shape-dropdown-item ${tool === t.id ? 'lc-shape-dropdown-item--active' : ''}`}
                  onClick={() => { onToolChange?.(t.id); setShowShapes(false); }}
                  title={t.label}
                >
                  <Icon size={16} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>,
          document.body
        )}
      </div>
      <div className="lc-toolbar-divider" />

      {/* Flowchart / Diagram — dropdown */}
      <div ref={diagramBtnRef} className="lc-toolbar-popover-wrap">
        <button
          className={`lc-tool-btn ${activeDiagram ? 'lc-tool-btn--active' : ''}`}
          title={activeDiagram ? getToolTitle(activeDiagram.label, activeDiagram.id) : 'Diagram (Shift+Q/W/A/S)'}
          onClick={handleDiagramBtnClick}
        >
          <DiagramIcon size={18} />
          <span className="lc-shape-chevron">▾</span>
        </button>
        {showDiagram && createPortal(
          <div
            className="lc-shape-dropdown"
            style={{ position: 'fixed', top: diagramDropdownPos.top, left: diagramDropdownPos.left }}
            onMouseDown={e => e.stopPropagation()}
          >
            {diagramTools.map(t => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  className={`lc-shape-dropdown-item ${tool === t.id ? 'lc-shape-dropdown-item--active' : ''}`}
                  onClick={() => { onToolChange?.(t.id); setShowDiagram(false); }}
                  title={t.label}
                >
                  <Icon size={16} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>,
          document.body
        )}
      </div>
      <div className="lc-toolbar-divider" />

      {/* Text tools */}
      <div className="lc-toolbar-group">
        {textTools.map(renderToolBtn)}
      </div>
      <div className="lc-toolbar-divider" />

      {/* Import media button */}
      <div className="lc-toolbar-group">
        <button
          className="lc-tool-btn"
          title="Import image or PDF"
          onClick={() => onOpenImport?.()}
        >
          <FolderOpen size={18} />
        </button>
      </div>
      <div className="lc-toolbar-divider" />

      {/* Stamp picker */}
      <div className="lc-toolbar-popover-wrap">
        {renderToolBtn(TOOLS.find(t => t.id === 'stamp'))}
        {showStamps && (
          <StampPicker
            onSelect={onStampSelect}
            onClose={() => setShowStamps(false)}
          />
        )}
      </div>
      <div className="lc-toolbar-divider" />

      {/* Undo / Redo / Clear */}
      <div className="lc-toolbar-group">
        <button className="lc-tool-btn" onClick={onUndo} disabled={!canUndo} title="Undo (Ctrl+Z)"><Undo2 size={18} /></button>
        <button className="lc-tool-btn" onClick={onRedo} disabled={!canRedo} title="Redo (Ctrl+Y)"><Redo2 size={18} /></button>
        <button className="lc-tool-btn" onClick={onClear} title="Clear canvas"><Trash2 size={18} /></button>
      </div>
      <div className="lc-toolbar-divider" />

      {/* Zoom */}
      <div className="lc-toolbar-group">
        <button className="lc-tool-btn" onClick={onZoomIn}  title="Zoom in"><ZoomIn  size={18} /></button>
        <button className="lc-tool-btn" onClick={onZoomOut} title="Zoom out"><ZoomOut size={18} /></button>
      </div>

      {/* Spacer */}
      <div className="lc-toolbar-spacer" />

      {/* Student raise hand */}
      {!isTeacher && (
        <button className="lc-tool-btn lc-raise-btn" onClick={onRaiseHand} title="Raise hand">
          <Hand size={18} />
          <span>Raise Hand</span>
        </button>
      )}

      {/* ── Row break: pen settings on second row on tablet/mobile ── */}
      <div className="lc-toolbar-break" />

      {/* Color picker trigger */}
      <div className="lc-toolbar-group">
        <button
          ref={colorBtnRef}
          className={`lc-tool-btn lc-color-trigger ${showColors ? 'lc-tool-btn--active' : ''}`}
          title="Color"
          onClick={handleColorBtnClick}
        >
          <span className="lc-color-trigger-dot" style={{ background: color }} />
        </button>
      </div>
      <div className="lc-toolbar-divider" />

      {/* Stroke width trigger */}
      <div className="lc-toolbar-group">
        <button
          ref={widthBtnRef}
          className={`lc-tool-btn lc-width-trigger ${showWidths ? 'lc-tool-btn--active' : ''}`}
          title={`Size: ${strokeWidth}px`}
          onClick={handleWidthBtnClick}
        >
          <span
            className="lc-width-trigger-dot"
            style={{ width: Math.min(strokeWidth, 16), height: Math.min(strokeWidth, 16), background: color }}
          />
        </button>
      </div>
      <div className="lc-toolbar-divider" />

      {/* Font picker */}
      {isTeacher && (
        <div className="lc-toolbar-popover-wrap">
          <button
            ref={fontBtnRef}
            className={`lc-tool-btn lc-tool-btn--font ${showFontPicker ? 'lc-tool-btn--active' : ''}`}
            title={`Font settings: ${selectedFontLabel}`}
            onClick={handleFontBtnClick}
            style={{ fontFamily: textFont?.fontFamily || 'Inter' }}
          >
            <Type size={18} />
            <span className="lc-font-preview-text" style={{
              fontFamily: textFont?.fontFamily || 'Inter',
              fontSize: '10px',
              fontWeight: textFont?.fontWeight || 'normal',
            }}>Aa</span>
            <span className="lc-font-trigger-name">{selectedFontLabel}</span>
          </button>
          {showFontPicker && createPortal(
            <FontPicker
              currentFont={textFont?.fontFamily}
              currentSize={textFont?.fontSize}
              currentWeight={textFont?.fontWeight}
              currentColor={color}
              currentAlign={textFont?.textAlign}
              isUnderline={textFont?.textDecoration === 'underline'}
              isItalic={textFont?.fontStyle === 'italic'}
              onChange={(settings) => {
                onFontChange?.(settings);
              }}
              style={{ position: 'fixed', top: fontPickerPos.top, left: fontPickerPos.left, transform: 'none' }}
              onClose={() => setShowFontPicker(false)}
            />,
            document.body
          )}
        </div>
      )}
      {isTeacher && <div className="lc-toolbar-divider" />}

      {/* Background picker */}
      {isTeacher && (
        <div className="lc-toolbar-popover-wrap">
          <button
            className={`lc-tool-btn ${showBg ? 'lc-tool-btn--active' : ''}`}
            title="Background"
            onClick={() => setShowBg(v => !v)}
          >
            <span className="lc-bg-icon" data-bg={backgroundType} />
          </button>
          {showBg && (
            <BackgroundPicker
              current={backgroundType}
              onChange={t => { onBgChange?.(t); setShowBg(false); }}
            />
          )}
        </div>
      )}

      {/* Live Polls / Stencils / Templates / Graph Plotter — next to Background */}
      {isTeacher && (
        <>
          <div className="lc-toolbar-divider" />
          <div className="lc-toolbar-group">
            <button
              className={`lc-tool-btn lc-dropdown-trigger ${isPollPanelOpen ? 'lc-tool-btn--active' : ''}`}
              onClick={(e) => onTogglePollPanel?.(e.currentTarget.getBoundingClientRect())}
              title="Live Polls"
            >
              <BarChart3 size={18} />
              {activePollCount > 0 && <span className="lc-tool-badge">{activePollCount}</span>}
            </button>
            <button
              className={`lc-tool-btn lc-dropdown-trigger ${isStencilPanelOpen ? 'lc-tool-btn--active' : ''}`}
              onClick={(e) => onToggleStencilPanel?.(e.currentTarget.getBoundingClientRect())}
              title="Stencils"
            >
              <Shapes size={18} />
            </button>
            <button
              className={`lc-tool-btn lc-dropdown-trigger ${isTemplatePanelOpen ? 'lc-tool-btn--active' : ''}`}
              onClick={(e) => onToggleTemplatePicker?.(e.currentTarget.getBoundingClientRect())}
              title="Templates"
            >
              <LayoutTemplate size={18} />
            </button>
            <button
              className={`lc-tool-btn lc-dropdown-trigger ${isGraphPanelOpen ? 'lc-tool-btn--active' : ''}`}
              onClick={(e) => onToggleGraphWidget?.(e.currentTarget.getBoundingClientRect())}
              title="Graph Plotter"
            >
              <LineChart size={18} />
            </button>
          </div>
        </>
      )}
      {/* Width dropdown portal */}
      {showWidths && createPortal(
        <div
          id="lc-width-dropdown"
          className="lc-width-dropdown"
          style={{ top: widthDropdownPos.top, left: widthDropdownPos.left }}
          onMouseDown={e => e.stopPropagation()}
        >
          {STROKE_WIDTHS.map(w => (
            <button
              key={w}
              className={`lc-width-dropdown-item ${strokeWidth === w ? 'lc-width-dropdown-item--active' : ''}`}
              onClick={() => { onStrokeWidthChange?.(w); setShowWidths(false); }}
              title={`${w}px`}
            >
              <span className="lc-width-dropdown-preview">
                <span style={{ width: Math.min(w * 2, 32), height: w, borderRadius: 999, background: color, display: 'block' }} />
              </span>
              <span className="lc-width-dropdown-label">{w}px</span>
            </button>
          ))}
        </div>,
        document.body
      )}
      {/* Color grid dropdown portal */}
      {showColors && createPortal(
        <div
          id="lc-color-grid-dropdown"
          className="lc-color-dropdown"
          style={{ top: colorDropdownPos.top, left: colorDropdownPos.left }}
          onMouseDown={e => e.stopPropagation()}
        >
          {COLORS.map(c => (
            <button
              key={c}
              className={`lc-color-swatch ${color === c ? 'lc-color-swatch--active' : ''}`}
              style={{ background: c }}
              onClick={() => { onColorChange?.(c); setShowColors(false); }}
              title={COLOR_NAMES[c] || c}
            />
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}
