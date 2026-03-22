/**
 * WMA13 · Topic 2 · Subtopic 1 — Inverse trig functions
 */
export const note_mathematics_3_2_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Understand and use arcsin, arccos, and arctan: their restricted domains, ranges, and graphs.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'Inverse Trigonometric Functions', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: 'Because sin, cos, and tan are not one-to-one over all of \u211d, we restrict their domains before defining inverses. The inverse functions are written arcsin (or sin\u207b\u00b9), arccos, arctan.' },
            terms: []
        },
        {
            id: 'table-inv', type: 'comparisonTable',
            data: {
                headers: ['Function', 'Restricted domain', 'Range (output)'],
                rows: [
                    ['arcsin x', '\u22121 \u2264 x \u2264 1', '\u2212\u03c0/2 \u2264 y \u2264 \u03c0/2'],
                    ['arccos x', '\u22121 \u2264 x \u2264 1', '0 \u2264 y \u2264 \u03c0'],
                    ['arctan x', 'x \u2208 \u211d', '\u2212\u03c0/2 < y < \u03c0/2']
                ],
                caption: 'Principal value ranges for inverse trig functions (radians)'
            }, terms: []
        },
        {
            id: 'h-properties', type: 'heading',
            data: { text: 'Key Properties', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Identities',
                text: 'arcsin(sin x) = x for x \u2208 [\u2212\u03c0/2, \u03c0/2]\narccos(cos x) = x for x \u2208 [0, \u03c0]\narctan(tan x) = x for x \u2208 (\u2212\u03c0/2, \u03c0/2)\n\narcsin(\u2212x) = \u2212arcsin x  (odd function)\narccos(\u2212x) = \u03c0 \u2212 arccos x'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact values of arcsin(1/2), arccos(0), arctan(1).',
                text: 'arcsin(1/2) = \u03c0/6  (since sin \u03c0/6 = 1/2 and \u03c0/6 \u2208 [\u2212\u03c0/2, \u03c0/2])\narccos(0) = \u03c0/2  (since cos \u03c0/2 = 0 and \u03c0/2 \u2208 [0, \u03c0])\narctan(1) = \u03c0/4  (since tan \u03c0/4 = 1 and \u03c0/4 \u2208 (\u2212\u03c0/2, \u03c0/2))'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Graph Tip',
                text: 'Each inverse trig graph is the reflection of the original (restricted) trig graph in y = x.\narctan has horizontal asymptotes at y = \u03c0/2 and y = \u2212\u03c0/2.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'arcsin: domain [\u22121,1], range [\u2212\u03c0/2, \u03c0/2]. arccos: domain [\u22121,1], range [0,\u03c0]. arctan: domain \u211d, range (\u2212\u03c0/2, \u03c0/2). Graphs are reflections of restricted trig graphs in y=x.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Be extremely precise with principal value ranges. For instance, the range of arcsin(x) is restricted to -\u03c0/2 \u2264 y \u2264 \u03c0/2. Giving an answer outside this interval shows a fundamental misunderstanding of inverse functions."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-inv', prompt: 'State the range of arccos x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the exact value of arctan(1) in radians.' },
            { id: 'c3', blockId: 'callout-key', prompt: 'Why do arcsin, arccos, arctan have restricted domains?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What are the asymptotes of y = arctan x?' }
        ],
        summaryText: 'Inverse trig functions have restricted domains. arcsin: [\u2212\u03c0/2,\u03c0/2]. arccos: [0,\u03c0]. arctan: (\u2212\u03c0/2,\u03c0/2). Graphs reflect trig graphs in y=x.',
        ready: true
    },
    evidence: []
};
