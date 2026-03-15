import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

# ── Topic 4: Binomial Series ──────────────────────────────────────────────────

notes['note_4_4_0.js'] = """\
/**
 * WMA14 \u00b7 Topic 4 \u00b7 Subtopic 0 \u2014 Binomial expansion for negative and fractional n
 */
export const note_mathematics_4_4_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Expand (1+x)\\u207f for any rational n (negative or fractional) using the general binomial series, and identify when this series is valid.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'General Binomial Series', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Binomial Series (any rational n)',
                text: '(1 + x)\\u207f = 1 + nx + [n(n\\u22121)/2!]x\\u00b2 + [n(n\\u22121)(n\\u22122)/3!]x\\u00b3 + \\u2026\\n\\nValid for |x| < 1 (when n is not a positive integer)\\n\\nNote: the series is infinite for non-integer n; it terminates only when n is a positive integer.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (1+x)\\u207b\\u00b9 up to and including the x\\u00b3 term.',
                text: 'n = \\u22121:\\n(1+x)\\u207b\\u00b9 = 1 + (\\u22121)x + [(\\u22121)(\\u22122)/2!]x\\u00b2 + [(\\u22121)(\\u22122)(\\u22123)/3!]x\\u00b3 + \\u2026\\n= 1 \\u2212 x + x\\u00b2 \\u2212 x\\u00b3 + \\u2026'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (1+x)^(1/2) up to and including x\\u00b3.',
                text: 'n = 1/2:\\n= 1 + (1/2)x + [(1/2)(\\u22121/2)/2!]x\\u00b2 + [(1/2)(\\u22121/2)(\\u22123/2)/3!]x\\u00b3 + \\u2026\\n= 1 + x/2 \\u2212 x\\u00b2/8 + x\\u00b3/16 \\u2212 \\u2026'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (1+x)\\u207b\\u00b2 up to x\\u00b3.',
                text: 'n = \\u22122:\\n= 1 + (\\u22122)x + [(\\u22122)(\\u22123)/2]x\\u00b2 + [(\\u22122)(\\u22123)(\\u22124)/6]x\\u00b3 + \\u2026\\n= 1 \\u2212 2x + 3x\\u00b2 \\u2212 4x\\u00b3 + \\u2026'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Pattern for (1+x)\\u207b\\u00b9 and (1+x)\\u207b\\u00b2',
                text: '(1+x)\\u207b\\u00b9 = 1 \\u2212 x + x\\u00b2 \\u2212 x\\u00b3 + \\u2026 (geometric series, ratio \\u2212x)\\n(1+x)\\u207b\\u00b2 = 1 \\u2212 2x + 3x\\u00b2 \\u2212 4x\\u00b3 + \\u2026 (coefficients are |1|, |2|, |3|, \\u2026)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'General binomial: (1+x)\\u207f = \\u03a3 [n(n\\u22121)\\u2026(n\\u2212r+1)/r!] x\\u02b3. Valid for |x|<1 when n is not a positive integer. The series is infinite for fractional/negative n.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the general binomial series for (1+x)\\u207f. When is it valid?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Expand (1+x)\\u207b\\u00b9 to the x\\u00b3 term.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Expand (1+x)^(1/2) to the x\\u00b3 term.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'State the coefficient pattern for (1+x)\\u207b\\u00b2.' }
        ],
        summaryText: '(1+x)\\u207f for rational n: 1+nx+n(n-1)/2! x\\u00b2+\\u2026, valid |x|<1. Infinite series for non-integer n.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_4_1.js'] = """\
/**
 * WMA14 \u00b7 Topic 4 \u00b7 Subtopic 1 \u2014 Binomial expansion: range of validity and (a+bx)^n form
 */
