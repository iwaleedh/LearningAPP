import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

notes['note_3_3_0.js'] = """\
/**
 * WMA13 · Topic 3 · Subtopic 0 — Derivatives of exponential functions
 */
export const note_mathematics_3_3_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Differentiate e\\u02e3, a\\u02e3, ln x, and composite forms using the chain rule.' },
            terms: []
        },
        {
            id: 'h-key', type: 'heading',
            data: { text: 'Standard Derivatives', level: 2 }, terms: []
        },
        {
            id: 'table-derivs', type: 'comparisonTable',
            data: {
                headers: ['f(x)', 'f\'(x)', 'Notes'],
                rows: [
                    ['e\\u02e3', 'e\\u02e3', 'Unique: derivative = itself'],
                    ['e^(ax+b)', 'ae^(ax+b)', 'Chain rule; multiply by derivative of exponent'],
                    ['a\\u02e3', 'a\\u02e3 ln a', 'For constant base a > 0, a \\u2260 1'],
                    ['ln x', '1/x', 'Domain: x > 0'],
                    ['ln(ax + b)', 'a/(ax + b)', 'Chain rule; multiply by derivative of argument']
                ],
                caption: 'Key derivatives of exponential and logarithmic functions'
            }, terms: []
        },
        {
            id: 'h-we1', type: 'heading',
            data: { text: 'Worked Examples', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e^(3x\\u00b2) and y = ln(5x \\u2212 2).',
                text: 'y = e^(3x\\u00b2): let u = 3x\\u00b2, dy/dx = 6x \\u00b7 e^(3x\\u00b2)\\ny = ln(5x \\u2212 2): dy/dx = 5/(5x \\u2212 2)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = 2\\u02e3.',
                text: 'y = 2\\u02e3  \\u2192  dy/dx = 2\\u02e3 ln 2\\n\\nAlternatively, write y = e^(x ln 2) and differentiate: dy/dx = ln 2 \\u00b7 e^(x ln 2) = 2\\u02e3 ln 2  \\u2713'
            }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule Pattern for Ln',
                text: 'd/dx[ln(f(x))] = f\\u2019(x) / f(x)\\n\\nThis is particularly useful in integration too:\\n\\u222b f\\u2019(x)/f(x) dx = ln|f(x)| + c'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Useful Technique: Logarithmic Differentiation',
                text: 'For complicated products like y = x\\u00b3 sin x ln x, take ln of both sides:\\nln y = 3 ln x + ln(sin x) + ln(ln x)\\nDifferentiate implicitly: (1/y)(dy/dx) = 3/x + cos x/sin x + 1/(x ln x)\\nThen multiply by y.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Key results: d/dx(e\\u02e3) = e\\u02e3; d/dx(ln x) = 1/x; d/dx(a\\u02e3) = a\\u02e3 ln a. Chain rule: d/dx(e^f(x)) = f\\u2019(x)e^f(x); d/dx(ln f(x)) = f\\u2019(x)/f(x).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-derivs', prompt: 'State the derivative of a\\u02e3 for constant a.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = e^(3x\\u00b2) using the chain rule.' },
            { id: 'c3', blockId: 'callout-key', prompt: 'State the chain rule result for d/dx[ln f(x)].' },
            { id: 'c4', blockId: 'table-derivs', prompt: 'What is the derivative of ln(5x \\u2212 2)?' }
        ],
        summaryText: 'd/dx(e\\u02e3)=e\\u02e3; d/dx(ln x)=1/x; d/dx(a\\u02e3)=a\\u02e3 ln a. Chain rule: d/dx(e^f)=f\\u2019e^f; d/dx(ln f)=f\\u2019/f.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_3_1.js'] = """\
/**
 * WMA13 · Topic 3 · Subtopic 1 — Logarithmic graphs and exponential equations
 */
