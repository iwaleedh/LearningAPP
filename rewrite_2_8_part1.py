import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_8_0: Standard integrals ──────────────────────────────────────────
note_2_8_0 = """/**
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
                text: 'Every indefinite integral must include + c.\\n\\nTo find c: use given conditions (e.g. "the curve passes through (1, 3)"). Substitute x = 1, y = 3 into the integrated result and solve for c.'
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
                text: '∫(3eˣ − 2/x + 4cos x) dx\\n= 3eˣ − 2 ln|x| + 4 sin x + c'
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
                text: '∫₀^(π/2) (sin x + e²ˣ) dx\\n= [−cos x + (1/2)e²ˣ]₀^(π/2)\\n\\nAt x = π/2: −cos(π/2) + (1/2)e^π = 0 + (1/2)e^π\\nAt x = 0:   −cos(0)    + (1/2)e⁰ = −1 + 1/2 = −1/2\\n\\nResult = (1/2)e^π − (−1/2) = (1/2)e^π + 1/2 = (e^π + 1)/2'
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
                text: 'y = ∫(2eˣ + 3 sin x) dx = 2eˣ − 3 cos x + c\\n\\nAt (0, 4): 4 = 2e⁰ − 3 cos 0 + c = 2 − 3 + c = −1 + c\\nc = 5\\n\\ny = 2eˣ − 3 cos x + 5'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Simplify Before Integrating',
                text: 'You cannot integrate products or quotients directly (unlike differentiation).\\n\\nFirst, expand brackets or split fractions:\\n  ∫ x(x + 1) dx  →  ∫ (x² + x) dx  →  x³/3 + x²/2 + c\\n  ∫ (x² + 3)/x dx  →  ∫ (x + 3/x) dx  →  x²/2 + 3 ln|x| + c'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: '∫eˣ=eˣ+c; ∫eᵏˣ=(1/k)eᵏˣ+c; ∫1/x=ln|x|+c; ∫sin x=−cos x+c; ∫cos x=sin x+c; ∫sec²x=tan x+c. Always add +c for indefinite integrals. Definite: evaluate at upper bound, subtract value at lower bound. Expand/split before integrating products or quotients.' },
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
"""

# ─── note_2_8_1: Integration by substitution ─────────────────────────────────
note_2_8_1 = """/**
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
                text: '1. Choose a substitution u = g(x) — usually the inner function of a composite.\\n2. Find du/dx, rearrange to get dx = du/(du/dx).\\n3. Replace ALL x terms (including dx) with expressions in u.\\n4. Integrate with respect to u.\\n5. Back-substitute x for the indefinite case.\\n\\nFor definite integrals: change the limits using u = g(x) when x = a and x = b. Do NOT back-substitute.'
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
                text: 'Let u = x² + 3\\n  du/dx = 2x  →  dx = du/(2x)\\n\\n∫ 2x · u⁴ · du/(2x) = ∫ u⁴ du = u⁵/5 + c\\n\\nBack-substitute: = (x² + 3)⁵/5 + c'
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
                text: 'Let u = sin x\\n  du/dx = cos x  →  cos x dx = du\\n\\n∫ u³ du = u⁴/4 + c = sin⁴x/4 + c'
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
                text: 'Let u = x²\\n  du/dx = 2x  →  x dx = du/2\\n\\nChange limits: x = 0 → u = 0;  x = 1 → u = 1\\n\\n∫₀¹ e^u · du/2 = (1/2)[eᵘ]₀¹ = (1/2)(e¹ − e⁰) = (e − 1)/2'
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
                text: 'Recognise the form f\'(x)/f(x) → integrates to ln|f(x)| + c.\\n\\nHere numerator 2x = d/dx(x² + 1), so:\\n∫ (2x)/(x² + 1) dx = ln|x² + 1| + c  (= ln(x²+1) + c, since x²+1 > 0)'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Spotting the Substitution',
                text: 'The numerator is the derivative of the denominator → result is ln.\\nThe expression in brackets has a factor that is its own derivative → substitution works cleanly.\\n\\nIf a factor is "almost" the derivative (e.g. x vs 2x): adjust by a constant: ∫ x(x²+1)⁴ dx — substitute u=x²+1, du=2x dx, so x dx = du/2.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Integration by substitution: choose u = inner function, find du, replace everything, integrate in u. For definite integrals: change limits using u = g(x) — no back-substitution needed. If numerator is derivative of denominator: result is ln|denominator| + c.' },
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
"""

