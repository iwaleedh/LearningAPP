/**
 * WMA14 · Topic 3 · Subtopic 2 — Parametric equations: areas under curves
 */
export const note_mathematics_4_3_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find the area under a parametrically defined curve by converting the integral to a t-variable integral.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Area Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Parametric Area',
                text: 'Area = \u222b y dx = \u222b y \u00b7 (dx/dt) dt\n\nChange limits: when x = a (lower), find t\u2081 such that f(t\u2081) = a; same for upper.\nThe sign of dx/dt determines the direction; be careful about sign of area.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area under x = t\u00b2, y = 2t for 0 \u2264 t \u2264 3.',
                text: 'dx/dt = 2t\nArea = \u222b\u2080\u00b3 y \u00b7 (dx/dt) dt = \u222b\u2080\u00b3 2t \u00b7 2t dt = \u222b\u2080\u00b3 4t\u00b2 dt\n= [4t\u00b3/3]\u2080\u00b3 = 4\u00b727/3 = 36'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area enclosed by the curve x = 4cos t, y = 3sin t (ellipse) in the first quadrant.',
                text: 'In the first quadrant: t goes from 0 to \u03c0/2 (x from 4 to 0).\ndx/dt = \u22124sin t\n\nArea = \u222b\u2080^(\u03c0/2) y \u00b7 (dx/dt) dt = \u222b\u2080^(\u03c0/2) 3sin t \u00b7 (\u22124sin t) dt\n= \u222b\u2080^(\u03c0/2) \u221212 sin\u00b2t dt = \u222b\u2080^(\u03c0/2) \u22126(1\u2212cos2t) dt\n= \u22126[t \u2212 sin2t/2]\u2080^(\u03c0/2) = \u22126[\u03c0/2 \u2212 0] = \u22123\u03c0\n\nArea = 3\u03c0 (take positive value). Total ellipse area = 4 \u00d7 3\u03c0 = 12\u03c0 = \u03c0ab \u2713'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Sign of the Area',
                text: 'The formula \u222b y dx/dt dt can give a negative result if x decreases as t increases. Always take the absolute value (or reverse the limits) to get a positive area. Sketch the curve first to check the direction.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Parametric area: \u222b y dx = \u222b y(dx/dt) dt. Change limits to t-values. Take |result| for area. Watch the sign of dx/dt.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Remember the formula is Integral(y * dx/dt) dt. A classic mistake is forgetting the 'dx/dt' term and just integrating y with respect to t. Always check that your limits have been converted to match the t variable."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for area under a parametric curve.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find area under x=t\u00b2, y=2t for 0\u2264t\u22643.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'How do you find the first-quadrant area of the ellipse x=4cos t, y=3sin t?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why might a parametric area integral give a negative result, and what do you do?' }
        ],
        summaryText: 'Parametric area: \u222b y(dx/dt)dt with t-limits. May be negative if x decreases; take absolute value for actual area.',
        ready: true
    },
    evidence: []
};
