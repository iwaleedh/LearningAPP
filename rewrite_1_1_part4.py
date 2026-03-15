#!/usr/bin/env python3
"""
Rewrites WMA11 Topic 1 seed notes 19–22 with full A-level content.
"""

import os

BASE = "src/data/seedNotes/mathematics/"

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_19  ·  Reflections (Graph Transformations)
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_19 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 19
 * "Reflections"
 */

export const note_mathematics_1_1_19 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/reflections.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply reflection transformations to graphs: y = −f(x) reflects in the x-axis; y = f(−x) reflects in the y-axis; identify the effect on key points and asymptotes.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'Reflection Transformations', level: 2 },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: { text: 'A <strong>reflection</strong> maps every point on the graph to its mirror image through an axis. Two reflections are required at A-level: reflection in the x-axis and reflection in the y-axis. These are produced by negating the output (y value) or the input (x value) of the function respectively.' },
            terms: []
        },
        {
            id: 'h-xaxis',
            type: 'heading',
            data: { text: 'Reflection in the x-axis: y = −f(x)', level: 2 },
            terms: []
        },
        {
            id: 'p-xaxis',
            type: 'paragraph',
            data: { text: 'Replacing f(x) with −f(x) <strong>negates every y-coordinate</strong> while leaving x-coordinates unchanged. Points on the x-axis (where y = 0) stay fixed. All other points flip to the opposite side of the x-axis.' },
            terms: []
        },
        {
            id: 'key-xaxis',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: y = −f(x)',
                text: 'Every point (x, y) → (x, −y)<br/>Reflection in the <strong>x-axis</strong>.<br/>x-intercepts remain unchanged; y-intercept changes sign.'
            },
            terms: []
        },
        {
            id: 'h-yaxis',
            type: 'heading',
            data: { text: 'Reflection in the y-axis: y = f(−x)', level: 2 },
            terms: []
        },
        {
            id: 'p-yaxis',
            type: 'paragraph',
            data: { text: 'Replacing x with −x inside the function <strong>negates every x-coordinate</strong> while leaving y-coordinates unchanged. Points on the y-axis (where x = 0) stay fixed. All other points flip to the opposite side of the y-axis.' },
            terms: []
        },
        {
            id: 'key-yaxis',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: y = f(−x)',
                text: 'Every point (x, y) → (−x, y)<br/>Reflection in the <strong>y-axis</strong>.<br/>y-intercept remains unchanged; x-intercepts change sign.'
            },
            terms: []
        },
        {
            id: 'table-compare',
            type: 'comparisonTable',
            data: {
                headers: ['Transformation', 'Notation', 'Axis of reflection', 'Point mapping'],
                rows: [
                    ['Negate output', 'y = −f(x)', 'x-axis', '(x, y) → (x, −y)'],
                    ['Negate input', 'y = f(−x)', 'y-axis', '(x, y) → (−x, y)']
                ],
                caption: 'Comparison of the two reflections'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Reflection in x-axis',
                text: 'f(x) = x² − 4. Sketch y = −f(x) and state the y-intercept and x-intercepts.<br/><br/>y = −(x² − 4) = −x² + 4<br/>• y-intercept: x = 0 → y = 4   [was −4, now +4]<br/>• x-intercepts: −x² + 4 = 0 → x = ±2   [unchanged]<br/>• Shape: inverted ∩ parabola (a = −1 < 0), vertex at (0, 4).'
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Reflection in y-axis',
                text: 'f(x) = (x − 3)² + 1. Find the equation and vertex of y = f(−x).<br/><br/>y = f(−x) = (−x − 3)² + 1 = (x + 3)² + 1<br/>• Vertex moves from (3, 1) to (−3, 1).<br/>• y-intercept: (0 + 3)² + 1 = 10.'
            },
            terms: []
        },
        {
            id: 'svg-reflect',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" style="width:100%;max-width:370px;display:block;margin:0 auto;"><defs><marker id="ah19" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l19{font-family:sans-serif;font-size:10px;fill:#374151}.hl19{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}.g19{font-family:sans-serif;font-size:10px;fill:#10b981;font-weight:600}</style><line x1="15" y1="100" x2="285" y2="100" stroke="#374151" stroke-width="1.5" marker-end="url(#ah19)"/><line x1="150" y1="190" x2="150" y2="10" stroke="#374151" stroke-width="1.5" marker-end="url(#ah19)"/><polyline points="70,10 90,35 110,55 130,75 150,85 170,75 190,55 210,35 230,10" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,3" stroke-linejoin="round"/><polyline points="70,190 90,165 110,145 130,125 150,115 170,125 190,145 210,165 230,190" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><polyline points="220,10 200,35 180,55 160,75 150,85 140,75 120,55 100,35 80,10" fill="none" stroke="#10b981" stroke-width="2" stroke-linejoin="round"/><circle cx="150" cy="85" r="3.5" fill="#374151"/><text x="72" y="21" class="l19">f(x)</text><text x="78" y="178" class="hl19">\u2212f(x)</text><text x="222" y="21" class="g19">f(\u2212x)</text><text x="278" y="114" class="l19">x</text><text x="154" y="8" class="l19">y</text></svg>',
                caption: 'Dashed: y = f(x). Indigo: y = −f(x) (reflection in x-axis). Green: y = f(−x) (reflection in y-axis).'
            },
            terms: []
        },
        {
            id: 'callout-asymptotes',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Asymptotes Under Reflection',
                text: 'Asymptotes are transformed by the same rules:<br/>• y = −f(x): a horizontal asymptote y = c becomes y = −c. A vertical asymptote x = a is unchanged.<br/>• y = f(−x): a vertical asymptote x = a becomes x = −a. A horizontal asymptote y = c is unchanged.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Clearly describe the transformation in words: "reflection in the x-axis" or "reflection in the y-axis".<br/>• Mark the transformed coordinates of all labelled points on the original curve.<br/>• For functions where f(−x) = f(x), the graph is unchanged by y-axis reflection — this means f is even.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Reflections: −f(x) reflects in the x-axis, mapping (x, y) → (x, −y); x-intercepts stay, y-intercept changes sign. f(−x) reflects in the y-axis, mapping (x, y) → (−x, y); y-intercept stays, x-intercepts change sign. Transform asymptotes by the same rules.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-xaxis', prompt: 'What transformation is y = −f(x)? How does it move the point (3, −2)?' },
            { id: 'cue-2', blockId: 'key-yaxis', prompt: 'What transformation is y = f(−x)? How does it move the point (3, −2)?' },
            { id: 'cue-3', blockId: 'worked-1', prompt: 'Write the equation and state the vertex of y = −(x²−4).' },
            { id: 'cue-4', blockId: 'callout-asymptotes', prompt: 'If y = f(x) has asymptote x = 2, what is the asymptote of y = f(−x)?' }
        ],
        summaryText: '−f(x): reflect in x-axis, (x,y)→(x,−y). f(−x): reflect in y-axis, (x,y)→(−x,y). Asymptotes transform by the same rule.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_20  ·  Stretches (Graph Transformations)
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_20 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 20
 * "Stretches"
 */