# ─── note_2_8_2: Integration by parts ─────────────────────────────────────────
note_2_8_2 = """/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 2
 * "Integration by parts"
 */

export const note_mathematics_2_8_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Apply integration by parts to evaluate integrals involving products of functions.' },
            terms: []
        },
        {
            id: 'h-formula',
            type: 'heading',
            data: { text: 'The Integration by Parts Formula', level: 2 },
            terms: []
        },
        {
            id: 'eq-ibp',
            type: 'equation',
            data: {
                html: '∫ u <span class="nb-frac"><span class="nb-num">dv</span><span class="nb-den">dx</span></span> dx = uv − ∫ v <span class="nb-frac"><span class="nb-num">du</span><span class="nb-den">dx</span></span> dx',
                caption: 'Integration by parts — the reverse of the product rule'
            },
            terms: []
        },
        {
            id: 'callout-liate',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Choosing u and dv/dx (LIATE Rule)',
                text: 'Choose u from whichever comes first in LIATE:\\n  L — Logarithmic functions (ln x, log x)\\n  I — Inverse trig (arcsin, arctan…)\\n  A — Algebraic (xⁿ, polynomials)\\n  T — Trigonometric (sin x, cos x)\\n  E — Exponential (eˣ, aˣ)\\n\\nThe remaining factor is dv/dx.\\n\\nKey principle: u must become simpler when differentiated; dv/dx must be easy to integrate.'
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
                title: 'Find ∫ x eˣ dx.',
                text: 'Let u = x  (algebraic — differentiates to simpler),  dv/dx = eˣ\\n  du/dx = 1,       v = eˣ\\n\\n∫ x eˣ dx = x·eˣ − ∫ eˣ·1 dx\\n           = x eˣ − eˣ + c\\n           = eˣ(x − 1) + c'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Logarithm', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫ x² ln x dx.',
                text: 'Let u = ln x  (logarithm → choice by LIATE),  dv/dx = x²\\n  du/dx = 1/x,    v = x³/3\\n\\n∫ x² ln x dx = (x³/3) ln x − ∫ (x³/3)·(1/x) dx\\n             = (x³/3) ln x − (1/3)∫ x² dx\\n             = (x³/3) ln x − x³/9 + c\\n             = (x³/9)(3 ln x − 1) + c'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Applying Twice', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find ∫ x² sin x dx.',
                text: 'First application: u = x², dv/dx = sin x\\n  du/dx = 2x,  v = −cos x\\n  ∫ x² sin x dx = −x² cos x + ∫ 2x cos x dx\\n\\nSecond application: u = 2x, dv/dx = cos x\\n  du/dx = 2,  v = sin x\\n  ∫ 2x cos x dx = 2x sin x − ∫ 2 sin x dx = 2x sin x + 2 cos x + c\\n\\nCombining:\\n  ∫ x² sin x dx = −x² cos x + 2x sin x + 2 cos x + c'
            },
            terms: []
        },
        {
            id: 'callout-ln',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Integrating ln x alone',
                text: 'Write ∫ ln x dx as ∫ ln x · 1 dx. Then let u = ln x, dv/dx = 1:\\n  du/dx = 1/x,  v = x\\n\\n∫ ln x dx = x ln x − ∫ x·(1/x) dx = x ln x − x + c = x(ln x − 1) + c'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: '∫u dv = uv − ∫v du. Choose u by LIATE: Logarithm > Inverse trig > Algebraic > Trig > Exponential. The remaining factor is dv/dx. May need to apply twice (for x²·trig/exp). ∫ln x dx = x(ln x − 1) + c.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-ibp', prompt: 'State the integration by parts formula.' },
            { id: 'c2', blockId: 'callout-liate', prompt: 'What does LIATE stand for and how is it used?' },
            { id: 'c3', blockId: 'callout-we2', prompt: 'Find ∫ x² ln x dx.' },
            { id: 'c4', blockId: 'callout-ln', prompt: 'How do you integrate ln x using integration by parts?' }
        ],
        summaryText: '∫u dv/dx dx = uv − ∫v du/dx dx. LIATE for choosing u. Apply twice for xⁿ·trig or xⁿ·eˣ. ∫ln x dx = x(ln x − 1) + c.',
        ready: true
    },
    evidence: []
};
"""

files = {
    'note_2_8_0.js': note_2_8_0,
    'note_2_8_1.js': note_2_8_1,
    'note_2_8_2.js': note_2_8_2,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 8 Part 1 (Integration notes 0–2) done.')
