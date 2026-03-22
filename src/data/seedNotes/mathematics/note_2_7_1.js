/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 1
 * "Chain rule"
 */

export const note_mathematics_2_7_1 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply the chain rule to differentiate composite functions of the form f(g(x)).' },
            terms: []
        },
        {
            id: 'h-rule',
            type: 'heading',
            data: { text: 'The Chain Rule', level: 2 },
            terms: []
        },
        {
            id: 'eq-chain',
            type: 'equation',
            data: {
                html: '<span class="nb-frac"><span class="nb-num">dy</span><span class="nb-den">dx</span></span> = <span class="nb-frac"><span class="nb-num">dy</span><span class="nb-den">du</span></span> · <span class="nb-frac"><span class="nb-num">du</span><span class="nb-den">dx</span></span>',
                caption: 'Chain rule: differentiate the outer function (keeping inner unchanged), then multiply by derivative of the inner function'
            },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Chain Rule Pattern',
                text: 'For y = [f(x)]ⁿ:\n  dy/dx = n[f(x)]ⁿ⁻¹ · f\'(x)\n\nFor y = e^{f(x)}:\n  dy/dx = f\'(x) · e^{f(x)}\n\nFor y = ln(f(x)):\n  dy/dx = f\'(x) / f(x)\n\nFor y = sin(f(x)):\n  dy/dx = f\'(x) · cos(f(x))'
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
                title: 'Differentiate y = (3x² + 1)⁵.',
                text: 'Let u = 3x² + 1, so y = u⁵\n  du/dx = 6x\n  dy/du = 5u⁴\n  dy/dx = 5u⁴ · 6x = 30x(3x² + 1)⁴'
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
                title: 'Differentiate y = e^(sin x).',
                text: 'Let u = sin x, so y = eᵘ\n  du/dx = cos x\n  dy/du = eᵘ\n  dy/dx = eᵘ · cos x = cos x · e^(sin x)'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = ln(4x³ − x).',
                text: 'y = ln(f(x)) with f(x) = 4x³ − x\n  f\'(x) = 12x² − 1\n  dy/dx = f\'(x)/f(x) = (12x² − 1)/(4x³ − x)'
            },
            terms: []
        },
        {
            id: 'h-we4',
            type: 'heading',
            data: { text: 'Worked Example 4', level: 2 },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Differentiate y = sin³(x).',
                text: 'Write as y = [sin x]³ — this is a composite function.\n  Let u = sin x, y = u³\n  du/dx = cos x\n  dy/du = 3u²\n  dy/dx = 3u² · cos x = 3 sin²x cos x'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistake',
                text: 'Do NOT forget the inner derivative (the du/dx factor). For example:\n  ✗ d/dx(sin(x²)) = cos(x²)\n  ✓ d/dx(sin(x²)) = 2x cos(x²)\n\nAlways ask: "What is the inner function? Have I multiplied by its derivative?"'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Chain rule: dy/dx = (dy/du)(du/dx). Differentiate the outer function, multiply by the derivative of the inner. ln(f(x)) → f\'(x)/f(x). e^{f(x)} → f\'(x)·e^{f(x)}. Never forget the inner derivative.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "To keep the product rule organized, explicitly write down u, v, du/dx, and dv/dx before assembling the final derivative formula v(du/dx) + u(dv/dx). This structured approach minimizes algebraic slips."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-chain', prompt: 'State the chain rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = (3x² + 1)⁵ using the chain rule.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Differentiate y = ln(4x³ − x).' },
            { id: 'c4', blockId: 'callout-warning', prompt: 'What is the most common mistake when applying the chain rule?' }
        ],
        summaryText: 'Chain rule: dy/dx = (dy/du)(du/dx). d/dx[f(x)]ⁿ = nf\'(x)[f(x)]ⁿ⁻¹. d/dx ln(f(x)) = f\'(x)/f(x). d/dx e^f(x) = f\'(x)e^f(x). Never omit the inner derivative.',
        ready: true
    },
    evidence: []
};
