import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'
notes = {}

notes['note_3_2_0.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 0 — Reciprocal trig functions definitions
 */
export const note_mathematics_3_2_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Define and use the reciprocal trigonometric functions: sec\\u00a0x, cosec\\u00a0x, and cot\\u00a0x.' },
            terms: []
        },
        {
            id: 'h-defs', type: 'heading',
            data: { text: 'Definitions', level: 2 }, terms: []
        },
        {
            id: 'table-defs', type: 'comparisonTable',
            data: {
                headers: ['Function', 'Definition', 'Undefined when'],
                rows: [
                    ['sec x', '1/cos x', 'cos x = 0, i.e. x = 90\\u00b0, 270\\u00b0, ...'],
                    ['cosec x', '1/sin x', 'sin x = 0, i.e. x = 0\\u00b0, 180\\u00b0, 360\\u00b0, ...'],
                    ['cot x', 'cos x / sin x = 1/tan x', 'sin x = 0, i.e. x = 0\\u00b0, 180\\u00b0, ...']
                ],
                caption: 'Reciprocal trig functions and their excluded values'
            }, terms: []
        },
        {
            id: 'h-values', type: 'heading',
            data: { text: 'Key Values', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact values of sec 60\\u00b0, cosec 30\\u00b0 and cot 45\\u00b0.',
                text: 'sec 60\\u00b0 = 1/cos 60\\u00b0 = 1/(1/2) = 2\\ncosec 30\\u00b0 = 1/sin 30\\u00b0 = 1/(1/2) = 2\\ncot 45\\u00b0 = cos 45\\u00b0/sin 45\\u00b0 = (\\u221a2/2)/(\\u221a2/2) = 1'
            }, terms: []
        },
        {
            id: 'h-identities', type: 'heading',
            data: { text: 'Pythagorean Identities (Reciprocal Form)', level: 2 }, terms: []
        },
        {
            id: 'callout-identities', type: 'callout',
            data: {
                style: 'key',
                title: 'Three Pythagorean Identities',
                text: '1 + tan\\u00b2 x \\u2261 sec\\u00b2 x\\n1 + cot\\u00b2 x \\u2261 cosec\\u00b2 x\\nsin\\u00b2 x + cos\\u00b2 x \\u2261 1  (standard form)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Simplify: sec\\u00b2 x \\u2212 1.',
                text: 'Using 1 + tan\\u00b2 x = sec\\u00b2 x:\\nsec\\u00b2 x \\u2212 1 = tan\\u00b2 x'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Memory Aid',
                text: '"co-" functions are reciprocals of each other:\\ncosec = 1/sin,  sec = 1/cos,  cot = 1/tan\\nRemember: cosec and sec are the WRONG WAY round from what you might expect!'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'sec x = 1/cos x; cosec x = 1/sin x; cot x = cos x/sin x. Key identities: 1 + tan\\u00b2x = sec\\u00b2x and 1 + cot\\u00b2x = cosec\\u00b2x. Each is undefined at certain values.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-defs', prompt: 'Write the definitions of sec x, cosec x, and cot x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the exact value of sec 60\\u00b0.' },
            { id: 'c3', blockId: 'callout-identities', prompt: 'State the identity linking tan\\u00b2x and sec\\u00b2x.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Simplify sec\\u00b2x \\u2212 1.' }
        ],
        summaryText: 'sec = 1/cos, cosec = 1/sin, cot = cos/sin. Identities: 1 + tan\\u00b2x = sec\\u00b2x; 1 + cot\\u00b2x = cosec\\u00b2x.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_1.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 1 — Inverse trig functions
 */
