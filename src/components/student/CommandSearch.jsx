import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, FlaskConical, FileQuestion, Hash, ArrowRight } from 'lucide-react';

// Sample searchable items (will be driven by Convex data)
const searchableItems = [
    { type: 'chapter', title: 'Atomic Structure', path: '/chapters/1', icon: BookOpen },
    { type: 'chapter', title: 'Chemical Bonding', path: '/chapters/2', icon: BookOpen },
    { type: 'chapter', title: 'Stoichiometry', path: '/chapters/3', icon: BookOpen },
    { type: 'chapter', title: 'States of Matter', path: '/chapters/4', icon: BookOpen },
    { type: 'chapter', title: 'Chemical Energetics', path: '/chapters/5', icon: BookOpen },
    { type: 'exercise', title: 'MCQ — Atomic Structure', path: '/exercises', icon: FlaskConical },
    { type: 'exercise', title: 'Fill in the Blanks — Bonding', path: '/exercises', icon: FlaskConical },
    { type: 'paper', title: '2024 Chemistry Paper 1', path: '/past-papers', icon: FileQuestion },
    { type: 'paper', title: '2023 Chemistry Paper 2', path: '/past-papers', icon: FileQuestion },
    { type: 'glossary', title: 'Isotope', path: '/chapters/1', icon: Hash },
    { type: 'glossary', title: 'Electronegativity', path: '/chapters/2', icon: Hash },
    { type: 'glossary', title: 'Mole', path: '/chapters/3', icon: Hash },
    { type: 'glossary', title: 'Enthalpy', path: '/chapters/5', icon: Hash },
];

export default function CommandSearch({ onClose }) {
    const [query, setQuery] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(0);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const results = query.trim()
        ? searchableItems.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        )
        : searchableItems.slice(0, 6);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleQueryChange = useCallback((e) => {
        setQuery(e.target.value);
        setFocusedIndex(0);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setFocusedIndex(prev => Math.min(prev + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setFocusedIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && results[focusedIndex]) {
            navigate(results[focusedIndex].path);
            onClose();
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleSelect = (item) => {
        navigate(item.path);
        onClose();
    };

    return (
        <div className="search-modal-overlay" onClick={onClose}>
            <div className="search-modal" onClick={e => e.stopPropagation()}>
                <div className="search-input-wrapper">
                    <Search size={20} style={{ color: 'var(--color-text-tertiary)', flexShrink: 0 }} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search chapters, exercises, glossary..."
                        value={query}
                        onChange={handleQueryChange}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className="search-results">
                    {results.length === 0 ? (
                        <div style={{ padding: 'var(--space-8)', textAlign: 'center', color: 'var(--color-text-tertiary)' }}>
                            No results found for &quot;{query}&quot;
                        </div>
                    ) : (
                        results.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className={`search-result-item ${i === focusedIndex ? 'focused' : ''}`}
                                    onClick={() => handleSelect(item)}
                                    onMouseEnter={() => setFocusedIndex(i)}
                                >
                                    <Icon size={18} style={{ color: 'var(--color-text-tertiary)', flexShrink: 0 }} />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-sm)' }}>
                                            {item.title}
                                        </div>
                                        <div className="search-result-type">{item.type}</div>
                                    </div>
                                    {i === focusedIndex && (
                                        <ArrowRight size={14} style={{ color: 'var(--color-text-tertiary)' }} />
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="search-footer">
                    <span><kbd>↑↓</kbd> Navigate</span>
                    <span><kbd>↵</kbd> Open</span>
                    <span><kbd>Esc</kbd> Close</span>
                </div>
            </div>
        </div>
    );
}
