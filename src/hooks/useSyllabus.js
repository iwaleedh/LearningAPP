import { useEffect, useRef, useState } from 'react';
import { getSyllabusBySubject, normalizeSubjectKey } from '../data/syllabusIndex.js';

export function useSyllabus(subject) {
    const subjectKey = normalizeSubjectKey(subject);
    const [syllabusesBySubject, setSyllabusesBySubject] = useState({});
    const [errorsBySubject, setErrorsBySubject] = useState({});

    // R1: track fetched keys via ref — immune to stale closures, no feedback loop,
    // no eslint-disable needed on the dependency array.
    const fetchedKeysRef = useRef(new Set());

    const syllabus = syllabusesBySubject[subjectKey] || null;
    const error = errorsBySubject[subjectKey] || null;

    useEffect(() => {
        if (fetchedKeysRef.current.has(subjectKey)) return;
        fetchedKeysRef.current.add(subjectKey);

        let cancelled = false;

        void getSyllabusBySubject(subjectKey)
            .then((nextSyllabus) => {
                if (cancelled) return;
                setSyllabusesBySubject((prev) => (
                    prev[subjectKey] ? prev : { ...prev, [subjectKey]: nextSyllabus }
                ));
            })
            .catch((nextError) => {
                if (cancelled) return;
                // Remove from fetchedKeys so a retry is possible if the user
                // navigates away and back to the same subject after an error.
                fetchedKeysRef.current.delete(subjectKey);
                setErrorsBySubject((prev) => (
                    prev[subjectKey] ? prev : { ...prev, [subjectKey]: nextError }
                ));
            });

        return () => {
            cancelled = true;
        };
    }, [subjectKey]);

    return {
        subjectKey,
        syllabus,
        error,
        isLoading: !syllabus && !error,
    };
}
