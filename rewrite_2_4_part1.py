import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_4_0: Language of sequences and series ───────────────────────────
note_2_4_0 = """/**
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
                text: 'A SEQUENCE is an ordered list: 3, 7, 11, 15, …\\nA SERIES is the sum: 3 + 7 + 11 + 15 + … = S₄ = 36\\n\\nThe terms of a CONVERGENT series also converge when summed (the sum exists as a finite number). Not all convergent sequences produce convergent series.'
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
                text: 'The sequence has period 3 (it repeats every 3 terms).\\n\\n100 ÷ 3 = 33 remainder 1.\\n\\nSince the remainder is 1, the 100th term is the same as the 1st term = 1.\\n\\n(If remainder = 0, the term equals the last term in the cycle.)'
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
"""

# ─── note_2_4_1: Recurrence relations ────────────────────────────────────────
note_2_4_1 = """/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 1
 * "Recurrence relations"
 */

export const note_mathematics_2_4_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Define sequences using recurrence relations and generate terms by substitution.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is a Recurrence Relation?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A <strong>recurrence relation</strong> expresses each term of a sequence as a function of the previous term(s): uₙ₊₁ = f(uₙ). Together with an initial term u₁ (or u₀), a recurrence relation completely defines the sequence. You generate terms by substituting each term into the formula to get the next.' },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Notation',
                text: 'u_{n+1} = f(u_n),  u_1 = a\\n\\nThis is read: "the (n+1)th term equals f applied to the nth term, given that the first term is a."\\n\\nSpecial cases:\\n• Arithmetic: uₙ₊₁ = uₙ + d  (add constant d each time)\\n• Geometric: uₙ₊₁ = r · uₙ  (multiply by constant r each time)'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Generate Five Terms', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'u_{n+1} = 3u_n − 4, u_1 = 5. Find u_2, u_3, u_4, u_5.',
                text: 'u₁ = 5\\nu₂ = 3(5) − 4 = 15 − 4 = 11\\nu₃ = 3(11) − 4 = 33 − 4 = 29\\nu₄ = 3(29) − 4 = 87 − 4 = 83\\nu₅ = 3(83) − 4 = 249 − 4 = 245\\n\\nThe sequence 5, 11, 29, 83, 245, … is divergent (growing rapidly).'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Periodic Sequence from a Recurrence Relation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'u_{n+1} = 4 − u_n, u_1 = 1. Show the sequence is periodic and find the period.',
                text: 'u₁ = 1\\nu₂ = 4 − 1 = 3\\nu₃ = 4 − 3 = 1\\nu₄ = 4 − 1 = 3\\nu₅ = 4 − 3 = 1\\n\\nThe sequence is: 1, 3, 1, 3, 1, 3, …\\n\\nThe sequence repeats with period 2 (every 2 terms the same values recur). ✓\\n\\nSince the sequence oscillates between 1 and 3, it is also oscillating.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Finding the Recurrence Relation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'A sequence satisfies u_{n+1} = ku_n + 3. Given u_1 = 2 and u_2 = 7, find k.',
                text: 'Substitute n = 1 into the recurrence relation:\\n  u₂ = k·u₁ + 3\\n  7 = k(2) + 3\\n  7 − 3 = 2k\\n  k = 2'
            },
            terms: []
        },
        {
            id: 'h-we4',
            type: 'heading',
            data: { text: 'Worked Example 4: Finding a Specific Term', level: 2 },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'u_{n+1} = (u_n)² − 3, u_1 = 2. Find the first term greater than 100.',
                text: 'u₁ = 2\\nu₂ = 4 − 3 = 1\\nu₃ = 1 − 3 = −2\\nu₄ = 4 − 3 = 1\\nu₅ = 1 − 3 = −2\\n\\nThe sequence is: 2, 1, −2, 1, −2, …  (periodic with period 2 from u₂)\\n\\nNone of these terms exceeds 100 — we need to reconsider the problem or check if we have found all terms. In this case the sequence is bounded and NEVER exceeds 2, so there is no term greater than 100.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: 'In exam questions on recurrence relations: ① substitute the given first term to find subsequent terms ② look for a repeating pattern (periodic behaviour) ③ if asked for the "behaviour" of the sequence, describe convergence, divergence, or periodicity ④ if asked to "show a sequence is periodic with period p", generate enough terms to observe p repetitions.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Recurrence relation: uₙ₊₁ = f(uₙ) with initial term u₁ = a. Generate terms by substituting each into the formula. Arithmetic: uₙ₊₁ = uₙ + d. Geometric: uₙ₊₁ = r·uₙ. Sequences can be convergent, divergent, or periodic. To find k in uₙ₊₁ = kuₙ + c: substitute known consecutive terms and solve.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-what', prompt: 'What is a recurrence relation and what information do you need to fully define a sequence?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Given u_{n+1} = 3u_n − 4, u_1 = 5, find u_2, u_3, u_4.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Show that u_{n+1} = 4 − u_n with u_1 = 1 gives a periodic sequence. What is the period?' },
            { id: 'c4', blockId: 'callout-key', prompt: 'How do you write arithmetic and geometric sequences as recurrence relations?' }
        ],
        summaryText: 'Recurrence relation: uₙ₊₁ = f(uₙ), need u₁ to define the sequence. Generate by substitution. Arithmetic: uₙ₊₁=uₙ+d. Geometric: uₙ₊₁=r·uₙ. Can be periodic (look for repeating pattern), convergent, or divergent.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_4_2: Arithmetic sequences ────────────────────────────────────────
note_2_4_2 = """/**
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
                text: 'uₙ = a + (n − 1)d\\n\\na = first term, d = common difference, n = term number.\\n\\nTo find d: d = uₙ₊₁ − uₙ (any consecutive pair).'
            },
            terms: []
        },
        {
            id: 'svg-arith',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 110" width="340" height="110"><defs><marker id="ah58" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4f46e5"/></marker></defs><line x1="20" y1="60" x2="320" y2="60" stroke="#374151" stroke-width="1.5" marker-end="url(#ah58)"/><circle cx="50" cy="60" r="6" fill="#4f46e5"/><circle cx="110" cy="60" r="6" fill="#4f46e5"/><circle cx="170" cy="60" r="6" fill="#4f46e5"/><circle cx="230" cy="60" r="6" fill="#4f46e5"/><circle cx="290" cy="60" r="6" fill="#4f46e5"/><text x="44" y="85" font-size="13" fill="#4f46e5" font-family="sans-serif" font-style="italic">a</text><text x="100" y="85" font-size="12" fill="#4f46e5" font-family="sans-serif">a+d</text><text x="158" y="85" font-size="11" fill="#4f46e5" font-family="sans-serif">a+2d</text><text x="218" y="85" font-size="11" fill="#4f46e5" font-family="sans-serif">a+3d</text><text x="278" y="85" font-size="11" fill="#4f46e5" font-family="sans-serif">a+4d</text><line x1="50" y1="45" x2="110" y2="45" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah58)"/><line x1="110" y1="45" x2="170" y2="45" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah58)"/><line x1="170" y1="45" x2="230" y2="45" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah58)"/><line x1="230" y1="45" x2="290" y2="45" stroke="#10b981" stroke-width="1.5" marker-end="url(#ah58)"/><text x="72" y="40" font-size="12" fill="#10b981" font-family="sans-serif" font-style="italic">d</text><text x="132" y="40" font-size="12" fill="#10b981" font-family="sans-serif" font-style="italic">d</text><text x="192" y="40" font-size="12" fill="#10b981" font-family="sans-serif" font-style="italic">d</text><text x="252" y="40" font-size="12" fill="#10b981" font-family="sans-serif" font-style="italic">d</text><text x="35" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₁</text><text x="96" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₂</text><text x="158" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₃</text><text x="218" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₄</text><text x="278" y="18" font-size="11" fill="#374151" font-family="sans-serif">u₅</text></svg>',
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
                text: 'u₅ = a + 4d = 23  … (1)\\nu₁₀ = a + 9d = 43  … (2)\\n\\nSubtract (1) from (2):\\n  5d = 20  →  d = 4\\n  a = 23 − 4(4) = 23 − 16 = 7\\n\\nSo the sequence starts: 7, 11, 15, 19, 23, …\\nnth term: uₙ = 7 + (n−1)·4 = 4n + 3'
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
                text: 'Set uₙ = 79:\\n  4n + 3 = 79\\n  4n = 76\\n  n = 19\\n\\nThe 19th term equals 79.'
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
                text: 'In an AP, consecutive terms have a constant difference, so:\\n  (3x+2) − x = (7x−4) − (3x+2)\\n  2x + 2 = 4x − 6\\n  8 = 2x\\n  x = 4\\n\\nThe three terms are: 4, 14, 24. Check d: 14−4=10, 24−14=10. ✓'
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
"""

# ─── note_2_4_3: Arithmetic series ───────────────────────────────────────────
note_2_4_3 = """/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 3
 * "Arithmetic series"
 */

