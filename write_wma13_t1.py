import os
base = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

notes = {}

notes['note_3_1_0.js'] = """\
/**
 * WMA13 · Topic 1 · Subtopic 0 — Language of functions
 */
export const note_mathematics_3_1_0 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Understand the language of functions: domain, range, mappings and function notation.' },
            terms: []
        },
        {
            id: 'h-map', type: 'heading',
            data: { text: 'Mappings and Functions', level: 2 }, terms: []
        },
        {
            id: 'p-map', type: 'paragraph',
            data: { text: 'A <strong>mapping</strong> is a rule connecting elements of one set to another. A <strong>function</strong> is a mapping where every input gives exactly one output. Not all mappings are functions.' },
            terms: []
        },
        {
            id: 'table-types', type: 'comparisonTable',
            data: {
                headers: ['Mapping type', 'Description', 'Is a function?'],
                rows: [
                    ['One-to-one', 'Each input maps to a unique output', '\\u2713 Yes'],
                    ['Many-to-one', 'Several inputs map to the same output', '\\u2713 Yes'],
                    ['One-to-many', 'One input maps to multiple outputs', '\\u2717 No']
                ],
                caption: 'Only one-to-one and many-to-one mappings are functions'
            }, terms: []
        },
        {
            id: 'h-notation', type: 'heading',
            data: { text: 'Function Notation', level: 2 }, terms: []
        },
        {
            id: 'p-notation', type: 'paragraph',
            data: { text: 'f(x) denotes the output when x is the input. We also write f: x &#x21a6; expression. The <strong>domain</strong> is the set of allowed input values; the <strong>range</strong> (image set) is all possible output values.' },
            terms: []
        },
        {
            id: 'callout-restrict', type: 'callout',
            data: {
                style: 'key',
                title: 'Common Domain Restrictions',
                text: '\\u2022 Denominator \\u2260 0: e.g. f(x) = 1/(x \\u2212 3), domain: x \\u2260 3\\n\\u2022 Square root \\u2265 0: e.g. f(x) = \\u221a(x \\u2212 2), domain: x \\u2265 2\\n\\u2022 Logarithm > 0: e.g. f(x) = ln(x + 1), domain: x > \\u22121\\n\\u2022 No restriction stated \\u2192 assume domain is \\u211d'
            }, terms: []
        },
        {
            id: 'h-range', type: 'heading',
            data: { text: 'Finding the Range', level: 2 }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the domain and range of f(x) = \\u221a(5 \\u2212 x).',
                text: 'Domain: 5 \\u2212 x \\u2265 0  \\u2192  x \\u2264 5\\nRange: \\u221a(5 \\u2212 x) \\u2265 0 (minimum when x = 5: f(5) = 0)\\n  As x \\u2192 \\u2212\\u221e, f(x) \\u2192 \\u221e\\n\\u2192 Range: f(x) \\u2265 0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Range Tips',
                text: 'Sketch the graph \\u2014 the range equals the set of y-values on the graph. For a quadratic, complete the square to find the vertex. A restricted domain restricts the range accordingly.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'A function is a one-to-one or many-to-one mapping. Domain = allowed inputs; range = all possible outputs. Restrictions: \\u221a needs \\u2265 0, fractions need denominator \\u2260 0, ln needs argument > 0.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-types', prompt: 'Which mapping type is NOT a function: one-to-one, many-to-one, or one-to-many?' },
            { id: 'c2', blockId: 'callout-restrict', prompt: 'State the domain of f(x) = \\u221a(x \\u2212 4).' },
            { id: 'c3', blockId: 'p-notation', prompt: 'What is the difference between domain and range?' },
            { id: 'c4', blockId: 'callout-we1', prompt: 'Find the range of f(x) = \\u221a(5 \\u2212 x) for its natural domain.' }
        ],
        summaryText: 'Functions are one-to-one or many-to-one mappings. Domain = allowed inputs; range = possible outputs. Key restrictions: \\u221a \\u2265 0, denominator \\u2260 0, ln argument > 0.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_1_1.js'] = """\
