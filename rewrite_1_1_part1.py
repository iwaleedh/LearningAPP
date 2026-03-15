#!/usr/bin/env python3
"""
Rewrites WMA11 Topic 1 seed notes 5–9 with full A-level content:
SVG diagrams, equation blocks, worked examples, recall cues, summary.
"""

import os

BASE = "src/data/seedNotes/mathematics/"

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_5  ·  Solving Quadratic Equations
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_5 = r"""/**
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_6  ·  Discriminants
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_6 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 6
 * "Discriminants"
 */

export const note_mathematics_1_1_6 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/discriminants.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use the discriminant b² − 4ac to determine the number and nature of roots of a quadratic equation, and solve problems involving the discriminant.' },
            terms: []
        },
        {
            id: 'h-what',
            type: 'heading',
            data: { text: 'What is the Discriminant?', level: 2 },
            terms: []
        },
        {
            id: 'p-what',
            type: 'paragraph',
            data: { text: 'The discriminant is the expression under the square root sign in the quadratic formula. It is denoted by the Greek letter <strong>Δ (delta)</strong>. The sign of Δ tells you exactly how many real roots the quadratic has, without needing to solve it.' },
            terms: []
        },
        {
            id: 'eq-disc',
            type: 'equation',
            data: {
                html: '\u0394 = b\u00b2 \u2212 4ac',
                caption: 'Discriminant of ax² + bx + c = 0'
            },
            terms: []
        },
        {
            id: 'h-cases',
            type: 'heading',
            data: { text: 'The Three Cases', level: 2 },
            terms: []
        },
        {
            id: 'table-cases',
            type: 'comparisonTable',
            data: {
                headers: ['Discriminant', 'Number of Roots', 'Graph behaviour'],
                rows: [
                    ['\u0394 = b\u00b2 \u2212 4ac > 0', 'Two distinct real roots', 'Parabola crosses x-axis at two points'],
                    ['\u0394 = b\u00b2 \u2212 4ac = 0', 'One repeated (equal) real root', 'Parabola touches x-axis at one point (vertex)'],
                    ['\u0394 = b\u00b2 \u2212 4ac < 0', 'No real roots', 'Parabola does not cross the x-axis']
                ],
                caption: 'Summary of the three discriminant cases'
            },
            terms: []
        },
        {
            id: 'svg-disc',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200" style="width:100%;max-width:460px;display:block;margin:0 auto;"><style>.d-lbl{font-family:sans-serif;font-size:10px;fill:#374151}.d-hl{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:700}.d-sub{font-family:sans-serif;font-size:9px;fill:#6b7280}</style><line x1="0" y1="155" x2="120" y2="155" stroke="#e5e7eb" stroke-width="1"/><line x1="120" y1="155" x2="240" y2="155" stroke="#e5e7eb" stroke-width="1"/><line x1="240" y1="155" x2="360" y2="155" stroke="#e5e7eb" stroke-width="1"/><line x1="120" y1="10" x2="120" y2="195" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3,3"/><line x1="240" y1="10" x2="240" y2="195" stroke="#d1d5db" stroke-width="1" stroke-dasharray="3,3"/><polyline points="10,130 25,155 40,165 60,165 75,155 90,130" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="25" cy="155" r="4" fill="#4f46e5"/><circle cx="75" cy="155" r="4" fill="#4f46e5"/><text x="60" y="15" text-anchor="middle" class="d-hl">\u0394 &gt; 0</text><text x="60" y="26" text-anchor="middle" class="d-sub">Two distinct roots</text><polyline points="130,155 150,165 170,175 180,178 190,175 210,165 230,155" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><circle cx="180" cy="178" r="4" fill="#10b981"/><text x="180" y="15" text-anchor="middle" class="d-hl">\u0394 = 0</text><text x="180" y="26" text-anchor="middle" class="d-sub">One repeated root</text><polyline points="250,100 265,125 275,140 290,145 305,140 315,125 330,100" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><text x="300" y="15" text-anchor="middle" class="d-hl">\u0394 &lt; 0</text><text x="300" y="26" text-anchor="middle" class="d-sub">No real roots</text><line x1="10" y1="155" x2="110" y2="155" stroke="#374151" stroke-width="1.5"/><line x1="130" y1="155" x2="230" y2="155" stroke="#374151" stroke-width="1.5"/><line x1="250" y1="155" x2="350" y2="155" stroke="#374151" stroke-width="1.5"/></svg>',
                caption: 'Three cases of the discriminant — the parabola relative to the x-axis'
            },
            terms: []
        },
        {
            id: 'h-using',
            type: 'heading',
            data: { text: 'Using the Discriminant to Solve Problems', level: 2 },
            terms: []
        },
        {
            id: 'p-using',
            type: 'paragraph',
            data: { text: 'Exam questions often ask you to find the value(s) of a parameter (e.g. k) such that a quadratic has a certain number of roots. Set up the discriminant condition, solve the resulting equation or inequality, then sketch the discriminant quadratic to decide which region satisfies the condition.' },
            terms: []
        },
        {
            id: 'worked-disc',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Finding k for Equal Roots',
                text: 'Find the value of k for which kx² + 4x + 1 = 0 has equal roots.<br/><br/>For equal roots: Δ = 0<br/>b² − 4ac = 0, where a = k, b = 4, c = 1<br/>16 − 4k = 0<br/>4k = 16<br/><strong>k = 4</strong><br/><br/>Check: 4x² + 4x + 1 = (2x + 1)² = 0 → x = −½ (repeated root ✓)'
            },
            terms: []
        },
        {
            id: 'worked-ineq',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Finding k for Two Distinct Real Roots',
                text: 'Find the values of k for which x² − 5x + k = 0 has two distinct real roots.<br/><br/>For two distinct roots: Δ > 0<br/>b² − 4ac > 0, where a = 1, b = −5, c = k<br/>25 − 4k > 0<br/>4k < 25<br/><strong>k < 25/4 = 6.25</strong>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• "Real roots" means Δ ≥ 0 (distinct OR repeated).<br/>• "Two distinct real roots" means Δ > 0 strictly.<br/>• "Equal roots" or "repeated roots" means Δ = 0.<br/>• "No real roots" means Δ < 0.<br/>• Always sketch the discriminant quadratic when solving inequalities involving k.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'The discriminant Δ = b² − 4ac determines the nature of roots: Δ > 0 gives two distinct real roots (parabola cuts x-axis twice); Δ = 0 gives one repeated root (parabola touches x-axis); Δ < 0 gives no real roots (parabola does not cross x-axis). Use Δ conditions to form and solve equations or inequalities involving unknown parameters.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'eq-disc', prompt: 'State the discriminant formula and the symbol used to denote it.' },
            { id: 'cue-2', blockId: 'table-cases', prompt: 'What are the three cases for the discriminant and what does each tell you about the graph?' },
            { id: 'cue-3', blockId: 'worked-disc', prompt: "Find the value of k for which kx² + 4x + 1 = 0 has equal roots." },
            { id: 'cue-4', blockId: 'p-using', prompt: 'What condition must Δ satisfy if a quadratic has no real roots?' },
            { id: 'cue-5', blockId: 'callout-tip', prompt: 'What is the discriminant condition for a quadratic to have at least one real root?' }
        ],
        summaryText: 'Discriminant Δ = b²−4ac: Δ>0 → two distinct real roots; Δ=0 → one repeated root; Δ<0 → no real roots. Use to find unknown parameters by setting up and solving discriminant equations/inequalities.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_7  ·  Completing the Square
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_7 = r"""/**
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_8  ·  Hidden Quadratics
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_8 = r"""/**
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_9  ·  Quadratic Graphs
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_9 = r"""/**
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# Write all files
# ─────────────────────────────────────────────────────────────────────────────
files = {
    "note_1_1_5.js": NOTE_1_1_5,
    "note_1_1_6.js": NOTE_1_1_6,
    "note_1_1_7.js": NOTE_1_1_7,
    "note_1_1_8.js": NOTE_1_1_8,
    "note_1_1_9.js": NOTE_1_1_9,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"✓  Wrote {path}")

print("\nDone — 5 files rewritten.")
