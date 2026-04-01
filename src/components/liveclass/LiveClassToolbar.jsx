import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Pen, Highlighter, Eraser, Square, Circle, Triangle,
  Lasso, MousePointer, Flashlight, Ruler, Stamp,
  FolderOpen, Hand, Users, BarChart3, Shapes, LayoutTemplate,
  ZoomIn, ZoomOut, Undo2, Redo2, Trash2, Type,
  ArrowRight, Minus, Diamond, Star, Hexagon,
  GitBranch, BoxSelect, PlayCircle, CircleDot, LineChart,
} from 'lucide-react';
import BackgroundPicker from './BackgroundPicker.jsx';
import StampPicker from './StampPicker.jsx';
import FontPicker from './FontPicker.jsx';

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
  '#581c87', '#1d4ed8', '#8b5cf6', '#3b82f6', '#be185d', '#ec4899', '#f472b6', '#e879f9',
];

const STROKE_WIDTHS = [1, 2, 3, 4, 5, 10, 16];

/**
 * LiveClassToolbar — main toolbar for the Live Class canvas.
 *
 * @param {Object} props
 * @param {string}   props.tool           — active tool id
 * @param {string}   props.color          — active color
 * @param {number}   props.strokeWidth
 * @param {string}   props.backgroundType — current paper type
 * @param {boolean}  props.isTeacher
 * @param {number}   props.handCount      — pending hand raises
 * @param {Object}   props.textFont       — current text font settings { fontFamily, fontSize, fontWeight, textDecoration, fontStyle }
 * @param {string}   props.laserMode      — 'dot' or 'trail'
 * @param {Function} props.onToolChange
 * @param {Function} props.onColorChange
 * @param {Function} props.onStrokeWidthChange
 * @param {Function} props.onBgChange
 * @param {Function} props.onFontChange   — (fontSettings) => void
 * @param {Function} props.onLaserModeChange — (mode: 'dot'|'trail') => void
 * @param {Function} props.onStampSelect  — (stampId, emoji) => void
 * @param {Function} props.onOpenImport    — opens Import Media dialog
 * @param {Function} props.onUndo
 * @param {Function} props.onRedo
 * @param {Function} props.onClear
 * @param {Function} props.onZoomIn
 * @param {Function} props.onZoomOut
 * @param {Function} props.onToggleStudentGrid
 * @param {Function} props.onToggleHandPanel
 * @param {Function} props.onRaiseHand
 */
