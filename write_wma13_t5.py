import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

notes['note_3_5_0.js'] = """\
/**
 * WMA13 · Topic 5 · Subtopic 0 — Integrating standard functions
 */
export const note_mathematics_3_5_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Integrate standard functions including e\\u02e3, 1/x, sin x, cos x, and sec\\u00b2x.' },
            terms: []
        },
        {
            id: 'h-table', type: 'heading',
            data: { text: 'Standard Integrals', level: 2 }, terms: []
        },
        {
            id: 'table-integrals', type: 'comparisonTable',
            data: {
                headers: ['f(x)', '\\u222bf(x) dx', 'Notes'],
                rows: [
                    ['e\\u02e3', 'e\\u02e3 + c', ''],
                    ['e^(ax)', '(1/a)e^(ax) + c', 'Divide by the coefficient of x'],
                    ['1/x', 'ln|x| + c', 'Modulus signs required for x < 0'],
                    ['sin x', '\\u2212cos x + c', ''],
                    ['cos x', 'sin x + c', ''],
                    ['sec\\u00b2 x', 'tan x + c', 'Reversing d/dx(tan x) = sec\\u00b2x'],
                    ['cosec\\u00b2 x', '\\u2212cot x + c', ''],
                    ['sec x tan x', 'sec x + c', ''],
                    ['cosec x cot x', '\\u2212cosec x + c', '']
                ],
                caption: 'Standard integrals \\u2014 all must be known'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b (3e^(2x) + 4/x + sec\\u00b2x) dx.',
                text: '= 3\\u00b7(1/2)e^(2x) + 4 ln|x| + tan x + c\\n= (3/2)e^(2x) + 4 ln|x| + tan x + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate \\u222b\\u2081\\u00b3 (e\\u02e3 + 1/x) dx.',
                text: '= [e\\u02e3 + ln x]\\u2081\\u00b3\\n= (e\\u00b3 + ln 3) \\u2212 (e\\u00b9 + ln 1)\\n= (e\\u00b3 + ln 3) \\u2212 (e + 0)\\n= e\\u00b3 \\u2212 e + ln 3'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Modulus in ln|x|',
                text: 'When integrating 1/x, write ln|x| + c not ln x + c. In definite integrals with both limits positive, the modulus signs are not needed. But in indefinite integrals or when x might be negative, keep them.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Standard integrals: \\u222be\\u02e3dx = e\\u02e3+c; \\u222b(1/x)dx = ln|x|+c; \\u222bsin x dx = \\u2212cos x+c; \\u222bcos x dx = sin x+c; \\u222bsec\\u00b2x dx = tan x+c.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-integrals', prompt: 'State \\u222bsec\\u00b2x dx and \\u222b(1/x) dx.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Integrate 3e^(2x) + 4/x + sec\\u00b2x.' },
            { id: 'c3', blockId: 'table-integrals', prompt: 'State \\u222bcos x dx and \\u222bsin x dx.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why do we write ln|x| rather than ln x when integrating 1/x?' }
        ],
        summaryText: '\\u222be\\u02e3dx=e\\u02e3+c; \\u222b(1/x)dx=ln|x|+c; \\u222bsin x dx=\\u2212cos x+c; \\u222bcos x dx=sin x+c; \\u222bsec\\u00b2x dx=tan x+c.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_5_1.js'] = """\
/**
 * WMA13 · Topic 5 · Subtopic 1 — Reverse chain rule
 */