export const note_mathematics_3_2_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Understand and use arcsin, arccos, and arctan: their restricted domains, ranges, and graphs.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'Inverse Trigonometric Functions', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: 'Because sin, cos, and tan are not one-to-one over all of \\u211d, we restrict their domains before defining inverses. The inverse functions are written arcsin (or sin\\u207b\\u00b9), arccos, arctan.' },
            terms: []
        },
        {
            id: 'table-inv', type: 'comparisonTable',
            data: {
                headers: ['Function', 'Restricted domain', 'Range (output)'],
                rows: [
                    ['arcsin x', '\\u22121 \\u2264 x \\u2264 1', '\\u2212\\u03c0/2 \\u2264 y \\u2264 \\u03c0/2'],
                    ['arccos x', '\\u22121 \\u2264 x \\u2264 1', '0 \\u2264 y \\u2264 \\u03c0'],
                    ['arctan x', 'x \\u2208 \\u211d', '\\u2212\\u03c0/2 < y < \\u03c0/2']
                ],
                caption: 'Principal value ranges for inverse trig functions (radians)'
            }, terms: []
        },
        {
            id: 'h-properties', type: 'heading',
            data: { text: 'Key Properties', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Identities',
                text: 'arcsin(sin x) = x for x \\u2208 [\\u2212\\u03c0/2, \\u03c0/2]\\narccos(cos x) = x for x \\u2208 [0, \\u03c0]\\narctan(tan x) = x for x \\u2208 (\\u2212\\u03c0/2, \\u03c0/2)\\n\\narcsin(\\u2212x) = \\u2212arcsin x  (odd function)\\narccos(\\u2212x) = \\u03c0 \\u2212 arccos x'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact values of arcsin(1/2), arccos(0), arctan(1).',
                text: 'arcsin(1/2) = \\u03c0/6  (since sin \\u03c0/6 = 1/2 and \\u03c0/6 \\u2208 [\\u2212\\u03c0/2, \\u03c0/2])\\narccos(0) = \\u03c0/2  (since cos \\u03c0/2 = 0 and \\u03c0/2 \\u2208 [0, \\u03c0])\\narctan(1) = \\u03c0/4  (since tan \\u03c0/4 = 1 and \\u03c0/4 \\u2208 (\\u2212\\u03c0/2, \\u03c0/2))'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Graph Tip',
                text: 'Each inverse trig graph is the reflection of the original (restricted) trig graph in y = x.\\narctan has horizontal asymptotes at y = \\u03c0/2 and y = \\u2212\\u03c0/2.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'arcsin: domain [\\u22121,1], range [\\u2212\\u03c0/2, \\u03c0/2]. arccos: domain [\\u22121,1], range [0,\\u03c0]. arctan: domain \\u211d, range (\\u2212\\u03c0/2, \\u03c0/2). Graphs are reflections of restricted trig graphs in y=x.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-inv', prompt: 'State the range of arccos x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find the exact value of arctan(1) in radians.' },
            { id: 'c3', blockId: 'callout-key', prompt: 'Why do arcsin, arccos, arctan have restricted domains?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What are the asymptotes of y = arctan x?' }
        ],
        summaryText: 'Inverse trig functions have restricted domains. arcsin: [\\u2212\\u03c0/2,\\u03c0/2]. arccos: [0,\\u03c0]. arctan: (\\u2212\\u03c0/2,\\u03c0/2). Graphs reflect trig graphs in y=x.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_2.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 2 — Small angle approximations
 */
export const note_mathematics_3_2_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply small angle approximations for sin \\u03b8, cos \\u03b8, and tan \\u03b8 when \\u03b8 is small and in radians.' },
            terms: []
        },
        {
            id: 'h-approx', type: 'heading',
            data: { text: 'Small Angle Approximations', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Approximations (\\u03b8 in radians, \\u03b8 small)',
                text: 'sin \\u03b8 \\u2248 \\u03b8\\ntan \\u03b8 \\u2248 \\u03b8\\ncos \\u03b8 \\u2248 1 \\u2212 \\u03b8\\u00b2/2\\n\\nValid when \\u03b8 is close to 0 (\\u03b8 must be in radians!)'
            }, terms: []
        },
        {
            id: 'h-derive', type: 'heading',
            data: { text: 'Why These Work', level: 2 }, terms: []
        },
        {
            id: 'p-derive', type: 'paragraph',
            data: { text: 'These approximations come from the first terms of the Maclaurin series expansions of sin, cos, and tan. As \\u03b8 \\u2192 0, the higher-order terms become negligible, so the approximations become exact in the limit.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Show that for small \\u03b8: (1 \\u2212 cos 2\\u03b8)/\\u03b8 sin \\u03b8 \\u2248 2.',
                text: 'cos 2\\u03b8 \\u2248 1 \\u2212 (2\\u03b8)\\u00b2/2 = 1 \\u2212 2\\u03b8\\u00b2\\nso 1 \\u2212 cos 2\\u03b8 \\u2248 2\\u03b8\\u00b2\\nsin \\u03b8 \\u2248 \\u03b8\\n\\nNumerator/denominator = 2\\u03b8\\u00b2 / (\\u03b8 \\u00b7 \\u03b8) = 2\\u03b8\\u00b2/\\u03b8\\u00b2 = 2  \\u2713'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Estimate sin(0.05) and cos(0.1) using small angle approximations.',
                text: 'sin(0.05) \\u2248 0.05\\n  (Actual: 0.04998 \\u2014 very close!)\\ncos(0.1) \\u2248 1 \\u2212 (0.1)\\u00b2/2 = 1 \\u2212 0.005 = 0.995\\n  (Actual: 0.9950 \\u2014 very close!)'
            }, terms: []
        },
        {
            id: 'callout-warning', type: 'callout',
            data: {
                style: 'warning',
                title: 'Important',
                text: '\\u03b8 MUST be in radians for these approximations to work. They are not valid for large \\u03b8.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'For small \\u03b8 (radians): sin \\u03b8 \\u2248 \\u03b8, tan \\u03b8 \\u2248 \\u03b8, cos \\u03b8 \\u2248 1 \\u2212 \\u03b8\\u00b2/2. Use to simplify limits and approximate trig expressions near zero.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the three small angle approximations.' },
            { id: 'c2', blockId: 'callout-warning', prompt: 'What condition must \\u03b8 satisfy for small angle approximations to apply?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Using small angles, show (1 \\u2212 cos 2\\u03b8)/(\\u03b8 sin \\u03b8) \\u2248 2.' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Estimate cos(0.1) using a small angle approximation.' }
        ],
        summaryText: 'sin \\u03b8 \\u2248 \\u03b8, tan \\u03b8 \\u2248 \\u03b8, cos \\u03b8 \\u2248 1 \\u2212 \\u03b8\\u00b2/2 for small \\u03b8 in radians.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_3.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 3 — Compound angle formulae
 */
export const note_mathematics_3_2_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use the compound angle formulae for sin(A\\u00b1B), cos(A\\u00b1B), and tan(A\\u00b1B) to find exact values and simplify expressions.' },
            terms: []
        },
        {
            id: 'h-formulae', type: 'heading',
            data: { text: 'Compound Angle Formulae', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Formulae (given in the formula booklet)',
                text: 'sin(A + B) = sin A cos B + cos A sin B\\nsin(A \\u2212 B) = sin A cos B \\u2212 cos A sin B\\n\\ncos(A + B) = cos A cos B \\u2212 sin A sin B\\ncos(A \\u2212 B) = cos A cos B + sin A sin B\\n\\ntan(A + B) = (tan A + tan B)/(1 \\u2212 tan A tan B)\\ntan(A \\u2212 B) = (tan A \\u2212 tan B)/(1 + tan A tan B)'
            }, terms: []
        },
        {
            id: 'h-exact', type: 'heading',
            data: { text: 'Using Formulae for Exact Values', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact value of sin 75\\u00b0.',
                text: 'sin 75\\u00b0 = sin(45\\u00b0 + 30\\u00b0)\\n= sin 45\\u00b0 cos 30\\u00b0 + cos 45\\u00b0 sin 30\\u00b0\\n= (\\u221a2/2)(\\u221a3/2) + (\\u221a2/2)(1/2)\\n= \\u221a6/4 + \\u221a2/4\\n= (\\u221a6 + \\u221a2)/4'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact value of tan 15\\u00b0.',
                text: 'tan 15\\u00b0 = tan(45\\u00b0 \\u2212 30\\u00b0)\\n= (tan 45\\u00b0 \\u2212 tan 30\\u00b0)/(1 + tan 45\\u00b0 tan 30\\u00b0)\\n= (1 \\u2212 1/\\u221a3)/(1 + 1/\\u221a3)\\n= (\\u221a3 \\u2212 1)/(\\u221a3 + 1)\\nRationalise: = (\\u221a3 \\u2212 1)\\u00b2/((\\u221a3)\\u00b2 \\u2212 1\\u00b2) = (4 \\u2212 2\\u221a3)/2 = 2 \\u2212 \\u221a3'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Strategy',
                text: 'Choose pairs A, B from {30\\u00b0, 45\\u00b0, 60\\u00b0, 90\\u00b0} whose sum or difference gives the target angle. For example: 75\\u00b0 = 45\\u00b0 + 30\\u00b0; 15\\u00b0 = 45\\u00b0 \\u2212 30\\u00b0; 105\\u00b0 = 60\\u00b0 + 45\\u00b0.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Compound angle formulae expand sin(A\\u00b1B), cos(A\\u00b1B), tan(A\\u00b1B). Key pattern: sin uses mixed sin/cos; cos uses matching functions with sign change. Use to find exact values at non-standard angles.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the formula for sin(A + B).' },
            { id: 'c2', blockId: 'callout-key', prompt: 'State the formula for cos(A \\u2212 B).' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find the exact value of sin 75\\u00b0 using compound angle formulae.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What angle pairs can you use to find sin 15\\u00b0 exactly?' }
        ],
        summaryText: 'sin(A+B) = sinA cosB + cosA sinB. cos(A+B) = cosA cosB \\u2212 sinA sinB. Use to find exact values at non-standard angles.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_4.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 4 — Double angle formulae
 */
export const note_mathematics_3_2_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use double angle formulae to simplify expressions, solve equations, and find exact values.' },
            terms: []
        },
        {
            id: 'h-formulae', type: 'heading',
            data: { text: 'Double Angle Formulae', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Double Angle Identities',
                text: 'sin 2A = 2 sin A cos A\\n\\ncos 2A = cos\\u00b2A \\u2212 sin\\u00b2A\\n       = 2cos\\u00b2A \\u2212 1\\n       = 1 \\u2212 2sin\\u00b2A\\n\\ntan 2A = 2 tan A / (1 \\u2212 tan\\u00b2A)'
            }, terms: []
        },
        {
            id: 'h-rearrange', type: 'heading',
            data: { text: 'Rearranged Forms', level: 2 }, terms: []
        },
        {
            id: 'callout-rearr', type: 'callout',
            data: {
                style: 'key',
                title: 'Useful Rearrangements (for integration etc.)',
                text: 'cos\\u00b2A = (1 + cos 2A)/2\\nsin\\u00b2A = (1 \\u2212 cos 2A)/2'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Given sin A = 3/5 (A obtuse), find sin 2A and cos 2A.',
                text: 'A obtuse \\u2192 cos A < 0\\ncos A = \\u2212\\u221a(1 \\u2212 9/25) = \\u22124/5\\n\\nsin 2A = 2 sin A cos A = 2(3/5)(\\u22124/5) = \\u221224/25\\ncos 2A = 1 \\u2212 2sin\\u00b2A = 1 \\u2212 2(9/25) = 7/25'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve sin 2x = sin x for 0 \\u2264 x \\u2264 2\\u03c0.',
                text: 'sin 2x = sin x\\n2 sin x cos x = sin x\\n2 sin x cos x \\u2212 sin x = 0\\nsin x(2 cos x \\u2212 1) = 0\\nsin x = 0 \\u2192 x = 0, \\u03c0, 2\\u03c0\\n2 cos x = 1 \\u2192 cos x = 1/2 \\u2192 x = \\u03c0/3, 5\\u03c0/3\\nSolutions: x = 0, \\u03c0/3, \\u03c0, 5\\u03c0/3, 2\\u03c0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Which Form of cos 2A to Use?',
                text: 'Choose based on what you want to eliminate:\\n\\u2022 cos\\u00b2A \\u2212 sin\\u00b2A: use when you have both\\n\\u2022 2cos\\u00b2A \\u2212 1: use to remove sin\\u00b2A\\n\\u2022 1 \\u2212 2sin\\u00b2A: use to remove cos\\u00b2A'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'sin 2A = 2 sin A cos A. cos 2A has three forms. tan 2A = 2 tan A/(1 \\u2212 tan\\u00b2A). Rearranged: sin\\u00b2A = (1 \\u2212 cos 2A)/2; cos\\u00b2A = (1 + cos 2A)/2.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State all three forms of cos 2A.' },
            { id: 'c2', blockId: 'callout-rearr', prompt: 'Express cos\\u00b2A in terms of cos 2A.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Solve sin 2x = sin x for 0 \\u2264 x \\u2264 2\\u03c0.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Which form of cos 2A would you choose to eliminate cos\\u00b2A from an expression?' }
        ],
        summaryText: 'sin 2A = 2 sinA cosA. cos 2A = cos\\u00b2A \\u2212 sin\\u00b2A = 2cos\\u00b2A \\u2212 1 = 1 \\u2212 2sin\\u00b2A. Rearranged forms used for integration.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_5.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 5 — Further trig identities
 */
export const note_mathematics_3_2_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Use Pythagorean identities involving sec, cosec, and cot to simplify expressions and solve equations.' },
            terms: []
        },
        {
            id: 'h-identities', type: 'heading',
            data: { text: 'The Three Pythagorean Identities', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Pythagorean Identities',
                text: '1. sin\\u00b2x + cos\\u00b2x \\u2261 1\\n2. 1 + tan\\u00b2x \\u2261 sec\\u00b2x  (divide identity 1 by cos\\u00b2x)\\n3. 1 + cot\\u00b2x \\u2261 cosec\\u00b2x  (divide identity 1 by sin\\u00b2x)'
            }, terms: []
        },
        {
            id: 'h-proofs', type: 'heading',
            data: { text: 'Deriving Identities 2 and 3', level: 2 }, terms: []
        },
        {
            id: 'callout-derive', type: 'callout',
            data: {
                style: 'worked',
                title: 'Derive 1 + tan\\u00b2x = sec\\u00b2x from sin\\u00b2x + cos\\u00b2x = 1.',
                text: 'Divide every term by cos\\u00b2x:\\nsin\\u00b2x/cos\\u00b2x + 1 = 1/cos\\u00b2x\\ntan\\u00b2x + 1 = sec\\u00b2x \\u2713'
            }, terms: []
        },
        {
            id: 'h-applications', type: 'heading',
            data: { text: 'Applying Identities to Solve Equations', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve sec\\u00b2x \\u2212 3 tan x + 1 = 0 for 0 \\u2264 x \\u2264 2\\u03c0.',
                text: 'Replace sec\\u00b2x = 1 + tan\\u00b2x:\\n1 + tan\\u00b2x \\u2212 3 tan x + 1 = 0\\ntan\\u00b2x \\u2212 3 tan x + 2 = 0\\n(tan x \\u2212 1)(tan x \\u2212 2) = 0\\ntan x = 1 \\u2192 x = \\u03c0/4, 5\\u03c0/4\\ntan x = 2 \\u2192 x = arctan 2 \\u2248 1.107, 4.249 rad'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Simplify: (cosec\\u00b2x \\u2212 1)/cot\\u00b2x.',
                text: 'cosec\\u00b2x \\u2212 1 = cot\\u00b2x  (from identity 3)\\nSo (cosec\\u00b2x \\u2212 1)/cot\\u00b2x = cot\\u00b2x/cot\\u00b2x = 1'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Substitution Strategy',
                text: 'When you see sec\\u00b2x in an equation, substitute sec\\u00b2x = 1 + tan\\u00b2x to get a quadratic in tan x. Similarly, cosec\\u00b2x = 1 + cot\\u00b2x for equations in cot x.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '1 + tan\\u00b2x = sec\\u00b2x; 1 + cot\\u00b2x = cosec\\u00b2x. Both derived from sin\\u00b2x + cos\\u00b2x = 1. Use to replace sec\\u00b2x or cosec\\u00b2x in equations to form quadratics in tan x or cot x.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the identity linking sec\\u00b2x and tan\\u00b2x.' },
            { id: 'c2', blockId: 'callout-derive', prompt: 'How is 1 + tan\\u00b2x = sec\\u00b2x derived from sin\\u00b2x + cos\\u00b2x = 1?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Solve sec\\u00b2x \\u2212 3 tan x + 1 = 0.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What substitution converts sec\\u00b2x into a function of tan x?' }
        ],
        summaryText: '1 + tan\\u00b2x = sec\\u00b2x. 1 + cot\\u00b2x = cosec\\u00b2x. Both from dividing sin\\u00b2+cos\\u00b2=1. Use to form quadratics in tan or cot.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_6.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 6 — Harmonic form
 */
export const note_mathematics_3_2_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Express a sin x + b cos x in the form R sin(x + \\u03b1) or R cos(x + \\u03b1), and use this to find maxima, minima, and solve equations.' },
            terms: []
        },
        {
            id: 'h-form', type: 'heading',
            data: { text: 'The Harmonic Form', level: 2 }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Harmonic Form',
                text: 'a sin x + b cos x \\u2261 R sin(x + \\u03b1)\\nwhere  R = \\u221a(a\\u00b2 + b\\u00b2)  and  tan \\u03b1 = b/a\\n\\nAlternatively: a cos x + b sin x \\u2261 R cos(x \\u2212 \\u03b1)\\nwhere  R = \\u221a(a\\u00b2 + b\\u00b2)  and  tan \\u03b1 = b/a\\n\\nR is always positive; \\u03b1 \\u2208 (0, \\u03c0/2) unless a or b is negative'
            }, terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Method', level: 2 }, terms: []
        },
        {
            id: 'list-method', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Expand R sin(x + \\u03b1) = R sin x cos \\u03b1 + R cos x sin \\u03b1',
                    'Match coefficients: R cos \\u03b1 = a and R sin \\u03b1 = b',
                    'Find R: R = \\u221a(a\\u00b2 + b\\u00b2)',
                    'Find \\u03b1: tan \\u03b1 = b/a  (check quadrant carefully)'
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Write 3 sin x + 4 cos x in the form R sin(x + \\u03b1).',
                text: 'R = \\u221a(3\\u00b2 + 4\\u00b2) = \\u221a25 = 5\\ntan \\u03b1 = 4/3  \\u2192  \\u03b1 = arctan(4/3) \\u2248 0.927 rad\\n\\n3 sin x + 4 cos x = 5 sin(x + 0.927)'
            }, terms: []
        },
        {
            id: 'h-applications', type: 'heading',
            data: { text: 'Applications', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the maximum of f(x) = 3 sin x + 4 cos x and the x at which it occurs.',
                text: 'f(x) = 5 sin(x + 0.927)\\nMaximum value = R = 5  (when sin(x + 0.927) = 1)\\nx + 0.927 = \\u03c0/2  \\u2192  x = \\u03c0/2 \\u2212 0.927 \\u2248 0.644 rad'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'The maximum value of R sin(x + \\u03b1) is always R. The minimum is \\u2212R. This makes finding max/min of combined trig functions very quick once in harmonic form.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'a sin x + b cos x = R sin(x + \\u03b1) where R = \\u221a(a\\u00b2+b\\u00b2) and tan \\u03b1 = b/a. Max = R, min = \\u2212R. Use harmonic form to find maxima/minima and solve combined trig equations.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the harmonic form of a sin x + b cos x and the formulae for R and \\u03b1.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write 3 sin x + 4 cos x in the form R sin(x + \\u03b1).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'What is the maximum value of 3 sin x + 4 cos x?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What is the maximum of R sin(x + \\u03b1)?' }
        ],
        summaryText: 'a sinx + b cosx = R sin(x+\\u03b1), R = \\u221a(a\\u00b2+b\\u00b2), tan \\u03b1 = b/a. Maximum = R, minimum = \\u2212R.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_7.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 7 — Strategy for further trig equations
 */