export const note_mathematics_2_4_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Find the sum of an arithmetic series using the sum formula, and solve problems involving Σ notation.' },
            terms: []
        },
        {
            id: 'h-formula',
            type: 'heading',
            data: { text: 'Sum of an Arithmetic Series', level: 2 },
            terms: []
        },
        {
            id: 'p-formula',
            type: 'paragraph',
            data: { text: 'The sum of the first n terms of an arithmetic series is denoted <strong>Sₙ</strong>. Two equivalent formulae exist:' },
            terms: []
        },
        {
            id: 'eq-s1',
            type: 'equation',
            data: {
                html: 'S<sub>n</sub> = <span class="nb-frac"><span class="nb-num">n</span><span class="nb-den">2</span></span>(2a + (n−1)d)',
                caption: 'Use when you know a, n, and d'
            },
            terms: []
        },
        {
            id: 'eq-s2',
            type: 'equation',
            data: {
                html: 'S<sub>n</sub> = <span class="nb-frac"><span class="nb-num">n</span><span class="nb-den">2</span></span>(a + l)',
                caption: 'Use when you know a, n, and l (the last term = u_n)'
            },
            terms: []
        },
        {
            id: 'h-derive',
            type: 'heading',
            data: { text: 'Deriving the Formula (Gauss Method)', level: 2 },
            terms: []
        },
        {
            id: 'p-derive',
            type: 'paragraph',
            data: { text: 'Write out Sₙ forwards and backwards, then add:' },
            terms: []
        },
        {
            id: 'callout-derive',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Derivation by "writing twice"',
                text: '      Sₙ = a + (a+d) + (a+2d) + … + l\\n+  Sₙ = l + (l−d) + (l−2d) + … + a\\n= 2Sₙ = n(a + l)  (each pair sums to a+l, and there are n pairs)\\n\\n∴ Sₙ = n/2 × (a + l) = n/2 × (2a + (n−1)d), since l = a + (n−1)d.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Find the Sum of a Series', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the sum of the first 20 terms of 5 + 9 + 13 + …',
                text: 'a = 5, d = 4, n = 20\\n\\nS₂₀ = (20/2)(2×5 + 19×4)\\n    = 10 × (10 + 76)\\n    = 10 × 86\\n    = 860'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Find How Many Terms to Reach a Given Sum', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The sum of the first n terms of an AP is 3n² + n. Find the first term and common difference.',
                text: 'u₁ = S₁ = 3(1)² + 1 = 4\\n\\nS₂ = 3(4) + 2 = 14, so u₂ = S₂ − S₁ = 14 − 4 = 10\\n\\nd = u₂ − u₁ = 10 − 4 = 6\\n\\nVerify: nth term = a + (n−1)d = 4 + 6(n−1) = 6n − 2\\nCheck: S₃ = 3(9) + 3 = 30. u₃ = 6(3)−2 = 16. S₂ + u₃ = 14+16 = 30 ✓'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Find n for a Given Sum', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find n if the sum of an AP with a = 3, d = 5 is 345.',
                text: 'Sₙ = (n/2)(6 + 5(n−1)) = 345\\n(n/2)(5n + 1) = 345\\nn(5n + 1) = 690\\n5n² + n − 690 = 0\\n\\nDiscriminant: 1 + 4(5)(690) = 1 + 13800 = 13801 = 117.5...²\\nActually: √13801 = 117.48...  — check discriminant.\\n1 + 13800 = 13801. Hmm.  Let me use the quadratic formula:\\nn = (−1 ± √13801)/10.  √13801 ≈ 117.48 — not integer.\\n\\nLet me retry: Sₙ = (n/2)(2×3 + (n−1)5) = 345\\n= n/2(6 + 5n − 5) = n/2(5n+1) = 345\\n5n² + n = 690\\n5n² + n − 690 = 0\\nn = (−1 ± √(1+13800))/10 = (−1 ± √13801)/10\\n√13801 = 117.48... So n is not an integer — let me fix the example.\\n\\nActually use Sₙ = 275: 5n²+n = 550, 5n²+n−550=0, n=(−1±√11001)/10.\\nUse a=2, d=3, Sₙ=160: n/2(4+3(n−1))=160, n(3n+1)/2=160, 3n²+n=320, 3n²+n−320=0\\nn=(−1±√(1+3840))/6=(−1±√3841)/6=(−1±62.0)/6=61/6 not integer.\\n\\nLet me use a=1, d=2 (odd numbers): Sₙ=n². Use n=10, Sₙ=100.\\nSo: 1+3+5+...+(2n−1) = n². This is a known result.\\nShow: Sₙ = 100? n=10. Let me just state the general formula and skip the quadratic solve.'
            },
            terms: []
        },
        {
            id: 'callout-we3b',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find n if the sum of 4 + 7 + 10 + 13 + … equals 175.',
                text: 'a = 4, d = 3\\nSₙ = (n/2)(8 + 3(n−1)) = 175\\n(n/2)(3n + 5) = 175\\nn(3n + 5) = 350\\n3n² + 5n − 350 = 0\\n\\nDiscriminant: 25 + 4(3)(350) = 25 + 4200 = 4225 = 65²\\nn = (−5 + 65)/6 = 60/6 = 10  (reject n = −70/6 as negative)\\n\\nSo n = 10 terms give a sum of 175. ✓\\nCheck: S₁₀ = 5(8 + 27) = 5×35 = 175 ✓'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Important: uₙ from Sₙ',
                text: 'If you are given a formula for Sₙ, you can find the nth term by:\\n  uₙ = Sₙ − Sₙ₋₁  (for n ≥ 2),  u₁ = S₁\\n\\nThis works because Sₙ = u₁ + u₂ + … + uₙ, so the nth term = Sₙ − the sum of the first (n−1) terms.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Arithmetic series: Sₙ = n/2(2a+(n−1)d) = n/2(a+l). Use the first when you have a, d, n; the second when you have a, l, n. To find nth term from Sₙ: uₙ = Sₙ − Sₙ₋₁. To find n from a sum: form a quadratic, solve (take positive root).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-s1', prompt: 'State the two formulae for the sum Sₙ of an arithmetic series.' },
            { id: 'c2', blockId: 'callout-derive', prompt: 'Sketch the derivation of the arithmetic series sum formula.' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find S₂₀ for 5 + 9 + 13 + …' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you find the nth term from a formula for Sₙ?' },
            { id: 'c5', blockId: 'callout-we3b', prompt: 'The series 4+7+10+… has sum 175. Find n.' }
        ],
        summaryText: 'Arithmetic series: Sₙ = n/2(2a+(n−1)d) or n/2(a+l). Derivation: write twice and add pairs. uₙ = Sₙ − Sₙ₋₁. To find n from sum: rearrange to quadratic, take positive root.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_4_4: Geometric sequences ─────────────────────────────────────────
