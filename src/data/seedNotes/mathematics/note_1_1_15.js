/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 15
 * "Inequalities on graphs"
 */

export const note_mathematics_1_1_15 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/inequalities-on-graphs.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Represent and interpret inequalities in two variables (x and y) on a coordinate grid; identify regions satisfying multiple simultaneous inequalities.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'Inequalities in Two Variables', level: 2 },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: { text: 'An inequality in two variables such as y > 2x − 1 is satisfied by a whole <strong>region</strong> of the coordinate plane, rather than a single point or line. The boundary of the region is the line (or curve) obtained by replacing the inequality with an equals sign. When several inequalities are combined, the solution is the <strong>intersection</strong> of all the individual regions.' },
            terms: []
        },
        {
            id: 'h-rules',
            type: 'heading',
            data: { text: 'Rules for Drawing Inequality Regions', level: 2 },
            terms: []
        },
        {
            id: 'list-rules',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Draw the boundary</strong>: sketch y = f(x) (or ax + by = c).' },
                    { text: '<strong>Line style</strong>: use a <em>solid</em> line for ≤ or ≥ (points on the boundary are included); use a <em>dashed</em> line for < or > (boundary not included).' },
                    { text: '<strong>Test a point</strong>: choose a convenient point not on the boundary (the origin (0, 0) is usually best) and substitute into the inequality.' },
                    { text: '<strong>Shade the correct side</strong>: if the test point satisfies the inequality, shade that side; if not, shade the opposite side.' },
                    { text: '<strong>Multiple inequalities</strong>: repeat for each inequality. The feasible region is the area satisfying ALL inequalities simultaneously (the overlap).' }
                ]
            },
            terms: []
        },
        {
            id: 'key-origin',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Using the Origin as a Test Point',
                text: 'Substituting (0, 0) into the inequality gives the simplest arithmetic. <strong>Exception</strong>: if the boundary line passes through the origin, choose a different test point such as (1, 0) or (0, 1).'
            },
            terms: []
        },
        {
            id: 'worked-single',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Single Inequality',
                text: 'Represent  y ≤ 2x + 1  on a graph.<br/><br/><strong>Step 1:</strong> Draw y = 2x + 1 — a solid line (≤ includes the boundary).<br/><strong>Step 2:</strong> Test (0, 0): is 0 ≤ 2(0) + 1? → 0 ≤ 1 ✓<br/><strong>Step 3:</strong> Shade the region <em>containing</em> the origin (below and on the line).'
            },
            terms: []
        },
        {
            id: 'worked-multi',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Three Simultaneous Inequalities',
                text: 'Find the region satisfying:  x ≥ 0,  y ≥ 0,  y < −x + 4<br/><br/>① x ≥ 0: region to the right of the y-axis (solid line at x = 0).<br/>② y ≥ 0: region above the x-axis (solid line at y = 0).<br/>③ y < −x + 4: dashed line y = −x + 4; test (0, 0): 0 < 4 ✓ → shade below the line.<br/><br/><strong>Feasible region</strong>: the triangle in the first quadrant bounded by the axes and the line y = −x + 4.'
            },
            terms: []
        },
        {
            id: 'svg-region',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah15" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l15{font-family:sans-serif;font-size:11px;fill:#374151}.h15{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><polygon points="80,140 200,140 80,20" fill="#4f46e5" fill-opacity="0.15" stroke="none"/><line x1="15" y1="140" x2="265" y2="140" stroke="#374151" stroke-width="1.5" marker-end="url(#ah15)"/><line x1="80" y1="205" x2="80" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah15)"/><line x1="80" y1="140" x2="80" y2="205" stroke="#374151" stroke-width="1.5"/><line x1="15" y1="140" x2="80" y2="140" stroke="#374151" stroke-width="1.5"/><line x1="200" y1="140" x2="80" y2="20" stroke="#4f46e5" stroke-width="2" stroke-dasharray="6,3"/><circle cx="200" cy="140" r="4" fill="#4f46e5"/><circle cx="80" cy="20" r="4" fill="#4f46e5"/><circle cx="80" cy="140" r="4" fill="#4f46e5"/><text x="195" y="155" class="h15">4</text><text x="68" y="18" class="h15">4</text><text x="83" y="155" class="l15">O</text><text x="258" y="155" class="l15">x</text><text x="85" y="12" class="l15">y</text><text x="130" y="90" style="font-family:sans-serif;font-size:9px;fill:#4f46e5">feasible region</text><text x="130" y="104" style="font-family:sans-serif;font-size:9px;fill:#4f46e5">(shaded)</text></svg>',
                caption: 'Feasible region satisfying x ≥ 0, y ≥ 0, y < −x + 4 — the shaded triangle'
            },
            terms: []
        },
        {
            id: 'callout-quad',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Quadratic Boundaries',
                text: 'The boundary can be a curve, not just a line. For example, y > x² produces a parabola as the boundary. The same steps apply: draw the curve, test a point, shade the correct region. Use a dashed curve for strict inequalities.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Marks are awarded for the correct line style (solid vs dashed) AND the correct region shaded.<br/>• If asked for the region NOT satisfying the inequalities, shade everything outside — but confirm what the question asks first.<br/>• Label boundary lines clearly so the examiner knows which region is intended.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Inequality regions: draw the boundary (solid for ≤/≥, dashed for </>) → test the origin → shade the correct side. For multiple inequalities, the feasible region is the overlap satisfying every inequality simultaneously. Boundaries can be lines or curves.' },
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
            { id: 'cue-1', blockId: 'list-rules', prompt: 'What line style do you use for a strict inequality (< or >) on a graph?' },
            { id: 'cue-2', blockId: 'key-origin', prompt: 'Why is (0, 0) the preferred test point, and when can you not use it?' },
            { id: 'cue-3', blockId: 'worked-multi', prompt: 'Describe the feasible region for x ≥ 0, y ≥ 0, y < −x + 4.' },
            { id: 'cue-4', blockId: 'callout-quad', prompt: 'How do you handle a quadratic boundary when drawing inequality regions?' }
        ],
        summaryText: 'Regions: solid line (≤/≥) or dashed (</>). Test origin — shade side that satisfies. Multiple inequalities = overlap. Boundary can be curve or line.',
        ready: true
    },
    evidence: []
};
