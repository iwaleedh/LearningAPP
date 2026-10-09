// Subjects grouped the way students think about them (shared by Home, Notes and Exercises).
export const SUBJECT_GROUPS = [
    {
        id: 'alevel',
        label: 'A Level',
        subjects: [
            { id: 'chemistry', name: 'Chemistry', code: 'IAL' },
            { id: 'biology', name: 'Biology', code: 'IAL' },
            { id: 'physics', name: 'Physics', code: 'IAL' },
            { id: 'mathematics', name: 'Mathematics', code: 'IAL' },
            { id: 'business', name: 'Business', code: 'IAL' },
            { id: 'economics', name: 'Economics', code: 'IAL' },
            { id: 'accounting', name: 'Accounting', code: 'IAL' },
        ],
    },
    {
        id: 'igcse',
        label: 'IGCSE',
        subjects: [
            { id: 'olevel_biology', name: 'Biology', code: '0610' },
            { id: 'olevel_chemistry', name: 'Chemistry', code: '0620' },
            { id: 'olevel_physics', name: 'Physics', code: '0625' },
            { id: 'olevel_business', name: 'Business', code: '0450' },
            { id: 'olevel_maths_core', name: 'Maths Core', code: '0580' },
            { id: 'olevel_maths_extended', name: 'Maths Extended', code: '0580' },
        ],
    },
    {
        id: 'english',
        label: 'English',
        subjects: [
            { id: 'cae', name: 'C1 Advanced', code: 'CAE' },
            { id: 'cpe', name: 'C2 Proficiency', code: 'CPE' },
        ],
    },
];

export function findSubjectGroupId(subjectId) {
    return SUBJECT_GROUPS.find((group) => group.subjects.some((subject) => subject.id === subjectId))?.id || 'alevel';
}