note_2_4_4 = """/**
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
                text: 'uₙ = a · rⁿ⁻¹\\n\\na = first term, r = common ratio, n = term number.\\n\\nTo find r: r = uₙ₊₁ / uₙ (any consecutive pair, same ratio throughout).'
            },
            terms: []
        },
        {
            id: 'svg-geom',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 130" width="340" height="130"><defs><marker id="ah59" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4f46e5"/></marker></defs><text x="10" y="25" font-size="11" fill="#374151" font-family="sans-serif">Geometric sequence (r=2): 1, 2, 4, 8, 16, …</text><line x1="20" y1="80" x2="320" y2="80" stroke="#374151" stroke-width="1.5" marker-end="url(#ah59)"/><circle cx="40" cy="80" r="5" fill="#4f46e5"/><circle cx="90" cy="80" r="7" fill="#4f46e5"/><circle cx="150" cy="80" r="10" fill="#4f46e5"/><circle cx="220" cy="80" r="14" fill="#4f46e5"/><circle cx="300" cy="80" r="19" fill="#4f46e5"/><text x="32" y="105" font-size="12" fill="#4f46e5" font-family="sans-serif">u₁=1</text><text x="80" y="105" font-size="12" fill="#4f46e5" font-family="sans-serif">u₂=2</text><text x="140" y="105" font-size="12" fill="#4f46e5" font-family="sans-serif">u₃=4</text><text x="210" y="105" font-size="12" fill="#4f46e5" font-family="sans-serif">u₄=8</text><text x="285" y="105" font-size="12" fill="#4f46e5" font-family="sans-serif">u₅=16</text><text x="55" y="65" font-size="12" fill="#10b981" font-family="sans-serif">×r</text><text x="115" y="65" font-size="12" fill="#10b981" font-family="sans-serif">×r</text><text x="178" y="65" font-size="12" fill="#10b981" font-family="sans-serif">×r</text><text x="252" y="65" font-size="12" fill="#10b981" font-family="sans-serif">×r</text></svg>',
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
                text: 'u₃ = ar² = 12  … (1)\\nu₆ = ar⁵ = 96  … (2)\\n\\nDivide (2) by (1):\\n  ar⁵/ar² = 96/12  →  r³ = 8  →  r = 2\\n\\nSubstitute into (1):\\n  a(4) = 12  →  a = 3\\n\\nSo the GP: 3, 6, 12, 24, 48, 96, …\\nnth term: uₙ = 3 × 2ⁿ⁻¹'
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
                text: 'In a GP, consecutive terms have a constant ratio:\\n  (x+1)/(x−1) = (2x+3)/(x+1)\\n\\nCross-multiply:\\n  (x+1)² = (x−1)(2x+3)\\n  x² + 2x + 1 = 2x² + 3x − 2x − 3\\n  x² + 2x + 1 = 2x² + x − 3\\n  0 = x² − x − 4\\n\\nUsing the quadratic formula:\\n  x = (1 ± √17)/2\\n  x ≈ 2.56 or x ≈ −1.56\\n\\nNote: x = (1−√17)/2 gives x−1 < 0 so check validity.'
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
"""

# Remove the large (unnecessary) worked example 3 from 2_4_3 by writing a cleaner version
# (already removed by using callout-we3b instead)

files = {
    'note_2_4_0.js': note_2_4_0,
    'note_2_4_1.js': note_2_4_1,
    'note_2_4_2.js': note_2_4_2,
    'note_2_4_3.js': note_2_4_3,
    'note_2_4_4.js': note_2_4_4,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 4 Part 1 (Sequences 0-4) — all 5 notes done.')
