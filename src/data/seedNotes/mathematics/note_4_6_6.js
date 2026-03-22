/**
 * WMA14 · Topic 6 · Subtopic 6 — Volume of revolution about the x-axis
 */
export const note_mathematics_4_6_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find the volume generated when a curve y = f(x) is rotated 360\u00b0 about the x-axis using V = \u03c0 \u222b y\u00b2 dx.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Volume of Revolution Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Rotation About the x-axis',
                text: 'V = \u03c0 \u222b\u2090^b y\u00b2 dx\n\nDerived by summing thin circular discs of area \u03c0y\u00b2 and width \u03b4x.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'y = x\u00b2, rotated about the x-axis, x = 0 to x = 2.',
                text: 'V = \u03c0 \u222b\u2080\u00b2 (x\u00b2)\u00b2 dx = \u03c0 \u222b\u2080\u00b2 x\u2074 dx = \u03c0 [x\u2075/5]\u2080\u00b2 = \u03c0 \u00b7 32/5 = 32\u03c0/5'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'y = \u221a(4\u2212x), rotated about x-axis, x = 0 to x = 4.',
                text: 'y\u00b2 = 4 \u2212 x\nV = \u03c0 \u222b\u2080\u2074 (4\u2212x) dx = \u03c0 [4x \u2212 x\u00b2/2]\u2080\u2074 = \u03c0 (16 \u2212 8) = 8\u03c0'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Rotation using trig: y = sin x, 0 to \u03c0.',
                text: 'V = \u03c0 \u222b\u2080^\u03c0 sin\u00b2 x dx = \u03c0 \u222b\u2080^\u03c0 (1\u2212cos2x)/2 dx\n= (\u03c0/2)[x \u2212 sin2x/2]\u2080^\u03c0 = (\u03c0/2)(\u03c0) = \u03c0\u00b2/2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Common Pitfalls',
                text: '\u2022 Do not forget the \u03c0 factor (it stays outside the integral).\n\u2022 The integrand is y\u00b2, not y. Square first, then integrate.\n\u2022 If y involves a root like \u221a(f(x)), then y\u00b2 = f(x) simplifies nicely.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Volume of revolution (x-axis): V = \u03c0\u222b y\u00b2 dx. Square y first, then integrate. The \u03c0 stays outside.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always write down the formula V = pi * integral of y^2 dx before substituting your function. Do not forget to square the function before integrating, and remember to leave your final answer as an exact multiple of pi unless a decimal is explicitly requested."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for volume of revolution about the x-axis.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find V when y=x\u00b2 is rotated about the x-axis from 0 to 2.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find V when y=\u221a(4\u2212x) is rotated about x-axis from x=0 to x=4.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'State two common mistakes to avoid with volume of revolution.' }
        ],
        summaryText: 'V = \u03c0\u222b\u2090^b y\u00b2 dx. Square y, integrate, multiply by \u03c0. Leave \u03c0 outside the integral.',
        ready: true
    },
    evidence: []
};
