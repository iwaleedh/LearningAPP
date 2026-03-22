/**
 * Seed note: Mathematics · Unit 1 · Topic 4 · Subtopic 2
 * "Differentiating powers of x"
 */

export const note_mathematics_1_4_2 = {
    pdfPath: '/notes/mathematics/differentiation/differentiating-powers-of-x.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply the power rule to differentiate any power of x (including negative and fractional powers); differentiate sums and differences term by term; rewrite expressions before differentiating.' },
            terms: []
        },
        {
            id: 'h-power-rule',
            type: 'heading',
            data: { text: 'The Power Rule', level: 2 },
            terms: []
        },
        {
            id: 'key-power',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Power Rule',
                text: 'd/dx (xⁿ) = nxⁿ⁻¹<br/><br/>d/dx (axⁿ) = anxⁿ⁻¹<br/><br/>d/dx (a) = 0 &nbsp;&nbsp;(derivative of a constant is zero)<br/><br/>d/dx (ax) = a &nbsp;&nbsp;(derivative of a linear term)'
            },
            terms: []
        },
        {
            id: 'h-examples',
            type: 'heading',
            data: { text: 'Examples — Positive, Negative and Fractional Powers', level: 2 },
            terms: []
        },
        {
            id: 'table-examples',
            type: 'comparisonTable',
            data: {
                headers: ['f(x)', "f'(x)", 'Notes'],
                rows: [
                    ['x⁵', '5x⁴', 'Standard positive power'],
                    ['4x³', '12x²', 'Multiply constant by power'],
                    ['x⁻²', '−2x⁻³', 'Negative power — power decreases by 1'],
                    ['3x⁻¹', '−3x⁻²', 'Same rule applies'],
                    ['x^(1/2)  (= √x)', '(1/2)x^(−1/2)', 'Fractional power — bring power down'],
                    ['2x^(3/2)', '3x^(1/2)', 'Multiply: 2 × (3/2) = 3'],
                    ['7 (constant)', '0', 'Derivative of any constant is zero'],
                    ['5x', '5', 'Linear term differentiates to its coefficient']
                ],
                caption: 'Power rule applied to various types of term'
            },
            terms: []
        },
        {
            id: 'h-rewrite',
            type: 'heading',
            data: { text: 'Rewriting Before Differentiating', level: 2 },
            terms: []
        },
        {
            id: 'p-rewrite',
            type: 'paragraph',
            data: { text: 'Before differentiating, rewrite every term as a power of x. Common rewrites:' },
            terms: []
        },
        {
            id: 'list-rewrite',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '1/xⁿ → x⁻ⁿ  (reciprocal → negative power)' },
                    { text: '√x → x^(1/2); ³√x → x^(1/3)  (root → fractional power)' },
                    { text: 'Split fractions: (x³ + 2x) / x = x² + 2 (divide through first)' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-sum',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Sum of Terms',
                text: 'Differentiate y = 3x⁴ − 5x² + 2/x + 7.<br/><br/>Rewrite: y = 3x⁴ − 5x² + 2x⁻¹ + 7<br/><br/>dy/dx = 12x³ − 10x  − 2x⁻² + 0<br/><br/><strong>dy/dx = 12x³ − 10x − 2/x²</strong>'
            },
            terms: []
        },
        {
            id: 'worked-frac',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Fractional Power',
                text: 'Differentiate f(x) = 4√x + 3/x².<br/><br/>Rewrite: f(x) = 4x^(1/2) + 3x⁻²<br/><br/>f\'(x) = 4 × (1/2)x^(−1/2) + 3 × (−2)x⁻³<br/><br/><strong>f\'(x) = 2x^(−1/2) − 6x⁻³ = 2/√x − 6/x³</strong>'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• Forgetting to bring down the sign: d/dx(x⁻²) = −2x⁻³, not +2x⁻³.<br/>• Not rewriting: cannot directly differentiate 1/x² until expressed as x⁻².<br/>• Product/quotient rule: the power rule applies term-by-term only for sums and differences — not products like x²·sin x.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'd/dx(axⁿ) = anxⁿ⁻¹. Differentiate term by term. Constants differentiate to zero. Rewrite reciprocals and roots as powers first. Bring down the power and reduce by 1.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Always rewrite expressions like roots and fractions as powers of x (e.g. 1/x^2 as x^-2) before attempting to apply the power rule. Trying to differentiate denominators directly is a frequent and fatal error."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-power', prompt: 'State the power rule and the rules for differentiating constants and linear terms.' },
            { id: 'cue-2', blockId: 'worked-sum', prompt: 'Differentiate y = 3x⁴ − 5x² + 2/x + 7.' },
            { id: 'cue-3', blockId: 'worked-frac', prompt: 'Differentiate f(x) = 4√x + 3/x². Show the rewriting step.' },
            { id: 'cue-4', blockId: 'callout-warning', prompt: 'What is d/dx(x⁻²)? What is a common mistake students make here?' }
        ],
        summaryText: 'd/dx(axⁿ)=anxⁿ⁻¹. Rewrite roots/reciprocals as fractional/negative powers first. Differentiate term-by-term. d/dx(constant)=0.',
        ready: true
    },
    evidence: []
};
