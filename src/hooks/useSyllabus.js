import { useEffect, useState } from 'react';
import { getSyllabusBySubject, normalizeSubjectKey } from '../data/syllabusIndex.js';

export function useSyllabus(subject) {
    const subjectKey = normalizeSubjectKey(subject);
    const [syllabusesBySubject, setSyllabusesBySubject] = useState({});
    const [errorsBySubject, setErrorsBySubject] = useState({});

    const syllabus = syllabusesBySubject[subjectKey] || null;
    const error = errorsBySubject[subjectKey] || null;

    useEffect(() => {
        if (!subjectKey || syllabus) {
            return undefined;
        }

        let cancelled = false;

        void getSyllabusBySubject(subjectKey)
            .then((nextSyllabus) => {
                if (cancelled) return;
                setErrorsBySubject((prev) => {
                    if (!prev[subjectKey]) {
                        return prev;
                    }

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
                setErrorsBySubject((prev) => (
                    prev[subjectKey] ? prev : { ...prev, [subjectKey]: nextError }
                ));
            });

        return () => {
            cancelled = true;
        };
    }, [subjectKey, syllabus]);

    return {
        subjectKey,
        syllabus,
        error,
        isLoading: !syllabus && !error,
    };
}
