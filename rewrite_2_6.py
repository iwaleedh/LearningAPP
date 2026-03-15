import os

BASE = '/Users/ibrahimwaleed/Documents/LearningAPP/src/data/seedNotes/mathematics'

# ─── note_2_6_0: Trigonometric identities ─────────────────────────────────────
note_2_6_0 = """/**
 * Seed note: Mathematics · WMA12 · Topic 6 · Subtopic 0
 * "Trigonometric identities"
 */

export const note_mathematics_2_6_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use and prove the fundamental trigonometric identities sin²θ + cos²θ = 1 and tan θ = sin θ / cos θ.' },
            terms: []
        },
        {
            id: 'h-identities',
            type: 'heading',
            data: { text: 'The Three Fundamental Identities', level: 2 },
            terms: []
        },
        {
            id: 'eq-id1',
            type: 'equation',
            data: {
                html: 'sin²θ + cos²θ = 1',
                caption: 'Pythagorean identity — comes from the unit circle (x² + y² = 1)'
            },
            terms: []
        },
        {
            id: 'eq-id2',
            type: 'equation',
            data: {
                html: 'tan θ = <span class="nb-frac"><span class="nb-num">sin θ</span><span class="nb-den">cos θ</span></span>',
                caption: 'Tangent identity (undefined when cos θ = 0)'
            },
            terms: []
        },
        {
            id: 'callout-derived',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Derived Forms of the Pythagorean Identity',
                text: 'From sin²θ + cos²θ = 1:\\n\\n  cos²θ = 1 − sin²θ\\n  sin²θ = 1 − cos²θ\\n\\nDivide through by cos²θ: 1 + tan²θ = sec²θ\\nDivide through by sin²θ: cot²θ + 1 = cosec²θ\\n\\n(sec, cosec, cot are covered in WMA12 Topic 6 fully)'
            },
            terms: []
        },
        {
            id: 'svg-unit',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 240" width="260" height="240"><defs><marker id="ah65" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><line x1="20" y1="120" x2="240" y2="120" stroke="#374151" stroke-width="1.5" marker-end="url(#ah65)"/><line x1="130" y1="15" x2="130" y2="225" stroke="#374151" stroke-width="1.5" marker-end="url(#ah65)"/><circle cx="130" cy="120" r="80" stroke="#4f46e5" stroke-width="1.8" fill="none"/><text x="232" y="133" font-size="11" fill="#374151" font-family="sans-serif">x</text><text x="138" y="18" font-size="11" fill="#374151" font-family="sans-serif">y</text><circle cx="187" cy="83" r="5" fill="#10b981"/><line x1="130" y1="120" x2="187" y2="83" stroke="#4f46e5" stroke-width="2"/><line x1="187" y1="83" x2="187" y2="120" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="130" y1="120" x2="187" y2="120" stroke="#374151" stroke-width="1.5" stroke-dasharray="4,3"/><text x="155" y="116" font-size="12" fill="#374151" font-family="sans-serif">cos θ</text><text x="192" y="105" font-size="12" fill="#374151" font-family="sans-serif">sin θ</text><text x="195" y="82" font-size="12" fill="#10b981" font-family="sans-serif">P(cos θ, sin θ)</text><path d="M 147,120 A 17,17 0 0,0 143,108" stroke="#4f46e5" stroke-width="1.2" fill="none"/><text x="153" y="113" font-size="11" fill="#4f46e5" font-family="sans-serif">θ</text><text x="60" y="200" font-size="11" fill="#4f46e5" font-family="sans-serif">radius = 1 → sin²θ + cos²θ = 1²</text></svg>',
                caption: 'Unit circle: point P at angle θ has coordinates (cos θ, sin θ), and by Pythagoras sin²θ + cos²θ = 1'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Proving an Identity', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: (sin θ + cos θ)² ≡ 1 + 2 sin θ cos θ.',
                text: 'LHS = (sin θ + cos θ)²\\n    = sin²θ + 2 sin θ cos θ + cos²θ\\n    = (sin²θ + cos²θ) + 2 sin θ cos θ\\n    = 1 + 2 sin θ cos θ  ✓ = RHS'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Simplifying Using Identities', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Simplify: (1 − cos²θ)/sin θ.',
                text: '1 − cos²θ = sin²θ  (from the Pythagorean identity)\\n\\n(1 − cos²θ)/sin θ = sin²θ / sin θ = sin θ'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Eliminating a Trig Ratio', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Given that sin θ = 3/5 and θ is acute, find the exact values of cos θ and tan θ.',
                text: 'sin²θ + cos²θ = 1\\n(3/5)² + cos²θ = 1\\n9/25 + cos²θ = 1\\ncos²θ = 16/25\\ncos θ = 4/5  (positive, since θ is acute)\\n\\ntan θ = sin θ / cos θ = (3/5)/(4/5) = 3/4'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Proof Strategy',
                text: '• Work on ONE side only (usually the more complex side).\\n• The most useful moves: replace sin²θ or cos²θ using sin²+cos²=1; replace tan θ with sin θ/cos θ; factorise.\\n• Never "move" terms across the ≡ sign when proving an identity.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Core identities: sin²θ + cos²θ = 1; tan θ = sin θ / cos θ. Derived: cos²θ = 1 − sin²θ; sin²θ = 1 − cos²θ. In proofs: work on one side, use identities to simplify, never cross-multiply. Use Pythagorean identity to find missing ratio from a given one.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-id1', prompt: 'State the Pythagorean identity and explain why it is true using the unit circle.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Prove: (sin θ + cos θ)² ≡ 1 + 2 sin θ cos θ.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'If sin θ = 3/5 (acute), find cos θ and tan θ exactly.' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'What is the main strategy when proving a trigonometric identity?' }
        ],
        summaryText: 'sin²θ+cos²θ=1. tan θ=sin θ/cos θ. Use these to simplify, prove, or find missing trig ratios. In proofs: one side only, apply identities, factorise.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_6_1: Solving trigonometric equations ──────────────────────────────
note_2_6_1 = """/**
 * Seed note: Mathematics · WMA12 · Topic 6 · Subtopic 1
 * "Solving trigonometric equations"
 */

