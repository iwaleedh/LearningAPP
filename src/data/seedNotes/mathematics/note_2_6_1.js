/**
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
                text: 'CAST (going anti-clockwise from the right):\n• A (0°–90°): All positive\n• S (90°–180°): Sine positive\n• T (180°–270°): Tangent positive\n• C (270°–360°): Cosine positive\n\nTo find all solutions: find the principal value θ₀ using sin⁻¹/cos⁻¹/tan⁻¹, then use symmetry to find the second solution in the interval.'
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
                text: 'Principal angle: sin⁻¹(1/2) = 30°.\nSince sin is negative: solutions in 3rd and 4th quadrants.\n  θ = 180° + 30° = 210°\n  θ = 360° − 30° = 330°\n\nSolutions: θ = 210°, 330°'
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
                text: 'Let c = cos θ:\n  2c² − c − 1 = 0\n  (2c + 1)(c − 1) = 0\n  c = −1/2 or c = 1\n\nFor cos θ = −1/2: solutions in 2nd and 3rd quadrants\n  θ = 120°, 240°\n\nFor cos θ = 1:\n  θ = 0°, 360°\n\nAll solutions: θ = 0°, 120°, 240°, 360°'
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
                text: 'Let φ = 2θ − 30°. When 0° ≤ θ ≤ 180°: −30° ≤ φ ≤ 330°.\n\nsin φ = 0.5 → principal: φ = 30°\nSecond solution: φ = 180° − 30° = 150°\n\nφ = 30°: 2θ − 30° = 30° → 2θ = 60° → θ = 30°\nφ = 150°: 2θ − 30° = 150° → 2θ = 180° → θ = 90°\n\nNo further solutions within the interval.\n\nAnswers: θ = 30°, 90°'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Compound Angle Tip',
                text: 'For sin(aθ + b) = k:\n1. Let φ = aθ + b, find the interval for φ from the interval for θ\n2. Find ALL φ values in this new interval (might be 4+ solutions)\n3. Back-substitute to find θ\n\nThe key mistake is forgetting to widen the interval before solving.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Solve trig equations: find principal angle, use CAST to find all solutions in the interval. For quadratic in trig: factorise or use the quadratic formula, solve each case separately. For compound angles: widen the interval for the inner angle, find all solutions, then back-substitute.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Be well-versed in the principal domains of the inverse trigonometric functions. For instance, arcsin x only gives values between -90 and 90 degrees (or -pi/2 and pi/2 radians). Pay attention to whether the question asks for degrees or radians."
            },
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