export const note_mathematics_3_5_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Integrate functions of the form f(ax + b) by applying the reverse chain rule.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Reverse Chain Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Reverse Chain Rule',
                text: 'If \\u222bf(x) dx = F(x) + c, then:\\n\\u222bf(ax + b) dx = F(ax + b)/a + c\\n\\nDivide by the coefficient of x (the constant a).'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b sin(3x + 1) dx and \\u222b e^(5x\\u22122) dx.',
                text: '\\u222b sin(3x+1) dx = \\u2212cos(3x+1)/3 + c\\n\\u222b e^(5x\\u22122) dx = e^(5x\\u22122)/5 + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b (2x + 3)\\u2075 dx.',
                text: '\\u222b (2x+3)\\u2075 dx = (2x+3)\\u2076/(6\\u00b72) + c = (2x+3)\\u2076/12 + c'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b 1/(4x \\u2212 1) dx and \\u222b sec\\u00b2(2x) dx.',
                text: '\\u222b 1/(4x\\u22121) dx = (1/4) ln|4x\\u22121| + c\\n\\u222b sec\\u00b2(2x) dx = tan(2x)/2 + c'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Check by Differentiating',
                text: 'Always verify by differentiating your answer. If you get back the original integrand, you are correct. This is especially important in exam "hence" questions.'
            }, terms: []
        },
        {
            id: 'callout-warn', type: 'callout',
            data: {
                style: 'warning',
                title: 'Only Works for Linear Arguments',
                text: 'The reverse chain rule \\u222bf(ax+b)dx = F(ax+b)/a + c only works when the inner function is linear (ax+b). For non-linear composites (e.g. sin(x\\u00b2)), you need substitution instead.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Reverse chain rule: \\u222bf(ax+b)dx = F(ax+b)/a + c. Divide by the coefficient of x. Only valid for linear inner functions. Check by differentiating.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the reverse chain rule for \\u222bf(ax+b) dx.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find \\u222b sin(3x+1) dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find \\u222b (2x+3)\\u2075 dx.' },
            { id: 'c4', blockId: 'callout-warn', prompt: 'When does the reverse chain rule NOT apply?' }
        ],
        summaryText: 'Reverse chain rule: \\u222bf(ax+b)dx = F(ax+b)/a+c. Divide by coefficient of x. Linear inner functions only.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_5_2.js'] = """\
/**
 * WMA13 · Topic 5 · Subtopic 2 — Integrating f'(x)/f(x)
 */
export const note_mathematics_3_5_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Recognise and integrate expressions of the form f\\u2019(x)/f(x) to give ln|f(x)| + c.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Key Result', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Integrating f\'(x)/f(x)',
                text: '\\u222b f\\u2019(x)/f(x) dx = ln|f(x)| + c\\n\\nThis follows because d/dx[ln f(x)] = f\\u2019(x)/f(x).\\nThe numerator must be (or be a multiple of) the derivative of the denominator.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b 2x/(x\\u00b2 + 3) dx.',
                text: 'Numerator 2x = d/dx(x\\u00b2 + 3)  \\u2714\\n\\u222b 2x/(x\\u00b2+3) dx = ln|x\\u00b2+3| + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b 3x\\u00b2/(x\\u00b3 \\u2212 1) dx.',
                text: 'Numerator 3x\\u00b2 = d/dx(x\\u00b3 \\u2212 1)  \\u2714\\n\\u222b 3x\\u00b2/(x\\u00b3\\u22121) dx = ln|x\\u00b3\\u22121| + c'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b x/(x\\u00b2 + 5) dx.',
                text: 'The numerator x is (1/2) of d/dx(x\\u00b2+5) = 2x.\\nSo multiply and divide by 2:\\n\\u222b x/(x\\u00b2+5) dx = (1/2) \\u222b 2x/(x\\u00b2+5) dx = (1/2) ln|x\\u00b2+5| + c'
            }, terms: []
        },
        {
            id: 'callout-we4', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b tan x dx.',
                text: 'tan x = sin x/cos x.  Numerator sin x = \\u2212d/dx(cos x).\\n\\u222b tan x dx = \\u2212 \\u222b (\\u2212sin x/cos x) dx = \\u2212ln|cos x| + c\\n(or equivalently ln|sec x| + c)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Spotting the Pattern',
                text: 'Check if the numerator is the derivative of the denominator. If it is a constant multiple, adjust accordingly. This pattern also appears in definite integrals \\u2014 evaluate ln|f(x)| at the limits.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '\\u222bf\\u2019(x)/f(x) dx = ln|f(x)| + c. Check numerator is a (multiple of the) derivative of denominator. Adjust by multiplying and dividing by the necessary constant.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the result of \\u222b f\\u2019(x)/f(x) dx.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find \\u222b 2x/(x\\u00b2+3) dx.' },
            { id: 'c3', blockId: 'callout-we4', prompt: 'Integrate tan x using the f\\u2019(x)/f(x) pattern.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Find \\u222b x/(x\\u00b2+5) dx.' }
        ],
        summaryText: '\\u222bf\\u2019(x)/f(x)dx = ln|f(x)|+c. Spot if numerator is derivative of denominator; adjust constants as needed.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_5_3.js'] = """\
/**
 * WMA13 · Topic 5 · Subtopic 3 — Integration using trig identities
 */
