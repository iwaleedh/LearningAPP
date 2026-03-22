/**
 * WMA13 · Topic 4 · Subtopic 4 — Quotient rule
 */
export const note_mathematics_3_4_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the quotient rule to differentiate functions expressed as one expression divided by another.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Quotient Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Quotient Rule',
                text: 'If y = u/v, then:\ndy/dx = (v(du/dx) \u2212 u(dv/dx)) / v\u00b2\n\nMemory: "v u-dash minus u v-dash, all over v squared"'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = sin x / x.',
                text: 'u = sin x,  v = x\ndu/dx = cos x,  dv/dx = 1\ndy/dx = (x cos x \u2212 sin x \u00b7 1) / x\u00b2 = (x cos x \u2212 sin x)/x\u00b2'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove that d/dx(tan x) = sec\u00b2x using the quotient rule.',
                text: 'tan x = sin x / cos x,  so u = sin x, v = cos x\ndu/dx = cos x,  dv/dx = \u2212sin x\ndy/dx = (cos x \u00b7 cos x \u2212 sin x \u00b7 (\u2212sin x)) / cos\u00b2x\n= (cos\u00b2x + sin\u00b2x) / cos\u00b2x\n= 1/cos\u00b2x = sec\u00b2x  \u2713'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e^(2x) / (x\u00b2 + 1).',
                text: 'u = e^(2x),  v = x\u00b2 + 1\ndu/dx = 2e^(2x),  dv/dx = 2x\ndy/dx = ((x\u00b2+1)\u00b72e^(2x) \u2212 e^(2x)\u00b72x) / (x\u00b2+1)\u00b2\n= e^(2x)(2x\u00b2 + 2 \u2212 2x) / (x\u00b2+1)\u00b2\n= 2e^(2x)(x\u00b2 \u2212 x + 1) / (x\u00b2+1)\u00b2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Quotient vs Product Rule',
                text: 'You can convert y = u/v to y = u \u00b7 v\u207b\u00b9 and use the product rule instead. Both give the same answer. Use whichever is less error-prone for you.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Quotient rule: d/dx(u/v) = (v u\u2019 \u2212 u v\u2019) / v\u00b2. Denominator squared on bottom; notice the minus sign. Can verify: d/dx(tan x) = sec\u00b2x by applying to sin x / cos x.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "A common mistake in the quotient rule is getting the numerator terms the wrong way around or messing up the minus sign. Always write out u, v, u' and v' clearly before substituting into (vu' - uv') / v^2."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the quotient rule formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = sin x / x.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Prove d/dx(tan x) = sec\u00b2x using the quotient rule.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How can you apply the product rule instead of the quotient rule?' }
        ],
        summaryText: 'Quotient rule: d/dx(u/v) = (v u\u2019 \u2212 u v\u2019)/v\u00b2. Bottom squared; minus sign in numerator.',
        ready: true
    },
    evidence: []
};
