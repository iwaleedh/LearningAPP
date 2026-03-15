import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

# ── Topic 6: Integration ──────────────────────────────────────────────────────

notes['note_4_6_0.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 0 \u2014 Integration by parts
 */
export const note_mathematics_4_6_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Integrate products of functions using integration by parts: \\u222b u dv = uv \\u2212 \\u222b v du.' },
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
                text: '\\u222b u (dv/dx) dx = uv \\u2212 \\u222b v (du/dx) dx\\n\\nAlternative: \\u222b u dv = uv \\u2212 \\u222b v du\\n\\nChoosing u: prefer the function that simplifies when differentiated.\\nMnemonic LIATE: Logarithm, Inverse trig, Algebraic, Trig, Exponential\\n(pick u from earlier in the list)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b x e^x dx',
                text: 'Let u = x,  dv/dx = e^x\\ndu/dx = 1,  v = e^x\\n\\n\\u222b x e^x dx = xe^x \\u2212 \\u222b e^x dx = xe^x \\u2212 e^x + C = e^x(x \\u2212 1) + C'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b x\\u00b2 ln x dx',
                text: 'Let u = ln x,  dv/dx = x\\u00b2  (LIATE: ln before algebraic)\\ndu/dx = 1/x,  v = x\\u00b3/3\\n\\n\\u222b x\\u00b2 ln x dx = (x\\u00b3/3) ln x \\u2212 \\u222b (x\\u00b3/3)(1/x) dx\\n= (x\\u00b3/3) ln x \\u2212 (1/3) \\u222b x\\u00b2 dx\\n= (x\\u00b3/3) ln x \\u2212 x\\u00b3/9 + C'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b x sin x dx',
                text: 'Let u = x,  dv/dx = sin x\\ndu/dx = 1,  v = \\u2212cos x\\n\\n\\u222b x sin x dx = \\u2212x cos x \\u2212 \\u222b (\\u2212cos x) dx = \\u2212x cos x + sin x + C'
            }, terms: []
        },
        {
            id: 'callout-warn', type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '\\u2022 Do not forget the constant of integration.\\n\\u2022 Always check: differentiating will simplify u, and integrating dv/dx is straightforward.\\n\\u2022 For \\u222b ln x dx, set u = ln x and dv/dx = 1 (i.e. v = x).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '\\u222b u dv = uv \\u2212 \\u222b v du. Choose u using LIATE. Differentiate u and integrate dv/dx to get v. The resulting integral must be simpler.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the integration by parts formula and the LIATE rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Evaluate \\u222b x e^x dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Evaluate \\u222b x\\u00b2 ln x dx. Why is u = ln x chosen?' },
            { id: 'c4', blockId: 'callout-warn', prompt: 'How do you integrate \\u222b ln x dx using integration by parts?' }
        ],
        summaryText: '\\u222b u dv = uv \\u2212 \\u222b v du. LIATE for choosing u. Key integrals: \\u222b xe^x = e^x(x\\u22121), \\u222b x sin x = \\u2212x cos x + sin x.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_1.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 1 \u2014 Integration by parts: repeated application and cyclic integrals
 */
