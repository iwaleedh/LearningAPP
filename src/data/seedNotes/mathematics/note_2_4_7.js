/**
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
                text: '<sup>n</sup>C<sub>r</sub> = n! / (r!(n−r)!) = n(n−1)(n−2)…(n−r+1) / r!\n\nAlso written as C(n,r) or (n r) (binomial coefficient). Key values:\n• ⁿC₀ = 1 (always)\n• ⁿC₁ = n\n• ⁿC₂ = n(n−1)/2\n• ⁿCₙ = 1 (always)\n• ⁿCᵣ = ⁿCₙ₋ᵣ (symmetry)'
            },
            terms: []
        },
        {
            id: 'svg-pascal',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180" width="300" height="180"><text x="148" y="20" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="128" y="45" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="168" y="45" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="108" y="70" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="148" y="70" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">2</text><text x="188" y="70" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="88" y="95" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="120" y="95" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">3</text><text x="152" y="95" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">3</text><text x="184" y="95" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="64" y="120" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="96" y="120" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">4</text><text x="128" y="120" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">6</text><text x="160" y="120" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">4</text><text x="192" y="120" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="42" y="145" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="72" y="145" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">5</text><text x="104" y="145" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">10</text><text x="138" y="145" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">10</text><text x="170" y="145" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">5</text><text x="200" y="145" font-size="13" fill="#2563eb" font-family="monospace" text-anchor="middle">1</text><text x="10" y="170" font-size="11" fill="#374151" font-family="sans-serif">Row 0: n=0     Row 1: n=1     … Row 5: n=5</text></svg>',
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
                text: 'Using (a+b)ⁿ with a=2, b=3x, n=4:\n\nT₁ = ⁴C₀ (2)⁴(3x)⁰ = 1×16×1 = 16\nT₂ = ⁴C₁ (2)³(3x)¹ = 4×8×3x = 96x\nT₃ = ⁴C₂ (2)²(3x)² = 6×4×9x² = 216x²\nT₄ = ⁴C₃ (2)¹(3x)³ = 4×2×27x³ = 216x³\nT₅ = ⁴C₄ (2)⁰(3x)⁴ = 1×1×81x⁴ = 81x⁴\n\n(2+3x)⁴ = 16 + 96x + 216x² + 216x³ + 81x⁴'
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
                text: 'The x³ term occurs when r = 3 (from T_{r+1} = ⁵C₃ (3)² (−2x)³)\n\nT₄ = ⁵C₃ · (3)^(5−3) · (−2x)³\n   = 10 × 9 × (−8x³)\n   = 10 × 9 × (−8) × x³\n   = −720x³\n\nCoefficient of x³ = −720.'
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
                text: 'T₃ = ⁵C₂ · k³ · x²\n   = 10k³ x²\n\nSet 10k³ = 80:\n   k³ = 8\n   k = 2'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• The general term Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ — identify r such that the power of x equals the required power.\n• Don\'t forget the negative sign if b is negative: (−x)³ = −x³, (−x)⁴ = +x⁴.\n• For (1+x)ⁿ use the simplified version; for (a+bx)ⁿ use the general version.\n• The expansion has (n+1) terms for (a+b)ⁿ.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Binomial expansion: (a+b)ⁿ = ∑ ⁿCᵣ aⁿ⁻ʳ bʳ. General term: Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ. ⁿCᵣ = n!/(r!(n−r)!), symmetric: ⁿCᵣ = ⁿCₙ₋ᵣ. For specific term: identify r from required power of x. Watch sign when b is negative.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "For expansions of (a + bx)^n, it is often safer to factor out the 'a' first to get a^n * (1 + (b/a)x)^n. Expanding the (1 + ...)^n part is much less prone to arithmetic and power distribution errors."
            },
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
