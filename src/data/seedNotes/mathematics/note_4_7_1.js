/**
 * WMA14 · Topic 7 · Subtopic 1 — Scalar (dot) product
 */
export const note_mathematics_4_7_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Calculate the scalar product of two vectors, use it to find the angle between them, and determine when vectors are perpendicular.' },
            terms: []
        },
        {
            id: 'h-defn', type: 'heading',
            data: { text: 'Definition', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Scalar Product',
                text: 'a \u00b7 b = |a||b| cos\u03b8  (geometric definition)\n\na \u00b7 b = a\u2081b\u2081 + a\u2082b\u2082 + a\u2083b\u2083  (component form)\n\nAngle: cos\u03b8 = (a \u00b7 b) / (|a||b|)\n\nPerpendicular: a \u00b7 b = 0  (\u21d0\u21d2 \u03b8 = 90\u00b0)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the angle between a=(1,2,3) and b=(\u22121,0,2).',
                text: 'a\u00b7b = (1)(\u22121)+(2)(0)+(3)(2) = \u22121+0+6 = 5\n|a| = \u221a(1+4+9) = \u221a14\n|b| = \u221a(1+0+4) = \u221a5\n\ncos\u03b8 = 5/(\u221a14 \u00b7 \u221a5) = 5/\u221a70\n\u03b8 = arccos(5/\u221a70) \u2248 53.3\u00b0'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find k if a=(3, k, \u22121) and b=(2, 1, k) are perpendicular.',
                text: 'a\u00b7b = 0:\n3(2) + k(1) + (\u22121)(k) = 0\n6 + k \u2212 k = 0\n6 = 0  \u2014  contradiction!\n\nCheck: 6 + k \u2212 k = 6 \u2260 0 for any k.\n\nSo a and b are never perpendicular for this choice. (This shows not every pair can be made perpendicular.)'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find k if a=(2,k,1) and b=(k,1,\u22123) are perpendicular.',
                text: 'a\u00b7b = 2k + k + (\u22123) = 3k \u2212 3 = 0\nk = 1'
            }, terms: []
        },
        {
            id: 'h-props', type: 'heading',
            data: { text: 'Properties of Dot Product', level: 2 }, terms: []
        },
        {
            id: 'list-props', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Commutative: a\u00b7b = b\u00b7a' },
                    { text: 'Distributive: a\u00b7(b+c) = a\u00b7b + a\u00b7c' },
                    { text: 'a\u00b7a = |a|\u00b2' },
                    { text: 'i\u00b7i = j\u00b7j = k\u00b7k = 1; i\u00b7j = i\u00b7k = j\u00b7k = 0' }
                ]
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Dot product: a\u00b7b = a\u2081b\u2081+a\u2082b\u2082+a\u2083b\u2083 = |a||b|cos\u03b8. Perpendicular: a\u00b7b=0. Angle formula: cos\u03b8=(a\u00b7b)/(|a||b|).' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Remember that if the scalar product of two non-zero vectors is zero, the vectors are perpendicular. When finding the angle between two lines, always use their direction vectors, never their position vectors."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State both forms of the scalar product formula and the perpendicularity condition.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the angle between a=(1,2,3) and b=(\u22121,0,2).' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Find k so that (2,k,1)\u00b7(k,1,\u22123)=0.' },
            { id: 'c4', blockId: 'list-props', prompt: 'State the value of a\u00b7a.' }
        ],
        summaryText: 'a\u00b7b = a\u2081b\u2081+a\u2082b\u2082+a\u2083b\u2083 = |a||b|cos\u03b8. Perpendicular \u21d4 a\u00b7b=0.',
        ready: true
    },
    evidence: []
};