export const note_mathematics_4_6_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply integration by parts more than once, and solve cyclic integrals where the original integral reappears.' },
            terms: []
        },
        {
            id: 'h-repeat', type: 'heading',
            data: { text: 'Repeated Integration by Parts', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b x\\u00b2 e^x dx',
                text: 'First pass: u = x\\u00b2, dv = e^x dx  \\u27a2  du = 2x, v = e^x\\n\\u222b x\\u00b2 e^x dx = x\\u00b2 e^x \\u2212 \\u222b 2x e^x dx\\n\\nSecond pass for \\u222b 2x e^x dx:\\nu = 2x, dv = e^x dx  \\u27a2  du = 2, v = e^x\\n\\u222b 2x e^x dx = 2x e^x \\u2212 \\u222b 2e^x dx = 2x e^x \\u2212 2e^x\\n\\nFinal: \\u222b x\\u00b2 e^x dx = x\\u00b2 e^x \\u2212 2x e^x + 2e^x + C = e^x(x\\u00b2 \\u2212 2x + 2) + C'
            }, terms: []
        },
        {
            id: 'h-cyclic', type: 'heading',
            data: { text: 'Cyclic Integrals', level: 2 }, terms: []
        },
        {
            id: 'p-cyclic', type: 'paragraph',
            data: { text: 'Sometimes applying integration by parts twice returns the original integral. Denote the integral I, collect on one side and solve.' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b e^x sin x dx  (cyclic integral)',
                text: 'Let I = \\u222b e^x sin x dx\\n\\nFirst pass: u = sin x, dv = e^x dx  \\u27a2  du = cos x, v = e^x\\nI = e^x sin x \\u2212 \\u222b e^x cos x dx\\n\\nSecond pass on \\u222b e^x cos x dx:\\nu = cos x, dv = e^x dx  \\u27a2  du = \\u2212sin x, v = e^x\\n\\u222b e^x cos x dx = e^x cos x + \\u222b e^x sin x dx = e^x cos x + I\\n\\nSo: I = e^x sin x \\u2212 (e^x cos x + I)\\nI = e^x sin x \\u2212 e^x cos x \\u2212 I\\n2I = e^x(sin x \\u2212 cos x)\\nI = (e^x/2)(sin x \\u2212 cos x) + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Decide early: repeated or cyclic?',
                text: '\\u2022 Repeated: use for x\\u207f e^x or x\\u207f sin/cos x (apply n times)\\n\\u2022 Cyclic: use for e^x sin x or e^x cos x (apply twice, solve for I)\\nIn both cases, keep the same choice of u type on each application.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Repeated by parts: reduce power of x until simple. Cyclic (e^x sin/cos x): label I, apply twice, and solve 2I = \\u2026 to get I = \\u2026 + C.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-we1', prompt: 'Evaluate \\u222b x\\u00b2 e^x dx using integration by parts twice.' },
            { id: 'c2', blockId: 'p-cyclic', prompt: 'Why does integrating e^x sin x by parts cause a cyclic situation?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Evaluate \\u222b e^x sin x dx using the cyclic method.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'When applying integration by parts twice, what must stay consistent between passes?' }
        ],
        summaryText: 'Repeated: reduces x\\u207f. Cyclic (e^x sin/cos): label I, apply twice, collect \\u2192 2I = \\u2026 \\u2192 I = \\u2026/2 + C.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_2.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 2 \u2014 Integration using partial fractions
 */
export const note_mathematics_4_6_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use partial fractions to break down rational integrands, then integrate each term using standard results.' },
            terms: []
        },
        {
            id: 'h-standard', type: 'heading',
            data: { text: 'Key Standard Results', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Standard Integrals',
                text: '\\u222b 1/(ax+b) dx = (1/a) ln|ax+b| + C\\n\\u222b 1/(ax+b)\\u00b2 dx = \\u2212(1/a(ax+b)) + C\\n\\u222b 1/(x\\u00b2+a\\u00b2) dx = (1/a) arctan(x/a) + C'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b (4x + 5)/[(x+1)(x+2)] dx',
                text: 'Partial fractions: 4x+5 = A(x+2)+B(x+1)\\nAt x=\\u22121: 1 = A \\u27a2 A=1; at x=\\u22122: \\u22123=\\u2212B \\u27a2 B=3\\n\\n\\u222b [1/(x+1) + 3/(x+2)] dx = ln|x+1| + 3 ln|x+2| + C'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b 3/[(x+1)(x+1)\\u00b2] correction: \\u222b 1/[(x\\u22121)(x+1)\\u00b2] dx',
                text: 'Partial fractions: 1/[(x\\u22121)(x+1)\\u00b2] = A/(x\\u22121) + B/(x+1) + C/(x+1)\\u00b2\\n\\nAt x=1: 1 = A(2)\\u00b2 \\u27a2 A=1/4\\nAt x=\\u22121: 1 = C(\\u22122) \\u27a2 C=\\u22121/2\\nCompare x\\u00b2: 0 = A+B \\u27a2 B=\\u22121/4\\n\\n\\u222b = (1/4)ln|x\\u22121| \\u2212 (1/4)ln|x+1| + (1/2)/(x+1) + C\\n= (1/4)ln|(x\\u22121)/(x+1)| + 1/(2(x+1)) + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Modulus and Log Rules',
                text: 'Always write ln|\\u2026| with the modulus signs. You may combine logarithms at the end using ln a + ln b = ln(ab) and n ln a = ln(a\\u207f).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Partial fractions + integration: split into A/(ax+b), B/(ax+b)\\u00b2, (Cx+D)/(x\\u00b2+a\\u00b2) etc. Integrate each using standard results: 1/(ax+b) \\u2192 (1/a)ln|ax+b|.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State \\u222b 1/(ax+b) dx and \\u222b 1/(ax+b)\\u00b2 dx.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Evaluate \\u222b (4x+5)/[(x+1)(x+2)] dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'What integral arises from 1/(x+1)\\u00b2 as a partial fraction term?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why is the modulus sign needed in ln|ax+b|?' }
        ],
        summaryText: 'Split into partial fractions, integrate each: A/(ax+b)\\u2192(A/a)ln|ax+b|, A/(ax+b)\\u00b2\\u2192\\u2212A/(a(ax+b)).',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_3.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 3 \u2014 Integration using trigonometric identities
 */
export const note_mathematics_4_6_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use double-angle and other trig identities to reduce integrals involving powers of sin and cos to integrable forms.' },
            terms: []
        },
        {
            id: 'h-identities', type: 'heading',
            data: { text: 'Key Identities for Integration', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Double Angle Identities',
                text: 'cos 2\\u03b8 = 1 \\u2212 2sin\\u00b2\\u03b8  \\u27a2  sin\\u00b2\\u03b8 = (1 \\u2212 cos 2\\u03b8)/2\\ncos 2\\u03b8 = 2cos\\u00b2\\u03b8 \\u2212 1  \\u27a2  cos\\u00b2\\u03b8 = (1 + cos 2\\u03b8)/2\\nsin 2\\u03b8 = 2 sin\\u03b8 cos\\u03b8'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b sin\\u00b2 x dx',
                text: 'sin\\u00b2 x = (1 \\u2212 cos 2x)/2\\n\\n\\u222b sin\\u00b2 x dx = \\u222b (1\\u2212cos 2x)/2 dx = x/2 \\u2212 sin 2x/4 + C'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b cos\\u00b2 x dx',
                text: 'cos\\u00b2 x = (1 + cos 2x)/2\\n\\n\\u222b cos\\u00b2 x dx = x/2 + sin 2x/4 + C'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b sin x cos x dx (two methods)',
                text: 'Method 1: sin x cos x = (1/2) sin 2x\\n\\u222b sin x cos x dx = \\u2212(1/4) cos 2x + C\\n\\nMethod 2: substitution u = sin x\\n\\u222b sin x cos x dx = \\u222b u du = u\\u00b2/2 = sin\\u00b2 x/2 + C\\n\\n(Both are equivalent: \\u2212cos2x/4 = \\u2212(1\\u22122sin\\u00b2x)/4 = sin\\u00b2x/2 \\u2212 1/4)'
            }, terms: []
        },
        {
            id: 'callout-we4', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b sin\\u00b3 x dx',
                text: 'sin\\u00b3 x = sin x \\u00b7 sin\\u00b2 x = sin x (1 \\u2212 cos\\u00b2 x)\\n= sin x \\u2212 sin x cos\\u00b2 x\\n\\n\\u222b sin\\u00b3 x dx = \\u2212cos x + cos\\u00b3 x/3 + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Strategy Summary',
                text: '\\u2022 sin\\u00b2 or cos\\u00b2: use double angle identity.\\n\\u2022 Odd powers (sin\\u00b3, cos\\u00b3): split off one factor, use 1\\u2212cos\\u00b2=sin\\u00b2 (or 1\\u2212sin\\u00b2=cos\\u00b2), then substitute.\\n\\u2022 sin cos product: use sin 2x = 2 sin cos or substitution.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trig integrals: use double angle for even powers (sin\\u00b2, cos\\u00b2). Split odd powers using sin\\u00b2+cos\\u00b2=1. Product sin cos: use sin2x or substitution.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State sin\\u00b2\\u03b8 and cos\\u00b2\\u03b8 in terms of cos 2\\u03b8.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Evaluate \\u222b sin\\u00b2 x dx.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Evaluate \\u222b sin x cos x dx.' },
            { id: 'c4', blockId: 'callout-we4', prompt: 'Evaluate \\u222b sin\\u00b3 x dx. What substitution helps?' }
        ],
        summaryText: 'Even powers: double angle. Odd powers: split off one, use sin\\u00b2+cos\\u00b2=1. Products: sin2x or substitution.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_4.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 4 \u2014 Integration by substitution (further cases)
 */
