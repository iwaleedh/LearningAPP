import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import { loadSyllabusesBySubjects } from '../../data/syllabusIndex.js';

const SEARCH_SUBJECTS = ['chemistry', 'biology', 'physics', 'mathematics', 'economics', 'business', 'accounting'];
const SUBJECT_LABELS = { chemistry: 'Chemistry', biology: 'Biology', physics: 'Physics', mathematics: 'Maths', economics: 'Economics', business: 'Business', accounting: 'Accounting' };

function buildSearchIndexFromSyllabuses(syllabusesBySubject) {
    const items = [];
    SEARCH_SUBJECTS.forEach(subject => {
        const syllabus = syllabusesBySubject[subject];
        if (!syllabus) return;
        (syllabus.units || []).forEach(unit => {
            (unit.topics || []).forEach(topic => {
                (topic.subtopics || []).forEach((sub, si) => {
                    const title = typeof sub === 'string' ? sub : (sub.title || sub.name || '');
                    if (title) {
                        items.push({
                            type: SUBJECT_LABELS[subject] || subject,
                            title,
                            path: `/notes/${subject}/${unit.id}/${topic.id}/${si}`,
                            icon: BookOpen,
                        });
                    }
                });
            });
        });
    });
    return items;
}

export default function CommandSearch({ onClose }) {
    const [query, setQuery] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [searchableItems, setSearchableItems] = useState([]);
    const [searchIndexStatus, setSearchIndexStatus] = useState('loading');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const results = useMemo(() => (
        query.trim()
            ? searchableItems.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            )
            : searchableItems.slice(0, 6)
    ), [query, searchableItems]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        let cancelled = false;

        void loadSyllabusesBySubjects(SEARCH_SUBJECTS).then((syllabuses) => {
            if (cancelled) return;
            setSearchableItems(buildSearchIndexFromSyllabuses(syllabuses));
            setSearchIndexStatus('ready');
        }).catch(() => {
            if (cancelled) return;
            setSearchIndexStatus('error');
        });

        return () => {
            cancelled = true;
        };
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
                    <Search size={20} className="search-input-icon" />
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
                    {searchIndexStatus === 'loading' ? (
                        <div className="search-results-state">
                            Building search index...
                        </div>
                    ) : searchIndexStatus === 'error' ? (
                        <div className="search-results-state">
                            Search is unavailable right now.
                        </div>
                    ) : results.length === 0 ? (
                        <div className="search-results-state">
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
                                    <Icon size={18} className="search-result-icon" />
                                    <div className="search-result-content">
                                        <div className="search-result-title">
                                            {item.title}
                                        </div>
                                        <div className="search-result-type">{item.type}</div>
                                    </div>
                                    {i === focusedIndex && (
                                        <ArrowRight size={14} className="search-result-arrow" />
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
