import { useEffect, useRef, useState } from 'react';
import { getSyllabusBySubject, normalizeSubjectKey } from '../data/syllabusIndex.js';

export function useSyllabus(subject) {
    const subjectKey = normalizeSubjectKey(subject);
    const [syllabusesBySubject, setSyllabusesBySubject] = useState({});
    const [errorsBySubject, setErrorsBySubject] = useState({});
    // fetchedKeysRef prevents concurrent duplicate fetches for the same subject
    // within a single component lifetime.  It is cleared on cleanup so React
    // StrictMode (which mounts → unmounts → remounts in dev) always gets a fresh
    // fetch on the second, real mount instead of being silently blocked.
    const fetchedKeysRef = useRef(new Set());

    const syllabus = syllabusesBySubject[subjectKey] || null;
    const error = errorsBySubject[subjectKey] || null;

    useEffect(() => {
        if (!subjectKey || fetchedKeysRef.current.has(subjectKey)) {
            return undefined;
        }

        fetchedKeysRef.current.add(subjectKey);
        let cancelled = false;

        void getSyllabusBySubject(subjectKey)
            .then((nextSyllabus) => {
                if (cancelled) return;
                setErrorsBySubject((prev) => {
                    if (!prev[subjectKey]) return prev;
                    const next = { ...prev };
                    delete next[subjectKey];
                    return next;
                });
                setSyllabusesBySubject((prev) => (
                    prev[subjectKey] ? prev : { ...prev, [subjectKey]: nextSyllabus }
                ));
            })
            .catch((nextError) => {
                if (cancelled) return;
                // Remove from ref so the caller can retry (e.g. after offline recovery)
                fetchedKeysRef.current.delete(subjectKey);
                setErrorsBySubject((prev) => (
                    prev[subjectKey] ? prev : { ...prev, [subjectKey]: nextError }
                ));
            });

        return () => {
            cancelled = true;
            // Allow StrictMode remounts and future mounts to trigger a fresh fetch
            fetchedKeysRef.current.delete(subjectKey);
        };
    }, [subjectKey]);

    return {
        subjectKey,
        syllabus,
        error,
        isLoading: !syllabus && !error,
    };
}
