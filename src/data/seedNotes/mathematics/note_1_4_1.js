/**
 * Seed note: Mathematics · Unit 1 · Topic 4 · Subtopic 1
 * "Differentiation from first principles"
 */

export const note_mathematics_1_4_1 = {
    pdfPath: '/notes/mathematics/differentiation/differentiation-from-first-principles.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'State and apply the first principles definition of the derivative; differentiate kx, kx² and kx³ from first principles; understand the limit notation.' },
            terms: []
        },
        {
            id: 'h-definition',
            type: 'heading',
            data: { text: 'The First Principles Definition', level: 2 },
            terms: []
        },
        {
            id: 'p-definition',
            type: 'paragraph',
            data: { text: 'The derivative f\'(x) is defined as the limit of the gradient of a secant as the two points come together. Letting h represent the horizontal gap between the two points:' },
            terms: []
        },
        {
            id: 'key-fp',
            type: 'callout',
            data: {
                style: 'key',
                title: 'First Principles Definition',
                text: "f'(x) = lim<sub>h &rarr; 0</sub> <span style=\"font-size:1.05em\"><strong>[f(x + h) &minus; f(x)] / h</strong></span><br/><br/>This reads: the limit of [f(x+h) &minus; f(x)] divided by h, as h tends to zero."
            },
            terms: []
        },
        {
            id: 'h-notation',
            type: 'heading',
            data: { text: 'Notation for the Derivative', level: 2 },
            terms: []
        },
        {
            id: 'table-notation',
            type: 'comparisonTable',
            data: {
                headers: ['Notation', 'Used when', 'Example'],
                rows: [
                    ["f'(x)", 'Function defined as f(x)', "If f(x) = x², then f'(x) = 2x"],
                    ['dy/dx', 'Equation given as y = ...', 'If y = x³, then dy/dx = 3x²'],
                    ['d/dx( )', 'Operating on an expression', 'd/dx(5x²) = 10x']
                ],
                caption: 'Equivalent derivative notations — all mean the same thing'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'How to Differentiate from First Principles', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Write f(x + h)</strong>: substitute (x + h) for x in the original function.' },
                    { text: '<strong>Form [f(x+h) − f(x)] / h</strong>: subtract f(x) from f(x+h), place over h.' },
                    { text: '<strong>Expand and simplify</strong>: every term except those with h should cancel in the numerator.' },
                    { text: '<strong>Factorise h</strong>: cancel with the denominator.' },
                    { text: '<strong>Take the limit h → 0</strong>: substitute h = 0 in the remaining expression.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-x2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Differentiate f(x) = 3x²',
                text: 'f(x + h) = 3(x + h)² = 3x² + 6xh + 3h²<br/><br/>f(x+h) − f(x) = 3x² + 6xh + 3h² − 3x² = 6xh + 3h²<br/><br/>[f(x+h) − f(x)] / h = (6xh + 3h²) / h = 6x + 3h<br/><br/>Limit as h → 0: f\'(x) = <strong>6x</strong>'
            },
            terms: []
        },
        {
            id: 'worked-x3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Differentiate f(x) = x³',
                text: 'f(x + h) = (x + h)³ = x³ + 3x²h + 3xh² + h³<br/><br/>f(x+h) − f(x) = 3x²h + 3xh² + h³<br/><br/>Divide by h: 3x² + 3xh + h²<br/><br/>Limit as h → 0: f\'(x) = <strong>3x²</strong>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Examiners can ask for first principles proofs of kx, kx², or kx³. Write all steps in full.<br/>• After expanding f(x+h), <em>every</em> term not containing h must cancel — if they do not, check your algebra.<br/>• The phrase "show from first principles" means you cannot just use the power rule — you must show the limit.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: "f'(x) = lim_{h→0} [f(x+h) − f(x)] / h. Steps: write f(x+h) → form ratio → expand → cancel h → take limit. Notation: f'(x), dy/dx, and d/dx() are all equivalent." },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When differentiating from first principles, clearly state the limit formula and show every single step of the algebraic expansion. Cancelling the h terms before showing the fully expanded numerator is a common reason for losing method marks."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-fp', prompt: 'State the first principles definition of the derivative.' },
            { id: 'cue-2', blockId: 'worked-x2', prompt: 'Differentiate f(x) = 3x² from first principles, showing all steps.' },
            { id: 'cue-3', blockId: 'list-method', prompt: 'List the 5 steps for differentiating from first principles.' },
            { id: 'cue-4', blockId: 'table-notation', prompt: "Name two notations for the derivative and when each is used." }
        ],
        summaryText: "f'(x)=lim[f(x+h)−f(x)]/h as h→0. Expand, cancel h, then substitute h=0. Must know for kx, kx², kx³.",
        ready: true
    },
    evidence: []
};
