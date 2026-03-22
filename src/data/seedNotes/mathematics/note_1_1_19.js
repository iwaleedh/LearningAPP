/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 19
 * "Reflections"
 */

export const note_mathematics_1_1_19 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/reflections.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply reflection transformations to graphs: y = −f(x) reflects in the x-axis; y = f(−x) reflects in the y-axis; identify the effect on key points and asymptotes.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'Reflection Transformations', level: 2 },
            terms: []
        },
        {
            id: 'list-intro',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'A <strong>reflection</strong> maps every point on the graph to its mirror image through an axis.' },
                    { text: 'Two reflections are tested at A-level: reflection in the x-axis and the y-axis.' },
                    { text: 'Reflecting in the x-axis negates the <strong>output</strong> (y value); reflecting in the y-axis negates the <strong>input</strong> (x value).' }
                ]
            },
            terms: []
        },
        {
            id: 'h-xaxis',
            type: 'heading',
            data: { text: 'Reflection in the x-axis: y = −f(x)', level: 2 },
            terms: []
        },
        {
            id: 'list-xaxis',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Replace f(x) with −f(x): every y-coordinate is negated; x-coordinates are unchanged.' },
                    { text: 'Points on the x-axis (where y = 0) remain fixed.' },
                    { text: 'All other points flip to the opposite side of the x-axis.' }
                ]
            },
            terms: []
        },
        {
            id: 'key-xaxis',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: y = −f(x)',
                text: 'Every point (x, y) → (x, −y)<br/>Reflection in the <strong>x-axis</strong>.<br/>x-intercepts remain unchanged; y-intercept changes sign.'
            },
            terms: []
        },
        {
            id: 'h-yaxis',
            type: 'heading',
            data: { text: 'Reflection in the y-axis: y = f(−x)', level: 2 },
            terms: []
        },
        {
            id: 'list-yaxis',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Replace x with −x inside the function: y = f(−x); every x-coordinate is negated; y-coordinates are unchanged.' },
                    { text: 'Points on the y-axis (where x = 0) remain fixed.' },
                    { text: 'All other points flip to the opposite side of the y-axis.' }
                ]
            },
            terms: []
        },
        {
            id: 'key-yaxis',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: y = f(−x)',
                text: 'Every point (x, y) → (−x, y)<br/>Reflection in the <strong>y-axis</strong>.<br/>y-intercept remains unchanged; x-intercepts change sign.'
            },
            terms: []
        },
        {
            id: 'table-compare',
            type: 'comparisonTable',
            data: {
                headers: ['Transformation', 'Notation', 'Axis of reflection', 'Point mapping'],
                rows: [
                    ['Negate output', 'y = −f(x)', 'x-axis', '(x, y) → (x, −y)'],
                    ['Negate input', 'y = f(−x)', 'y-axis', '(x, y) → (−x, y)']
                ],
                caption: 'Comparison of the two reflections'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Reflection in x-axis',
                text: 'f(x) = x² − 4. Sketch y = −f(x) and state the y-intercept and x-intercepts.<br/><br/>y = −(x² − 4) = −x² + 4<br/>• y-intercept: x = 0 → y = 4   [was −4, now +4]<br/>• x-intercepts: −x² + 4 = 0 → x = ±2   [unchanged]<br/>• Shape: inverted ∩ parabola (a = −1 < 0), vertex at (0, 4).'
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Reflection in y-axis',
                text: 'f(x) = (x − 3)² + 1. Find the equation and vertex of y = f(−x).<br/><br/>y = f(−x) = (−x − 3)² + 1 = (x + 3)² + 1<br/>• Vertex moves from (3, 1) to (−3, 1).<br/>• y-intercept: (0 + 3)² + 1 = 10.'
            },
            terms: []
        },
        {
            id: 'svg-reflect',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" style="width:100%;max-width:370px;display:block;margin:0 auto;"><defs><marker id="ah19" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l19{font-family:sans-serif;font-size:10px;fill:#374151}.hl19{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}.g19{font-family:sans-serif;font-size:10px;fill:#10b981;font-weight:600}</style><line x1="15" y1="100" x2="285" y2="100" stroke="#374151" stroke-width="1.5" marker-end="url(#ah19)"/><line x1="150" y1="190" x2="150" y2="10" stroke="#374151" stroke-width="1.5" marker-end="url(#ah19)"/><polyline points="70,10 90,35 110,55 130,75 150,85 170,75 190,55 210,35 230,10" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,3" stroke-linejoin="round"/><polyline points="70,190 90,165 110,145 130,125 150,115 170,125 190,145 210,165 230,190" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><polyline points="220,10 200,35 180,55 160,75 150,85 140,75 120,55 100,35 80,10" fill="none" stroke="#10b981" stroke-width="2" stroke-linejoin="round"/><circle cx="150" cy="85" r="3.5" fill="#374151"/><text x="72" y="21" class="l19">f(x)</text><text x="78" y="178" class="hl19">\u2212f(x)</text><text x="222" y="21" class="g19">f(\u2212x)</text><text x="278" y="114" class="l19">x</text><text x="154" y="8" class="l19">y</text></svg>',
                caption: 'Dashed: y = f(x). Indigo: y = −f(x) (reflection in x-axis). Green: y = f(−x) (reflection in y-axis).'
            },
            terms: []
        },
        {
            id: 'callout-asymptotes',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Asymptotes Under Reflection',
                text: 'Asymptotes are transformed by the same rules:<br/>• y = −f(x): a horizontal asymptote y = c becomes y = −c. A vertical asymptote x = a is unchanged.<br/>• y = f(−x): a vertical asymptote x = a becomes x = −a. A horizontal asymptote y = c is unchanged.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Clearly describe the transformation in words: "reflection in the x-axis" or "reflection in the y-axis".<br/>• Mark the transformed coordinates of all labelled points on the original curve.<br/>• For functions where f(−x) = f(x), the graph is unchanged by y-axis reflection — this means f is even.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Reflections: −f(x) reflects in the x-axis, mapping (x, y) → (x, −y); x-intercepts stay, y-intercept changes sign. f(−x) reflects in the y-axis, mapping (x, y) → (−x, y); y-intercept stays, x-intercepts change sign. Transform asymptotes by the same rules.' },
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
            { id: 'cue-1', blockId: 'key-xaxis', prompt: 'What transformation is y = −f(x)? How does it move the point (3, −2)?' },
            { id: 'cue-2', blockId: 'key-yaxis', prompt: 'What transformation is y = f(−x)? How does it move the point (3, −2)?' },
            { id: 'cue-3', blockId: 'worked-1', prompt: 'Write the equation and state the vertex of y = −(x²−4).' },
            { id: 'cue-4', blockId: 'callout-asymptotes', prompt: 'If y = f(x) has asymptote x = 2, what is the asymptote of y = f(−x)?' }
        ],
        summaryText: '−f(x): reflect in x-axis, (x,y)→(x,−y). f(−x): reflect in y-axis, (x,y)→(−x,y). Asymptotes transform by the same rule.',
        ready: true
    },
    evidence: []
};
