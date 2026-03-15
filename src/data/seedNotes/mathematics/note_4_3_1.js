/**
 * WMA14 · Topic 3 · Subtopic 1 — Parametric curves: sketching and properties
 */
export const note_mathematics_4_3_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Sketch parametric curves by computing and plotting key points, and determine the range of the curve from the parameter domain.' },
            terms: []
        },
        {
            id: 'h-sketch', type: 'heading',
            data: { text: 'Sketching Parametric Curves', level: 2 }, terms: []
        },
        {
            id: 'list-steps', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Identify the range of t (given or natural domain).' },
                    { text: 'Compute a table of (t, x, y) points for key t values.' },
                    { text: 'Plot the points. Note the direction of travel as t increases.' },
                    { text: 'Identify intercepts, turning points, and endpoints.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Sketch x = t\u00b2, y = t(t\u00b2 \u2212 4) for \u22122 \u2264 t \u2264 2.',
                text: 't=\u22122: x=4, y=\u22122(4\u22124)=0\nt=\u22121: x=1, y=\u22121(\u22123)=3\nt=0: x=0, y=0\nt=1: x=1, y=1(\u22123)=\u22123\nt=2: x=4, y=2\u00b70=0\n\nCurve is symmetric? x=t\u00b2 is even; y=t(t\u00b2\u22124) is odd \u27a2 anti-symmetric about x-axis.\nIntercepts: (0,0) and (4,0) (at t=\u00b12).\n[Sketch a smooth loop through these points]'
            }, terms: []
        },
        {
            id: 'h-conics', type: 'heading',
            data: { text: 'Standard Conic Parametrisations', level: 2 }, terms: []
        },
        {
            id: 'table-conics', type: 'comparisonTable',
            data: {
                headers: ['Curve', 'Parametric', 'Cartesian'],
                rows: [
                    ['Parabola', 'x = at\u00b2, y = 2at', 'y\u00b2 = 4ax'],
                    ['Ellipse', 'x = a cos t, y = b sin t', 'x\u00b2/a\u00b2 + y\u00b2/b\u00b2 = 1'],
                    ['Circle', 'x = r cos t, y = r sin t', 'x\u00b2 + y\u00b2 = r\u00b2'],
                    ['Rect. hyperbola', 'x = ct, y = c/t', 'xy = c\u00b2']
                ],
                caption: 'Standard parametric forms'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Direction of Travel',
                text: 'The arrow on a parametric sketch shows the direction of increasing t. Find where dx/dt = 0 (vertical tangent) or dy/dt = 0 (horizontal tangent) to locate turning-point-like features.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Sketch parametric curves by tabulating key points. Note the direction of travel. Know standard conics: parabola (at\u00b2, 2at), ellipse (a cos t, b sin t), rectangular hyperbola (ct, c/t).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-steps', prompt: 'List the steps for sketching a parametric curve.' },
            { id: 'c2', blockId: 'table-conics', prompt: 'State the parametric equations for a parabola y\u00b2=4ax.' },
            { id: 'c3', blockId: 'table-conics', prompt: 'State the Cartesian form of x=a cos t, y=b sin t.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What condition gives a horizontal tangent on a parametric curve?' }
        ],
        summaryText: 'Sketch by tabulating points; note direction. Standard: parabola x=at\u00b2, y=2at; ellipse x=a cos t, y=b sin t; rect. hyperbola x=ct, y=c/t.',
        ready: true
    },
    evidence: []
};