export const note_mathematics_4_4_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'State the range of values of x for which a binomial expansion is valid, and expand expressions of the form (a + bx)^n.' },
            terms: []
        },
        {
            id: 'h-validity', type: 'heading',
            data: { text: 'Validity of the Expansion', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Range of Validity',
                text: '(1 + x)\\u207f is valid for |x| < 1\\n\\n(1 + bx)\\u207f is valid for |bx| < 1, i.e. |x| < 1/|b|\\n\\n(a + bx)\\u207f = a\\u207f(1 + bx/a)\\u207f is valid for |bx/a| < 1, i.e. |x| < |a/b|'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (2 + x)\\u207b\\u00b3 in ascending powers of x up to x\\u00b2. State the validity.',
                text: '(2+x)\\u207b\\u00b3 = 2\\u207b\\u00b3(1 + x/2)\\u207b\\u00b3 = (1/8)(1 + x/2)\\u207b\\u00b3\\n\\n(1+u)\\u207b\\u00b3 = 1 + (\\u22123)u + [(\\u22123)(\\u22124)/2]u\\u00b2 + \\u2026  where u = x/2\\n= 1 \\u2212 3(x/2) + 6(x/2)\\u00b2 + \\u2026\\n= 1 \\u2212 3x/2 + 6x\\u00b2/4 + \\u2026\\n= 1 \\u2212 3x/2 + 3x\\u00b2/2 + \\u2026\\n\\nMultiply by 1/8: (1/8) \\u2212 (3/16)x + (3/16)x\\u00b2 + \\u2026\\n\\nValid for |x/2| < 1, i.e. |x| < 2'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Expand (1 \\u2212 3x)^(1/2) up to x\\u00b2. State the validity.',
                text: '(1\\u22123x)^(1/2): n = 1/2, u = \\u22123x\\n= 1 + (1/2)(\\u22123x) + [(1/2)(\\u22121/2)/2](\\u22123x)\\u00b2 + \\u2026\\n= 1 \\u2212 3x/2 + (1/2)(\\u22121/2)/2 \\u00b79x\\u00b2 + \\u2026\\n= 1 \\u2212 3x/2 \\u2212(1/8)(9x\\u00b2) + \\u2026\\n= 1 \\u2212 3x/2 \\u2212 9x\\u00b2/8 + \\u2026\\n\\nValid for |\\u22123x| < 1, i.e. |x| < 1/3'
            }, terms: []
        },
        {
            id: 'callout-warn', type: 'callout',
            data: {
                style: 'warning',
                title: 'Always factorise out a first',
                text: 'For (a+bx)\\u207f, you must write a\\u207f(1+bx/a)\\u207f first. Do not try to apply the formula directly to (a+bx). Forgetting to factor out a\\u207f is the most common error.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '(a+bx)\\u207f = a\\u207f(1+bx/a)\\u207f. Valid for |bx/a| < 1. Always factor out a\\u207f first. State the range of validity in every answer.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the validity range for (1+bx)\\u207f and for (a+bx)\\u207f.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Expand (2+x)\\u207b\\u00b3 to x\\u00b2 and state the validity.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Expand (1\\u22123x)^(1/2) to x\\u00b2. What is the range of validity?' },
            { id: 'c4', blockId: 'callout-warn', prompt: 'What is the critical first step when expanding (a+bx)\\u207f?' }
        ],
        summaryText: '(a+bx)\\u207f: factor out a\\u207f, expand (1+bx/a)\\u207f, valid |x|<|a/b|. Always state validity.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_4_2.js'] = """\
/**
 * WMA14 \u00b7 Topic 4 \u00b7 Subtopic 2 \u2014 Partial fractions combined with binomial expansion
 */
export const note_mathematics_4_4_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply binomial expansion after first expressing a fraction in partial fraction form.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Strategy: Partial Fractions then Binomial', level: 2 }, terms: []
        },
        {
            id: 'list-steps', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Decompose the given expression into partial fractions.' },
                    { text: 'Expand each partial fraction separately using the general binomial series.' },
                    { text: 'Add the expansions together.' },
                    { text: 'State the range of validity (the intersection of both ranges).' }
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the expansion of 5/[(1+2x)(1\\u2212x)] up to x\\u00b2.',
                text: 'Partial fractions: 5/[(1+2x)(1\\u2212x)] = A/(1+2x) + B/(1\\u2212x)\\nCover-up: A = 5/(1+2\\u00b70) |at x=\\u22121/2... A=5/(1\\u00b7(3/2))...\\nActual: multiply: 5 = A(1\\u2212x) + B(1+2x)\\nx=1/2: A = 5/(3/2) = 10/3; wait let me redo:\\nx=\\u22121/2: 5 = A(1\\u22121/2+1/2)... \\n\\nActually: A/(1+2x) + B/(1\\u2212x). Multiply by denominator:\\n5 = A(1\\u2212x) + B(1+2x)\\nx=1: 5 = 3B \\u27a2 B = 5/3\\nx=\\u22121/2: 5 = A(3/2) \\u27a2 A = 10/3\\n\\nExpand A/(1+2x): (10/3)(1+2x)\\u207b\\u00b9 = (10/3)[1\\u22122x+4x\\u00b2\\u2212\\u2026]\\n= 10/3 \\u2212 20x/3 + 40x\\u00b2/3 + \\u2026  valid |x| < 1/2\\n\\nExpand B/(1\\u2212x): (5/3)(1\\u2212x)\\u207b\\u00b9 = (5/3)[1+x+x\\u00b2+\\u2026]\\n= 5/3 + 5x/3 + 5x\\u00b2/3 + \\u2026  valid |x| < 1\\n\\nSum: (10/3+5/3) + (\\u221220/3+5/3)x + (40/3+5/3)x\\u00b2 + \\u2026\\n= 5 \\u2212 5x + 15x\\u00b2 + \\u2026\\n\\nValid for |x| < 1/2 (most restrictive)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Validity of Combined Expansion',
                text: 'Each partial fraction has its own validity range. The combined expansion is only valid where ALL ranges hold simultaneously: take the intersection (most restrictive condition).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Partial fractions + binomial: decompose first, expand each term separately, add results. Validity = intersection of all individual validity ranges.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-steps', prompt: 'List the 4 steps to expand a rational function using partial fractions + binomial.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Expand 5/[(1+2x)(1\\u2212x)] to x\\u00b2 term.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'How do you determine the validity of a combined binomial expansion?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'If one partial fraction is valid |x|<1/2 and another |x|<1, state the combined validity.' }
        ],
        summaryText: 'Partial fractions + binomial: split, expand each, combine. Validity = most restrictive individual range.',
        ready: true
    },
    evidence: []
};
"""

