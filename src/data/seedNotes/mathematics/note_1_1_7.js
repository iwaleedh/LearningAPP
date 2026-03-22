/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 7
 * "Completing the square"
 */

export const note_mathematics_1_1_7 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/completing-the-square.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Complete the square for quadratic expressions with a = 1 and a ≠ 1; use the completed-square form to find the vertex of a parabola, solve quadratic equations, and prove results.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is Completing the Square?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'Completing the square rewrites a quadratic y = ax² + bx + c into the form y = a(x + p)² + q. This form directly shows the <strong>vertex (turning point)</strong> of the parabola at (−p, q), and the axis of symmetry x = −p. It is used to solve equations, find vertices, and construct proofs.' },
            terms: []
        },
        {
            id: 'svg-geom',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160" style="width:100%;max-width:480px;display:block;margin:0 auto;"><defs><marker id="ahg7" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><style>.gt7{font-family:sans-serif;font-size:14px;fill:#374151;font-weight:600}.glt7{font-family:sans-serif;font-size:12px;fill:#6b7280}</style><rect x="40" y="40" width="80" height="80" fill="#0f172a" stroke="#4f46e5" stroke-width="1.5"/><rect x="120" y="40" width="30" height="80" fill="#2d2f72" stroke="#4f46e5" stroke-width="1.5"/><text x="80" y="85" text-anchor="middle" class="gt7">x²</text><text x="135" y="85" text-anchor="middle" class="gt7">bx</text><text x="80" y="32" text-anchor="middle" class="glt7">x</text><text x="135" y="32" text-anchor="middle" class="glt7">b</text><text x="28" y="85" text-anchor="middle" class="glt7">x</text><text x="180" y="85" text-anchor="middle" class="gt7">→</text><rect x="230" y="40" width="80" height="80" fill="#0f172a" stroke="#4f46e5" stroke-width="1.5"/><rect x="310" y="40" width="20" height="80" fill="#2d2f72" stroke="#4f46e5" stroke-width="1.5"/><rect x="230" y="120" width="80" height="20" fill="#2d2f72" stroke="#4f46e5" stroke-width="1.5"/><rect x="310" y="120" width="20" height="20" fill="#3d1212" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,2"/><text x="270" y="85" text-anchor="middle" class="gt7">x²</text><text x="270" y="135" text-anchor="middle" class="gt7" font-size="10" fill="#4f46e5">½bx</text><text x="320" y="85" text-anchor="middle" class="gt7" font-size="10" fill="#4f46e5">½bx</text><text x="320" y="135" text-anchor="middle" class="gt7" font-size="10" fill="#ef4444">(b/2)²</text><path d="M 335 150 Q 355 160 380 140" fill="none" stroke="#ef4444" stroke-width="1.5" marker-end="url(#ahg7)"/><text x="380" y="130" class="glt7" fill="#ef4444">Missing piece</text></svg>',
                caption: 'Geometric meaning: to complete the square (x + b/2)², we split bx into halves and add the missing corner piece (b/2)²'
            },
            terms: []
        },
        {
            id: 'h-method1',
            type: 'heading',
            data: { text: 'Case 1: Coefficient of x² is 1 (a = 1)', level: 2 },
            terms: []
        },
        {
            id: 'p-method1',
            type: 'paragraph',
            data: { text: 'When a = 1: take half the coefficient of x, write (x + b/2)², then subtract (b/2)² to correct for the extra constant introduced.' },
            terms: []
        },
        {
            id: 'eq-method1',
            type: 'equation',
            data: {
                html: 'x\u00b2 + bx + c = (x + <span class="nb-frac"><span class="nb-num">b</span><span class="nb-den">2</span></span>)\u00b2 \u2212 <span class="nb-frac"><span class="nb-num">b\u00b2</span><span class="nb-den">4</span></span> + c',
                caption: 'Completing the square when a = 1'
            },
            terms: []
        },
        {
            id: 'worked-a1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — a = 1',
                text: 'Complete the square for  x² − 4x + 7<br/><br/>Half of −4 is −2.  Write (x − 2)²<br/>(x − 2)² = x² − 4x + 4,  so subtract 4 and add the original constant:<br/><br/>x² − 4x + 7 = (x − 2)² − 4 + 7<br/><strong>= (x − 2)² + 3</strong><br/><br/>Vertex (minimum) is at (2, 3).'
            },
            terms: []
        },
        {
            id: 'h-method2',
            type: 'heading',
            data: { text: 'Case 2: Coefficient of x² is not 1 (a ≠ 1)', level: 2 },
            terms: []
        },
        {
            id: 'p-method2',
            type: 'paragraph',
            data: { text: 'When a ≠ 1: first factor a out from the x² and x terms only, then complete the square inside the bracket. Expand and collect the constants outside.' },
            terms: []
        },
        {
            id: 'worked-a2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — a ≠ 1',
                text: 'Complete the square for  2x² − 8x + 3<br/><br/>Factor 2 from the x terms: 2(x² − 4x) + 3<br/>Complete the square inside: 2[(x − 2)² − 4] + 3<br/>Expand: 2(x − 2)² − 8 + 3<br/><strong>= 2(x − 2)² − 5</strong><br/><br/>Vertex (minimum) is at (2, −5).'
            },
            terms: []
        },
        {
            id: 'svg-vertex',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 210" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l7{font-family:sans-serif;font-size:11px;fill:#374151}.h7{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}.g7{font-family:sans-serif;font-size:11px;fill:#10b981;font-weight:600}</style><line x1="20" y1="130" x2="265" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah7)"/><line x1="140" y1="200" x2="140" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah7)"/><line x1="140" y1="20" x2="140" y2="175" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity="0.4"/><polyline points="50,45 70,82 95,112 120,126 140,130 160,126 185,112 210,82 230,45" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="140" cy="130" r="4.5" fill="#10b981"/><polyline points="140,130 165,130" stroke="#e5e7eb" stroke-width="1"/><polyline points="140,130 140,100" stroke="#e5e7eb" stroke-width="1"/><text x="115" y="100" class="g7">(−p, q)</text><text x="145" y="143" class="g7">vertex</text><text x="152" y="35" class="l7" style="fill:#6b7280;font-size:10px">axis: x = −p</text><text x="258" y="145" class="l7">x</text><text x="147" y="12" class="l7">y</text><text x="144" y="143" class="l7"></text></svg>',
                caption: 'y = a(x+p)² + q: vertex at (−p, q), axis of symmetry x = −p'
            },
            terms: []
        },
        {
            id: 'h-uses',
            type: 'heading',
            data: { text: 'Uses of Completed-Square Form', level: 2 },
            terms: []
        },
        {
            id: 'list-uses',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>Vertex:</strong> y = a(x+p)² + q → turning point at (−p, q)' },
                    { text: '<strong>Minimum/Maximum:</strong> if a > 0 the vertex is a minimum; if a < 0 it is a maximum' },
                    { text: '<strong>Axis of symmetry:</strong> x = −p' },
                    { text: '<strong>Solving equations:</strong> set a(x+p)² + q = 0 and solve for x' },
                    { text: '<strong>Proofs:</strong> use the fact that (x+p)² ≥ 0 for all real x to prove minimum/maximum results' }
                ]
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Questions sometimes ask you to "express in the form a(x+p)² + q" — this is completing the square.<br/>• The vertex coordinates come directly from completed-square form: (−p, q).<br/>• For a > 0, the minimum value of the quadratic is q; for a < 0, the maximum value is q.<br/>• Always double-check by expanding your completed-square answer back out.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Completing the square converts ax² + bx + c into a(x+p)² + q. For a=1: p = b/2, q = c − (b/2)². For a≠1: factor a from the x-terms first. The vertex (turning point) is at (−p, q); axis of symmetry is x = −p. The form is used to solve equations, find vertices, and prove results about minimum/maximum values.' },
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
            { id: 'cue-1', blockId: 'eq-method1', prompt: 'State the completed-square form of x² + bx + c.' },
            { id: 'cue-2', blockId: 'worked-a1', prompt: 'Complete the square for x² − 4x + 7 and state the vertex.' },
            { id: 'cue-3', blockId: 'worked-a2', prompt: 'Complete the square for 2x² − 8x + 3 and state the vertex.' },
            { id: 'cue-4', blockId: 'list-uses', prompt: 'List three uses of the completed-square form y = a(x+p)² + q.' },
            { id: 'cue-5', blockId: 'svg-vertex', prompt: 'If y = 3(x − 4)² + 7, state the vertex and axis of symmetry.' }
        ],
        summaryText: 'ax²+bx+c = a(x+p)²+q. For a=1: p=b/2, q=c−(b/2)². For a≠1: factorise a from x-terms first. Vertex → (−p,q). Axis → x=−p. Minimum value is q when a>0.',
        ready: true
    },
    evidence: []
};
