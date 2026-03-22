/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 16
 * "Sketching polynomials"
 */

export const note_mathematics_1_1_16 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/sketching-polynomials.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Sketch the graphs of polynomial functions including cubics and quartics; determine key features (intercepts, turning points, end behaviour); understand how repeated roots affect the curve.' },
            terms: []
        },
        {
            id: 'h-key',
            type: 'heading',
            data: { text: 'Key Features of a Polynomial Sketch', level: 2 },
            terms: []
        },
        {
            id: 'list-features',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: '<strong>y-intercept</strong>: set x = 0 → y = constant term.' },
                    { text: '<strong>x-intercepts (roots)</strong>: set y = 0 and solve. Each factor (x − a) gives a root at x = a.' },
                    { text: '<strong>End behaviour</strong>: determined by the leading term (highest power and its coefficient).' },
                    { text: '<strong>Repeated roots</strong>: even multiplicity → curve <em>bounces</em> (touches and returns); odd multiplicity → curve <em>crosses</em> (changes sign).' }
                ]
            },
            terms: []
        },
        {
            id: 'h-end',
            type: 'heading',
            data: { text: 'End Behaviour', level: 2 },
            terms: []
        },
        {
            id: 'table-end',
            type: 'comparisonTable',
            data: {
                headers: ['Leading term', 'As x → −∞', 'As x → +∞'],
                rows: [
                    ['+ xⁿ, n even', '→ +∞', '→ +∞'],
                    ['− xⁿ, n even', '→ −∞', '→ −∞'],
                    ['+ xⁿ, n odd', '→ −∞', '→ +∞'],
                    ['− xⁿ, n odd', '→ +∞', '→ −∞']
                ],
                caption: 'End behaviour summary'
            },
            terms: []
        },
        {
            id: 'h-roots',
            type: 'heading',
            data: { text: 'Root Multiplicity', level: 2 },
            terms: []
        },
        {
            id: 'table-roots',
            type: 'comparisonTable',
            data: {
                headers: ['Factor', 'Multiplicity', 'Curve behaviour at root'],
                rows: [
                    ['(x − a)', 'Simple (1)', 'Crosses x-axis at x = a'],
                    ['(x − a)²', 'Double (2)', 'Touches (bounces off) x-axis at x = a'],
                    ['(x − a)³', 'Triple (3)', 'Crosses but flattens at x = a']
                ],
                caption: 'Multiplicity rules'
            },
            terms: []
        },
        {
            id: 'worked-cubic',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Cubic Sketch',
                text: 'Sketch  y = (x + 2)(x − 1)(x − 3)<br/><br/>• x-intercepts: x = −2, x = 1, x = 3 (all simple → all crossings)<br/>• y-intercept: (0)(−1)(−3) = −6 → (0, −6)<br/>• Leading term: x³ (positive, odd) → starts bottom-left, ends top-right<br/><br/>Sketch: crosses x-axis at −2, dips through −6 at y-axis, crosses at 1, rises to cross at 3, continues up.'
            },
            terms: []
        },
        {
            id: 'worked-quartic',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Quartic with Repeated Root',
                text: 'Sketch  y = (x + 1)²(x − 2)²<br/><br/>• x-intercepts: x = −1 (double: bounce), x = 2 (double: bounce)<br/>• y-intercept: (1)²(−2)² = 4 → (0, 4)<br/>• Leading term: x⁴ (positive, even) → both ends go to +∞<br/>• Curve: starts top-left, bounces at x = −1, dips to a local min, comes back up through (0,4), bounces at x = 2, ends top-right.'
            },
            terms: []
        },
        {
            id: 'svg-quartic',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah16q" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l16{font-family:sans-serif;font-size:11px;fill:#374151}.h16{font-family:sans-serif;font-size:11px;fill:#10b981;font-weight:600}</style><line x1="15" y1="140" x2="265" y2="140" stroke="#374151" stroke-width="1.5" marker-end="url(#ah16q)"/><line x1="140" y1="195" x2="140" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah16q)"/><path d="M 40 20 Q 55 120 80 140 T 140 100 T 200 140 T 240 20" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round"/><circle cx="80" cy="140" r="4" fill="#10b981"/><circle cx="200" cy="140" r="4" fill="#10b981"/><circle cx="140" cy="100" r="4" fill="#374151"/><text x="70" y="155" class="h16">\u22121</text><text x="195" y="155" class="h16">2</text><text x="145" y="95" class="l16">4</text><text x="260" y="154" class="l16">x</text><text x="145" y="12" class="l16">y</text><text x="130" y="154" class="l16">O</text></svg>',
                caption: 'y = (x+1)²(x−2)²: positive even leading term, bounces at double roots x = −1 and x = 2'
            },
            terms: []
        },
        {
            id: 'svg-cubic',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah16" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l16{font-family:sans-serif;font-size:11px;fill:#374151}.h16{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><line x1="15" y1="120" x2="265" y2="120" stroke="#374151" stroke-width="1.5" marker-end="url(#ah16)"/><line x1="90" y1="195" x2="90" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah16)"/><polyline points="20,185 40,155 60,128 80,118 90,115 100,116 120,124 140,132 160,128 180,112 200,88 220,60 250,20" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="35" cy="120" r="4" fill="#4f46e5"/><circle cx="130" cy="120" r="4" fill="#4f46e5"/><circle cx="210" cy="120" r="4" fill="#4f46e5"/><circle cx="90" cy="138" r="4" fill="#10b981"/><text x="20" y="114" class="h16">\u22122</text><text x="124" y="114" class="h16">1</text><text x="204" y="114" class="h16">3</text><text x="94" y="152" class="l16">\u22126</text><text x="260" y="134" class="l16">x</text><text x="95" y="12" class="l16">y</text><text x="93" y="116" class="l16">O</text></svg>',
                caption: 'Sketch of y = (x+2)(x−1)(x−3): crossings at −2, 1, 3; y-intercept −6; positive cubic end-behaviour'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• You only need a <em>sketch</em>, not a precise plot — focus on correct intercepts, end behaviour, and root types (cross vs bounce).<br/>• Label all axis intercepts and any turning points you can identify.<br/>• The number of turning points is at most n − 1 for a degree-n polynomial.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Polynomial sketches: find y-intercept (x=0), x-intercepts from roots, end behaviour from leading term (positive even → both ends up; positive odd → bottom-left to top-right). Simple root → crosses; double root → bounces. No accurate plotting needed — label all intercepts clearly.' },
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
            { id: 'cue-1', blockId: 'table-end', prompt: 'Describe the end behaviour of y = −x⁴ + 3x² − 1 as x → ±∞.' },
            { id: 'cue-2', blockId: 'table-roots', prompt: 'What is the difference in the graph at a simple root versus a double root?' },
            { id: 'cue-3', blockId: 'worked-cubic', prompt: 'List the key steps to sketch y = (x+2)(x−1)(x−3).' },
            { id: 'cue-4', blockId: 'worked-quartic', prompt: 'Describe the sketch of y = (x+1)²(x−2)², focussing on root behaviour.' }
        ],
        summaryText: 'Polynomial sketches: y-intercept → x-intercepts → end behaviour from leading term → root multiplicity (cross or bounce). Label all intercepts.',
        ready: true
    },
    evidence: []
};
