/**
 * WMA13 · Topic 2 · Subtopic 7 — Strategy for further trig equations
 */
export const note_mathematics_3_2_7 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Choose and apply appropriate trig identities to solve more complex trigonometric equations over specified intervals.' },
            terms: []
        },
        {
            id: 'h-strategy', type: 'heading',
            data: { text: 'General Strategy', level: 2 }, terms: []
        },
        {
            id: 'list-strategy', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Identify the trig functions present (sin, cos, tan, sec, cosec, cot)',
                    'Look for a single trig function to aim for \u2014 convert others using identities',
                    'If double angles present, use double angle formulae to change to single angle',
                    'If sec/cosec/cot present, convert using Pythagorean identities',
                    'Factorise or use the quadratic formula once reduced to one variable',
                    'Find ALL solutions in the given interval, including those from all quadrants'
                ]
            }, terms: []
        },
        {
            id: 'h-we1', type: 'heading',
            data: { text: 'Example: Mixed Double and Single Angles', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve cos 2x + 3 sin x = 2 for 0 \u2264 x \u2264 2\u03c0.',
                text: 'Use cos 2x = 1 \u2212 2 sin\u00b2x:\n1 \u2212 2sin\u00b2x + 3 sin x = 2\n\u22122sin\u00b2x + 3 sin x \u2212 1 = 0\n2sin\u00b2x \u2212 3 sin x + 1 = 0\n(2 sin x \u2212 1)(sin x \u2212 1) = 0\nsin x = 1/2: x = \u03c0/6, 5\u03c0/6\nsin x = 1: x = \u03c0/2\nSolutions: x = \u03c0/6, \u03c0/2, 5\u03c0/6'
            }, terms: []
        },
        {
            id: 'h-we2', type: 'heading',
            data: { text: 'Example: Reciprocal Trig', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 2 cosec\u00b2x \u2212 3 cot x = 5 for 0 < x < 2\u03c0.',
                text: 'cosec\u00b2x = 1 + cot\u00b2x:\n2(1 + cot\u00b2x) \u2212 3 cot x = 5\n2 + 2cot\u00b2x \u2212 3 cot x \u2212 5 = 0\n2cot\u00b2x \u2212 3 cot x \u2212 3 = 0\n\nNot factorisable \u2014 use quadratic formula with cot x as variable:\ncot x = (3 \u00b1 \u221a33)/4\nCot x = (3+\u221a33)/4 \u2248 2.186 \u2192 tan x \u2248 0.457 \u2192 x \u2248 0.427, 3.569\nCot x = (3\u2212\u221a33)/4 \u2248 \u22120.686 \u2192 tan x \u2248 \u22121.458 \u2192 x \u2248 2.168, 5.309'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Principle',
                text: 'Never divide both sides by a trig function unless you know it is non-zero \u2014 you could lose solutions. Factorise instead. Always state the full solution set within the given interval.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Strategy: identify target function, use identities to reduce to one trig function, factorise, and find ALL solutions in the interval. Never divide by trig functions \u2014 factorise instead.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Before solving complex trig equations, adjust the given interval for any argument shifts. If the range is 0 \u2264 x \u2264 360 but the angle is 2x+30, adjust your search range to 30 \u2264 2x+30 \u2264 750 immediately so you do not miss solutions."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-strategy', prompt: 'List the 6 steps of the general strategy for solving complex trig equations.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve cos 2x + 3 sin x = 2 for 0 \u2264 x \u2264 2\u03c0.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'Why should you never divide both sides of a trig equation by sin x or cos x?' }
        ],
        summaryText: 'Choose an identity to reduce to one trig function. Factorise. Find all solutions in the interval. Never divide by trig functions \u2014 factorise instead.',
        ready: true
    },
    evidence: []
};
