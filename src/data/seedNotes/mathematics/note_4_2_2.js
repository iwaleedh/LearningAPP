/**
 * WMA14 · Topic 2 · Subtopic 2 — Partial fractions: improper fractions
 */
export const note_mathematics_4_2_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Identify improper rational expressions and convert them to a mixed form (polynomial + proper fraction) before decomposing into partial fractions.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'Proper vs Improper Fractions', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Definition',
                text: 'A rational expression f(x)/g(x) is:<br>\u2022 <strong>Proper</strong> if deg(f) < deg(g)\u00a0\u00a0\u2192 proceed directly to partial fractions\n\u2022 <strong>Improper</strong> if deg(f) \u2265 deg(g)\u00a0\u2192 divide first to get: quotient + remainder/g(x)'
            }, terms: []
        },
        {
            id: 'h-div', type: 'heading',
            data: { text: 'Polynomial Division', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (x\u00b2 + 3x + 5)/[(x+1)(x+2)] in partial fractions.',
                text: 'Numerator degree = 2 = denominator degree: improper.\n\nExpand denominator: (x+1)(x+2) = x\u00b2 + 3x + 2\n\nDivide: (x\u00b2+3x+5) \u00f7 (x\u00b2+3x+2)\nQuotient = 1, Remainder = 3\n\nSo (x\u00b2+3x+5)/[(x+1)(x+2)] = 1 + 3/[(x+1)(x+2)]\n\nNow decompose 3/[(x+1)(x+2)] = A/(x+1) + B/(x+2):\nA = 3/(1\u22122) = \u22123,  B = 3/(2\u22121) = 3\u00d7(\u22121...)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Express (2x\u00b2 \u2212 x + 1)/(x\u00b2 \u2212 1) in partial fractions.',
                text: 'Numerator degree = denominator degree: improper.\n\n2x\u00b2 \u2212 x + 1 = 2(x\u00b2\u22121) + (\u2212x+3)\nSo expression = 2 + (\u2212x+3)/(x\u00b2\u22121)\n\n(x\u00b2\u22121) = (x+1)(x\u22121)\n(\u2212x+3)/[(x+1)(x\u22121)] = A/(x+1) + B/(x\u22121)\nA = (\u2212(\u22121)+3)/(\u22121\u22121) = 4/(\u22122) = \u22122\nB = (\u22121+3)/(1+1) = 2/2 = 1\n\nAnswer: 2 \u2212 2/(x+1) + 1/(x\u22121)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Quick Check for Improper',
                text: 'If the degree of the numerator \u2265 degree of the denominator, it is improper. The quotient will be a polynomial of degree = deg(num) \u2212 deg(den). For equal degrees, the quotient is just a constant.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Improper fraction: deg(num) \u2265 deg(den). Divide first to get quotient + proper fraction, then decompose the proper fraction into partial fractions.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Before starting partial fractions, always check the degree of the numerator against the denominator. If they are equal or the numerator is higher, you must use algebraic long division first to find the polynomial part."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'How do you identify an improper rational expression?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Express (x\u00b2+3x+5)/[(x+1)(x+2)] in partial fractions.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Express (2x\u00b2\u2212x+1)/(x\u00b2\u22121) in partial fractions.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What is the degree of the quotient when dividing two polynomials of equal degree?' }
        ],
        summaryText: 'Improper: deg(num)\u2265deg(den). First divide to get quotient+proper fraction, then partial fraction the remainder.',
        ready: true
    },
    evidence: []
};
