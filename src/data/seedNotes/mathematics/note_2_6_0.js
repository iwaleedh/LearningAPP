/**
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
                text: 'From sin²θ + cos²θ = 1:\n\n  cos²θ = 1 − sin²θ\n  sin²θ = 1 − cos²θ\n\nDivide through by cos²θ: 1 + tan²θ = sec²θ\nDivide through by sin²θ: cot²θ + 1 = cosec²θ\n\n(sec, cosec, cot are covered in WMA12 Topic 6 fully)'
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
                text: 'LHS = (sin θ + cos θ)²\n    = sin²θ + 2 sin θ cos θ + cos²θ\n    = (sin²θ + cos²θ) + 2 sin θ cos θ\n    = 1 + 2 sin θ cos θ  ✓ = RHS'
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
                text: '1 − cos²θ = sin²θ  (from the Pythagorean identity)\n\n(1 − cos²θ)/sin θ = sin²θ / sin θ = sin θ'
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
                text: 'sin²θ + cos²θ = 1\n(3/5)² + cos²θ = 1\n9/25 + cos²θ = 1\ncos²θ = 16/25\ncos θ = 4/5  (positive, since θ is acute)\n\ntan θ = sin θ / cos θ = (3/5)/(4/5) = 3/4'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Proof Strategy',
                text: '• Work on ONE side only (usually the more complex side).\n• The most useful moves: replace sin²θ or cos²θ using sin²+cos²=1; replace tan θ with sin θ/cos θ; factorise.\n• Never "move" terms across the ≡ sign when proving an identity.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Core identities: sin²θ + cos²θ = 1; tan θ = sin θ / cos θ. Derived: cos²θ = 1 − sin²θ; sin²θ = 1 − cos²θ. In proofs: work on one side, use identities to simplify, never cross-multiply. Use Pythagorean identity to find missing ratio from a given one.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When sketching reciprocal trigonometric functions, draw the original function (e.g., y = cos x for y = sec x) lightly first. The x-intercepts of the original function become the vertical asymptotes of the reciprocal function."
            },
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
