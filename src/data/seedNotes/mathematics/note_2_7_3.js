/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 3
 * "Quotient rule"
 */

export const note_mathematics_2_7_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply the quotient rule to differentiate quotients of two functions.' },
            terms: []
        },
        {
            id: 'h-rule',
            type: 'heading',
            data: { text: 'The Quotient Rule', level: 2 },
            terms: []
        },
        {
            id: 'eq-quotient',
            type: 'equation',
            data: {
                html: '<span class="nb-frac"><span class="nb-num">d</span><span class="nb-den">dx</span></span>\u205F<span class="nb-frac"><span class="nb-num">u</span><span class="nb-den">v</span></span> = <span class="nb-frac"><span class="nb-num">v<span style="font-size:0.95em"> du/dx</span> − u<span style="font-size:0.95em"> dv/dx</span></span><span class="nb-den">v²</span></span>',
                caption: '"vdu minus udv, all over v²" — numerator is v·u\' − u·v\''
            },
            terms: []
        },
        {
            id: 'callout-when',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Quotient Rule vs Other Methods',
                text: 'Use the quotient rule for y = f(x)/g(x).\n\nAlternative: write y = f(x)·[g(x)]⁻¹ and apply the product rule with chain rule on [g(x)]⁻¹.\n\nBoth give the same result — the quotient rule formula is faster once memorised.\n\nMnemonic: "vdu minus udv over v squared" (v top-left, u top-right)'
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
                title: 'Differentiate y = (x² + 1)/(x − 2).',
                text: 'Let u = x² + 1  and  v = x − 2\n  du/dx = 2x,   dv/dx = 1\n\ndy/dx = (v·du/dx − u·dv/dx) / v²\n      = ((x−2)·2x − (x²+1)·1) / (x−2)²\n      = (2x² − 4x − x² − 1) / (x−2)²\n      = (x² − 4x − 1) / (x−2)²'
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
                title: 'Differentiate y = eˣ / cos x.',
                text: 'Let u = eˣ  and  v = cos x\n  du/dx = eˣ,   dv/dx = −sin x\n\ndy/dx = (cos x · eˣ − eˣ · (−sin x)) / cos²x\n      = eˣ(cos x + sin x) / cos²x'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Deriving d/dx(tan x)', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Use the quotient rule to prove d/dx(tan x) = sec²x.',
                text: 'tan x = sin x / cos x.  Let u = sin x, v = cos x:\n  du/dx = cos x,   dv/dx = −sin x\n\ndy/dx = (cos x · cos x − sin x · (−sin x)) / cos²x\n      = (cos²x + sin²x) / cos²x\n      = 1 / cos²x\n      = sec²x  ✓'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Quotient Rule Pitfalls',
                text: '• Numerator is vdu − udv (NOT udv − vdu) — getting this backwards changes the sign\n• Denominator is always v² (denominator squared)\n• The denominator v is NOT differentiated — only appears as v²'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Quotient rule: d/dx(u/v) = (v·u\' − u·v\')/v². Numerator is vdu − udv; denominator is v². Always label u and v clearly. Quotient rule can be verified by deriving d/dx(tan x) = sec²x.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-quotient', prompt: 'State the quotient rule.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = (x² + 1)/(x − 2).' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Use the quotient rule to prove that d/dx(tan x) = sec²x.' },
            { id: 'c4', blockId: 'callout-warning', prompt: 'What are the two most common mistakes when applying the quotient rule?' }
        ],
        summaryText: 'Quotient rule: (u/v)\' = (vu\' − uv\')/v². Numerator: vdu−udv. Denominator: v². Do NOT reverse the subtraction in the numerator. Verify by deriving d/dx(tan x)=sec²x.',
        ready: true
    },
    evidence: []
};
