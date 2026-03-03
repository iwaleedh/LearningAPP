const fs = require('fs');
const path = require('path');

const units = [
    { unit: 'WPH11', name: 'Mechanics and Materials', type: 'AS', duration: '1 hour 30 minutes', marks: 80 },
    { unit: 'WPH12', name: 'Waves and Electricity', type: 'AS', duration: '1 hour 30 minutes', marks: 80 },
    { unit: 'WPH13', name: 'Practical Skills in Physics I', type: 'AS', duration: '1 hour 20 minutes', marks: 50 },
    { unit: 'WPH14', name: 'Further Mechanics, Fields and Particles', type: 'A2', duration: '1 hour 45 minutes', marks: 90 },
    { unit: 'WPH15', name: 'Thermodynamics, Radiation, Oscillations and Cosmology', type: 'A2', duration: '1 hour 45 minutes', marks: 90 },
    { unit: 'WPH16', name: 'Practical Skills in Physics II', type: 'A2', duration: '1 hour 20 minutes', marks: 50 }
];

const sessions = [
    { year: 2025, month: 'May' },
    { year: 2025, month: 'January' },
    { year: 2024, month: 'October' },
    { year: 2024, month: 'May' },
    { year: 2024, month: 'January' },
];

const newPapers = [];

sessions.forEach(session => {
    units.forEach(u => {
        const monthShort = session.month.substring(0, 3).toLowerCase();
        const baseId = `phys-${session.year}-${monthShort}-${u.unit.toLowerCase()}`;
        
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

let content = fs.readFileSync('src/data/physicsPastPapers.js', 'utf8');

// Find the end of physicsPastPapers array
const arrayEndIndex = content.lastIndexOf('];', content.indexOf('export const physicsAvailableYears'));

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

// Add 2024, 2025 to physicsAvailableYears if not present
content = content.replace('export const physicsAvailableYears = [2023, 2022, 2021, 2020, 2019];', 'export const physicsAvailableYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019];');

fs.writeFileSync('src/data/physicsPastPapers.js', content, 'utf8');
console.log('Updated physicsPastPapers.js');

// Create dummy PDFs
const qpTemplate = 'public/pastpapers/wch11-2019-jan-qp.pdf';
const msTemplate = 'public/pastpapers/wch11-2019-jan-ms.pdf';

let count = 0;
newPapers.forEach(p => {
    const qpPath = path.join('public', p.questionPaperUrl);
    const msPath = path.join('public', p.markingSchemeUrl);
    
    // Copy if it doesn't exist
    if (!fs.existsSync(qpPath)) {
        fs.copyFileSync(qpTemplate, qpPath);
        count++;
    }
    if (!fs.existsSync(msPath)) {
        fs.copyFileSync(msTemplate, msPath);
        count++;
    }
});
console.log(`Created ${count} PDF files.`);

