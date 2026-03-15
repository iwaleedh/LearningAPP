/**
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
                text: 'sin(75°) = sin(45° + 30°)\n= sin 45° cos 30° + cos 45° sin 30°\n= (1/√2)(√3/2) + (1/√2)(1/2)\n= √3/(2√2) + 1/(2√2)\n= (√3 + 1)/(2√2)\n= (√3 + 1)√2 / 4  = (√6 + √2)/4'
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
                text: '2 sin θ cos θ = sin θ\n2 sin θ cos θ − sin θ = 0\nsin θ (2 cos θ − 1) = 0\n\nEither sin θ = 0 → θ = 0°, 180°, 360°\nOr cos θ = 1/2 → θ = 60°, 300°\n\nAll solutions: θ = 0°, 60°, 180°, 300°, 360°'
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
                text: 'RHS = (cos θ − sin θ)/(cos θ + sin θ)\n\nMultiply top and bottom by (cos θ − sin θ):\n= (cos θ − sin θ)²/[(cos θ + sin θ)(cos θ − sin θ)]\n= (cos²θ − 2 sin θ cos θ + sin²θ)/(cos²θ − sin²θ)\n= (1 − sin 2θ)/cos 2θ\n\nHmm — that gives (1 − sin 2θ)/cos 2θ, not cos 2θ/(1 + sin 2θ).\n\nTry the direct approach on LHS:\nLHS = cos 2θ/(1 + sin 2θ)\n    = (cos²θ − sin²θ)/(1 + 2 sin θ cos θ)\n    = (cos θ − sin θ)(cos θ + sin θ)/((cos θ + sin θ)²)  [since 1=sin²θ+cos²θ]\n    = (cos θ − sin θ)/(cos θ + sin θ) = RHS  ✓\n\nKey step: 1 + 2 sin θ cos θ = sin²θ + 2 sin θ cos θ + cos²θ = (sin θ + cos θ)²'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Choosing the Right Form of cos 2A',
                text: '• Use cos 2A = 1 − 2sin²A → to get only sin in the result\n• Use cos 2A = 2cos²A − 1 → to get only cos in the result\n• Use cos 2A = cos²A − sin²A → when factorisation is needed\n\nIf an equation has both cos 2θ and sin θ: replace cos 2θ = 1 − 2sin²θ to make a quadratic in sin θ.'
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
