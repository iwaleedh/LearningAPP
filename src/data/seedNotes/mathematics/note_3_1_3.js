/**
 * WMA13 · Topic 1 · Subtopic 3 — Modelling with functions
 */
export const note_mathematics_3_1_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply functions to model real-world situations, interpret domain restrictions in context, and make and critique assumptions.' },
            terms: []
        },
        {
            id: 'h-model', type: 'heading',
            data: { text: 'Mathematical Modelling', level: 2 }, terms: []
        },
        {
            id: 'p-model', type: 'paragraph',
            data: { text: 'A <strong>mathematical model</strong> uses a function to describe a real-world situation so predictions can be made. The domain must be restricted to physically meaningful values (e.g. t \u2265 0 for time, L > 0 for length).' },
            terms: []
        },
        {
            id: 'h-steps', type: 'heading',
            data: { text: 'Approach to Modelling Questions', level: 2 }, terms: []
        },
        {
            id: 'list-steps', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Read carefully \u2014 identify what the variable represents and its units',
                    'State any simplifying assumptions',
                    'Write the function with its domain',
                    'Use the function to answer the question',
                    'Interpret the answer in context (units, realism)',
                    'Suggest refinements or limitations of the model'
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A ball is thrown upward. Height h(t) = 20t \u2212 5t\u00b2 metres after t seconds. Find the domain and the time it lands.',
                text: 'Domain: t \u2265 0 and ball above ground, so h(t) \u2265 0\n  20t \u2212 5t\u00b2 = 0  \u2192  5t(4 \u2212 t) = 0  \u2192  t = 0 or t = 4\nDomain: 0 \u2264 t \u2264 4\nBall lands after 4 seconds.'
            }, terms: []
        },
        {
            id: 'table-types', type: 'comparisonTable',
            data: {
                headers: ['Function type', 'Typical modelling context'],
                rows: [
                    ['Linear: ax + b', 'Fixed rate \u2014 cost, distance, tax'],
                    ['Quadratic: ax\u00b2 + bx + c', 'Projectile, profit/loss'],
                    ['Reciprocal: k/x', 'Inverse proportion \u2014 speed/time, pressure/volume'],
                    ['Exponential: a\u00b7bx', 'Population growth, radioactive decay'],
                    ['Logarithm: a ln x', 'pH, decibels, diminishing returns']
                ],
                caption: 'Match the function type to the shape of the relationship'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Critiquing Models',
                text: 'A good critique mentions: (1) an assumption that is too simplistic, (2) how the domain might be wrong, (3) how to improve accuracy (e.g. add more terms, use different function).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Models use functions with restricted domains to represent real-world situations. State assumptions, solve within context, interpret answers, and critique/refine the model.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "In contextual modelling questions, mathematical domains often contradict physical reality. Explicitly state real-world restrictions, such as time t \u2265 0 or distance x > 0, to secure the modelling assumptions mark."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-model', prompt: 'Why must the domain be restricted when modelling real-world situations?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'For h(t) = 20t \u2212 5t\u00b2, find when the ball lands.' },
            { id: 'c3', blockId: 'table-types', prompt: 'Which function type typically models exponential growth or decay?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What three things should a good model critique include?' }
        ],
        summaryText: 'Models use restricted-domain functions. State assumptions, solve, interpret in context. Critique: identify too-simple assumptions and suggest improvements.',
        ready: true
    },
    evidence: []
};
