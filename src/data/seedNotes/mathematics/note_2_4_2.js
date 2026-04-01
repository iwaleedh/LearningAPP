/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 2
 * "Arithmetic sequences"
 */

export const note_mathematics_2_4_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Find the nth term of an arithmetic sequence and use it to solve problems.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is an Arithmetic Sequence?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'An <strong>arithmetic sequence</strong> (AP) has a <strong>constant difference</strong> between consecutive terms. This common difference is denoted <strong>d</strong>. The first term is <strong>a</strong>. The sequence runs: a, a+d, a+2d, a+3d, …' },
            terms: []
        },
        {
            id: 'callout-nth',
            type: 'callout',
            data: {
                style: 'key',
                title: 'nth Term Formula',
                text: 'uₙ = a + (n − 1)d\n\na = first term, d = common difference, n = term number.\n\nTo find d: d = uₙ₊₁ − uₙ (any consecutive pair).'
            },
            terms: []
        },
        {
            id: 'svg-arith',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 110" width="340" height="110"><defs><marker id="ah58" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker></defs><line x1="20" y1="60" x2="320" y2="60" stroke="#374151" stroke-width="1.5" marker-end="url(#ah58)"/><circle cx="50" cy="60" r="6" fill="#2563eb"/><circle cx="110" cy="60" r="6" fill="#2563eb"/><circle cx="170" cy="60" r="6" fill="#2563eb"/><circle cx="230" cy="60" r="6" fill="#2563eb"/><circle cx="290" cy="60" r="6" fill="#2563eb"/><text x="44" y="85" font-size="13" fill="#2563eb" font-family="sans-serif" font-style="italic">a</text><text x="100" y="85" font-size="12" fill="#2563eb" font-family="sans-serif">a+d</text><text x="158" y="85" font-size="11" fill="#2563eb" font-family="sans-serif">a+2d</text><text x="218" y="85" font-size="11" fill="#2563eb" font-family="sans-serif">a+3d</text><text x="278" y="85" font-size="11" fill="#2563eb" font-family="sans-serif">a+4d</text><line x1="50" y1="45" x2="110" y2="45" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah58)"/><line x1="110" y1="45" x2="170" y2="45" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah58)"/><line x1="170" y1="45" x2="230" y2="45" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah58)"/><line x1="230" y1="45" x2="290" y2="45" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah58)"/><text x="72" y="40" font-size="12" fill="#10b981" font-family="sans-serif" font-style="italic">d</text><text x="132" y="40" font-size="12" fill="#10b981" font-family="sans-serif" font-style="italic">d</text><text x="192" y="40" font-size="12" fill="#10b981" font-family="sans-serif" font-style="italic">d</text><text x="252" y="40" font-size="12" fill="#10b981" font-family="sans-serif" font-style="italic">d</text><text x="35" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₁</text><text x="96" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₂</text><text x="158" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₃</text><text x="218" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₄</text><text x="278" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₅</text></svg>',
                caption: 'Arithmetic sequence: each term increases by constant difference d'
            },
            terms: []
        },
        {
            id: 'h-props',
            type: 'heading',
            data: { text: 'Key Properties', level: 2 },
            terms: []
        },
        {
            id: 'list-props',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>d > 0</strong>: increasing sequence' },
                    { text: '<strong>d < 0</strong>: decreasing sequence' },
                    { text: '<strong>d = 0</strong>: constant sequence' },
                    { text: 'Arithmetic sequences are always <strong>divergent</strong> (unless d = 0)' },
                    { text: 'Common difference: d = u₂ − u₁ = u₃ − u₂ = uₙ₊₁ − uₙ' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Find the nth Term', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The 5th term of an AP is 23 and the 10th term is 43. Find a and d.',
                text: 'u₅ = a + 4d = 23  … (1)\nu₁₀ = a + 9d = 43  … (2)\n\nSubtract (1) from (2):\n  5d = 20  →  d = 4\n  a = 23 − 4(4) = 23 − 16 = 7\n\nSo the sequence starts: 7, 11, 15, 19, 23, …\nnth term: uₙ = 7 + (n−1)·4 = 4n + 3'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Which Term Equals a Given Value?', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The nth term of an AP is uₙ = 4n + 3. Find which term equals 79.',
                text: 'Set uₙ = 79:\n  4n + 3 = 79\n  4n = 76\n  n = 19\n\nThe 19th term equals 79.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Finding a in an AP', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'x, 3x+2, 7x−4 are three consecutive terms of an AP. Find x.',
                text: 'In an AP, consecutive terms have a constant difference, so:\n  (3x+2) − x = (7x−4) − (3x+2)\n  2x + 2 = 4x − 6\n  8 = 2x\n  x = 4\n\nThe three terms are: 4, 14, 24. Check d: 14−4=10, 24−14=10. ✓'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Three Useful Trick Representations',
                text: 'If you know three consecutive terms of an AP but not their values, write them as (a−d), a, (a+d) — this makes the algebra much simpler because a is the middle term and the common difference is d. Similarly, four consecutive terms: (a−3d), (a−d), (a+d), (a+3d).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Arithmetic sequence: uₙ = a + (n−1)d, where a = first term, d = common difference. Find d from any two consecutive terms. Solve uₙ = value to find position of that term. Three consecutive AP terms can be written (a−d), a, (a+d) to simplify algebra.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "In questions where you must find the first negative or positive term of an arithmetic sequence, set up an inequality (e.g., Un < 0) rather than trying to guess and check terms."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-nth', prompt: 'State the formula for the nth term of an arithmetic sequence.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'The 5th term of an AP is 23 and the 10th term is 43. Find a and d.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Given uₙ = 4n+3, which term equals 79?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How would you represent three consecutive terms of an AP as a trick?' }
        ],
        summaryText: 'AP nth term: uₙ = a + (n−1)d. Find d from u_{n+1} − uₙ. Use u_p and u_q to form simultaneous equations for a and d. Trick: three consecutive AP terms → (a−d), a, (a+d).',
        ready: true
    },
    evidence: []
};
