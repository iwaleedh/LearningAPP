/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 21
 * "Solving equations graphically"
 */

export const note_mathematics_1_1_21 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/solving-equations-graphically.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use graphical methods to find approximate or exact solutions to equations; interpret intersection points of two curves as solutions; relate algebraic and graphical methods.' },
            terms: []
        },
        {
            id: 'h-key',
            type: 'heading',
            data: { text: 'Graphical Solutions', level: 2 },
            terms: []
        },
        {
            id: 'list-key',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'The solutions to f(x) = g(x) are the <strong>x-coordinates of the intersection points</strong> of y = f(x) and y = g(x).' },
                    { text: 'Sketch both curves on the same axes to identify the number and location of intersections.' },
                    { text: 'The number of intersection points equals the number of solutions.' }
                ]
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Solving f(x) = g(x) Graphically', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Rearrange the equation into the form f(x) = g(x).' },
                    { text: 'Sketch (or plot) both y = f(x) and y = g(x) on the same axes.' },
                    { text: 'Identify the x-coordinates of all intersection points.' },
                    { text: 'These x-coordinates are the solutions to the original equation.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Intersecting Line and Parabola',
                text: 'Solve x² = x + 2 graphically.<br/><br/>Rearrange: y = x² and y = x + 2 — find intersections.<br/>Algebraically: x² − x − 2 = 0 → (x−2)(x+1) = 0 → x = 2 or x = −1.<br/>On the sketch: the parabola y = x² intersects the line y = x + 2 at x = −1 and x = 2.'
            },
            terms: []
        },
        {
            id: 'h-disc',
            type: 'heading',
            data: { text: 'Number of Solutions', level: 2 },
            terms: []
        },
        {
            id: 'list-disc',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'When the equation reduces to a quadratic, use the discriminant Δ = b² − 4ac to count solutions.' },
                    { text: 'Δ > 0 → two distinct intersections; Δ = 0 → tangent (one solution); Δ < 0 → no intersections.' },
                    { text: 'A horizontal line y = k can cut a parabola 0, 1, or 2 times depending on the value of k.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Find k for a Tangent',
                text: 'For what value of k does y = k intersect y = x² − 4x + 5 exactly once?<br/><br/>Set equal: k = x² − 4x + 5<br/>x² − 4x + (5 − k) = 0<br/>For exactly one intersection: Δ = 0<br/>16 − 4(5 − k) = 0 → 16 − 20 + 4k = 0 → 4k = 4 → <strong>k = 1</strong><br/>The line y = 1 is tangent to the parabola at its vertex (2, 1).'
            },
            terms: []
        },
        {
            id: 'svg-intersect',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah21" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l21{font-family:sans-serif;font-size:10px;fill:#374151}.h21{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}.g21{font-family:sans-serif;font-size:10px;fill:#10b981;font-weight:600}</style><line x1="15" y1="140" x2="265" y2="140" stroke="#374151" stroke-width="1.5" marker-end="url(#ah21)"/><line x1="70" y1="195" x2="70" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah21)"/><polyline points="15,165 40,130 70,70 100,35 130,20 160,27 190,55 210,80 240,130 260,165" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><line x1="15" y1="120" x2="260" y2="70" stroke="#10b981" stroke-width="2"/><circle cx="50" cy="130" r="4.5" fill="#ef4444"/><circle cx="185" cy="90" r="4.5" fill="#ef4444"/><text x="36" y="125" class="h21">x\u2081</text><text x="188" y="84" class="h21">x\u2082</text><text x="220" y="68" class="g21">y = g(x)</text><text x="230" y="138" class="h21">y = f(x)</text><text x="258" y="154" class="l21">x</text><text x="74" y="12" class="l21">y</text></svg>',
                caption: 'Solutions to f(x) = g(x) are the x-coordinates of intersection points x₁ and x₂'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• You can solve graphically even when exact algebraic solutions are hard — sketch and identify approximate intersections.<br/>• Use the discriminant to count solutions without solving the full equation.<br/>• When asked for the number of solutions to f(x) = k for varying k, think about how a horizontal line cuts the graph of y = f(x).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Graphical solution: rewrite as f(x) = g(x), sketch both curves, read off x-coordinates of intersections. Discriminant of the resulting quadratic gives the number of intersections. A tangent means Δ = 0 (one repeated solution).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-key', prompt: 'What do the intersection points of y = f(x) and y = g(x) represent algebraically?' },
            { id: 'cue-2', blockId: 'worked-1', prompt: 'Solve x² = x + 2 graphically and explain the method.' },
            { id: 'cue-3', blockId: 'worked-2', prompt: 'For what value of k does y = k touch y = x² − 4x + 5 exactly once?' },
            { id: 'cue-4', blockId: 'p-disc', prompt: 'How does the discriminant relate to the number of graphical intersections?' }
        ],
        summaryText: 'Graphical solution: intersection x-coordinates of y=f(x) and y=g(x). Number of intersections = number of solutions. Δ=0 means tangent (one solution). Δ>0: 2 solutions; Δ<0: no solutions.',
        ready: true
    },
    evidence: []
};
