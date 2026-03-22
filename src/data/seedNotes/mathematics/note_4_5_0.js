/**
 * WMA14 · Topic 5 · Subtopic 0 — Implicit differentiation
 */
export const note_mathematics_4_5_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Differentiate implicit equations using the chain rule (d/dx[f(y)] = f\u2032(y) dy/dx), and use this to find tangents, normals, and stationary points.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'Implicit Differentiation Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Key Rule',
                text: 'd/dx [f(y)] = f\u2032(y) \u00b7 dy/dx\n\nExamples:\nd/dx [y\u00b2] = 2y dy/dx\nd/dx [y\u00b3] = 3y\u00b2 dy/dx\nd/dx [e^y] = e^y dy/dx\nd/dx [sin y] = cos y dy/dx\nd/dx [ln y] = (1/y) dy/dx\nd/dx [xy] = y + x dy/dx  (product rule)'
            }, terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Finding dy/dx', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find dy/dx for x\u00b2 + y\u00b2 = 25.',
                text: 'Differentiate both sides w.r.t. x:\n2x + 2y dy/dx = 0\n\nSolve for dy/dx:\ndy/dx = \u2212x/y'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find dy/dx for x\u00b3 + xy + y\u00b3 = 7. Find the gradient at (1, 1).',
                text: 'Differentiate:\n3x\u00b2 + (y + x dy/dx) + 3y\u00b2 dy/dx = 0\n3x\u00b2 + y + (x + 3y\u00b2) dy/dx = 0\n\ndy/dx = \u2212(3x\u00b2 + y) / (x + 3y\u00b2)\n\nAt (1,1): dy/dx = \u2212(3+1)/(1+3) = \u22124/4 = \u22121'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the stationary points of y\u00b2 \u2212 2xy + 3x\u00b2 = 4.',
                text: 'Differentiate w.r.t. x:\n2y dy/dx \u2212 2(y + x dy/dx) + 6x = 0\n2y dy/dx \u2212 2y \u2212 2x dy/dx + 6x = 0\n(2y \u2212 2x) dy/dx = 2y \u2212 6x\n\ndy/dx = (2y\u22126x)/(2y\u22122x) = (y\u22123x)/(y\u2212x)\n\nStationary: dy/dx = 0  \u27a2  y = 3x\nSubstitute into curve: (3x)\u00b2 \u2212 2x(3x) + 3x\u00b2 = 4\n9x\u00b2 \u2212 6x\u00b2 + 3x\u00b2 = 4  \u27a2  6x\u00b2 = 4  \u27a2  x = \u00b1\u221a(2/3)\nCorresponding y = \u00b13\u221a(2/3)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '\u2022 Collect all dy/dx terms on one side before dividing.\n\u2022 For tangent: find dy/dx, substitute the point, use y\u2212y\u2080 = m(x\u2212x\u2080).\n\u2022 For normal: use gradient \u22121/m.\n\u2022 Remember the product rule for terms like xy or x\u00b2y.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Implicit differentiation: d/dx[f(y)] = f\u2032(y) dy/dx. Differentiate every term, collect dy/dx terms, solve. Apply to tangents, normals, and stationary points on implicit curves.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Treat 'y' as a function of 'x'. When differentiating mixed terms like xy, you MUST use the product rule: x*dy/dx + y. Forgetting the product rule here is one of the most common mistakes in differentiation."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the key rule for implicit differentiation: d/dx[f(y)] = ?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find dy/dx for the circle x\u00b2+y\u00b2=25.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find dy/dx for x\u00b3+xy+y\u00b3=7 and evaluate at (1,1).' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Describe how to find stationary points on an implicit curve.' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'How do you differentiate an xy term implicitly?' }
        ],
        summaryText: 'Implicit: d/dx[f(y)] = f\u2032(y)dy/dx. Differentiate all terms, collect dy/dx, solve. Product rule for xy terms.',
        ready: true
    },
    evidence: []
};
