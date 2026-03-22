/**
 * WMA13 · Topic 2 · Subtopic 9 — Graphs of reciprocal and inverse trig functions
 */
export const note_mathematics_3_2_9 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Sketch and describe the graphs of sec x, cosec x, cot x, arcsin x, arccos x, and arctan x.' },
            terms: []
        },
        {
            id: 'h-recip', type: 'heading',
            data: { text: 'Graphs of Reciprocal Trig Functions', level: 2 }, terms: []
        },
        {
            id: 'table-recip', type: 'comparisonTable',
            data: {
                headers: ['Function', 'Period', 'Asymptotes at', 'Range'],
                rows: [
                    ['sec x = 1/cos x', '2\u03c0', 'x = \u03c0/2 + n\u03c0', 'y \u2264 \u22121 or y \u2265 1'],
                    ['cosec x = 1/sin x', '2\u03c0', 'x = n\u03c0', 'y \u2264 \u22121 or y \u2265 1'],
                    ['cot x = cos x/sin x', '\u03c0', 'x = n\u03c0', 'y \u2208 \u211d']
                ],
                caption: 'Properties of reciprocal trig graphs'
            }, terms: []
        },
        {
            id: 'h-sketch-tips', type: 'heading',
            data: { text: 'Sketching Reciprocal Trig Graphs', level: 2 }, terms: []
        },
        {
            id: 'p-sketch', type: 'paragraph',
            data: { text: 'Start by sketching the parent function (sin, cos, or tan). Asymptotes occur where the parent function = 0. The reciprocal graph has U-shaped curves (opening up or down) between consecutive asymptotes, touching the parent function at its peaks and troughs (y = \u00b11).' },
            terms: []
        },
        {
            id: 'h-inv', type: 'heading',
            data: { text: 'Graphs of Inverse Trig Functions', level: 2 }, terms: []
        },
        {
            id: 'table-inv', type: 'comparisonTable',
            data: {
                headers: ['Function', 'Domain', 'Range', 'Shape'],
                rows: [
                    ['arcsin x', '\u22121 \u2264 x \u2264 1', '\u2212\u03c0/2 \u2264 y \u2264 \u03c0/2', 'S-curve through origin'],
                    ['arccos x', '\u22121 \u2264 x \u2264 1', '0 \u2264 y \u2264 \u03c0', 'Decreasing curve'],
                    ['arctan x', 'x \u2208 \u211d', '\u2212\u03c0/2 < y < \u03c0/2', 'S-curve, asymptotes \u00b1\u03c0/2']
                ],
                caption: 'Properties of inverse trig function graphs'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Graph Points to Mark',
                text: 'For arcsin: (\u22121, \u2212\u03c0/2), (0, 0), (1, \u03c0/2)\nFor arccos: (\u22121, \u03c0), (0, \u03c0/2), (1, 0)\nFor arctan: horizontal asymptotes y = \u00b1\u03c0/2; passes through (0, 0)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'sec x and cosec x: period 2\u03c0, range |y| \u2265 1, U-shaped curves. cot x: period \u03c0, all real values. arcsin, arccos, arctan: S-curves with restricted domains and ranges; arctan has asymptotes at \u00b1\u03c0/2.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When sketching reciprocal or inverse trig graphs, explicitly draw and write the equations of the asymptotes. A sketch of sec x or arctan x without clearly written dashed asymptotes (e.g. y = \u03c0/2) will drop marks."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-recip', prompt: 'Where are the asymptotes of y = cosec x?' },
            { id: 'c2', blockId: 'p-sketch', prompt: 'How do you sketch y = sec x from the graph of y = cos x?' },
            { id: 'c3', blockId: 'table-inv', prompt: 'State the domain and range of arccos x.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'State three key coordinate points on y = arcsin x.' }
        ],
        summaryText: 'sec/cosec: asymptotes where parent = 0, |y| \u2265 1. arcsin/arccos: restricted domain [\u22121,1]. arctan: asymptotes \u00b1\u03c0/2.',
        ready: true
    },
    evidence: []
};
