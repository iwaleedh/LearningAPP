#!/usr/bin/env python3
"""
Rewrites WMA11 Topic 1 seed notes 15–18 with full A-level content.
"""

import os

BASE = "src/data/seedNotes/mathematics/"

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_15  ·  Inequalities on Graphs
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_15 = r"""/**
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_16  ·  Sketching Polynomials
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_16 = r"""/**
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_17  ·  Proportional Relationships
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_17 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 17
 * "Proportional relationships"
 */

export const note_mathematics_1_1_17 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/proportional-relationships.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Set up and use equations for direct and inverse proportion; extend to problems involving y ∝ xⁿ or y ∝ 1/xⁿ; find the constant of proportionality from given data.' },
            terms: []
        },
        {
            id: 'h-direct',
            type: 'heading',
            data: { text: 'Direct Proportion', level: 2 },
            terms: []
        },
        {
            id: 'p-direct',
            type: 'paragraph',
            data: { text: 'When y is <strong>directly proportional</strong> to x (written y ∝ x), doubling x doubles y. The ratio y/x is constant. The graph of y against x is a straight line through the origin.' },
            terms: []
        },
        {
            id: 'eq-direct',
            type: 'equation',
            data: {
                html: 'y = kx',
                caption: 'Direct proportion equation; k is the constant of proportionality'
            },
            terms: []
        },
        {
            id: 'h-inverse',
            type: 'heading',
            data: { text: 'Inverse Proportion', level: 2 },
            terms: []
        },
        {
            id: 'p-inverse',
            type: 'paragraph',
            data: { text: 'When y is <strong>inversely proportional</strong> to x (written y ∝ 1/x), doubling x halves y. The product xy is constant. The graph of y against x is a hyperbola in the first (and third) quadrant.' },
            terms: []
        },
        {
            id: 'eq-inverse',
            type: 'equation',
            data: {
                html: 'y = <span class="nb-frac"><span class="nb-num">k</span><span class="nb-den">x</span></span>',
                caption: 'Inverse proportion equation'
            },
            terms: []
        },
        {
            id: 'h-types',
            type: 'heading',
            data: { text: 'Types of Proportional Relationships', level: 2 },
            terms: []
        },
        {
            id: 'table-types',
            type: 'comparisonTable',
            data: {
                headers: ['Statement', 'Equation form', 'Graph shape'],
                rows: [
                    ['y ∝ x', 'y = kx', 'Straight line through origin'],
                    ['y ∝ x²', 'y = kx²', 'Parabola through origin'],
                    ['y ∝ x³', 'y = kx³', 'Cubic through origin'],
                    ['y ∝ 1/x', 'y = k/x', 'Hyperbola (x and y axes as asymptotes)'],
                    ['y ∝ 1/x²', 'y = k/x²', 'Steeper hyperbola'],
                    ['y ∝ √x', 'y = k√x', 'Square root curve']
                ],
                caption: 'Common proportional relationships'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Finding the Constant k', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Write down the proportional relationship: y = kxⁿ (or y = k/xⁿ).' },
                    { text: 'Substitute the given values of x and y.' },
                    { text: 'Solve for k.' },
                    { text: 'Write the equation with k found and use it to answer the question.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-direct',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Direct Proportion',
                text: 'y is directly proportional to x². When x = 3, y = 36. Find y when x = 5.<br/><br/>y = kx² → 36 = k(3²) = 9k → <strong>k = 4</strong><br/>y = 4x² → y = 4(25) = <strong>100</strong>'
            },
            terms: []
        },
        {
            id: 'worked-inverse',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Inverse Proportion',
                text: 'y is inversely proportional to √x. When x = 4, y = 6. Find x when y = 2.<br/><br/>y = k/√x → 6 = k/√4 = k/2 → <strong>k = 12</strong><br/>2 = 12/√x → √x = 6 → <strong>x = 36</strong>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always begin by writing the proportional equation with the constant k.<br/>• Do not confuse y ∝ x² (y = kx²) with y ∝ x + c (which is NOT a proportional relationship).<br/>• Direct proportion always passes through the origin on a y-vs-x graph.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Proportional relationships: write y = kxⁿ (or y = k/xⁿ), substitute given values to find k, then use the formula. Direct proportion (y ∝ x) gives a straight line through the origin. Inverse proportion (y ∝ 1/x) gives a hyperbola.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-types', prompt: 'Write proportional equations for: y ∝ x², y ∝ 1/x, y ∝ √x.' },
            { id: 'cue-2', blockId: 'worked-direct', prompt: 'y ∝ x², y = 36 when x = 3. Find y when x = 5.' },
            { id: 'cue-3', blockId: 'worked-inverse', prompt: 'y ∝ 1/√x, y = 6 when x = 4. Find x when y = 2.' },
            { id: 'cue-4', blockId: 'list-method', prompt: 'List the four steps for finding the constant in a proportional relationship.' }
        ],
        summaryText: 'Proportion: write y = kxⁿ → substitute to find k → use equation. Direct (y=kx): line through origin. Inverse (y=k/x): hyperbola. Always start by writing the equation with k.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_1_18  ·  Translations (Graph Transformations)
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_1_18 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 1 · Subtopic 18
 * "Translations"
 */