export const note_mathematics_3_3_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Sketch and use logarithmic graphs, solve exponential equations using logarithms, and linearise exponential data.' },
            terms: []
        },
        {
            id: 'h-graph', type: 'heading',
            data: { text: 'Graph of y = ln x', level: 2 }, terms: []
        },
        {
            id: 'p-graph', type: 'paragraph',
            data: { text: 'y = ln x passes through (1, 0) and (e, 1). It has a vertical asymptote at x = 0. The graph increases for all x > 0, but does so more and more slowly. It is the reflection of y = e\\u02e3 in the line y = x.' },
            terms: []
        },
        {
            id: 'table-points', type: 'comparisonTable',
            data: {
                headers: ['x', '1/e', '1', 'e', 'e\\u00b2'],
                rows: [['ln x', '\\u22121', '0', '1', '2']],
                caption: 'Key points on y = ln x'
            }, terms: []
        },
        {
            id: 'h-solve', type: 'heading',
            data: { text: 'Solving Exponential Equations', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 3e^(2x) \\u2212 7 = 0, giving x to 3 significant figures.',
                text: '3e^(2x) = 7\\ne^(2x) = 7/3\\n2x = ln(7/3)\\nx = ln(7/3)/2 = 0.424 (3 s.f.)'
            }, terms: []
        },
        {
            id: 'h-linear', type: 'heading',
            data: { text: 'Linearising Exponential Relationships', level: 2 }, terms: []
        },
        {
            id: 'p-linear', type: 'paragraph',
            data: { text: 'If y = ab\\u02e3, take natural log: ln y = ln a + x ln b. Plotting ln y against x gives a <strong>straight line</strong> with gradient ln b and y-intercept ln a. This lets you find a and b from data.' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Data follows y = ab\\u02e3. Plotting ln y vs x gives gradient 0.693 and intercept 1.386. Find a and b.',
                text: 'Gradient = ln b = 0.693  \\u2192  b = e^0.693 = 2\\nIntercept = ln a = 1.386  \\u2192  a = e^1.386 = 4\\nSo y = 4 \\u00b7 2\\u02e3'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'If the relationship is y = ax^n (power law), take logs differently:\\nln y = ln a + n ln x\\nPlot ln y against ln x for a straight line with gradient n and intercept ln a.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'y = ln x: passes through (1,0), asymptote at x = 0, reflection of e\\u02e3 in y = x. To linearise y = ab\\u02e3: plot ln y vs x \\u2014 gradient = ln b, intercept = ln a.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-graph', prompt: 'Describe the key features of the graph y = ln x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve 3e^(2x) = 7.' },
            { id: 'c3', blockId: 'p-linear', prompt: 'How do you linearise y = ab\\u02e3? What do you plot?' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'If a ln y vs x graph has gradient 0.693 and intercept 1.386, find a and b.' }
        ],
        summaryText: 'ln x: through (1,0), asymptote x=0. Solve e\\u02e3 equations by taking ln. Linearise y=ab\\u02e3: plot ln y vs x, gradient=ln b, intercept=ln a.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_4_0.js'] = """\
/**
 * WMA13 · Topic 4 · Subtopic 0 — Differentiating trig and other functions
 */
export const note_mathematics_3_4_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Recall and apply derivatives of sin x, cos x, tan x, sec x, cosec x, cot x, e\\u02e3, and ln x.' },
            terms: []
        },
        {
            id: 'h-table', type: 'heading',
            data: { text: 'Standard Derivatives', level: 2 }, terms: []
        },
        {
            id: 'table-derivs', type: 'comparisonTable',
            data: {
                headers: ['f(x)', 'f\'(x)'],
                rows: [
                    ['sin x', 'cos x'],
                    ['cos x', '\\u2212sin x'],
                    ['tan x', 'sec\\u00b2 x'],
                    ['sec x', 'sec x tan x'],
                    ['cosec x', '\\u2212cosec x cot x'],
                    ['cot x', '\\u2212cosec\\u00b2 x'],
                    ['e\\u02e3', 'e\\u02e3'],
                    ['ln x', '1/x'],
                    ['a\\u02e3', 'a\\u02e3 ln a']
                ],
                caption: 'Standard derivatives for WMA13 \\u2014 must be known'
            }, terms: []
        },
        {
            id: 'h-chain', type: 'heading',
            data: { text: 'Chain Rule Extensions', level: 2 }, terms: []
        },
        {
            id: 'callout-chain', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule Applied to Trig',
                text: 'd/dx[sin f(x)] = f\\u2019(x) cos f(x)\\nd/dx[cos f(x)] = \\u2212f\\u2019(x) sin f(x)\\nd/dx[tan f(x)] = f\\u2019(x) sec\\u00b2 f(x)\\nd/dx[e^f(x)] = f\\u2019(x) e^f(x)\\nd/dx[ln f(x)] = f\\u2019(x) / f(x)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate: (a) y = sin(3x\\u00b2), (b) y = e^(cos x), (c) y = ln(tan x).',
                text: '(a) dy/dx = 6x cos(3x\\u00b2)\\n(b) dy/dx = \\u2212sin x \\u00b7 e^(cos x)\\n(c) dy/dx = sec\\u00b2x / tan x = 1/(sin x cos x) = 2/sin 2x'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Memory Aid for Reciprocal Trig Derivatives',
                text: 'sec x \\u2192 sec x tan x  (both "s" functions together)\\ncosec x \\u2192 \\u2212cosec x cot x  (both "c" functions together, with minus)\\ncot x \\u2192 \\u2212cosec\\u00b2 x  (like tan \\u2192 sec\\u00b2 but with negatives and "co")'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Must know: d/dx(tan x) = sec\\u00b2x; d/dx(sec x) = sec x tan x; d/dx(cosec x) = \\u2212cosec x cot x; d/dx(cot x) = \\u2212cosec\\u00b2x. Combine with chain rule for composite forms.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-derivs', prompt: 'State the derivatives of tan x, sec x, and cot x.' },
            { id: 'c2', blockId: 'callout-chain', prompt: 'State the chain rule result for d/dx[sin f(x)].' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Differentiate y = sin(3x\\u00b2).' },
            { id: 'c4', blockId: 'table-derivs', prompt: 'What is the derivative of cosec x?' }
        ],
        summaryText: 'd/dx(tan x)=sec\\u00b2x; d/dx(sec x)=sec x tan x; d/dx(cosec x)=\\u2212cosec x cot x; d/dx(cot x)=\\u2212cosec\\u00b2x. Chain rule extends all of these.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_4_1.js'] = """\