export const note_mathematics_4_6_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use substitution (including reverse chain rule and trig substitutions) to evaluate more complex integrals, including definite integrals with changed limits.' },
            terms: []
        },
        {
            id: 'h-review', type: 'heading',
            data: { text: 'Reverse Chain Rule Recall', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Reverse Chain Rule',
                text: '\\u222b f\\u2032(g(x)) \\u2022 g\\u2032(x) dx = f(g(x)) + C\\n\\nExample: \\u222b 2x e^(x\\u00b2) dx = e^(x\\u00b2) + C (u=x\\u00b2)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b x\\u221a(x\\u00b2+1) dx using substitution u = x\\u00b2+1.',
                text: 'u = x\\u00b2+1  \\u27a2  du = 2x dx  \\u27a2  x dx = du/2\\n\\n\\u222b x\\u221a(x\\u00b2+1) dx = \\u222b \\u221au \\u00b7 du/2 = (1/2) \\u222b u^(1/2) du\\n= (1/2) \\u00b7 (2/3) u^(3/2) + C = (1/3)(x\\u00b2+1)^(3/2) + C'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b\\u2080\\u00b9 x/(x\\u00b2+1)\\u00b2 dx (definite, change limits).',
                text: 'u = x\\u00b2+1  \\u27a2  du = 2x dx\\nLimits: x=0 \\u27a2 u=1; x=1 \\u27a2 u=2\\n\\n\\u222b\\u2080\\u00b9 x/(x\\u00b2+1)\\u00b2 dx = (1/2) \\u222b\\u2081\\u00b2 u\\u207b\\u00b2 du = (1/2)[\\u2212u\\u207b\\u00b9]\\u2081\\u00b2 = (1/2)(\\u22121/2+1) = 1/4'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: '\\u222b sin\\u00b3 x cos x dx using u = sin x.',
                text: 'u = sin x  \\u27a2  du = cos x dx\\n\\n\\u222b sin\\u00b3 x cos x dx = \\u222b u\\u00b3 du = u\\u2074/4 + C = sin\\u2074 x/4 + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Choosing a Substitution',
                text: '\\u2022 If f\\u2032(g(x)) appears, try u = g(x).\\n\\u2022 For \\u221a(a\\u00b2\\u2212x\\u00b2), try x = a sin\\u03b8.\\n\\u2022 For 1/(a\\u00b2+x\\u00b2), try x = a tan\\u03b8.\\n\\u2022 For definite integrals, always change the limits to avoid back-substitution.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Substitution: u = g(x), convert du, change limits for definite integrals. Key patterns: chain rule reversal, \\u222b u\\u207f du, trig forms.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the reverse chain rule integral formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Evaluate \\u222b x\\u221a(x\\u00b2+1) dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Evaluate \\u222b\\u2080\\u00b9 x/(x\\u00b2+1)\\u00b2 dx, changing limits.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you handle limits when using substitution in a definite integral?' }
        ],
        summaryText: 'Substitution u=g(x): rewrite in u, du; change limits for definite. Chain rule reversal for simple cases.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_5.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 5 \u2014 Parametric integration: areas
 */
