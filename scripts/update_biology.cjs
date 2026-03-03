const fs = require('fs');
const path = require('path');

const units = [
    { unit: 'WBI11', name: 'Lifestyle, Transport, Genes and Health', type: 'AS', duration: '1 hour 30 minutes', marks: 80 },
    { unit: 'WBI12', name: 'Development, Plants and the Environment', type: 'AS', duration: '1 hour 30 minutes', marks: 80 },
    { unit: 'WBI13', name: 'Practical Skills in Biology I', type: 'AS', duration: '1 hour 20 minutes', marks: 50 },
    { unit: 'WBI14', name: 'Energy, Environment, Microbiology and Immunity', type: 'A2', duration: '1 hour 45 minutes', marks: 90 },
    { unit: 'WBI15', name: 'Respiration, Internal Environment, Coordination and Gene Technology', type: 'A2', duration: '1 hour 45 minutes', marks: 90 },
    { unit: 'WBI16', name: 'Practical Skills in Biology II', type: 'A2', duration: '1 hour 20 minutes', marks: 50 }
];

const sessions = [
    { year: 2025, month: 'May' },
    { year: 2025, month: 'January' },
    { year: 2024, month: 'October' },
    { year: 2024, month: 'May' }
];

const newPapers = [];

sessions.forEach(session => {
    units.forEach(u => {
        const monthShort = session.month.substring(0, 3).toLowerCase();
        const baseId = `bio-${session.year}-${monthShort}-${u.unit.toLowerCase()}`;

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

let content = fs.readFileSync('src/data/biologyPastPapers.js', 'utf8');

const arrayEndIndex = content.lastIndexOf('];', content.indexOf('export const biologyAvailableYears'));

const newPapersString = newPapers.map(p => `    {
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
    },`).join('\n') + '\n';

content = content.slice(0, arrayEndIndex) + newPapersString + content.slice(arrayEndIndex);

content = content.replace('export const biologyAvailableYears = [2024, 2023, 2022, 2021, 2020, 2019];', 'export const biologyAvailableYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019];');

fs.writeFileSync('src/data/biologyPastPapers.js', content, 'utf8');
console.log('Updated biologyPastPapers.js');

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