export const note_mathematics_3_2_7 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Choose and apply appropriate trig identities to solve more complex trigonometric equations over specified intervals.' },
            terms: []
        },
        {
            id: 'h-strategy', type: 'heading',
            data: { text: 'General Strategy', level: 2 }, terms: []
        },
        {
            id: 'list-strategy', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Identify the trig functions present (sin, cos, tan, sec, cosec, cot)',
                    'Look for a single trig function to aim for \\u2014 convert others using identities',
                    'If double angles present, use double angle formulae to change to single angle',
                    'If sec/cosec/cot present, convert using Pythagorean identities',
                    'Factorise or use the quadratic formula once reduced to one variable',
                    'Find ALL solutions in the given interval, including those from all quadrants'
                ]
            }, terms: []
        },
        {
            id: 'h-we1', type: 'heading',
            data: { text: 'Example: Mixed Double and Single Angles', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve cos 2x + 3 sin x = 2 for 0 \\u2264 x \\u2264 2\\u03c0.',
                text: 'Use cos 2x = 1 \\u2212 2 sin\\u00b2x:\\n1 \\u2212 2sin\\u00b2x + 3 sin x = 2\\n\\u22122sin\\u00b2x + 3 sin x \\u2212 1 = 0\\n2sin\\u00b2x \\u2212 3 sin x + 1 = 0\\n(2 sin x \\u2212 1)(sin x \\u2212 1) = 0\\nsin x = 1/2: x = \\u03c0/6, 5\\u03c0/6\\nsin x = 1: x = \\u03c0/2\\nSolutions: x = \\u03c0/6, \\u03c0/2, 5\\u03c0/6'
            }, terms: []
        },
        {
            id: 'h-we2', type: 'heading',
            data: { text: 'Example: Reciprocal Trig', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 2 cosec\\u00b2x \\u2212 3 cot x = 5 for 0 < x < 2\\u03c0.',
                text: 'cosec\\u00b2x = 1 + cot\\u00b2x:\\n2(1 + cot\\u00b2x) \\u2212 3 cot x = 5\\n2 + 2cot\\u00b2x \\u2212 3 cot x \\u2212 5 = 0\\n2cot\\u00b2x \\u2212 3 cot x \\u2212 3 = 0\\n\\nNot factorisable \\u2014 use quadratic formula with cot x as variable:\\ncot x = (3 \\u00b1 \\u221a33)/4\\nCot x = (3+\\u221a33)/4 \\u2248 2.186 \\u2192 tan x \\u2248 0.457 \\u2192 x \\u2248 0.427, 3.569\\nCot x = (3\\u2212\\u221a33)/4 \\u2248 \\u22120.686 \\u2192 tan x \\u2248 \\u22121.458 \\u2192 x \\u2248 2.168, 5.309'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Principle',
                text: 'Never divide both sides by a trig function unless you know it is non-zero \\u2014 you could lose solutions. Factorise instead. Always state the full solution set within the given interval.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Strategy: identify target function, use identities to reduce to one trig function, factorise, and find ALL solutions in the interval. Never divide by trig functions \\u2014 factorise instead.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-strategy', prompt: 'List the 6 steps of the general strategy for solving complex trig equations.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve cos 2x + 3 sin x = 2 for 0 \\u2264 x \\u2264 2\\u03c0.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'Why should you never divide both sides of a trig equation by sin x or cos x?' }
        ],
        summaryText: 'Choose an identity to reduce to one trig function. Factorise. Find all solutions in the interval. Never divide by trig functions \\u2014 factorise instead.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_8.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 8 — Trigonometric proof
 */
export const note_mathematics_3_2_8 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Prove trigonometric identities by working from one side to the other, using known identities.' },
            terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Method for Trig Proofs', level: 2 }, terms: []
        },
        {
            id: 'list-method', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Start from ONE side only (usually the more complex side)',
                    'Work step-by-step using valid identities and algebra',
                    'Aim to reach the other side exactly',
                    'Do NOT start from both sides simultaneously',
                    'Do NOT assume what you are trying to prove is true'
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: (sin x + cos x)\\u00b2 \\u2261 1 + sin 2x.',
                text: 'LHS = (sin x + cos x)\\u00b2\\n= sin\\u00b2x + 2 sin x cos x + cos\\u00b2x\\n= (sin\\u00b2x + cos\\u00b2x) + 2 sin x cos x\\n= 1 + sin 2x  =  RHS  \\u2713  (used sin 2x = 2 sin x cos x)'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: cos 2\\u03b8/(1 + sin 2\\u03b8) \\u2261 (cos \\u03b8 \\u2212 sin \\u03b8)/(cos \\u03b8 + sin \\u03b8).',
                text: 'LHS = cos 2\\u03b8/(1 + sin 2\\u03b8)\\n= (cos\\u00b2\\u03b8 \\u2212 sin\\u00b2\\u03b8)/(1 + 2 sin\\u03b8 cos\\u03b8)\\n= (cos \\u03b8 + sin \\u03b8)(cos \\u03b8 \\u2212 sin \\u03b8) / (cos\\u00b2\\u03b8 + 2 sin\\u03b8 cos\\u03b8 + sin\\u00b2\\u03b8)\\n= (cos \\u03b8 + sin \\u03b8)(cos \\u03b8 \\u2212 sin \\u03b8) / (cos \\u03b8 + sin \\u03b8)\\u00b2\\n= (cos \\u03b8 \\u2212 sin \\u03b8)/(cos \\u03b8 + sin \\u03b8)  =  RHS  \\u2713'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Useful Techniques',
                text: '\\u2022 Convert to sin and cos if stuck\\n\\u2022 Try factorising numerators/denominators\\n\\u2022 Use sin\\u00b2x + cos\\u00b2x = 1 to substitute\\n\\u2022 Use double angle formulae to match the required form\\n\\u2022 If the RHS has a fraction, try putting the LHS over a common denominator'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trig proofs: start from the more complex side, apply known identities step-by-step, reach the other side. Never work from both sides. Never assume the result.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'list-method', prompt: 'Which side should you start from in a trig proof, and why?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Prove (sin x + cos x)\\u00b2 \\u2261 1 + sin 2x.' },
            { id: 'c3', blockId: 'callout-tip', prompt: 'Name three useful techniques when stuck on a trig proof.' }
        ],
        summaryText: 'Work from one side. Use known identities step by step. Never assume the answer. Convert to sin/cos if stuck; factorise; use Pythagorean identities.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_9.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 9 — Graphs of reciprocal and inverse trig functions
 */
