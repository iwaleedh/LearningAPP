// O Level Accounting Past Papers — Cambridge IGCSE (0452)
// Covers: 2010–2025, May/June + Oct/Nov sessions, Papers 1 & 2
// Feb/March session included from 2019 onwards (variant 2 only)
// All PDFs served locally from public/pastpapers/olevel/accounting/

const PAPER_META = {
    1: { unitName: 'Multiple Choice and Short Answer', type: 'Core', duration: '1 hour 45 minutes', totalMarks: 80  },
    2: { unitName: 'Structured Written Questions',     type: 'Core', duration: '1 hour 45 minutes', totalMarks: 120 },
};

function gceguideUrl(year, session, fileType, paper, variant) {
    const yy = String(year).slice(-2);
    return `/pastpapers/olevel/accounting/${year}/0452_${session}${yy}_${fileType}_${paper}${variant}.pdf`;
}

function makeEntry(year, session, monthLabel, paper, variant) {
    const meta = PAPER_META[paper];
    return {
        id: `olevel-acc-${year}-${session}-p${paper}v${variant}`,
        year,
        month: monthLabel,
        unit: `Paper ${paper}`,
        unitName: meta.unitName,
        type: meta.type,
        code: `0452/${paper}${variant}`,
        questionPaperUrl: gceguideUrl(year, session, 'qp', paper, variant),
        markingSchemeUrl: gceguideUrl(year, session, 'ms', paper, variant),
        duration: meta.duration,
        totalMarks: meta.totalMarks,
    };
}

// 2010–2018: May/June (s) + Oct/Nov (w), Papers 1 & 2, variants 1 & 2 → 8/year × 9 = 72
const entries2010to2018 = [];
for (let year = 2010; year <= 2018; year++) {
    for (const paper of [1, 2]) {
        for (const variant of [1, 2]) {
            entries2010to2018.push(makeEntry(year, 's', 'May/June',  paper, variant));
            entries2010to2018.push(makeEntry(year, 'w', 'Oct/Nov',   paper, variant));
        }
    }
}

// 2019–2023: May/June + Oct/Nov (variants 1 & 2) + Feb/March (variant 2 only) → 10/year × 5 = 50
const entries2019to2023 = [];
for (let year = 2019; year <= 2023; year++) {
    for (const paper of [1, 2]) {
        for (const variant of [1, 2]) {
            entries2019to2023.push(makeEntry(year, 's', 'May/June', paper, variant));
            entries2019to2023.push(makeEntry(year, 'w', 'Oct/Nov',  paper, variant));
        }
        entries2019to2023.push(makeEntry(year, 'm', 'Feb/March', paper, 2));
    }
}

// 2024: May/June + Oct/Nov (variants 1 & 2) + Feb/March (variant 2 only) = 10
const entries2024 = [];
for (const paper of [1, 2]) {
    for (const variant of [1, 2]) {
        entries2024.push(makeEntry(2024, 's', 'May/June', paper, variant));
        entries2024.push(makeEntry(2024, 'w', 'Oct/Nov',  paper, variant));
    }
    entries2024.push(makeEntry(2024, 'm', 'Feb/March', paper, 2));
}

// 2025: May/June + Oct/Nov (variants 1 & 2) + Feb/March (variant 2 only) = 10
const entries2025 = [];
for (const paper of [1, 2]) {
    for (const variant of [1, 2]) {
        entries2025.push(makeEntry(2025, 's', 'May/June', paper, variant));
        entries2025.push(makeEntry(2025, 'w', 'Oct/Nov',  paper, variant));
    }
    entries2025.push(makeEntry(2025, 'm', 'Feb/March', paper, 2));
}

export const oLevelAccountingPastPapers = [
    ...entries2010to2018,
    ...entries2019to2023,
    ...entries2024,
    ...entries2025,
];

export const oLevelAccountingAvailableYears = [
    2025, 2024, 2023, 2022, 2021, 2020, 2019,
    2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
];

export const oLevelAccountingAvailableMonths = ['May/June', 'Oct/Nov', 'Feb/March'];

export const oLevelAccountingAvailableUnits = [
    { code: 'Paper 1', name: 'Multiple Choice and Short Answer', type: 'Core' },
    { code: 'Paper 2', name: 'Structured Written Questions',     type: 'Core' },
];
