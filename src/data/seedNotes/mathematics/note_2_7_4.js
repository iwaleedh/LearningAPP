/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 4
 * "Implicit and parametric differentiation"
 */

export const note_mathematics_2_7_4 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Differentiate implicitly and find dy/dx for parametrically defined curves.' },
            terms: []
        },
        {
            id: 'h-implicit',
            type: 'heading',
            data: { text: 'Implicit Differentiation', level: 2 },
            terms: []
        },
        {
            id: 'callout-key-impl',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Implicit Differentiation Rule',
                text: 'When differentiating a term in y with respect to x, use the chain rule:\n\n  d/dx[f(y)] = f\'(y) · dy/dx\n\nThis is because y is a function of x, so the chain rule applies.\n\nFor example:\n  d/dx(y²) = 2y · dy/dx\n  d/dx(sin y) = cos y · dy/dx\n  d/dx(eʸ) = eʸ · dy/dx'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Implicit Differentiation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find dy/dx for x² + y² = 25.',
                text: 'Differentiate both sides with respect to x:\n  2x + 2y · dy/dx = 0\n  2y · dy/dx = −2x\n  dy/dx = −x/y'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Mixed Terms', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find dy/dx for x³ + 2xy + y³ = 5.',
                text: 'Differentiate each term with respect to x:\n  3x² + 2[1·y + x·dy/dx] + 3y²·dy/dx = 0\n              ↑ product rule on 2xy\n  3x² + 2y + 2x·dy/dx + 3y²·dy/dx = 0\n  (2x + 3y²)·dy/dx = −3x² − 2y\n  dy/dx = (−3x² − 2y)/(2x + 3y²)'
            },
            terms: []
        },
        {
            id: 'h-param',
            type: 'heading',
            data: { text: 'Parametric Differentiation', level: 2 },
            terms: []
        },
        {
            id: 'callout-key-param',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Parametric Differentiation Formula',
                text: 'For a curve defined parametrically as x = f(t), y = g(t):\n\n  dy/dx = (dy/dt) ÷ (dx/dt)  =  g\'(t) / f\'(t)\n\nThis follows directly from the chain rule:\n  dy/dx = dy/dt · dt/dx = (dy/dt) / (dx/dt)'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Parametric Curve', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Given x = t² + 1, y = 2t³ − t, find dy/dx and the gradient at t = 2.',
                text: 'dx/dt = 2t\ndy/dt = 6t² − 1\n\ndy/dx = (6t² − 1)/(2t)\n\nAt t = 2:\n  dy/dx = (6·4 − 1)/(2·2) = 23/4'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Tangent/Normal for Parametric Curves',
                text: 'For a tangent at parameter t = t₀:\n1. Find dy/dx using (dy/dt)/(dx/dt), evaluated at t = t₀\n2. Find the point (x₀, y₀) by substituting t₀ into x and y expressions\n3. Line: y − y₀ = m(x − x₀)\n\nFor the normal: gradient = −1/m (perpendicular)'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Implicit: differentiate every term w.r.t. x, treating y as a function of x: d/dx[f(y)] = f\'(y)·dy/dx. Collect dy/dx terms, factorise, rearrange. Parametric: dy/dx = (dy/dt)/(dx/dt).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key-impl', prompt: 'What rule allows you to differentiate y² with respect to x? What is the result?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find dy/dx for x² + y² = 25.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find dy/dx implicitly for x³ + 2xy + y³ = 5.' },
            { id: 'c4', blockId: 'callout-key-param', prompt: 'State the formula for dy/dx when a curve is given parametrically.' }
        ],
        summaryText: 'Implicit: d/dx[f(y)] = f\'(y)·dy/dx (chain rule). Differentiate, collect dy/dx, rearrange. Parametric: dy/dx = (dy/dt)/(dx/dt). Evaluate at specific t for gradient at a point.',
        ready: true
    },
    evidence: []
};