export default function LiveClassToolbar({
  tool,
  color = '#1f2937',
  strokeWidth = 4,
  backgroundType = 'white',
  isTeacher,
  textFont,
  laserMode = 'dot',
  onToolChange,
  onColorChange,
  onStrokeWidthChange,
  onBgChange,
  onFontChange,
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
  const [showBg, setShowBg] = useState(false);
  const [showStamps, setShowStamps] = useState(false);
  const [showFontPicker, setShowFontPicker] = useState(false);
  const [showLaserMode, setShowLaserMode] = useState(false);
  const [showShapes, setShowShapes] = useState(false);
  const [showDiagram, setShowDiagram] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showWidths, setShowWidths] = useState(false);
  const [shapeDropdownPos, setShapeDropdownPos] = useState({ top: 0, left: 0 });
  const [diagramDropdownPos, setDiagramDropdownPos] = useState({ top: 0, left: 0 });
  const [laserModePos, setLaserModePos] = useState({ top: 0, left: 0 });
  const [colorDropdownPos, setColorDropdownPos] = useState({ top: 0, left: 0 });
  const [widthDropdownPos, setWidthDropdownPos] = useState({ top: 0, left: 0 });
  const shapeBtnRef = useRef(null);
  const diagramBtnRef = useRef(null);
  const laserBtnRef = useRef(null);
  const colorBtnRef = useRef(null);
  const widthBtnRef = useRef(null);

  // Close laser mode picker when clicking outside
  useEffect(() => {
    if (!showLaserMode) return;
    const handleClickOutside = (e) => {
      if (laserBtnRef.current && !laserBtnRef.current.contains(e.target)) {
        // Check if click is inside the portal dropdown
        const dropdown = document.getElementById('laser-mode-dropdown');
        if (dropdown && dropdown.contains(e.target)) return;
        setShowLaserMode(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLaserMode]);

  // Close shape dropdown when clicking outside
  useEffect(() => {
    if (!showShapes) return;
    const handleClickOutside = (e) => {
      if (shapeBtnRef.current && !shapeBtnRef.current.contains(e.target)) {
        setShowShapes(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showShapes]);

  // Close diagram dropdown when clicking outside
  useEffect(() => {
    if (!showDiagram) return;
    const handleClickOutside = (e) => {
      if (diagramBtnRef.current && !diagramBtnRef.current.contains(e.target)) {
        setShowDiagram(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDiagram]);

  // Close color dropdown when clicking outside
  useEffect(() => {
    if (!showColors) return;
    const handleClickOutside = (e) => {
      const dropdown = document.getElementById('lc-color-grid-dropdown');
      if (
        colorBtnRef.current && !colorBtnRef.current.contains(e.target) &&
        !(dropdown && dropdown.contains(e.target))
      ) {
        setShowColors(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showColors]);

  const handleColorBtnClick = () => {
    if (!showColors && colorBtnRef.current) {
      const rect = colorBtnRef.current.getBoundingClientRect();
      setColorDropdownPos({ top: rect.bottom + 6, left: rect.left });
    }
    setShowColors(v => !v);
  };

  // Close width dropdown when clicking outside
  useEffect(() => {
    if (!showWidths) return;
    const handleClickOutside = (e) => {
      const dropdown = document.getElementById('lc-width-dropdown');
      if (
        widthBtnRef.current && !widthBtnRef.current.contains(e.target) &&
        !(dropdown && dropdown.contains(e.target))
      ) {
        setShowWidths(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showWidths]);

  const handleWidthBtnClick = () => {
    if (!showWidths && widthBtnRef.current) {
      const rect = widthBtnRef.current.getBoundingClientRect();
      setWidthDropdownPos({ top: rect.bottom + 6, left: rect.left });
    }
    setShowWidths(v => !v);
  };

  const handleShapesBtnClick = () => {
    if (!showShapes && shapeBtnRef.current) {
      const rect = shapeBtnRef.current.getBoundingClientRect();
      setShapeDropdownPos({ top: rect.bottom + 6, left: rect.left });
    }
    setShowShapes(v => !v);
  };

  const handleDiagramBtnClick = () => {
    if (!showDiagram && diagramBtnRef.current) {
      const rect = diagramBtnRef.current.getBoundingClientRect();
      setDiagramDropdownPos({ top: rect.bottom + 6, left: rect.left });
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

  function renderToolBtn(t) {
    const Icon = t.icon;
    const active = tool === t.id;
    return (
      <button
        key={t.id}
        className={`lc-tool-btn ${active ? 'lc-tool-btn--active' : ''}`}
        title={t.label}
        onClick={() => {
          if (t.id === 'stamp') { setShowStamps(v => !v); return; }
          onToolChange?.(t.id);
        }}
      >
        <Icon size={18} />
      </button>
    );
  }

  return (
    <div className="lc-toolbar card">
      {/* Drawing tools */}
      <div className="lc-toolbar-group">
        {drawTools.map(renderToolBtn)}
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
                      title={t.label + (active ? ' (click to change mode)' : '')}
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
                            setLaserModePos({ top: rect.bottom + 6, left: rect.left });
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
          title={activeShape ? activeShape.label : 'Shapes'}
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
          title={activeDiagram ? activeDiagram.label : 'Diagram'}
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
            className={`lc-tool-btn ${showFontPicker ? 'lc-tool-btn--active' : ''}`}
            title="Font settings"
            onClick={() => setShowFontPicker(v => !v)}
            style={{ fontFamily: textFont?.fontFamily || 'Inter' }}
          >
            <Type size={18} />
            <span className="lc-font-preview-text" style={{
              fontFamily: textFont?.fontFamily || 'Inter',
              fontSize: '10px',
              fontWeight: textFont?.fontWeight || 'normal',
            }}>Aa</span>
          </button>
          {showFontPicker && (
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
              onClose={() => setShowFontPicker(false)}
            />
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
              title={c}
            />
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}
