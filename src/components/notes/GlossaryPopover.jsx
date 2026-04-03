import { useState, useRef, useEffect, useCallback } from 'react';
import './Notes.css';

export default function GlossaryPopover({ content, glossary }) {
    const [activePopover, setActivePopover] = useState(null);
    const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    // Track the trigger element to return focus on close
    const activeTriggerRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.glossary-term') && !e.target.closest('.glossary-popover')) {
                setActivePopover(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Close on Escape key — document-level so it catches bubbled events
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && activePopover) {
                e.preventDefault();
                setActivePopover(null);
                // Return focus to the trigger that opened the popover
                activeTriggerRef.current?.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [activePopover]);

    const openPopover = useCallback((term, triggerEl) => {
        const rect = triggerEl.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        const rawX = rect.left - containerRect.left + rect.width / 2;
        const boundedX = Math.max(16, Math.min(rawX, window.innerWidth - 180));
        
        setPopoverPos({
            x: boundedX,
            y: rect.top - containerRect.top,
        });
        activeTriggerRef.current = triggerEl;
        setActivePopover(term);
    }, []);

    const handleTermClick = (term, event) => {
        event.stopPropagation();
        if (activePopover === term) {
            setActivePopover(null);
        } else {
            openPopover(term, event.currentTarget);
        }
    };

    const handleTermKeyDown = (term, event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            if (activePopover === term) {
                setActivePopover(null);
                activeTriggerRef.current?.focus();
            } else {
                openPopover(term, event.currentTarget);
            }
        }
    };

    // Parse content and replace <term> tags
    const renderContent = () => {
        if (!content) return null;

        const parts = content.split(/(<term[^>]*>[^<]*<\/term>)/g);

        return parts.map((part, i) => {
            const match = part.match(/<term data-term="([^"]*)">(.*?)<\/term>/);
            if (match) {
                const [, term, text] = match;
                const isOpen = activePopover === term;
                return (
                    <button
                        key={i}
                        type="button"
                        className={`glossary-term ${isOpen ? 'active' : ''}`}
                        onClick={(e) => handleTermClick(term, e)}
                        onKeyDown={(e) => handleTermKeyDown(term, e)}
                        aria-expanded={isOpen}
                        aria-describedby={isOpen ? `glossary-popover-${term.replace(/\s+/g, '-')}` : undefined}
                    >
                        {text}
                    </button>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <div className="glossary-container" ref={containerRef}>
            <p>{renderContent()}</p>

            {activePopover && glossary[activePopover] && (
                <div
                    id={`glossary-popover-${activePopover.replace(/\s+/g, '-')}`}
                    className="glossary-popover animate-fade-in-scale"
                    role="tooltip"
                    style={{
                        left: `${popoverPos.x}px`,
                        top: `${popoverPos.y - 8}px`,
                    }}
                >
                    <div className="popover-arrow" aria-hidden="true" />
                    <strong className="popover-term">{activePopover}</strong>
                    <p className="popover-definition">{glossary[activePopover]}</p>
                </div>
            )}
        </div>
    );
}
