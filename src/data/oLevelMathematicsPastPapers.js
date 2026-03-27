// O Level Mathematics Past Papers — Cambridge IGCSE (0580) + Additional Mathematics (0606)
// Covers: 2010–2025, May/June + Oct/Nov, Papers 1–4 (0580) + Papers 1–2 (0606)
// Feb/March session included from 2019 onwards (variant 2 only)
// All PDFs served locally from public/pastpapers/olevel/maths/

// 0580 paper metadata
const PAPER_META_0580 = {
    1: { unitName: 'Mathematics (Short Answer — Core)',     type: 'Core',     duration: '1 hour',             totalMarks: 56 },
    2: { unitName: 'Mathematics (Short Answer — Extended)', type: 'Extended', duration: '1 hour',             totalMarks: 70 },
    3: { unitName: 'Mathematics (Written — Core)',          type: 'Core',     duration: '2 hours',            totalMarks: 104 },
    4: { unitName: 'Mathematics (Written — Extended)',      type: 'Extended', duration: '2 hours 30 minutes', totalMarks: 130 },
};

// 0606 Additional Mathematics paper metadata (Papers 1 and 2)
const PAPER_META_0606 = {
    1: { unitName: 'Additional Mathematics Paper 1', type: 'Extended', duration: '2 hours', totalMarks: 80 },
    2: { unitName: 'Additional Mathematics Paper 2', type: 'Extended', duration: '2 hours', totalMarks: 80 },
};

function url0580(year, session, fileType, paper, variant) {
    const yy = String(year).slice(-2);
    return `/pastpapers/olevel/maths/${year}/0580_${session}${yy}_${fileType}_${paper}${variant}.pdf`;
}

function url0606(year, session, fileType, paper, variant) {
    const yy = String(year).slice(-2);
    return `/pastpapers/olevel/maths/${year}/0606_${session}${yy}_${fileType}_${paper}${variant}.pdf`;
}

function makeEntry0580(year, session, monthLabel, paper, variant) {
    const meta = PAPER_META_0580[paper];
    return {
        id: `olevel-maths-${year}-${session}-p${paper}v${variant}`,
        year,
        month: monthLabel,
        unit: paper <= 2 ? `Paper ${paper} (${paper === 1 ? 'Core' : 'Extended'})` : `Paper ${paper} (${paper === 3 ? 'Core' : 'Extended'})`,
        unitName: meta.unitName,
        type: meta.type,
        code: `0580/${paper}${variant}`,
        questionPaperUrl: url0580(year, session, 'qp', paper, variant),
        markingSchemeUrl: url0580(year, session, 'ms', paper, variant),
        duration: meta.duration,
        totalMarks: meta.totalMarks,
    };
}

function makeEntry0606(year, session, monthLabel, paper, variant) {
    const meta = PAPER_META_0606[paper];
    return {
        id: `olevel-maths-addl-${year}-${session}-p${paper}v${variant}`,
        year,
        month: monthLabel,
        unit: `Paper ${paper} (Additional)`,
        unitName: meta.unitName,
        type: meta.type,
        code: `0606/${paper}${variant}`,
        questionPaperUrl: url0606(year, session, 'qp', paper, variant),
        markingSchemeUrl: url0606(year, session, 'ms', paper, variant),
        duration: meta.duration,
        totalMarks: meta.totalMarks,
    };
}

// ---------------------------------------------------------------------------
// 2010–2018: May/June (s) + Oct/Nov (w), variants 1 & 2
// 0580: Papers 1–4, variants 1 & 2 → 16 per year
// 0606: Papers 1–2, variants 1 & 2 → 8 per year
// Total: 24 per year × 9 = 216
// ---------------------------------------------------------------------------
const entries2010to2018 = [];

for (const year of [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]) {
    // May/June (s) — 0580
    for (const paper of [1, 2, 3, 4]) {
        for (const variant of [1, 2]) {
            entries2010to2018.push(makeEntry0580(year, 's', 'May/June', paper, variant));
        }
    }
    // Oct/Nov (w) — 0580
    for (const paper of [1, 2, 3, 4]) {
        for (const variant of [1, 2]) {
            entries2010to2018.push(makeEntry0580(year, 'w', 'Oct/Nov', paper, variant));
        }
    }
    // May/June (s) — 0606
    for (const paper of [1, 2]) {
        for (const variant of [1, 2]) {
            entries2010to2018.push(makeEntry0606(year, 's', 'May/June', paper, variant));
        }
    }
    // Oct/Nov (w) — 0606
    for (const paper of [1, 2]) {
        for (const variant of [1, 2]) {
            entries2010to2018.push(makeEntry0606(year, 'w', 'Oct/Nov', paper, variant));
        }
    }
}

// ---------------------------------------------------------------------------
// 2019–2023: Same as above + Feb/March (m) variant 2 only
// 0580 m session: Papers 1, 2, 3, 4 (variant 2) → 4 per year
// 0606 m session: Papers 1, 2 (variant 2) → 2 per year
// Total: 30 per year × 5 = 150
// ---------------------------------------------------------------------------
const entries2019to2023 = [];

