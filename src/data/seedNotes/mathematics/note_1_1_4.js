/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 4
 * "Factorisation"
 */

export const note_mathematics_1_1_4 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/factorisation.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Factorise algebraic expressions using common factors, difference of two squares, quadratic trinomials (a = 1 and a \u2260 1), and the factor theorem for cubics.' },
            terms: []
        },
        {
            id: 'h-common',
            type: 'heading',
            data: { text: 'Common Factor', level: 2 },
            terms: []
        },
        {
            id: 'list-common',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Find the highest common factor (HCF) of all terms.' },
                    { text: 'Place the HCF outside the bracket.' },
                    { text: 'Divide each term by the HCF to find the contents of the bracket.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-common',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Common Factor',
                text: 'Factorise: 6x\u00b2 + 9x<br/><br/>HCF of 6x\u00b2 and 9x is 3x.<br/>6x\u00b2 + 9x = <strong>3x(2x + 3)</strong>'
            },
            terms: []
        },
        {
            id: 'h-dots',
            type: 'heading',
            data: { text: 'Difference of Two Squares', level: 2 },
            terms: []
        },
        {
            id: 'list-dots',
            type: 'list',
            data: {
                style: 'bullet',
                items: [
                    { text: 'Recognise the pattern: two perfect squares with a <strong>minus</strong> sign between them.' },
                    { text: 'a\u00b2 \u2212 b\u00b2 = (a + b)(a \u2212 b)' },
                    { text: 'Check both terms are perfect squares, then apply directly.' }
                ]
            },
            terms: []
        },
        {
            id: 'svg-dots-fact',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" style="width:100%;max-width:350px;display:block;margin:0 auto;"><defs><marker id="ah4" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#374151"/></marker></defs><style>.t4{font-family:sans-serif;font-size:18px;fill:#374151;font-weight:700}.l4{font-family:sans-serif;font-size:12px;fill:#6b7280}</style><text x="80" y="65" text-anchor="middle" class="t4">9x² − 25</text><path d="M 80 75 Q 80 100 110 95" fill="none" stroke="#374151" stroke-width="1.5" marker-end="url(#ah4)"/><path d="M 80 40 Q 80 20 110 25" fill="none" stroke="#374151" stroke-width="1.5" marker-end="url(#ah4)"/><text x="180" y="30" class="t4" fill="#4f46e5">(3x)²</text><text x="180" y="100" class="t4" fill="#10b981">5²</text><text x="150" y="65" class="t4">→</text><text x="210" y="65" class="t4">(<tspan fill="#4f46e5">3x</tspan> + <tspan fill="#10b981">5</tspan>)(<tspan fill="#4f46e5">3x</tspan> − <tspan fill="#10b981">5</tspan>)</text></svg>',
                caption: 'Visualising the structure of a DOTS factorisation'
            },
            terms: []
        },
        {
            id: 'worked-dots',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Difference of Two Squares',
                text: 'Factorise: 9x\u00b2 \u2212 25<br/><br/>9x\u00b2 = (3x)\u00b2, &nbsp;25 = 5\u00b2<br/>9x\u00b2 \u2212 25 = <strong>(3x + 5)(3x \u2212 5)</strong>'
            },
            terms: []
        },
        {
            id: 'h-quad-a1',
            type: 'heading',
            data: { text: 'Quadratic Trinomial (a = 1): x\u00b2 + bx + c', level: 2 },
            terms: []
        },
        {
            id: 'list-quad-a1',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Find two numbers p and q such that pq = c and p + q = b.' },
                    { text: 'Write as (x + p)(x + q).' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-quad-a1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Quadratic (a = 1)',
                text: 'Factorise: x\u00b2 + 5x + 6<br/><br/>Need p, q: pq = 6 and p + q = 5.<br/>2 \u00d7 3 = 6 and 2 + 3 = 5. \u2713<br/><br/><strong>Answer: (x + 2)(x + 3)</strong>'
            },
            terms: []
        },
        {
            id: 'h-quad-ane1',
            type: 'heading',
            data: { text: 'Quadratic Trinomial (a \u2260 1): ax\u00b2 + bx + c', level: 2 },
            terms: []
        },
        {
            id: 'list-quad-ane1',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Find two numbers p and q such that pq = ac and p + q = b.' },
                    { text: 'Replace the middle term bx with px + qx (split the middle).' },
                    { text: 'Group the four terms into two pairs and factorise each pair.' },
                    { text: 'Factor out the common bracket.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-quad-ane1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Quadratic (a \u2260 1)',
                text: 'Factorise: 6x\u00b2 + 11x + 3<br/><br/>ac = 18, b = 11. Find p, q: pq = 18, p + q = 11 \u2192 p = 2, q = 9.<br/>6x\u00b2 + 2x + 9x + 3<br/>= 2x(3x + 1) + 3(3x + 1)<br/>= <strong>(2x + 3)(3x + 1)</strong>'
            },
            terms: []
        },
        {
            id: 'h-cubic',
            type: 'heading',
            data: { text: 'Factorising a Cubic \u2014 Factor Theorem', level: 2 },
            terms: []
        },
        {
            id: 'key-factor-thm',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Factor Theorem',
                text: 'If f(p) = 0, then (x \u2212 p) is a factor of f(x).<br/>Conversely, if (x \u2212 p) is a factor of f(x), then f(p) = 0.'
            },
            terms: []
        },
        {
            id: 'list-cubic',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Find a value p by inspection such that f(p) = 0 (try \u00b11, \u00b12, \u00b13, \u2026 factors of the constant term).' },
                    { text: 'Divide f(x) by (x \u2212 p) using long division or inspection to obtain the quadratic quotient ax\u00b2 + bx + c.' },
                    { text: 'Write f(x) = (x \u2212 p)(ax\u00b2 + bx + c).' },
                    { text: 'Factorise the quadratic quotient if possible to give the fully factorised form.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-cubic',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example \u2014 Cubic Factorisation',
                text: 'Factorise: f(x) = x\u00b3 + 2x\u00b2 \u2212 5x \u2212 6<br/><br/>Step 1 \u2014 test f(2): 8 + 8 \u2212 10 \u2212 6 = 0 \u2713 \u2192 (x \u2212 2) is a factor.<br/><br/>Step 2 \u2014 divide by (x \u2212 2) by inspection:<br/>x\u00b3 + 2x\u00b2 \u2212 5x \u2212 6 = (x \u2212 2)(x\u00b2 + 4x + 3)<br/><br/>Step 3 \u2014 factorise the quadratic:<br/>x\u00b2 + 4x + 3 = (x + 1)(x + 3)<br/><br/><strong>f(x) = (x \u2212 2)(x + 1)(x + 3)</strong>'
            },
            terms: []
        },
        {
            id: 'tip-cubic',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tip \u2014 Finding p Efficiently',
                text: '\u2022 Always try \u00b11 first \u2014 they are the quickest to calculate.<br/>\u2022 Then try other factors of the constant term (e.g. \u00b12, \u00b13).<br/>\u2022 For a monic cubic (leading coefficient 1), p must be an integer factor of the constant.'
            },
            terms: []
        },
        {
            id: 'checklist',
            type: 'checklist',
            data: {
                items: [
                    { text: 'I can take out a common factor from any expression.', checked: false },
                    { text: 'I can recognise and apply the difference of two squares.', checked: false },
                    { text: 'I can factorise x\u00b2 + bx + c by finding two numbers.', checked: false },
                    { text: 'I can factorise ax\u00b2 + bx + c (a \u2260 1) by splitting the middle term.', checked: false },
                    { text: 'I can factorise a cubic using the factor theorem and division.', checked: false }
                ]
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Factorisation methods: common factor (HCF outside bracket); DOTS: a\u00b2\u2212b\u00b2=(a+b)(a\u2212b); quadratic a=1: find p,q with pq=c and p+q=b; quadratic a\u22601: find pq=ac and p+q=b then split and group; cubic: factor theorem to find a root, divide out, factorise the quadratic remainder.' },
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
            { id: 'cue-1', blockId: 'list-dots', prompt: 'State the difference of two squares identity and factorise 9x\u00b2 \u2212 25.' },
            { id: 'cue-2', blockId: 'list-quad-a1', prompt: 'What two numbers do you find when factorising x\u00b2 + bx + c, and what conditions must they satisfy?' },
            { id: 'cue-3', blockId: 'key-factor-thm', prompt: 'State the factor theorem. How do you use it to begin factorising a cubic?' },
            { id: 'cue-4', blockId: 'list-cubic', prompt: 'State the four steps to fully factorise a cubic polynomial.' }
        ],
        summaryText: 'Common factor: HCF outside. DOTS: a\u00b2\u2212b\u00b2=(a+b)(a\u2212b). Quadratic a=1: pq=c, p+q=b. Quadratic a\u22601: pq=ac, p+q=b, split and group. Cubic: factor theorem \u2192 divide \u2192 factorise quadratic.',
        ready: true
    },
    evidence: []
};
