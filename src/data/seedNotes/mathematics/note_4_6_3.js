/**
 * WMA14 · Topic 6 · Subtopic 3 — Integration using trigonometric identities
 */
export const note_mathematics_4_6_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use double-angle and other trig identities to reduce integrals involving powers of sin and cos to integrable forms.' },
            terms: []
        },
        {
            id: 'h-identities', type: 'heading',
            data: { text: 'Key Identities for Integration', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Double Angle Identities',
                text: 'cos 2\u03b8 = 1 \u2212 2sin\u00b2\u03b8  \u27a2  sin\u00b2\u03b8 = (1 \u2212 cos 2\u03b8)/2\ncos 2\u03b8 = 2cos\u00b2\u03b8 \u2212 1  \u27a2  cos\u00b2\u03b8 = (1 + cos 2\u03b8)/2\nsin 2\u03b8 = 2 sin\u03b8 cos\u03b8'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b sin\u00b2 x dx',
                text: 'sin\u00b2 x = (1 \u2212 cos 2x)/2\n\n\u222b sin\u00b2 x dx = \u222b (1\u2212cos 2x)/2 dx = x/2 \u2212 sin 2x/4 + C'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b cos\u00b2 x dx',
                text: 'cos\u00b2 x = (1 + cos 2x)/2\n\n\u222b cos\u00b2 x dx = x/2 + sin 2x/4 + C'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b sin x cos x dx (two methods)',
                text: 'Method 1: sin x cos x = (1/2) sin 2x\n\u222b sin x cos x dx = \u2212(1/4) cos 2x + C\n\nMethod 2: substitution u = sin x\n\u222b sin x cos x dx = \u222b u du = u\u00b2/2 = sin\u00b2 x/2 + C\n\n(Both are equivalent: \u2212cos2x/4 = \u2212(1\u22122sin\u00b2x)/4 = sin\u00b2x/2 \u2212 1/4)'
            }, terms: []
        },
        {
            id: 'callout-we4', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b sin\u00b3 x dx',
                text: 'sin\u00b3 x = sin x \u00b7 sin\u00b2 x = sin x (1 \u2212 cos\u00b2 x)\n= sin x \u2212 sin x cos\u00b2 x\n\n\u222b sin\u00b3 x dx = \u2212cos x + cos\u00b3 x/3 + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Strategy Summary',
                text: '\u2022 sin\u00b2 or cos\u00b2: use double angle identity.\n\u2022 Odd powers (sin\u00b3, cos\u00b3): split off one factor, use 1\u2212cos\u00b2=sin\u00b2 (or 1\u2212sin\u00b2=cos\u00b2), then substitute.\n\u2022 sin cos product: use sin 2x = 2 sin cos or substitution.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trig integrals: use double angle for even powers (sin\u00b2, cos\u00b2). Split odd powers using sin\u00b2+cos\u00b2=1. Product sin cos: use sin2x or substitution.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State sin\u00b2\u03b8 and cos\u00b2\u03b8 in terms of cos 2\u03b8.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Evaluate \u222b sin\u00b2 x dx.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Evaluate \u222b sin x cos x dx.' },
            { id: 'c4', blockId: 'callout-we4', prompt: 'Evaluate \u222b sin\u00b3 x dx. What substitution helps?' }
        ],
        summaryText: 'Even powers: double angle. Odd powers: split off one, use sin\u00b2+cos\u00b2=1. Products: sin2x or substitution.',
        ready: true
    },
    evidence: []
};
