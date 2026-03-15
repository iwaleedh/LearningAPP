import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_4_5: Geometric series (finite + infinite) ────────────────────────
note_2_4_5 = """/**
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
                text: 'Let Sₙ = a + ar + ar² + … + arⁿ⁻¹\\nMultiply by r: rSₙ = ar + ar² + ar³ + … + arⁿ\\nSubtract: Sₙ − rSₙ = a − arⁿ\\nSₙ(1 − r) = a(1 − rⁿ)\\nSₙ = a(1 − rⁿ)/(1 − r)  ✓'
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
                text: 'a = 3, r = 2, n = 8\\n\\nS₈ = 3(2⁸ − 1)/(2 − 1) = 3(256 − 1)/1 = 3 × 255 = 765'
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
                text: 'S∞ = a/(1 − r) = 40\\n24/(1 − r) = 40\\n24 = 40(1 − r)\\n24 = 40 − 40r\\n40r = 16\\nr = 16/40 = 2/5 = 0.4\\n\\nCheck: |r| = 0.4 < 1 ✓, so S∞ exists.'
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
                text: 'a = 5, r = 2\\nSₙ = 5(2ⁿ − 1) > 1000\\n2ⁿ − 1 > 200\\n2ⁿ > 201\\n\\nTake log base 2: n > log₂(201) = ln(201)/ln(2) ≈ 5.302/0.693 ≈ 7.65\\n\\nSince n must be an integer: n = 8\\nCheck: S₈ = 5(256−1) = 5(255) = 1275 > 1000 ✓\\n       S₇ = 5(128−1) = 5(127) = 635 < 1000 ✓'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip: Summing Inequalities',
                text: 'When "Sₙ > k", take logarithms both sides to find n. Remember:\\n• log(rⁿ) = n log r\\n• If r > 1, the inequality direction stays the same when dividing by log r (positive)\\n• If 0 < r < 1, then log r < 0 — the inequality REVERSES when dividing by log r'
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
"""