export const note_mathematics_4_6_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find areas between parametric curves and axes, using \\u222b y (dx/dt) dt with appropriate t-limits.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Parametric Area Method', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Formula',
                text: 'Area = \\u222b y dx = \\u222b y (dx/dt) dt\\n\\nConvert x-limits to t-limits using x = f(t).\\nThe result may be negative if dx/dt < 0; take |result|.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the area between the curve x = t\\u00b3, y = t\\u00b2, the axes, and t = 0 to t = 2.',
                text: 'dx/dt = 3t\\u00b2\\n\\nArea = \\u222b\\u2080\\u00b2 t\\u00b2 \\u00b7 3t\\u00b2 dt = 3 \\u222b\\u2080\\u00b2 t\\u2074 dt = 3[t\\u2075/5]\\u2080\\u00b2 = 3 \\u00b7 32/5 = 96/5'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'The curve C: x = 1 \\u2212 t\\u00b2, y = t\\u00b3. Find area in first quadrant (0 \\u2264 t \\u2264 1).',
                text: 'At t=0: (1, 0); at t=1: (0, 1) \\u2014 goes from (1,0) to (0,1).\\ndx/dt = \\u22122t\\n\\nArea = \\u222b\\u2080\\u00b9 t\\u00b3 \\u00b7 (\\u22122t) dt = \\u2212 \\u222b\\u2080\\u00b9 2t\\u2074 dt = \\u2212[2t\\u2075/5]\\u2080\\u00b9 = \\u22122/5\\n\\nArea = 2/5 (take positive)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Checking the Direction',
                text: 'Sketch the curve first. If x decreases as t increases, dx/dt is negative, giving a negative integral. The area is always positive. For a closed curve, you can integrate around the whole boundary.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Parametric area: \\u222b y(dx/dt)dt with t-limits. Direction matters (dx/dt may be negative). Always take |result| for area.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the parametric area formula using the parameter t.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find area under x=t\\u00b3, y=t\\u00b2 from t=0 to t=2.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Why does \\u222b y(dx/dt)dt give a negative value for some parametric curves?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What should you always do before computing a parametric area integral?' }
        ],
        summaryText: 'Area = \\u222b y dx/dt dt. Change limits to t-values. Negative result means curve traversed right-to-left; take absolute value.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_6.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 6 \u2014 Volume of revolution about the x-axis
 */
