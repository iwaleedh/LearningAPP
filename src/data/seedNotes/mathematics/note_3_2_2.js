/**
 * WMA13 · Topic 2 · Subtopic 2 — Small angle approximations
 */
export const note_mathematics_3_2_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply small angle approximations for sin \u03b8, cos \u03b8, and tan \u03b8 when \u03b8 is small and in radians.' },
            terms: []
        },
        {
            id: 'h-approx', type: 'heading',
            data: { text: 'Small Angle Approximations', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Approximations (\u03b8 in radians, \u03b8 small)',
                text: 'sin \u03b8 \u2248 \u03b8\ntan \u03b8 \u2248 \u03b8\ncos \u03b8 \u2248 1 \u2212 \u03b8\u00b2/2\n\nValid when \u03b8 is close to 0 (\u03b8 must be in radians!)'
            }, terms: []
        },
        {
            id: 'h-derive', type: 'heading',
            data: { text: 'Why These Work', level: 2 }, terms: []
        },
        {
            id: 'p-derive', type: 'paragraph',
            data: { text: 'These approximations come from the first terms of the Maclaurin series expansions of sin, cos, and tan. As \u03b8 \u2192 0, the higher-order terms become negligible, so the approximations become exact in the limit.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Show that for small \u03b8: (1 \u2212 cos 2\u03b8)/\u03b8 sin \u03b8 \u2248 2.',
                text: 'cos 2\u03b8 \u2248 1 \u2212 (2\u03b8)\u00b2/2 = 1 \u2212 2\u03b8\u00b2\nso 1 \u2212 cos 2\u03b8 \u2248 2\u03b8\u00b2\nsin \u03b8 \u2248 \u03b8\n\nNumerator/denominator = 2\u03b8\u00b2 / (\u03b8 \u00b7 \u03b8) = 2\u03b8\u00b2/\u03b8\u00b2 = 2  \u2713'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Estimate sin(0.05) and cos(0.1) using small angle approximations.',
                text: 'sin(0.05) \u2248 0.05\n  (Actual: 0.04998 \u2014 very close!)\ncos(0.1) \u2248 1 \u2212 (0.1)\u00b2/2 = 1 \u2212 0.005 = 0.995\n  (Actual: 0.9950 \u2014 very close!)'
            }, terms: []
        },
        {
            id: 'callout-warning', type: 'callout',
            data: {
                style: 'warning',
                title: 'Important',
                text: '\u03b8 MUST be in radians for these approximations to work. They are not valid for large \u03b8.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'For small \u03b8 (radians): sin \u03b8 \u2248 \u03b8, tan \u03b8 \u2248 \u03b8, cos \u03b8 \u2248 1 \u2212 \u03b8\u00b2/2. Use to simplify limits and approximate trig expressions near zero.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Small angle approximations ONLY work when the angle is measured in radians. If an exam question provides an angle in degrees, you are required to convert it to radians before substituting into the approximation formulas."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the three small angle approximations.' },
            { id: 'c2', blockId: 'callout-warning', prompt: 'What condition must \u03b8 satisfy for small angle approximations to apply?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Using small angles, show (1 \u2212 cos 2\u03b8)/(\u03b8 sin \u03b8) \u2248 2.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Estimate cos(0.1) using a small angle approximation.' }
        ],
        summaryText: 'sin \u03b8 \u2248 \u03b8, tan \u03b8 \u2248 \u03b8, cos \u03b8 \u2248 1 \u2212 \u03b8\u00b2/2 for small \u03b8 in radians.',
        ready: true
    },
    evidence: []
};
