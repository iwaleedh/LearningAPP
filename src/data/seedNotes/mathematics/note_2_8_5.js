/**
 * Seed note: Mathematics · WMA12 · Topic 8 · Subtopic 5
 * "The trapezium rule"
 */

export const note_mathematics_2_8_5 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Use the trapezium rule to estimate definite integrals and determine whether the estimate is an over- or under-estimate.' },
            terms: []
        },
        {
            id: 'h-formula',
            type: 'heading',
            data: { text: 'The Trapezium Rule', level: 2 },
            terms: []
        },
        {
            id: 'eq-trap',
            type: 'equation',
            data: {
                html: '∫<sub>a</sub><sup>b</sup> f(x) dx ≈ <span class="nb-frac"><span class="nb-num">h</span><span class="nb-den">2</span></span>[y<sub>0</sub> + 2(y<sub>1</sub> + y<sub>2</sub> + … + y<sub>n−1</sub>) + y<sub>n</sub>]',
                caption: 'where h = (b − a)/n is the strip width and y₀, y₁, …, yₙ are the y-values at equally spaced x-values'
            },
            terms: []
        },
        {
            id: 'svg-trap',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 185" width="320" height="185"><defs><marker id="ah68" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><path d="M0,0 L0,5 L7,2.5 z" fill="#374151"/></marker></defs><line x1="30" y1="155" x2="300" y2="155" stroke="#374151" stroke-width="1.5" marker-end="url(#ah68)"/><line x1="40" y1="15" x2="40" y2="160" stroke="#374151" stroke-width="1.5" marker-end="url(#ah68)"/><path d="M 60,130 Q 120,60 180,50 Q 230,45 260,80" stroke="#4f46e5" stroke-width="2" fill="none"/><polygon points="60,155 60,130 110,90 110,155" fill="#4f46e5" fill-opacity="0.2" stroke="#4f46e5" stroke-width="1"/><polygon points="110,155 110,90 160,56 160,155" fill="#4f46e5" fill-opacity="0.2" stroke="#4f46e5" stroke-width="1"/><polygon points="160,155 160,56 210,51 210,155" fill="#4f46e5" fill-opacity="0.2" stroke="#4f46e5" stroke-width="1"/><polygon points="210,155 210,51 260,80 260,155" fill="#4f46e5" fill-opacity="0.2" stroke="#4f46e5" stroke-width="1"/><text x="82" y="172" font-size="10" fill="#374151" font-family="sans-serif">h</text><text x="133" y="172" font-size="10" fill="#374151" font-family="sans-serif">h</text><text x="183" y="172" font-size="10" fill="#374151" font-family="sans-serif">h</text><text x="233" y="172" font-size="10" fill="#374151" font-family="sans-serif">h</text><text x="53" y="142" font-size="9" fill="#374151" font-family="sans-serif">y₀</text><text x="103" y="85" font-size="9" fill="#374151" font-family="sans-serif">y₁</text><text x="153" y="52" font-size="9" fill="#374151" font-family="sans-serif">y₂</text><text x="203" y="47" font-size="9" fill="#374151" font-family="sans-serif">y₃</text><text x="253" y="76" font-size="9" fill="#374151" font-family="sans-serif">y₄</text><text x="290" y="158" font-size="11" fill="#374151" font-family="sans-serif">x</text><text x="44" y="13" font-size="11" fill="#374151" font-family="sans-serif">y</text></svg>',
                caption: 'Four trapezoid strips (n = 4) approximating the area under the curve'
            },
            terms: []
        },
        {
            id: 'callout-key',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Step-by-Step Method',
                text: '1. Calculate h = (b − a)/n where n = number of strips.\n2. List the x-values: x₀=a, x₁=a+h, x₂=a+2h, …, xₙ=b.\n3. Calculate y₀, y₁, …, yₙ by substituting each x into f(x).\n4. Apply the formula: (h/2)[first + last + 2×(all middle values)].\n5. Include appropriate rounding and units.'
            },
            terms: []
        },
        {
            id: 'h-we1',
            type: 'heading',
            data: { text: 'Worked Example', level: 2 },
            terms: []
        },
        {
            id: 'callout-we1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Use the trapezium rule with 4 strips to estimate ∫₁³ ln x dx.',
                text: 'h = (3 − 1)/4 = 0.5\n\nx:   1.0    1.5    2.0    2.5    3.0\ny:   0.000  0.405  0.693  0.916  1.099\n  (in y = ln x, 4 d.p.)\n\nFirst: y₀ = 0.000, Last: y₄ = 1.099\nMiddle sum: y₁ + y₂ + y₃ = 0.405 + 0.693 + 0.916 = 2.014\n\nEstimate = (0.5/2)[0.000 + 1.099 + 2 × 2.014]\n         = 0.25 × [0.000 + 1.099 + 4.028]\n         = 0.25 × 5.127\n         = 1.282 (4 s.f.)\n\n(Exact value = [x ln x − x]₁³ = (3 ln 3 − 3) − (0 − 1) = 3 ln 3 − 2 ≈ 1.296.)'
            },
            terms: []
        },
        {
            id: 'h-accuracy',
            type: 'heading',
            data: { text: 'Over- or Under-estimate?', level: 2 },
            terms: []
        },
        {
            id: 'table-accuracy',
            type: 'comparisonTable',
            data: {
                headers: ['Curve shape', 'Estimate is...', 'Reason'],
                rows: [
                    ['Concave up (∪)', 'Over-estimate', 'Trapezoids lie above the curve'],
                    ['Concave down (∩)', 'Under-estimate', 'Trapezoids lie below the curve']
                ],
                caption: 'Determined by the sign of d²y/dx²'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Improving Accuracy',
                text: 'Use more strips (larger n) → smaller h → trapezoids fit the curve better → more accurate estimate.\n\nThe exact value of the integral gives the benchmark to compare against.'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can state and apply the trapezium rule formula correctly', checked: false },
                    { text: 'I know to multiply ALL middle y-values by 2', checked: false },
                    { text: 'I can determine whether the estimate is an over- or under-estimate from the curve\'s concavity', checked: false },
                    { text: 'I can calculate h = (b − a)/n and list x-values correctly', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Trapezium rule: (h/2)[y₀ + 2(y₁ + … + yₙ₋₁) + yₙ] where h=(b−a)/n. Middle y-values multiplied by 2; first and last multiplied by 1. Concave up → over-estimate; concave down → under-estimate. Increasing n improves accuracy.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "To logically show if the trapezium rule yields an over-estimate or under-estimate, consider the specific section of the curve. If the curve is concave upwards (U-shaped), the straight chords sit above the curve giving an over-estimate."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'eq-trap', prompt: 'State the trapezium rule formula.' },
            { id: 'c2', blockId: 'callout-we1', prompt: 'Use the trapezium rule with 4 strips to estimate ∫₁³ ln x dx.' },
            { id: 'c3', blockId: 'table-accuracy', prompt: 'Is the trapezium rule an over- or under-estimate when the curve is concave up?' },
            { id: 'c4', blockId: 'callout-tip', prompt: 'How can you improve the accuracy of the trapezium rule?' }
        ],
        summaryText: 'Trapezium rule: (h/2)[y₀+2(middle y\'s)+yₙ]; h=(b−a)/n. Concave up→overestimate; concave down→underestimate. More strips = better approximation.',
        ready: true
    },
    evidence: []
};
