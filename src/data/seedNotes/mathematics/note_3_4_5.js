/**
 * WMA13 · Topic 4 · Subtopic 5 — Differentiating inverse trig functions
 */
export const note_mathematics_3_4_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Differentiate arcsin x, arccos x, and arctan x, and recognise when these arise in integration.' },
            terms: []
        },
        {
            id: 'h-results', type: 'heading',
            data: { text: 'Derivatives of Inverse Trig Functions', level: 2 }, terms: []
        },
        {
            id: 'table-derivs', type: 'comparisonTable',
            data: {
                headers: ['f(x)', 'f′(x)', 'Domain'],
                rows: [
                    ['arcsin x', '1/\u221a(1 \u2212 x\u00b2)', '|x| < 1'],
                    ['arccos x', '\u22121/\u221a(1 \u2212 x\u00b2)', '|x| < 1'],
                    ['arctan x', '1/(1 + x\u00b2)', 'x \u2208 \u211d']
                ],
                caption: 'Derivatives of inverse trig functions'
            }, terms: []
        },
        {
            id: 'h-derive', type: 'heading',
            data: { text: 'Derivation: d/dx(arcsin x)', level: 2 }, terms: []
        },
        {
            id: 'callout-derive', type: 'callout',
            data: {
                style: 'worked',
                title: 'Derive d/dx(arcsin x) = 1/\u221a(1 \u2212 x\u00b2).',
                text: 'Let y = arcsin x  \u2192  x = sin y\nDifferentiate both sides w.r.t. x: 1 = cos y \u00b7 dy/dx\ndy/dx = 1/cos y\nUsing sin\u00b2y + cos\u00b2y = 1: cos y = \u221a(1 \u2212 sin\u00b2y) = \u221a(1 \u2212 x\u00b2)\n\u2234 dy/dx = 1/\u221a(1 \u2212 x\u00b2)  \u2713'
            }, terms: []
        },
        {
            id: 'h-chain', type: 'heading',
            data: { text: 'Chain Rule Extensions', level: 2 }, terms: []
        },
        {
            id: 'callout-chain', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule Forms',
                text: 'd/dx[arcsin(f(x))] = f\u2019(x) / \u221a(1 \u2212 f(x)\u00b2)\nd/dx[arctan(f(x))] = f\u2019(x) / (1 + f(x)\u00b2)\nd/dx[arctan(x/a)] = a/(a\u00b2 + x\u00b2)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = arctan(3x) and y = arcsin(x\u00b2).',
                text: 'y = arctan(3x): f(x) = 3x, f\u2019(x) = 3\ndy/dx = 3/(1 + 9x\u00b2)\n\ny = arcsin(x\u00b2): f(x) = x\u00b2, f\u2019(x) = 2x\ndy/dx = 2x/\u221a(1 \u2212 x\u2074)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Integration Connection',
                text: 'These derivatives give standard integration results (by working backwards):\n\u222b 1/\u221a(1\u2212x\u00b2) dx = arcsin x + c\n\u222b 1/(1+x\u00b2) dx = arctan x + c'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'd/dx(arcsin x) = 1/\u221a(1\u2212x\u00b2); d/dx(arccos x) = \u22121/\u221a(1\u2212x\u00b2); d/dx(arctan x) = 1/(1+x\u00b2). Derived using implicit differentiation on the original trig functions.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-derivs', prompt: 'State the derivatives of arcsin x and arctan x.' },
            { id: 'c2', blockId: 'callout-derive', prompt: 'Outline how d/dx(arcsin x) is derived.' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Differentiate y = arctan(3x).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What integration result follows from d/dx(arctan x) = 1/(1+x\u00b2)?' }
        ],
        summaryText: 'd/dx(arcsin x) = 1/\u221a(1\u2212x\u00b2); d/dx(arctan x) = 1/(1+x\u00b2). Derived by implicit differentiation. Lead to standard integrals.',
        ready: true
    },
    evidence: []
};