export const note_mathematics_1_1_18 = {
    pdfPath: '/notes/mathematics/algebra-and-functions/translations.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Understand and apply translation transformations of graphs: f(x) + a (vertical) and f(x + a) (horizontal); express translations using column vector notation.' },
            terms: []
        },
        {
            id: 'h-intro',
            type: 'heading',
            data: { text: 'Graph Translations', level: 2 },
            terms: []
        },
        {
            id: 'p-intro',
            type: 'paragraph',
            data: { text: 'A <strong>translation</strong> moves every point on a graph the same distance in the same direction, without rotating, reflecting, or stretching it. Two types of translation can be applied to a function y = f(x): a change <em>outside</em> the function (vertical) and a change <em>inside</em> the function (horizontal).' },
            terms: []
        },
        {
            id: 'h-vertical',
            type: 'heading',
            data: { text: 'Vertical Translation: y = f(x) + a', level: 2 },
            terms: []
        },
        {
            id: 'p-vertical',
            type: 'paragraph',
            data: { text: 'Adding a constant <em>outside</em> the function — i.e. y = f(x) + a — translates the graph <strong>a units upward</strong> (positive a) or downward (negative a). Every point (x, y) on f(x) maps to (x, y + a). The shape and x-coordinates are unchanged; only the height changes.' },
            terms: []
        },
        {
            id: 'eq-vertical',
            type: 'equation',
            data: {
                html: 'f(x) + a &nbsp;&nbsp;→&nbsp;&nbsp; translation by vector &nbsp;<sup>⎛0⎞</sup><sub>⎝a⎠</sub>',
                caption: 'Vertical translation: a > 0 moves up; a < 0 moves down'
            },
            terms: []
        },
        {
            id: 'h-horizontal',
            type: 'heading',
            data: { text: 'Horizontal Translation: y = f(x + a)', level: 2 },
            terms: []
        },
        {
            id: 'p-horizontal',
            type: 'paragraph',
            data: { text: 'Replacing x with (x + a) inside the function — i.e. y = f(x + a) — translates the graph <strong>a units to the left</strong> (positive a) or to the right (negative a). This is the <em>counterintuitive</em> result: f(x + 2) moves the graph LEFT by 2, not right. Every point (x, y) on f(x) maps to (x − a, y).' },
            terms: []
        },
        {
            id: 'eq-horizontal',
            type: 'equation',
            data: {
                html: 'f(x + a) &nbsp;&nbsp;→&nbsp;&nbsp; translation by vector &nbsp;<sup>⎛−a⎞</sup><sub>⎝ 0 ⎠</sub>',
                caption: 'Horizontal translation: a > 0 moves LEFT; a < 0 moves RIGHT'
            },
            terms: []
        },
        {
            id: 'key-both',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Summary of Translation Rules',
                text: '<strong>y = f(x) + a</strong> → translate (0, a): up by a if a > 0; down by |a| if a < 0<br/><strong>y = f(x + a)</strong> → translate (−a, 0): left by a if a > 0; right by |a| if a < 0<br/><br/>Remember the mnemonic: changes <em>inside</em> the bracket go the <em>opposite</em> direction.'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Vertical Translation',
                text: 'Starting from y = x², describe and sketch y = x² − 3.<br/><br/>y = f(x) − 3 → translation by vector (0, −3) → graph moves DOWN 3 units.<br/>• Vertex moves from (0, 0) to (0, −3).<br/>• x-intercepts: x² − 3 = 0 → x = ±√3.<br/>All other features identical to y = x².'
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Horizontal Translation',
                text: 'Starting from y = x², describe and sketch y = (x − 2)².<br/><br/>y = f(x − 2) → a = −2, translation by vector (2, 0) → graph moves RIGHT 2 units.<br/>• Vertex moves from (0, 0) to (2, 0).<br/>• y-intercept: (0 − 2)² = 4 → (0, 4).'
            },
            terms: []
        },
        {
            id: 'svg-translation',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 210" style="width:100%;max-width:380px;display:block;margin:0 auto;"><defs><marker id="ah18" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l18{font-family:sans-serif;font-size:10px;fill:#374151}.h18{font-family:sans-serif;font-size:10px;fill:#4f46e5;font-weight:600}.g18{font-family:sans-serif;font-size:10px;fill:#10b981;font-weight:600}</style><line x1="15" y1="130" x2="285" y2="130" stroke="#374151" stroke-width="1.5" marker-end="url(#ah18)"/><line x1="150" y1="205" x2="150" y2="15" stroke="#374151" stroke-width="1.5" marker-end="url(#ah18)"/><polyline points="90,195 100,175 110,155 120,140 130,133 140,131 150,130 160,131 170,133 180,140 190,155 200,175 210,195" fill="none" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,3" stroke-linejoin="round"/><polyline points="90,180 100,160 110,143 120,130 130,122 140,120 150,119 160,120 170,122 180,130 190,143 200,160 210,180" fill="none" stroke="#10b981" stroke-width="2" stroke-linejoin="round"/><polyline points="150,195 160,175 170,155 180,140 190,133 200,131 210,130 220,131 230,133 240,140 250,155 260,175 270,195" fill="none" stroke="#4f46e5" stroke-width="2" stroke-linejoin="round"/><circle cx="150" cy="130" r="4" fill="#374151"/><circle cx="150" cy="119" r="4" fill="#10b981"/><circle cx="210" cy="130" r="4" fill="#4f46e5"/><text x="80" y="125" class="l18">y = x²</text><text x="48" y="112" class="g18">y = x² + 1</text><text x="188" y="125" class="h18">y = (x\u22122)²</text><text x="278" y="144" class="l18">x</text><text x="155" y="12" class="l18">y</text><text x="153" y="143" class="l18">O</text></svg>',
                caption: 'y = x² (dashed, vertex at origin); y = x²+1 (green, translated up 1); y = (x−2)² (indigo, translated right 2)'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Most Common Mistake',
                text: '<strong>Horizontal direction is opposite to the sign inside the bracket.</strong><br/>y = f(x + 3) moves LEFT by 3 (not right).<br/>y = f(x − 5) moves RIGHT by 5 (not left).<br/><br/>Think of it as: the function reaches its original value when x = −3 (for f(x+3)), so the graph appears shifted left.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always state the translation as a column vector: e.g. "translation by ( 0 \\ −3 )".<br/>• If combining a horizontal and vertical translation: y = f(x + a) + b → vector (−a, b).<br/>• Key points (intercepts, vertex) must be transformed correctly — label them on the sketch.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Translations of y = f(x): f(x) + a moves the graph a units up (a > 0) or down (a < 0), vector (0, a). f(x + a) moves the graph a units LEFT (a > 0) or right (a < 0), vector (−a, 0). Changes inside the bracket go opposite to their sign — this is the key rule.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-both', prompt: 'What translation does y = f(x + 3) perform?' },
            { id: 'cue-2', blockId: 'key-both', prompt: 'What translation does y = f(x) − 5 perform?' },
            { id: 'cue-3', blockId: 'worked-2', prompt: 'Describe how y = (x − 2)² differs from y = x². Where is the vertex?' },
            { id: 'cue-4', blockId: 'callout-warning', prompt: 'Why does f(x + 3) move the graph LEFT rather than right?' },
            { id: 'cue-5', blockId: 'callout-tip', prompt: 'How do you express a combined horizontal and vertical translation as a column vector?' }
        ],
        summaryText: 'f(x)+a → up a (vector (0,a)). f(x+a) → left a (vector (−a,0)). Inside bracket: opposite direction. Combine: f(x+a)+b → vector (−a,b).',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# Write all files
# ─────────────────────────────────────────────────────────────────────────────
files = {
    "note_1_1_15.js": NOTE_1_1_15,
    "note_1_1_16.js": NOTE_1_1_16,
    "note_1_1_17.js": NOTE_1_1_17,
    "note_1_1_18.js": NOTE_1_1_18,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"✓  Wrote {path}")

print("\nDone — 4 files rewritten.")
