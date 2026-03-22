/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 17
 * "Proportional relationships"
 */

export const note_mathematics_1_1_17 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/proportional-relationships.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Set up and use equations for direct and inverse proportion; extend to problems involving y ∝ xⁿ or y ∝ 1/xⁿ; find the constant of proportionality from given data.' },
            terms: []
        },
        {
            id: 'h-direct',
            type: 'heading',
            data: { text: 'Direct Proportion', level: 2 },
            terms: []
        },
        {
            id: 'p-direct',
            type: 'paragraph',
            data: { text: 'When y is <strong>directly proportional</strong> to x (written y ∝ x), doubling x doubles y. The ratio y/x is constant. The graph of y against x is a straight line through the origin.' },
            terms: []
        },
        {
            id: 'eq-direct',
            type: 'equation',
            data: {
                html: 'y = kx',
                caption: 'Direct proportion equation; k is the constant of proportionality'
            },
            terms: []
        },
        {
            id: 'h-inverse',
            type: 'heading',
            data: { text: 'Inverse Proportion', level: 2 },
            terms: []
        },
        {
            id: 'p-inverse',
            type: 'paragraph',
            data: { text: 'When y is <strong>inversely proportional</strong> to x (written y ∝ 1/x), doubling x halves y. The product xy is constant. The graph of y against x is a hyperbola in the first (and third) quadrant.' },
            terms: []
        },
        {
            id: 'eq-inverse',
            type: 'equation',
            data: {
                html: 'y = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">x</span></span>',
                caption: 'Inverse proportion equation'
            },
            terms: []
        },
        {
            id: 'h-types',
            type: 'heading',
            data: { text: 'Types of Proportional Relationships', level: 2 },
            terms: []
        },
        {
            id: 'table-types',
            type: 'comparisonTable',
            data: {
                headers: ['Statement', 'Equation form', 'Graph shape'],
                rows: [
                    ['y ∝ x', 'y = kx', 'Straight line through origin'],
                    ['y ∝ x²', 'y = kx²', 'Parabola through origin'],
                    ['y ∝ x³', 'y = kx³', 'Cubic through origin'],
                    ['y ∝ 1/x', 'y = k/x', 'Hyperbola (x and y axes as asymptotes)'],
                    ['y ∝ 1/x²', 'y = k/x²', 'Steeper hyperbola'],
                    ['y ∝ √x', 'y = k√x', 'Square root curve']
                ],
                caption: 'Common proportional relationships'
            },
            terms: []
        },
        {
            id: 'svg-prop-graphs',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 160" style="width:100%;max-width:440px;display:block;margin:0 auto;"><defs><marker id="ah17" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><style>.t17{font-family:sans-serif;font-size:12px;fill:#4f46e5;font-weight:600}.g17{fill:#10b981}</style><line x1="20" y1="130" x2="160" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah17)"/><line x1="40" y1="145" x2="40" y2="30" stroke="#374151" stroke-width="1.5" marker-end="url(#ah17)"/><polyline points="40,130 140,50" fill="none" stroke="#4f46e5" stroke-width="2"/><polyline points="40,130 90,120 120,80 140,30" fill="none" stroke="#10b981" stroke-width="2"/><text x="145" y="55" class="t17">y ∝ x</text><text x="125" y="25" class="t17 g17">y ∝ x²</text><line x1="200" y1="130" x2="340" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah17)"/><line x1="220" y1="145" x2="220" y2="30" stroke="#374151" stroke-width="1.5" marker-end="url(#ah17)"/><path d="M 230 40 Q 240 120 330 125" fill="none" stroke="#f59e0b" stroke-width="2"/><text x="310" y="115" class="t17" fill="#f59e0b">y ∝ 1/x</text></svg>',
                caption: 'Visualising linear, quadratic, and inverse proportion graphs (k > 0)'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Finding the Constant k', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Write down the proportional relationship: y = kxⁿ (or y = k/xⁿ).' },
                    { text: 'Substitute the given values of x and y.' },
                    { text: 'Solve for k.' },
                    { text: 'Write the equation with k found and use it to answer the question.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-direct',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Direct Proportion',
                text: 'y is directly proportional to x². When x = 3, y = 36. Find y when x = 5.<br/><br/>y = kx² → 36 = k(3²) = 9k → <strong>k = 4</strong><br/>y = 4x² → y = 4(25) = <strong>100</strong>'
            },
            terms: []
        },
        {
            id: 'worked-inverse',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Inverse Proportion',
                text: 'y is inversely proportional to √x. When x = 4, y = 6. Find x when y = 2.<br/><br/>y = k/√x → 6 = k/√4 = k/2 → <strong>k = 12</strong><br/>2 = 12/√x → √x = 6 → <strong>x = 36</strong>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always begin by writing the proportional equation with the constant k.<br/>• Do not confuse y ∝ x² (y = kx²) with y ∝ x + c (which is NOT a proportional relationship).<br/>• Direct proportion always passes through the origin on a y-vs-x graph.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Proportional relationships: write y = kxⁿ (or y = k/xⁿ), substitute given values to find k, then use the formula. Direct proportion (y ∝ x) gives a straight line through the origin. Inverse proportion (y ∝ 1/x) gives a hyperbola.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "",
                text: ""
            },
            terms: []
        },
        {
            id: 'callout-tip-2',
            type: 'callout',
            data: {
                style: 'warning',
                title: "",
                text: ""
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-types', prompt: 'Write proportional equations for: y ∝ x², y ∝ 1/x, y ∝ √x.' },
            { id: 'cue-2', blockId: 'worked-direct', prompt: 'y ∝ x², y = 36 when x = 3. Find y when x = 5.' },
            { id: 'cue-3', blockId: 'worked-inverse', prompt: 'y ∝ 1/√x, y = 6 when x = 4. Find x when y = 2.' },
            { id: 'cue-4', blockId: 'list-method', prompt: 'List the four steps for finding the constant in a proportional relationship.' }
        ],
        summaryText: 'Proportion: write y = kxⁿ → substitute to find k → use equation. Direct (y=kx): line through origin. Inverse (y=k/x): hyperbola. Always start by writing the equation with k.',
        ready: true
    },
    evidence: []
};