export const note_mathematics_1_1_20 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/stretches.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply stretch transformations to graphs: y = af(x) (vertical stretch); y = f(ax) (horizontal stretch); identify the scale factor and its reciprocal nature; transform key points and asymptotes.' },
            terms: []
        },
        {
            id: 'h-vert',
            type: 'heading',
            data: { text: 'Vertical Stretch: y = af(x)', level: 2 },
            terms: []
        },
        {
            id: 'p-vert',
            type: 'paragraph',
            data: { text: 'Multiplying the function by a constant <em>a</em> <strong>scales every y-coordinate by a</strong>, while leaving x-coordinates unchanged. The graph stretches (or compresses) parallel to the y-axis by a factor of a, centred on the x-axis. Points on the x-axis stay fixed.' },
            terms: []
        },
        {
            id: 'key-vert',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: y = af(x)',
                text: 'Every point (x, y) → (x, ay)<br/>Vertical stretch, scale factor a, parallel to the y-axis.<br/>• a > 1: stretches away from x-axis<br/>• 0 < a < 1: compresses towards x-axis<br/>• a < 0: also reflects in x-axis'
            },
            terms: []
        },
        {
            id: 'h-horiz',
            type: 'heading',
            data: { text: 'Horizontal Stretch: y = f(ax)', level: 2 },
            terms: []
        },
        {
            id: 'p-horiz',
            type: 'paragraph',
            data: { text: 'Replacing x with ax inside the function <strong>scales every x-coordinate by 1/a</strong> (the reciprocal of a), while leaving y-coordinates unchanged. This is the counterintuitive result: multiplying inside by a causes a compression by factor a outwardly, since the graph achieves the same output value at x/a.' },
            terms: []
        },
        {
            id: 'key-horiz',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Rule: y = f(ax)',
                text: 'Every point (x, y) → (x/a, y)<br/>Horizontal stretch, scale factor 1/a, parallel to the x-axis.<br/>• a > 1: graph compresses horizontally (scale factor 1/a < 1)<br/>• 0 < a < 1: graph stretches horizontally (scale factor 1/a > 1)'
            },
            terms: []
        },
        {
            id: 'table-compare',
            type: 'comparisonTable',
            data: {
                headers: ['Form', 'Scale factor', 'Direction', 'Fixed points'],
                rows: [
                    ['y = af(x)', 'a (parallel to y-axis)', 'Vertical', 'x-intercepts (y = 0)'],
                    ['y = f(ax)', '1/a (parallel to x-axis)', 'Horizontal', 'y-intercept (x = 0)']
                ],
                caption: 'Vertical vs horizontal stretch'
            },
            terms: []
        },
        {
            id: 'worked-vert',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Vertical Stretch',
                text: 'f(x) = sin x. Describe and sketch y = 3f(x) = 3 sin x.<br/><br/>Vertical stretch, scale factor 3. Every y-coordinate is multiplied by 3.<br/>• Amplitude: 1 → 3 (peaks at 3, troughs at −3).<br/>• Period and x-intercepts unchanged (still every 180°).'
            },
            terms: []
        },
        {
            id: 'worked-horiz',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Horizontal Stretch',
                text: 'f(x) = sin x. Describe and sketch y = f(2x) = sin 2x.<br/><br/>Horizontal stretch, scale factor 1/2. Every x-coordinate is halved.<br/>• The period halves: 360° → 180°.<br/>• Amplitude unchanged (still ±1).<br/>• First peak moves from x = 90° to x = 45°.'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Confusion',
                text: 'The horizontal stretch scale factor is <strong>1/a</strong>, not a.<br/>f(2x) compresses the graph by factor 2 (scale factor 1/2).<br/>f(x/2) stretches the graph by factor 2 (scale factor 2).<br/><br/>Think of it this way: f(2x) reaches its original value of f(t) when 2x = t, i.e. at x = t/2 — half the original x-value.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• State the scale factor AND direction in your description.<br/>• Label the new coordinates of all marked points.<br/>• Asymptotes: y = af(x) does not move vertical asymptotes; y = f(ax) scales vertical asymptotes by 1/a.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Stretches: y = af(x) is a vertical stretch scale factor a — every y-coordinate × a; x-intercepts fixed. y = f(ax) is a horizontal stretch scale factor 1/a — every x-coordinate ÷ a; y-intercept fixed. The horizontal scale factor is the reciprocal of the number inside the bracket.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-vert', prompt: 'What transformation is y = 3f(x)? Where does the point (2, 5) move to?' },
            { id: 'cue-2', blockId: 'key-horiz', prompt: 'What transformation is y = f(3x)? What is the scale factor?' },
            { id: 'cue-3', blockId: 'worked-horiz', prompt: 'How does y = sin 2x differ from y = sin x in terms of period?' },
            { id: 'cue-4', blockId: 'callout-warning', prompt: 'Why does f(2x) compress rather than stretch the graph?' }
        ],
        summaryText: 'af(x): vertical stretch ×a, fixed x-intercepts. f(ax): horizontal stretch ×(1/a), fixed y-intercept. Inside multiplier a → horizontal scale factor is 1/a (reciprocal).',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_21  ·  Solving Equations Graphically
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_21 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 21
 * "Solving equations graphically"
 */