/**
 * WMA13 · Topic 4 · Subtopic 1 — Differentiation from first principles: trig
 */
export const note_mathematics_3_4_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Derive d/dx(sin x) = cos x from first principles using the definition of the derivative and small angle approximations.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'The Derivative from First Principles', level: 2 }, terms: []
        },
        {
            id: 'callout-def', type: 'callout',
            data: {
                style: 'key',
                title: 'Definition',
                text: 'f\\u2019(x) = lim_{h \\u2192 0} [f(x + h) \\u2212 f(x)] / h'
            }, terms: []
        },
        {
            id: 'h-proof', type: 'heading',
            data: { text: 'Proof: d/dx(sin x) = cos x', level: 2 }, terms: []
        },
        {
            id: 'callout-proof', type: 'callout',
            data: {
                style: 'worked',
                title: 'Derive d/dx(sin x) from first principles.',
                text: 'f(x) = sin x, so f(x+h) = sin(x+h)\\n\\nApply compound angle formula:\\nsin(x + h) = sin x cos h + cos x sin h\\n\\nTherefore:\\n[sin(x+h) \\u2212 sin x]/h = [sin x cos h + cos x sin h \\u2212 sin x]/h\\n= sin x(cos h \\u2212 1)/h + cos x \\u00b7 sin h/h\\n\\nAs h \\u2192 0, use small angle approximations:\\nsin h/h \\u2192 1  and  (cos h \\u2212 1)/h \\u2192 0\\n\\n\\u2234 f\\u2019(x) = sin x \\u00b7 0 + cos x \\u00b7 1 = cos x  \\u2713'
            }, terms: []
        },
        {
            id: 'h-limits', type: 'heading',
            data: { text: 'Two Key Limits Used', level: 2 }, terms: []
        },
        {
            id: 'callout-limits', type: 'callout',
            data: {
                style: 'key',
                title: 'Fundamental Trig Limits',
                text: 'lim_{h \\u2192 0} (sin h / h) = 1\\nlim_{h \\u2192 0} (cos h \\u2212 1) / h = 0\\n\\nThese follow from the small angle approximations: sin h \\u2248 h and cos h \\u2248 1 for h \\u2192 0.'
            }, terms: []
        },
        {
            id: 'callout-cosx', type: 'callout',
            data: {
                style: 'worked',
                title: 'Sketch of proof for d/dx(cos x) = \\u2212sin x.',
                text: 'cos(x + h) = cos x cos h \\u2212 sin x sin h\\n\\n[cos(x+h) \\u2212 cos x]/h = cos x(cos h \\u2212 1)/h \\u2212 sin x \\u00b7 sin h/h\\nAs h \\u2192 0: \\u2192 cos x \\u00b7 0 \\u2212 sin x \\u00b7 1 = \\u2212sin x  \\u2713'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Note',
                text: 'In an exam, you must show each step clearly: write the definition, apply the compound angle formula, substitute the limits. Do not skip steps in a "show that" question.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'd/dx(sin x) = cos x from first principles: apply the compound angle formula for sin(x+h), then use lim(sin h/h) = 1 and lim((cos h \\u2212 1)/h) = 0.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-def', prompt: 'Write the first principles definition of the derivative.' },
            { id: 'c2', blockId: 'callout-limits', prompt: 'State the two fundamental trig limits used in the proof.' },
            { id: 'c3', blockId: 'callout-proof', prompt: 'Outline the key steps to prove d/dx(sin x) = cos x from first principles.' },
            { id: 'c4', blockId: 'callout-cosx', prompt: 'Which compound angle formula is used to prove d/dx(cos x) = \\u2212sin x?' }
        ],
        summaryText: 'First principles proof of d/dx(sin x) = cos x: use sin(x+h) compound angle formula, then limits sin h/h \\u2192 1 and (cos h \\u2212 1)/h \\u2192 0.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_4_2.js'] = """\
/**
 * WMA13 · Topic 4 · Subtopic 2 — Chain rule (further applications)
 */
export const note_mathematics_3_4_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the chain rule to differentiate composite functions involving trig, exponential, and logarithmic functions.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Chain Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule',
                text: 'If y = f(u) where u = g(x), then:\\ndy/dx = (dy/du) \\u00b7 (du/dx)\\n\\nEquivalently: d/dx[f(g(x))] = f\\u2019(g(x)) \\u00b7 g\\u2019(x)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = sin\\u00b3(2x).',
                text: 'Write y = u\\u00b3 where u = sin(2x)\\ndy/du = 3u\\u00b2,  du/dx = 2 cos(2x)\\ndy/dx = 3 sin\\u00b2(2x) \\u00b7 2 cos(2x) = 6 sin\\u00b2(2x) cos(2x)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = ln(sec x).',
                text: 'u = sec x,  y = ln u\\ndu/dx = sec x tan x,  dy/du = 1/u = 1/sec x\\ndy/dx = (1/sec x) \\u00b7 sec x tan x = tan x'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e^(sin x).',
                text: 'dy/dx = cos x \\u00b7 e^(sin x)  (chain rule: multiply by derivative of exponent)'
            }, terms: []
        },
        {
            id: 'callout-we4', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = (3 + 2sin x)\\u2075.',
                text: 'dy/dx = 5(3 + 2sin x)\\u2074 \\u00b7 2 cos x = 10 cos x (3 + 2sin x)\\u2074'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Repeated Chain Rule',
                text: 'For nested composites, apply the chain rule repeatedly. Each layer contributes a multiplying factor. Work from the outermost function inward, multiplying by each inner derivative.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Chain rule: dy/dx = (dy/du)(du/dx). Outer derivative \\u00d7 inner derivative. Works for trig, exp, log composites \\u2014 multiply through from outermost to innermost layer.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the chain rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = sin\\u00b3(2x).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Differentiate y = ln(sec x).' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Differentiate y = e^(sin x).' }
        ],
        summaryText: 'Chain rule: dy/dx = f\\u2019(g(x)) \\u00b7 g\\u2019(x). Outer \\u00d7 inner. Apply to trig, exp, log composites.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_4_3.js'] = """\
