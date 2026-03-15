/**
 * WMA13 · Topic 5 · Subtopic 4 — Integration by substitution
 */
export const note_mathematics_3_5_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use integration by substitution to evaluate both indefinite and definite integrals.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'The Substitution Method', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Steps for Substitution',
                text: '1. Choose a substitution u = g(x)\n2. Find du/dx, write dx = du/(du/dx)\n3. Substitute all x terms: replace x in the integrand and replace dx\n4. Integrate w.r.t. u\n5. Substitute back to get the answer in terms of x\n\nFor definite integrals: also change the limits to u-values'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b 2x(x\u00b2 + 3)\u2074 dx using u = x\u00b2 + 3.',
                text: 'u = x\u00b2 + 3  \u2192  du/dx = 2x  \u2192  dx = du/(2x)\n\n\u222b 2x \u00b7 u\u2074 \u00b7 du/(2x) = \u222b u\u2074 du = u\u2075/5 + c = (x\u00b2+3)\u2075/5 + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \u222b x\u221a(1 + x\u00b2) dx using u = 1 + x\u00b2.',
                text: 'u = 1 + x\u00b2  \u2192  du = 2x dx  \u2192  x dx = du/2\n\n\u222b \u221au \u00b7 du/2 = (1/2) \u222b u^(1/2) du = (1/2) \u00b7 (2/3)u^(3/2) + c = (1/3)(1+x\u00b2)^(3/2) + c'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate \u222b\u2080\u00b9 x e^(x\u00b2) dx.',
                text: 'u = x\u00b2  \u2192  du = 2x dx  \u2192  x dx = du/2\nNew limits: x=0 \u2192 u=0; x=1 \u2192 u=1\n\n(1/2)\u222b\u2080\u00b9 e\u1d58 du = (1/2)[e\u1d58]\u2080\u00b9 = (1/2)(e\u00b9 \u2212 e\u2070) = (e\u22121)/2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Choosing a Substitution',
                text: 'Choose u to be the part whose derivative appears elsewhere in the integrand (up to a constant). For \u222b f(g(x)) g\u2019(x) dx: try u = g(x). If there is a root involved like \u221a(ax+b), try u = ax+b.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Substitution: choose u, find du, replace everything in x with u-expressions, integrate, back-substitute. For definite integrals: change limits to u-values (no need to back-substitute).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'List the 5 steps for integration by substitution.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find \u222b 2x(x\u00b2+3)\u2074 dx using substitution.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'How do limits change when using substitution in definite integrals?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you choose what to set as the substitution u?' }
        ],
        summaryText: 'Substitution: choose u=g(x), write du, replace, integrate w.r.t. u, back-substitute. For definite integrals: change limits.',
        ready: true
    },
    evidence: []
};