for (const year of [2019, 2020, 2021, 2022, 2023]) {
    // May/June (s) — 0580
    for (const paper of [1, 2, 3, 4]) {
        for (const variant of [1, 2]) {
            entries2019to2023.push(makeEntry0580(year, 's', 'May/June', paper, variant));
        }
    }
    // Oct/Nov (w) — 0580
    for (const paper of [1, 2, 3, 4]) {
        for (const variant of [1, 2]) {
            entries2019to2023.push(makeEntry0580(year, 'w', 'Oct/Nov', paper, variant));
        }
    }
    // May/June (s) — 0606
    for (const paper of [1, 2]) {
        for (const variant of [1, 2]) {
            entries2019to2023.push(makeEntry0606(year, 's', 'May/June', paper, variant));
        }
    }
    // Oct/Nov (w) — 0606
    for (const paper of [1, 2]) {
        for (const variant of [1, 2]) {
            entries2019to2023.push(makeEntry0606(year, 'w', 'Oct/Nov', paper, variant));
        }
    }
    // Feb/March (m) — variant 2 only — 0580
    for (const paper of [1, 2, 3, 4]) {
        entries2019to2023.push(makeEntry0580(year, 'm', 'Feb/March', paper, 2));
    }
    // Feb/March (m) — variant 2 only — 0606
    for (const paper of [1, 2]) {
        entries2019to2023.push(makeEntry0606(year, 'm', 'Feb/March', paper, 2));
    }
}

// ---------------------------------------------------------------------------
// 2024
// ---------------------------------------------------------------------------
const entries2024 = [];

// May/June v1 — 0580
for (const paper of [1, 2, 3, 4]) {
    entries2024.push(makeEntry0580(2024, 's', 'May/June', paper, 1));
}

// May/June v2 — 0580
for (const paper of [1, 2, 3, 4]) {
    entries2024.push(makeEntry0580(2024, 's', 'May/June', paper, 2));
}

// May/June v1 & v2 — 0606
for (const paper of [1, 2]) {
    for (const variant of [1, 2]) {
        entries2024.push(makeEntry0606(2024, 's', 'May/June', paper, variant));
    }
}

// Oct/Nov v1 & v2 — 0580
for (const paper of [1, 2, 3, 4]) {
    for (const variant of [1, 2]) {
        entries2024.push(makeEntry0580(2024, 'w', 'Oct/Nov', paper, variant));
    }
}

// Oct/Nov v1 & v2 — 0606
for (const paper of [1, 2]) {
    for (const variant of [1, 2]) {
        entries2024.push(makeEntry0606(2024, 'w', 'Oct/Nov', paper, variant));
    }
}

// Feb/March v2 — 0580
for (const paper of [1, 2, 3, 4]) {
    entries2024.push(makeEntry0580(2024, 'm', 'Feb/March', paper, 2));
}

// Feb/March v2 — 0606
for (const paper of [1, 2]) {
    entries2024.push(makeEntry0606(2024, 'm', 'Feb/March', paper, 2));
}

// ---------------------------------------------------------------------------
// 2025: Same structure as 2019–2023 → 30 entries
// May/June (s) + Oct/Nov (w) variants 1 & 2 + Feb/March (m) variant 2 only
// ---------------------------------------------------------------------------
const entries2025 = [];

// May/June (s) — 0580
for (const paper of [1, 2, 3, 4]) {
    for (const variant of [1, 2]) {
        entries2025.push(makeEntry0580(2025, 's', 'May/June', paper, variant));
    }
}
// Oct/Nov (w) — 0580
for (const paper of [1, 2, 3, 4]) {
    for (const variant of [1, 2]) {
        entries2025.push(makeEntry0580(2025, 'w', 'Oct/Nov', paper, variant));
    }
}
// May/June (s) — 0606
for (const paper of [1, 2]) {
    for (const variant of [1, 2]) {
        entries2025.push(makeEntry0606(2025, 's', 'May/June', paper, variant));
    }
}
// Oct/Nov (w) — 0606
for (const paper of [1, 2]) {
    for (const variant of [1, 2]) {
        entries2025.push(makeEntry0606(2025, 'w', 'Oct/Nov', paper, variant));
    }
}
// Feb/March (m) — variant 2 only — 0580
for (const paper of [1, 2, 3, 4]) {
    entries2025.push(makeEntry0580(2025, 'm', 'Feb/March', paper, 2));
}
// Feb/March (m) — variant 2 only — 0606
for (const paper of [1, 2]) {
    entries2025.push(makeEntry0606(2025, 'm', 'Feb/March', paper, 2));
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const oLevelMathematicsPastPapers = [
    ...entries2010to2018,
    ...entries2019to2023,
    ...entries2024,
    ...entries2025,
];

export const oLevelMathematicsAvailableYears = [
    2025, 2024, 2023, 2022, 2021, 2020, 2019,
    2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
];

export const oLevelMathematicsAvailableMonths = ['May/June', 'Oct/Nov', 'Feb/March'];

export const oLevelMathematicsAvailableUnits = [
    { code: 'Paper 1 (Core)',       name: 'Mathematics Core — Short Answer',     type: 'Core'     },
    { code: 'Paper 2 (Extended)',   name: 'Mathematics Extended — Short Answer',  type: 'Extended' },
    { code: 'Paper 3 (Core)',       name: 'Mathematics Core — Written',           type: 'Core'     },
    { code: 'Paper 4 (Extended)',   name: 'Mathematics Extended — Written',       type: 'Extended' },
    { code: 'Paper 1 (Additional)', name: 'Additional Mathematics Paper 1',       type: 'Extended' },
    { code: 'Paper 2 (Additional)', name: 'Additional Mathematics Paper 2',       type: 'Extended' },
];