export const note_mathematics_4_6_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find the volume generated when a curve y = f(x) is rotated 360\\u00b0 about the x-axis using V = \\u03c0 \\u222b y\\u00b2 dx.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Volume of Revolution Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Rotation About the x-axis',
                text: 'V = \\u03c0 \\u222b\\u2090^b y\\u00b2 dx\\n\\nDerived by summing thin circular discs of area \\u03c0y\\u00b2 and width \\u03b4x.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'y = x\\u00b2, rotated about the x-axis, x = 0 to x = 2.',
                text: 'V = \\u03c0 \\u222b\\u2080\\u00b2 (x\\u00b2)\\u00b2 dx = \\u03c0 \\u222b\\u2080\\u00b2 x\\u2074 dx = \\u03c0 [x\\u2075/5]\\u2080\\u00b2 = \\u03c0 \\u00b7 32/5 = 32\\u03c0/5'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'y = \\u221a(4\\u2212x), rotated about x-axis, x = 0 to x = 4.',
                text: 'y\\u00b2 = 4 \\u2212 x\\nV = \\u03c0 \\u222b\\u2080\\u2074 (4\\u2212x) dx = \\u03c0 [4x \\u2212 x\\u00b2/2]\\u2080\\u2074 = \\u03c0 (16 \\u2212 8) = 8\\u03c0'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Rotation using trig: y = sin x, 0 to \\u03c0.',
                text: 'V = \\u03c0 \\u222b\\u2080^\\u03c0 sin\\u00b2 x dx = \\u03c0 \\u222b\\u2080^\\u03c0 (1\\u2212cos2x)/2 dx\\n= (\\u03c0/2)[x \\u2212 sin2x/2]\\u2080^\\u03c0 = (\\u03c0/2)(\\u03c0) = \\u03c0\\u00b2/2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Common Pitfalls',
                text: '\\u2022 Do not forget the \\u03c0 factor (it stays outside the integral).\\n\\u2022 The integrand is y\\u00b2, not y. Square first, then integrate.\\n\\u2022 If y involves a root like \\u221a(f(x)), then y\\u00b2 = f(x) simplifies nicely.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Volume of revolution (x-axis): V = \\u03c0\\u222b y\\u00b2 dx. Square y first, then integrate. The \\u03c0 stays outside.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for volume of revolution about the x-axis.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find V when y=x\\u00b2 is rotated about the x-axis from 0 to 2.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find V when y=\\u221a(4\\u2212x) is rotated about x-axis from x=0 to x=4.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'State two common mistakes to avoid with volume of revolution.' }
        ],
        summaryText: 'V = \\u03c0\\u222b\\u2090^b y\\u00b2 dx. Square y, integrate, multiply by \\u03c0. Leave \\u03c0 outside the integral.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_7.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 7 \u2014 Volume of revolution: y-axis and parametric
 */