# ─── note_2_4_6: Sigma notation ──────────────────────────────────────────────
note_2_4_6 = """/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 6
 * "Sigma notation"
 */

export const note_mathematics_2_4_6 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Interpret and evaluate expressions written in sigma notation, including standard results.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Sigma Notation?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'Sigma notation uses the Greek letter Σ (capital sigma) as a compact way to write a sum. The general form is:' },
            terms: []
        },
        {
            id: 'eq-sigma',
            type: 'equation',
            data: {
                html: '<span style="font-size:1.3em">∑</span><sub style="font-size:0.8em">r = 1</sub><sup style="font-size:0.8em">n</sup> f(r) = f(1) + f(2) + f(3) + … + f(n)',
                caption: 'Read as "the sum of f(r) as r goes from 1 to n"'
            },
            terms: []
        },
        {
            id: 'callout-parts',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Parts of Sigma Notation',
                text: '∑ f(r) from r = a to r = b\\n\\n• r: the index variable (substituted as 1, 2, 3, …)\\n• a: lower limit (starting value of r)\\n• b: upper limit (ending value of r)\\n• f(r): the general term (the formula applied to each value of r)\\n\\nThe sum has (b − a + 1) terms.'
            },
            terms: []
        },
        {
            id: 'h-rules',
            type: 'heading',
            data: { text: 'Properties of Sigma Notation', level: 2 },
            terms: []
        },
        {
            id: 'list-rules',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Linearity:</strong> ∑(af(r) + bg(r)) = a·∑f(r) + b·∑g(r)' },
                    { text: '<strong>Constant factor:</strong> ∑c = c × (number of terms) = c(b−a+1)' },
                    { text: '<strong>Split limits:</strong> ∑ from r=1 to n = ∑ from r=1 to k + ∑ from r=k+1 to n' },
                    { text: '<strong>Offset sum:</strong> ∑ from r=3 to n = ∑ from r=1 to n − f(1) − f(2)' }
                ]
            },
            terms: []
        },
        {
            id: 'h-standard',
            type: 'heading',
            data: { text: 'Standard Results', level: 2 },
            terms: []
        },
        {
            id: 'eq-sum1',
            type: 'equation',
            data: {
                html: '∑<sub>r=1</sub><sup>n</sup> 1 = n',
                caption: 'Sum of n ones'
            },
            terms: []
        },
        {
            id: 'eq-sum-r',
            type: 'equation',
            data: {
                html: '∑<sub>r=1</sub><sup>n</sup> r = <span class="nb-frac"><span class="nb-num">n(n+1)</span><span class="nb-den">2</span></span>',
                caption: 'Sum of the first n natural numbers'
            },
            terms: []
        },
        {
            id: 'eq-sum-r2',
            type: 'equation',
            data: {
                html: '∑<sub>r=1</sub><sup>n</sup> r² = <span class="nb-frac"><span class="nb-num">n(n+1)(2n+1)</span><span class="nb-den">6</span></span>',
                caption: 'Sum of squares (given on formula sheet)'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Writing Out the Sum', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Write out ∑ from r=1 to 5 of (2r − 1) and evaluate.',
                text: '∑(2r−1) for r=1 to 5 = (2·1−1) + (2·2−1) + (2·3−1) + (2·4−1) + (2·5−1)\\n                     = 1 + 3 + 5 + 7 + 9\\n                     = 25\\n\\nNote: this is the sum of the first 5 odd numbers = 5² = 25 ✓'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Evaluating Sigma with Standard Results', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∑ from r=1 to 20 of (3r + 4).',
                text: '∑(3r + 4) = 3·∑r + ∑4 (for r=1 to 20)\\n\\n∑r from 1 to 20 = 20(21)/2 = 210\\n∑4 from 1 to 20 = 4 × 20 = 80\\n\\n∴ ∑(3r + 4) = 3(210) + 80 = 630 + 80 = 710'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Sigma with Offset Lower Limit', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∑ from r=5 to 15 of 2r.',
                text: '∑_{r=5}^{15} 2r = ∑_{r=1}^{15} 2r − ∑_{r=1}^{4} 2r\\n\\n= 2·∑_{r=1}^{15} r − 2·∑_{r=1}^{4} r\\n\\n= 2·(15×16/2) − 2·(4×5/2)\\n\\n= 2·120 − 2·10\\n\\n= 240 − 20 = 220'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Sigma notation questions often test whether you can use the standard results for ∑r and ∑r². You should also be comfortable identifying a sum as an arithmetic or geometric series — ∑(a + (r−1)d) is arithmetic; ∑arⁿ⁻¹ is geometric.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Sigma notation: ∑f(r) sums f(r) for each integer r from lower to upper limit. Properties: linearity, constant factor rule, split/offset limits. Key results: ∑r = n(n+1)/2, ∑r² = n(n+1)(2n+1)/6. For offset limits: ∑ from a to b = ∑ from 1 to b − ∑ from 1 to a−1.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-parts', prompt: 'What do the upper limit, lower limit, index variable, and general term mean in sigma notation?' },
            { id: 'c2', blockId: 'eq-sum-r', prompt: 'State the formula for ∑r from r=1 to n.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find ∑(3r+4) from r=1 to 20 using linearity and standard results.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'How do you evaluate ∑ from r=5 to 15 of 2r?' }
        ],
        summaryText: 'Σ notation: sum of f(r) from r=lower to upper. Standard results: Σr=n(n+1)/2, Σr²=n(n+1)(2n+1)/6. Linearity: split into Σr terms + constants. For offset limits: Σ from a to b = Σ from 1 to b minus Σ from 1 to a−1.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_4_7: Binomial expansion ──────────────────────────────────────────
note_2_4_7 = """/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 7
 * "Binomial expansion"
 */

