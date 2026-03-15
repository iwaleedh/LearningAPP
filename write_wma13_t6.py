import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

notes['note_3_6_0.js'] = """\
/**
 * WMA13 · Topic 6 · Subtopic 0 — Change of sign method
 */
export const note_mathematics_3_6_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use the change of sign method to locate and narrow down an interval containing a root of f(x) = 0.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Change of Sign Principle', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Change of Sign Theorem',
                text: 'If f is continuous on [a, b] and f(a) and f(b) have opposite signs (one positive, one negative), then f has at least one root in the interval (a, b).'
            }, terms: []
        },
        {
            id: 'p-decimal', type: 'paragraph',
            data: { text: 'Finding a root to a required number of decimal places uses decimal search (bisection). Evaluate f at the midpoint of the interval; the sign change tells you which half contains the root. Repeat until the interval is narrow enough.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Show that f(x) = x\\u00b3 \\u2212 3x + 1 has a root in (1, 2). Find it to 2 d.p.',
                text: 'f(1) = 1 \\u2212 3 + 1 = \\u22121 < 0\\nf(2) = 8 \\u2212 6 + 1 = 3 > 0  \\u2714 Sign change\\n\\nDecimal search:\\nf(1.5) = 3.375 \\u2212 4.5 + 1 = \\u22120.125 < 0  \\u2192 root in (1.5, 2)\\nf(1.6) = 4.096 \\u2212 4.8 + 1 = 0.296 > 0  \\u2192 root in (1.5, 1.6)\\nf(1.53) \\u2248 \\u22120.023 < 0  \\u2192 root in (1.53, 1.6)\\nf(1.53) and f(1.54): sign changes \\u2192 root \\u2248 1.53 (to 2 d.p.)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Showing a Root Exists',
                text: 'For exam questions that say "Show there is a root in [a, b]":\\n1. Evaluate f(a) and f(b)\\n2. State their signs (positive/negative) explicitly\\n3. State that there is a sign change\\n4. Conclude (by continuity) there is a root in the interval'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Change of sign: if f(a) < 0 and f(b) > 0 (or vice versa) for continuous f, there is a root in (a, b). Decimal search: evaluate at midpoint and repeat to narrow the interval.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the change of sign theorem.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'How do you show f(x) = x\\u00b3 \\u2212 3x + 1 has a root in (1, 2)?' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'List the 4 steps to show a root exists in an interval.' },
            { id: 'c4', blockId: 'p-decimal', prompt: 'Describe the decimal search (bisection) process.' }
        ],
        summaryText: 'Change of sign: f(a) and f(b) opposite signs, continuous f \\u21d2 root in (a, b). Decimal search: evaluate midpoint, repeat.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_6_1.js'] = """\
/**
 * WMA13 · Topic 6 · Subtopic 1 — Failure of change of sign method
 */
