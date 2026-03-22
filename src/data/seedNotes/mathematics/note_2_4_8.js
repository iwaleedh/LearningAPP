/**
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
                text: 'For a FINITE binomial expansion (n a positive integer):\n• (a + bx)ⁿ gives EXACTLY n+1 terms with no restriction on x.\n• For approximation purposes, the result is accurate when |bx/a| << 1, i.e. when |x| << a/b.\n\nFor the GENERAL (infinite) binomial expansion (n not a positive integer): |x| < 1 is required.'
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
                text: '(1+x)⁴ = 1 + 4x + 6x² + 4x³ + x⁴\n\nSet x = 0.02:\n(1.02)⁴ ≈ 1 + 4(0.02) + 6(0.0004) + 4(0.000008) + …\n        = 1 + 0.08 + 0.0024 + 0.000032 + …\n        ≈ 1.0824 (to 4 d.p.)\n\nActual: (1.02)⁴ = 1.08243216… ✓'
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
                text: '(2+x)³ = 8 + 12x + 6x² + x³\n\nSo (2+x)³ ≈ 8 + 12x + 6x² (up to x²)\n\nSet x = 0.03:\n(2.03)³ ≈ 8 + 12(0.03) + 6(0.0009)\n        = 8 + 0.36 + 0.0054\n        = 8.3654\n\nActual: (2.03)³ = 8.365427… ✓\n\nAccuracy improves as x gets smaller.'
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
                text: '(1+x)⁵ = 1 + 5x + 10x² + 10x³ + 5x⁴ + x⁵\n\nFor small x, x² and higher powers are negligible:\n(1+x)⁵ ≈ 1 + 5x  ✓\n\nSet x = 0.001:\n(1.001)⁵ ≈ 1 + 5(0.001) = 1 + 0.005 = 1.005\n\nActual: 1.00501001... ✓'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy',
                text: 'Exam questions typically ask you to:\n1. "Expand … in ascending powers of x up to and including the term in x³" — write out the required terms.\n2. "Hence find an approximation for (…)" — substitute the appropriate value of x.\n3. Compare accuracy by using more terms — the approximation improves as more terms are included.\n\nIf asked "state the value of x used", identify what you substituted.'
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
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "If asked to use your binomial expansion to estimate a value (e.g., 1.02^6), ensure you equate your expansion bracket to the base number (a + bx = 1.02) to find the correct value of x to substitute."
            },
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