export const note_mathematics_3_5_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use trigonometric identities to rewrite integrands into integrable forms.' },
            terms: []
        },
        {
            id: 'h-ids', type: 'heading',
            data: { text: 'Useful Identities for Integration', level: 2 }, terms: []
        },
        {
            id: 'callout-ids', type: 'callout',
            data: {
                style: 'key',
                title: 'Key Identities',
                text: 'cos 2x = 2cos\\u00b2x \\u2212 1  \\u27a2  cos\\u00b2x = (1 + cos 2x)/2\\ncos 2x = 1 \\u2212 2sin\\u00b2x  \\u27a2  sin\\u00b2x = (1 \\u2212 cos 2x)/2\\n\\nsin 2x = 2 sin x cos x  \\u27a2  sin x cos x = (1/2)sin 2x\\n\\n1 + tan\\u00b2x = sec\\u00b2x  \\u27a2  tan\\u00b2x = sec\\u00b2x \\u2212 1'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b cos\\u00b2x dx.',
                text: 'Use cos\\u00b2x = (1 + cos 2x)/2\\n\\u222b cos\\u00b2x dx = \\u222b (1 + cos 2x)/2 dx\\n= x/2 + (sin 2x)/4 + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b sin\\u00b2(3x) dx.',
                text: 'Use sin\\u00b2(3x) = (1 \\u2212 cos 6x)/2\\n\\u222b sin\\u00b2(3x) dx = \\u222b (1 \\u2212 cos 6x)/2 dx\\n= x/2 \\u2212 (sin 6x)/12 + c'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b tan\\u00b2x dx.',
                text: 'Use tan\\u00b2x = sec\\u00b2x \\u2212 1\\n\\u222b tan\\u00b2x dx = \\u222b (sec\\u00b2x \\u2212 1) dx = tan x \\u2212 x + c'
            }, terms: []
        },
        {
            id: 'callout-we4', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b sin x cos x dx.',
                text: 'Method 1: Use sin x cos x = (1/2) sin 2x\\n\\u222b sin x cos x dx = \\u222b (1/2) sin 2x dx = \\u2212(cos 2x)/4 + c\\n\\nMethod 2: Substitution u = sin x gives u\\u00b2/2 + c = sin\\u00b2x/2 + c (equivalent)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Strategy',
                text: 'When you see sin\\u00b2x or cos\\u00b2x, immediately use the cos 2x identity. When you see tan\\u00b2x, replace with sec\\u00b2x \\u2212 1. Look for sin x cos x combinations; use the sin 2x identity.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trig identity integration: cos\\u00b2x \\u2192 (1+cos2x)/2; sin\\u00b2x \\u2192 (1\\u2212cos2x)/2; tan\\u00b2x \\u2192 sec\\u00b2x\\u22121; sin x cos x \\u2192 (1/2)sin 2x. Then integrate directly.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-ids', prompt: 'Write cos\\u00b2x and sin\\u00b2x as expressions involving cos 2x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Integrate cos\\u00b2x using a trig identity.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Integrate tan\\u00b2x.' },
            { id: 'c4', blockId: 'callout-we4', prompt: 'Integrate sin x cos x in two different ways.' }
        ],
        summaryText: 'Replace powers: cos\\u00b2x=(1+cos2x)/2; sin\\u00b2x=(1\\u2212cos2x)/2; tan\\u00b2x=sec\\u00b2x\\u22121. Then integrate directly.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_5_4.js'] = """\
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
                text: '1. Choose a substitution u = g(x)\\n2. Find du/dx, write dx = du/(du/dx)\\n3. Substitute all x terms: replace x in the integrand and replace dx\\n4. Integrate w.r.t. u\\n5. Substitute back to get the answer in terms of x\\n\\nFor definite integrals: also change the limits to u-values'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b 2x(x\\u00b2 + 3)\\u2074 dx using u = x\\u00b2 + 3.',
                text: 'u = x\\u00b2 + 3  \\u2192  du/dx = 2x  \\u2192  dx = du/(2x)\\n\\n\\u222b 2x \\u00b7 u\\u2074 \\u00b7 du/(2x) = \\u222b u\\u2074 du = u\\u2075/5 + c = (x\\u00b2+3)\\u2075/5 + c'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find \\u222b x\\u221a(1 + x\\u00b2) dx using u = 1 + x\\u00b2.',
                text: 'u = 1 + x\\u00b2  \\u2192  du = 2x dx  \\u2192  x dx = du/2\\n\\n\\u222b \\u221au \\u00b7 du/2 = (1/2) \\u222b u^(1/2) du = (1/2) \\u00b7 (2/3)u^(3/2) + c = (1/3)(1+x\\u00b2)^(3/2) + c'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate \\u222b\\u2080\\u00b9 x e^(x\\u00b2) dx.',
                text: 'u = x\\u00b2  \\u2192  du = 2x dx  \\u2192  x dx = du/2\\nNew limits: x=0 \\u2192 u=0; x=1 \\u2192 u=1\\n\\n(1/2)\\u222b\\u2080\\u00b9 e\\u1d58 du = (1/2)[e\\u1d58]\\u2080\\u00b9 = (1/2)(e\\u00b9 \\u2212 e\\u2070) = (e\\u22121)/2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Choosing a Substitution',
                text: 'Choose u to be the part whose derivative appears elsewhere in the integrand (up to a constant). For \\u222b f(g(x)) g\\u2019(x) dx: try u = g(x). If there is a root involved like \\u221a(ax+b), try u = ax+b.'
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
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find \\u222b 2x(x\\u00b2+3)\\u2074 dx using substitution.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'How do limits change when using substitution in definite integrals?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you choose what to set as the substitution u?' }
        ],
        summaryText: 'Substitution: choose u=g(x), write du, replace, integrate w.r.t. u, back-substitute. For definite integrals: change limits.',
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

print('Topic 5 complete.')
