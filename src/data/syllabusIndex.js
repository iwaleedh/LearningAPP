const subjectModuleLoaders = {
    accounting: () => import('./accountingSyllabus.js'),
    biology: () => import('./biologySyllabus.js'),
    business: () => import('./businessSyllabus.js'),
    cae: () => import('./caeSyllabus.js'),
    chemistry: () => import('./chemistrySyllabus.js'),
    cpe: () => import('./cpeSyllabus.js'),
    economics: () => import('./economicsSyllabus.js'),
    mathematics: () => import('./mathematicsSyllabus.js'),
    physics: () => import('./physicsSyllabus.js'),
    olevel_biology: () => import('./oLevelBiologySyllabus.js'),
    olevel_chemistry: () => import('./oLevelChemistrySyllabus.js'),
    olevel_physics: () => import('./oLevelPhysicsSyllabus.js'),
    olevel_business: () => import('./oLevelBusinessSyllabus.js'),
    olevel_maths_core: () => import('./oLevelMathsCoreSyllabus.js'),
    olevel_maths_extended: () => import('./oLevelMathsExtendedSyllabus.js'),
    'igcse-physics': () => import('./igcsePhysicsSyllabus.js'),
};

const subjectModuleResolvers = {
    accounting: (module) => module.accountingSyllabus,
    biology: (module) => module.biologySyllabus,
    business: (module) => module.businessSyllabus,
    cae: (module) => module.caeSyllabus,
    chemistry: (module) => module.chemistrySyllabus,
    cpe: (module) => module.cpeSyllabus,
    economics: (module) => module.economicsSyllabus,
    mathematics: (module) => module.mathematicsSyllabus,
    physics: (module) => module.physicsSyllabus,
    olevel_biology: (module) => module.oLevelBiologySyllabus,
    olevel_chemistry: (module) => module.oLevelChemistrySyllabus,
    olevel_physics: (module) => module.oLevelPhysicsSyllabus,
    olevel_business: (module) => module.oLevelBusinessSyllabus,
    olevel_maths_core: (module) => module.oLevelMathsCoreSyllabus,
    olevel_maths_extended: (module) => module.oLevelMathsExtendedSyllabus,
    'igcse-physics': (module) => module.igcsePhysicsSyllabus,
};

const subjectAliases = {
    math: 'mathematics',
    'olevel-biology': 'olevel_biology',
    'olevel-chemistry': 'olevel_chemistry',
    'olevel-physics': 'olevel_physics',
    'olevel-business': 'olevel_business',
    'olevel-maths-core': 'olevel_maths_core',
    'olevel-maths-extended': 'olevel_maths_extended',
    'igcse_physics': 'igcse-physics',
};

const subjectLabels = Object.freeze({
    chemistry: 'AL Chemistry',
    biology: 'AL Biology',
    physics: 'AL Physics',
    mathematics: 'AL Mathematics',
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
});

export const subjectNoteCounts = Object.freeze({
    chemistry: 208,
    biology: 156,
    physics: 199,
    mathematics: 197,
    business: 194,
    economics: 238,
    accounting: 122,
    cae: 41,
    cpe: 39,
    olevel_chemistry: 107,
    olevel_biology: 81,
    olevel_physics: 136,
    olevel_business: 77,
    olevel_maths_core: 138,
    olevel_maths_extended: 178,
    'igcse-physics': 83,
});

const subjectSyllabusCache = new Map();

export function normalizeSubjectKey(subject) {
    const rawKey = String(subject || 'chemistry').toLowerCase();
    const canonicalKey = subjectAliases[rawKey] || rawKey;
    return subjectModuleLoaders[canonicalKey] ? canonicalKey : 'chemistry';
}

export async function getSyllabusBySubject(subject) {
    const subjectKey = normalizeSubjectKey(subject);

    if (!subjectSyllabusCache.has(subjectKey)) {
        subjectSyllabusCache.set(
            subjectKey,
            subjectModuleLoaders[subjectKey]().then((module) => subjectModuleResolvers[subjectKey](module)),
        );
    }

    return subjectSyllabusCache.get(subjectKey);
}

export async function loadSyllabusesBySubjects(subjects = []) {
    const uniqueSubjectKeys = [...new Set(subjects.map((subject) => normalizeSubjectKey(subject)))];
    const syllabuses = await Promise.all(
        uniqueSubjectKeys.map(async (subjectKey) => [subjectKey, await getSyllabusBySubject(subjectKey)]),
    );

    return Object.fromEntries(syllabuses);
}

export function getSubjectLabel(subject) {
    const key = normalizeSubjectKey(subject);
    return subjectLabels[key] || (key.charAt(0).toUpperCase() + key.slice(1));
}