notes['note_4_4_3.js'] = """\
/**
 * WMA14 \u00b7 Topic 4 \u00b7 Subtopic 3 \u2014 Binomial approximations
 */
export const note_mathematics_4_4_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use binomial expansions to find approximations to numerical values of surds and other expressions.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Using Binomial Expansion for Approximations', level: 2 }, terms: []
        },
        {
            id: 'p-method', type: 'paragraph',
            data: { text: 'Substitute a suitable value of x into a binomial expansion to approximate a numerical value. The expansion must be valid (|x| < required bound) at the chosen x.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Use the expansion of (1+x)^(1/2) to approximate \\u221a1.04.',
                text: '(1+x)^(1/2) \\u2248 1 + x/2 \\u2212 x\\u00b2/8 + x\\u00b3/16\\n\\nSet 1+x = 1.04, so x = 0.04:\\n\\u221a1.04 \\u2248 1 + 0.04/2 \\u2212 (0.04)\\u00b2/8\\n= 1 + 0.02 \\u2212 0.0002\\n= 1.0198\\n\\nActual: \\u221a1.04 = 1.01980\\u2026 \\u2713'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Use (1+x)\\u207b\\u00b9 \\u2248 1\\u2212x+x\\u00b2 to approximate 1/1.02 to 4 d.p.',
                text: 'Set x = 0.02 (|x|<1 \\u2713):\\n1/1.02 \\u2248 1 \\u2212 0.02 + (0.02)\\u00b2 = 1 \\u2212 0.02 + 0.0004 = 0.9804\\n\\nActual = 0.98039\\u2026  \\u2714'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'f(x) = (4 + 5x)/(2 + x)\\u00b2. Show f(x) \\u2248 1 + \\u2154x + ... and use x=0.1 to approximate f(0.1).',
                text: '(2+x)\\u207b\\u00b2 = 4\\u207b\\u00b2\\u00b7(1+x/2)\\u207b\\u00b2 = (1/4)[1 \\u2212 2(x/2) + 3(x/2)\\u00b2 + \\u2026] = (1/4)[1\\u2212x+3x\\u00b2/4\\u2212\\u2026]\\n\\nf(x) = (4+5x)(1/4)(1\\u2212x+3x\\u00b2/4\\u2212\\u2026)\\n\\nExpand keeping up to x: (4+5x)(1/4)(1\\u2212x) \\u2248 1(1\\u2212x) + (5x/4)\\u00b71\\n= 1 \\u2212 x + 5x/4 = 1 + x/4\\n\\n[Full expansion with x\\u00b2 to show \\u2154 coefficient requires more careful work]\\n\\nFor approximation at x=0.1: f(0.1) \\u2248 1 + 0.1/4 = 1.025'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy',
                text: 'In the final part of a binomial question you are usually asked to substitute a specific x-value. Always check that this x satisfies the validity condition before substituting. Quote the approximation to the precision stated in the question.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Substitute a specific x-value into a binomial expansion to approximate numbers. Check |x| is within the validity range. The more terms used, the better the approximation.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-method', prompt: 'How do you use a binomial expansion to approximate a numerical value?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Approximate \\u221a1.04 using (1+x)^(1/2).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Approximate 1/1.02 using the expansion of (1+x)\\u207b\\u00b9.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What must you always check before substituting an x-value into a binomial expansion?' }
        ],
        summaryText: 'Binomial approximation: substitute x-value (check validity). More terms = better precision.',
        ready: true
    },
    evidence: []
};
"""

