import { useEffect, useState } from 'react';
import { getSyllabusBySubject, normalizeSubjectKey } from '../data/syllabusIndex.js';

export function useSyllabus(subject) {
    const subjectKey = normalizeSubjectKey(subject);
    const [syllabusesBySubject, setSyllabusesBySubject] = useState({});
    const [errorsBySubject, setErrorsBySubject] = useState({});

    const syllabus = syllabusesBySubject[subjectKey] || null;
    const error = errorsBySubject[subjectKey] || null;

    useEffect(() => {
        if (syllabus || error) {
            return;
        }

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
                setErrorsBySubject((prev) => (
                    prev[subjectKey] ? prev : { ...prev, [subjectKey]: nextError }
                ));
            });

        return () => {
            cancelled = true;
        };
    }, [error, subjectKey, syllabus]);

    return {
        subjectKey,
        syllabus,
        error,
        isLoading: !syllabus && !error,
    };
}