export const note_mathematics_2_6_1 = {
    blocks: [
        {
            id: 'obj',
            data: { text: 'Solve trigonometric equations in a given interval, including those requiring use of identities.' },
            type: 'objective',
            terms: []
        },
        {
            id: 'h-exact',
            type: 'heading',
            data: { text: 'Exact Values to Know', level: 2 },
            terms: []
        },
        {
            id: 'table-exact',
            type: 'comparisonTable',
            data: {
                headers: ['θ (degrees)', 'θ (radians)', 'sin θ', 'cos θ', 'tan θ'],
                rows: [
                    ['0°', '0', '0', '1', '0'],
                    ['30°', 'π/6', '1/2', '√3/2', '1/√3'],
                    ['45°', 'π/4', '1/√2', '1/√2', '1'],
                    ['60°', 'π/3', '√3/2', '1/2', '√3'],
                    ['90°', 'π/2', '1', '0', 'undefined']
                ],
                caption: 'Exact values — must be memorised'
            },
            terms: []
        },
        {
            id: 'h-cast',
            type: 'heading',
            data: { text: 'The CAST Diagram', level: 2 },
            terms: []
        },
        {
            id: 'svg-cast',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" width="280" height="220"><line x1="140" y1="20" x2="140" y2="200" stroke="#374151" stroke-width="1.5"/><line x1="20" y1="110" x2="260" y2="110" stroke="#374151" stroke-width="1.5"/><text x="155" y="50" font-size="26" fill="#4f46e5" font-family="sans-serif" font-weight="bold">S</text><text x="75" y="50" font-size="26" fill="#4f46e5" font-family="sans-serif" font-weight="bold">A</text><text x="155" y="175" font-size="26" fill="#4f46e5" font-family="sans-serif" font-weight="bold">T</text><text x="75" y="175" font-size="26" fill="#4f46e5" font-family="sans-serif" font-weight="bold">C</text><text x="148" y="12" font-size="11" fill="#374151" font-family="sans-serif">90°</text><text x="2" y="114" font-size="11" fill="#374151" font-family="sans-serif">180°</text><text x="244" y="114" font-size="11" fill="#374151" font-family="sans-serif">0°/360°</text><text x="138" y="215" font-size="11" fill="#374151" font-family="sans-serif">270°</text><text x="40" y="100" font-size="10" fill="#374151" font-family="sans-serif">cos +</text><text x="40" y="115" font-size="10" fill="#374151" font-family="sans-serif">sin +</text><text x="40" y="130" font-size="10" fill="#374151" font-family="sans-serif">tan +</text><text x="160" y="100" font-size="10" fill="#374151" font-family="sans-serif">all +</text><text x="40" y="155" font-size="10" fill="#374151" font-family="sans-serif">tan +</text><text x="160" y="150" font-size="10" fill="#374151" font-family="sans-serif">sin +</text></svg>',
                caption: 'CAST diagram: All Sine Tangent Cosine positive in their respective quadrants'
            },
            terms: []
        },
        {
            id: 'callout-cast',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Using CAST',
                text: 'CAST (going anti-clockwise from the right):\\n• A (0°–90°): All positive\\n• S (90°–180°): Sine positive\\n• T (180°–270°): Tangent positive\\n• C (270°–360°): Cosine positive\\n\\nTo find all solutions: find the principal value θ₀ using sin⁻¹/cos⁻¹/tan⁻¹, then use symmetry to find the second solution in the interval.'
            },
            terms: []
        },
        {
            id: 'h-steps',
            type: 'heading',
            data: { text: 'Method for Solving trig f(θ) = k', level: 2 },
            terms: []
        },
        {
            id: 'list-steps',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Check the sign of k to identify which quadrants have solutions.' },
                    { text: 'Find the principal value: θ₀ = sin⁻¹(k) or cos⁻¹(k) or tan⁻¹(k).' },
                    { text: 'Use symmetry to find the second solution: for sin: π − θ₀; for cos: 360° − θ₀ (or −θ₀); for tan: θ₀ + 180°.' },
                    { text: 'Apply periodicity: add multiples of 360° (or 2π) to both solutions until outside the interval.' },
                    { text: 'List all solutions within the given interval.' }
                ]
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
                title: 'Solve sin θ = −1/2 for 0° ≤ θ ≤ 360°.',
                text: 'Principal angle: sin⁻¹(1/2) = 30°.\\nSince sin is negative: solutions in 3rd and 4th quadrants.\\n  θ = 180° + 30° = 210°\\n  θ = 360° − 30° = 330°\\n\\nSolutions: θ = 210°, 330°'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Using an Identity First', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 2cos²θ − cosθ − 1 = 0 for 0° ≤ θ ≤ 360°.',
                text: 'Let c = cos θ:\\n  2c² − c − 1 = 0\\n  (2c + 1)(c − 1) = 0\\n  c = −1/2 or c = 1\\n\\nFor cos θ = −1/2: solutions in 2nd and 3rd quadrants\\n  θ = 120°, 240°\\n\\nFor cos θ = 1:\\n  θ = 0°, 360°\\n\\nAll solutions: θ = 0°, 120°, 240°, 360°'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Compound Angle', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve sin(2θ − 30°) = 0.5 for 0° ≤ θ ≤ 180°.',
                text: 'Let φ = 2θ − 30°. When 0° ≤ θ ≤ 180°: −30° ≤ φ ≤ 330°.\\n\\nsin φ = 0.5 → principal: φ = 30°\\nSecond solution: φ = 180° − 30° = 150°\\n\\nφ = 30°: 2θ − 30° = 30° → 2θ = 60° → θ = 30°\\nφ = 150°: 2θ − 30° = 150° → 2θ = 180° → θ = 90°\\n\\nNo further solutions within the interval.\\n\\nAnswers: θ = 30°, 90°'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Compound Angle Tip',
                text: 'For sin(aθ + b) = k:\\n1. Let φ = aθ + b, find the interval for φ from the interval for θ\\n2. Find ALL φ values in this new interval (might be 4+ solutions)\\n3. Back-substitute to find θ\\n\\nThe key mistake is forgetting to widen the interval before solving.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Solve trig equations: find principal angle, use CAST to find all solutions in the interval. For quadratic in trig: factorise or use the quadratic formula, solve each case separately. For compound angles: widen the interval for the inner angle, find all solutions, then back-substitute.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'table-exact', prompt: 'Give exact values of sin, cos, tan for 30°, 45°, and 60°.' },
            { id: 'c2', blockId: 'callout-cast', prompt: 'What do the letters in CAST stand for?' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Solve sin θ = −1/2 for 0° ≤ θ ≤ 360°.' },
            { id: 'c4', blockId: 'callout-we3', prompt: 'Why do you need to widen the interval when solving sin(2θ − 30°) = 0.5?' }
        ],
        summaryText: 'Trig equations: principal angle + CAST symmetry. sin: 2nd solution = 180°−θ₀. cos: 2nd = 360°−θ₀. tan: 2nd = θ₀+180°. Quadratic in trig: factorise, solve each. Compound angle: widen interval first.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_6_2: Reciprocal trig functions ────────────────────────────────────
