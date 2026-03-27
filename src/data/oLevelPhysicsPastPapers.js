// O Level Physics Past Papers — Cambridge IGCSE (0625)
// Covers: 2010–2025, May/June + Oct/Nov sessions, Papers 1, 2, 4, 6
// Feb/March session included from 2019 onwards (variant 2 only)
// All PDFs served locally from public/pastpapers/olevel/physics/

const PAPER_META = {
    1: { unitName: 'Multiple Choice',                      type: 'Core',     duration: '45 minutes',        totalMarks: 40 },
    2: { unitName: 'Theory (Core)',                        type: 'Core',     duration: '1 hour 15 minutes', totalMarks: 80 },
    3: { unitName: 'Practical Test (Core)',                type: 'Core',     duration: '1 hour',            totalMarks: 40 },
    4: { unitName: 'Alternative to Practical (Core)',      type: 'Core',     duration: '1 hour',            totalMarks: 40 },
    5: { unitName: 'Practical Test (Extended)',            type: 'Extended', duration: '1 hour',            totalMarks: 40 },
    6: { unitName: 'Alternative to Practical (Extended)', type: 'Extended', duration: '1 hour',            totalMarks: 50 },
};

function gceguideUrl(year, session, fileType, paper, variant) {
    const yy = String(year).slice(-2);
    return `/pastpapers/olevel/physics/${year}/0625_${session}${yy}_${fileType}_${paper}${variant}.pdf`;
}

function makeEntry(year, session, monthLabel, paper, variant) {
    const meta = PAPER_META[paper];
    return {
        id: `olevel-phys-${year}-${session}-p${paper}v${variant}`,
        year,
        month: monthLabel,
        unit: `Paper ${paper}`,
        unitName: meta.unitName,
        type: meta.type,
        code: `0625/${paper}${variant}`,
        questionPaperUrl: gceguideUrl(year, session, 'qp', paper, variant),
        markingSchemeUrl: gceguideUrl(year, session, 'ms', paper, variant),
        duration: meta.duration,
        totalMarks: meta.totalMarks,
    };
}

// ─── 2010–2018 (May/June + Oct/Nov, Papers 1, 2, 4, 6 — variants 1 & 2) ──────

const entries2010to2018 = [];
for (let year = 2010; year <= 2018; year++) {
    for (const [session, label] of [['s', 'May/June'], ['w', 'Oct/Nov']]) {
        for (const paper of [1, 2, 4, 6]) {
            for (const variant of [1, 2]) {
                entries2010to2018.push(makeEntry(year, session, label, paper, variant));
            }
        }
    }
}

// ─── 2019–2023 (May/June + Oct/Nov + Feb/March, Papers 1, 2, 4, 6) ───────────

const entries2019to2023 = [];
for (let year = 2019; year <= 2023; year++) {
    // May/June and Oct/Nov — variants 1 & 2
    for (const [session, label] of [['s', 'May/June'], ['w', 'Oct/Nov']]) {
        for (const paper of [1, 2, 4, 6]) {
            for (const variant of [1, 2]) {
                entries2019to2023.push(makeEntry(year, session, label, paper, variant));
            }
        }
    }
    // Feb/March — variant 2 only
    for (const paper of [1, 2, 4, 6]) {
        entries2019to2023.push(makeEntry(year, 'm', 'Feb/March', paper, 2));
    }
}

// ─── 2024 ─────────────────────────────────────────────────────────────────────

const entries2024 = [
    // May/June variant 1 (Papers 1–4 incl. Practical)
    makeEntry(2024, 's', 'May/June', 1, 1),
    makeEntry(2024, 's', 'May/June', 2, 1),
    makeEntry(2024, 's', 'May/June', 3, 1),
    makeEntry(2024, 's', 'May/June', 4, 1),
    // May/June variant 2
    makeEntry(2024, 's', 'May/June', 1, 2),
    makeEntry(2024, 's', 'May/June', 2, 2),
    makeEntry(2024, 's', 'May/June', 4, 2),
    makeEntry(2024, 's', 'May/June', 6, 1),
    makeEntry(2024, 's', 'May/June', 6, 2),
    // Oct/Nov
    ...([1, 2, 4, 6].flatMap(p => [1, 2].map(v => makeEntry(2024, 'w', 'Oct/Nov', p, v)))),
    // Feb/March — variant 2 only
    ...[1, 2, 4, 6].map(p => makeEntry(2024, 'm', 'Feb/March', p, 2)),
];

// ─── 2025 (May/June + Oct/Nov + Feb/March) ────────────────────────────────────

const entries2025 = [];
for (const [session, label] of [['s', 'May/June'], ['w', 'Oct/Nov']]) {
    for (const paper of [1, 2, 4, 6]) {
        for (const variant of [1, 2]) {
            entries2025.push(makeEntry(2025, session, label, paper, variant));
        }
    }
}
// Feb/March 2025 — variant 2 only
for (const paper of [1, 2, 4, 6]) {
    entries2025.push(makeEntry(2025, 'm', 'Feb/March', paper, 2));
}

// ─── Final export ─────────────────────────────────────────────────────────────

export const oLevelPhysicsPastPapers = [
    ...entries2010to2018,
    ...entries2019to2023,
    ...entries2024,
    ...entries2025,
];

export const oLevelPhysicsAvailableYears = [
    2025, 2024, 2023, 2022, 2021, 2020, 2019,
    2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
];

export const oLevelPhysicsAvailableMonths = ['May/June', 'Oct/Nov', 'Feb/March'];

export const oLevelPhysicsAvailableUnits = [
    { code: 'Paper 1', name: 'Multiple Choice (Core)',                type: 'Core'     },
    { code: 'Paper 2', name: 'Theory (Core)',                         type: 'Core'     },
    { code: 'Paper 3', name: 'Practical Test (Core)',                 type: 'Core'     },
    { code: 'Paper 4', name: 'Alternative to Practical (Core)',       type: 'Core'     },
    { code: 'Paper 5', name: 'Practical Test (Extended)',             type: 'Extended' },
    { code: 'Paper 6', name: 'Alternative to Practical (Extended)',   type: 'Extended' },
];
