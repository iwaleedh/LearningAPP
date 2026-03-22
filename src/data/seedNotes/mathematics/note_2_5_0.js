/**
 * Seed note: Mathematics · WMA12 · Topic 5 · Subtopic 0
 * "Exponential functions"
 */

export const note_mathematics_2_5_0 = {
    blocks: [
        {
            id: 'obj',
            type: 'objective',
            data: { text: 'Sketch and understand the key properties of exponential functions y = aˣ and y = eˣ.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is an Exponential Function?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'An <strong>exponential function</strong> has the form f(x) = aˣ, where a &gt; 0, a ≠ 1. The variable is in the <em>exponent</em> (power), not the base. This is different from power functions like x². The key base used in A-level mathematics is <strong>e ≈ 2.718…</strong>, giving f(x) = eˣ.' },
            terms: []
        },
        {
            id: 'callout-e',
            type: 'callout',
            data: {
                style: 'key',
                title: "Euler's Number e",
                text: 'e = 2.71828182845…  (irrational, like π)\n\ne is defined as the unique base such that the gradient of y = eˣ equals eˣ at every point — i.e. d/dx(eˣ) = eˣ.\n\nAlternative definitions:\n  e = lim_{n→∞} (1 + 1/n)ⁿ\n  e = 1 + 1/1! + 1/2! + 1/3! + …'
            },
            terms: []
        },
        {
            id: 'svg-exp',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220" width="300" height="220"><defs><marker id="ah62" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><line x1="30" y1="10" x2="30" y2="200" stroke="#374151" stroke-width="1.5" marker-end="url(#ah62)"/><line x1="10" y1="170" x2="280" y2="170" stroke="#374151" stroke-width="1.5" marker-end="url(#ah62)"/><text x="35" y="210" font-size="11" fill="#374151" font-family="sans-serif">O</text><text x="275" y="184" font-size="11" fill="#374151" font-family="sans-serif">x</text><text x="38" y="15" font-size="11" fill="#374151" font-family="sans-serif">y</text><path d="M 10,168 Q 40,165 70,155 Q 100,140 120,118 Q 140,96 155,70 Q 165,52 175,32 Q 180,22 185,14" stroke="#4f46e5" stroke-width="2.5" fill="none"/><text x="188" y="20" font-size="13" fill="#4f46e5" font-family="sans-serif" font-style="italic">y = eˣ</text><circle cx="30" cy="148" r="4" fill="#10b981"/><text x="34" y="145" font-size="11" fill="#10b981" font-family="sans-serif">(0, 1)</text><line x1="10" y1="148" x2="280" y2="148" stroke="#4f46e5" stroke-width="0.8" stroke-dasharray="4,3"/><text x="245" y="143" font-size="10" fill="#4f46e5" font-family="sans-serif">y=1</text><text x="8" y="174" font-size="11" fill="#374151" font-family="sans-serif">asymptote y=0 (x-axis)</text></svg>',
                caption: 'Graph of y = eˣ: passes through (0,1), asymptote y=0, always increasing'
            },
            terms: []
        },
        {
            id: 'h-props',
            type: 'heading',
            data: { text: 'Key Properties of y = eˣ', level: 2 },
            terms: []
        },
        {
            id: 'list-props',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Domain: all real numbers (−∞ < x < ∞)' },
                    { text: 'Range: y &gt; 0 (always positive)' },
                    { text: 'Passes through (0, 1) since e⁰ = 1' },
                    { text: '<strong>Asymptote</strong>: y = 0 as x → −∞' },
                    { text: 'Always <strong>increasing</strong> (gradient = eˣ &gt; 0 always)' },
                    { text: 'd/dx(eˣ) = eˣ (the function is its own derivative)' }
                ]
            },
            terms: []
        },
        {
            id: 'h-trans',
            type: 'heading',
            data: { text: 'Transformations of y = eˣ', level: 2 },
            terms: []
        },
        {
            id: 'table-trans',
            type: 'comparisonTable',
            data: {
                headers: ['Function', 'Transformation', 'Key point / Asymptote'],
                rows: [
                    ['y = eˣ + k', 'Translate k units up (k>0) or down (k<0)', 'Passes through (0, 1+k); asymptote y=k'],
                    ['y = eˣ⁺ᵃ', 'Translate −a units in x-direction', 'Passes through (−a, 1); asymptote y=0'],
                    ['y = keˣ', 'Stretch by factor k in the y-direction', 'Passes through (0, k); asymptote y=0'],
                    ['y = e⁻ˣ', 'Reflect in the y-axis', 'Passes through (0, 1); decreasing; asymptote y=0'],
                    ['y = e^(kx)', 'Stretch by factor 1/k in x-direction', 'Passes through (0, 1); grows faster if k>1']
                ],
                caption: 'Transformations of exponential functions'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Sketch Method',
                text: 'To sketch y = eˣ + k:\n1. Identify the asymptote y = k\n2. Find the y-intercept: x=0 → y = 1+k\n3. Show the curve approaching y=k from above as x → −∞\n4. Show the curve rising steeply for large positive x'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Exponential function y = aˣ (a>0, a≠1). y = eˣ where e ≈ 2.718 is the natural base. Key properties: domain ℝ, range y>0, passes through (0,1), asymptote y=0, increasing. d/dx(eˣ) = eˣ. Transformations follow standard rules (translate, reflect, stretch).' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "When sketching exponential graphs, always include the horizontal asymptote (e.g., y=0) by either drawing a dashed line or stating its equation, and clearly label the y-intercept. Markers actively look for these features."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'c1', blockId: 'callout-e', prompt: 'What is e? State its approximate value and its key calculus property.' },
            { id: 'c2', blockId: 'list-props', prompt: 'State four key properties of y = eˣ (domain, range, intercept, asymptote).' },
            { id: 'c3', blockId: 'table-trans', prompt: 'How does the graph of y = eˣ + 3 differ from y = eˣ?' },
            { id: 'c4', blockId: 'svg-exp', prompt: 'Sketch y = eˣ, labelling the asymptote and y-intercept.' }
        ],
        summaryText: 'y = eˣ: domain ℝ, range y>0, y-int (0,1), asymptote y=0, always increasing, d/dx(eˣ)=eˣ. e≈2.718. Transformations: translate, reflect, stretch follow standard rules.',
        ready: true
    },
    evidence: []
};
