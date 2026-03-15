/**
 * Seed note: Mathematics · WMA12 · Topic 2 · Subtopic 1
 * "Polynomial division"
 */

export const note_mathematics_2_2_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Divide a polynomial by a linear factor using algebraic long division, expressing the result as quotient + remainder.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Polynomial Division?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'When you divide polynomial f(x) by divisor d(x), you obtain a <strong>quotient</strong> q(x) and a <strong>remainder</strong> r, so that:' },
            terms: []
        },
        {
            id: 'eq-div',
            type: 'equation',
            data: {
                html: 'f(x) = d(x) · q(x) + r',
                caption: 'Division algorithm for polynomials (r is a constant if d(x) is linear)'
            },
            terms: []
        },
        {
            id: 'p-note',
            type: 'paragraph',
            data: { text: 'When dividing by a <strong>linear factor</strong> (ax + b), the remainder r is always a constant (degree 0). The degree of the quotient is one less than the degree of f(x).' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Algebraic Long Division', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Divide the <strong>leading term</strong> of the dividend by the leading term of the divisor → first term of quotient' },
                    { text: '<strong>Multiply</strong> that quotient term by the entire divisor' },
                    { text: '<strong>Subtract</strong> the result from the current dividend (align like terms)' },
                    { text: '<strong>Bring down</strong> the next term; repeat steps 1–3 until no terms remain' },
                    { text: 'The final value after all subtractions is the <strong>remainder</strong>' }
                ]
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Divide by (x − 3)', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Divide (2x³ − 3x² − 11x + 6) by (x − 3)',
                text: 'Set up: 2x³ − 3x² − 11x + 6 ÷ (x − 3)\n\nStep 1: 2x³ ÷ x = 2x²  →  multiply: 2x²(x − 3) = 2x³ − 6x²\n        Subtract: (2x³ − 3x²) − (2x³ − 6x²) = 3x²\n\nStep 2: Bring down −11x → 3x² − 11x\n        3x² ÷ x = 3x  →  multiply: 3x(x − 3) = 3x² − 9x\n        Subtract: (3x² − 11x) − (3x² − 9x) = −2x\n\nStep 3: Bring down +6 → −2x + 6\n        −2x ÷ x = −2  →  multiply: −2(x − 3) = −2x + 6\n        Subtract: (−2x + 6) − (−2x + 6) = 0  ← remainder = 0\n\nResult: 2x³ − 3x² − 11x + 6 = (x − 3)(2x² + 3x − 2)\nVerify: (x−3)(2x²+3x−2) = (x−3)(2x−1)(x+2) ✓'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Division with Remainder', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Divide (x³ + 2x² − x + 5) by (x + 3)',
                text: 'Step 1: x³ ÷ x = x²  →  x²(x + 3) = x³ + 3x²\n        Subtract: (x³ + 2x²) − (x³ + 3x²) = −x²\n\nStep 2: Bring down −x → −x² − x\n        −x² ÷ x = −x  →  −x(x + 3) = −x² − 3x\n        Subtract: (−x² − x) − (−x² − 3x) = 2x\n\nStep 3: Bring down +5 → 2x + 5\n        2x ÷ x = 2  →  2(x + 3) = 2x + 6\n        Subtract: (2x + 5) − (2x + 6) = −1  ← remainder = −1\n\nResult: x³ + 2x² − x + 5 = (x + 3)(x² − x + 2) − 1\n\nCheck with Remainder Theorem: f(−3) = (−3)³ + 2(−3)² − (−3) + 5 = −27 + 18 + 3 + 5 = −1 ✓'
            },
            terms: []
        },
        {
            id: 'h-missing',
            type: 'heading',
            data: { text: 'Missing Terms', level: 2 },
            terms: []
        },
        {
            id: 'p-missing',
            type: 'paragraph',
            data: { text: 'If the polynomial is missing a term (e.g. no x² term), insert a placeholder with coefficient 0. For example, x³ + 2x − 5 should be written as x³ + 0x² + 2x − 5 during long division.' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Checking Your Answer',
                text: 'Always verify: expand (divisor)(quotient) + remainder and confirm it equals the original polynomial. For a linear divisor (x − a), also use the Remainder Theorem: substitute x = a into f(x) — this should equal your remainder r.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Polynomial division: f(x) = d(x)·q(x) + r. Long division: divide leading terms, multiply, subtract, bring down — repeat. Remainder is a constant when dividing by (x − a). Insert 0 for missing terms. Check: (divisor)(quotient) + remainder = original polynomial.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-div', prompt: 'Write the division algorithm equation: what does f(x) equal when divided by d(x)?' },
            { id: 'c2', blockId: 'list-method', prompt: 'What are the 5 steps of algebraic long division?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Divide 2x³ − 3x² − 11x + 6 by (x − 3). What is the quotient?' },
            { id: 'c4', blockId: 'p-missing', prompt: 'How should you handle a missing term (e.g. no x² term) when doing long division?' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'How do you check the result of a polynomial division?' }
        ],
        summaryText: 'Polynomial division: f(x) = d(x)·q(x) + r. Long division steps: divide leading terms → multiply → subtract → bring down → repeat. Remainder = constant for linear divisor. Insert 0x for missing terms. Verify with Remainder Theorem: f(a) = remainder when dividing by (x − a).',
        ready: true
    },
    evidence: []
};