note_2_6_2 = """/**
 * Seed note: Mathematics · WMA12 · Topic 6 · Subtopic 2
 * "Reciprocal trigonometric functions"
 */

export const note_mathematics_2_6_2 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Understand, sketch, and use the reciprocal trigonometric functions sec, cosec, and cot.' },
            terms: []
        },
        {
            id: 'h-def',
            type: 'heading',
            data: { text: 'Definitions', level: 2 },
            terms: []
        },
        {
            id: 'callout-defs',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Reciprocal Functions',
                text: 'sec θ   = 1/cos θ   (secant — undefined when cos θ = 0, i.e. θ = 90°, 270°)\\ncosec θ = 1/sin θ   (cosecant — undefined when sin θ = 0, i.e. θ = 0°, 180°, 360°)\\ncot θ   = 1/tan θ = cos θ/sin θ   (cotangent — undefined when tan θ is undefined and when sin θ = 0)'
            },
            terms: []
        },
        {
            id: 'h-ids',
            type: 'heading',
            data: { text: 'Reciprocal Identities', level: 2 },
            terms: []
        },
        {
            id: 'eq-id1',
            type: 'equation',
            data: {
                html: '1 + tan²θ = sec²θ',
                caption: 'Divide sin²θ + cos²θ = 1 through by cos²θ'
            },
            terms: []
        },
        {
            id: 'eq-id2',
            type: 'equation',
            data: {
                html: '1 + cot²θ = cosec²θ',
                caption: 'Divide sin²θ + cos²θ = 1 through by sin²θ'
            },
            terms: []
        },
        {
            id: 'callout-derive',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Deriving 1 + tan²θ = sec²θ',
                text: 'Start: sin²θ + cos²θ = 1\\nDivide every term by cos²θ (cos θ ≠ 0):\\n  sin²θ/cos²θ + 1 = 1/cos²θ\\n  tan²θ + 1 = sec²θ\\n  1 + tan²θ = sec²θ  ✓'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Simplifying with Reciprocal Identities', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Simplify: sec²θ − tan²θ.',
                text: 'From 1 + tan²θ = sec²θ:\\n  sec²θ − tan²θ = 1'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Proving Identities', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: cosec²θ − cot²θ ≡ 1.',
                text: 'From 1 + cot²θ = cosec²θ:\\n  cosec²θ − cot²θ = 1  ✓ (directly from the identity, rearranged)'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Solving Equations', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve sec θ = 2 for 0° ≤ θ ≤ 360°.',
                text: 'sec θ = 2  →  1/cos θ = 2  →  cos θ = 1/2\\n\\ncos θ = 1/2: principal value θ = 60°\\ncos positive in 1st and 4th quadrants\\n  θ = 60° and θ = 360° − 60° = 300°'
            },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 2tan²θ − sec θ = 1 for 0° ≤ θ ≤ 360°.',
                text: 'Replace tan²θ using 1 + tan²θ = sec²θ → tan²θ = sec²θ − 1:\\n  2(sec²θ − 1) − sec θ = 1\\n  2sec²θ − 2 − sec θ = 1\\n  2sec²θ − sec θ − 3 = 0\\n  (2sec θ − 3)(sec θ + 1) = 0\\n  sec θ = 3/2  or  sec θ = −1\\n\\nFor sec θ = 3/2: cos θ = 2/3\\n  θ = cos⁻¹(2/3) = 48.2°  and  360° − 48.2° = 311.8°\\n\\nFor sec θ = −1: cos θ = −1 → θ = 180°\\n\\nAll solutions: θ = 48.2°, 180°, 311.8°'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'sec = 1/cos, cosec = 1/sin, cot = 1/tan = cos/sin. Key identities: 1+tan²θ=sec²θ and 1+cot²θ=cosec²θ. To solve: convert reciprocal function back to sin/cos/tan, then use standard methods. To prove: use identities to convert one side.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-defs', prompt: 'Define sec θ, cosec θ, and cot θ.' },
            { id: 'c2', blockId: 'eq-id1', prompt: 'State the two reciprocal Pythagorean identities.' },
            { id: 'c3', blockId: 'callout-we3', prompt: 'Solve sec θ = 2 for 0° ≤ θ ≤ 360°.' },
            { id: 'c4', blockId: 'callout-we4', prompt: 'Solve 2tan²θ − sec θ = 1 for 0° ≤ θ ≤ 360°.' }
        ],
        summaryText: 'sec=1/cos; cosec=1/sin; cot=cos/sin. 1+tan²θ=sec²θ; 1+cot²θ=cosec²θ. To solve reciprocal trig equations: convert to sin/cos/tan; use CAST. To use in proofs: use identities to simplify.',
        ready: true
    },
    evidence: []
};
"""