export const note_mathematics_3_6_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Identify and explain situations where the change of sign method fails to locate a root or gives a misleading result.' },
            terms: []
        },
        {
            id: 'h-fail', type: 'heading',
            data: { text: 'When the Change of Sign Method Fails', level: 2 }, terms: []
        },
        {
            id: 'list-fail', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Repeated root (touching root):</strong> f(x) touches the x-axis but does not cross it. f(a) and f(b) have the same sign, so no sign change is detected even though a root exists.' },
                    { text: '<strong>Discontinuity:</strong> If f is discontinuous (e.g. division by zero) in [a, b], a sign change may be detected but there may be no root \\u2014 just an asymptote.' },
                    { text: '<strong>More than one root:</strong> If the interval [a, b] contains an even number of roots, f(a) and f(b) may have the same sign, concealing the roots.' },
                    { text: '<strong>Roots very close together:</strong> Two roots close together may both be missed if the initial interval is too coarse.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Explain why change of sign fails for f(x) = (x \\u2212 2)\\u00b2 on [1, 3].',
                text: 'f(1) = (1\\u22122)\\u00b2 = 1 > 0\\nf(3) = (3\\u22122)\\u00b2 = 1 > 0\\nNo sign change, even though x = 2 is a root.\\nReason: repeated root \\u2014 the graph only touches, does not cross, the x-axis.'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Explain a false sign change for f(x) = 1/(x \\u2212 1) on [0.5, 1.5].',
                text: 'f(0.5) = 1/(0.5\\u22121) = \\u22122 < 0\\nf(1.5) = 1/(1.5\\u22121) = 2 > 0\\nSign change detected, but there is NO root \\u2014 the function has a vertical asymptote at x = 1.'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'How to Avoid Errors',
                text: 'Before applying change of sign:\\n- Check the function is continuous on [a, b]: look for denominators that could be zero\\n- Sketch a rough graph or check if a repeated root is possible\\n- If you detect a sign change, verify it is a root (not a discontinuity) by zooming in'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Change of sign fails for: repeated roots (no crossing), discontinuities (false sign change), even numbers of roots in the interval. Always check continuity before applying.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-fail', prompt: 'List three situations where the change of sign method fails.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Why does change of sign fail for f(x) = (x\\u22122)\\u00b2 on [1, 3]?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Why might a sign change occur with no actual root for 1/(x\\u22121)?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What checks should you do before applying the change of sign method?' }
        ],
        summaryText: 'Change of sign fails: repeated roots, discontinuities, even number of roots in interval. Always check for continuity first.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_6_2.js'] = """\
/**
 * WMA13 · Topic 6 · Subtopic 2 — Fixed-point iteration x = g(x)
 */
export const note_mathematics_3_6_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use fixed-point iteration to find approximate solutions to equations, and determine convergence or divergence of an iterative sequence.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Fixed-Point Iteration', level: 2 }, terms: []
        },
        {
            id: 'p-method', type: 'paragraph',
            data: { text: 'To solve f(x) = 0, rearrange into the form x = g(x). Then use the iteration x_{n+1} = g(x_{n}) starting from an initial estimate x\\u2080. If the sequence converges, the limit is a solution of f(x) = 0.' },
            terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Convergence Condition',
                text: 'The iteration x_{n+1} = g(x_{n}) converges if |g\\u2019(x)| < 1 near the root.\\nIf |g\\u2019(x)| > 1, the iteration diverges (terms move away from the root).'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve x\\u00b3 = x + 3 using x_{n+1} = (x_n + 3)^(1/3), starting x\\u2080 = 1.5.',
                text: 'x\\u2081 = (1.5 + 3)^(1/3) = (4.5)^(1/3) \\u2248 1.651\\nx\\u2082 = (1.651 + 3)^(1/3) = (4.651)^(1/3) \\u2248 1.669\\nx\\u2083 \\u2248 1.671\\nx\\u2084 \\u2248 1.672 (convergence to 1.672)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Show that x = 1.6717 is a root of x\\u00b3 \\u2212 x \\u2212 3 = 0 to 4 d.p.',
                text: 'f(1.67165) = 1.67165\\u00b3 \\u2212 1.67165 \\u2212 3 = 4.671... \\u2212 1.671... \\u2212 3 < 0\\nf(1.67175) > 0\\nSign change in (1.67165, 1.67175)  \\u2714\\nRoot = 1.6717 to 4 d.p.'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Showing Convergence / Divergence',
                text: 'To show a particular rearrangement works, differentiate g(x) and evaluate |g\\u2019(x)| near the root. If it is less than 1, the iteration converges. If greater than 1, it diverges and you should try a different rearrangement.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Fixed-point iteration: x_{n+1} = g(x_n) converges when |g\'(x)| < 1 near the root. To verify a root to n d.p., use change of sign in the interval [x \\u2212 0.5\\u00d710^{\\u2212n}, x + 0.5\\u00d710^{\\u2212n}].' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-method', prompt: 'Describe the fixed-point iteration process.' },
            { id: 'c2', blockId: 'callout-key', prompt: 'State the condition for fixed-point iteration to converge.' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Apply x_{n+1}=(x_n+3)^(1/3) twice, starting at x\\u2080=1.5.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you show that multiplying a particular rearrangement converges?' }
        ],
        summaryText: 'x_{n+1}=g(x_n) converges when |g\'(x)|<1 near root. Verify root to n d.p. by change of sign in interval around the rounded value.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_6_3.js'] = """\
/**
 * WMA13 · Topic 6 · Subtopic 3 — Newton-Raphson method
 */
