/**
 * WMA13 · Topic 2 · Subtopic 4 — Double angle formulae
 */
export const note_mathematics_3_2_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use double angle formulae to simplify expressions, solve equations, and find exact values.' },
            terms: []
        },
        {
            id: 'h-formulae', type: 'heading',
            data: { text: 'Double Angle Formulae', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Double Angle Identities',
                text: 'sin 2A = 2 sin A cos A\n\ncos 2A = cos\u00b2A \u2212 sin\u00b2A\n       = 2cos\u00b2A \u2212 1\n       = 1 \u2212 2sin\u00b2A\n\ntan 2A = 2 tan A / (1 \u2212 tan\u00b2A)'
            }, terms: []
        },
        {
            id: 'h-rearrange', type: 'heading',
            data: { text: 'Rearranged Forms', level: 2 }, terms: []
        },
        {
            id: 'callout-rearr', type: 'callout',
            data: {
                style: 'key',
                title: 'Useful Rearrangements (for integration etc.)',
                text: 'cos\u00b2A = (1 + cos 2A)/2\nsin\u00b2A = (1 \u2212 cos 2A)/2'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Given sin A = 3/5 (A obtuse), find sin 2A and cos 2A.',
                text: 'A obtuse \u2192 cos A < 0\ncos A = \u2212\u221a(1 \u2212 9/25) = \u22124/5\n\nsin 2A = 2 sin A cos A = 2(3/5)(\u22124/5) = \u221224/25\ncos 2A = 1 \u2212 2sin\u00b2A = 1 \u2212 2(9/25) = 7/25'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve sin 2x = sin x for 0 \u2264 x \u2264 2\u03c0.',
                text: 'sin 2x = sin x\n2 sin x cos x = sin x\n2 sin x cos x \u2212 sin x = 0\nsin x(2 cos x \u2212 1) = 0\nsin x = 0 \u2192 x = 0, \u03c0, 2\u03c0\n2 cos x = 1 \u2192 cos x = 1/2 \u2192 x = \u03c0/3, 5\u03c0/3\nSolutions: x = 0, \u03c0/3, \u03c0, 5\u03c0/3, 2\u03c0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Which Form of cos 2A to Use?',
                text: 'Choose based on what you want to eliminate:\n\u2022 cos\u00b2A \u2212 sin\u00b2A: use when you have both\n\u2022 2cos\u00b2A \u2212 1: use to remove sin\u00b2A\n\u2022 1 \u2212 2sin\u00b2A: use to remove cos\u00b2A'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'sin 2A = 2 sin A cos A. cos 2A has three forms. tan 2A = 2 tan A/(1 \u2212 tan\u00b2A). Rearranged: sin\u00b2A = (1 \u2212 cos 2A)/2; cos\u00b2A = (1 + cos 2A)/2.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "The cos(2x) identity has three forms. Plan ahead before you calculate: choose the form that effectively eliminates the other trigonometric function in the equation (for example, use 1 - 2sin\u00b2x if you need to match a sin x term)."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State all three forms of cos 2A.' },
            { id: 'c2', blockId: 'callout-rearr', prompt: 'Express cos\u00b2A in terms of cos 2A.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Solve sin 2x = sin x for 0 \u2264 x \u2264 2\u03c0.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Which form of cos 2A would you choose to eliminate cos\u00b2A from an expression?' }
        ],
        summaryText: 'sin 2A = 2 sinA cosA. cos 2A = cos\u00b2A \u2212 sin\u00b2A = 2cos\u00b2A \u2212 1 = 1 \u2212 2sin\u00b2A. Rearranged forms used for integration.',
        ready: true
    },
    evidence: []
};
