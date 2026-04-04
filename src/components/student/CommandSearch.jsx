import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import { loadSyllabusesBySubjects } from '../../data/syllabusIndex.js';
import useFocusTrap from '../../hooks/useFocusTrap.js';

const SEARCH_SUBJECTS = ['chemistry', 'biology', 'physics', 'mathematics', 'economics', 'business', 'accounting'];
const SUBJECT_LABELS = { chemistry: 'Chemistry', biology: 'Biology', physics: 'Physics', mathematics: 'Maths', economics: 'Economics', business: 'Business', accounting: 'Accounting' };

let _cachedSearchIndex = null;
let _cachedSearchPromise = null;

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
    const [searchableItems, setSearchableItems] = useState(() => _cachedSearchIndex || []);
    const [searchIndexStatus, setSearchIndexStatus] = useState(() => _cachedSearchIndex ? 'ready' : 'loading');
    const inputRef = useRef(null);
    const modalRef = useRef(null);
    const navigate = useNavigate();

    // A8: trap Tab/Shift+Tab inside the dialog
    useFocusTrap(modalRef);

    // A8: make the background inert so AT virtual cursor cannot escape the dialog
    useEffect(() => {
        const bg = document.querySelector('.app-layout');
        if (!bg) return;
        bg.setAttribute('inert', '');
        bg.setAttribute('aria-hidden', 'true');
        bg.classList.add('app-layout--modal-blocked');

        return () => {
            bg.removeAttribute('inert');
            bg.removeAttribute('aria-hidden');
            bg.classList.remove('app-layout--modal-blocked');
        };
    }, []);

    const results = useMemo(() => (
        query.trim()
            ? searchableItems.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            )
            : searchableItems.slice(0, 6)
    ), [query, searchableItems]);

    useEffect(() => {
        const focusInput = () => {
            if (!inputRef.current) return;
            const activeEl = document.activeElement;
            if (modalRef.current?.contains(activeEl)) return;
            inputRef.current.focus();
        };

        focusInput();
        const timerIds = [
            window.setTimeout(focusInput, 0),
            window.setTimeout(focusInput, 50),
        ];

        return () => {
            timerIds.forEach((timerId) => window.clearTimeout(timerId));
        };
    }, []);

    useEffect(() => {
        let cancelled = false;

        if (_cachedSearchIndex) {
            return;
        }

        if (!_cachedSearchPromise) {
            _cachedSearchPromise = loadSyllabusesBySubjects(SEARCH_SUBJECTS)
                .then((syllabuses) => {
                    _cachedSearchIndex = buildSearchIndexFromSyllabuses(syllabuses);
                    return _cachedSearchIndex;
                })
                .catch((err) => {
                    _cachedSearchPromise = null; // allow retry
                    throw err;
                });
        }

        _cachedSearchPromise.then((index) => {
            if (cancelled) return;
            setSearchableItems(index);
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
        <div className="search-modal-overlay" onClick={onClose} role="presentation">
            <div
                className="search-modal"
                onClick={e => e.stopPropagation()}
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-label="Search topics and chapters"
            >
                <div className="search-input-wrapper">
                    <Search size={20} className="search-input-icon" aria-hidden="true" />
                    <input
                        ref={inputRef}
                        autoFocus
                        type="text"
                        role="combobox"
                        aria-label="Search topics and chapters"
                        aria-expanded={results.length > 0}
                        aria-controls="cmd-search-results"
                        aria-activedescendant={
                            results.length > 0 ? `cmd-result-${focusedIndex}` : undefined
                        }
                        aria-autocomplete="list"
                        placeholder="Search chapters, exercises, glossary..."
                        value={query}
                        onChange={handleQueryChange}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div
                    role="listbox"
                    id="cmd-search-results"
                    aria-label="Search results"
                    className="search-results"
                >
                    {searchIndexStatus === 'loading' ? (
                        <div className="search-results-state" role="status">
                            Building search index...
                        </div>
                    ) : searchIndexStatus === 'error' ? (
                        <div className="search-results-state" role="alert">
                            Search is unavailable right now.
                        </div>
                    ) : results.length === 0 ? (
                        <div className="search-results-state" role="status">
                            No results found for &quot;{query}&quot;
                        </div>
                    ) : (
                        results.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    id={`cmd-result-${i}`}
                                    role="option"
                                    aria-selected={i === focusedIndex}
                                    className={`search-result-item ${i === focusedIndex ? 'focused' : ''}`}
                                    onClick={() => handleSelect(item)}
                                    onMouseEnter={() => setFocusedIndex(i)}
                                >
                                    <Icon size={18} className="search-result-icon" aria-hidden="true" />
                                    <div className="search-result-content">
                                        <div className="search-result-title">
                                            {item.title}
                                        </div>
                                        <div className="search-result-type">{item.type}</div>
                                    </div>
                                    {i === focusedIndex && (
                                        <ArrowRight size={14} className="search-result-arrow" aria-hidden="true" />
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>

                <div className="search-footer" aria-hidden="true">
                    <span><kbd>↑↓</kbd> Navigate</span>
                    <span><kbd>↵</kbd> Open</span>
                    <span><kbd>Esc</kbd> Close</span>
                </div>
            </div>
        </div>
    );
}