/**
 * WMA13 · Topic 4 · Subtopic 3 — Product rule
 */
export const note_mathematics_3_4_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the product rule to differentiate products of trig, exponential, and polynomial functions.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Product Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Product Rule',
                text: 'If y = u v, then:\\ndy/dx = u(dv/dx) + v(du/dx)\\n\\nMemory: "u v-dash + v u-dash"'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = x\\u00b2 sin x.',
                text: 'u = x\\u00b2,  v = sin x\\ndu/dx = 2x,  dv/dx = cos x\\ndy/dx = x\\u00b2 cos x + sin x \\u00b7 2x = x\\u00b2 cos x + 2x sin x'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e\\u02e3 ln x.',
                text: 'u = e\\u02e3,  v = ln x\\ndu/dx = e\\u02e3,  dv/dx = 1/x\\ndy/dx = e\\u02e3(1/x) + ln x \\u00b7 e\\u02e3 = e\\u02e3(1/x + ln x)'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = 3x\\u00b2 e^(2x).',
                text: 'u = 3x\\u00b2,  v = e^(2x)\\ndu/dx = 6x,  dv/dx = 2e^(2x)\\ndy/dx = 3x\\u00b2 \\u00b7 2e^(2x) + e^(2x) \\u00b7 6x = 6xe^(2x)(x + 1)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Factorising After Product Rule',
                text: 'After applying the product rule, factorise the result. Common factorisation techniques: take out e^x/trig factor, or take out common powers of x. This makes further use (e.g. finding stationary points) much easier.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Product rule: d/dx(uv) = u v\\u2019 + v u\\u2019. Identify u and v, differentiate each, then combine. Factorise the result where possible.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the product rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = x\\u00b2 sin x.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Differentiate y = e\\u02e3 ln x.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Differentiate y = 3x\\u00b2 e^(2x) and factorise.' }
        ],
        summaryText: 'Product rule: d/dx(uv) = u(dv/dx) + v(du/dx). Factorise after applying.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_4_4.js'] = """\
/**
 * WMA13 · Topic 4 · Subtopic 4 — Quotient rule
 */
export const note_mathematics_3_4_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the quotient rule to differentiate functions expressed as one expression divided by another.' },
            terms: []
        },
        {
            id: 'h-rule', type: 'heading',
            data: { text: 'The Quotient Rule', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Quotient Rule',
                text: 'If y = u/v, then:\\ndy/dx = (v(du/dx) \\u2212 u(dv/dx)) / v\\u00b2\\n\\nMemory: "v u-dash minus u v-dash, all over v squared"'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = sin x / x.',
                text: 'u = sin x,  v = x\\ndu/dx = cos x,  dv/dx = 1\\ndy/dx = (x cos x \\u2212 sin x \\u00b7 1) / x\\u00b2 = (x cos x \\u2212 sin x)/x\\u00b2'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove that d/dx(tan x) = sec\\u00b2x using the quotient rule.',
                text: 'tan x = sin x / cos x,  so u = sin x, v = cos x\\ndu/dx = cos x,  dv/dx = \\u2212sin x\\ndy/dx = (cos x \\u00b7 cos x \\u2212 sin x \\u00b7 (\\u2212sin x)) / cos\\u00b2x\\n= (cos\\u00b2x + sin\\u00b2x) / cos\\u00b2x\\n= 1/cos\\u00b2x = sec\\u00b2x  \\u2713'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e^(2x) / (x\\u00b2 + 1).',
                text: 'u = e^(2x),  v = x\\u00b2 + 1\\ndu/dx = 2e^(2x),  dv/dx = 2x\\ndy/dx = ((x\\u00b2+1)\\u00b72e^(2x) \\u2212 e^(2x)\\u00b72x) / (x\\u00b2+1)\\u00b2\\n= e^(2x)(2x\\u00b2 + 2 \\u2212 2x) / (x\\u00b2+1)\\u00b2\\n= 2e^(2x)(x\\u00b2 \\u2212 x + 1) / (x\\u00b2+1)\\u00b2'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Quotient vs Product Rule',
                text: 'You can convert y = u/v to y = u \\u00b7 v\\u207b\\u00b9 and use the product rule instead. Both give the same answer. Use whichever is less error-prone for you.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Quotient rule: d/dx(u/v) = (v u\\u2019 \\u2212 u v\\u2019) / v\\u00b2. Denominator squared on bottom; notice the minus sign. Can verify: d/dx(tan x) = sec\\u00b2x by applying to sin x / cos x.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the quotient rule formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = sin x / x.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Prove d/dx(tan x) = sec\\u00b2x using the quotient rule.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How can you apply the product rule instead of the quotient rule?' }
        ],
        summaryText: 'Quotient rule: d/dx(u/v) = (v u\\u2019 \\u2212 u v\\u2019)/v\\u00b2. Bottom squared; minus sign in numerator.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_4_5.js'] = """\
