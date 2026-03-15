/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 5
 * "Geometric series"
 */

export const note_mathematics_2_4_5 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Find the sum of a finite geometric series and the sum to infinity of a convergent geometric series.' },
            terms: []
        },
        {
            id: 'h-finite',
            type: 'heading',
            data: { text: 'Sum of a Finite Geometric Series', level: 2 },
            terms: []
        },
        {
            id: 'eq-finite1',
            type: 'equation',
            data: {
                html: 'S<sub>n</sub> = <span class="nb-frac"><span class="nb-num">a(1 − r<sup>n</sup>)</span><span class="nb-den">1 − r</span></span>',
                caption: 'Use when |r| < 1 (numerically convenient)'
            },
            terms: []
        },
        {
            id: 'eq-finite2',
            type: 'equation',
            data: {
                html: 'S<sub>n</sub> = <span class="nb-frac"><span class="nb-num">a(r<sup>n</sup> − 1)</span><span class="nb-den">r − 1</span></span>',
                caption: 'Use when r > 1 (avoids negative numerator/denominator)'
            },
            terms: []
        },
        {
            id: 'callout-derive',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Derivation',
                text: 'Let Sₙ = a + ar + ar² + … + arⁿ⁻¹\nMultiply by r: rSₙ = ar + ar² + ar³ + … + arⁿ\nSubtract: Sₙ − rSₙ = a − arⁿ\nSₙ(1 − r) = a(1 − rⁿ)\nSₙ = a(1 − rⁿ)/(1 − r)  ✓'
            },
            terms: []
        },
        {
            id: 'h-infinite',
            type: 'heading',
            data: { text: 'Sum to Infinity', level: 2 },
            terms: []
        },
        {
            id: 'p-infinite',
            type: 'paragraph',
            data: { text: 'When <strong>|r| &lt; 1</strong>, the terms shrink towards zero. As n → ∞, rⁿ → 0, so the finite sum formula gives a finite limit called the <strong>sum to infinity S∞</strong>:' },
            terms: []
        },
        {
            id: 'eq-sinf',
            type: 'equation',
            data: {
                html: 'S<sub>∞</sub> = <span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">1 − r</span></span>   (valid only when |r| &lt; 1)',
                caption: 'Sum to infinity of a convergent geometric series'
            },
            terms: []
        },
        {
            id: 'callout-warn',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'S∞ only exists when |r| < 1',
                text: 'If |r| ≥ 1, the terms do not shrink to zero and the series diverges (no finite sum to infinity). Always check |r| < 1 before applying the S∞ formula.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Finite Sum', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the sum of the first 8 terms of 3 + 6 + 12 + 24 + …',
                text: 'a = 3, r = 2, n = 8\n\nS₈ = 3(2⁸ − 1)/(2 − 1) = 3(256 − 1)/1 = 3 × 255 = 765'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Sum to Infinity', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A geometric series has first term 24 and sum to infinity 40. Find the common ratio.',
                text: 'S∞ = a/(1 − r) = 40\n24/(1 − r) = 40\n24 = 40(1 − r)\n24 = 40 − 40r\n40r = 16\nr = 16/40 = 2/5 = 0.4\n\nCheck: |r| = 0.4 < 1 ✓, so S∞ exists.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Finding n for a Given Sum', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'For the series 5 + 10 + 20 + …, find the smallest n such that Sₙ > 1000.',
                text: 'a = 5, r = 2\nSₙ = 5(2ⁿ − 1) > 1000\n2ⁿ − 1 > 200\n2ⁿ > 201\n\nTake log base 2: n > log₂(201) = ln(201)/ln(2) ≈ 5.302/0.693 ≈ 7.65\n\nSince n must be an integer: n = 8\nCheck: S₈ = 5(256−1) = 5(255) = 1275 > 1000 ✓\n       S₇ = 5(128−1) = 5(127) = 635 < 1000 ✓'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Summing Inequalities',
                text: 'When "Sₙ > k", take logarithms both sides to find n. Remember:\n• log(rⁿ) = n log r\n• If r > 1, the inequality direction stays the same when dividing by log r (positive)\n• If 0 < r < 1, then log r < 0 — the inequality REVERSES when dividing by log r'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Geometric series: Sₙ = a(1−rⁿ)/(1−r) finite; S∞ = a/(1−r) only when |r| < 1. To find n when sum exceeds k: use logarithms. Derivation: multiply by r, subtract, factorise.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-finite1', prompt: 'State the formula for the sum of the first n terms of a geometric series.' },
            { id: 'c2', blockId: 'eq-sinf', prompt: 'State the sum to infinity formula and the condition for it to exist.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'A GP has first term 24 and S∞ = 40. Find r.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Find the smallest n such that 5+10+20+… exceeds 1000.' }
        ],
        summaryText: 'Geometric series: Sₙ = a(1−rⁿ)/(1−r). S∞ = a/(1−r) only when |r|<1. To find n: take logs. Common exam task: find r from S∞ formula by solving a/(1−r) = given value.',
        ready: true
    },
    evidence: []
};