/**
 * WMA13 · Topic 1 · Subtopic 1 — Composite functions
 */
export const note_mathematics_3_1_1 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Form and evaluate composite functions fg(x), and determine the domain of a composite function.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'What is a Composite Function?', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: 'A <strong>composite function</strong> applies one function after another. fg(x) means "apply g first, then apply f to the result". Formally: fg(x) = f(g(x)).' },
            terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Key Facts',
                text: '\\u2022 fg(x) = f(g(x)) \\u2014 g is the inner function, f is the outer\\n\\u2022 Order matters: fg(x) \\u2260 gf(x) in general\\n\\u2022 Domain of fg: {x in domain of g : g(x) is in domain of f}\\n\\u2022 ff(x) means f applied twice: f(f(x))'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'f(x) = 2x + 1, g(x) = x\\u00b2. Find fg(x) and gf(x).',
                text: 'fg(x) = f(g(x)) = f(x\\u00b2) = 2x\\u00b2 + 1\\ngf(x) = g(f(x)) = g(2x + 1) = (2x + 1)\\u00b2 = 4x\\u00b2 + 4x + 1\\n\\nfg(x) \\u2260 gf(x) \\u2014 order matters!'
            }, terms: []
        },
        {
            id: 'h-domain', type: 'heading',
            data: { text: 'Domain of a Composite Function', level: 2 }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'f(x) = \\u221ax (x \\u2265 0), g(x) = x \\u2212 3 (x \\u2208 \\u211d). Find fg(x) and its domain.',
                text: 'fg(x) = f(x \\u2212 3) = \\u221a(x \\u2212 3)\\nDomain of fg: need g(x) \\u2265 0  \\u2192  x \\u2212 3 \\u2265 0  \\u2192  x \\u2265 3\\nDomain: x \\u2265 3,  Range: fg(x) \\u2265 0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Always state the domain when asked for a composite function. Substitute carefully \\u2014 replace every x in the outer function with the entire inner function expression.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'fg(x) = f(g(x)) \\u2014 apply g first, then f. Order matters: fg \\u2260 gf. Domain of fg: all x in domain of g where g(x) also lies in the domain of f.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-def', prompt: 'In fg(x), which function is applied first: f or g?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'If f(x) = 2x + 1 and g(x) = x\\u00b2, find fg(x) and gf(x).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'How do you find the domain of fg(x) = \\u221a(x \\u2212 3)?' },
            { id: 'c4', blockId: 'callout-key', prompt: 'Is fg(x) always equal to gf(x)? Explain.' }
        ],
        summaryText: 'fg(x) = f(g(x)) \\u2014 apply g first. Order matters. Domain of fg requires g(x) to lie within the domain of f.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_1_2.js'] = """\
/**
 * WMA13 · Topic 1 · Subtopic 2 — Inverse functions
 */
export const note_mathematics_3_1_2 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Find inverse functions, describe the domain/range swap, and sketch inverse function graphs.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'Inverse Functions', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: 'The <strong>inverse function</strong> f\\u207b\\u00b9(x) undoes f(x). An inverse exists only when f is <strong>one-to-one</strong>. For many-to-one functions, restrict the domain first.' },
            terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Properties of Inverse Functions',
                text: '\\u2022 ff\\u207b\\u00b9(x) = f\\u207b\\u00b9f(x) = x\\n\\u2022 Domain of f\\u207b\\u00b9 = Range of f\\n\\u2022 Range of f\\u207b\\u00b9 = Domain of f\\n\\u2022 Graph of f\\u207b\\u00b9 is the reflection of f in the line y = x'
            }, terms: []
        },
        {
            id: 'h-method', type: 'heading',
            data: { text: 'Finding f\\u207b\\u00b9(x): Method', level: 2 }, terms: []
        },
        {
            id: 'list-method', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Write y = f(x)',
                    'Swap x and y: x = f(y)',
                    'Rearrange to make y the subject',
                    'Write as f\\u207b\\u00b9(x) = ...',
                    'State the domain of f\\u207b\\u00b9 (equals the range of f)'
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Find f\\u207b\\u00b9(x) for f(x) = 3x \\u2212 2, x \\u2208 \\u211d.',
                text: 'y = 3x \\u2212 2  \\u2192  swap: x = 3y \\u2212 2\\nRearrange: 3y = x + 2  \\u2192  y = (x + 2)/3\\nf\\u207b\\u00b9(x) = (x + 2)/3,  domain: x \\u2208 \\u211d\\n\\nCheck: f(f\\u207b\\u00b9(x)) = 3\\u00b7(x+2)/3 \\u2212 2 = x \\u2713'
            }, terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'f(x) = x\\u00b2 + 1 for x \\u2265 0. Find f\\u207b\\u00b9(x).',
                text: 'y = x\\u00b2 + 1  \\u2192  x = y\\u00b2 + 1  \\u2192  y\\u00b2 = x \\u2212 1\\ny = \\u221a(x \\u2212 1)  (take positive root since original domain x \\u2265 0)\\nf\\u207b\\u00b9(x) = \\u221a(x \\u2212 1),  domain: x \\u2265 1 (= range of f)'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Graph Tip',
                text: 'Draw y = x as a mirror line and reflect the graph of f. Any point where f crosses y = x is also on f\\u207b\\u00b9 (self-inverse point).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'f\\u207b\\u00b9 undoes f. Only one-to-one functions have inverses (restrict domain if needed). Method: swap x and y, rearrange. Domain of f\\u207b\\u00b9 = range of f. Graph: reflection of f in y = x.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-def', prompt: 'Why must a function be one-to-one to have an inverse?' },
            { id: 'c2', blockId: 'callout-key', prompt: 'What is the domain of f\\u207b\\u00b9 in terms of f?' },
            { id: 'c3', blockId: 'list-method', prompt: 'List the 5 steps to find an inverse function.' },
            { id: 'c4', blockId: 'callout-we1', prompt: 'Find f\\u207b\\u00b9(x) for f(x) = 3x \\u2212 2.' },
            { id: 'c5', blockId: 'callout-tip', prompt: 'How are the graphs of f and f\\u207b\\u00b9 geometrically related?' }
        ],
        summaryText: 'Inverse function f\\u207b\\u00b9 undoes f. One-to-one functions only. Domain of f\\u207b\\u00b9 = range of f. Graph: reflection in y = x.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_1_3.js'] = """\
