/**
 * WMA14 · Topic 3 · Subtopic 0 — Parametric equations: introduction
 */
export const note_mathematics_4_3_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Understand parametric equations as an alternative way to describe curves, and convert between parametric and Cartesian forms.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'What are Parametric Equations?', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: 'A curve can be described by expressing both x and y as functions of a third variable t (the <strong>parameter</strong>): x = f(t), y = g(t). Each value of t gives a point (x, y) on the curve. As t varies, the point traces out the curve.' },
            terms: []
        },
        {
            id: 'h-convert', type: 'heading',
            data: { text: 'Converting to Cartesian Form', level: 2 }, terms: []
        },
        {
            id: 'p-convert', type: 'paragraph',
            data: { text: 'Eliminate the parameter t by solving one equation for t and substituting into the other. Alternatively, use a known identity (e.g. a trig identity) if x and y are trig functions of t.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = 3t\u00b2, y = 6t. Find the Cartesian equation.',
                text: 'From y = 6t: t = y/6\nSubstitute: x = 3(y/6)\u00b2 = 3y\u00b2/36 = y\u00b2/12\nCartesian: x = y\u00b2/12, or y\u00b2 = 12x (a parabola)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = 3cos t, y = 2sin t. Find the Cartesian equation.',
                text: 'cos t = x/3,  sin t = y/2\nUse sin\u00b2t + cos\u00b2t = 1:\n(x/3)\u00b2 + (y/2)\u00b2 = 1  \u27a2  x\u00b2/9 + y\u00b2/4 = 1\nThis is an ellipse with semi-axes a=3, b=2.'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = t + 1, y = t\u00b2 \u2212 3. Find the Cartesian equation and state any restriction.',
                text: 't = x \u2212 1\ny = (x\u22121)\u00b2 \u2212 3 = x\u00b2 \u2212 2x + 1 \u2212 3 = x\u00b2 \u2212 2x \u2212 2\n\nIf t \u2265 0, then x = t+1 \u2265 1, so the restriction is x \u2265 1.'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Trig Parametric Shortcut',
                text: 'For x = r cos t, y = r sin t: the curve is a circle x\u00b2+y\u00b2 = r\u00b2.\nFor x = a cos t, y = b sin t: the curve is an ellipse x\u00b2/a\u00b2+y\u00b2/b\u00b2 = 1.\nAlways use sin\u00b2t+cos\u00b2t = 1 or sec\u00b2t = 1+tan\u00b2t as the bridge.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Parametric equations x=f(t), y=g(t): eliminate t to get Cartesian form. Algebraic: solve for t, substitute. Trig: use a trig identity. Note domain restrictions from the parameter range.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When eliminating the parameter using trigonometric identities (like sin^2(t) + cos^2(t) = 1), carefully check the domain of t to ensure you define the domain and range of the Cartesian equation correctly."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-def', prompt: 'What is a parameter in parametric equations?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Convert x=3t\u00b2, y=6t to Cartesian form.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Convert x=3cos t, y=2sin t to Cartesian form. What curve is this?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What identity links sin t and cos t when eliminating t?' }
        ],
        summaryText: 'Parametric to Cartesian: solve for t and substitute (algebra) or use sin\u00b2+cos\u00b2=1 (trig). Note domain restrictions.',
        ready: true
    },
    evidence: []
};
