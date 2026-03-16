import { accountingSyllabus } from './accountingSyllabus.js';
import { biologySyllabus } from './biologySyllabus.js';
import { businessSyllabus } from './businessSyllabus.js';
import { caeSyllabus } from './caeSyllabus.js';
import { chemistrySyllabus } from './chemistrySyllabus.js';
import { cpeSyllabus } from './cpeSyllabus.js';
import { economicsSyllabus } from './economicsSyllabus.js';
import { mathematicsSyllabus } from './mathematicsSyllabus.js';
import { physicsSyllabus } from './physicsSyllabus.js';
import { oLevelBiologySyllabus } from './oLevelBiologySyllabus.js';

export const syllabusesBySubject = {
    // A Level
    accounting: accountingSyllabus,
    chemistry: chemistrySyllabus,
    biology: biologySyllabus,
    business: businessSyllabus,
    economics: economicsSyllabus,
    physics: physicsSyllabus,
    math: mathematicsSyllabus,
    mathematics: mathematicsSyllabus,
    cae: caeSyllabus,
    cpe: cpeSyllabus,
    // O Level / IGCSE
    olevel_biology: oLevelBiologySyllabus,
};

export function getSyllabusBySubject(subject) {
    if (!subject) return chemistrySyllabus;
    return syllabusesBySubject[String(subject).toLowerCase()] || chemistrySyllabus;
}

export function getSubjectLabel(subject) {
    const key = String(subject || 'chemistry').toLowerCase();
    const labels = {
        chemistry: 'AL Chemistry',
        biology: 'AL Biology',
        physics: 'AL Physics',
        mathematics: 'AL Mathematics',
        math: 'AL Mathematics',
        business: 'AL Business',
        economics: 'AL Economics',
        accounting: 'AL Accounting',
        cae: 'CAE (C1 Advanced)',
        cpe: 'CPE (C2 Proficiency)',
        olevel_biology: 'IGCSE Biology (0610)',
    };
    return labels[key] || (key.charAt(0).toUpperCase() + key.slice(1));
}
