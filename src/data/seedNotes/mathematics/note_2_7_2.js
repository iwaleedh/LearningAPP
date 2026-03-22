/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 2
 * "Product rule"
 */

export const note_mathematics_2_7_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply the product rule to differentiate products of two functions.' },
            terms: []
        },
        {
            id: 'h-rule',
            type: 'heading',
            data: { text: 'The Product Rule', level: 2 },
            terms: []
        },
        {
            id: 'eq-product',
            type: 'equation',
            data: {
                html: '<span class="nb-frac"><span class="nb-num">d</span><span class="nb-den">dx</span></span>(uv) = u<span class="nb-frac"><span class="nb-num">dv</span><span class="nb-den">dx</span></span> + v<span class="nb-frac"><span class="nb-num">du</span><span class="nb-den">dx</span></span>',
                caption: 'Product rule: "first times derivative of second, plus second times derivative of first"'
            },
            terms: []
        },
        {
            id: 'callout-when',
            type: 'callout',
            data: {
                style: 'key',
                title: 'When to Use the Product Rule',
                text: 'Use the product rule when y = f(x) · g(x) — i.e., the expression is a product of two separate functions.\n\nExamples: x² · eˣ,  sin x · ln x,  x³ · cos(2x)\n\nLabel one factor u and the other v, then apply: (uv)\' = uv\' + vu\''
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
                title: 'Differentiate y = x³ eˣ.',
                text: 'Let u = x³  and  v = eˣ\n  du/dx = 3x²\n  dv/dx = eˣ\n\ndy/dx = u(dv/dx) + v(du/dx)\n      = x³·eˣ + eˣ·3x²\n      = eˣ(x³ + 3x²)\n      = x²eˣ(x + 3)'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = x² sin(3x).',
                text: 'Let u = x²  and  v = sin(3x)\n  du/dx = 2x\n  dv/dx = 3 cos(3x)  (chain rule)\n\ndy/dx = x²·3cos(3x) + sin(3x)·2x\n      = 3x² cos(3x) + 2x sin(3x)\n      = x(3x cos(3x) + 2 sin(3x))'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Product Rule with Chain Rule', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = e²ˣ ln(x² + 1).',
                text: 'Let u = e²ˣ  and  v = ln(x² + 1)\n  du/dx = 2e²ˣ                            (eᵏˣ rule)\n  dv/dx = 2x/(x² + 1)                    (chain rule for ln)\n\ndy/dx = e²ˣ · 2x/(x²+1) + ln(x²+1) · 2e²ˣ\n      = 2e²ˣ[x/(x²+1) + ln(x²+1)]'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Factorising the Answer',
                text: 'After applying the product rule, always try to factorise:\n• Extract the common factor (often eˣ, xⁿ, or a coefficient)\n• This is often needed to find stationary points or for neat answers\n\nQ: "What factor appears in every term?"'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Product rule: (uv)\' = uv\' + vu\'. Use when y = f(x)·g(x). Often combine with chain rule for each factor\'s derivative. Always factorise the result.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "In the quotient rule, the order of terms in the numerator is crucial because of the subtraction: v(du/dx) - u(dv/dx). Getting this backward will result in the wrong sign for the entire derivative."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-product', prompt: 'State the product rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = x³ eˣ.' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Differentiate y = x² sin(3x).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why should you factorise after applying the product rule?' }
        ],
        summaryText: '(uv)\' = uv\' + vu\'. Use for products of distinct functions. Combine with chain rule for composite factors. Always factorise — common factor often eˣ, xⁿ etc.',
        ready: true
    },
    evidence: []
};
