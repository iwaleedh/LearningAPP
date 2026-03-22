/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 9
 * "Quadratic graphs"
 */

export const note_mathematics_1_1_9 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/quadratic-graphs.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Sketch quadratic graphs by identifying the shape (positive/negative parabola), y-intercept, roots, and vertex; interpret quadratic graphs in context.' },
            terms: []
        },
        {
            id: 'h-shape',
            type: 'heading',
            data: { text: 'Shape and Orientation (the Parabola)', level: 2 },
            terms: []
        },
        {
            id: 'p-shape',
            type: 'paragraph',
            data: { text: 'The graph of y = ax² + bx + c is always a <strong>parabola</strong> — a smooth U-shaped (or ∩-shaped) curve with a single turning point (vertex). The sign of a determines the orientation: <strong>a > 0</strong> gives a ∪ minimum curve; <strong>a < 0</strong> gives a ∩ maximum curve.' },
            terms: []
        },
        {
            id: 'h-features',
            type: 'heading',
            data: { text: 'Key Features to Identify', level: 2 },
            terms: []
        },
        {
            id: 'list-features',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>y-intercept:</strong> set x = 0 → y = c' },
                    { text: '<strong>Roots (x-intercepts):</strong> set y = 0 and solve ax² + bx + c = 0 (may be 0, 1, or 2 roots)' },
                    { text: '<strong>Vertex (turning point):</strong> x-coordinate = −b/2a; y-coordinate from completing the square' },
                    { text: '<strong>Axis of symmetry:</strong> x = −b/2a (passes through the vertex)' },
                    { text: '<strong>Discriminant check:</strong> Δ = b² − 4ac tells you how many x-intercepts before solving' }
                ]
            },
            terms: []
        },
        {
            id: 'svg-labelled',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 230" style="width:100%;max-width:400px;display:block;margin:0 auto;"><defs><marker id="ah9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l9{font-family:sans-serif;font-size:11px;fill:#374151}.h9{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}.g9{font-family:sans-serif;font-size:11px;fill:#10b981;font-weight:600}</style><line x1="15" y1="145" x2="305" y2="145" stroke="#374151" stroke-width="1.5" marker-end="url(#ah9)"/><line x1="120" y1="220" x2="120" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah9)"/><line x1="195" y1="20" x2="195" y2="210" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity="0.45"/><polyline points="40,65 60,100 80,128 100,145 120,152 140,150 160,143 180,145 195,155 210,170 230,193" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><polyline points="230,193 250,220" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round" opacity="0.35"/><polyline points="40,65 30,45" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round" opacity="0.35"/><circle cx="100" cy="145" r="4.5" fill="#4f46e5"/><circle cx="180" cy="145" r="4.5" fill="#4f46e5"/><circle cx="120" cy="152" r="4.5" fill="#374151"/><circle cx="195" cy="155" r="5" fill="#10b981"/><line x1="115" y1="136" x2="115" y2="144" stroke="#374151" stroke-width="1"/><text x="78" y="160" class="h9">x\u2081</text><text x="160" y="160" class="h9">x\u2082</text><text x="125" y="148" class="l9">c</text><text x="200" y="149" class="g9">(h, k)</text><text x="196" y="30" style="font-family:sans-serif;font-size:10px;fill:#6b7280">axis of symmetry</text><text x="208" y="40" style="font-family:sans-serif;font-size:10px;fill:#6b7280">x = h = \u2212b/2a</text><text x="298" y="160" class="l9">x</text><text x="126" y="12" class="l9">y</text><text x="126" y="160" class="l9">O</text><text x="24" y="160" class="l9">y-int = c</text><line x1="30" y1="152" x2="118" y2="152" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3"/></svg>',
                caption: 'Features of y = ax² + bx + c (a > 0 shown): roots x₁ and x₂, y-intercept c, vertex (h, k), axis of symmetry x = h = −b/2a'
            },
            terms: []
        },
        {
            id: 'h-sketching',
            type: 'heading',
            data: { text: 'How to Sketch a Quadratic Graph', level: 2 },
            terms: []
        },
        {
            id: 'list-sketch',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Determine the <strong>shape</strong>: ∪ if a > 0, ∩ if a < 0.' },
                    { text: 'Find the <strong>y-intercept</strong>: set x = 0 → y = c. Mark on the y-axis.' },
                    { text: 'Find the <strong>roots</strong>: solve ax² + bx + c = 0. Mark on the x-axis.' },
                    { text: 'Find the <strong>vertex</strong>: x = −b/2a; substitute back for y. Mark the turning point.' },
                    { text: 'Draw a smooth parabola through the marked points, symmetric about x = −b/2a.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-sketch',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Sketch y = x² − 4x + 3',
                text: 'Shape: a = 1 > 0 → ∪ (minimum)<br/><br/>y-intercept: x = 0 → y = 3.  Mark (0, 3).<br/><br/>Roots: x² − 4x + 3 = 0 → (x−1)(x−3) = 0 → x = 1 and x = 3.  Mark (1,0) and (3,0).<br/><br/>Vertex: x = −(−4)/(2×1) = 2; y = 4 − 8 + 3 = −1.  Mark (2, −1).<br/><br/>Axis of symmetry: x = 2.<br/><br/>Sketch: smooth ∪ curve through (0,3), (1,0), (2,−1), (3,0), symmetric about x = 2.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always label every key point (roots, y-intercept, vertex) on a sketch.<br/>• If Δ < 0 the parabola does not cross the x-axis — do not draw roots.<br/>• The vertex x-coordinate is always the midpoint of the two roots.<br/>• Check: the y-intercept should NOT be at the vertex unless b = 0.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'A quadratic y = ax² + bx + c graphs as a parabola: ∪ shape for a > 0 (minimum), ∩ shape for a < 0 (maximum). Key features — y-intercept (0, c); roots from ax²+bx+c=0; vertex at (−b/2a, f(−b/2a)); axis of symmetry x = −b/2a. To sketch: identify shape, find y-intercept, find roots, find vertex, draw a smooth symmetric curve.' },
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
            { id: 'cue-1', blockId: 'p-shape', prompt: 'What shape does y = ax² + bx + c produce, and how does the sign of a affect it?' },
            { id: 'cue-2', blockId: 'list-features', prompt: 'List the five key features of a quadratic graph and how to find each one.' },
            { id: 'cue-3', blockId: 'worked-sketch', prompt: 'Sketch y = x² − 4x + 3. State the roots, y-intercept, and vertex.' },
            { id: 'cue-4', blockId: 'svg-labelled', prompt: 'What is the axis of symmetry of y = ax² + bx + c in terms of a and b?' },
            { id: 'cue-5', blockId: 'list-sketch', prompt: 'State the five steps for sketching a quadratic graph.' }
        ],
        summaryText: 'y=ax²+bx+c is a parabola. a>0 → minimum ∪; a<0 → maximum ∩. y-intercept: (0,c). Roots: solve y=0. Vertex: x=−b/2a; axis of symmetry x=−b/2a. Sketch by identifying all five key features.',
        ready: true
    },
    evidence: []
};