/**
 * WMA13 · Topic 4 · Subtopic 5 — Differentiating inverse trig functions
 */
export const note_mathematics_3_4_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Differentiate arcsin x, arccos x, and arctan x, and recognise when these arise in integration.' },
            terms: []
        },
        {
            id: 'h-results', type: 'heading',
            data: { text: 'Derivatives of Inverse Trig Functions', level: 2 }, terms: []
        },
        {
            id: 'table-derivs', type: 'comparisonTable',
            data: {
                headers: ['f(x)', 'f\'(x)', 'Domain'],
                rows: [
                    ['arcsin x', '1/\\u221a(1 \\u2212 x\\u00b2)', '|x| < 1'],
                    ['arccos x', '\\u22121/\\u221a(1 \\u2212 x\\u00b2)', '|x| < 1'],
                    ['arctan x', '1/(1 + x\\u00b2)', 'x \\u2208 \\u211d']
                ],
                caption: 'Derivatives of inverse trig functions'
            }, terms: []
        },
        {
            id: 'h-derive', type: 'heading',
            data: { text: 'Derivation: d/dx(arcsin x)', level: 2 }, terms: []
        },
        {
            id: 'callout-derive', type: 'callout',
            data: {
                style: 'worked',
                title: 'Derive d/dx(arcsin x) = 1/\\u221a(1 \\u2212 x\\u00b2).',
                text: 'Let y = arcsin x  \\u2192  x = sin y\\nDifferentiate both sides w.r.t. x: 1 = cos y \\u00b7 dy/dx\\ndy/dx = 1/cos y\\nUsing sin\\u00b2y + cos\\u00b2y = 1: cos y = \\u221a(1 \\u2212 sin\\u00b2y) = \\u221a(1 \\u2212 x\\u00b2)\\n\\u2234 dy/dx = 1/\\u221a(1 \\u2212 x\\u00b2)  \\u2713'
            }, terms: []
        },
        {
            id: 'h-chain', type: 'heading',
            data: { text: 'Chain Rule Extensions', level: 2 }, terms: []
        },
        {
            id: 'callout-chain', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule Forms',
                text: 'd/dx[arcsin(f(x))] = f\\u2019(x) / \\u221a(1 \\u2212 f(x)\\u00b2)\\nd/dx[arctan(f(x))] = f\\u2019(x) / (1 + f(x)\\u00b2)\\nd/dx[arctan(x/a)] = a/(a\\u00b2 + x\\u00b2)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = arctan(3x) and y = arcsin(x\\u00b2).',
                text: 'y = arctan(3x): f(x) = 3x, f\\u2019(x) = 3\\ndy/dx = 3/(1 + 9x\\u00b2)\\n\\ny = arcsin(x\\u00b2): f(x) = x\\u00b2, f\\u2019(x) = 2x\\ndy/dx = 2x/\\u221a(1 \\u2212 x\\u2074)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Integration Connection',
                text: 'These derivatives give standard integration results (by working backwards):\\n\\u222b 1/\\u221a(1\\u2212x\\u00b2) dx = arcsin x + c\\n\\u222b 1/(1+x\\u00b2) dx = arctan x + c'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'd/dx(arcsin x) = 1/\\u221a(1\\u2212x\\u00b2); d/dx(arccos x) = \\u22121/\\u221a(1\\u2212x\\u00b2); d/dx(arctan x) = 1/(1+x\\u00b2). Derived using implicit differentiation on the original trig functions.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-derivs', prompt: 'State the derivatives of arcsin x and arctan x.' },
            { id: 'c2', blockId: 'callout-derive', prompt: 'Outline how d/dx(arcsin x) is derived.' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Differentiate y = arctan(3x).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What integration result follows from d/dx(arctan x) = 1/(1+x\\u00b2)?' }
        ],
        summaryText: 'd/dx(arcsin x) = 1/\\u221a(1\\u2212x\\u00b2); d/dx(arctan x) = 1/(1+x\\u00b2). Derived by implicit differentiation. Lead to standard integrals.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_4_6.js'] = """\
/**
 * WMA13 · Topic 4 · Subtopic 6 — Parametric differentiation
 */
export const note_mathematics_3_4_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Differentiate parametric equations to find dy/dx and d\\u00b2y/dx\\u00b2, and find the equations of tangents and normals.' },
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
                text: 'If x = f(t) and y = g(t), then:\\ndy/dx = (dy/dt) \\u00f7 (dx/dt)\\n\\nSecond derivative:\\nd\\u00b2y/dx\\u00b2 = d/dt(dy/dx) \\u00f7 (dx/dt)'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = t\\u00b2 + 1, y = 2t. Find dy/dx and the gradient where t = 3.',
                text: 'dx/dt = 2t,  dy/dt = 2\\ndy/dx = 2/(2t) = 1/t\\n\\nAt t = 3: dy/dx = 1/3'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'x = cos t, y = sin t. Find dy/dx and d\\u00b2y/dx\\u00b2.',
                text: 'dx/dt = \\u2212sin t,  dy/dt = cos t\\ndy/dx = cos t / (\\u2212sin t) = \\u2212cot t\\n\\nd/dt(dy/dx) = d/dt(\\u2212cot t) = cosec\\u00b2 t\\nd\\u00b2y/dx\\u00b2 = cosec\\u00b2 t / (\\u2212sin t) = \\u2212cosec\\u00b3 t'
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
                title: 'x = 3t\\u00b2, y = 6t. Find the tangent at t = 2.',
                text: 'At t = 2: x = 12, y = 12\\ndx/dt = 6t,  dy/dt = 6\\ndy/dx = 6/(6t) = 1/t\\nGradient at t = 2: m = 1/2\\nTangent: y \\u2212 12 = (1/2)(x \\u2212 12)  \\u2192  2y = x + 12'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Steps',
                text: '1. Find dx/dt and dy/dt separately\\n2. Divide: dy/dx = (dy/dt)/(dx/dt)\\n3. For d\\u00b2y/dx\\u00b2: differentiate dy/dx w.r.t. t, then divide by dx/dt\\n4. For tangent/normal: substitute t-value into x, y, and dy/dx'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Parametric: dy/dx = (dy/dt)/(dx/dt). Second derivative: d\\u00b2y/dx\\u00b2 = (d/dt of dy/dx)/(dx/dt). For tangent/normal: find the point and gradient at the given t-value.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for dy/dx in terms of parametric equations x=f(t), y=g(t).' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'For x = t\\u00b2 + 1, y = 2t, find dy/dx.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Find the tangent to x = 3t\\u00b2, y = 6t at t = 2.' },
            { id: 'c4', blockId: 'callout-key', prompt: 'How do you find the second derivative d\\u00b2y/dx\\u00b2 for a parametric curve?' }
        ],
        summaryText: 'Parametric: dy/dx = (dy/dt)/(dx/dt). For tangent: find x, y, and gradient at given t. For d\\u00b2y/dx\\u00b2: differentiate dy/dx w.r.t. t, divide by dx/dt.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_4_7.js'] = """\
