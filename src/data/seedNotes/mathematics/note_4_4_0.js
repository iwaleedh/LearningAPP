/**
 * WMA14 · Topic 4 · Subtopic 0 — Binomial expansion for negative and fractional n
 */
export const note_mathematics_4_4_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Expand (1+x)\u207f for any rational n (negative or fractional) using the general binomial series, and identify when this series is valid.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'General Binomial Series', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Binomial Series (any rational n)',
                text: '(1 + x)\u207f = 1 + nx + [n(n\u22121)/2!]x\u00b2 + [n(n\u22121)(n\u22122)/3!]x\u00b3 + \u2026\n\nValid for |x| < 1 (when n is not a positive integer)\n\nNote: the series is infinite for non-integer n; it terminates only when n is a positive integer.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (1+x)\u207b\u00b9 up to and including the x\u00b3 term.',
                text: 'n = \u22121:\n(1+x)\u207b\u00b9 = 1 + (\u22121)x + [(\u22121)(\u22122)/2!]x\u00b2 + [(\u22121)(\u22122)(\u22123)/3!]x\u00b3 + \u2026\n= 1 \u2212 x + x\u00b2 \u2212 x\u00b3 + \u2026'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (1+x)^(1/2) up to and including x\u00b3.',
                text: 'n = 1/2:\n= 1 + (1/2)x + [(1/2)(\u22121/2)/2!]x\u00b2 + [(1/2)(\u22121/2)(\u22123/2)/3!]x\u00b3 + \u2026\n= 1 + x/2 \u2212 x\u00b2/8 + x\u00b3/16 \u2212 \u2026'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (1+x)\u207b\u00b2 up to x\u00b3.',
                text: 'n = \u22122:\n= 1 + (\u22122)x + [(\u22122)(\u22123)/2]x\u00b2 + [(\u22122)(\u22123)(\u22124)/6]x\u00b3 + \u2026\n= 1 \u2212 2x + 3x\u00b2 \u2212 4x\u00b3 + \u2026'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Pattern for (1+x)\u207b\u00b9 and (1+x)\u207b\u00b2',
                text: '(1+x)\u207b\u00b9 = 1 \u2212 x + x\u00b2 \u2212 x\u00b3 + \u2026 (geometric series, ratio \u2212x)\n(1+x)\u207b\u00b2 = 1 \u2212 2x + 3x\u00b2 \u2212 4x\u00b3 + \u2026 (coefficients are |1|, |2|, |3|, \u2026)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'General binomial: (1+x)\u207f = \u03a3 [n(n\u22121)\u2026(n\u2212r+1)/r!] x\u02b3. Valid for |x|<1 when n is not a positive integer. The series is infinite for fractional/negative n.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "The formula given in the formula booklet for (1+x)^n requires the first term to be exactly 1. If you have (a+bx)^n, you must factor out 'a^n' first. Forgetting to apply the power n to the factored-out 'a' is a very common error."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the general binomial series for (1+x)\u207f. When is it valid?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Expand (1+x)\u207b\u00b9 to the x\u00b3 term.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Expand (1+x)^(1/2) to the x\u00b3 term.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'State the coefficient pattern for (1+x)\u207b\u00b2.' }
        ],
        summaryText: '(1+x)\u207f for rational n: 1+nx+n(n-1)/2! x\u00b2+\u2026, valid |x|<1. Infinite series for non-integer n.',
        ready: true
    },
    evidence: []
};
