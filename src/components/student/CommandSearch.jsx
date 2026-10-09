import { useState, useRef, useEffect, useLayoutEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, History } from 'lucide-react';
import { loadSyllabusesBySubjects } from '../../data/syllabusIndex.js';
import { SUBJECT_GROUPS } from '../../data/subjectGroups.js';
import { readRecentNote } from '../../services/notes/recentNote.js';
import useFocusTrap from '../../hooks/useFocusTrap.js';
import SubjectIcon from '../common/SubjectIcon.jsx';

// Every subject with a syllabus (A Level and IGCSE), with the short level tag students recognise.
const SEARCH_SUBJECTS = SUBJECT_GROUPS
    .filter((group) => group.id !== 'english')
    .flatMap((group) => group.subjects.map((subject) => ({
        id: subject.id,
        name: subject.name,
        level: group.id === 'igcse' ? 'IGCSE' : 'AL',
    })));
const SUGGESTIONS = ['moles', 'enzymes', 'differentiation', 'forces', 'elasticity'];
const MAX_RESULTS = 40;

let _cachedSearchIndex = null;
let _cachedSearchPromise = null;

function buildSearchIndexFromSyllabuses(syllabusesBySubject) {
    const items = [];
    SEARCH_SUBJECTS.forEach(subject => {
        const syllabus = syllabusesBySubject[subject.id];
        if (!syllabus) return;
        (syllabus.units || []).forEach(unit => {
            (unit.topics || []).forEach(topic => {
                (topic.subtopics || []).forEach((sub, si) => {
                    const title = typeof sub === 'string' ? sub : (sub.title || sub.name || '');
                    if (!title) return;
                    const context = `${subject.level} ${subject.name} · ${topic.title}`;
                    items.push({
                        subject: subject.id,
                        title,
                        context,
                        haystack: `${title} ${topic.title} ${subject.name}`.toLowerCase(),
                        path: `/notes/${subject.id}/${unit.id}/${topic.id}/${si}`,
                    });
                });
            });
        });
    });
    return items;
}

// All query words must appear somewhere; titles that start with (or contain) the query rank first.
function searchItems(items, query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const words = q.split(/\s+/);
    return items
        .filter((item) => words.every((word) => item.haystack.includes(word)))
        .map((item) => {
            const title = item.title.toLowerCase();
            const rank = title.startsWith(q) ? 0 : title.includes(q) ? 1 : words.every((word) => title.includes(word)) ? 2 : 3;
            return { item, rank };
        })
        .sort((a, b) => a.rank - b.rank || a.item.title.length - b.item.title.length)
        .slice(0, MAX_RESULTS)
        .map(({ item }) => item);
}

function Highlight({ text, query }) {
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return text;
    const pattern = new RegExp(`(${words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    return text.split(pattern).map((part, index) => (
        index % 2 === 1 ? <mark key={index}>{part}</mark> : part
    ));
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

    const recent = useMemo(() => readRecentNote(), []);
    const results = useMemo(() => {
        if (query.trim()) return searchItems(searchableItems, query);
        // Empty box: offer the note the student was last reading
        return recent?.path
            ? [{
                subject: recent.subject,
                title: recent.subtopicTitle || 'Continue reading',
                context: `${recent.subjectLabel || ''}${recent.topicTitle ? ` · ${recent.topicTitle}` : ''}`,
                path: recent.path,
                isRecent: true,
            }]
            : [];
    }, [query, searchableItems, recent]);

    useLayoutEffect(() => {
        const focusInput = () => {
            if (!inputRef.current) return;
            if (document.activeElement === inputRef.current) return;
            inputRef.current.focus({ preventScroll: true });
        };

        focusInput();
        const rafId = window.requestAnimationFrame(focusInput);
        const timerIds = [
            window.setTimeout(focusInput, 0),
            window.setTimeout(focusInput, 50),
        ];

        return () => {
            window.cancelAnimationFrame(rafId);
            timerIds.forEach((timerId) => window.clearTimeout(timerId));
        };
    }, []);

    useEffect(() => {
        let cancelled = false;

        if (_cachedSearchIndex) {
            return;
        }

        if (!_cachedSearchPromise) {
            _cachedSearchPromise = loadSyllabusesBySubjects(SEARCH_SUBJECTS.map((subject) => subject.id))
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
                aria-label="Search notes"
            >
                <div className="search-input-wrapper">
                    <Search size={20} className="search-input-icon" aria-hidden="true" />
                    <input
                        ref={inputRef}
                        autoFocus
                        type="text"
                        role="combobox"
                        aria-label="Search notes by topic"
                        aria-expanded={results.length > 0}
                        aria-controls="cmd-search-results"
                        aria-activedescendant={
                            results.length > 0 ? `cmd-result-${focusedIndex}` : undefined
                        }
                        aria-autocomplete="list"
                        placeholder="Search notes by topic…"
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
                    {!query.trim() && results.length > 0 && (
                        <div className="search-section-label" role="presentation">Continue reading</div>
                    )}
                    {query.trim() && searchIndexStatus === 'loading' ? (
                        <div className="search-results-state" role="status">
                            Loading notes…
                        </div>
                    ) : searchIndexStatus === 'error' ? (
                        <div className="search-results-state" role="alert">
                            Search is unavailable right now. Check your connection and try again.
                        </div>
                    ) : query.trim() && results.length === 0 ? (
                        <div className="search-results-state" role="status">
                            No notes match &ldquo;{query.trim()}&rdquo;. Try a shorter word or a topic name.
                        </div>
                    ) : (
                        results.map((item, i) => (
                            <div
                                key={item.path}
                                id={`cmd-result-${i}`}
                                role="option"
                                aria-selected={i === focusedIndex}
                                className={`search-result-item ${i === focusedIndex ? 'focused' : ''}`}
                                onClick={() => handleSelect(item)}
                                onMouseEnter={() => setFocusedIndex(i)}
                            >
                                <span className="search-result-icon-tile" aria-hidden="true">
                                    {item.isRecent ? <History size={18} /> : <SubjectIcon subject={item.subject} size={18} />}
                                </span>
                                <div className="search-result-content">
                                    <div className="search-result-title">
                                        <Highlight text={item.title} query={query} />
                                    </div>
                                    <div className="search-result-type">{item.context}</div>
                                </div>
                                <ArrowRight size={16} className="search-result-arrow" aria-hidden="true" />
                            </div>
                        ))
                    )}
                </div>

                {!query.trim() && (
                    <div className="search-suggestions">
                        <span className="search-section-label">Try searching</span>
                        <div className="chip-row">
                            {SUGGESTIONS.map((word) => (
                                <button
                                    key={word}
                                    type="button"
                                    className="chip"
                                    tabIndex={-1}
                                    onClick={() => { setQuery(word); setFocusedIndex(0); inputRef.current?.focus(); }}
                                >
                                    {word}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="search-footer" aria-hidden="true">
                    <span><kbd>↑↓</kbd> Navigate</span>
                    <span><kbd>↵</kbd> Open</span>
                    <span><kbd>Esc</kbd> Close</span>
                </div>
            </div>
        </div>
    );
}