export const note_mathematics_4_6_7 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find volumes of revolution about the y-axis using V = \\u03c0 \\u222b x\\u00b2 dy, and apply the parametric form V = \\u03c0 \\u222b y\\u00b2 (dx/dt) dt.' },
            terms: []
        },
        {
            id: 'h-yaxis', type: 'heading',
            data: { text: 'Rotation About the y-axis', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Volume Formulas',
                text: 'About x-axis: V = \\u03c0 \\u222b y\\u00b2 dx\\nAbout y-axis: V = \\u03c0 \\u222b x\\u00b2 dy\\n\\nParametric (about x-axis): V = \\u03c0 \\u222b y\\u00b2 (dx/dt) dt'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'y = x\\u00b2 rotated about the y-axis, y = 0 to y = 4.',
                text: 'x\\u00b2 = y (from y=x\\u00b2)\\nV = \\u03c0 \\u222b\\u2080\\u2074 x\\u00b2 dy = \\u03c0 \\u222b\\u2080\\u2074 y dy = \\u03c0 [y\\u00b2/2]\\u2080\\u2074 = \\u03c0 \\u00b7 8 = 8\\u03c0'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Parametric: x = t\\u00b2, y = t\\u00b3. Volume about x-axis, t = 0 to t = 1.',
                text: 'y\\u00b2 = t\\u2076, dx/dt = 2t\\n\\nV = \\u03c0 \\u222b\\u2080\\u00b9 t\\u2076 \\u00b7 2t dt = 2\\u03c0 \\u222b\\u2080\\u00b9 t\\u2077 dt = 2\\u03c0 [t\\u2078/8]\\u2080\\u00b9 = 2\\u03c0/8 = \\u03c0/4'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Switching Between Axes',
                text: 'For rotation about the y-axis, rearrange the equation to express x\\u00b2 in terms of y, then integrate with respect to y. Remember to change the limits to y-values.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'y-axis rotation: V = \\u03c0\\u222b x\\u00b2 dy (express x\\u00b2 in y, integrate in y). Parametric rotation (x-axis): V = \\u03c0\\u222b y\\u00b2(dx/dt)dt.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the volume formula for rotation about the y-axis and the parametric form.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find volume when y=x\\u00b2 is rotated about the y-axis, y=0 to 4.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find volume for parametric x=t\\u00b2, y=t\\u00b3 about x-axis, t=0 to 1.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What must you do differently when integrating for rotation about the y-axis?' }
        ],
        summaryText: 'y-axis: V=\\u03c0\\u222b x\\u00b2 dy (integrate w.r.t. y). Parametric: V=\\u03c0\\u222b y\\u00b2(dx/dt)dt with t-limits.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_8.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 8 \u2014 Trapezium rule
 */
export const note_mathematics_4_6_8 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the trapezium rule to estimate definite integrals numerically, and comment on accuracy and over/under-estimation.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Trapezium Rule Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Trapezium Rule',
                text: '\\u222b\\u2090^b f(x) dx \\u2248 (h/2)[y\\u2080 + 2(y\\u2081+y\\u2082+\\u2026+y\\u2099\\u208b\\u2081) + y\\u2099]\\n\\nwhere h = (b\\u2212a)/n  and  y\\u1d35 = f(a + ih)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Estimate \\u222b\\u2081\\u00b3 ln x dx using 4 strips.',
                text: 'h = (3\\u22121)/4 = 0.5\\nPoints: x = 1, 1.5, 2, 2.5, 3\\ny values: ln1=0, ln1.5=0.4055, ln2=0.6931, ln2.5=0.9163, ln3=1.0986\\n\\nT = (0.5/2)[0 + 2(0.4055+0.6931+0.9163) + 1.0986]\\n= (0.25)[0 + 2(2.0149) + 1.0986]\\n= (0.25)[0 + 4.0298 + 1.0986]\\n= (0.25)(5.1284) = 1.282'
            }, terms: []
        },
        {
            id: 'h-accuracy', type: 'heading',
            data: { text: 'Accuracy and Error', level: 2 }, terms: []
        },
        {
            id: 'list-accuracy', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'More strips \\u2192 better approximation.' },
                    { text: 'If the curve is concave up (d\\u00b2y/dx\\u00b2 > 0): trapezium overestimates the integral.' },
                    { text: 'If the curve is concave down (d\\u00b2y/dx\\u00b2 < 0): trapezium underestimates.' },
                    { text: 'If the curve is linear: exact result.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Technique',
                text: '\\u2022 Always show the y-values table.\\n\\u2022 Be precise about \\u201cend strips\\u201d (y\\u2080 and y\\u2099) vs \\u201cmiddle strips\\u201d (multiplied by 2).\\n\\u2022 State whether the estimate is an over- or under-estimate and justify by referring to the concavity (shape) of the curve.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trapezium rule: (h/2)[y\\u2080 + 2(middle y\\u2019s) + y\\u2099], h=(b\\u2212a)/n. Overestimates for concave-up curves, underestimates for concave-down.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the trapezium rule formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Apply the trapezium rule to estimate \\u222b\\u2081\\u00b3 ln x dx with 4 strips.' },
            { id: 'c3', blockId: 'list-accuracy', prompt: 'When does the trapezium rule overestimate the integral?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Which y-values in the trapezium rule are multiplied by 2?' }
        ],
        summaryText: 'Trapezium rule: (h/2)[y\\u2080 + 2(y\\u2081+\\u2026+y\\u2099\\u208b\\u2081) + y\\u2099]. Overestimates if concave up; underestimates if concave down.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_9.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 9 \u2014 Differential equations: separable variables
 */
