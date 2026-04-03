import { useState, useRef, useId } from 'react';
import { ChevronRight } from 'lucide-react';
import './Notes.css';

export default function Accordion({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef(null);
    // useId generates a stable, unique id-safe string per component instance (React 18+)
    const uid = useId();
    const triggerId = `accordion-trigger-${uid}`;
    const panelId = `accordion-panel-${uid}`;

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <button
                id={triggerId}
                className="accordion-trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={panelId}
            >
                <ChevronRight size={18} className="accordion-chevron" aria-hidden="true" />
                <span className="accordion-title">{title}</span>
            </button>
            <div
                id={panelId}
                className="accordion-content"
                role="region"
                aria-labelledby={triggerId}
                ref={contentRef}
                style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 300ms ease-out, opacity 300ms ease-out',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div className="accordion-body" style={{ overflow: 'hidden' }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
