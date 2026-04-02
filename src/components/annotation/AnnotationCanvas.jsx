import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { Canvas as FabricCanvas, PencilBrush, IText, Rect, Ellipse, Line, util } from 'fabric';

function hexToRgba(hex, alpha) {
    if (!hex || !hex.startsWith('#') || hex.length < 7) return hex;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const AnnotationCanvas = forwardRef(function AnnotationCanvas(
    { width, height, activeTool, toolOptions, onCanvasChange, onStrokeEvent },
    ref
) {
    const canvasElRef = useRef(null);
    const fabricRef = useRef(null);

    // Refs to avoid stale closures in fabric event handlers
    const activeToolRef = useRef(activeTool);
    const toolOptsRef = useRef(toolOptions);
    const drawStateRef = useRef({ isDown: false, origX: 0, origY: 0, shape: null, prevState: null });
    const isLoadingRef = useRef(false);
    const lastStateRef = useRef(null);
    const onStrokeEventRef = useRef(onStrokeEvent);

    useEffect(() => { activeToolRef.current = activeTool; }, [activeTool]);
    useEffect(() => { toolOptsRef.current = toolOptions; }, [toolOptions]);
    useEffect(() => { onStrokeEventRef.current = onStrokeEvent; }, [onStrokeEvent]);

    // Initialise fabric canvas once on mount
    useEffect(() => {
        if (!canvasElRef.current) return;

        const fc = new FabricCanvas(canvasElRef.current, {
            width: width || 600,
            height: height || 800,
            enableRetinaScaling: true,
            selection: false,
        });
        fabricRef.current = fc;
        lastStateRef.current = fc.toJSON();

        // ── Undo tracking ──────────────────────────────────────────────
        const trackChange = () => {
            if (isLoadingRef.current) return;
            onCanvasChange?.({ prevState: lastStateRef.current });
            lastStateRef.current = fc.toJSON(['data']);
        };
        fc.on('path:created', (e) => {
            if (isLoadingRef.current) return;
            const path = e.path;
            if (path && !path.data?.strokeClientId) {
                path.data = { ...path.data, strokeClientId: crypto.randomUUID() };
            }
            onCanvasChange?.({ prevState: lastStateRef.current });
            lastStateRef.current = fc.toJSON(['data']);
            if (path?.data?.strokeClientId) {
                onStrokeEventRef.current?.('created', {
                    clientId: path.data.strokeClientId,
                    json: JSON.stringify(path.toObject(['data'])),
                });
            }
        });
        fc.on('object:modified', (e) => {
            if (isLoadingRef.current) return;
            const obj = e.target;
            onCanvasChange?.({ prevState: lastStateRef.current });
            lastStateRef.current = fc.toJSON(['data']);
            if (obj?.data?.strokeClientId) {
                onStrokeEventRef.current?.('modified', {
                    clientId: obj.data.strokeClientId,
                    json: JSON.stringify(obj.toObject(['data'])),
                });
            }
        });
        fc.on('object:removed', trackChange);

        // ── Shape / text / eraser drawing ──────────────────────────────
        fc.on('mouse:down', (opt) => {
            const tool = activeToolRef.current;
            const opts = toolOptsRef.current;
            const pointer = fc.getPointer(opt.e);
            const ds = drawStateRef.current;

            if (tool === 'eraser') {
                if (opt.target) {
                    const prev = lastStateRef.current;
                    const clientId = opt.target?.data?.strokeClientId;
                    fc.remove(opt.target);
                    fc.renderAll();
                    onCanvasChange?.({ prevState: prev });
                    lastStateRef.current = fc.toJSON(['data']);
                    if (clientId) {
                        onStrokeEventRef.current?.('deleted', { clientId });
                    }
                }
                return;
            }

            if (tool === 'text') {
                const prev = lastStateRef.current;
                const strokeClientId = crypto.randomUUID();
                const text = new IText('', {
                    left: pointer.x,
                    top: pointer.y,
                    fontSize: 18,
                    fill: opts.color,
                    fontFamily: 'Inter, system-ui, sans-serif',
                    selectable: true,
                    data: { strokeClientId },
                });
                fc.add(text);
                fc.setActiveObject(text);
                text.enterEditing();
                text.once('editing:exited', () => {
                    if (!text.text.trim()) {
                        fc.remove(text);
                    } else {
                        onCanvasChange?.({ prevState: prev });
                        lastStateRef.current = fc.toJSON(['data']);
                        onStrokeEventRef.current?.('created', {
                            clientId: strokeClientId,
                            json: JSON.stringify(text.toObject(['data'])),
                        });
                    }
                    fc.renderAll();
                });
                return;
            }

            if (['rect', 'circle', 'line'].includes(tool)) {
                ds.isDown = true;
                ds.origX = pointer.x;
                ds.origY = pointer.y;
                ds.prevState = lastStateRef.current;

                let shape = null;
                const strokeProps = { stroke: opts.color, strokeWidth: opts.width, selectable: false, evented: false };

                if (tool === 'rect') {
                    shape = new Rect({ left: pointer.x, top: pointer.y, width: 0, height: 0, fill: 'transparent', ...strokeProps });
                } else if (tool === 'circle') {
                    shape = new Ellipse({ left: pointer.x, top: pointer.y, rx: 0, ry: 0, fill: 'transparent', ...strokeProps });
                } else if (tool === 'line') {
                    shape = new Line([pointer.x, pointer.y, pointer.x, pointer.y], strokeProps);
                }
                ds.shape = shape;
                if (shape) fc.add(shape);
            }
        });

        fc.on('mouse:move', (opt) => {
            const ds = drawStateRef.current;
            if (!ds.isDown || !ds.shape) return;
            const tool = activeToolRef.current;
            const pointer = fc.getPointer(opt.e);

            if (tool === 'rect') {
                const w = pointer.x - ds.origX;
                const h = pointer.y - ds.origY;
                ds.shape.set({
                    left: w < 0 ? pointer.x : ds.origX,
                    top: h < 0 ? pointer.y : ds.origY,
                    width: Math.abs(w),
                    height: Math.abs(h),
                });
            } else if (tool === 'circle') {
                const rx = Math.abs(pointer.x - ds.origX) / 2;
                const ry = Math.abs(pointer.y - ds.origY) / 2;
                ds.shape.set({
                    left: Math.min(pointer.x, ds.origX),
                    top: Math.min(pointer.y, ds.origY),
                    rx, ry,
                });
            } else if (tool === 'line') {
                ds.shape.set({ x2: pointer.x, y2: pointer.y });
            }
            fc.renderAll();
        });

        fc.on('mouse:up', () => {
            const ds = drawStateRef.current;
            if (!ds.isDown) return;
            if (ds.shape) {
                ds.shape.set({ selectable: true, evented: true });
                // Discard shapes that are effectively just a click
                const s = ds.shape;
                const tooSmall =
                    (s.type === 'rect' && (s.width < 3 || s.height < 3)) ||
                    (s.type === 'ellipse' && (s.rx < 3 || s.ry < 3)) ||
                    (s.type === 'line' && Math.hypot((s.x2 - s.x1), (s.y2 - s.y1)) < 3);

                if (tooSmall) {
                    fc.remove(ds.shape);
                } else {
                    const clientId = crypto.randomUUID();
                    ds.shape.data = { strokeClientId: clientId };
                    onCanvasChange?.({ prevState: ds.prevState });
                    lastStateRef.current = fc.toJSON(['data']);
                    onStrokeEventRef.current?.('created', {
                        clientId,
                        json: JSON.stringify(ds.shape.toObject(['data'])),
                    });
                }
            }
            ds.isDown = false;
            ds.shape = null;
            ds.prevState = null;
            fc.renderAll();
        });

        return () => {
            fc.dispose();
            fabricRef.current = null;
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Resize when PDF dimensions change
    useEffect(() => {
        const fc = fabricRef.current;
        if (!fc || !width || !height) return;
        fc.setDimensions({ width, height });
        fc.renderAll();
    }, [width, height]);

    // Switch drawing mode when tool changes
    useEffect(() => {
        const fc = fabricRef.current;
        if (!fc) return;

        if (activeTool === 'pen') {
            fc.isDrawingMode = true;
            fc.selection = false;
            const brush = new PencilBrush(fc);
            brush.color = toolOptions.color;
            brush.width = toolOptions.width;
            fc.freeDrawingBrush = brush;
        } else if (activeTool === 'highlighter') {
            fc.isDrawingMode = true;
            fc.selection = false;
            const brush = new PencilBrush(fc);
            brush.color = hexToRgba(toolOptions.color, 0.4);
            brush.width = 14;
            fc.freeDrawingBrush = brush;
        } else {
            fc.isDrawingMode = false;
            fc.selection = activeTool === 'select';
        }
    }, [activeTool, toolOptions]);

    // Imperative API exposed to parent via ref
    useImperativeHandle(ref, () => ({
        getCanvas: () => fabricRef.current,
        toJSON: () => fabricRef.current?.toJSON(['data']) ?? null,
        loadFromJSON: async (json) => {
            const fc = fabricRef.current;
            if (!fc) return;
            isLoadingRef.current = true;
            fc.clear();
            if (json && json.objects) {
                await fc.loadFromJSON(json);
            }
            fc.renderAll();
            lastStateRef.current = fc.toJSON(['data']);
            isLoadingRef.current = false;
        },
        clear: () => {
            const fc = fabricRef.current;
            if (!fc) return;
            fc.clear();
            fc.renderAll();
            lastStateRef.current = fc.toJSON(['data']);
        },
        applyStrokeDelta: async (type, strokeId, clientId, fabricObjectJson) => {
            const fc = fabricRef.current;
            if (!fc) return;

            if (type === 'created') {
                try {
                    const parsed = JSON.parse(fabricObjectJson);
                    if (!parsed.data) parsed.data = {};
                    if (clientId) parsed.data.strokeClientId = clientId;
                    const [obj] = await util.enlivenObjects([parsed]);
                    if (obj) {
                        obj.set({ selectable: false, evented: false });
                        fc.add(obj);
                    }
                    fc.renderAll();
                } catch (e) {
                    console.warn('applyStrokeDelta: parse error', e);
                }
            } else if (type === 'updated') {
                try {
                    const parsed = JSON.parse(fabricObjectJson);
                    const targetClientId = clientId ?? parsed.data?.strokeClientId;
                    const existing = fc.getObjects().find(o => o.data?.strokeClientId === targetClientId);
                    if (existing) fc.remove(existing);
                    const [obj] = await util.enlivenObjects([parsed]);
                    if (obj) {
                        obj.set({ selectable: false, evented: false });
                        fc.add(obj);
                    }
                    fc.renderAll();
                } catch (e) {
                    console.warn('applyStrokeDelta: update error', e);
                }
            } else if (type === 'deleted') {
                const existing = fc.getObjects().find(o => o.data?.strokeClientId === clientId);
                if (existing) {
                    fc.remove(existing);
                    fc.renderAll();
                }
            }
        },
    }), []);

    return (
        <div className="annotate-canvas-overlay">
            <canvas
                ref={canvasElRef}
                className={`annotate-canvas annotate-canvas--${activeTool}`}
            />
        </div>
    );
});

export default AnnotationCanvas;
