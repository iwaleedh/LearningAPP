/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 0
 * "Basic definitions of trigonometric functions"
 */

export const note_mathematics_1_3_0 = {
    pdfPath: '/notes/mathematics/trigonometry/basic-definitions.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Define sin, cos and tan as ratios of sides in a right-angled triangle; interpret these ratios on the unit circle; use the CAST diagram to determine signs in each quadrant; recall tan θ = sin θ / cos θ.' },
            terms: []
        },
        {
            id: 'h-ratios',
            type: 'heading',
            data: { text: 'Trigonometric Ratios', level: 2 },
            terms: []
        },
        {
            id: 'p-ratios',
            type: 'paragraph',
            data: { text: 'The three primary trigonometric functions are defined as ratios of the sides of a right-angled triangle relative to an angle θ. Label the sides as: <strong>Hypotenuse (H)</strong> — the longest side (opposite the right angle); <strong>Opposite (O)</strong> — the side opposite angle θ; <strong>Adjacent (A)</strong> — the side next to angle θ (not the hypotenuse).' },
            terms: []
        },
        {
            id: 'key-sohcahtoa',
            type: 'callout',
            data: {
                style: 'key',
                title: 'SOHCAHTOA — The Three Ratios',
                text: 'sin θ = <strong>O</strong>/<strong>H</strong> &nbsp;·&nbsp; cos θ = <strong>A</strong>/<strong>H</strong> &nbsp;·&nbsp; tan θ = <strong>O</strong>/<strong>A</strong><br/><br/>Mnemonic: <em>Some Old Hens Cackle And Howl Through Old Age</em>'
            },
            terms: []
        },
        {
            id: 'svg-triangle',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" style="width:100%;max-width:300px;display:block;margin:0 auto;"><style>.lt{font-family:sans-serif;font-size:11px;fill:#374151}.lh{font-family:sans-serif;font-size:12px;fill:#4f46e5;font-weight:bold}</style><polygon points="30,150 180,150 180,40" fill="none" stroke="#374151" stroke-width="1.5"/><rect x="166" y="136" width="14" height="14" fill="none" stroke="#374151" stroke-width="1.2"/><text x="38" y="148" class="lt">θ</text><text x="100" y="168" class="lh">Adjacent (A)</text><text x="185" y="100" class="lh" transform="rotate(90,185,100)" text-anchor="middle">Opposite (O)</text><text x="95" y="90" class="lh" transform="rotate(-33,95,90)" text-anchor="middle">Hypotenuse (H)</text></svg>',
                caption: 'Right-angled triangle: O opposite θ, A adjacent to θ, H is always the hypotenuse'
            },
            terms: []
        },
        {
            id: 'h-identity',
            type: 'heading',
            data: { text: 'The Tangent Identity', level: 2 },
            terms: []
        },
        {
            id: 'eq-tanid',
            type: 'equation',
            data: {
                html: 'tan θ = <span class="nb-frac"><span class="nb-num">sin θ</span><span class="nb-den">cos θ</span></span>',
                caption: 'tan is the ratio of sin to cos — proved directly from O/A = (O/H) ÷ (A/H)'
            },
            terms: []
        },
        {
            id: 'h-unit-circle',
            type: 'heading',
            data: { text: 'The Unit Circle', level: 2 },
            terms: []
        },
        {
            id: 'p-unit-circle',
            type: 'paragraph',
            data: { text: 'The unit circle has radius 1 and centre (0, 0). For an angle θ measured anticlockwise from the positive x-axis, the point on the circle is: (x, y) = (cos θ, sin θ). This extends the definitions of sin and cos to angles beyond 90°.' },
            terms: []
        },
        {
            id: 'h-cast',
            type: 'heading',
            data: { text: 'CAST Diagram — Signs of Trig Functions', level: 2 },
            terms: []
        },
        {
            id: 'p-cast',
            type: 'paragraph',
            data: { text: 'As θ increases beyond 90°, x and y can become negative, so cos and sin change sign. The CAST diagram shows which functions are <strong>positive</strong> in each quadrant:' },
            terms: []
        },
        {
            id: 'table-cast',
            type: 'comparisonTable',
            data: {
                headers: ['Quadrant', 'Range', 'Positive functions'],
                rows: [
                    ['1st (C → A)', '0° – 90°', 'All (sin, cos, tan)'],
                    ['2nd', '90° – 180°', 'Sin only'],
                    ['3rd', '180° – 270°', 'Tan only'],
                    ['4th', '270° – 360°', 'Cos only']
                ],
                caption: 'CAST: reading anticlockwise from Q4 — Cos, All, Sin, Tan'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• CAST is used to find secondary solutions when solving trig equations — e.g. sin is positive in Q1 and Q2, so sin x = 0.5 gives x = 30° and x = 150°.<br/>• Always check calculator is in degree or radian mode as required by the question.<br/>• "Principal value" given by calculator is the Q1 (or Q4 for negative) solution only.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'sin θ = O/H, cos θ = A/H, tan θ = O/A. The unit circle gives (cos θ, sin θ). tan θ = sin θ / cos θ. CAST: All positive in Q1; Sin in Q2; Tan in Q3; Cos in Q4.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-sohcahtoa', prompt: 'State the three SOHCAHTOA ratios and what each letter stands for.' },
            { id: 'cue-2', blockId: 'eq-tanid', prompt: 'Prove that tan θ = sin θ / cos θ using the basic definitions.' },
            { id: 'cue-3', blockId: 'table-cast', prompt: 'In which quadrants are (a) sin, (b) cos, (c) tan positive?' },
            { id: 'cue-4', blockId: 'p-unit-circle', prompt: 'What are the coordinates of the point on the unit circle at angle θ?' }
        ],
        summaryText: 'sin=O/H, cos=A/H, tan=O/A=sin/cos. Unit circle: (cos θ, sin θ). CAST: All-Sin-Tan-Cos positive in Q1-Q2-Q3-Q4.',
        ready: true
    },
    evidence: []
};
