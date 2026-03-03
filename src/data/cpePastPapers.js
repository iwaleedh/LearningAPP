// CPE (C2 Proficiency) Sample Papers — Cambridge English
// Source: cambridgeenglish.org/exams-and-tests/proficiency/preparation/
// PDFs stored locally in public/pastpapers/cpe/
// Note: Cambridge only releases official Sample Papers publicly (not full yearly past papers).

export const cpePastPapers = [
    {
        id: 'cpe-sample1-reading',
        sampleSet: 'Sample Paper 1',
        year: 2022,
        component: 'Reading & Use of English',
        paper: 'Paper 1',
        level: 'C2',
        duration: '1 hour 30 minutes',
        totalMarks: 53,
        questionPaperUrl: '/pastpapers/cpe/cpe-sample1-reading-use-of-english.pdf',
        markingSchemeUrl: '/pastpapers/cpe/cpe-sample1-reading-answer-key.pdf',
    },
    {
        id: 'cpe-sample1-writing',
        sampleSet: 'Sample Paper 1',
        year: 2022,
        component: 'Writing',
        paper: 'Paper 2',
        level: 'C2',
        duration: '1 hour 30 minutes',
        totalMarks: 40,
        questionPaperUrl: '/pastpapers/cpe/cpe-sample1-writing.pdf',
        markingSchemeUrl: null,
    },
    {
        id: 'cpe-sample1-listening',
        sampleSet: 'Sample Paper 1',
        year: 2022,
        component: 'Listening',
        paper: 'Paper 3',
        level: 'C2',
        duration: '40 minutes (approx)',
        totalMarks: 30,
        questionPaperUrl: '/pastpapers/cpe/cpe-sample1-listening.pdf',
        markingSchemeUrl: '/pastpapers/cpe/cpe-sample1-listening-answer-key.pdf',
        tapescriptUrl: '/pastpapers/cpe/cpe-sample1-listening-tapescript.pdf',
    },
];

// CPE exam components
export const cpeComponents = [
    { id: 'Paper 1', name: 'Reading & Use of English', duration: '1 hour 30 minutes', marks: 53 },
    { id: 'Paper 2', name: 'Writing', duration: '1 hour 30 minutes', marks: 40 },
    { id: 'Paper 3', name: 'Listening', duration: '40 minutes approx', marks: 30 },
    { id: 'Paper 4', name: 'Speaking', duration: '16 minutes per pair', marks: null },
];

export const cpeSampleSets = ['Sample Paper 1'];
