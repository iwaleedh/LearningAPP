import { useEffect, useRef, useState } from 'react';
import AnnotationCanvas from '../annotation/AnnotationCanvas.jsx';
import LaserPointer from './LaserPointer.jsx';

export default function NoteAnnotationLayer({
    active,
    activeTool,
    pointerActive,
    toolOptions,
    onCanvasChange,
    setCanvasHandle,
    children,
}) {
    const stageRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return undefined;

        const updateDimensions = () => {
            const rect = stage.getBoundingClientRect();
            setDimensions({
                width: Math.max(1, Math.ceil(rect.width)),
                height: Math.max(1, Math.ceil(stage.scrollHeight)),
            });
        };

        updateDimensions();

        const observer = new ResizeObserver(() => updateDimensions());
        observer.observe(stage);
        Array.from(stage.children).forEach((child) => observer.observe(child));
        window.addEventListener('resize', updateDimensions);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', updateDimensions);
        };
    }, [children]);

    return (
        <div
            ref={stageRef}
            className={`note-annotation-stage ${active ? 'note-annotation-stage--active' : ''}`.trim()}
        >
            <div className="note-annotation-content">{children}</div>

            {active ? (
                <>
                    <div
                        className={[
                            'note-annotation-canvas-shell',
                            activeTool !== 'none' ? 'note-annotation-canvas-shell--interactive' : '',
                        ].filter(Boolean).join(' ')}
                    >
                        <AnnotationCanvas
                            ref={setCanvasHandle}
                            width={dimensions.width}
                            height={dimensions.height}
                            activeTool={activeTool}
                            toolOptions={toolOptions}
                            onCanvasChange={onCanvasChange}
                        />
                    </div>
                    <LaserPointer active={pointerActive} containerRef={stageRef} color={toolOptions.color} />
                </>
            ) : null}
        </div>
    );
}