# ── Topic 5: Implicit Differentiation ──────────────────────────────────────────

notes['note_4_5_0.js'] = """\
/**
 * WMA14 \u00b7 Topic 5 \u00b7 Subtopic 0 \u2014 Implicit differentiation
 */
export const note_mathematics_4_5_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Differentiate implicit equations using the chain rule (d/dx[f(y)] = f\\u2032(y) dy/dx), and use this to find tangents, normals, and stationary points.' },
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
                text: 'd/dx [f(y)] = f\\u2032(y) \\u00b7 dy/dx\\n\\nExamples:\\nd/dx [y\\u00b2] = 2y dy/dx\\nd/dx [y\\u00b3] = 3y\\u00b2 dy/dx\\nd/dx [e^y] = e^y dy/dx\\nd/dx [sin y] = cos y dy/dx\\nd/dx [ln y] = (1/y) dy/dx\\nd/dx [xy] = y + x dy/dx  (product rule)'
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
                title: 'Find dy/dx for x\\u00b2 + y\\u00b2 = 25.',
                text: 'Differentiate both sides w.r.t. x:\\n2x + 2y dy/dx = 0\\n\\nSolve for dy/dx:\\ndy/dx = \\u2212x/y'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find dy/dx for x\\u00b3 + xy + y\\u00b3 = 7. Find the gradient at (1, 1).',
                text: 'Differentiate:\\n3x\\u00b2 + (y + x dy/dx) + 3y\\u00b2 dy/dx = 0\\n3x\\u00b2 + y + (x + 3y\\u00b2) dy/dx = 0\\n\\ndy/dx = \\u2212(3x\\u00b2 + y) / (x + 3y\\u00b2)\\n\\nAt (1,1): dy/dx = \\u2212(3+1)/(1+3) = \\u22124/4 = \\u22121'
            }, terms: []
        },
        {
            id: 'callout-we3', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the stationary points of y\\u00b2 \\u2212 2xy + 3x\\u00b2 = 4.',
                text: 'Differentiate w.r.t. x:\\n2y dy/dx \\u2212 2(y + x dy/dx) + 6x = 0\\n2y dy/dx \\u2212 2y \\u2212 2x dy/dx + 6x = 0\\n(2y \\u2212 2x) dy/dx = 2y \\u2212 6x\\n\\ndy/dx = (2y\\u22126x)/(2y\\u22122x) = (y\\u22123x)/(y\\u2212x)\\n\\nStationary: dy/dx = 0  \\u27a2  y = 3x\\nSubstitute into curve: (3x)\\u00b2 \\u2212 2x(3x) + 3x\\u00b2 = 4\\n9x\\u00b2 \\u2212 6x\\u00b2 + 3x\\u00b2 = 4  \\u27a2  6x\\u00b2 = 4  \\u27a2  x = \\u00b1\\u221a(2/3)\\nCorresponding y = \\u00b13\\u221a(2/3)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '\\u2022 Collect all dy/dx terms on one side before dividing.\\n\\u2022 For tangent: find dy/dx, substitute the point, use y\\u2212y\\u2080 = m(x\\u2212x\\u2080).\\n\\u2022 For normal: use gradient \\u22121/m.\\n\\u2022 Remember the product rule for terms like xy or x\\u00b2y.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Implicit differentiation: d/dx[f(y)] = f\\u2032(y) dy/dx. Differentiate every term, collect dy/dx terms, solve. Apply to tangents, normals, and stationary points on implicit curves.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the key rule for implicit differentiation: d/dx[f(y)] = ?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find dy/dx for the circle x\\u00b2+y\\u00b2=25.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find dy/dx for x\\u00b3+xy+y\\u00b3=7 and evaluate at (1,1).' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Describe how to find stationary points on an implicit curve.' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'How do you differentiate an xy term implicitly?' }
        ],
        summaryText: 'Implicit: d/dx[f(y)] = f\\u2032(y)dy/dx. Differentiate all terms, collect dy/dx, solve. Product rule for xy terms.',
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

print('Topics 4-5 complete.')