export const note_mathematics_1_1_21 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/solving-equations-graphically.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use graphical methods to find approximate or exact solutions to equations; interpret intersection points of two curves as solutions; relate algebraic and graphical methods.' },
            terms: []
        },
        {
            id: 'h-key',
            type: 'heading',
            data: { text: 'Graphical Solutions', level: 2 },
            terms: []
        },
        {
            id: 'p-key',
            type: 'paragraph',
            data: { text: 'The solution(s) to an equation f(x) = g(x) are the <strong>x-coordinates of the intersection points</strong> of the graphs y = f(x) and y = g(x). This connection between algebra and geometry allows equations to be solved by sketching or plotting, and the number of intersections identifies how many solutions exist.' },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Method: Solving f(x) = g(x) Graphically', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Rearrange the equation into the form f(x) = g(x).' },
                    { text: 'Sketch (or plot) both y = f(x) and y = g(x) on the same axes.' },
                    { text: 'Identify the x-coordinates of all intersection points.' },
                    { text: 'These x-coordinates are the solutions to the original equation.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Intersecting Line and Parabola',
                text: 'Solve x² = x + 2 graphically.<br/><br/>Rearrange: y = x² and y = x + 2 — find intersections.<br/>Algebraically: x² − x − 2 = 0 → (x−2)(x+1) = 0 → x = 2 or x = −1.<br/>On the sketch: the parabola y = x² intersects the line y = x + 2 at x = −1 and x = 2.'
            },
            terms: []
        },
        {
            id: 'h-disc',
            type: 'heading',
            data: { text: 'Number of Solutions', level: 2 },
            terms: []
        },
        {
            id: 'p-disc',
            type: 'paragraph',
            data: { text: 'The number of intersection points equals the number of solutions. You can determine this from the discriminant when one equation is quadratic, or by reasoning about the shapes of the graphs (e.g. a horizontal line can intersect a parabola 0, 1, or 2 times).' },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Find k for a Tangent',
                text: 'For what value of k does y = k intersect y = x² − 4x + 5 exactly once?<br/><br/>Set equal: k = x² − 4x + 5<br/>x² − 4x + (5 − k) = 0<br/>For exactly one intersection: Δ = 0<br/>16 − 4(5 − k) = 0 → 16 − 20 + 4k = 0 → 4k = 4 → <strong>k = 1</strong><br/>The line y = 1 is tangent to the parabola at its vertex (2, 1).'
            },
            terms: []
        },
        {
            id: 'svg-intersect',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah21" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l21{font-family:sans-serif;font-size:10px;fill:#374151}.h21{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}.g21{font-family:sans-serif;font-size:10px;fill:#10b981;font-weight:600}</style><line x1="15" y1="140" x2="265" y2="140" stroke="#374151" stroke-width="1.5" marker-end="url(#ah21)"/><line x1="70" y1="195" x2="70" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah21)"/><polyline points="15,165 40,130 70,70 100,35 130,20 160,27 190,55 210,80 240,130 260,165" fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round"/><line x1="15" y1="120" x2="260" y2="70" stroke="#10b981" stroke-width="2"/><circle cx="50" cy="130" r="4.5" fill="#ef4444"/><circle cx="185" cy="90" r="4.5" fill="#ef4444"/><text x="36" y="125" class="h21">x\u2081</text><text x="188" y="84" class="h21">x\u2082</text><text x="220" y="68" class="g21">y = g(x)</text><text x="230" y="138" class="h21">y = f(x)</text><text x="258" y="154" class="l21">x</text><text x="74" y="12" class="l21">y</text></svg>',
                caption: 'Solutions to f(x) = g(x) are the x-coordinates of intersection points x₁ and x₂'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• You can solve graphically even when exact algebraic solutions are hard — sketch and identify approximate intersections.<br/>• Use the discriminant to count solutions without solving the full equation.<br/>• When asked for the number of solutions to f(x) = k for varying k, think about how a horizontal line cuts the graph of y = f(x).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Graphical solution: rewrite as f(x) = g(x), sketch both curves, read off x-coordinates of intersections. Discriminant of the resulting quadratic gives the number of intersections. A tangent means Δ = 0 (one repeated solution).' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'p-key', prompt: 'What do the intersection points of y = f(x) and y = g(x) represent algebraically?' },
            { id: 'cue-2', blockId: 'worked-1', prompt: 'Solve x² = x + 2 graphically and explain the method.' },
            { id: 'cue-3', blockId: 'worked-2', prompt: 'For what value of k does y = k touch y = x² − 4x + 5 exactly once?' },
            { id: 'cue-4', blockId: 'p-disc', prompt: 'How does the discriminant relate to the number of graphical intersections?' }
        ],
        summaryText: 'Graphical solution: intersection x-coordinates of y=f(x) and y=g(x). Number of intersections = number of solutions. Δ=0 means tangent (one solution). Δ>0: 2 solutions; Δ<0: no solutions.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_22  ·  Reciprocal Graphs Sketching
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_22 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 22
 * "Reciprocal graphs sketching"
 */

