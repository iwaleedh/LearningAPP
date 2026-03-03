import { accountingSyllabus } from './accountingSyllabus.js';
import { biologySyllabus } from './biologySyllabus.js';
import { businessSyllabus } from './businessSyllabus.js';
import { chemistrySyllabus } from './chemistrySyllabus.js';
import { economicsSyllabus } from './economicsSyllabus.js';
import { mathematicsSyllabus } from './mathematicsSyllabus.js';
import { physicsSyllabus } from './physicsSyllabus.js';

export const syllabusesBySubject = {
    accounting: accountingSyllabus,
    chemistry: chemistrySyllabus,
    biology: biologySyllabus,
    business: businessSyllabus,
    economics: economicsSyllabus,
    physics: physicsSyllabus,
    math: mathematicsSyllabus,
    mathematics: mathematicsSyllabus,
};

export function getSyllabusBySubject(subject) {
    if (!subject) return chemistrySyllabus;
    return syllabusesBySubject[String(subject).toLowerCase()] || chemistrySyllabus;
}

export function getSubjectLabel(subject) {
    const key = String(subject || 'chemistry').toLowerCase();
    if (key === 'math' || key === 'mathematics') return 'Mathematics';
    return key.charAt(0).toUpperCase() + key.slice(1);
}
