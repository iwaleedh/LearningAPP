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
import { oLevelChemistrySyllabus } from './oLevelChemistrySyllabus.js';
import { oLevelPhysicsSyllabus } from './oLevelPhysicsSyllabus.js';
import { oLevelBusinessSyllabus } from './oLevelBusinessSyllabus.js';
import { oLevelMathsCoreSyllabus } from './oLevelMathsCoreSyllabus.js';
import { oLevelMathsExtendedSyllabus } from './oLevelMathsExtendedSyllabus.js';
import { igcsePhysicsSyllabus } from './igcsePhysicsSyllabus.js';

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
    olevel_chemistry: oLevelChemistrySyllabus,
    olevel_physics: oLevelPhysicsSyllabus,
    olevel_business: oLevelBusinessSyllabus,
    olevel_maths_core: oLevelMathsCoreSyllabus,
    olevel_maths_extended: oLevelMathsExtendedSyllabus,
    // IGCSE Physics (Edexcel)
    'igcse-physics': igcsePhysicsSyllabus,
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
        olevel_chemistry: 'IGCSE Chemistry (0620)',
        olevel_physics: 'IGCSE Physics (0625)',
        olevel_business: 'IGCSE Business (0450)',
        olevel_maths_core: 'IGCSE Mathematics Core (0580)',
        olevel_maths_extended: 'IGCSE Mathematics Extended (0580)',
        'igcse-physics': 'IGCSE Physics (0625)',
    };
    return labels[key] || (key.charAt(0).toUpperCase() + key.slice(1));
}