export const note_mathematics_2_4_7 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Expand (a + bx)ⁿ for positive integer n using the binomial theorem, and find specific terms using the general term formula.' },
            terms: []
        },
        {
            id: 'h-formula',
            type: 'heading',
            data: { text: 'The Binomial Theorem', level: 2 },
            terms: []
        },
        {
            id: 'eq-binomial',
            type: 'equation',
            data: {
                html: '(a + b)<sup>n</sup> = ∑<sub>r=0</sub><sup>n</sup> <sup>n</sup>C<sub>r</sub> a<sup>n−r</sup> b<sup>r</sup>',
                caption: 'General binomial expansion for positive integer n'
            },
            terms: []
        },
        {
            id: 'eq-expand',
            type: 'equation',
            data: {
                html: '(1 + x)<sup>n</sup> = 1 + nx + <span class="nb-frac"><span class="nb-num">n(n−1)</span><span class="nb-den">2!</span></span>x² + <span class="nb-frac"><span class="nb-num">n(n−1)(n−2)</span><span class="nb-den">3!</span></span>x³ + …',
                caption: 'Standard form for (1+x)ⁿ'
            },
            terms: []
        },
        {
            id: 'callout-ncr',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Binomial Coefficients ⁿCᵣ',
                text: '<sup>n</sup>C<sub>r</sub> = n! / (r!(n−r)!) = n(n−1)(n−2)…(n−r+1) / r!\\n\\nAlso written as C(n,r) or (n r) (binomial coefficient). Key values:\\n• ⁿC₀ = 1 (always)\\n• ⁿC₁ = n\\n• ⁿC₂ = n(n−1)/2\\n• ⁿCₙ = 1 (always)\\n• ⁿCᵣ = ⁿCₙ₋ᵣ (symmetry)'
            },
            terms: []
        },
        {
            id: 'svg-pascal',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180"><text x="148" y="20" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="128" y="45" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="168" y="45" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="108" y="70" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="148" y="70" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">2</text><text x="188" y="70" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="88" y="95" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="120" y="95" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">3</text><text x="152" y="95" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">3</text><text x="184" y="95" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="64" y="120" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="96" y="120" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">4</text><text x="128" y="120" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">6</text><text x="160" y="120" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">4</text><text x="192" y="120" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="42" y="145" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="72" y="145" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">5</text><text x="104" y="145" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">10</text><text x="138" y="145" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">10</text><text x="170" y="145" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">5</text><text x="200" y="145" font-size="13" fill="#4f46e5" font-family="monospace" text-anchor="middle">1</text><text x="10" y="170" font-size="11" fill="#374151" font-family="sans-serif">Row 0: n=0     Row 1: n=1     … Row 5: n=5</text></svg>',
                caption: "Pascal's Triangle — each entry is the sum of the two entries above it"
            },
            terms: []
        },
        {
            id: 'h-general',
            type: 'heading',
            data: { text: 'General Term', level: 2 },
            terms: []
        },
        {
            id: 'eq-general',
            type: 'equation',
            data: {
                html: 'T<sub>r+1</sub> = <sup>n</sup>C<sub>r</sub> · a<sup>n−r</sup> · b<sup>r</sup>',
                caption: 'The (r+1)th term in the expansion of (a+b)ⁿ (r starts at 0)'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Full Expansion', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (2 + 3x)⁴ in ascending powers of x.',
                text: 'Using (a+b)ⁿ with a=2, b=3x, n=4:\\n\\nT₁ = ⁴C₀ (2)⁴(3x)⁰ = 1×16×1 = 16\\nT₂ = ⁴C₁ (2)³(3x)¹ = 4×8×3x = 96x\\nT₃ = ⁴C₂ (2)²(3x)² = 6×4×9x² = 216x²\\nT₄ = ⁴C₃ (2)¹(3x)³ = 4×2×27x³ = 216x³\\nT₅ = ⁴C₄ (2)⁰(3x)⁴ = 1×1×81x⁴ = 81x⁴\\n\\n(2+3x)⁴ = 16 + 96x + 216x² + 216x³ + 81x⁴'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Finding a Specific Term', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the coefficient of x³ in the expansion of (3 − 2x)⁵.',
                text: 'The x³ term occurs when r = 3 (from T_{r+1} = ⁵C₃ (3)² (−2x)³)\\n\\nT₄ = ⁵C₃ · (3)^(5−3) · (−2x)³\\n   = 10 × 9 × (−8x³)\\n   = 10 × 9 × (−8) × x³\\n   = −720x³\\n\\nCoefficient of x³ = −720.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Finding an Unknown', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'The coefficient of x² in (k + x)⁵ is 80. Find k.',
                text: 'T₃ = ⁵C₂ · k³ · x²\\n   = 10k³ x²\\n\\nSet 10k³ = 80:\\n   k³ = 8\\n   k = 2'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• The general term Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ — identify r such that the power of x equals the required power.\\n• Don\'t forget the negative sign if b is negative: (−x)³ = −x³, (−x)⁴ = +x⁴.\\n• For (1+x)ⁿ use the simplified version; for (a+bx)ⁿ use the general version.\\n• The expansion has (n+1) terms for (a+b)ⁿ.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Binomial expansion: (a+b)ⁿ = ∑ ⁿCᵣ aⁿ⁻ʳ bʳ. General term: Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ. ⁿCᵣ = n!/(r!(n−r)!), symmetric: ⁿCᵣ = ⁿCₙ₋ᵣ. For specific term: identify r from required power of x. Watch sign when b is negative.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-binomial', prompt: 'State the binomial theorem for (a+b)ⁿ.' },
            { id: 'c2', blockId: 'callout-ncr', prompt: 'How do you calculate ⁿCᵣ? What is ⁵C₃?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find the coefficient of x³ in (3−2x)⁵.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'The coefficient of x² in (k+x)⁵ is 80. Find k.' }
        ],
        summaryText: 'Binomial: (a+b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ. General term: Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ. ⁿCᵣ = n!/(r!(n−r)!). Find specific term by matching power of x to r value.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_4_8: Approximating with the binomial expansion ───────────────────
note_2_4_8 = """/**
 * Seed note: Mathematics · WMA12 · Topic 4 · Subtopic 8
 * "Approximating with the binomial expansion"
 */

export const note_mathematics_2_4_8 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use the binomial expansion to approximate numerical values and understand the conditions for validity.' },
            terms: []
        },
        {
            id: 'h-idea',
            type: 'heading',
            data: { text: 'The Idea', level: 2 },
            terms: []
        },
        {
            id: 'p-idea',
            type: 'paragraph',
            data: { text: 'By choosing a suitable value of x and expanding (1 + x)ⁿ, you can approximate expressions like √1.02, (0.99)¹⁰, or similar numerical values quickly. The expansion only gives a close approximation when <strong>|x| is small</strong> (x close to 0), so only a few terms are needed.' },
            terms: []
        },
        {
            id: 'callout-validity',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Validity for Integer n',
                text: 'For a FINITE binomial expansion (n a positive integer):\\n• (a + bx)ⁿ gives EXACTLY n+1 terms with no restriction on x.\\n• For approximation purposes, the result is accurate when |bx/a| << 1, i.e. when |x| << a/b.\\n\\nFor the GENERAL (infinite) binomial expansion (n not a positive integer): |x| < 1 is required.'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Approximating a Numerical Value', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Write the number in the form (a + bx)ⁿ with a suitable x.' },
                    { text: 'Expand (a + bx)ⁿ using the binomial theorem (to the required number of terms).' },
                    { text: 'Substitute the value of x.' },
                    { text: 'State the approximation clearly.' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Approximating a Root', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Use the expansion of (1 + x)⁴ to approximate (1.02)⁴.',
                text: '(1+x)⁴ = 1 + 4x + 6x² + 4x³ + x⁴\\n\\nSet x = 0.02:\\n(1.02)⁴ ≈ 1 + 4(0.02) + 6(0.0004) + 4(0.000008) + …\\n        = 1 + 0.08 + 0.0024 + 0.000032 + …\\n        ≈ 1.0824 (to 4 d.p.)\\n\\nActual: (1.02)⁴ = 1.08243216… ✓'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Approximation with a Non-Unit Coefficient', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (2 + x)³ in ascending powers of x up to x². Hence find an approximation for (2.03)³.',
                text: '(2+x)³ = 8 + 12x + 6x² + x³\\n\\nSo (2+x)³ ≈ 8 + 12x + 6x² (up to x²)\\n\\nSet x = 0.03:\\n(2.03)³ ≈ 8 + 12(0.03) + 6(0.0009)\\n        = 8 + 0.36 + 0.0054\\n        = 8.3654\\n\\nActual: (2.03)³ = 8.365427… ✓\\n\\nAccuracy improves as x gets smaller.'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Identifying the Approximation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Show that (1 + x)⁵ ≈ 1 + 5x for small x. Use this to approximate 1.001⁵.',
                text: '(1+x)⁵ = 1 + 5x + 10x² + 10x³ + 5x⁴ + x⁵\\n\\nFor small x, x² and higher powers are negligible:\\n(1+x)⁵ ≈ 1 + 5x  ✓\\n\\nSet x = 0.001:\\n(1.001)⁵ ≈ 1 + 5(0.001) = 1 + 0.005 = 1.005\\n\\nActual: 1.00501001... ✓'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy',
                text: 'Exam questions typically ask you to:\\n1. "Expand … in ascending powers of x up to and including the term in x³" — write out the required terms.\\n2. "Hence find an approximation for (…)" — substitute the appropriate value of x.\\n3. Compare accuracy by using more terms — the approximation improves as more terms are included.\\n\\nIf asked "state the value of x used", identify what you substituted.'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can expand (a + bx)ⁿ for positive integer n', checked: false },
                    { text: 'I can identify which term corresponds to a specific power of x', checked: false },
                    { text: 'I can substitute a value of x to get a numerical approximation', checked: false },
                    { text: 'I understand why the approximation is better for smaller |x|', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Approximation using binomial: expand (1+x)ⁿ or (a+bx)ⁿ, then substitute a small value of x. Accuracy improves with more terms and smaller |x|. Exam method: expand first (symbolically), state the value of x, substitute, and evaluate. For integer n, the expansion is finite (exactly n+1 terms).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-validity', prompt: 'When is the binomial expansion exact vs an approximation?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Use (1+x)⁴ to approximate (1.02)⁴. What value of x do you use?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Expand (2+x)³ to x² and hence approximate (2.03)³.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What are the two steps in a "hence find an approximation" exam question?' }
        ],
        summaryText: 'Approximation: expand (a+bx)ⁿ symbolically, then substitute chosen small x. For integer n, expansion is finite and exact. Accuracy improves for smaller |x|. Method: expand → substitute → evaluate → compare with exact if asked.',
        ready: true
    },
    evidence: []
};
"""

files = {
    'note_2_4_5.js': note_2_4_5,
    'note_2_4_6.js': note_2_4_6,
    'note_2_4_7.js': note_2_4_7,
    'note_2_4_8.js': note_2_4_8,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 4 Part 2 (Sequences 5-8) — all 4 notes done.')
print('Topic 4 complete: all 9 notes written.')
