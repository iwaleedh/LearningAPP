/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 20
 * "Stretches"
 */

export const note_mathematics_1_1_20 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/stretches.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply stretch transformations to graphs: y = af(x) (vertical stretch); y = f(ax) (horizontal stretch); identify the scale factor and its reciprocal nature; transform key points and asymptotes.' },
            terms: []
        },
        {
            id: 'h-vert',
            type: 'heading',
            data: { text: 'Vertical Stretch: y = af(x)', level: 2 },
            terms: []
        },
        {
            id: 'p-vert',
            type: 'paragraph',
            data: { text: 'Multiplying the function by a constant <em>a</em> <strong>scales every y-coordinate by a</strong>, while leaving x-coordinates unchanged. The graph stretches (or compresses) parallel to the y-axis by a factor of a, centred on the x-axis. Points on the x-axis stay fixed.' },
            terms: []
        },
        {
            id: 'key-vert',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: y = af(x)',
                text: 'Every point (x, y) → (x, ay)<br/>Vertical stretch, scale factor a, parallel to the y-axis.<br/>• a > 1: stretches away from x-axis<br/>• 0 < a < 1: compresses towards x-axis<br/>• a < 0: also reflects in x-axis'
            },
            terms: []
        },
        {
            id: 'h-horiz',
            type: 'heading',
            data: { text: 'Horizontal Stretch: y = f(ax)', level: 2 },
            terms: []
        },
        {
            id: 'p-horiz',
            type: 'paragraph',
            data: { text: 'Replacing x with ax inside the function <strong>scales every x-coordinate by 1/a</strong> (the reciprocal of a), while leaving y-coordinates unchanged. This is the counterintuitive result: multiplying inside by a causes a compression by factor a outwardly, since the graph achieves the same output value at x/a.' },
            terms: []
        },
        {
            id: 'key-horiz',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: y = f(ax)',
                text: 'Every point (x, y) → (x/a, y)<br/>Horizontal stretch, scale factor 1/a, parallel to the x-axis.<br/>• a > 1: graph compresses horizontally (scale factor 1/a < 1)<br/>• 0 < a < 1: graph stretches horizontally (scale factor 1/a > 1)'
            },
            terms: []
        },
        {
            id: 'table-compare',
            type: 'comparisonTable',
            data: {
                headers: ['Form', 'Scale factor', 'Direction', 'Fixed points'],
                rows: [
                    ['y = af(x)', 'a (parallel to y-axis)', 'Vertical', 'x-intercepts (y = 0)'],
                    ['y = f(ax)', '1/a (parallel to x-axis)', 'Horizontal', 'y-intercept (x = 0)']
                ],
                caption: 'Vertical vs horizontal stretch'
            },
            terms: []
        },
        {
            id: 'worked-vert',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Vertical Stretch',
                text: 'f(x) = sin x. Describe and sketch y = 3f(x) = 3 sin x.<br/><br/>Vertical stretch, scale factor 3. Every y-coordinate is multiplied by 3.<br/>• Amplitude: 1 → 3 (peaks at 3, troughs at −3).<br/>• Period and x-intercepts unchanged (still every 180°).'
            },
            terms: []
        },
        {
            id: 'worked-horiz',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Horizontal Stretch',
                text: 'f(x) = sin x. Describe and sketch y = f(2x) = sin 2x.<br/><br/>Horizontal stretch, scale factor 1/2. Every x-coordinate is halved.<br/>• The period halves: 360° → 180°.<br/>• Amplitude unchanged (still ±1).<br/>• First peak moves from x = 90° to x = 45°.'
            },
            terms: []
        },
        {
            id: 'svg-stretches',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 160" style="width:100%;max-width:400px;display:block;margin:0 auto;"><defs><marker id="ah20" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><style>.t20{font-family:sans-serif;font-size:11px;fill:#6b7280}.lb20{font-family:sans-serif;font-size:12px;font-weight:600}</style><line x1="20" y1="80" x2="300" y2="80" stroke="#374151" stroke-width="1.5" marker-end="url(#ah20)"/><line x1="40" y1="140" x2="40" y2="20" stroke="#374151" stroke-width="1.5" marker-end="url(#ah20)"/><path d="M 40 80 Q 70 -20 100 80 T 160 80 T 220 80 T 280 80" fill="none" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 40 80 Q 55 -20 70 80 T 100 80 T 130 80 T 160 80 T 190 80 T 220 80 T 250 80 T 280 80" fill="none" stroke="#4f46e5" stroke-width="2"/><text x="165" y="18" class="lb20" fill="#6b7280">y = f(x)</text><text x="70" y="18" class="lb20" fill="#4f46e5">y = f(2x)</text><text x="96" y="95" class="t20">180°</text><text x="156" y="95" class="t20">360°</text></svg>',
                caption: 'Horizontal stretch by scale factor 1/2: y = f(2x) compresses the graph horizontally'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Confusion',
                text: 'The horizontal stretch scale factor is <strong>1/a</strong>, not a.<br/>f(2x) compresses the graph by factor 2 (scale factor 1/2).<br/>f(x/2) stretches the graph by factor 2 (scale factor 2).<br/><br/>Think of it this way: f(2x) reaches its original value of f(t) when 2x = t, i.e. at x = t/2 — half the original x-value.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• State the scale factor AND direction in your description.<br/>• Label the new coordinates of all marked points.<br/>• Asymptotes: y = af(x) does not move vertical asymptotes; y = f(ax) scales vertical asymptotes by 1/a.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Stretches: y = af(x) is a vertical stretch scale factor a — every y-coordinate × a; x-intercepts fixed. y = f(ax) is a horizontal stretch scale factor 1/a — every x-coordinate ÷ a; y-intercept fixed. The horizontal scale factor is the reciprocal of the number inside the bracket.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-vert', prompt: 'What transformation is y = 3f(x)? Where does the point (2, 5) move to?' },
            { id: 'cue-2', blockId: 'key-horiz', prompt: 'What transformation is y = f(3x)? What is the scale factor?' },
            { id: 'cue-3', blockId: 'worked-horiz', prompt: 'How does y = sin 2x differ from y = sin x in terms of period?' },
            { id: 'cue-4', blockId: 'callout-warning', prompt: 'Why does f(2x) compress rather than stretch the graph?' }
        ],
        summaryText: 'af(x): vertical stretch ×a, fixed x-intercepts. f(ax): horizontal stretch ×(1/a), fixed y-intercept. Inside multiplier a → horizontal scale factor is 1/a (reciprocal).',
        ready: true
    },
    evidence: []
};
