/**
 * WMA14 · Topic 6 · Subtopic 7 — Volume of revolution: y-axis and parametric
 */
export const note_mathematics_4_6_7 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find volumes of revolution about the y-axis using V = \u03c0 \u222b x\u00b2 dy, and apply the parametric form V = \u03c0 \u222b y\u00b2 (dx/dt) dt.' },
            terms: []
        },
        {
            id: 'h-yaxis', type: 'heading',
            data: { text: 'Rotation About the y-axis', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Volume Formulas',
                text: 'About x-axis: V = \u03c0 \u222b y\u00b2 dx\nAbout y-axis: V = \u03c0 \u222b x\u00b2 dy\n\nParametric (about x-axis): V = \u03c0 \u222b y\u00b2 (dx/dt) dt'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'y = x\u00b2 rotated about the y-axis, y = 0 to y = 4.',
                text: 'x\u00b2 = y (from y=x\u00b2)\nV = \u03c0 \u222b\u2080\u2074 x\u00b2 dy = \u03c0 \u222b\u2080\u2074 y dy = \u03c0 [y\u00b2/2]\u2080\u2074 = \u03c0 \u00b7 8 = 8\u03c0'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Parametric: x = t\u00b2, y = t\u00b3. Volume about x-axis, t = 0 to t = 1.',
                text: 'y\u00b2 = t\u2076, dx/dt = 2t\n\nV = \u03c0 \u222b\u2080\u00b9 t\u2076 \u00b7 2t dt = 2\u03c0 \u222b\u2080\u00b9 t\u2077 dt = 2\u03c0 [t\u2078/8]\u2080\u00b9 = 2\u03c0/8 = \u03c0/4'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Switching Between Axes',
                text: 'For rotation about the y-axis, rearrange the equation to express x\u00b2 in terms of y, then integrate with respect to y. Remember to change the limits to y-values.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'y-axis rotation: V = \u03c0\u222b x\u00b2 dy (express x\u00b2 in y, integrate in y). Parametric rotation (x-axis): V = \u03c0\u222b y\u00b2(dx/dt)dt.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When finding volumes of revolution using parametric equations, carefully substitute both y^2 and dx/dt in terms of t. Do not forget to multiply these expressions together algebraically before attempting to perform the integration."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the volume formula for rotation about the y-axis and the parametric form.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find volume when y=x\u00b2 is rotated about the y-axis, y=0 to 4.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find volume for parametric x=t\u00b2, y=t\u00b3 about x-axis, t=0 to 1.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What must you do differently when integrating for rotation about the y-axis?' }
        ],
        summaryText: 'y-axis: V=\u03c0\u222b x\u00b2 dy (integrate w.r.t. y). Parametric: V=\u03c0\u222b y\u00b2(dx/dt)dt with t-limits.',
        ready: true
    },
    evidence: []
};