/**
 * WMA13 · Topic 1 · Subtopic 3 — Modelling with functions
 */
export const note_mathematics_3_1_3 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply functions to model real-world situations, interpret domain restrictions in context, and make and critique assumptions.' },
            terms: []
        },
        {
            id: 'h-model', type: 'heading',
            data: { text: 'Mathematical Modelling', level: 2 }, terms: []
        },
        {
            id: 'p-model', type: 'paragraph',
            data: { text: 'A <strong>mathematical model</strong> uses a function to describe a real-world situation so predictions can be made. The domain must be restricted to physically meaningful values (e.g. t \\u2265 0 for time, L > 0 for length).' },
            terms: []
        },
        {
            id: 'h-steps', type: 'heading',
            data: { text: 'Approach to Modelling Questions', level: 2 }, terms: []
        },
        {
            id: 'list-steps', type: 'list',
            data: {
                style: 'numbered',
                items: [
                    'Read carefully \\u2014 identify what the variable represents and its units',
                    'State any simplifying assumptions',
                    'Write the function with its domain',
                    'Use the function to answer the question',
                    'Interpret the answer in context (units, realism)',
                    'Suggest refinements or limitations of the model'
                ]
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A ball is thrown upward. Height h(t) = 20t \\u2212 5t\\u00b2 metres after t seconds. Find the domain and the time it lands.',
                text: 'Domain: t \\u2265 0 and ball above ground, so h(t) \\u2265 0\\n  20t \\u2212 5t\\u00b2 = 0  \\u2192  5t(4 \\u2212 t) = 0  \\u2192  t = 0 or t = 4\\nDomain: 0 \\u2264 t \\u2264 4\\nBall lands after 4 seconds.'
            }, terms: []
        },
        {
            id: 'table-types', type: 'comparisonTable',
            data: {
                headers: ['Function type', 'Typical modelling context'],
                rows: [
                    ['Linear: ax + b', 'Fixed rate \\u2014 cost, distance, tax'],
                    ['Quadratic: ax\\u00b2 + bx + c', 'Projectile, profit/loss'],
                    ['Reciprocal: k/x', 'Inverse proportion \\u2014 speed/time, pressure/volume'],
                    ['Exponential: a\\u00b7bx', 'Population growth, radioactive decay'],
                    ['Logarithm: a ln x', 'pH, decibels, diminishing returns']
                ],
                caption: 'Match the function type to the shape of the relationship'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Critiquing Models',
                text: 'A good critique mentions: (1) an assumption that is too simplistic, (2) how the domain might be wrong, (3) how to improve accuracy (e.g. add more terms, use different function).'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Models use functions with restricted domains to represent real-world situations. State assumptions, solve within context, interpret answers, and critique/refine the model.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-model', prompt: 'Why must the domain be restricted when modelling real-world situations?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'For h(t) = 20t \\u2212 5t\\u00b2, find when the ball lands.' },
            { id: 'c3', blockId: 'table-types', prompt: 'Which function type typically models exponential growth or decay?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What three things should a good model critique include?' }
        ],
        summaryText: 'Models use restricted-domain functions. State assumptions, solve, interpret in context. Critique: identify too-simple assumptions and suggest improvements.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_1_4.js'] = """\
/**
 * WMA13 · Topic 1 · Subtopic 4 — Modulus functions: sketching graphs
 */
export const note_mathematics_3_1_4 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Sketch y = |f(x)| and y = f(|x|) by applying modulus transformations.' },
            terms: []
        },
        {
            id: 'h-def', type: 'heading',
            data: { text: 'The Modulus Function', level: 2 }, terms: []
        },
        {
            id: 'p-def', type: 'paragraph',
            data: { text: '|x| gives the non-negative magnitude of x. Definition: |x| = x if x \\u2265 0; |x| = \\u2212x if x < 0. The graph of y = |x| is a V-shape with vertex at the origin.' },
            terms: []
        },
        {
            id: 'h-yfx', type: 'heading',
            data: { text: 'Graph of y = |f(x)|', level: 2 }, terms: []
        },
        {
            id: 'p-yfx', type: 'paragraph',
            data: { text: 'Start with y = f(x). Any part of the graph <strong>below the x-axis</strong> is reflected <strong>upward</strong> (in the x-axis). Parts above remain unchanged. The result has no negative y-values.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Sketch y = |2x \\u2212 4|.',
                text: 'Sketch y = 2x \\u2212 4 first: x-intercept at x = 2, slope 2\\nFor x < 2: line is below x-axis \\u2192 reflect upward\\nFor x \\u2265 2: y = 2x \\u2212 4   For x < 2: y = \\u2212(2x\\u22124) = 4 \\u2212 2x\\nResult: V-shape, vertex at (2, 0)'
            }, terms: []
        },
        {
            id: 'h-fmodx', type: 'heading',
            data: { text: 'Graph of y = f(|x|)', level: 2 }, terms: []
        },
        {
            id: 'p-fmodx', type: 'paragraph',
            data: { text: 'Sketch y = f(x) for x \\u2265 0, then <strong>reflect this in the y-axis</strong> to create the left-hand side. The result is always symmetric about the y-axis (an even function).' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Sketch y = f(|x|) where f(x) = 2x \\u2212 4.',
                text: 'For x \\u2265 0: y = 2x \\u2212 4 (standard line)\\nFor x < 0: y = 2|x| \\u2212 4 = \\u22122x \\u2212 4 (reflect right half in y-axis)\\nResult: V-shape opening upward, vertex at (0, \\u22124)'
            }, terms: []
        },
        {
            id: 'callout-key', type: 'callout',
            data: {
                style: 'key',
                title: 'Key Difference',
                text: 'y = |f(x)|: reflect parts BELOW x-axis UPWARD \\u2014 no negative y-values\\ny = f(|x|): reflect right half in y-AXIS \\u2014 even function, symmetric about y-axis'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '|f(x)|: draw f(x) then reflect any y < 0 parts upward. f(|x|): draw f(x) for x \\u2265 0 then reflect in the y-axis. Remember which axis you are reflecting in!' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-def', prompt: 'What does |\\u22125| equal?' },
            { id: 'c2', blockId: 'p-yfx', prompt: 'For y = |f(x)|, what happens to the parts of f(x) below the x-axis?' },
            { id: 'c3', blockId: 'p-fmodx', prompt: 'What symmetry does y = f(|x|) always have?' },
            { id: 'c4', blockId: 'callout-key', prompt: 'State the key difference between y = |f(x)| and y = f(|x|).' }
        ],
        summaryText: '|f(x)|: reflect y < 0 upward. f(|x|): reflect x > 0 part in y-axis (even). Know which axis you reflect in.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_1_5.js'] = """\
