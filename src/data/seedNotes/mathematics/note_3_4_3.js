/**
 * WMA13 · Topic 4 · Subtopic 3 — Product rule
 */
export const note_mathematics_3_4_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the product rule to differentiate products of trig, exponential, and polynomial functions.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Product Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Product Rule',
                text: 'If y = u v, then:\ndy/dx = u(dv/dx) + v(du/dx)\n\nMemory: "u v-dash + v u-dash"'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = x\u00b2 sin x.',
                text: 'u = x\u00b2,  v = sin x\ndu/dx = 2x,  dv/dx = cos x\ndy/dx = x\u00b2 cos x + sin x \u00b7 2x = x\u00b2 cos x + 2x sin x'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e\u02e3 ln x.',
                text: 'u = e\u02e3,  v = ln x\ndu/dx = e\u02e3,  dv/dx = 1/x\ndy/dx = e\u02e3(1/x) + ln x \u00b7 e\u02e3 = e\u02e3(1/x + ln x)'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = 3x\u00b2 e^(2x).',
                text: 'u = 3x\u00b2,  v = e^(2x)\ndu/dx = 6x,  dv/dx = 2e^(2x)\ndy/dx = 3x\u00b2 \u00b7 2e^(2x) + e^(2x) \u00b7 6x = 6xe^(2x)(x + 1)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Factorising After Product Rule',
                text: 'After applying the product rule, factorise the result. Common factorisation techniques: take out e^x/trig factor, or take out common powers of x. This makes further use (e.g. finding stationary points) much easier.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Product rule: d/dx(uv) = u v\u2019 + v u\u2019. Identify u and v, differentiate each, then combine. Factorise the result where possible.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the product rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = x\u00b2 sin x.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Differentiate y = e\u02e3 ln x.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Differentiate y = 3x\u00b2 e^(2x) and factorise.' }
        ],
        summaryText: 'Product rule: d/dx(uv) = u(dv/dx) + v(du/dx). Factorise after applying.',
        ready: true
    },
    evidence: []
};
