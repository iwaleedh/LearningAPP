import { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import './Notes.css';

export default function Accordion({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [isOpen, children]);

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <button
                className="accordion-trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <ChevronRight size={18} className="accordion-chevron" />
                <span className="accordion-title">{title}</span>
            </button>
            <div
                className="accordion-content"
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentHeight}px` : '0px',
                }}
            >
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    );
}
