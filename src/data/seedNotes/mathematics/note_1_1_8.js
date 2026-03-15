/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 8
 * "Hidden quadratics"
 */

export const note_mathematics_1_1_8 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/hidden-quadratics.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Recognise and solve hidden (disguised) quadratic equations by using a substitution to reduce them to standard quadratic form.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is a Hidden Quadratic?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'A <strong>hidden quadratic</strong> is an equation that is not obviously quadratic but can be transformed into the form au² + bu + c = 0 by substituting u = f(x). The key is to recognise that a function f(x) appears both squared and to the first power within the same equation.' },
            terms: []
        },
        {
            id: 'key-form',
            type: 'callout',
            data: {
                style: 'key',
                title: 'General Form of a Hidden Quadratic',
                text: 'a[f(x)]² + b[f(x)] + c = 0<br/><br/>Let u = f(x) → au² + bu + c = 0 (standard quadratic)<br/><br/>Solve for u, then solve f(x) = u for x.'
            },
            terms: []
        },
        {
            id: 'svg-hidden',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120" style="width:100%;max-width:380px;display:block;margin:0 auto;"><defs><marker id="ah8" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><style>.t8{font-family:sans-serif;font-size:18px;fill:#374151;font-weight:700}.l8{font-family:sans-serif;font-size:12px;fill:#6b7280;font-style:italic}</style><text x="160" y="40" text-anchor="middle" class="t8">a(<tspan fill="#4f46e5">x²</tspan>)² + b(<tspan fill="#4f46e5">x²</tspan>) + c = 0</text><path d="M 160 55 L 160 80" fill="none" stroke="#374151" stroke-width="1.5" marker-end="url(#ah8)"/><text x="120" y="70" class="l8">Substitute u = x²</text><text x="160" y="105" text-anchor="middle" class="t8">a<tspan fill="#4f46e5">u</tspan>² + b<tspan fill="#4f46e5">u</tspan> + c = 0</text></svg>',
                caption: 'The substitution process reveals the hidden standard quadratic'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Substitution', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Rearrange the equation until you can see a function f(x) appearing squared and linearly.' },
                    { text: 'Let u = f(x) to write the equation as au² + bu + c = 0.' },
                    { text: 'Solve the quadratic for u (by factorisation, completing the square, or the formula).' },
                    { text: 'Substitute back: solve f(x) = u₁ and f(x) = u₂ separately.' },
                    { text: 'Check each solution is valid (e.g. discard complex results if only real roots needed).' }
                ]
            },
            terms: []
        },
        {
            id: 'h-poly',
            type: 'heading',
            data: { text: 'Example Type 1: Polynomial Powers', level: 2 },
            terms: []
        },
        {
            id: 'worked-poly',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Polynomial Hidden Quadratic',
                text: 'Solve  x⁴ − 5x² + 4 = 0<br/><br/>Let u = x²:  u² − 5u + 4 = 0<br/>Factorise: (u − 1)(u − 4) = 0 → u = 1 or u = 4<br/><br/>Solve back:<br/>x² = 1 → x = ±1<br/>x² = 4 → x = ±2<br/><strong>∴ x = −2, −1, 1, 2</strong>'
            },
            terms: []
        },
        {
            id: 'h-trig',
            type: 'heading',
            data: { text: 'Example Type 2: Trigonometric Hidden Quadratic', level: 2 },
            terms: []
        },
        {
            id: 'worked-trig',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Trig Hidden Quadratic',
                text: 'Solve  2sin²x − sin x − 1 = 0  for 0° ≤ x ≤ 360°<br/><br/>Let u = sin x:  2u² − u − 1 = 0<br/>Factorise: (2u + 1)(u − 1) = 0 → u = −½ or u = 1<br/><br/>Solve back:<br/>sin x = −½ → x = 210° or 330°<br/>sin x = 1  → x = 90°<br/><strong>∴ x = 90°, 210°, 330°</strong>'
            },
            terms: []
        },
        {
            id: 'h-other',
            type: 'heading',
            data: { text: 'Example Type 3: Exponential / Root Forms', level: 2 },
            terms: []
        },
        {
            id: 'p-other',
            type: 'paragraph',
            data: { text: 'The substitution technique also applies to equations in the form x − 5√x + 6 = 0 (let u = √x), or 4^x − 5·2^x + 4 = 0 (let u = 2^x), etc. The pattern to look for is always: <em>a function, and the same function squared</em>.' },
            terms: []
        },
        {
            id: 'worked-root',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Root Hidden Quadratic',
                text: 'Solve  x − 5√x + 6 = 0  (x ≥ 0)<br/><br/>Let u = √x (so u ≥ 0):  u² − 5u + 6 = 0<br/>Factorise: (u − 2)(u − 3) = 0 → u = 2 or u = 3<br/><br/>Solve back:<br/>√x = 2 → x = 4<br/>√x = 3 → x = 9<br/><strong>∴ x = 4 or x = 9</strong>'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• After substituting back, always check solutions satisfy any domain restrictions (e.g. √x ≥ 0, −1 ≤ sin x ≤ 1).<br/>• For equations with u = x^n (e.g. u = x²), each value of u can give zero, one, or two values of x.<br/>• Do not forget to include all solutions from both values of u.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Spotting the substitution quickly is the skill. Look for: squared term + linear term in the same function.<br/>• Write the substitution explicitly — examiners award method marks for this.<br/>• For polynomial hidden quadratics (like x⁴), substituting u = x² is almost always the right move.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'A hidden quadratic contains a function f(x) squared and linearly: a[f(x)]² + b[f(x)] + c = 0. Substitute u = f(x) to get a standard quadratic au² + bu + c = 0, solve for u, then reverse the substitution to find x. Always check all solutions against domain restrictions.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-form', prompt: 'State the general form of a hidden quadratic and the substitution strategy.' },
            { id: 'cue-2', blockId: 'worked-poly', prompt: 'Solve x⁴ − 5x² + 4 = 0 using a substitution.' },
            { id: 'cue-3', blockId: 'worked-trig', prompt: 'Solve 2sin²x − sin x − 1 = 0 for 0° ≤ x ≤ 360°.' },
            { id: 'cue-4', blockId: 'worked-root', prompt: 'What substitution would you use for x − 5√x + 6 = 0, and what are the solutions?' },
            { id: 'cue-5', blockId: 'callout-warning', prompt: 'Why must you always check solutions after reversing a hidden-quadratic substitution?' }
        ],
        summaryText: 'Hidden quadratic: a[f(x)]²+b[f(x)]+c=0. Let u=f(x), solve au²+bu+c=0, then reverse: solve f(x)=u₁ and f(x)=u₂. Check domain restrictions. Works for polynomial, trig, exponential and root equations.',
        ready: true
    },
    evidence: []
};
