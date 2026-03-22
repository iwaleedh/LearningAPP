/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 0
 * "Language of sequences and series"
 */

export const note_mathematics_2_4_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Understand and use the terminology of sequences and series, including convergent, divergent, periodic, and oscillating sequences.' },
            terms: []
        },
        {
            id: 'h-seq',
            type: 'heading',
            data: { text: 'What is a Sequence?', level: 2 },
            terms: []
        },
        {
            id: 'p-seq',
            type: 'paragraph',
            data: { text: 'A <strong>sequence</strong> is an ordered list of numbers following a rule. Each number in the sequence is called a <strong>term</strong>. Terms are usually labelled u₁, u₂, u₃, … or a₁, a₂, a₃, … where the subscript gives the position.' },
            terms: []
        },
        {
            id: 'h-notation',
            type: 'heading',
            data: { text: 'Notation', level: 2 },
            terms: []
        },
        {
            id: 'list-notation',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>uₙ</strong> or <strong>aₙ</strong>: the n-th term (also written u(n))' },
                    { text: '<strong>u₁</strong>: the first term of the sequence' },
                    { text: '<strong>n-th term formula</strong>: a formula giving uₙ directly in terms of n (e.g. uₙ = 2n + 1)' },
                    { text: '<strong>Recurrence relation</strong>: gives each term in terms of the previous one(s) (e.g. uₙ₊₁ = uₙ + 3)' }
                ]
            },
            terms: []
        },
        {
            id: 'h-types',
            type: 'heading',
            data: { text: 'Types of Sequence', level: 2 },
            terms: []
        },
        {
            id: 'table-types',
            type: 'comparisonTable',
            data: {
                headers: ['Type', 'Definition', 'Example'],
                rows: [
                    ['Convergent', 'Terms approach a finite limit as n → ∞', '1, 1/2, 1/4, 1/8, … → 0'],
                    ['Divergent', 'Terms grow without bound (or do not converge)', '1, 2, 4, 8, 16, … → ∞'],
                    ['Periodic', 'Terms repeat with a fixed period k: uₙ₊ₖ = uₙ', '1, 2, 3, 1, 2, 3, … (period 3)'],
                    ['Oscillating', 'Terms alternate between values above and below a point', '1, −1, 1, −1, … or 100, 1, 50, 1, ...'],
                    ['Arithmetic', 'Constant difference between consecutive terms', '3, 7, 11, 15, … (d = 4)'],
                    ['Geometric', 'Constant ratio between consecutive terms', '2, 6, 18, 54, … (r = 3)']
                ],
                caption: 'Types of sequence'
            },
            terms: []
        },
        {
            id: 'h-series',
            type: 'heading',
            data: { text: 'What is a Series?', level: 2 },
            terms: []
        },
        {
            id: 'p-series',
            type: 'paragraph',
            data: { text: 'A <strong>series</strong> is the sum of the terms of a sequence. The partial sum of the first n terms is usually written <strong>Sₙ</strong>:' },
            terms: []
        },
        {
            id: 'eq-sn',
            type: 'equation',
            data: {
                html: 'S<sub>n</sub> = u<sub>1</sub> + u<sub>2</sub> + u<sub>3</sub> + … + u<sub>n</sub>',
                caption: 'Sum of the first n terms of a sequence'
            },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Sequence vs Series',
                text: 'A SEQUENCE is an ordered list: 3, 7, 11, 15, …\nA SERIES is the sum: 3 + 7 + 11 + 15 + … = S₄ = 36\n\nThe terms of a CONVERGENT series also converge when summed (the sum exists as a finite number). Not all convergent sequences produce convergent series.'
            },
            terms: []
        },
        {
            id: 'h-period',
            type: 'heading',
            data: { text: 'Periodic Sequences', level: 2 },
            terms: []
        },
        {
            id: 'p-period',
            type: 'paragraph',
            data: { text: 'A sequence is <strong>periodic with period k</strong> if uₙ₊ₖ = uₙ for all n. The sequence repeats the same block of k numbers indefinitely. To find the r-th term in a periodic sequence, use the remainder when r is divided by k.' },
            terms: []
        },
        {
            id: 'callout-we',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the 100th term of the sequence 1, 3, 5, 1, 3, 5, 1, 3, 5, …',
                text: 'The sequence has period 3 (it repeats every 3 terms).\n\n100 ÷ 3 = 33 remainder 1.\n\nSince the remainder is 1, the 100th term is the same as the 1st term = 1.\n\n(If remainder = 0, the term equals the last term in the cycle.)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'The exam may ask you to "describe the behaviour" of a sequence — state whether it is convergent, divergent, periodic, or oscillating, and give a brief reason. For |r| < 1 geometric: convergent. For |r| > 1 geometric: divergent. For r = −1 geometric: oscillating. For a periodic recurrence: find the period by generating terms.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Sequence: ordered list of terms u₁, u₂, u₃, … defined by an nth-term formula or recurrence relation. Types: convergent (→ limit), divergent (→ ∞), periodic (repeats every k terms), oscillating. Series Sₙ = sum of first n terms. Arithmetic sequence: constant difference. Geometric sequence: constant ratio.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Ensure you understand the difference between 'convergent' (approaching a limit) and 'oscillating' (moving back and forth). You are frequently asked to classify a sequence and mathematically justify your choice in exams."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-types', prompt: 'What is the difference between a convergent and a divergent sequence? Give an example of each.' },
            { id: 'c2', blockId: 'callout-key', prompt: 'What is the difference between a sequence and a series?' },
            { id: 'c3', blockId: 'p-period', prompt: 'What does it mean for a sequence to be periodic with period k? Give an example.' },
            { id: 'c4', blockId: 'callout-we', prompt: 'The sequence 1, 3, 5, 1, 3, 5, … has period 3. What is the 100th term?' }
        ],
        summaryText: 'Sequence = ordered list; series = sum of terms. Convergent: terms → L as n→∞. Divergent: terms → ∞. Periodic: repeats every k terms (uₙ₊ₖ = uₙ). For periodic sequence: find terms position mod k. Arithmetic: constant difference. Geometric: constant ratio.',
        ready: true
    },
    evidence: []
};
