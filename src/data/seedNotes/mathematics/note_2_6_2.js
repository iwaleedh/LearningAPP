/**
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
                text: 'sec θ   = 1/cos θ   (secant — undefined when cos θ = 0, i.e. θ = 90°, 270°)\ncosec θ = 1/sin θ   (cosecant — undefined when sin θ = 0, i.e. θ = 0°, 180°, 360°)\ncot θ   = 1/tan θ = cos θ/sin θ   (cotangent — undefined when tan θ is undefined and when sin θ = 0)'
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
                text: 'Start: sin²θ + cos²θ = 1\nDivide every term by cos²θ (cos θ ≠ 0):\n  sin²θ/cos²θ + 1 = 1/cos²θ\n  tan²θ + 1 = sec²θ\n  1 + tan²θ = sec²θ  ✓'
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
                text: 'From 1 + tan²θ = sec²θ:\n  sec²θ − tan²θ = 1'
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
                text: 'From 1 + cot²θ = cosec²θ:\n  cosec²θ − cot²θ = 1  ✓ (directly from the identity, rearranged)'
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
                text: 'sec θ = 2  →  1/cos θ = 2  →  cos θ = 1/2\n\ncos θ = 1/2: principal value θ = 60°\ncos positive in 1st and 4th quadrants\n  θ = 60° and θ = 360° − 60° = 300°'
            },
            terms: []
        },
        {
            id: 'callout-we4',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Solve 2tan²θ − sec θ = 1 for 0° ≤ θ ≤ 360°.',
                text: 'Replace tan²θ using 1 + tan²θ = sec²θ → tan²θ = sec²θ − 1:\n  2(sec²θ − 1) − sec θ = 1\n  2sec²θ − 2 − sec θ = 1\n  2sec²θ − sec θ − 3 = 0\n  (2sec θ − 3)(sec θ + 1) = 0\n  sec θ = 3/2  or  sec θ = −1\n\nFor sec θ = 3/2: cos θ = 2/3\n  θ = cos⁻¹(2/3) = 48.2°  and  360° − 48.2° = 311.8°\n\nFor sec θ = −1: cos θ = −1 → θ = 180°\n\nAll solutions: θ = 48.2°, 180°, 311.8°'
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
