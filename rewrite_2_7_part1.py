import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_7_0: Standard derivatives ────────────────────────────────────────
note_2_7_0 = """/**
 * Seed note: Mathematics · WMA12 · Topic 7 · Subtopic 0
 * "Differentiating standard functions"
 */

export const note_mathematics_2_7_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Differentiate eˣ, e^f(x), ln x, sin x, cos x, and tan x from first principles/knowledge.' },
            terms: []
        },
        {
            id: 'h-table',
            type: 'heading',
            data: { text: 'Standard Derivatives', level: 2 },
            terms: []
        },
        {
            id: 'table-std',
            type: 'comparisonTable',
            data: {
                headers: ['f(x)', 'f\'(x)', 'Notes'],
                rows: [
                    ['xⁿ', 'n xⁿ⁻¹', 'Power rule — valid for all real n'],
                    ['eˣ', 'eˣ', 'Unique — equals its own derivative'],
                    ['eᵏˣ', 'k eᵏˣ', 'Scale by the exponent multiplier'],
                    ['ln x', '1/x', 'Domain x > 0'],
                    ['sin x', 'cos x', 'x in radians'],
                    ['cos x', '−sin x', 'x in radians'],
                    ['tan x', 'sec²x', 'Valid where cos x ≠ 0'],
                    ['aˣ', 'aˣ ln a', 'a > 0, a ≠ 1 — recall aˣ = eˣ ln a']
                ],
                caption: 'Standard derivatives — all must be memorised'
            },
            terms: []
        },
        {
            id: 'callout-ex',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Why d/dx(eˣ) = eˣ',
                text: 'The exponential function eˣ is defined precisely as the function that is its own derivative. This unique property makes e the natural base for calculus.\\n\\nFor y = eᵏˣ: let u = kx, so y = eᵘ. By chain rule: dy/dx = eᵘ · k = k eᵏˣ.'
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
                title: 'Differentiate: y = 3e²ˣ + 5 sin x − 2 ln x.',
                text: 'dy/dx = 3 · 2e²ˣ + 5 cos x − 2 · (1/x)\\n      = 6e²ˣ + 5 cos x − 2/x'
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
                title: 'Differentiate: f(x) = 4cos x + e⁻³ˣ − tan x.',
                text: 'f\'(x) = −4 sin x + (−3)e⁻³ˣ − sec²x\\n      = −4 sin x − 3e⁻³ˣ − sec²x'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Finding the Equation of a Tangent', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the equation of the tangent to y = eˣ + x² at the point where x = 0.',
                text: 'At x = 0: y = e⁰ + 0 = 1. Point: (0, 1)\\n\\ndy/dx = eˣ + 2x\\nAt x = 0: gradient = e⁰ + 0 = 1\\n\\nTangent: y − 1 = 1(x − 0) → y = x + 1'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Radians',
                text: 'The derivatives of sin x, cos x, tan x are only correct when x is measured in radians. If the question says degrees, convert: x° = x · π/180 rad.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'd/dx(eˣ)=eˣ; d/dx(eᵏˣ)=k eᵏˣ; d/dx(ln x)=1/x; d/dx(sin x)=cos x; d/dx(cos x)=−sin x; d/dx(tan x)=sec²x. Always use radians for trig. The power rule d/dx(xⁿ)=nxⁿ⁻¹ works for all real n.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-std', prompt: 'State the derivatives of eˣ, eᵏˣ, ln x, sin x, cos x, and tan x.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Differentiate y = 3e²ˣ + 5 sin x − 2 ln x.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Find the tangent to y = eˣ + x² at x = 0.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'Why must x be in radians when differentiating trig functions?' }
        ],
        summaryText: 'Standard derivatives: eˣ→eˣ; eᵏˣ→keᵏˣ; ln x→1/x; sin x→cos x; cos x→−sin x; tan x→sec²x. All require x in radians for trig. Power rule: xⁿ→nxⁿ⁻¹ for all real n.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_7_1: Chain rule ───────────────────────────────────────────────────
note_2_7_1 = """/**
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
                text: 'For y = [f(x)]ⁿ:\\n  dy/dx = n[f(x)]ⁿ⁻¹ · f\'(x)\\n\\nFor y = e^{f(x)}:\\n  dy/dx = f\'(x) · e^{f(x)}\\n\\nFor y = ln(f(x)):\\n  dy/dx = f\'(x) / f(x)\\n\\nFor y = sin(f(x)):\\n  dy/dx = f\'(x) · cos(f(x))'
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
                text: 'Let u = 3x² + 1, so y = u⁵\\n  du/dx = 6x\\n  dy/du = 5u⁴\\n  dy/dx = 5u⁴ · 6x = 30x(3x² + 1)⁴'
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
                text: 'Let u = sin x, so y = eᵘ\\n  du/dx = cos x\\n  dy/du = eᵘ\\n  dy/dx = eᵘ · cos x = cos x · e^(sin x)'
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
                text: 'y = ln(f(x)) with f(x) = 4x³ − x\\n  f\'(x) = 12x² − 1\\n  dy/dx = f\'(x)/f(x) = (12x² − 1)/(4x³ − x)'
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
                text: 'Write as y = [sin x]³ — this is a composite function.\\n  Let u = sin x, y = u³\\n  du/dx = cos x\\n  dy/du = 3u²\\n  dy/dx = 3u² · cos x = 3 sin²x cos x'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistake',
                text: 'Do NOT forget the inner derivative (the du/dx factor). For example:\\n  ✗ d/dx(sin(x²)) = cos(x²)\\n  ✓ d/dx(sin(x²)) = 2x cos(x²)\\n\\nAlways ask: "What is the inner function? Have I multiplied by its derivative?"'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Chain rule: dy/dx = (dy/du)(du/dx). Differentiate the outer function, multiply by the derivative of the inner. ln(f(x)) → f\'(x)/f(x). e^{f(x)} → f\'(x)·e^{f(x)}. Never forget the inner derivative.' },
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
"""

# ─── note_2_7_2: Product rule ─────────────────────────────────────────────────
note_2_7_2 = """/**
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
                text: 'Use the product rule when y = f(x) · g(x) — i.e., the expression is a product of two separate functions.\\n\\nExamples: x² · eˣ,  sin x · ln x,  x³ · cos(2x)\\n\\nLabel one factor u and the other v, then apply: (uv)\' = uv\' + vu\''
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
                text: 'Let u = x³  and  v = eˣ\\n  du/dx = 3x²\\n  dv/dx = eˣ\\n\\ndy/dx = u(dv/dx) + v(du/dx)\\n      = x³·eˣ + eˣ·3x²\\n      = eˣ(x³ + 3x²)\\n      = x²eˣ(x + 3)'
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
                text: 'Let u = x²  and  v = sin(3x)\\n  du/dx = 2x\\n  dv/dx = 3 cos(3x)  (chain rule)\\n\\ndy/dx = x²·3cos(3x) + sin(3x)·2x\\n      = 3x² cos(3x) + 2x sin(3x)\\n      = x(3x cos(3x) + 2 sin(3x))'
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
                text: 'Let u = e²ˣ  and  v = ln(x² + 1)\\n  du/dx = 2e²ˣ                            (eᵏˣ rule)\\n  dv/dx = 2x/(x² + 1)                    (chain rule for ln)\\n\\ndy/dx = e²ˣ · 2x/(x²+1) + ln(x²+1) · 2e²ˣ\\n      = 2e²ˣ[x/(x²+1) + ln(x²+1)]'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Factorising the Answer',
                text: 'After applying the product rule, always try to factorise:\\n• Extract the common factor (often eˣ, xⁿ, or a coefficient)\\n• This is often needed to find stationary points or for neat answers\\n\\nQ: "What factor appears in every term?"'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Product rule: (uv)\' = uv\' + vu\'. Use when y = f(x)·g(x). Often combine with chain rule for each factor\'s derivative. Always factorise the result.' },
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
"""

# ─── note_2_7_3: Quotient rule ────────────────────────────────────────────────
note_2_7_3 = """/**
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
                html: '<span class="nb-frac"><span class="nb-num">d</span><span class="nb-den">dx</span></span>\\u205F<span class="nb-frac"><span class="nb-num">u</span><span class="nb-den">v</span></span> = <span class="nb-frac"><span class="nb-num">v<span style="font-size:0.95em"> du/dx</span> − u<span style="font-size:0.95em"> dv/dx</span></span><span class="nb-den">v²</span></span>',
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
                text: 'Use the quotient rule for y = f(x)/g(x).\\n\\nAlternative: write y = f(x)·[g(x)]⁻¹ and apply the product rule with chain rule on [g(x)]⁻¹.\\n\\nBoth give the same result — the quotient rule formula is faster once memorised.\\n\\nMnemonic: "vdu minus udv over v squared" (v top-left, u top-right)'
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
                text: 'Let u = x² + 1  and  v = x − 2\\n  du/dx = 2x,   dv/dx = 1\\n\\ndy/dx = (v·du/dx − u·dv/dx) / v²\\n      = ((x−2)·2x − (x²+1)·1) / (x−2)²\\n      = (2x² − 4x − x² − 1) / (x−2)²\\n      = (x² − 4x − 1) / (x−2)²'
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
                text: 'Let u = eˣ  and  v = cos x\\n  du/dx = eˣ,   dv/dx = −sin x\\n\\ndy/dx = (cos x · eˣ − eˣ · (−sin x)) / cos²x\\n      = eˣ(cos x + sin x) / cos²x'
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
                text: 'tan x = sin x / cos x.  Let u = sin x, v = cos x:\\n  du/dx = cos x,   dv/dx = −sin x\\n\\ndy/dx = (cos x · cos x − sin x · (−sin x)) / cos²x\\n      = (cos²x + sin²x) / cos²x\\n      = 1 / cos²x\\n      = sec²x  ✓'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Quotient Rule Pitfalls',
                text: '• Numerator is vdu − udv (NOT udv − vdu) — getting this backwards changes the sign\\n• Denominator is always v² (denominator squared)\\n• The denominator v is NOT differentiated — only appears as v²'
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
"""

files = {
    'note_2_7_0.js': note_2_7_0,
    'note_2_7_1.js': note_2_7_1,
    'note_2_7_2.js': note_2_7_2,
    'note_2_7_3.js': note_2_7_3,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 7 Part 1 (Differentiation notes 0–3) done.')
