#!/usr/bin/env python3
"""
Rewrites WMA11 Topic 4 notes 0–3 (Differentiation) and Topic 5 note 0 (Integration).
"""

import os

BASE = "src/data/seedNotes/mathematics/"

# ─────────────────────────────────────────────────────────────────────────────
# note_1_4_0  ·  Definition of Gradient
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_4_0 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 4 · Subtopic 0
 * "Definition of gradient"
 */

export const note_mathematics_1_4_0 = {
    pdfPath: '/notes/mathematics/differentiation/definition-of-gradient.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand the gradient of a curve as the gradient of a tangent at a specific point; distinguish tangents from secants; appreciate that the gradient of a curve changes at every point.' },
            terms: []
        },
        {
            id: 'h-gradient-curve',
            type: 'heading',
            data: { text: 'Gradient of a Curve', level: 2 },
            terms: []
        },
        {
            id: 'p-gradient-curve',
            type: 'paragraph',
            data: { text: 'Unlike a straight line (which has a single, fixed gradient), a curve has a <strong>different gradient at every point</strong>. The gradient at any particular point P is defined as the gradient of the <strong>tangent</strong> to the curve at P.' },
            terms: []
        },
        {
            id: 'key-gradient',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Gradient of a Curve at a Point',
                text: 'Gradient of curve at P = gradient of the tangent to the curve at P<br/><br/>There is exactly one tangent at each smooth point of a curve.'
            },
            terms: []
        },
        {
            id: 'h-tangent',
            type: 'heading',
            data: { text: 'Tangent vs Secant', level: 2 },
            terms: []
        },
        {
            id: 'p-tangent',
            type: 'paragraph',
            data: { text: 'A <strong>secant</strong> is a straight line through two points on a curve. As the two points get closer and closer together, the secant rotates until it becomes the <strong>tangent</strong> at the limiting point. This idea — "approaching the limit" — is the foundation of differentiation from first principles.' },
            terms: []
        },
        {
            id: 'svg-tangent',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 180" style="width:100%;max-width:320px;display:block;margin:0 auto;"><defs><marker id="ah40a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#374151"/></marker></defs><style>.la{font-family:sans-serif;font-size:10px;fill:#374151}.lp{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}</style><line x1="15" y1="90" x2="250" y2="90" stroke="#374151" stroke-width="1" marker-end="url(#ah40a)"/><line x1="40" y1="170" x2="40" y2="10" stroke="#374151" stroke-width="1" marker-end="url(#ah40a)"/><path d="M50,165 C80,165 100,130 130,80 C160,30 185,15 230,10" fill="none" stroke="#374151" stroke-width="2"/><line x1="80" y1="150" x2="210" y2="20" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="60" y1="155" x2="195" y2="30" stroke="#4f46e5" stroke-width="2"/><circle cx="130" cy="80" r="4" fill="#4f46e5"/><text x="134" y="76" class="lp">P</text><text x="135" y="30" class="la">tangent at P</text><text x="155" y="52" class="la" style="fill:#10b981">secant</text><text x="243" y="95" class="la">x</text><text x="44" y="12" class="la">y</text></svg>',
                caption: 'The secant (green) approaches the tangent (indigo) as the two points converge to P'
            },
            terms: []
        },
        {
            id: 'h-positive-negative',
            type: 'heading',
            data: { text: 'Positive, Negative and Zero Gradient', level: 2 },
            terms: []
        },
        {
            id: 'table-gradient',
            type: 'comparisonTable',
            data: {
                headers: ['Gradient', 'Curve behaviour', 'Tangent slope'],
                rows: [
                    ['m > 0', 'Rising (increasing)', 'Upward left to right'],
                    ['m = 0', 'Stationary point (max or min)', 'Horizontal'],
                    ['m < 0', 'Falling (decreasing)', 'Downward left to right']
                ],
                caption: 'Interpretation of the gradient at a point on a curve'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• A tangent exists only at <em>smooth</em> points of a curve. Corners (e.g. |x|) have no tangent.<br/>• The gradient at a stationary point is zero — this is how we find turning points using calculus.<br/>• The normal at a point is perpendicular to the tangent: gradient of normal = −1/m.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Gradient of a curve at P = gradient of tangent at P. Tangents arise as the limit of secants. m > 0: rising; m = 0: stationary; m < 0: falling. The gradient function (derivative) gives a formula for m at any x.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-gradient', prompt: 'How is the gradient of a curve at a point defined?' },
            { id: 'cue-2', blockId: 'p-tangent', prompt: 'Explain how a secant becomes a tangent using the concept of a limit.' },
            { id: 'cue-3', blockId: 'table-gradient', prompt: 'What does a gradient of zero at a point on a curve indicate?' }
        ],
        summaryText: 'Gradient of curve = gradient of tangent at that point. Tangent is the limiting position of the secant. m=0 at stationary points.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_4_1  ·  Differentiation from First Principles
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_4_1 = r"""/**
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_4_2  ·  Differentiating Powers of x
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_4_2 = r"""/**
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_4_3  ·  Gradients, Tangents and Normals
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_4_3 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 4 · Subtopic 3
 * "Gradients, tangents and normals"
 */

export const note_mathematics_1_4_3 = {
    pdfPath: '/notes/mathematics/differentiation/gradients-tangents-normals.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Find the gradient of a curve at a given point by substituting into the derivative; find equations of tangents and normals to curves; identify when a curve is increasing, decreasing, or stationary.' },
            terms: []
        },
        {
            id: 'h-gradient-point',
            type: 'heading',
            data: { text: 'Gradient at a Specific Point', level: 2 },
            terms: []
        },
        {
            id: 'p-gradient-point',
            type: 'paragraph',
            data: { text: 'To find the gradient of y = f(x) at x = a: differentiate to get f\'(x), then substitute x = a. The result f\'(a) is the gradient of the curve (and of the tangent) at that point.' },
            terms: []
        },
        {
            id: 'worked-grad',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Gradient at a Point',
                text: 'Find the gradient of y = x³ − 4x + 1 at the point where x = 2.<br/><br/>dy/dx = 3x² − 4<br/>At x = 2: dy/dx = 3(4) − 4 = 12 − 4 = <strong>8</strong>'
            },
            terms: []
        },
        {
            id: 'h-tangent',
            type: 'heading',
            data: { text: 'Equation of a Tangent', level: 2 },
            terms: []
        },
        {
            id: 'list-tangent',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Differentiate to find dy/dx.' },
                    { text: 'Substitute the x-coordinate of the given point to find the gradient m.' },
                    { text: 'Find the y-coordinate of the point by substituting x into y.' },
                    { text: 'Use point-slope form: y − y₁ = m(x − x₁).' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-tan',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Tangent',
                text: 'Find the equation of the tangent to y = x² + 3x − 2 at x = 1.<br/><br/>dy/dx = 2x + 3<br/>At x = 1: m = 2(1) + 3 = 5<br/>y-value: y = 1 + 3 − 2 = 2, so point is (1, 2)<br/>Tangent: y − 2 = 5(x − 1)<br/><strong>y = 5x − 3</strong>'
            },
            terms: []
        },
        {
            id: 'h-normal',
            type: 'heading',
            data: { text: 'Equation of a Normal', level: 2 },
            terms: []
        },
        {
            id: 'p-normal',
            type: 'paragraph',
            data: { text: 'The <strong>normal</strong> to a curve at a point is perpendicular to the tangent at that point. Since perpendicular lines have gradients whose product is −1, the gradient of the normal is −1/m (the negative reciprocal of the tangent gradient).' },
            terms: []
        },
        {
            id: 'worked-normal',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Normal',
                text: 'Using the previous example (tangent gradient = 5, point (1, 2)):<br/><br/>Normal gradient = −1/5<br/>Normal: y − 2 = (−1/5)(x − 1)<br/>5y − 10 = −x + 1<br/><strong>x + 5y − 11 = 0</strong>'
            },
            terms: []
        },
        {
            id: 'h-increase',
            type: 'heading',
            data: { text: 'Increasing and Decreasing Functions', level: 2 },
            terms: []
        },
        {
            id: 'table-increase',
            type: 'comparisonTable',
            data: {
                headers: ['Condition', 'Meaning', 'Curve behaviour'],
                rows: [
                    ["f'(x) > 0", 'Function increasing', 'Rising left to right'],
                    ["f'(x) = 0", 'Stationary point', 'Horizontal tangent (could be max, min, or inflection)'],
                    ["f'(x) < 0", 'Function decreasing', 'Falling left to right']
                ],
                caption: "Using the sign of f'(x) to describe curve behaviour"
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always find the y-coordinate of the point before applying the tangent/normal formula.<br/>• The normal is perpendicular — if the tangent has gradient 0 (horizontal tangent), the normal is vertical (x = constant).<br/>• Check: if the question asks for the equation in a specific form (e.g. ax + by + c = 0), rearrange at the end.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: "Gradient at x=a: substitute into f'(x). Tangent gradient = f'(a); equation: y−y₁=m(x−x₁). Normal gradient = −1/f'(a). f'>0 increasing, f'<0 decreasing, f'=0 stationary." },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'worked-grad', prompt: 'Find the gradient of y = x³ − 4x + 1 at x = 2.' },
            { id: 'cue-2', blockId: 'worked-tan', prompt: 'Find the tangent to y = x² + 3x − 2 at x = 1.' },
            { id: 'cue-3', blockId: 'worked-normal', prompt: 'What is the gradient of the normal if the tangent gradient is 5?' },
            { id: 'cue-4', blockId: 'table-increase', prompt: "What does it mean when f'(x) < 0?" }
        ],
        summaryText: "Differentiate, substitute x to get m. Tangent: y−y₁=m(x−x₁). Normal: −1/m perpendicular gradient. f'>0 increasing, f'=0 stationary, f'<0 decreasing.",
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_5_0  ·  Integrating Powers of x
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_5_0 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 5 · Subtopic 0
 * "Integrating powers of x"
 */

