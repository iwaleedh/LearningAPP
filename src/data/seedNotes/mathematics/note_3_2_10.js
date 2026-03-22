/**
 * WMA13 · Topic 2 · Subtopic 10 — Trigonometric modelling
 */
export const note_mathematics_3_2_10 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply trigonometric functions to model periodic real-world phenomena such as tides, temperatures, and oscillations.' },
            terms: []
        },
        {
            id: 'h-model', type: 'heading',
            data: { text: 'Trig Functions as Models', level: 2 }, terms: []
        },
        {
            id: 'p-model', type: 'paragraph',
            data: { text: 'Many real phenomena are periodic: tides, temperatures, light intensity, oscillations. These are modelled by functions of the form f(t) = A sin(\u03c9t + \u03c6) + k or f(t) = A cos(\u03c9t + \u03c6) + k.' },
            terms: []
        },
        {
            id: 'table-params', type: 'comparisonTable',
            data: {
                headers: ['Parameter', 'Meaning', 'How to find it'],
                rows: [
                    ['A (amplitude)', 'Half the range of f(t)', 'A = (max \u2212 min)/2'],
                    ['k (vertical shift)', 'Midline of the oscillation', 'k = (max + min)/2'],
                    ['\u03c9 (frequency)', 'Determines the period T', '\u03c9 = 2\u03c0/T'],
                    ['\u03c6 (phase shift)', 'Horizontal shift', 'Determined by initial conditions']
                ],
                caption: 'Parameters of a trig model f(t) = A sin(\u03c9t + \u03c6) + k'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Tides at a harbour vary from 1 m to 7 m, with period 12 hours. Write a model h(t) = a sin(bt) + c for height h at time t hours (t = 0 at mean tide rising).',
                text: 'Amplitude A = (7 \u2212 1)/2 = 3\nMidline k = (7 + 1)/2 = 4\nPeriod = 12 h  \u2192  b = 2\u03c0/12 = \u03c0/6\n\nh(t) = 3 sin(\u03c0t/6) + 4\n\nCheck: when t=3, h = 3 sin(\u03c0/2) + 4 = 7 (max) \u2713'
            }, terms: []
        },
        {
            id: 'h-use', type: 'heading',
            data: { text: 'Using the Model', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Using h(t) = 3 sin(\u03c0t/6) + 4, find when h > 5.5 in the first 12 hours.',
                text: '3 sin(\u03c0t/6) + 4 > 5.5\nsin(\u03c0t/6) > 0.5\n\u03c0t/6 > \u03c0/6  and  \u03c0t/6 < 5\u03c0/6\nt > 1 and t < 5\nSo h > 5.5 for 1 < t < 5 (4 hours in the first tide cycle)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Reading off the parameters: amplitude = half the peak-to-trough range, midline = average of max and min. Always state what each parameter represents in context.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trig models: f(t) = A sin(\u03c9t + \u03c6) + k. A = amplitude = (max\u2212min)/2; k = midline = (max+min)/2; \u03c9 = 2\u03c0/period. Use the model to find times/values from the context.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When applying 'R sin(x+\u03b1) + c' into a physical context like tides or temperature, 'R' represents the physical amplitude (half of the complete range) and 'c' represents the mean average value. Check if your extracted values make physical sense."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-params', prompt: 'How do you find the amplitude A from the maximum and minimum of a model?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write a trig model for tides varying from 1 m to 7 m with period 12 hours.' },
            { id: 'c3', blockId: 'table-params', prompt: 'If the period of a trig model is 8 hours, what is the angular frequency \u03c9?' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Using h(t) = 3 sin(\u03c0t/6) + 4, find when h > 5.5.' }
        ],
        summaryText: 'Trig models: A sinx(\u03c9t)+k. A=(max\u2212min)/2; k=(max+min)/2; \u03c9=2\u03c0/T. Use to find values and intervals from the context.',
        ready: true
    },
    evidence: []
};
