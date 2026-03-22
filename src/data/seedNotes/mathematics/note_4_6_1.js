/**
 * WMA14 · Topic 6 · Subtopic 1 — Integration by parts: repeated application and cyclic integrals
 */
export const note_mathematics_4_6_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply integration by parts more than once, and solve cyclic integrals where the original integral reappears.' },
            terms: []
        },
        {
            id: 'h-repeat', type: 'heading',
            data: { text: 'Repeated Integration by Parts', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b x\u00b2 e^x dx',
                text: 'First pass: u = x\u00b2, dv = e^x dx  \u27a2  du = 2x, v = e^x\n\u222b x\u00b2 e^x dx = x\u00b2 e^x \u2212 \u222b 2x e^x dx\n\nSecond pass for \u222b 2x e^x dx:\nu = 2x, dv = e^x dx  \u27a2  du = 2, v = e^x\n\u222b 2x e^x dx = 2x e^x \u2212 \u222b 2e^x dx = 2x e^x \u2212 2e^x\n\nFinal: \u222b x\u00b2 e^x dx = x\u00b2 e^x \u2212 2x e^x + 2e^x + C = e^x(x\u00b2 \u2212 2x + 2) + C'
            }, terms: []
        },
        {
            id: 'h-cyclic', type: 'heading',
            data: { text: 'Cyclic Integrals', level: 2 }, terms: []
        },
        {
            id: 'p-cyclic', type: 'paragraph',
            data: { text: 'Sometimes applying integration by parts twice returns the original integral. Denote the integral I, collect on one side and solve.' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b e^x sin x dx  (cyclic integral)',
                text: 'Let I = \u222b e^x sin x dx\n\nFirst pass: u = sin x, dv = e^x dx  \u27a2  du = cos x, v = e^x\nI = e^x sin x \u2212 \u222b e^x cos x dx\n\nSecond pass on \u222b e^x cos x dx:\nu = cos x, dv = e^x dx  \u27a2  du = \u2212sin x, v = e^x\n\u222b e^x cos x dx = e^x cos x + \u222b e^x sin x dx = e^x cos x + I\n\nSo: I = e^x sin x \u2212 (e^x cos x + I)\nI = e^x sin x \u2212 e^x cos x \u2212 I\n2I = e^x(sin x \u2212 cos x)\nI = (e^x/2)(sin x \u2212 cos x) + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Decide early: repeated or cyclic?',
                text: '\u2022 Repeated: use for x\u207f e^x or x\u207f sin/cos x (apply n times)\n\u2022 Cyclic: use for e^x sin x or e^x cos x (apply twice, solve for I)\nIn both cases, keep the same choice of u type on each application.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Repeated by parts: reduce power of x until simple. Cyclic (e^x sin/cos x): label I, apply twice, and solve 2I = \u2026 to get I = \u2026 + C.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Keep your work highly organised and use large brackets when substituting the second application of parts back into the first. Sign errors are extremely common when nested negative signs are not clearly written out."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-we1', prompt: 'Evaluate \u222b x\u00b2 e^x dx using integration by parts twice.' },
            { id: 'c2', blockId: 'p-cyclic', prompt: 'Why does integrating e^x sin x by parts cause a cyclic situation?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Evaluate \u222b e^x sin x dx using the cyclic method.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'When applying integration by parts twice, what must stay consistent between passes?' }
        ],
        summaryText: 'Repeated: reduces x\u207f. Cyclic (e^x sin/cos): label I, apply twice, collect \u2192 2I = \u2026 \u2192 I = \u2026/2 + C.',
        ready: true
    },
    evidence: []
};
