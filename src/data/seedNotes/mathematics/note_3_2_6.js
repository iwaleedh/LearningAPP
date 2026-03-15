/**
 * WMA13 · Topic 2 · Subtopic 6 — Harmonic form
 */
export const note_mathematics_3_2_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Express a sin x + b cos x in the form R sin(x + \u03b1) or R cos(x + \u03b1), and use this to find maxima, minima, and solve equations.' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'The Harmonic Form', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Harmonic Form',
                text: 'a sin x + b cos x \u2261 R sin(x + \u03b1)\nwhere  R = \u221a(a\u00b2 + b\u00b2)  and  tan \u03b1 = b/a\n\nAlternatively: a cos x + b sin x \u2261 R cos(x \u2212 \u03b1)\nwhere  R = \u221a(a\u00b2 + b\u00b2)  and  tan \u03b1 = b/a\n\nR is always positive; \u03b1 \u2208 (0, \u03c0/2) unless a or b is negative'
            }, terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Method', level: 2 }, terms: []
        },
        {
            id: 'list-method', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Expand R sin(x + \u03b1) = R sin x cos \u03b1 + R cos x sin \u03b1',
                    'Match coefficients: R cos \u03b1 = a and R sin \u03b1 = b',
                    'Find R: R = \u221a(a\u00b2 + b\u00b2)',
                    'Find \u03b1: tan \u03b1 = b/a  (check quadrant carefully)'
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Write 3 sin x + 4 cos x in the form R sin(x + \u03b1).',
                text: 'R = \u221a(3\u00b2 + 4\u00b2) = \u221a25 = 5\ntan \u03b1 = 4/3  \u2192  \u03b1 = arctan(4/3) \u2248 0.927 rad\n\n3 sin x + 4 cos x = 5 sin(x + 0.927)'
            }, terms: []
        },
        {
            id: 'h-applications', type: 'heading',
            data: { text: 'Applications', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the maximum of f(x) = 3 sin x + 4 cos x and the x at which it occurs.',
                text: 'f(x) = 5 sin(x + 0.927)\nMaximum value = R = 5  (when sin(x + 0.927) = 1)\nx + 0.927 = \u03c0/2  \u2192  x = \u03c0/2 \u2212 0.927 \u2248 0.644 rad'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'The maximum value of R sin(x + \u03b1) is always R. The minimum is \u2212R. This makes finding max/min of combined trig functions very quick once in harmonic form.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'a sin x + b cos x = R sin(x + \u03b1) where R = \u221a(a\u00b2+b\u00b2) and tan \u03b1 = b/a. Max = R, min = \u2212R. Use harmonic form to find maxima/minima and solve combined trig equations.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the harmonic form of a sin x + b cos x and the formulae for R and \u03b1.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write 3 sin x + 4 cos x in the form R sin(x + \u03b1).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'What is the maximum value of 3 sin x + 4 cos x?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What is the maximum of R sin(x + \u03b1)?' }
        ],
        summaryText: 'a sinx + b cosx = R sin(x+\u03b1), R = \u221a(a\u00b2+b\u00b2), tan \u03b1 = b/a. Maximum = R, minimum = \u2212R.',
        ready: true
    },
    evidence: []
};
