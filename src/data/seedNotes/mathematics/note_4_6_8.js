/**
 * WMA14 · Topic 6 · Subtopic 8 — Trapezium rule
 */
export const note_mathematics_4_6_8 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the trapezium rule to estimate definite integrals numerically, and comment on accuracy and over/under-estimation.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Trapezium Rule Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Trapezium Rule',
                text: '\u222b\u2090^b f(x) dx \u2248 (h/2)[y\u2080 + 2(y\u2081+y\u2082+\u2026+y\u2099\u208b\u2081) + y\u2099]\n\nwhere h = (b\u2212a)/n  and  y\u1d35 = f(a + ih)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Estimate \u222b\u2081\u00b3 ln x dx using 4 strips.',
                text: 'h = (3\u22121)/4 = 0.5\nPoints: x = 1, 1.5, 2, 2.5, 3\ny values: ln1=0, ln1.5=0.4055, ln2=0.6931, ln2.5=0.9163, ln3=1.0986\n\nT = (0.5/2)[0 + 2(0.4055+0.6931+0.9163) + 1.0986]\n= (0.25)[0 + 2(2.0149) + 1.0986]\n= (0.25)[0 + 4.0298 + 1.0986]\n= (0.25)(5.1284) = 1.282'
            }, terms: []
        },
        {
            id: 'h-accuracy', type: 'heading',
            data: { text: 'Accuracy and Error', level: 2 }, terms: []
        },
        {
            id: 'list-accuracy', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'More strips \u2192 better approximation.' },
                    { text: 'If the curve is concave up (d\u00b2y/dx\u00b2 > 0): trapezium overestimates the integral.' },
                    { text: 'If the curve is concave down (d\u00b2y/dx\u00b2 < 0): trapezium underestimates.' },
                    { text: 'If the curve is linear: exact result.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: '\u2022 Always show the y-values table.\n\u2022 Be precise about \u201cend strips\u201d (y\u2080 and y\u2099) vs \u201cmiddle strips\u201d (multiplied by 2).\n\u2022 State whether the estimate is an over- or under-estimate and justify by referring to the concavity (shape) of the curve.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trapezium rule: (h/2)[y\u2080 + 2(middle y\u2019s) + y\u2099], h=(b\u2212a)/n. Overestimates for concave-up curves, underestimates for concave-down.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When commenting on whether the trapezium rule overestimates or underestimates, sketch the curve. If the curve is convex (concave up), the straight lines of the trapezia sit above the curve, giving an overestimate."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the trapezium rule formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Apply the trapezium rule to estimate \u222b\u2081\u00b3 ln x dx with 4 strips.' },
            { id: 'c3', blockId: 'list-accuracy', prompt: 'When does the trapezium rule overestimate the integral?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Which y-values in the trapezium rule are multiplied by 2?' }
        ],
        summaryText: 'Trapezium rule: (h/2)[y\u2080 + 2(y\u2081+\u2026+y\u2099\u208b\u2081) + y\u2099]. Overestimates if concave up; underestimates if concave down.',
        ready: true
    },
    evidence: []
};