export const note_mathematics_1_1_22 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/reciprocal-graphs-sketching.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Sketch the graphs of y = k/x and y = k/x²; identify asymptotes; describe behaviour in each quadrant; apply transformations to reciprocal graphs.' },
            terms: []
        },
        {
            id: 'h-recip',
            type: 'heading',
            data: { text: 'The Reciprocal Function y = k/x', level: 2 },
            terms: []
        },
        {
            id: 'p-recip',
            type: 'paragraph',
            data: { text: 'The function y = k/x (also written y = kx⁻¹) is called the <strong>reciprocal function</strong>. It is undefined at x = 0, so the y-axis is a vertical asymptote. As x → ±∞, y → 0, so the x-axis is a horizontal asymptote. The graph has two branches: one in the first and third quadrants (k > 0) or second and fourth (k < 0).' },
            terms: []
        },
        {
            id: 'key-reciprocal',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Key Properties of y = k/x',
                text: '• <strong>Domain</strong>: x ≠ 0 (all real x except 0)<br/>• <strong>Asymptotes</strong>: x = 0 (y-axis) and y = 0 (x-axis)<br/>• <strong>Symmetry</strong>: rotational symmetry of order 2 about the origin<br/>• k > 0 → branches in quadrants 1 and 3; k < 0 → quadrants 2 and 4<br/>• xy = k (product of coordinates is constant)'
            },
            terms: []
        },
        {
            id: 'h-recip2',
            type: 'heading',
            data: { text: 'The Function y = k/x²', level: 2 },
            terms: []
        },
        {
            id: 'p-recip2',
            type: 'paragraph',
            data: { text: 'The function y = k/x² (also written y = kx⁻²) is always positive when k > 0 (since x² > 0 for all x ≠ 0). It approaches 0 as |x| → ∞ and is undefined at x = 0. The graph is symmetric about the y-axis (it is an even function).' },
            terms: []
        },
        {
            id: 'table-compare',
            type: 'comparisonTable',
            data: {
                headers: ['Feature', 'y = k/x', 'y = k/x²'],
                rows: [
                    ['Asymptotes', 'x = 0, y = 0', 'x = 0, y = 0'],
                    ['Quadrants (k>0)', '1st and 3rd', '1st and 2nd (above x-axis)'],
                    ['Symmetry', 'Rotational (order 2)', 'Reflective (y-axis)'],
                    ['Domain', 'x ≠ 0', 'x ≠ 0'],
                    ['End behaviour', 'y → 0 as x → ±∞', 'y → 0 as x → ±∞'],
                    ['Behaviour near x = 0', 'y → ±∞', 'y → +∞']
                ],
                caption: 'Comparison of reciprocal graph families'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Transformed Reciprocal',
                text: 'Sketch y = 2/x + 3 and state its asymptotes.<br/><br/>Start from y = 2/x (branches in quadrants 1 and 3).<br/>Add 3 → translate UP 3 units (vertical translation).<br/>• Horizontal asymptote: y = 0 moves to y = 3.<br/>• Vertical asymptote: x = 0 unchanged.<br/>• x-intercept: 0 = 2/x + 3 → 2/x = −3 → x = −2/3.<br/>• y-intercept: none (x = 0 is excluded).'
            },
            terms: []
        },
        {
            id: 'svg-reciprocal',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220" style="width:100%;max-width:340px;display:block;margin:0 auto;"><defs><marker id="ah22" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l22{font-family:sans-serif;font-size:10px;fill:#374151}.h22{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}</style><line x1="15" y1="110" x2="265" y2="110" stroke="#374151" stroke-width="1.5" marker-end="url(#ah22)"/><line x1="140" y1="210" x2="140" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah22)"/><line x1="15" y1="110" x2="265" y2="110" stroke="#374151" stroke-width="0.5" stroke-dasharray="3,3"/><line x1="140" y1="210" x2="140" y2="15" stroke="#374151" stroke-width="0.5" stroke-dasharray="3,3"/><path d="M155,20 Q165,30 175,50 Q185,70 195,90 Q205,100 220,106 Q240,109 260,110" fill="none" stroke="#4f46e5" stroke-width="2.5"/><path d="M20,110 Q40,110 60,114 Q75,118 85,125 Q100,140 110,165 Q120,185 125,205" fill="none" stroke="#4f46e5" stroke-width="2.5"/><text x="242" y="100" class="h22">k &gt; 0</text><text x="155" y="12" class="l22">y</text><text x="258" y="124" class="l22">x</text><text x="143" y="123" class="l22">O</text><text x="56" y="120" class="l22">Q3 branch</text><text x="155" y="65" class="l22">Q1 branch</text></svg>',
                caption: 'y = k/x (k > 0): hyperbola with asymptotes x = 0 and y = 0; branches in quadrants 1 and 3'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always mark both asymptotes on the sketch.\n• For y = k/x + a and y = k/(x − b): the horizontal asymptote becomes y = a and the vertical asymptote becomes x = b.\n• The shape of the branches should clearly show they approach (not cross) the asymptotes.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'y = k/x: hyperbola in quadrants 1 & 3 (k>0), asymptotes x=0 and y=0, rotational symmetry. y = k/x²: always positive (k>0), y-axis symmetry, same asymptotes. Transformations shift the asymptotes: y = k/x + a → horizontal asymptote y = a; y = k/(x−b) → vertical asymptote x = b.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-reciprocal', prompt: 'State the domain, asymptotes, and symmetry of y = k/x (k > 0).' },
            { id: 'cue-2', blockId: 'table-compare', prompt: 'How does y = k/x² differ from y = k/x in terms of quadrants and symmetry?' },
            { id: 'cue-3', blockId: 'worked-1', prompt: 'Sketch y = 2/x + 3 and state its asymptotes and x-intercept.' },
            { id: 'cue-4', blockId: 'p-recip', prompt: 'What happens to y = k/x as x approaches 0? As x → ∞?' }
        ],
        summaryText: 'y=k/x: hyperbola, asymptotes x=0 and y=0, rotational symmetry; k>0: Q1 & Q3. y=k/x²: above x-axis, y-axis symmetry. Transformations shift asymptotes.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# Write all files
# ─────────────────────────────────────────────────────────────────────────────
files = {
    "note_1_1_19.js": NOTE_1_1_19,
    "note_1_1_20.js": NOTE_1_1_20,
    "note_1_1_21.js": NOTE_1_1_21,
    "note_1_1_22.js": NOTE_1_1_22,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"✓  Wrote {path}")

print("\nDone — 4 files rewritten.")
