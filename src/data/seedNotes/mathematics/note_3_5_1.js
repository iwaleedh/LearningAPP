/**
 * WMA13 · Topic 5 · Subtopic 1 — Reverse chain rule
 */
export const note_mathematics_3_5_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Integrate functions of the form f(ax + b) by applying the reverse chain rule.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Reverse Chain Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Reverse Chain Rule',
                text: 'If \u222bf(x) dx = F(x) + c, then:\n\u222bf(ax + b) dx = F(ax + b)/a + c\n\nDivide by the coefficient of x (the constant a).'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b sin(3x + 1) dx and \u222b e^(5x\u22122) dx.',
                text: '\u222b sin(3x+1) dx = \u2212cos(3x+1)/3 + c\n\u222b e^(5x\u22122) dx = e^(5x\u22122)/5 + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b (2x + 3)\u2075 dx.',
                text: '\u222b (2x+3)\u2075 dx = (2x+3)\u2076/(6\u00b72) + c = (2x+3)\u2076/12 + c'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b 1/(4x \u2212 1) dx and \u222b sec\u00b2(2x) dx.',
                text: '\u222b 1/(4x\u22121) dx = (1/4) ln|4x\u22121| + c\n\u222b sec\u00b2(2x) dx = tan(2x)/2 + c'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Check by Differentiating',
                text: 'Always verify by differentiating your answer. If you get back the original integrand, you are correct. This is especially important in exam "hence" questions.'
            }, terms: []
        },
        {
            id: 'callout-warn', type: 'callout',
            data: {
                style: 'warning',
                title: 'Only Works for Linear Arguments',
                text: 'The reverse chain rule \u222bf(ax+b)dx = F(ax+b)/a + c only works when the inner function is linear (ax+b). For non-linear composites (e.g. sin(x\u00b2)), you need substitution instead.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Reverse chain rule: \u222bf(ax+b)dx = F(ax+b)/a + c. Divide by the coefficient of x. Only valid for linear inner functions. Check by differentiating.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the reverse chain rule for \u222bf(ax+b) dx.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find \u222b sin(3x+1) dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find \u222b (2x+3)\u2075 dx.' },
            { id: 'c4', blockId: 'callout-warn', prompt: 'When does the reverse chain rule NOT apply?' }
        ],
        summaryText: 'Reverse chain rule: \u222bf(ax+b)dx = F(ax+b)/a+c. Divide by coefficient of x. Linear inner functions only.',
        ready: true
    },
    evidence: []
};
