/**
 * Seed note: Mathematics · WMA12 · Topic 2 · Subtopic 2
 * "Factor theorem"
 */

export const note_mathematics_2_2_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply the factor theorem and remainder theorem to factorise polynomials, including cubics.' },
            terms: []
        },
        {
            id: 'h-remain',
            type: 'heading',
            data: { text: 'The Remainder Theorem', level: 2 },
            terms: []
        },
        {
            id: 'p-remain',
            type: 'paragraph',
            data: { text: 'When polynomial f(x) is divided by the linear factor (x − a), the remainder equals <strong>f(a)</strong>. You can find the remainder by substituting x = a directly — no long division required.' },
            terms: []
        },
        {
            id: 'callout-remain',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Remainder Theorem',
                text: 'When f(x) is divided by (x − a), the remainder = f(a).\n\nMore generally: when f(x) is divided by (ax − b), the remainder = f(b/a).'
            },
            terms: []
        },
        {
            id: 'h-factor',
            type: 'heading',
            data: { text: 'The Factor Theorem', level: 2 },
            terms: []
        },
        {
            id: 'p-factor',
            type: 'paragraph',
            data: { text: 'The factor theorem is a special case of the remainder theorem:' },
            terms: []
        },
        {
            id: 'callout-factor',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Factor Theorem',
                text: '(x − a) is a factor of f(x)  ⟺  f(a) = 0\n\nIn other words: if substituting x = a into f(x) gives zero, then (x − a) is a factor. Conversely, if (x − a) is a factor, then f(a) must equal zero.'
            },
            terms: []
        },
        {
            id: 'h-factorcubic',
            type: 'heading',
            data: { text: 'Factorising a Cubic Using the Factor Theorem', level: 2 },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Try values x = ±1, ±2, ±3, … (factors of the constant term) until f(a) = 0' },
                    { text: 'Once f(a) = 0, state that (x − a) is a factor' },
                    { text: 'Divide f(x) by (x − a) using long division (or inspection) to find the quadratic quotient' },
                    { text: 'Factorise the quadratic quotient (if possible)' },
                    { text: 'Write the full factorisation: f(x) = (x − a)(quadratic)' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Fully Factorise a Cubic', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Fully factorise f(x) = x³ − 6x² + 11x − 6',
                text: 'Step 1: Try x = 1:\n  f(1) = 1 − 6 + 11 − 6 = 0  ✓\n  ∴ (x − 1) is a factor.\n\nStep 2: Divide x³ − 6x² + 11x − 6 by (x − 1):\n  x³ − 6x² + 11x − 6 = (x − 1)(x² − 5x + 6)\n  (using long division or inspection)\n\nStep 3: Factorise x² − 5x + 6:\n  Need two numbers multiplying to +6 and adding to −5: (−2) and (−3)\n  x² − 5x + 6 = (x − 2)(x − 3)\n\nResult: f(x) = (x − 1)(x − 2)(x − 3)\n\nRoots: x = 1, x = 2, x = 3.'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Finding Unknown Coefficients', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Given f(x) = x³ + ax² − x + b, with (x − 2) a factor and remainder 3 when divided by (x + 1)',
                text: 'Since (x − 2) is a factor: f(2) = 0\n  8 + 4a − 2 + b = 0\n  4a + b = −6  … (1)\n\nRemainder theorem for (x + 1): f(−1) = 3\n  −1 + a + 1 + b = 3\n  a + b = 3  … (2)\n\nSolve simultaneously: (1) − (2):\n  3a = −9  →  a = −3\n  b = 3 − a = 3 + 3 = 6\n\nSo f(x) = x³ − 3x² − x + 6.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Which Values to Try First',
                text: 'Always try x = ±1 first as they are the quickest to compute. Then try x = ±2, ±3, and small fractions (±1/2, ±1/3) if the leading coefficient is not 1. The possible rational roots are always ±(factors of constant term) / (factors of leading coefficient).'
            },
            terms: []
        },
        {
            id: 'h-generalis',
            type: 'heading',
            data: { text: 'Factor Theorem for (ax − b)', level: 2 },
            terms: []
        },
        {
            id: 'p-generalis',
            type: 'paragraph',
            data: { text: 'For a non-monic factor (ax − b): <strong>(ax − b) is a factor of f(x) ⟺ f(b/a) = 0</strong>. For example, (2x − 1) is a factor of f(x) if and only if f(1/2) = 0.' },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Factor Theorem: (x − a) is a factor of f(x) ⟺ f(a) = 0. Remainder Theorem: f(x) ÷ (x − a) has remainder f(a). To factorise a cubic: find a root by inspection, divide out the linear factor, then factorise the remaining quadratic. Try x = ±1, ±2, ±3 first.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-factor', prompt: 'State the Factor Theorem. What must be true for (x − a) to be a factor of f(x)?' },
            { id: 'c2', blockId: 'callout-remain', prompt: 'State the Remainder Theorem. What is the remainder when f(x) is divided by (x − a)?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Fully factorise f(x) = x³ − 6x² + 11x − 6 using the factor theorem.' },
            { id: 'c4', blockId: 'list-steps', prompt: 'What are the steps for factorising a cubic using the factor theorem?' },
            { id: 'c5', blockId: 'p-generalis', prompt: 'When is (2x − 1) a factor of f(x), according to the factor theorem?' }
        ],
        summaryText: 'Factor theorem: f(a) = 0 ⟺ (x − a) is a factor. Remainder theorem: f(a) = remainder when dividing by (x − a). To factorise cubics: test f(±1), f(±2), etc. until zero found, state factor, divide out, then factorise the quadratic. For (ax − b): check f(b/a) = 0.',
        ready: true
    },
    evidence: []
};
