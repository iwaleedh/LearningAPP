/**
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
                text: 'The exponential function eˣ is defined precisely as the function that is its own derivative. This unique property makes e the natural base for calculus.\n\nFor y = eᵏˣ: let u = kx, so y = eᵘ. By chain rule: dy/dx = eᵘ · k = k eᵏˣ.'
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
                text: 'dy/dx = 3 · 2e²ˣ + 5 cos x − 2 · (1/x)\n      = 6e²ˣ + 5 cos x − 2/x'
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
                text: 'f\'(x) = −4 sin x + (−3)e⁻³ˣ − sec²x\n      = −4 sin x − 3e⁻³ˣ − sec²x'
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
                text: 'At x = 0: y = e⁰ + 0 = 1. Point: (0, 1)\n\ndy/dx = eˣ + 2x\nAt x = 0: gradient = e⁰ + 0 = 1\n\nTangent: y − 1 = 1(x − 0) → y = x + 1'
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
