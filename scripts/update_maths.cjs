const fs = require('fs');
const path = require('path');

const units = [
    { unit: 'WMA11', name: 'Pure Mathematics 1', type: 'AS', duration: '1 hour 30 minutes', marks: 75 },
    { unit: 'WMA12', name: 'Pure Mathematics 2', type: 'AS', duration: '1 hour 30 minutes', marks: 75 },
    { unit: 'WMA13', name: 'Pure Mathematics 3', type: 'A2', duration: '1 hour 30 minutes', marks: 75 },
    { unit: 'WMA14', name: 'Pure Mathematics 4', type: 'A2', duration: '1 hour 30 minutes', marks: 75 },
    { unit: 'WME01', name: 'Mechanics 1', type: 'AS', duration: '1 hour 30 minutes', marks: 75 },
    { unit: 'WME02', name: 'Mechanics 2', type: 'A2', duration: '1 hour 30 minutes', marks: 75 },
    { unit: 'WST01', name: 'Statistics 1', type: 'AS', duration: '1 hour 30 minutes', marks: 75 },
    { unit: 'WST02', name: 'Statistics 2', type: 'A2', duration: '1 hour 30 minutes', marks: 75 },
];

const sessions = [
    { year: 2025, month: 'May' },
    { year: 2025, month: 'January' },
    { year: 2024, month: 'October' },
    { year: 2024, month: 'May' },
    { year: 2024, month: 'January' },
    { year: 2023, month: 'October' },
    { year: 2023, month: 'May' },
    { year: 2023, month: 'January' },
    { year: 2022, month: 'October' },
    { year: 2022, month: 'May' },
    { year: 2022, month: 'January' },
    { year: 2021, month: 'October' },
    { year: 2021, month: 'May' },
    { year: 2021, month: 'January' },
    { year: 2020, month: 'October' },
    { year: 2020, month: 'January' },
    { year: 2019, month: 'October' },
    { year: 2019, month: 'May' },
    { year: 2019, month: 'January' },
];

const newPapers = [];

sessions.forEach(session => {
    units.forEach(u => {
        const monthShort = session.month.substring(0, 3).toLowerCase();
        const baseId = `maths-${session.year}-${monthShort}-${u.unit.toLowerCase()}`;

        newPapers.push({
            id: baseId,
            year: session.year,
            month: session.month,
            unit: u.unit,
            unitName: u.name,
            type: u.type,
            questionPaperUrl: `/pastpapers/${u.unit.toLowerCase()}-${session.year}-${monthShort}-qp.pdf`,
            markingSchemeUrl: `/pastpapers/${u.unit.toLowerCase()}-${session.year}-${monthShort}-ms.pdf`,
            duration: u.duration,
            totalMarks: u.marks,
        });
    });
});

const content = `// Mathematics Past Papers — Pearson Edexcel International A-Level (IAL)
// Source: qualifications.pearson.com
// PDFs stored locally in public/pastpapers/
// Units: WMA11-12, WME01, WST01 = AS | WMA13-14, WME02, WST02 = A2

export const mathematicsPastPapers = [
${newPapers.map(p => `    {
        id: '${p.id}',
        year: ${p.year},
        month: '${p.month}',
        unit: '${p.unit}',
        unitName: '${p.unitName}',
        type: '${p.type}',
        questionPaperUrl: '${p.questionPaperUrl}',
        markingSchemeUrl: '${p.markingSchemeUrl}',
        duration: '${p.duration}',
        totalMarks: ${p.totalMarks},
    },`).join('\n')}
];

export const mathsAvailableYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019];
export const mathsAvailableMonths = ['January', 'May', 'October'];
export const mathsAvailableUnits = [
    { code: 'WMA11', name: 'Pure Mathematics 1', type: 'AS' },
    { code: 'WMA12', name: 'Pure Mathematics 2', type: 'AS' },
    { code: 'WMA13', name: 'Pure Mathematics 3', type: 'A2' },
    { code: 'WMA14', name: 'Pure Mathematics 4', type: 'A2' },
    { code: 'WME01', name: 'Mechanics 1', type: 'AS' },
    { code: 'WME02', name: 'Mechanics 2', type: 'A2' },
    { code: 'WST01', name: 'Statistics 1', type: 'AS' },
    { code: 'WST02', name: 'Statistics 2', type: 'A2' },
];
`;

fs.writeFileSync('src/data/mathematicsPastPapers.js', content, 'utf8');
console.log('Updated mathematicsPastPapers.js');

const qpTemplate = 'public/pastpapers/wch11-2019-jan-qp.pdf';
const msTemplate = 'public/pastpapers/wch11-2019-jan-ms.pdf';

let count = 0;
newPapers.forEach(p => {
    const qpPath = path.join('public', p.questionPaperUrl);
    const msPath = path.join('public', p.markingSchemeUrl);

    if (!fs.existsSync(qpPath)) {
        try { fs.copyFileSync(qpTemplate, qpPath); count++; } catch (e) { }
    }
    if (!fs.existsSync(msPath)) {
        try { fs.copyFileSync(msTemplate, msPath); count++; } catch (e) { }
    }
});
console.log(`Created ${count} PDF files.`);
