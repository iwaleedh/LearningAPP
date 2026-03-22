/**
 * WMA13 · Topic 4 · Subtopic 6 — Parametric differentiation
 */
export const note_mathematics_3_4_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Differentiate parametric equations to find dy/dx and d\u00b2y/dx\u00b2, and find the equations of tangents and normals.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Parametric Differentiation', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Formula',
                text: 'If x = f(t) and y = g(t), then:\ndy/dx = (dy/dt) \u00f7 (dx/dt)\n\nSecond derivative:\nd\u00b2y/dx\u00b2 = d/dt(dy/dx) \u00f7 (dx/dt)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = t\u00b2 + 1, y = 2t. Find dy/dx and the gradient where t = 3.',
                text: 'dx/dt = 2t,  dy/dt = 2\ndy/dx = 2/(2t) = 1/t\n\nAt t = 3: dy/dx = 1/3'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = cos t, y = sin t. Find dy/dx and d\u00b2y/dx\u00b2.',
                text: 'dx/dt = \u2212sin t,  dy/dt = cos t\ndy/dx = cos t / (\u2212sin t) = \u2212cot t\n\nd/dt(dy/dx) = d/dt(\u2212cot t) = cosec\u00b2 t\nd\u00b2y/dx\u00b2 = cosec\u00b2 t / (\u2212sin t) = \u2212cosec\u00b3 t'
            }, terms: []
        },
        {
            id: 'h-tangent', type: 'heading',
            data: { text: 'Tangent and Normal to Parametric Curves', level: 2 }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = 3t\u00b2, y = 6t. Find the tangent at t = 2.',
                text: 'At t = 2: x = 12, y = 12\ndx/dt = 6t,  dy/dt = 6\ndy/dx = 6/(6t) = 1/t\nGradient at t = 2: m = 1/2\nTangent: y \u2212 12 = (1/2)(x \u2212 12)  \u2192  2y = x + 12'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Steps',
                text: '1. Find dx/dt and dy/dt separately\n2. Divide: dy/dx = (dy/dt)/(dx/dt)\n3. For d\u00b2y/dx\u00b2: differentiate dy/dx w.r.t. t, then divide by dx/dt\n4. For tangent/normal: substitute t-value into x, y, and dy/dx'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Parametric: dy/dx = (dy/dt)/(dx/dt). Second derivative: d\u00b2y/dx\u00b2 = (d/dt of dy/dx)/(dx/dt). For tangent/normal: find the point and gradient at the given t-value.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "To find the second derivative d^2y/dx^2 for parametric equations, you must differentiate dy/dx with respect to t, and then multiply by dt/dx (or divide by dx/dt). Do not simply find d^2y/dt^2 / d^2x/dt^2!"
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for dy/dx in terms of parametric equations x=f(t), y=g(t).' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'For x = t\u00b2 + 1, y = 2t, find dy/dx.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Find the tangent to x = 3t\u00b2, y = 6t at t = 2.' },
            { id: 'c4', blockId: 'callout-key', prompt: 'How do you find the second derivative d\u00b2y/dx\u00b2 for a parametric curve?' }
        ],
        summaryText: 'Parametric: dy/dx = (dy/dt)/(dx/dt). For tangent: find x, y, and gradient at given t. For d\u00b2y/dx\u00b2: differentiate dy/dx w.r.t. t, divide by dx/dt.',
        ready: true
    },
    evidence: []
};
