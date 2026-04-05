import { useEffect, useState } from 'react';

const TRAIL_TTL_MS = 900;

export default function LaserPointer({ active, containerRef, color = '#ef4444' }) {
    const [pointer, setPointer] = useState(null);
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        if (!active) return undefined;

        const container = containerRef.current;
        if (!container) return undefined;

        const toLocalPoint = (event) => {
            const rect = container.getBoundingClientRect();
            return {
                x: event.clientX - rect.left + container.scrollLeft,
                y: event.clientY - rect.top + container.scrollTop,
            };
        };

        const handlePointerMove = (event) => {
            const nextPoint = toLocalPoint(event);
            const id = crypto.randomUUID();
            setPointer({ ...nextPoint, visible: true });
            setTrail((items) => [...items, { id, ...nextPoint, kind: 'trail' }].slice(-10));
            window.setTimeout(() => {
                setTrail((items) => items.filter((item) => item.id !== id));
            }, TRAIL_TTL_MS);
        };

        const handlePointerDown = (event) => {
            const nextPoint = toLocalPoint(event);
            const id = crypto.randomUUID();
            setPointer({ ...nextPoint, visible: true });
            setTrail((items) => [...items, { id, ...nextPoint, kind: 'pulse' }].slice(-10));
            window.setTimeout(() => {
                setTrail((items) => items.filter((item) => item.id !== id));
            }, TRAIL_TTL_MS);
        };

        const handlePointerLeave = () => {
            setPointer(null);
        };

        container.addEventListener('pointermove', handlePointerMove, { passive: true });
        container.addEventListener('pointerdown', handlePointerDown, { passive: true });
        container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

        return () => {
            container.removeEventListener('pointermove', handlePointerMove);
            container.removeEventListener('pointerdown', handlePointerDown);
            container.removeEventListener('pointerleave', handlePointerLeave);
            setPointer(null);
            setTrail([]);
        };
    }, [active, containerRef]);

    if (!active) return null;

    return (
        <div className="note-laser-layer" aria-hidden="true">
            {trail.map((item) => (
                <span
                    key={item.id}
                    className={`note-laser-trail note-laser-trail--${item.kind}`}
                    style={{
                        '--laser-color': color,
                        left: `${item.x}px`,
                        top: `${item.y}px`,
                    }}
                />
            ))}
            {pointer ? (
                <span
                    className="note-laser-dot"
                    style={{
                        '--laser-color': color,
                        left: `${pointer.x}px`,
                        top: `${pointer.y}px`,
                    }}
                />
            ) : null}
        </div>
    );
}