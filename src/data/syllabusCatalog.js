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
    olevel_biology: oLevelBiologySyllabus,
    olevel_chemistry: oLevelChemistrySyllabus,
    olevel_physics: oLevelPhysicsSyllabus,
    olevel_business: oLevelBusinessSyllabus,
    olevel_maths_core: oLevelMathsCoreSyllabus,
    olevel_maths_extended: oLevelMathsExtendedSyllabus,
    'igcse-physics': igcsePhysicsSyllabus,
};

export function getSyllabusBySubject(subject) {
    if (!subject) return chemistrySyllabus;
    return syllabusesBySubject[String(subject).toLowerCase()] || chemistrySyllabus;
}
