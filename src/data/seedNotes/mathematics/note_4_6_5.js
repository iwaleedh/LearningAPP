/**
 * WMA14 · Topic 6 · Subtopic 5 — Parametric integration: areas
 */
export const note_mathematics_4_6_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find areas between parametric curves and axes, using \u222b y (dx/dt) dt with appropriate t-limits.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Parametric Area Method', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Formula',
                text: 'Area = \u222b y dx = \u222b y (dx/dt) dt\n\nConvert x-limits to t-limits using x = f(t).\nThe result may be negative if dx/dt < 0; take |result|.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area between the curve x = t\u00b3, y = t\u00b2, the axes, and t = 0 to t = 2.',
                text: 'dx/dt = 3t\u00b2\n\nArea = \u222b\u2080\u00b2 t\u00b2 \u00b7 3t\u00b2 dt = 3 \u222b\u2080\u00b2 t\u2074 dt = 3[t\u2075/5]\u2080\u00b2 = 3 \u00b7 32/5 = 96/5'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'The curve C: x = 1 \u2212 t\u00b2, y = t\u00b3. Find area in first quadrant (0 \u2264 t \u2264 1).',
                text: 'At t=0: (1, 0); at t=1: (0, 1) \u2014 goes from (1,0) to (0,1).\ndx/dt = \u22122t\n\nArea = \u222b\u2080\u00b9 t\u00b3 \u00b7 (\u22122t) dt = \u2212 \u222b\u2080\u00b9 2t\u2074 dt = \u2212[2t\u2075/5]\u2080\u00b9 = \u22122/5\n\nArea = 2/5 (take positive)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Checking the Direction',
                text: 'Sketch the curve first. If x decreases as t increases, dx/dt is negative, giving a negative integral. The area is always positive. For a closed curve, you can integrate around the whole boundary.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Parametric area: \u222b y(dx/dt)dt with t-limits. Direction matters (dx/dt may be negative). Always take |result| for area.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the parametric area formula using the parameter t.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find area under x=t\u00b3, y=t\u00b2 from t=0 to t=2.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Why does \u222b y(dx/dt)dt give a negative value for some parametric curves?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What should you always do before computing a parametric area integral?' }
        ],
        summaryText: 'Area = \u222b y dx/dt dt. Change limits to t-values. Negative result means curve traversed right-to-left; take absolute value.',
        ready: true
    },
    evidence: []
};
