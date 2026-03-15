/**
 * WMA13 · Topic 4 · Subtopic 7 — Connected rates of change
 */
export const note_mathematics_3_4_7 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use the chain rule to find connected rates of change between related physical quantities.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Connected Rates of Change', level: 2 }, terms: []
        },
        {
            id: 'p-method', type: 'paragraph',
            data: { text: 'If y depends on x, and x changes with time t, then y also changes with time. The chain rule connects these rates: dy/dt = (dy/dx) \u00b7 (dx/dt). This is the key principle for all connected rates problems.' },
            terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule for Rates',
                text: 'dy/dt = (dy/dx) \u00b7 (dx/dt)\n\nMore generally: if A depends on r, and r changes with t:\ndA/dt = (dA/dr) \u00b7 (dr/dt)\n\nTo find one rate: identify which rates are known and which linking derivative to find'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A spherical balloon is inflated at 100 cm\u00b3/s. Find the rate of increase of radius when r = 5 cm.',
                text: 'V = (4/3)\u03c0r\u00b3  \u2192  dV/dr = 4\u03c0r\u00b2\n\ndV/dt = (dV/dr) \u00b7 (dr/dt)\n100 = 4\u03c0(5)\u00b2 \u00b7 (dr/dt)\ndr/dt = 100/(100\u03c0) = 1/\u03c0 \u2248 0.318 cm/s'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A ladder 5 m long leans against a wall. The base slides away at 0.2 m/s. How fast does the top descend when the base is 3 m from the wall?',
                text: 'x\u00b2 + y\u00b2 = 25  \u2192  2x(dx/dt) + 2y(dy/dt) = 0\nWhen x = 3: y = 4\n2(3)(0.2) + 2(4)(dy/dt) = 0\n1.2 + 8(dy/dt) = 0  \u2192  dy/dt = \u22120.15 m/s\n(Negative sign means y is decreasing)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Strategy',
                text: '1. Write an equation relating the geometric quantities\n2. Differentiate implicitly w.r.t. time, using d/dt\n3. Substitute known values (given rates and measurements)\n4. Solve for the unknown rate\n5. Interpret the sign: negative = decreasing'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Connected rates: dy/dt = (dy/dx)(dx/dt). Write a geometric relationship, differentiate w.r.t. t (chain rule), substitute known values, solve for unknown rate.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the chain rule formula that connects dy/dt to dy/dx and dx/dt.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'A balloon inflates at 100 cm\u00b3/s. Find dr/dt when r = 5 cm.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'List the 5 steps for solving a connected rates problem.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'In the ladder problem, what equation relates x, y, and the length of the ladder?' }
        ],
        summaryText: 'Connected rates: dy/dt = (dy/dx)(dx/dt). Write geometric relation, differentiate w.r.t. t, substitute known values, solve for unknown rate.',
        ready: true
    },
    evidence: []
};
