/**
 * WMA13 · Topic 1 · Subtopic 6 — Further modelling with functions
 */
export const note_mathematics_3_1_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply composite, inverse, modulus and piecewise functions in extended real-world modelling.' },
            terms: []
        },
        {
            id: 'h-piecewise', type: 'heading',
            data: { text: 'Piecewise Functions', level: 2 }, terms: []
        },
        {
            id: 'p-piecewise', type: 'paragraph',
            data: { text: 'A <strong>piecewise function</strong> uses different rules on different parts of its domain. Real-world scenarios (e.g. tiered pricing, tax brackets) often require this structure.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A taxi charges \u00a32.50 for the first km, then \u00a31.20/km after. Write a piecewise function for cost C(x) for distance x km.',
                text: 'For 0 < x \u2264 1:  C(x) = 2.50\nFor x > 1:  C(x) = 2.50 + 1.20(x \u2212 1) = 1.20x + 1.30\nDomain: x > 0'
            }, terms: []
        },
        {
            id: 'h-reciprocal', type: 'heading',
            data: { text: 'Reciprocal Functions in Modelling', level: 2 }, terms: []
        },
        {
            id: 'p-reciprocal', type: 'paragraph',
            data: { text: 'f(x) = k/x models inverse proportionality. The graph (hyperbola) has two branches; typically only the branch with positive domain values is relevant. As x \u2192 0, the model breaks down.' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Speed s = 240/t (km/h) for a 240 km journey. Find t when s = 80. Comment on the model as t \u2192 0.',
                text: 's = 240/t, domain: t > 0 (time is positive)\nWhen s = 80: t = 240/80 = 3 hours\nAs t \u2192 0: s \u2192 \u221e \u2014 model predicts infinite speed, which is unrealistic (model breaks down)'
            }, terms: []
        },
        {
            id: 'h-critique', type: 'heading',
            data: { text: 'Critiquing Models', level: 2 }, terms: []
        },
        {
            id: 'list-critique', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Identify assumptions that oversimplify (constant rate, no resistance)',
                    'Comment on domain realism (e.g. only positive values physical)',
                    'Suggest improvements (add extra terms, switch function type)',
                    'State where the model fails (extremes of the domain)'
                ]
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Always dominate your model critique with contextual reasoning. "As t \u2192 0, speed \u2192 \u221e which is impossible" scores better than "the model is inaccurate".'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Advanced modelling uses piecewise, reciprocal and composite functions. Always restrict domain to physical values. Critique: identify over-simplifying assumptions, state domain issues, suggest improvements.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Pay close attention to units and boundary conditions in piecewise models. Ensure that boundaries where two models meet (e.g. at t = 5) give the same output value, unless the scenario explicitly describes an instantaneous jump."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-piecewise', prompt: 'What is a piecewise function and when is it used in modelling?' },
            { id: 'c2', blockId: 'callout-we2', prompt: 'For s = 240/t, find t when s = 80. What happens as t \u2192 0?' },
            { id: 'c3', blockId: 'list-critique', prompt: 'Give two things to include when critiquing a mathematical model.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why is contextual reasoning important in model critiques?' }
        ],
        summaryText: 'Piecewise and reciprocal functions for complex scenarios. Always restrict domain. Critique: name assumptions, state where model fails, suggest refinements.',
        ready: true
    },
    evidence: []
};
