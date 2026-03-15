/**
 * WMA14 · Topic 6 · Subtopic 0 — Integration by parts
 */
export const note_mathematics_4_6_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Integrate products of functions using integration by parts: \u222b u dv = uv \u2212 \u222b v du.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Integration by Parts Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Formula',
                text: '\u222b u (dv/dx) dx = uv \u2212 \u222b v (du/dx) dx\n\nAlternative: \u222b u dv = uv \u2212 \u222b v du\n\nChoosing u: prefer the function that simplifies when differentiated.\nMnemonic LIATE: Logarithm, Inverse trig, Algebraic, Trig, Exponential\n(pick u from earlier in the list)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b x e^x dx',
                text: 'Let u = x,  dv/dx = e^x\ndu/dx = 1,  v = e^x\n\n\u222b x e^x dx = xe^x \u2212 \u222b e^x dx = xe^x \u2212 e^x + C = e^x(x \u2212 1) + C'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b x\u00b2 ln x dx',
                text: 'Let u = ln x,  dv/dx = x\u00b2  (LIATE: ln before algebraic)\ndu/dx = 1/x,  v = x\u00b3/3\n\n\u222b x\u00b2 ln x dx = (x\u00b3/3) ln x \u2212 \u222b (x\u00b3/3)(1/x) dx\n= (x\u00b3/3) ln x \u2212 (1/3) \u222b x\u00b2 dx\n= (x\u00b3/3) ln x \u2212 x\u00b3/9 + C'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: '\u222b x sin x dx',
                text: 'Let u = x,  dv/dx = sin x\ndu/dx = 1,  v = \u2212cos x\n\n\u222b x sin x dx = \u2212x cos x \u2212 \u222b (\u2212cos x) dx = \u2212x cos x + sin x + C'
            }, terms: []
        },
        {
            id: 'callout-warn', type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '\u2022 Do not forget the constant of integration.\n\u2022 Always check: differentiating will simplify u, and integrating dv/dx is straightforward.\n\u2022 For \u222b ln x dx, set u = ln x and dv/dx = 1 (i.e. v = x).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '\u222b u dv = uv \u2212 \u222b v du. Choose u using LIATE. Differentiate u and integrate dv/dx to get v. The resulting integral must be simpler.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the integration by parts formula and the LIATE rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Evaluate \u222b x e^x dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Evaluate \u222b x\u00b2 ln x dx. Why is u = ln x chosen?' },
            { id: 'c4', blockId: 'callout-warn', prompt: 'How do you integrate \u222b ln x dx using integration by parts?' }
        ],
        summaryText: '\u222b u dv = uv \u2212 \u222b v du. LIATE for choosing u. Key integrals: \u222b xe^x = e^x(x\u22121), \u222b x sin x = \u2212x cos x + sin x.',
        ready: true
    },
    evidence: []
};
