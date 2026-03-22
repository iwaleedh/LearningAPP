/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 1
 * "Integration by substitution"
 */

export const note_mathematics_2_8_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use integration by substitution to evaluate integrals, including definite integrals with changed limits.' },
            terms: []
        },
        {
            id: 'h-idea',
            type: 'heading',
            data: { text: 'The Method', level: 2 },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Steps for Integration by Substitution',
                text: '1. Choose a substitution u = g(x) — usually the inner function of a composite.\n2. Find du/dx, rearrange to get dx = du/(du/dx).\n3. Replace ALL x terms (including dx) with expressions in u.\n4. Integrate with respect to u.\n5. Back-substitute x for the indefinite case.\n\nFor definite integrals: change the limits using u = g(x) when x = a and x = b. Do NOT back-substitute.'
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
                title: 'Find ∫ 2x(x² + 3)⁴ dx.',
                text: 'Let u = x² + 3\n  du/dx = 2x  →  dx = du/(2x)\n\n∫ 2x · u⁴ · du/(2x) = ∫ u⁴ du = u⁵/5 + c\n\nBack-substitute: = (x² + 3)⁵/5 + c'
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
                title: 'Find ∫ cos x · sin³x dx.',
                text: 'Let u = sin x\n  du/dx = cos x  →  cos x dx = du\n\n∫ u³ du = u⁴/4 + c = sin⁴x/4 + c'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Definite Integral with Changed Limits', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Evaluate ∫₀¹ xe^(x²) dx.',
                text: 'Let u = x²\n  du/dx = 2x  →  x dx = du/2\n\nChange limits: x = 0 → u = 0;  x = 1 → u = 1\n\n∫₀¹ e^u · du/2 = (1/2)[eᵘ]₀¹ = (1/2)(e¹ − e⁰) = (e − 1)/2'
            },
            terms: []
        },
        {
            id: 'h-we4',
            type: 'heading',
            data: { text: 'Worked Example 4: Reverse Chain Rule', level: 2 },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫ (2x)/(x² + 1) dx.',
                text: 'Recognise the form f\'(x)/f(x) → integrates to ln|f(x)| + c.\n\nHere numerator 2x = d/dx(x² + 1), so:\n∫ (2x)/(x² + 1) dx = ln|x² + 1| + c  (= ln(x²+1) + c, since x²+1 > 0)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Spotting the Substitution',
                text: 'The numerator is the derivative of the denominator → result is ln.\nThe expression in brackets has a factor that is its own derivative → substitution works cleanly.\n\nIf a factor is "almost" the derivative (e.g. x vs 2x): adjust by a constant: ∫ x(x²+1)⁴ dx — substitute u=x²+1, du=2x dx, so x dx = du/2.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Integration by substitution: choose u = inner function, find du, replace everything, integrate in u. For definite integrals: change limits using u = g(x) — no back-substitution needed. If numerator is derivative of denominator: result is ln|denominator| + c.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "In definite integration by substitution, always remember to change your current x limits of integration to match your new variable u. This saves you from having to convert your answer back in terms of x at the very end."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-key', prompt: 'State the step-by-step method for integration by substitution.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Find ∫ 2x(x² + 3)⁴ dx using the substitution u = x² + 3.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Evaluate ∫₀¹ xe^(x²) dx.' },
            { id: 'c4', blockId: 'callout-we4', prompt: 'Find ∫ (2x)/(x²+1) dx. What pattern do you recognise?' }
        ],
        summaryText: 'Substitution: u=inner, find du/dx, replace all x and dx, integrate in u, back-sub for indefinite. Definite: change limits (x=a → u=g(a)), don\'t back-sub. f\'(x)/f(x) → ln|f(x)|+c.',
        ready: true
    },
    evidence: []
};
