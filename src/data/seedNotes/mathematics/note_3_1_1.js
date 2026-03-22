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
                text: '\u2022 fg(x) = f(g(x)) \u2014 g is the inner function, f is the outer\n\u2022 Order matters: fg(x) \u2260 gf(x) in general\n\u2022 Domain of fg: {x in domain of g : g(x) is in domain of f}\n\u2022 ff(x) means f applied twice: f(f(x))'
            }, terms: []
        },
        {
            id: 'callout-we1', type: 'callout',
            data: {
                style: 'worked',
                title: 'f(x) = 2x + 1, g(x) = x\u00b2. Find fg(x) and gf(x).',
                text: 'fg(x) = f(g(x)) = f(x\u00b2) = 2x\u00b2 + 1\ngf(x) = g(f(x)) = g(2x + 1) = (2x + 1)\u00b2 = 4x\u00b2 + 4x + 1\n\nfg(x) \u2260 gf(x) \u2014 order matters!'
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
                title: 'f(x) = \u221ax (x \u2265 0), g(x) = x \u2212 3 (x \u2208 \u211d). Find fg(x) and its domain.',
                text: 'fg(x) = f(x \u2212 3) = \u221a(x \u2212 3)\nDomain of fg: need g(x) \u2265 0  \u2192  x \u2212 3 \u2265 0  \u2192  x \u2265 3\nDomain: x \u2265 3,  Range: fg(x) \u2265 0'
            }, terms: []
        },
        {
            id: 'callout-tip', type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip',
                text: 'Always state the domain when asked for a composite function. Substitute carefully \u2014 replace every x in the outer function with the entire inner function expression.'
            }, terms: []
        },
        {
            id: 'summary', type: 'summary',
            data: { text: 'fg(x) = f(g(x)) \u2014 apply g first, then f. Order matters: fg \u2260 gf. Domain of fg: all x in domain of g where g(x) also lies in the domain of f.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "For composite functions like fg(x), always remember that the function closest to the variable is applied first (g first, then f). Keep in mind that the domain of fg(x) is constrained by the domain of the initial function g(x)."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'p-def', prompt: 'In fg(x), which function is applied first: f or g?' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'If f(x) = 2x + 1 and g(x) = x\u00b2, find fg(x) and gf(x).' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'How do you find the domain of fg(x) = \u221a(x \u2212 3)?' },
            { id: 'c4', blockId: 'callout-key', prompt: 'Is fg(x) always equal to gf(x)? Explain.' }
        ],
        summaryText: 'fg(x) = f(g(x)) \u2014 apply g first. Order matters. Domain of fg requires g(x) to lie within the domain of f.',
        ready: true
    },
    evidence: []
};
