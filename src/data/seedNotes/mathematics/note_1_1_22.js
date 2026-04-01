/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 22
 * "Reciprocal graphs sketching"
 */

export const note_mathematics_1_1_22 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/reciprocal-graphs-sketching.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Sketch the graphs of y = k/x and y = k/x²; identify asymptotes; describe behaviour in each quadrant; apply transformations to reciprocal graphs.' },
            terms: []
        },
        {
            id: 'h-recip',
            type: 'heading',
            data: { text: 'The Reciprocal Function y = k/x', level: 2 },
            terms: []
        },
        {
            id: 'p-recip',
            type: 'paragraph',
            data: { text: 'The function y = k/x (also written y = kx⁻¹) is called the <strong>reciprocal function</strong>. It is undefined at x = 0, so the y-axis is a vertical asymptote. As x → ±∞, y → 0, so the x-axis is a horizontal asymptote. The graph has two branches: one in the first and third quadrants (k > 0) or second and fourth (k < 0).' },
            terms: []
        },
        {
            id: 'key-reciprocal',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Properties of y = k/x',
                text: '• <strong>Domain</strong>: x ≠ 0 (all real x except 0)<br/>• <strong>Asymptotes</strong>: x = 0 (y-axis) and y = 0 (x-axis)<br/>• <strong>Symmetry</strong>: rotational symmetry of order 2 about the origin<br/>• k > 0 → branches in quadrants 1 and 3; k < 0 → quadrants 2 and 4<br/>• xy = k (product of coordinates is constant)'
            },
            terms: []
        },
        {
            id: 'h-recip2',
            type: 'heading',
            data: { text: 'The Function y = k/x²', level: 2 },
            terms: []
        },
        {
            id: 'p-recip2',
            type: 'paragraph',
            data: { text: 'The function y = k/x² (also written y = kx⁻²) is always positive when k > 0 (since x² > 0 for all x ≠ 0). It approaches 0 as |x| → ∞ and is undefined at x = 0. The graph is symmetric about the y-axis (it is an even function).' },
            terms: []
        },
        {
            id: 'svg-reciprocal-neg',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah22n" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l22{font-family:sans-serif;font-size:10px;fill:#374151}.h22{font-family:sans-serif;font-size:10px;fill:#ef4444;font-weight:600}</style><line x1="15" y1="110" x2="265" y2="110" stroke="#374151" stroke-width="1.5" marker-end="url(#ah22n)"/><line x1="140" y1="210" x2="140" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah22n)"/><line x1="15" y1="110" x2="265" y2="110" stroke="#374151" stroke-width="0.5" stroke-dasharray="3,3"/><line x1="140" y1="210" x2="140" y2="15" stroke="#374151" stroke-width="0.5" stroke-dasharray="3,3"/><path d="M20,110 Q40,110 60,106 Q75,102 85,95 Q100,80 110,55 Q120,35 125,15" fill="none" stroke="#ef4444" stroke-width="2.5"/><path d="M155,200 Q165,190 175,170 Q185,150 195,130 Q205,120 220,114 Q240,111 260,110" fill="none" stroke="#ef4444" stroke-width="2.5"/><text x="242" y="100" class="h22">k &lt; 0</text><text x="155" y="12" class="l22">y</text><text x="258" y="124" class="l22">x</text><text x="143" y="123" class="l22">O</text><text x="56" y="90" class="l22">Q2 branch</text><text x="175" y="165" class="l22">Q4 branch</text></svg>',
                caption: 'y = k/x (k < 0): the reflection in the x-axis moves the branches to the 2nd and 4th quadrants'
            },
            terms: []
        },
        {
            id: 'table-compare',
            type: 'comparisonTable',
            data: {
                headers: ['Feature', 'y = k/x', 'y = k/x²'],
                rows: [
                    ['Asymptotes', 'x = 0, y = 0', 'x = 0, y = 0'],
                    ['Quadrants (k>0)', '1st and 3rd', '1st and 2nd (above x-axis)'],
                    ['Symmetry', 'Rotational (order 2)', 'Reflective (y-axis)'],
                    ['Domain', 'x ≠ 0', 'x ≠ 0'],
                    ['End behaviour', 'y → 0 as x → ±∞', 'y → 0 as x → ±∞'],
                    ['Behaviour near x = 0', 'y → ±∞', 'y → +∞']
                ],
                caption: 'Comparison of reciprocal graph families'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Transformed Reciprocal',
                text: 'Sketch y = 2/x + 3 and state its asymptotes.<br/><br/>Start from y = 2/x (branches in quadrants 1 and 3).<br/>Add 3 → translate UP 3 units (vertical translation).<br/>• Horizontal asymptote: y = 0 moves to y = 3.<br/>• Vertical asymptote: x = 0 unchanged.<br/>• x-intercept: 0 = 2/x + 3 → 2/x = −3 → x = −2/3.<br/>• y-intercept: none (x = 0 is excluded).'
            },
            terms: []
        },
        {
            id: 'svg-reciprocal',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah22" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l22{font-family:sans-serif;font-size:10px;fill:#374151}.h22{font-family:sans-serif;font-size:10px;fill:#2563eb;font-weight:600}</style><line x1="15" y1="110" x2="265" y2="110" stroke="#374151" stroke-width="1.5" marker-end="url(#ah22)"/><line x1="140" y1="210" x2="140" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah22)"/><line x1="15" y1="110" x2="265" y2="110" stroke="#374151" stroke-width="0.5" stroke-dasharray="3,3"/><line x1="140" y1="210" x2="140" y2="15" stroke="#374151" stroke-width="0.5" stroke-dasharray="3,3"/><path d="M155,20 Q165,30 175,50 Q185,70 195,90 Q205,100 220,106 Q240,109 260,110" fill="none" stroke="#2563eb" stroke-width="2.5"/><path d="M20,110 Q40,110 60,114 Q75,118 85,125 Q100,140 110,165 Q120,185 125,205" fill="none" stroke="#2563eb" stroke-width="2.5"/><text x="242" y="100" class="h22">k &gt; 0</text><text x="155" y="12" class="l22">y</text><text x="258" y="124" class="l22">x</text><text x="143" y="123" class="l22">O</text><text x="56" y="120" class="l22">Q3 branch</text><text x="155" y="65" class="l22">Q1 branch</text></svg>',
                caption: 'y = k/x (k > 0): hyperbola with asymptotes x = 0 and y = 0; branches in quadrants 1 and 3'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always mark both asymptotes on the sketch.\n• For y = k/x + a and y = k/(x − b): the horizontal asymptote becomes y = a and the vertical asymptote becomes x = b.\n• The shape of the branches should clearly show they approach (not cross) the asymptotes.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'y = k/x: hyperbola in quadrants 1 & 3 (k>0), asymptotes x=0 and y=0, rotational symmetry. y = k/x²: always positive (k>0), y-axis symmetry, same asymptotes. Transformations shift the asymptotes: y = k/x + a → horizontal asymptote y = a; y = k/(x−b) → vertical asymptote x = b.' },
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
            { id: 'cue-1', blockId: 'key-reciprocal', prompt: 'State the domain, asymptotes, and symmetry of y = k/x (k > 0).' },
            { id: 'cue-2', blockId: 'table-compare', prompt: 'How does y = k/x² differ from y = k/x in terms of quadrants and symmetry?' },
            { id: 'cue-3', blockId: 'worked-1', prompt: 'Sketch y = 2/x + 3 and state its asymptotes and x-intercept.' },
            { id: 'cue-4', blockId: 'p-recip', prompt: 'What happens to y = k/x as x approaches 0? As x → ∞?' }
        ],
        summaryText: 'y=k/x: hyperbola, asymptotes x=0 and y=0, rotational symmetry; k>0: Q1 & Q3. y=k/x²: above x-axis, y-axis symmetry. Transformations shift asymptotes.',
        ready: true
    },
    evidence: []
};