export const note_mathematics_3_6_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply the Newton-Raphson method to find approximate roots of equations and explain when the method may fail.' },
            terms: []
        },
        {
            id: 'h-formula', type: 'heading',
            data: { text: 'Newton-Raphson Formula', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Newton-Raphson Iteration',
                text: 'x_{n+1} = x_n \\u2212 f(x_n) / f\\u2019(x_n)\\n\\nStarting from x\\u2080, each iteration draws the tangent at (x_n, f(x_n)) and finds where it crosses the x-axis to give x_{n+1}.'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Apply Newton-Raphson to f(x) = x\\u00b3 \\u2212 2 with x\\u2080 = 1.2.',
                text: 'f(x) = x\\u00b3 \\u2212 2, f\\u2019(x) = 3x\\u00b2\\n\\nx\\u2081 = 1.2 \\u2212 (1.2\\u00b3 \\u2212 2)/(3 \\u00b7 1.2\\u00b2)\\n= 1.2 \\u2212 (1.728 \\u2212 2)/4.32\\n= 1.2 \\u2212 (\\u22120.272)/4.32\\n= 1.2 + 0.0630 = 1.2630\\n\\nx\\u2082 = 1.2630 \\u2212 f(1.2630)/f\\u2019(1.2630) \\u2248 1.2599\\n\\nActual root: 2^(1/3) = 1.2599...'
            }, terms: []
        },
        {
            id: 'h-fail', type: 'heading',
            data: { text: 'When Newton-Raphson Fails', level: 2 }, terms: []
        },
        {
            id: 'list-fail', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>f\'(x_n) = 0:</strong> Division by zero \\u2014 tangent is horizontal and never crosses the x-axis.' },
                    { text: '<strong>Starting near a turning point:</strong> The tangent overshoots, leading to divergence or oscillation.' },
                    { text: '<strong>Multiple roots close together:</strong> The iteration may converge to a different root than intended.' }
                ]
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: 'Newton-Raphson converges very quickly (quadratic convergence). Two or three iterations usually give 4+ significant figures. In exam questions, you often need to show the formula applied once or twice, and verify the root using change of sign.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Newton-Raphson: x_{n+1} = x_n \\u2212 f(x_n)/f\\u2019(x_n). Fast convergence. Fails when f\\u2019(x_n) = 0 or near turning points. Always verify the final answer with a change of sign check.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the Newton-Raphson formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Apply Newton-Raphson once to f(x) = x\\u00b3 \\u2212 2 with x\\u2080 = 1.2.' },
            { id: 'c3', blockId: 'list-fail', prompt: 'State two reasons Newton-Raphson might fail.' },
            { id: 'c4', blockId: 'callout-key', prompt: 'What is the geometric interpretation of one Newton-Raphson step?' }
        ],
        summaryText: 'Newton-Raphson: x_{n+1} = x_n \\u2212 f(x_n)/f\'(x_n). Each step draws the tangent line to find the next approximation. Fails when f\'(x_n) = 0.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_6_4.js'] = """\
/**
 * WMA13 · Topic 6 · Subtopic 4 — Numerical methods in context
 */
export const note_mathematics_3_6_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply numerical methods (change of sign, iteration, Newton-Raphson) in context and critically compare their advantages and limitations.' },
            terms: []
        },
        {
            id: 'h-compare', type: 'heading',
            data: { text: 'Comparing Numerical Methods', level: 2 }, terms: []
        },
        {
            id: 'table-compare', type: 'comparisonTable',
            data: {
                headers: ['Method', 'Advantages', 'Limitations'],
                rows: [
                    ['Change of sign', 'Simple to use; no calculus needed; guaranteed to find a root if one exists in (a, b)', 'Slow; fails for repeated roots, discontinuities, or even numbers of roots'],
                    ['Fixed-point x=g(x)', 'Easy to implement; works well when |g\\u2019(x)| \\u226a 1', 'May diverge if |g\\u2019(x)| > 1; choice of rearrangement matters'],
                    ['Newton-Raphson', 'Very fast (quadratic) convergence; few iterations needed', 'Requires f\\u2019(x); fails if f\\u2019(x_n) = 0; may converge to wrong root']
                ],
                caption: 'Summary comparison of numerical methods'
            }, terms: []
        },
        {
            id: 'h-context', type: 'heading',
            data: { text: 'Application in Context', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A curve y = e^x \\u2212 3x is modelled. Find the x-coordinates of intersections with y = 0 to 3 d.p.',
                text: 'f(x) = e\\u02e3 \\u2212 3x, f\\u2019(x) = e\\u02e3 \\u2212 3\\n\\nSketch or evaluate: roots near x \\u2248 0.6 and x \\u2248 1.5 (approximately).\\n\\nNewton-Raphson from x\\u2080 = 0.6:\\nx\\u2081 = 0.6 \\u2212 (e^0.6 \\u2212 1.8)/(e^0.6 \\u2212 3)\\n= 0.6 \\u2212 (1.822 \\u2212 1.8)/(1.822 \\u2212 3)\\n= 0.6 \\u2212 (0.022)/(\\u22121.178) \\u2248 0.619\\nContinue to get x \\u2248 0.619'
            }, terms: []
        },
        {
            id: 'callout-check', type: 'callout',
            data: {
                style: 'key',
                title: 'Verifying a Root to n Decimal Places',
                text: 'For a root \\u03b1 to n d.p., show a sign change in [\\u03b1 \\u2212 0.5\\u00d710^{\\u2212n}, \\u03b1 + 0.5\\u00d710^{\\u2212n}].\\n\\nExample: verify \\u03b1 = 1.532 to 3 d.p.:\\nShow f(1.5315) < 0 and f(1.5325) > 0 (or vice versa).'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Strategy',
                text: 'In context questions:\\n1. Read what the model represents (population, volume, etc.)\\n2. Identify f(x) = 0 clearly\\n3. Apply the specified method step by step\\n4. Verify the answer using change of sign\\n5. Interpret the answer in context'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Numerical methods: change of sign is simple but slow; iteration x=g(x) requires |g\'| < 1; Newton-Raphson is fast but needs f\'(x). Always verify roots using change of sign in the relevant interval.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-compare', prompt: 'What are the main limitations of the Newton-Raphson method compared to change of sign?' },
            { id: 'c2', blockId: 'callout-check', prompt: 'How do you verify a root \\u03b1 = 1.532 to 3 d.p.?' },
            { id: 'c3', blockId: 'table-compare', prompt: 'When does fixed-point iteration x_{n+1}=g(x_n) diverge?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'List the 5 steps for answering a numerical methods in context question.' }
        ],
        summaryText: 'Numerical methods: change of sign (simple, slow), fixed-point iteration (needs |g\'|<1), Newton-Raphson (fast, needs f\'). Verify all roots with a change of sign check.',
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