/**
 * WMA13 · Topic 1 · Subtopic 5 — Modulus functions: solving equations
 */
export const note_mathematics_3_1_5 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Solve equations of the form |f(x)| = k and |f(x)| = |g(x)| algebraically and graphically.' },
            terms: []
        },
        {
            id: 'h-method1', type: 'heading',
            data: { text: 'Solving |f(x)| = k', level: 2 }, terms: []
        },
        {
            id: 'p-method1', type: 'paragraph',
            data: { text: 'If |f(x)| = k where k \\u2265 0, remove the modulus by splitting into two cases: f(x) = k <strong>and</strong> f(x) = \\u2212k. Solve each separately and always check solutions in the original equation.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve |3x \\u2212 6| = 9.',
                text: 'Case 1: 3x \\u2212 6 = 9  \\u2192  3x = 15  \\u2192  x = 5\\nCase 2: 3x \\u2212 6 = \\u22129  \\u2192  3x = \\u22123  \\u2192  x = \\u22121\\nBoth solutions check out. Solutions: x = 5 or x = \\u22121'
            }, terms: []
        },
        {
            id: 'h-method2', type: 'heading',
            data: { text: 'Solving |f(x)| = |g(x)|', level: 2 }, terms: []
        },
        {
            id: 'p-method2', type: 'paragraph',
            data: { text: 'Split into two cases: f(x) = g(x) or f(x) = \\u2212g(x). Alternatively, square both sides: (f(x))\\u00b2 = (g(x))\\u00b2. Always check for extraneous solutions introduced by squaring.' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve |x + 2| = |2x \\u2212 1|.',
                text: 'Case 1: x + 2 = 2x \\u2212 1  \\u2192  x = 3\\nCase 2: x + 2 = \\u2212(2x \\u2212 1)  \\u2192  x + 2 = \\u22122x + 1  \\u2192  3x = \\u22121  \\u2192  x = \\u22121/3\\nCheck: x=3: |5|=|5|=5 \\u2713   x=\\u22121/3: |5/3|=|\\u22125/3| \\u2713\\nSolutions: x = 3 or x = \\u22121/3'
            }, terms: []
        },
        {
            id: 'h-graphical', type: 'heading',
            data: { text: 'Graphical Interpretation', level: 2 }, terms: []
        },
        {
            id: 'p-graphical', type: 'paragraph',
            data: { text: 'Sketch y = |f(x)| and y = k on the same axes. The number of intersections equals the number of solutions. Use this to verify your algebraic answer.' },
            terms: []
        },
        {
            id: 'callout-warning', type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '\\u2022 Only setting up one case (forgetting the negative case)\\n\\u2022 Not checking solutions after squaring (can give false solutions)\\n\\u2022 |f(x)| = k has no solution if k < 0 (modulus is always \\u2265 0)'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: '|f(x)| = k: solve f(x) = k and f(x) = \\u2212k. |f(x)| = |g(x)|: solve f = g and f = \\u2212g. Always check solutions. Use a sketch to confirm the number of solutions.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-method1', prompt: 'How many equations do you form when solving |f(x)| = k?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Solve |3x \\u2212 6| = 9.' },
            { id: 'c3', blockId: 'p-method2', prompt: 'State both cases when solving |f(x)| = |g(x)|.' },
            { id: 'c4', blockId: 'callout-warning', prompt: 'Why must you check solutions after solving a modulus equation?' }
        ],
        summaryText: '|f(x)| = k \\u2192 two cases: f(x) = k and f(x) = \\u2212k. |f(x)| = |g(x)| \\u2192 f = g and f = \\u2212g. Check all solutions.',
        ready: true
    },
    evidence: []
};
"""

notes['note_3_1_6.js'] = """\
/**
 * WMA13 · Topic 1 · Subtopic 6 — Further modelling with functions
 */
