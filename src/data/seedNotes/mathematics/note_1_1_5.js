/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 5
 * "Solving quadratic equations"
 */

export const note_mathematics_1_1_5 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/solving-quadratic-equations.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Solve quadratic equations using factorisation, completing the square, and the quadratic formula; choose the most efficient method for a given problem.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'What is a Quadratic Equation?', level: 2 },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: { text: 'A quadratic equation is any equation that can be written in the <strong>standard form ax² + bx + c = 0</strong>, where a ≠ 0. If an equation does not look like this, rearrange it into this form before solving. There are exactly three methods you must be able to use at A-level.' },
            terms: []
        },
        {
            id: 'key-methods',
            type: 'callout',
            data: {
                style: 'key',
                title: 'The Three Methods',
                text: '<strong>1. Factorisation</strong> — fastest when integer factors exist<br/><strong>2. Completing the square</strong> — always works; also gives the vertex<br/><strong>3. Quadratic formula</strong> — always works; best for non-integer coefficients'
            },
            terms: []
        },
        {
            id: 'svg-methods',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" style="width:100%;max-width:450px;display:block;margin:0 auto;"><defs><marker id="ahm5" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><style>.t5{font-family:sans-serif;font-size:14px;fill:#374151;font-weight:700}.l5{font-family:sans-serif;font-size:12px;fill:#6b7280;text-anchor:middle}</style><rect x="150" y="10" width="100" height="30" rx="4" fill="#2d2f72" stroke="#4f46e5" stroke-width="1.5"/><text x="200" y="30" text-anchor="middle" class="t5" fill="#4f46e5">ax² + bx + c = 0</text><path d="M 170 40 L 90 70" fill="none" stroke="#374151" stroke-width="1.5" marker-end="url(#ahm5)"/><path d="M 200 40 L 200 70" fill="none" stroke="#374151" stroke-width="1.5" marker-end="url(#ahm5)"/><path d="M 230 40 L 310 70" fill="none" stroke="#374151" stroke-width="1.5" marker-end="url(#ahm5)"/><rect x="10" y="70" width="120" height="40" rx="4" fill="#0f172a" stroke="#374151" stroke-width="1"/><text x="70" y="85" class="t5" text-anchor="middle" font-size="12">Factorisation</text><text x="70" y="100" class="l5" font-size="10">Fastest, if possible</text><rect x="140" y="70" width="120" height="40" rx="4" fill="#0f172a" stroke="#374151" stroke-width="1"/><text x="200" y="85" class="t5" text-anchor="middle" font-size="12">Complete Square</text><text x="200" y="100" class="l5" font-size="10">Gives vertex</text><rect x="270" y="70" width="120" height="40" rx="4" fill="#0f172a" stroke="#374151" stroke-width="1"/><text x="330" y="85" class="t5" text-anchor="middle" font-size="12">Formula</text><text x="330" y="100" class="l5" font-size="10">Always works</text></svg>',
                caption: 'The three pathways to solve a quadratic equation'
            },
            terms: []
        },
        {
            id: 'h-factorise',
            type: 'heading',
            data: { text: 'Method 1: Factorisation', level: 2 },
            terms: []
        },
        {
            id: 'p-factorise',
            type: 'paragraph',
            data: { text: 'Find two numbers that <em>multiply</em> to give ac and <em>add</em> to give b. Split the middle term and factor by grouping. Then set each bracket equal to zero and solve.' },
            terms: []
        },
        {
            id: 'list-factorise',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Rearrange to ax² + bx + c = 0.' },
                    { text: 'Find p and q such that pq = ac and p + q = b.' },
                    { text: 'Write as a product of two brackets, e.g. (x + m)(x + n) = 0.' },
                    { text: 'Set each bracket equal to 0 and solve for x.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-factorise',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Factorisation',
                text: 'Solve  x² + 5x + 6 = 0<br/><br/>Need two numbers: product = 6, sum = 5 → <strong>2 and 3</strong><br/>→ (x + 2)(x + 3) = 0<br/>→ x + 2 = 0  or  x + 3 = 0<br/><strong>∴ x = −2 or x = −3</strong>'
            },
            terms: []
        },
        {
            id: 'h-ctq',
            type: 'heading',
            data: { text: 'Method 2: Completing the Square', level: 2 },
            terms: []
        },
        {
            id: 'p-ctq',
            type: 'paragraph',
            data: { text: 'Rewrite ax² + bx + c as a(x + p)² + q and solve. This method always works and also produces the coordinates of the turning point (vertex) of the parabola.' },
            terms: []
        },
        {
            id: 'worked-ctq',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Completing the Square',
                text: 'Solve  x² − 6x + 5 = 0<br/><br/>Complete the square: (x − 3)² − 9 + 5 = 0<br/>→ (x − 3)² = 4<br/>→ x − 3 = ±2<br/><strong>∴ x = 5  or  x = 1</strong>'
            },
            terms: []
        },
        {
            id: 'h-formula',
            type: 'heading',
            data: { text: 'Method 3: The Quadratic Formula', level: 2 },
            terms: []
        },
        {
            id: 'p-formula',
            type: 'paragraph',
            data: { text: 'Derived by completing the square on the general form, the formula works for any quadratic. Identify a, b and c carefully — especially watch signs on negative coefficients.' },
            terms: []
        },
        {
            id: 'eq-formula',
            type: 'equation',
            data: {
                html: 'x = <span class="nb-frac"><span class="nb-num">−b ± √(b² − 4ac)</span><span class="nb-den">2a</span></span>',
                caption: 'Quadratic formula — for ax² + bx + c = 0'
            },
            terms: []
        },
        {
            id: 'worked-formula',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Quadratic Formula',
                text: 'Solve  2x² + 5x − 12 = 0<br/><br/>a = 2,  b = 5,  c = −12<br/>b² − 4ac = 25 − 4(2)(−12) = 25 + 96 = 121 = 11²<br/>x = (−5 ± 11) / 4<br/><br/>x = (−5 + 11)/4 = 6/4 = <strong>3/2</strong><br/>x = (−5 − 11)/4 = −16/4 = <strong>−4</strong><br/><strong>∴ x = 1.5  or  x = −4</strong>'
            },
            terms: []
        },
        {
            id: 'svg-parabola',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 225" style="width:100%;max-width:360px;display:block;margin:0 auto;"><defs><marker id="ah5a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.lbl5{font-family:sans-serif;font-size:11px;fill:#374151}.hlbl5{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}.glbl5{font-family:sans-serif;font-size:11px;fill:#10b981;font-weight:600}</style><line x1="20" y1="140" x2="285" y2="140" stroke="#374151" stroke-width="1.5" marker-end="url(#ah5a)"/><line x1="110" y1="215" x2="110" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah5a)"/><line x1="150" y1="30" x2="150" y2="205" stroke="#374151" stroke-width="1" stroke-dasharray="4,3" opacity="0.45"/><polyline points="38,82 50,106 70,140 90,166 110,185 130,196 150,200 170,196 190,185 210,166 230,140 250,106 262,82" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="70" cy="140" r="4.5" fill="#4f46e5"/><circle cx="230" cy="140" r="4.5" fill="#4f46e5"/><circle cx="150" cy="200" r="4.5" fill="#10b981"/><line x1="70" y1="136" x2="70" y2="144" stroke="#374151" stroke-width="1"/><line x1="230" y1="136" x2="230" y2="144" stroke="#374151" stroke-width="1"/><text x="55" y="128" class="hlbl5">x = \u22121</text><text x="218" y="128" class="hlbl5">x = 3</text><text x="155" y="215" class="glbl5">(1, \u22124)</text><text x="158" y="48" style="font-family:sans-serif;font-size:10px;fill:#6b7280">x = 1</text><text x="278" y="155" class="lbl5">x</text><text x="115" y="12" class="lbl5">y</text><text x="113" y="154" class="lbl5">O</text></svg>',
                caption: 'y = x² − 2x − 3 = (x+1)(x−3): roots at x = −1 and x = 3, minimum vertex at (1, −4)'
            },
            terms: []
        },
        {
            id: 'table-methods',
            type: 'comparisonTable',
            data: {
                headers: ['Method', 'When to Use', 'Pro / Con'],
                rows: [
                    ['Factorisation', 'Discriminant is a perfect square; integer roots look likely', 'Fast ✓ / Doesn\'t always work ✗'],
                    ['Completing the square', 'Any quadratic; when vertex/turning point is also needed', 'Always works ✓ / Slower ✗'],
                    ['Quadratic formula', 'Messy coefficients; surd or decimal answers expected', 'Always works ✓ / Easy sign errors ✗']
                ],
                caption: 'Choosing the right method'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always rearrange to ax² + bx + c = 0 before applying any method.<br/>• For "show that" or "prove" questions, use the quadratic formula and show every step.<br/>• If b² − 4ac is a perfect square, the quadratic factorises over the integers — save time!<br/>• Your calculator can solve quadratics, but method marks require full working.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Three methods solve ax² + bx + c = 0 — factorisation (find factors with product ac, sum b), completing the square (rewrite as a(x+p)²+q = 0), or the quadratic formula x = (−b ± √(b²−4ac)) / 2a. Rearrange to standard form first. The discriminant b² − 4ac tells you in advance whether roots are real and rational.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'eq-formula', prompt: 'State the quadratic formula for ax² + bx + c = 0.' },
            { id: 'cue-2', blockId: 'list-factorise', prompt: 'List the four steps for solving a quadratic by factorisation.' },
            { id: 'cue-3', blockId: 'table-methods', prompt: 'When would you choose the quadratic formula over factorisation?' },
            { id: 'cue-4', blockId: 'worked-formula', prompt: 'Solve 2x² + 5x − 12 = 0 using the quadratic formula.' },
            { id: 'cue-5', blockId: 'h-ctq', prompt: 'How does completing the square help when finding a parabola\'s vertex?' }
        ],
        summaryText: 'Three methods: factorisation (product=ac, sum=b), completing the square, quadratic formula x=(−b±√(b²−4ac))/2a. Rearrange to ax²+bx+c=0 first. Discriminant b²−4ac indicates number of real roots.',
        ready: true
    },
    evidence: []
};