export const note_mathematics_3_2_9 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Sketch and describe the graphs of sec x, cosec x, cot x, arcsin x, arccos x, and arctan x.' },
            terms: []
        },
        {
            id: 'h-recip', type: 'heading',
            data: { text: 'Graphs of Reciprocal Trig Functions', level: 2 }, terms: []
        },
        {
            id: 'table-recip', type: 'comparisonTable',
            data: {
                headers: ['Function', 'Period', 'Asymptotes at', 'Range'],
                rows: [
                    ['sec x = 1/cos x', '2\\u03c0', 'x = \\u03c0/2 + n\\u03c0', 'y \\u2264 \\u22121 or y \\u2265 1'],
                    ['cosec x = 1/sin x', '2\\u03c0', 'x = n\\u03c0', 'y \\u2264 \\u22121 or y \\u2265 1'],
                    ['cot x = cos x/sin x', '\\u03c0', 'x = n\\u03c0', 'y \\u2208 \\u211d']
                ],
                caption: 'Properties of reciprocal trig graphs'
            }, terms: []
        },
        {
            id: 'h-sketch-tips', type: 'heading',
            data: { text: 'Sketching Reciprocal Trig Graphs', level: 2 }, terms: []
        },
        {
            id: 'p-sketch', type: 'paragraph',
            data: { text: 'Start by sketching the parent function (sin, cos, or tan). Asymptotes occur where the parent function = 0. The reciprocal graph has U-shaped curves (opening up or down) between consecutive asymptotes, touching the parent function at its peaks and troughs (y = \\u00b11).' },
            terms: []
        },
        {
            id: 'h-inv', type: 'heading',
            data: { text: 'Graphs of Inverse Trig Functions', level: 2 }, terms: []
        },
        {
            id: 'table-inv', type: 'comparisonTable',
            data: {
                headers: ['Function', 'Domain', 'Range', 'Shape'],
                rows: [
                    ['arcsin x', '\\u22121 \\u2264 x \\u2264 1', '\\u2212\\u03c0/2 \\u2264 y \\u2264 \\u03c0/2', 'S-curve through origin'],
                    ['arccos x', '\\u22121 \\u2264 x \\u2264 1', '0 \\u2264 y \\u2264 \\u03c0', 'Decreasing curve'],
                    ['arctan x', 'x \\u2208 \\u211d', '\\u2212\\u03c0/2 < y < \\u03c0/2', 'S-curve, asymptotes \\u00b1\\u03c0/2']
                ],
                caption: 'Properties of inverse trig function graphs'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Key Graph Points to Mark',
                text: 'For arcsin: (\\u22121, \\u2212\\u03c0/2), (0, 0), (1, \\u03c0/2)\\nFor arccos: (\\u22121, \\u03c0), (0, \\u03c0/2), (1, 0)\\nFor arctan: horizontal asymptotes y = \\u00b1\\u03c0/2; passes through (0, 0)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'sec x and cosec x: period 2\\u03c0, range |y| \\u2265 1, U-shaped curves. cot x: period \\u03c0, all real values. arcsin, arccos, arctan: S-curves with restricted domains and ranges; arctan has asymptotes at \\u00b1\\u03c0/2.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-recip', prompt: 'Where are the asymptotes of y = cosec x?' },
            { id: 'c2', blockId: 'p-sketch', prompt: 'How do you sketch y = sec x from the graph of y = cos x?' },
            { id: 'c3', blockId: 'table-inv', prompt: 'State the domain and range of arccos x.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'State three key coordinate points on y = arcsin x.' }
        ],
        summaryText: 'sec/cosec: asymptotes where parent = 0, |y| \\u2265 1. arcsin/arccos: restricted domain [\\u22121,1]. arctan: asymptotes \\u00b1\\u03c0/2.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_2_10.js'] = """\
/**
 * WMA13 · Topic 2 · Subtopic 10 — Trigonometric modelling
 */
export const note_mathematics_3_2_10 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply trigonometric functions to model periodic real-world phenomena such as tides, temperatures, and oscillations.' },
            terms: []
        },
        {
            id: 'h-model', type: 'heading',
            data: { text: 'Trig Functions as Models', level: 2 }, terms: []
        },
        {
            id: 'p-model', type: 'paragraph',
            data: { text: 'Many real phenomena are periodic: tides, temperatures, light intensity, oscillations. These are modelled by functions of the form f(t) = A sin(\\u03c9t + \\u03c6) + k or f(t) = A cos(\\u03c9t + \\u03c6) + k.' },
            terms: []
        },
        {
            id: 'table-params', type: 'comparisonTable',
            data: {
                headers: ['Parameter', 'Meaning', 'How to find it'],
                rows: [
                    ['A (amplitude)', 'Half the range of f(t)', 'A = (max \\u2212 min)/2'],
                    ['k (vertical shift)', 'Midline of the oscillation', 'k = (max + min)/2'],
                    ['\\u03c9 (frequency)', 'Determines the period T', '\\u03c9 = 2\\u03c0/T'],
                    ['\\u03c6 (phase shift)', 'Horizontal shift', 'Determined by initial conditions']
                ],
                caption: 'Parameters of a trig model f(t) = A sin(\\u03c9t + \\u03c6) + k'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Tides at a harbour vary from 1 m to 7 m, with period 12 hours. Write a model h(t) = a sin(bt) + c for height h at time t hours (t = 0 at mean tide rising).',
                text: 'Amplitude A = (7 \\u2212 1)/2 = 3\\nMidline k = (7 + 1)/2 = 4\\nPeriod = 12 h  \\u2192  b = 2\\u03c0/12 = \\u03c0/6\\n\\nh(t) = 3 sin(\\u03c0t/6) + 4\\n\\nCheck: when t=3, h = 3 sin(\\u03c0/2) + 4 = 7 (max) \\u2713'
            }, terms: []
        },
        {
            id: 'h-use', type: 'heading',
            data: { text: 'Using the Model', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Using h(t) = 3 sin(\\u03c0t/6) + 4, find when h > 5.5 in the first 12 hours.',
                text: '3 sin(\\u03c0t/6) + 4 > 5.5\\nsin(\\u03c0t/6) > 0.5\\n\\u03c0t/6 > \\u03c0/6  and  \\u03c0t/6 < 5\\u03c0/6\\nt > 1 and t < 5\\nSo h > 5.5 for 1 < t < 5 (4 hours in the first tide cycle)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Reading off the parameters: amplitude = half the peak-to-trough range, midline = average of max and min. Always state what each parameter represents in context.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Trig models: f(t) = A sin(\\u03c9t + \\u03c6) + k. A = amplitude = (max\\u2212min)/2; k = midline = (max+min)/2; \\u03c9 = 2\\u03c0/period. Use the model to find times/values from the context.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-params', prompt: 'How do you find the amplitude A from the maximum and minimum of a model?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Write a trig model for tides varying from 1 m to 7 m with period 12 hours.' },
            { id: 'c3', blockId: 'table-params', prompt: 'If the period of a trig model is 8 hours, what is the angular frequency \\u03c9?' },
            { id: 'c4', blockId: 'callout-we2', prompt: 'Using h(t) = 3 sin(\\u03c0t/6) + 4, find when h > 5.5.' }
        ],
        summaryText: 'Trig models: A sinx(\\u03c9t)+k. A=(max\\u2212min)/2; k=(max+min)/2; \\u03c9=2\\u03c0/T. Use to find values and intervals from the context.',
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

print('Topic 2 complete.')