# ─── note_2_6_3: Compound angle formulae ─────────────────────────────────────
note_2_6_3 = """/**
 * Seed note: Mathematics · WMA12 · Topic 6 · Subtopic 3
 * "Compound and double angle formulae"
 */

export const note_mathematics_2_6_3 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use the addition formulae and double angle formulae for sin, cos, and tan.' },
            terms: []
        },
        {
            id: 'h-add',
            type: 'heading',
            data: { text: 'Addition Formulae', level: 2 },
            terms: []
        },
        {
            id: 'eq-sin-add',
            type: 'equation',
            data: {
                html: 'sin(A ± B) = sin A cos B ± cos A sin B',
                caption: 'Sine addition formula (given in formula booklet)'
            },
            terms: []
        },
        {
            id: 'eq-cos-add',
            type: 'equation',
            data: {
                html: 'cos(A ± B) = cos A cos B ∓ sin A sin B',
                caption: 'Cosine addition formula — note the ∓ (opposite sign to ±)'
            },
            terms: []
        },
        {
            id: 'eq-tan-add',
            type: 'equation',
            data: {
                html: 'tan(A ± B) = <span class="nb-frac"><span class="nb-num">tan A ± tan B</span><span class="nb-den">1 ∓ tan A tan B</span></span>',
                caption: 'Tangent addition formula'
            },
            terms: []
        },
        {
            id: 'h-double',
            type: 'heading',
            data: { text: 'Double Angle Formulae', level: 2 },
            terms: []
        },
        {
            id: 'p-double',
            type: 'paragraph',
            data: { text: 'Substitute B = A into the addition formulae to get the double angle results:' },
            terms: []
        },
        {
            id: 'eq-sin2',
            type: 'equation',
            data: {
                html: 'sin(2A) = 2 sin A cos A',
                caption: ''
            },
            terms: []
        },
        {
            id: 'eq-cos2',
            type: 'equation',
            data: {
                html: 'cos(2A) = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A',
                caption: 'Three equivalent forms — use whichever is most convenient'
            },
            terms: []
        },
        {
            id: 'eq-tan2',
            type: 'equation',
            data: {
                html: 'tan(2A) = <span class="nb-frac"><span class="nb-num">2 tan A</span><span class="nb-den">1 − tan²A</span></span>',
                caption: ''
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example 1: Exact Value', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Find the exact value of sin(75°).',
                text: 'sin(75°) = sin(45° + 30°)\\n= sin 45° cos 30° + cos 45° sin 30°\\n= (1/√2)(√3/2) + (1/√2)(1/2)\\n= √3/(2√2) + 1/(2√2)\\n= (√3 + 1)/(2√2)\\n= (√3 + 1)√2 / 4  = (√6 + √2)/4'
            },
            terms: []
        },
        {
            id: 'h-we2',
            type: 'heading',
            data: { text: 'Worked Example 2: Double Angle Equation', level: 2 },
            terms: []
        },
        {
            id: 'callout-we2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve sin(2θ) = sin(θ) for 0° ≤ θ ≤ 360°.',
                text: '2 sin θ cos θ = sin θ\\n2 sin θ cos θ − sin θ = 0\\nsin θ (2 cos θ − 1) = 0\\n\\nEither sin θ = 0 → θ = 0°, 180°, 360°\\nOr cos θ = 1/2 → θ = 60°, 300°\\n\\nAll solutions: θ = 0°, 60°, 180°, 300°, 360°'
            },
            terms: []
        },
        {
            id: 'h-we3',
            type: 'heading',
            data: { text: 'Worked Example 3: Proving an Identity Using Double Angle', level: 2 },
            terms: []
        },
        {
            id: 'callout-we3',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Prove: cos(2θ)/(1 + sin(2θ)) ≡ (cos θ − sin θ)/(cos θ + sin θ).',
                text: 'RHS = (cos θ − sin θ)/(cos θ + sin θ)\\n\\nMultiply top and bottom by (cos θ − sin θ):\\n= (cos θ − sin θ)²/[(cos θ + sin θ)(cos θ − sin θ)]\\n= (cos²θ − 2 sin θ cos θ + sin²θ)/(cos²θ − sin²θ)\\n= (1 − sin 2θ)/cos 2θ\\n\\nHmm — that gives (1 − sin 2θ)/cos 2θ, not cos 2θ/(1 + sin 2θ).\\n\\nTry the direct approach on LHS:\\nLHS = cos 2θ/(1 + sin 2θ)\\n    = (cos²θ − sin²θ)/(1 + 2 sin θ cos θ)\\n    = (cos θ − sin θ)(cos θ + sin θ)/((cos θ + sin θ)²)  [since 1=sin²θ+cos²θ]\\n    = (cos θ − sin θ)/(cos θ + sin θ) = RHS  ✓\\n\\nKey step: 1 + 2 sin θ cos θ = sin²θ + 2 sin θ cos θ + cos²θ = (sin θ + cos θ)²'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Choosing the Right Form of cos 2A',
                text: '• Use cos 2A = 1 − 2sin²A → to get only sin in the result\\n• Use cos 2A = 2cos²A − 1 → to get only cos in the result\\n• Use cos 2A = cos²A − sin²A → when factorisation is needed\\n\\nIf an equation has both cos 2θ and sin θ: replace cos 2θ = 1 − 2sin²θ to make a quadratic in sin θ.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Addition: sin(A±B)=sin A cos B ± cos A sin B; cos(A±B) = cos A cos B ∓ sin A sin B. Double angle: sin 2A = 2 sin A cos A; cos 2A = cos²A−sin²A = 2cos²A−1 = 1−2sin²A. Choose the correct form of cos 2A based on what further substitution is needed.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-sin-add', prompt: 'State the addition formulae for sin(A+B) and cos(A+B).' },
            { id: 'c2', blockId: 'eq-cos2', prompt: 'State all three forms of cos(2A).' },
            { id: 'c3', blockId: 'callout-we1', prompt: 'Find the exact value of sin(75°) using sin(45°+30°).' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'When solving an equation with cos 2θ and sin θ, which form of cos 2A should you use?' }
        ],
        summaryText: 'Addition: sin(A±B)=sinA cosB ± cosA sinB; cos(A±B)=cosA cosB ∓ sinA sinB. Double angle: sin 2A=2 sinA cosA; cos 2A has three forms. Choose the one that helps — 1−2sin²A if only sin desired; 2cos²A−1 if only cos; cos²−sin² for factorisation.',
        ready: true
    },
    evidence: []
};
"""

files = {
    'note_2_6_0.js': note_2_6_0,
    'note_2_6_1.js': note_2_6_1,
    'note_2_6_2.js': note_2_6_2,
    'note_2_6_3.js': note_2_6_3,
}

for filename, content in files.items():
    path = os.path.join(BASE, filename)
    with open(path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'Written: {filename}')

print('Topic 6 (Trigonometry) — all 4 notes done.')