export const note_mathematics_1_5_0 = {
    pdfPath: '/notes/mathematics/integration/integrating-powers-of-x.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Integrate powers of x using the reverse power rule; include the constant of integration +C; find the constant using a given point; evaluate definite integrals to find areas.' },
            terms: []
        },
        {
            id: 'h-concept',
            type: 'heading',
            data: { text: 'Integration as Reverse Differentiation', level: 2 },
            terms: []
        },
        {
            id: 'p-concept',
            type: 'paragraph',
            data: { text: 'Integration is the <strong>inverse (reverse) of differentiation</strong>. Differentiating xⁿ gives nxⁿ⁻¹; integrating nxⁿ⁻¹ returns xⁿ. The indefinite integral of f(x) is the family of functions whose derivative is f(x). It always includes an <strong>arbitrary constant +C</strong>.' },
            terms: []
        },
        {
            id: 'h-power-rule',
            type: 'heading',
            data: { text: 'The Integration Power Rule', level: 2 },
            terms: []
        },
        {
            id: 'key-power',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Integration Power Rule',
                text: '∫xⁿ dx = xⁿ⁺¹ / (n + 1) + C &nbsp;&nbsp;&nbsp;(n ≠ −1)<br/><br/>∫axⁿ dx = axⁿ⁺¹ / (n + 1) + C<br/><br/>Rule: <strong>increase the power by 1</strong>, then <strong>divide by the new power</strong>. Always add +C for indefinite integrals.'
            },
            terms: []
        },
        {
            id: 'table-examples',
            type: 'comparisonTable',
            data: {
                headers: ['f(x)', '∫f(x)dx', 'Notes'],
                rows: [
                    ['x⁴', 'x⁵/5 + C', 'Power 4 → 5, divide by 5'],
                    ['3x²', 'x³ + C', '3 × x³/3 = x³'],
                    ['5', '5x + C', 'Constant: treat as 5x⁰'],
                    ['x⁻³', '−(1/2)x⁻² + C', 'Power −3 → −2, divide by −2'],
                    ['x^(1/2)', '(2/3)x^(3/2) + C', 'Power 1/2 → 3/2, divide by 3/2 = × 2/3']
                ],
                caption: 'Integration power rule applied to a range of terms'
            },
            terms: []
        },
        {
            id: 'worked-integral',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Integrate a Sum',
                text: 'Find ∫(4x³ − 6x + 5) dx.<br/><br/>= 4x⁴/4 − 6x²/2 + 5x + C<br/><br/>= <strong>x⁴ − 3x² + 5x + C</strong>'
            },
            terms: []
        },
        {
            id: 'h-constant',
            type: 'heading',
            data: { text: 'Finding the Constant of Integration', level: 2 },
            terms: []
        },
        {
            id: 'p-constant',
            type: 'paragraph',
            data: { text: 'C is found using a known point on the curve. Substitute the given (x, y) coordinates into the integrated expression and solve for C.' },
            terms: []
        },
        {
            id: 'worked-const',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Find C',
                text: 'Given dy/dx = 3x² − 2 and the curve passes through (2, 5).<br/><br/>y = ∫(3x² − 2) dx = x³ − 2x + C<br/><br/>Substitute (2, 5): 5 = 8 − 4 + C → C = 1<br/><br/><strong>y = x³ − 2x + 1</strong>'
            },
            terms: []
        },
        {
            id: 'h-definite',
            type: 'heading',
            data: { text: 'Definite Integration', level: 2 },
            terms: []
        },
        {
            id: 'p-definite',
            type: 'paragraph',
            data: { text: 'A <strong>definite integral</strong> has upper and lower limits. The constant C cancels. The result is a number representing the <strong>signed area</strong> between the curve, the x-axis, and the vertical lines x = a and x = b.' },
            terms: []
        },
        {
            id: 'key-definite',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Definite Integral',
                text: '∫[a to b] f(x) dx = [F(x)] from a to b = F(b) − F(a)<br/><br/>where F(x) is the antiderivative of f(x). C is not needed for definite integrals.'
            },
            terms: []
        },
        {
            id: 'worked-def',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Definite Integral',
                text: 'Evaluate ∫[1 to 3] (2x + 1) dx.<br/><br/>= [x² + x] from 1 to 3<br/>= (9 + 3) − (1 + 1)<br/>= 12 − 2 = <strong>10</strong>'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• Forgetting +C in an indefinite integral loses marks immediately.<br/>• The rule fails for n = −1: ∫x⁻¹ dx = ln|x| + C (covered at A2 level).<br/>• Area below the x-axis gives a negative definite integral — use |value| or split the integral at x-axis crossings.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: '∫axⁿ dx = axⁿ⁺¹/(n+1) + C. Add +C for indefinite integrals. Find C by substituting a known point. Definite integral = F(b) − F(a) (no C needed). Area below x-axis is negative.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-power', prompt: 'State the integration power rule. What restriction applies?' },
            { id: 'cue-2', blockId: 'worked-integral', prompt: 'Integrate 4x³ − 6x + 5.' },
            { id: 'cue-3', blockId: 'worked-const', prompt: 'Given dy/dx = 3x² − 2 and the curve passes through (2, 5), find y.' },
            { id: 'cue-4', blockId: 'worked-def', prompt: 'Evaluate ∫[1 to 3] (2x + 1) dx.' },
            { id: 'cue-5', blockId: 'callout-warning', prompt: 'Why does the integration power rule fail for n = −1?' }
        ],
        summaryText: '∫axⁿ dx = axⁿ⁺¹/(n+1)+C (n≠−1). Integrate term-by-term. Add C. Find C from a known point. Definite integral = F(b)−F(a).',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# Write
# ─────────────────────────────────────────────────────────────────────────────
files = {
    "note_1_4_0.js": NOTE_1_4_0,
    "note_1_4_1.js": NOTE_1_4_1,
    "note_1_4_2.js": NOTE_1_4_2,
    "note_1_4_3.js": NOTE_1_4_3,
    "note_1_5_0.js": NOTE_1_5_0,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"✓  Wrote {path}")

print("\nDone — 5 files rewritten.")