export const note_mathematics_4_6_9 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Form and solve first-order differential equations by separating the variables, finding general and particular solutions.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Separating Variables', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Method',
                text: 'For dy/dx = f(x) g(y):\\n\\nSeparate: (1/g(y)) dy = f(x) dx\\nIntegrate both sides: \\u222b (1/g(y)) dy = \\u222b f(x) dx\\nAdd a single constant of integration (+C).\\n\\nGeneral solution: explicit (y=\\u2026) or implicit (F(y)=G(x)+C).\\nParticular solution: use an initial condition to find C.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve dy/dx = 3x\\u00b2y, given y=2 when x=1.',
                text: 'Separate: (1/y) dy = 3x\\u00b2 dx\\n\\u222b (1/y) dy = \\u222b 3x\\u00b2 dx\\nln|y| = x\\u00b3 + C\\n\\nGeneral solution: y = Ae^(x\\u00b3) (where A = e^C)\\n\\nParticular: y=2 when x=1: 2=Ae\\u00b9 \\u27a2 A=2/e\\ny = 2e^(x\\u00b3\\u22121)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve dy/dx = (x+1)/(y(y+1)).',
                text: 'y(y+1) dy = (x+1) dx\\n\\u222b (y\\u00b2+y) dy = \\u222b (x+1) dx\\ny\\u00b3/3 + y\\u00b2/2 = x\\u00b2/2 + x + C\\n\\nGeneral solution (implicit):\\ny\\u00b3/3 + y\\u00b2/2 = x\\u00b2/2 + x + C'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Points',
                text: '\\u2022 You need only one arbitrary constant C (not C\\u2081 and C\\u2082).\\n\\u2022 After integrating both sides, write +C on just one side.\\n\\u2022 ln|y| arises when integrating 1/y; write as |y| or consider the sign context.\\n\\u2022 For partial solutions, work with y > 0 if the context requires it.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Separable DE: rearrange to (1/g(y))dy = f(x)dx, integrate both sides, add one constant C. Use IC to find particular solution.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the method for solving separable differential equations.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve dy/dx = 3x\\u00b2y, y=2 when x=1.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Solve dy/dx = (x+1)/(y(y+1)) giving an implicit solution.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How many constants of integration are needed when solving a first-order DE?' }
        ],
        summaryText: 'Separate: 1/g(y) dy = f(x) dx \\u2192 integrate \\u2192 +C \\u2192 apply IC for particular solution.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_6_10.js'] = """\
/**
 * WMA14 \u00b7 Topic 6 \u00b7 Subtopic 10 \u2014 Differential equations in context
 */
export const note_mathematics_4_6_10 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Formulate, solve, and interpret differential equations in real-world contexts such as growth, decay, and rate-of-change models.' },
            terms: []
        },
        {
            id: 'h-models', type: 'heading',
            data: { text: 'Common DE Models', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Modelling Statements',
                text: '"Rate of change of P is proportional to P" \\u2192 dP/dt = kP\\n"Rate of change decreases as N increases" \\u2192 dN/dt = k(A \\u2212 N)\\n"Rate is proportional to x\\u00b2" \\u2192 dy/dx = kx\\u00b2\\n\\nSolve the DE, apply initial condition, interpret the particular solution.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A population P grows at rate proportional to P. Initially P=100; after 5 years P=200. Find P at t=10.',
                text: 'dP/dt = kP\\n\\u222b dP/P = \\u222b k dt  \\u27a2  ln P = kt + C  \\u27a2  P = Ae^(kt)\\n\\nAt t=0: 100=A; at t=5: 200 = 100e^(5k) \\u27a2 e^(5k)=2 \\u27a2 k = (ln2)/5\\n\\nP = 100 \\u00b7 2^(t/5)\\nAt t=10: P = 100 \\u00b7 2\\u00b2 = 400'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Newton\\u2019s law of cooling: dT/dt = \\u2212k(T\\u221220). At t=0, T=80; at t=5, T=60. Find T when t=10.',
                text: 'dT/(T\\u221220) = \\u2212k dt\\nln|T\\u221220| = \\u2212kt + C\\nT\\u221220 = Ae^(\\u2212kt)\\n\\nAt t=0: 80\\u221220 = A \\u27a2 A=60\\nAt t=5: 60\\u221220 = 60e^(\\u22125k) \\u27a2 e^(\\u22125k) = 2/3 \\u27a2 k = (1/5)ln(3/2)\\n\\nT = 20 + 60(2/3)^(t/5)\\nAt t=10: T = 20 + 60(2/3)\\u00b2 = 20 + 60(4/9) = 20 + 80/3 \\u2248 46.7\\u00b0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Interpreting Solutions',
                text: '\\u2022 State the long-term behaviour: as t \\u2192 \\u221e, what does the solution approach?\\n\\u2022 Comment on the model\\u2019s limitations (e.g. exponential growth cannot continue indefinitely in practice).\\n\\u2022 Always define your variables and constants at the start.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'DE in context: translate verbal description into dy/dx = f(x,y), solve, apply initial condition. Interpret the solution (long-term behaviour, limitations).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'Write the DE for "rate of change of P is proportional to P".' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve the exponential growth model for population doubling in 5 years.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Set up and solve Newton\\u2019s law of cooling: dT/dt = \\u2212k(T\\u221220).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What should you always comment on when interpreting a DE model?' }
        ],
        summaryText: 'DE context: write dP/dt=kP (or similar), separate, integrate, apply IC. Interpret long-term behaviour.',
        ready: true
    },
    evidence: []
};
"""

for filename, content in notes.items():
    path = os.path.join(base, filename)
    with open(path, 'w') as f:
        f.write(content)
    print(f'Written: {filename}')

print('Topic 6 complete.')