/**
 * WMA13 · Topic 4 · Subtopic 7 — Connected rates of change
 */
export const note_mathematics_3_4_7 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use the chain rule to find connected rates of change between related physical quantities.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Connected Rates of Change', level: 2 }, terms: []
        },
        {
            id: 'p-method', type: 'paragraph',
            data: { text: 'If y depends on x, and x changes with time t, then y also changes with time. The chain rule connects these rates: dy/dt = (dy/dx) \\u00b7 (dx/dt). This is the key principle for all connected rates problems.' },
            terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule for Rates',
                text: 'dy/dt = (dy/dx) \\u00b7 (dx/dt)\\n\\nMore generally: if A depends on r, and r changes with t:\\ndA/dt = (dA/dr) \\u00b7 (dr/dt)\\n\\nTo find one rate: identify which rates are known and which linking derivative to find'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A spherical balloon is inflated at 100 cm\\u00b3/s. Find the rate of increase of radius when r = 5 cm.',
                text: 'V = (4/3)\\u03c0r\\u00b3  \\u2192  dV/dr = 4\\u03c0r\\u00b2\\n\\ndV/dt = (dV/dr) \\u00b7 (dr/dt)\\n100 = 4\\u03c0(5)\\u00b2 \\u00b7 (dr/dt)\\ndr/dt = 100/(100\\u03c0) = 1/\\u03c0 \\u2248 0.318 cm/s'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'A ladder 5 m long leans against a wall. The base slides away at 0.2 m/s. How fast does the top descend when the base is 3 m from the wall?',
                text: 'x\\u00b2 + y\\u00b2 = 25  \\u2192  2x(dx/dt) + 2y(dy/dt) = 0\\nWhen x = 3: y = 4\\n2(3)(0.2) + 2(4)(dy/dt) = 0\\n1.2 + 8(dy/dt) = 0  \\u2192  dy/dt = \\u22120.15 m/s\\n(Negative sign means y is decreasing)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Strategy',
                text: '1. Write an equation relating the geometric quantities\\n2. Differentiate implicitly w.r.t. time, using d/dt\\n3. Substitute known values (given rates and measurements)\\n4. Solve for the unknown rate\\n5. Interpret the sign: negative = decreasing'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Connected rates: dy/dt = (dy/dx)(dx/dt). Write a geometric relationship, differentiate w.r.t. t (chain rule), substitute known values, solve for unknown rate.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the chain rule formula that connects dy/dt to dy/dx and dx/dt.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'A balloon inflates at 100 cm\\u00b3/s. Find dr/dt when r = 5 cm.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'List the 5 steps for solving a connected rates problem.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'In the ladder problem, what equation relates x, y, and the length of the ladder?' }
        ],
        summaryText: 'Connected rates: dy/dt = (dy/dx)(dx/dt). Write geometric relation, differentiate w.r.t. t, substitute known values, solve for unknown rate.',
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

print('Topics 3 and 4 complete.')