export const note_mathematics_3_1_6 = {
    blocks: [
        {
            id: 'obj', type: 'objective',
            data: { text: 'Apply composite, inverse, modulus and piecewise functions in extended real-world modelling.' },
            terms: []
        },
        {
            id: 'h-piecewise', type: 'heading',
            data: { text: 'Piecewise Functions', level: 2 }, terms: []
        },
        {
            id: 'p-piecewise', type: 'paragraph',
            data: { text: 'A <strong>piecewise function</strong> uses different rules on different parts of its domain. Real-world scenarios (e.g. tiered pricing, tax brackets) often require this structure.' },
            terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'A taxi charges \\u00a32.50 for the first km, then \\u00a31.20/km after. Write a piecewise function for cost C(x) for distance x km.',
                text: 'For 0 < x \\u2264 1:  C(x) = 2.50\\nFor x > 1:  C(x) = 2.50 + 1.20(x \\u2212 1) = 1.20x + 1.30\\nDomain: x > 0'
            }, terms: []
        },
        {
            id: 'h-reciprocal', type: 'heading',
            data: { text: 'Reciprocal Functions in Modelling', level: 2 }, terms: []
        },
        {
            id: 'p-reciprocal', type: 'paragraph',
            data: { text: 'f(x) = k/x models inverse proportionality. The graph (hyperbola) has two branches; typically only the branch with positive domain values is relevant. As x \\u2192 0, the model breaks down.' },
            terms: []
        },
        {
            id: 'callout-we2', type: 'callout',
            data: {
                style: 'worked',
                title: 'Speed s = 240/t (km/h) for a 240 km journey. Find t when s = 80. Comment on the model as t \\u2192 0.',
                text: 's = 240/t, domain: t > 0 (time is positive)\\nWhen s = 80: t = 240/80 = 3 hours\\nAs t \\u2192 0: s \\u2192 \\u221e \\u2014 model predicts infinite speed, which is unrealistic (model breaks down)'
            }, terms: []
        },
        {
            id: 'h-critique', type: 'heading',
            data: { text: 'Critiquing Models', level: 2 }, terms: []
        },
        {
            id: 'list-critique', type: 'list',
            data: {
                style: 'bullet',
                items: [
                    'Identify assumptions that oversimplify (constant rate, no resistance)',
                    'Comment on domain realism (e.g. only positive values physical)',
                    'Suggest improvements (add extra terms, switch function type)',
                    'State where the model fails (extremes of the domain)'
                ]
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Always dominate your model critique with contextual reasoning. "As t \\u2192 0, speed \\u2192 \\u221e which is impossible" scores better than "the model is inaccurate".'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'Advanced modelling uses piecewise, reciprocal and composite functions. Always restrict domain to physical values. Critique: identify over-simplifying assumptions, state domain issues, suggest improvements.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-piecewise', prompt: 'What is a piecewise function and when is it used in modelling?' },
            { id: 'c2', blockId: 'callout-we2', prompt: 'For s = 240/t, find t when s = 80. What happens as t \\u2192 0?' },
            { id: 'c3', blockId: 'list-critique', prompt: 'Give two things to include when critiquing a mathematical model.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why is contextual reasoning important in model critiques?' }
        ],
        summaryText: 'Piecewise and reciprocal functions for complex scenarios. Always restrict domain. Critique: name assumptions, state where model fails, suggest refinements.',
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

print('Topic 1 complete.')
