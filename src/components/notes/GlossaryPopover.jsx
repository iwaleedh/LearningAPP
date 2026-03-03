import { useState, useRef, useEffect } from 'react';
import './Notes.css';

export default function GlossaryPopover({ content, glossary }) {
    const [activePopover, setActivePopover] = useState(null);
    const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.glossary-term') && !e.target.closest('.glossary-popover')) {
                setActivePopover(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleTermClick = (term, event) => {
        event.stopPropagation();
        const rect = event.target.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        setPopoverPos({
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top,
        });
        setActivePopover(activePopover === term ? null : term);
    };

    // Parse content and replace <term> tags
    const renderContent = () => {
        if (!content) return null;

        const parts = content.split(/(<term[^>]*>[^<]*<\/term>)/g);

        return parts.map((part, i) => {
            const match = part.match(/<term data-term="([^"]*)">(.*?)<\/term>/);
            if (match) {
                const [, term, text] = match;
                return (
                    <span
                        key={i}
                        className={`glossary-term ${activePopover === term ? 'active' : ''}`}
                        onClick={(e) => handleTermClick(term, e)}
                    >
                        {text}
                    </span>
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
                    className="glossary-popover animate-fade-in-scale"
                    style={{
                        left: `${popoverPos.x}px`,
                        top: `${popoverPos.y - 8}px`,
                    }}
                >
                    <div className="popover-arrow" />
                    <strong className="popover-term">{activePopover}</strong>
                    <p className="popover-definition">{glossary[activePopover]}</p>
                </div>
            )}
        </div>
    );
}
