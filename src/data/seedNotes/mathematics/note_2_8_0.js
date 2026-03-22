/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 0
 * "Standard integrals"
 */

export const note_mathematics_2_8_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Integrate standard functions: eˣ, 1/x, sin x, cos x and use these to evaluate definite and indefinite integrals.' },
            terms: []
        },
        {
            id: 'h-table',
            type: 'heading',
            data: { text: 'Standard Integrals', level: 2 },
            terms: []
        },
        {
            id: 'table-std',
            type: 'comparisonTable',
            data: {
                headers: ['f(x)', '∫ f(x) dx', 'Notes'],
                rows: [
                    ['xⁿ (n ≠ −1)', 'xⁿ⁺¹/(n+1) + c', 'Power rule for integration'],
                    ['eˣ', 'eˣ + c', 'eˣ is its own integral'],
                    ['eᵏˣ', '(1/k)eᵏˣ + c', 'Divide by the inner coefficient'],
                    ['1/x', 'ln|x| + c', 'Absolute value for x ≠ 0'],
                    ['1/(kx)', '(1/k)ln|x| + c', ''],
                    ['sin x', '−cos x + c', 'Note the negative sign'],
                    ['cos x', 'sin x + c', ''],
                    ['sin(kx)', '−(1/k)cos(kx) + c', ''],
                    ['cos(kx)', '(1/k)sin(kx) + c', ''],
                    ['sec²x', 'tan x + c', 'Reverse of d/dx(tan x)=sec²x']
                ],
                caption: 'All must be memorised'
            },
            terms: []
        },
        {
            id: 'callout-plus-c',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Constant of Integration',
                text: 'Every indefinite integral must include + c.\n\nTo find c: use given conditions (e.g. "the curve passes through (1, 3)"). Substitute x = 1, y = 3 into the integrated result and solve for c.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫(3eˣ − 2/x + 4cos x) dx.',
                text: '∫(3eˣ − 2/x + 4cos x) dx\n= 3eˣ − 2 ln|x| + 4 sin x + c'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Definite Integral', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate ∫₀^(π/2) (sin x + e²ˣ) dx.',
                text: '∫₀^(π/2) (sin x + e²ˣ) dx\n= [−cos x + (1/2)e²ˣ]₀^(π/2)\n\nAt x = π/2: −cos(π/2) + (1/2)e^π = 0 + (1/2)e^π\nAt x = 0:   −cos(0)    + (1/2)e⁰ = −1 + 1/2 = −1/2\n\nResult = (1/2)e^π − (−1/2) = (1/2)e^π + 1/2 = (e^π + 1)/2'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Finding the Constant', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Given dy/dx = 2eˣ + 3 sin x and the curve passes through (0, 4), find y.',
                text: 'y = ∫(2eˣ + 3 sin x) dx = 2eˣ − 3 cos x + c\n\nAt (0, 4): 4 = 2e⁰ − 3 cos 0 + c = 2 − 3 + c = −1 + c\nc = 5\n\ny = 2eˣ − 3 cos x + 5'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Simplify Before Integrating',
                text: 'You cannot integrate products or quotients directly (unlike differentiation).\n\nFirst, expand brackets or split fractions:\n  ∫ x(x + 1) dx  →  ∫ (x² + x) dx  →  x³/3 + x²/2 + c\n  ∫ (x² + 3)/x dx  →  ∫ (x + 3/x) dx  →  x²/2 + 3 ln|x| + c'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: '∫eˣ=eˣ+c; ∫eᵏˣ=(1/k)eᵏˣ+c; ∫1/x=ln|x|+c; ∫sin x=−cos x+c; ∫cos x=sin x+c; ∫sec²x=tan x+c. Always add +c for indefinite integrals. Definite: evaluate at upper bound, subtract value at lower bound. Expand/split before integrating products or quotients.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Do not forget the constant of integration, '+ c', for indefinite integrals. A surprisingly large number of candidates drop marks on straightforward integration questions by omitting it."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-std', prompt: 'State the integrals of eˣ, 1/x, sin x, cos x, sec²x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find ∫(3eˣ − 2/x + 4cos x) dx.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Evaluate ∫₀^(π/2) (sin x + e²ˣ) dx.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How do you integrate a product like x(x + 1)?' }
        ],
        summaryText: 'Standard integrals: ∫eᵏˣ=(1/k)eᵏˣ+c; ∫1/x=ln|x|+c; ∫sin x=−cos x+c; ∫cos x=sin x+c; ∫sec²x=tan x+c. Expand/split before integrating. Definite: [F(x)] upper−lower.',
        ready: true
    },
    evidence: []
};
