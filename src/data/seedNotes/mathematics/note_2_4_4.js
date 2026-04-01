/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 4
 * "Geometric sequences"
 */

export const note_mathematics_2_4_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Find the nth term of a geometric sequence and identify its behaviour based on the common ratio.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is a Geometric Sequence?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A <strong>geometric sequence</strong> (GP) has a <strong>constant ratio</strong> between consecutive terms. This common ratio is denoted <strong>r</strong>. Dividing any term by the previous one gives r. The sequence runs: a, ar, ar², ar³, …' },
            terms: []
        },
        {
            id: 'callout-nth',
            type: 'callout',
            data: {
                style: 'key',
                title: 'nth Term Formula',
                text: 'uₙ = a · rⁿ⁻¹\n\na = first term, r = common ratio, n = term number.\n\nTo find r: r = uₙ₊₁ / uₙ (any consecutive pair, same ratio throughout).'
            },
            terms: []
        },
        {
            id: 'svg-geom',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 130" width="340" height="130"><defs><marker id="ah59" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker></defs><text x="10" y="25" font-size="11" fill="#374151" font-family="sans-serif">Geometric sequence (r=2): 1, 2, 4, 8, 16, …</text><line x1="20" y1="80" x2="320" y2="80" stroke="#374151" stroke-width="1.5" marker-end="url(#ah59)"/><circle cx="40" cy="80" r="5" fill="#2563eb"/><circle cx="90" cy="80" r="7" fill="#2563eb"/><circle cx="150" cy="80" r="10" fill="#2563eb"/><circle cx="220" cy="80" r="14" fill="#2563eb"/><circle cx="300" cy="80" r="19" fill="#2563eb"/><text x="32" y="105" font-size="12" fill="#2563eb" font-family="sans-serif">u₁=1</text><text x="80" y="105" font-size="12" fill="#2563eb" font-family="sans-serif">u₂=2</text><text x="140" y="105" font-size="12" fill="#2563eb" font-family="sans-serif">u₃=4</text><text x="210" y="105" font-size="12" fill="#2563eb" font-family="sans-serif">u₄=8</text><text x="285" y="105" font-size="12" fill="#2563eb" font-family="sans-serif">u₅=16</text><text x="55" y="65" font-size="12" fill="#10b981" font-family="sans-serif">×r</text><text x="115" y="65" font-size="12" fill="#10b981" font-family="sans-serif">×r</text><text x="178" y="65" font-size="12" fill="#10b981" font-family="sans-serif">×r</text><text x="252" y="65" font-size="12" fill="#10b981" font-family="sans-serif">×r</text></svg>',
                caption: 'Geometric sequence: each term is multiplied by the constant ratio r'
            },
            terms: []
        },
        {
            id: 'h-behaviour',
            type: 'heading',
            data: { text: 'Behaviour Based on r', level: 2 },
            terms: []
        },
        {
            id: 'table-behaviour',
            type: 'comparisonTable',
            data: {
                headers: ['Value of r', 'Behaviour', 'Example'],
                rows: [
                    ['r > 1', 'Increasing, divergent', 'r = 2: 1, 2, 4, 8, … → ∞'],
                    ['0 < r < 1', 'Decreasing, convergent to 0', 'r = 1/2: 16, 8, 4, 2, 1, … → 0'],
                    ['r = 1', 'Constant (all terms equal a)', '5, 5, 5, 5, …'],
                    ['−1 < r < 0', 'Alternating, convergent to 0', 'r = −1/2: 8, −4, 2, −1, …'],
                    ['r = −1', 'Alternating, periodic (period 2)', 'r = −1: 3, −3, 3, −3, …'],
                    ['r < −1', 'Alternating, divergent (oscillating)', 'r = −2: 1, −2, 4, −8, …']
                ],
                caption: 'Behaviour of geometric sequence for different values of r'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Find a and r', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The 3rd term of a GP is 12 and the 6th term is 96. Find a and r.',
                text: 'u₃ = ar² = 12  … (1)\nu₆ = ar⁵ = 96  … (2)\n\nDivide (2) by (1):\n  ar⁵/ar² = 96/12  →  r³ = 8  →  r = 2\n\nSubstitute into (1):\n  a(4) = 12  →  a = 3\n\nSo the GP: 3, 6, 12, 24, 48, 96, …\nnth term: uₙ = 3 × 2ⁿ⁻¹'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Three Consecutive Terms', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'x−1, x+1, 2x+3 are three consecutive terms of a GP. Find x.',
                text: 'In a GP, consecutive terms have a constant ratio:\n  (x+1)/(x−1) = (2x+3)/(x+1)\n\nCross-multiply:\n  (x+1)² = (x−1)(2x+3)\n  x² + 2x + 1 = 2x² + 3x − 2x − 3\n  x² + 2x + 1 = 2x² + x − 3\n  0 = x² − x − 4\n\nUsing the quadratic formula:\n  x = (1 ± √17)/2\n  x ≈ 2.56 or x ≈ −1.56\n\nNote: x = (1−√17)/2 gives x−1 < 0 so check validity.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Three Consecutive Terms Trick',
                text: 'Three consecutive terms of a GP can be written as a/r, a, ar — this eliminates r when you need their product, since (a/r)(a)(ar) = a³. This is useful when you know the product of three consecutive GP terms.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Geometric sequence: uₙ = arⁿ⁻¹, common ratio r = uₙ₊₁/uₙ. Behaviour: |r|>1 divergent; |r|<1 convergent to 0; r=−1 periodic; r<−1 oscillating divergent. Three consecutive GP terms: a/r, a, ar (product = a³). To find a and r: form two equations and divide.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When finding the common ratio 'r' in a geometric sequence, especially if given non-consecutive terms like U4 and U2, remember that taking a square root gives both positive and negative values for 'r'. Check if the question specifies 'a sequence of positive terms'."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-nth', prompt: 'State the nth term formula for a geometric sequence.' },
            { id: 'c2', blockId: 'table-behaviour', prompt: 'How does a geometric sequence with |r| < 1 behave? With r = −1?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'The 3rd term of a GP is 12 and the 6th is 96. Find a and r.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you represent three consecutive GP terms using the trick?' }
        ],
        summaryText: 'GP nth term: uₙ = arⁿ⁻¹. Common ratio r = uₙ₊₁/uₙ. Behaviour depends on r: |r|<1 → converges to 0; r>1 → diverges; r=−1 → alternates; |r|>1 and r<0 → oscillating divergence. Trick: consecutive terms = a/r, a, ar.',
        ready: true
    },
    evidence: []
};
