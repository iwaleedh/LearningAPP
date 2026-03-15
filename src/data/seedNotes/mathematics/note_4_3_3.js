/**
 * WMA14 · Topic 3 · Subtopic 3 — Further parametric problems: tangents, normals, lengths
 */
export const note_mathematics_4_3_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find tangents and normals to parametric curves, and use parametric equations to solve further coordinate geometry problems.' },
            terms: []
        },
        {
            id: 'h-tangent', type: 'heading',
            data: { text: 'Tangents and Normals', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Method',
                text: '1. Find dy/dx = (dy/dt)/(dx/dt)\n2. Evaluate at given t to get the gradient m of tangent\n3. Tangent at (x\u2080, y\u2080): y \u2212 y\u2080 = m(x \u2212 x\u2080)\n4. Normal gradient = \u22121/m; normal equation: y \u2212 y\u2080 = (\u22121/m)(x \u2212 x\u2080)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'The curve C: x = t\u00b2, y = 2t. Find the tangent at t = 3.',
                text: 'At t=3: x=9, y=6\ndx/dt=2t=6, dy/dt=2\ndy/dx = 2/6 = 1/3\n\nTangent: y \u2212 6 = (1/3)(x \u2212 9)  \u27a2  3y = x + 9\n\nNormal: gradient = \u22123\nNormal: y \u2212 6 = \u22123(x \u2212 9)  \u27a2  y = \u22123x + 33'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'For the rectangular hyperbola x = 2t, y = 2/t, show the tangent at t=p has equation x + p\u00b2y = 4p.',
                text: 'At t=p: x\u2080=2p, y\u2080=2/p\ndx/dt=2, dy/dt=\u22122/t\u00b2\ndy/dx = (\u22122/p\u00b2) / 2 = \u22121/p\u00b2\n\nTangent: y \u2212 2/p = (\u22121/p\u00b2)(x\u22122p)\nMultiply by p\u00b2: p\u00b2y \u2212 2p = \u2212(x\u22122p) = \u2212x + 2p\np\u00b2y + x = 4p  \u27a2  x + p\u00b2y = 4p  \u2713'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'General Tangent Proofs',
                text: 'Many WMA14 exam questions ask you to show that the tangent or normal has a particular general form. Work with the general parameter value (e.g. t=p or t=a) rather than a specific number. Leave the answer in terms of p.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Tangent/normal: find dy/dx=(dy/dt)/(dx/dt), evaluate at t, use point-slope form. For general results, work with parameter t=p and simplify to show the required form.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the 4 steps to find a tangent/normal to a parametric curve.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the tangent to x=t\u00b2, y=2t at t=3.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Show the tangent at (2p, 2/p) on xy=4 is x+p\u00b2y=4p.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why do exam questions often ask for a general tangent in terms of p?' }
        ],
        summaryText: 'Tangent to parametric curve: dy/dx=(dy/dt)/(dx/dt). Normal gradient = \u22121/(dy/dx). Work with general parameter p for general tangent equations.',
        ready: true
    },
    evidence: []
};
