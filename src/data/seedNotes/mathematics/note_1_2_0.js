/**
 * Seed note: Mathematics · Unit 1 · Topic 2 · Subtopic 0
 * "Basic coordinate geometry"
 */

export const note_mathematics_1_2_0 = {
    pdfPath: '/notes/mathematics/coordinate-geometry/basic-coordinate-geometry.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Calculate the distance between two points, find the midpoint of a line segment, and determine the gradient between two points using coordinate geometry formulae.' },
            terms: []
        },
        {
            id: 'h-distance',
            type: 'heading',
            data: { text: 'Distance Between Two Points', level: 2 },
            terms: []
        },
        {
            id: 'p-distance',
            type: 'paragraph',
            data: { text: 'The distance d between two points (x₁, y₁) and (x₂, y₂) is found using Pythagoras\' theorem on the horizontal and vertical separations.' },
            terms: []
        },
        {
            id: 'eq-distance',
            type: 'equation',
            data: {
                html: 'd = <span class="nb-frac"><span class="nb-num">√</span><span class="nb-den">&nbsp;</span></span>(x₂ − x₁)² + (y₂ − y₁)²',
                caption: ''
            },
            terms: []
        },
        {
            id: 'eq-distance2',
            type: 'equation',
            data: {
                html: 'd = √[(x₂ − x₁)² + (y₂ − y₁)²]',
                caption: 'Distance formula between (x₁, y₁) and (x₂, y₂)'
            },
            terms: []
        },
        {
            id: 'h-midpoint',
            type: 'heading',
            data: { text: 'Midpoint of a Line Segment', level: 2 },
            terms: []
        },
        {
            id: 'p-midpoint',
            type: 'paragraph',
            data: { text: 'The midpoint M of the segment joining (x₁, y₁) and (x₂, y₂) is the average of each pair of coordinates.' },
            terms: []
        },
        {
            id: 'eq-midpoint',
            type: 'equation',
            data: {
                html: 'M = \\left(<span class="nb-frac"><span class="nb-num">x₁ + x₂</span><span class="nb-den">2</span></span>, <span class="nb-frac"><span class="nb-num">y₁ + y₂</span><span class="nb-den">2</span></span>\\right)',
                caption: 'Midpoint formula'
            },
            terms: []
        },
        {
            id: 'h-gradient',
            type: 'heading',
            data: { text: 'Gradient of a Line Segment', level: 2 },
            terms: []
        },
        {
            id: 'p-gradient',
            type: 'paragraph',
            data: { text: 'The gradient m of a line measures its steepness. A positive gradient goes uphill left-to-right; negative goes downhill. A horizontal line has gradient 0; a vertical line is undefined.' },
            terms: []
        },
        {
            id: 'eq-gradient',
            type: 'equation',
            data: {
                html: 'm = <span class="nb-frac"><span class="nb-num">y₂ − y₁</span><span class="nb-den">x₂ − x₁</span></span> = <span class="nb-frac"><span class="nb-num">rise</span><span class="nb-den">run</span></span>',
                caption: 'Gradient formula'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example',
                text: 'A = (1, 3) and B = (5, 7). Find: (a) |AB|, (b) midpoint M, (c) gradient of AB.<br/><br/>(a) |AB| = √[(5−1)² + (7−3)²] = √[16+16] = √32 = 4√2<br/>(b) M = ((1+5)/2, (3+7)/2) = (3, 5)<br/>(c) m = (7−3)/(5−1) = 4/4 = <strong>1</strong>'
            },
            terms: []
        },
        {
            id: 'svg-segment',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" style="width:100%;max-width:300px;display:block;margin:0 auto;"><defs><marker id="ah20a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l20a{font-family:sans-serif;font-size:11px;fill:#374151}.h20a{font-family:sans-serif;font-size:11px;fill:#2563eb;font-weight:600}</style><line x1="20" y1="90" x2="220" y2="90" stroke="#374151" stroke-width="1.2" marker-end="url(#ah20a)"/><line x1="80" y1="170" x2="80" y2="15" stroke="#374151" stroke-width="1.2" marker-end="url(#ah20a)"/><line x1="40" y1="145" x2="180" y2="40" stroke="#2563eb" stroke-width="2.5"/><circle cx="40" cy="145" r="4" fill="#2563eb"/><circle cx="180" cy="40" r="4" fill="#2563eb"/><circle cx="110" cy="92" r="4" fill="#10b981"/><line x1="40" y1="145" x2="180" y2="145" stroke="#374151" stroke-width="1" stroke-dasharray="4,3"/><line x1="180" y1="145" x2="180" y2="40" stroke="#374151" stroke-width="1" stroke-dasharray="4,3"/><text x="25" y="158" class="h20a">A(x\u2081,y\u2081)</text><text x="183" y="38" class="h20a">B(x\u2082,y\u2082)</text><text x="113" y="87" style="font-family:sans-serif;font-size:10px;fill:#10b981">M</text><text x="100" y="160" class="l20a">x\u2082\u2212x\u2081</text><text x="185" y="100" class="l20a">y\u2082\u2212y\u2081</text><text x="213" y="104" class="l20a">x</text><text x="84" y="12" class="l20a">y</text></svg>',
                caption: 'Distance = hypotenuse of right triangle; M = midpoint; gradient = rise/run'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Keep expressions under the square root until the very end to avoid rounding errors.<br/>• The order of subtraction in the gradient formula does not matter, provided it is consistent: (y₂−y₁)/(x₂−x₁) gives the same result as (y₁−y₂)/(x₁−x₂).<br/>• If you are asked for an exact distance, leave as a surd (e.g. 4√2).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Distance: d = √[(x₂−x₁)²+(y₂−y₁)²]. Midpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2). Gradient: m = (y₂−y₁)/(x₂−x₁). These three formulae underpin all coordinate geometry at A-level.' },
            terms: []
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Be careful with negative coordinates when substituting into the distance and gradient formulae; always use brackets to avoid sign errors, such as accidentally subtracting a negative value without turning it into a positive."
            },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'eq-distance2', prompt: 'State the formula for the distance between (x₁, y₁) and (x₂, y₂).' },
            { id: 'cue-2', blockId: 'eq-midpoint', prompt: 'State the formula for the midpoint of a line segment.' },
            { id: 'cue-3', blockId: 'eq-gradient', prompt: 'What is the gradient formula and what does each term mean?' },
            { id: 'cue-4', blockId: 'worked-1', prompt: 'For A=(1,3) and B=(5,7): find |AB|, the midpoint, and the gradient.' }
        ],
        summaryText: 'd=√[(Δx)²+(Δy)²]; M=((x₁+x₂)/2,(y₁+y₂)/2); m=(y₂−y₁)/(x₂−x₁). Exact surds unless asked otherwise.',
        ready: true
    },
    evidence: []
};
