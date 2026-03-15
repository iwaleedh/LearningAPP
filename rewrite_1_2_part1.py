#!/usr/bin/env python3
"""
Rewrites WMA11 Topic 2 (Coordinate Geometry) notes 0–3 with full A-level content.
"""

import os

BASE = "src/data/seedNotes/mathematics/"

# ─────────────────────────────────────────────────────────────────────────────
# note_1_2_0  ·  Basic Coordinate Geometry
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_2_0 = r"""/**
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
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" style="width:100%;max-width:300px;display:block;margin:0 auto;"><defs><marker id="ah20a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker></defs><style>.l20a{font-family:sans-serif;font-size:11px;fill:#374151}.h20a{font-family:sans-serif;font-size:11px;fill:#4f46e5;font-weight:600}</style><line x1="20" y1="90" x2="220" y2="90" stroke="#374151" stroke-width="1.2" marker-end="url(#ah20a)"/><line x1="80" y1="170" x2="80" y2="15" stroke="#374151" stroke-width="1.2" marker-end="url(#ah20a)"/><line x1="40" y1="145" x2="180" y2="40" stroke="#4f46e5" stroke-width="2.5"/><circle cx="40" cy="145" r="4" fill="#4f46e5"/><circle cx="180" cy="40" r="4" fill="#4f46e5"/><circle cx="110" cy="92" r="4" fill="#10b981"/><line x1="40" y1="145" x2="180" y2="145" stroke="#374151" stroke-width="1" stroke-dasharray="4,3"/><line x1="180" y1="145" x2="180" y2="40" stroke="#374151" stroke-width="1" stroke-dasharray="4,3"/><text x="25" y="158" class="h20a">A(x\u2081,y\u2081)</text><text x="183" y="38" class="h20a">B(x\u2082,y\u2082)</text><text x="113" y="87" style="font-family:sans-serif;font-size:10px;fill:#10b981">M</text><text x="100" y="160" class="l20a">x\u2082\u2212x\u2081</text><text x="185" y="100" class="l20a">y\u2082\u2212y\u2081</text><text x="213" y="104" class="l20a">x</text><text x="84" y="12" class="l20a">y</text></svg>',
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
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_2_1  ·  Equation of a Straight Line
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_2_1 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 2 · Subtopic 1
 * "Equation of a straight line"
 */

export const note_mathematics_1_2_1 = {
    pdfPath: '/notes/mathematics/coordinate-geometry/equation-of-a-straight-line.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Write the equation of a straight line in the forms y = mx + c and y − y₁ = m(x − x₁); convert between forms; find the equation of a line from given information.' },
            terms: []
        },
        {
            id: 'h-forms',
            type: 'heading',
            data: { text: 'Forms of a Straight Line Equation', level: 2 },
            terms: []
        },
        {
            id: 'table-forms',
            type: 'comparisonTable',
            data: {
                headers: ['Form', 'Equation', 'When to use'],
                rows: [
                    ['Slope-intercept', 'y = mx + c', 'When m and y-intercept c are known'],
                    ['Point-slope', 'y − y₁ = m(x − x₁)', 'When gradient m and a point (x₁, y₁) are known'],
                    ['General', 'ax + by + c = 0', 'To present answer with integer coefficients']
                ],
                caption: 'Three equivalent forms of the straight line equation'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Finding the Equation of a Line', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: '<strong>Find the gradient m</strong>: use m = (y₂−y₁)/(x₂−x₁) if given two points.' },
                    { text: '<strong>Use point-slope form</strong>: substitute m and one known point into y − y₁ = m(x − x₁).' },
                    { text: '<strong>Rearrange</strong> into the required form (y = mx + c or ax + by + c = 0).' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — From Two Points',
                text: 'Find the equation of the line through (2, 1) and (5, 7).<br/><br/>m = (7−1)/(5−2) = 6/3 = 2<br/>y − 1 = 2(x − 2)<br/>y − 1 = 2x − 4<br/><strong>y = 2x − 3</strong>'
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — General Form',
                text: 'Express the line through (3, −1) with gradient 1/2 in the form ax + by + c = 0 with integer coefficients.<br/><br/>y − (−1) = (1/2)(x − 3)<br/>y + 1 = (1/2)x − 3/2<br/>Multiply by 2: 2y + 2 = x − 3<br/><strong>x − 2y − 5 = 0</strong>'
            },
            terms: []
        },
        {
            id: 'h-special',
            type: 'heading',
            data: { text: 'Special Cases', level: 2 },
            terms: []
        },
        {
            id: 'table-special',
            type: 'comparisonTable',
            data: {
                headers: ['Line type', 'Equation', 'Gradient'],
                rows: [
                    ['Horizontal', 'y = k (constant)', 'm = 0'],
                    ['Vertical', 'x = k (constant)', 'undefined'],
                    ['Through origin', 'y = mx', 'c = 0']
                ],
                caption: 'Special straight line cases'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• When given two points, <em>always</em> calculate gradient first, then use point-slope form.<br/>• "Find the equation" often just means rearranging into y = mx + c — show your working clearly.<br/>• A sketch will help you check whether your gradient sign is correct.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Straight line equations: y = mx + c (slope-intercept) or y − y₁ = m(x − x₁) (point-slope). To find the equation: calculate gradient → apply point-slope → rearrange. Vertical lines: x = k; horizontal lines: y = k.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-forms', prompt: 'State three forms of a straight line equation and when to use each.' },
            { id: 'cue-2', blockId: 'worked-1', prompt: 'Find the equation of the line through (2, 1) and (5, 7).' },
            { id: 'cue-3', blockId: 'worked-2', prompt: 'Write the line through (3, −1) with gradient 1/2 in the form ax + by + c = 0.' },
            { id: 'cue-4', blockId: 'table-special', prompt: 'What is the equation of a vertical line through x = 4?' }
        ],
        summaryText: 'y=mx+c (when c known); y−y₁=m(x−x₁) (when a point known). Calculate m first, then substitute. ax+by+c=0 needs integer coefficients.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_2_2  ·  Parallel and Perpendicular Gradients
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_2_2 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 2 · Subtopic 2
 * "Parallel and perpendicular gradients"
 */

export const note_mathematics_1_2_2 = {
    pdfPath: '/notes/mathematics/coordinate-geometry/parallel-and-perpendicular-gradients.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Identify parallel and perpendicular lines from their gradients; use the perpendicular gradient rule to find equations of perpendicular lines; understand collinear points.' },
            terms: []
        },
        {
            id: 'h-parallel',
            type: 'heading',
            data: { text: 'Parallel Lines', level: 2 },
            terms: []
        },
        {
            id: 'p-parallel',
            type: 'paragraph',
            data: { text: 'Two lines are <strong>parallel</strong> if and only if they have the <strong>same gradient</strong>. Parallel lines never intersect. Distinct parallel lines have different y-intercepts.' },
            terms: []
        },
        {
            id: 'key-parallel',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Parallel Lines Rule',
                text: 'Lines ℓ₁ and ℓ₂ are parallel ↔ m₁ = m₂ (and they are distinct lines)'
            },
            terms: []
        },
        {
            id: 'h-perp',
            type: 'heading',
            data: { text: 'Perpendicular Lines', level: 2 },
            terms: []
        },
        {
            id: 'p-perp',
            type: 'paragraph',
            data: { text: 'Two lines are <strong>perpendicular</strong> (meet at 90°) if the product of their gradients is −1. The perpendicular gradient is the <strong>negative reciprocal</strong>: if the original gradient is m, the perpendicular gradient is −1/m.' },
            terms: []
        },
        {
            id: 'key-perp',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Perpendicular Lines Rule',
                text: 'Lines ℓ₁ and ℓ₂ are perpendicular ↔ m₁ × m₂ = −1<br/>i.e.  m₂ = −1/m₁  (negative reciprocal)'
            },
            terms: []
        },
        {
            id: 'worked-perp',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Perpendicular Line',
                text: 'Find the equation of the line perpendicular to y = 3x − 2 that passes through (6, 1).<br/><br/>Gradient of given line: m₁ = 3.<br/>Perpendicular gradient: m₂ = −1/3.<br/>y − 1 = (−1/3)(x − 6)<br/>y − 1 = −x/3 + 2<br/><strong>y = −x/3 + 3</strong>  or  x + 3y − 9 = 0'
            },
            terms: []
        },
        {
            id: 'h-collinear',
            type: 'heading',
            data: { text: 'Collinear Points', level: 2 },
            terms: []
        },
        {
            id: 'p-collinear',
            type: 'paragraph',
            data: { text: 'Three or more points are <strong>collinear</strong> if they all lie on the same straight line. To test: calculate the gradient between two pairs of points. If the gradients are equal and the points share a common coordinate, they are collinear.' },
            terms: []
        },
        {
            id: 'worked-collinear',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Collinear Check',
                text: 'Are A = (1, 2), B = (3, 6), C = (5, 10) collinear?<br/><br/>Gradient AB = (6−2)/(3−1) = 4/2 = 2<br/>Gradient BC = (10−6)/(5−3) = 4/2 = 2<br/>Equal gradients and B is shared → <strong>yes, collinear</strong>.'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• To find the perpendicular gradient: <em>flip and negate</em>. Gradient 2/3 → perpendicular −3/2.<br/>• A common error: forgetting the negative sign. Product m₁m₂ = −1, not +1.<br/>• For horizontal lines (m = 0), the perpendicular is a vertical line with undefined gradient.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Parallel: m₁ = m₂. Perpendicular: m₁ × m₂ = −1 (i.e. m₂ = −1/m₁, the negative reciprocal). Collinear points lie on the same line — verify by checking equal gradients between pairs. Flip and negate for perpendicular gradient.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-parallel', prompt: 'State the condition for two lines to be parallel.' },
            { id: 'cue-2', blockId: 'key-perp', prompt: 'State the product condition for perpendicular lines and the perpendicular gradient formula.' },
            { id: 'cue-3', blockId: 'worked-perp', prompt: 'Find the equation of the line through (6, 1) perpendicular to y = 3x − 2.' },
            { id: 'cue-4', blockId: 'worked-collinear', prompt: 'Show that A=(1,2), B=(3,6), C=(5,10) are collinear.' }
        ],
        summaryText: 'Parallel: same gradient. Perpendicular: m₁m₂=−1, so m₂=−1/m₁. Collinear: equal gradients between all pairs of points.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_2_3  ·  Modelling with Straight Lines
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_2_3 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 2 · Subtopic 3
 * "Modelling with straight lines"
 */

export const note_mathematics_1_2_3 = {
    pdfPath: '/notes/mathematics/coordinate-geometry/modelling-with-straight-lines.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply straight line equations to real-world contexts; interpret the gradient as a rate of change and the y-intercept as an initial value; evaluate and refine linear models.' },
            terms: []
        },
        {
            id: 'h-model',
            type: 'heading',
            data: { text: 'What is a Straight Line Model?', level: 2 },
            terms: []
        },
        {
            id: 'p-model',
            type: 'paragraph',
            data: { text: 'A <strong>mathematical model</strong> is a simplified equation or formula that represents a real-world situation. When a relationship is approximately linear, the model y = mx + c is used, where the variables x and y represent real quantities (time, distance, temperature, etc.).' },
            terms: []
        },
        {
            id: 'key-interpret',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Interpreting m and c in Context',
                text: '<strong>Gradient m</strong> = rate of change of y per unit increase in x.<br/>e.g. If y = cost (£) and x = hours: m = cost per hour (£/hr).<br/><br/><strong>y-intercept c</strong> = initial value of y when x = 0.<br/>e.g. c = starting charge before any hours are worked.'
            },
            terms: []
        },
        {
            id: 'h-method',
            type: 'heading',
            data: { text: 'Setting Up a Linear Model', level: 2 },
            terms: []
        },
        {
            id: 'list-method',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Define your variables clearly (state what x and y represent, including units).' },
                    { text: 'Extract two data points or a gradient and one point from the question.' },
                    { text: 'Calculate gradient m and y-intercept c.' },
                    { text: 'Write the model y = mx + c.' },
                    { text: 'Interpret m and c in the real-world context.' },
                    { text: 'Use the model to predict future values, and comment on validity.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-sprint',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Hooke\'s Law Spring',
                text: 'A spring has natural length 20 cm. A mass of 500 g extends it to 22 cm; a mass of 1500 g extends it to 26 cm. Find a linear model for length L in terms of mass m (grams), and interpret the gradient and intercept.<br/><br/>Two points: (500, 22) and (1500, 26).<br/>Gradient = (26−22)/(1500−500) = 4/1000 = 0.004 cm/g<br/>Using (500, 22): 22 = 0.004(500) + c → c = 22 − 2 = 20<br/><strong>L = 0.004m + 20</strong><br/>• Gradient 0.004 cm/g: each additional gram extends the spring by 0.004 cm.<br/>• Intercept 20 cm: the natural length of the spring (with no mass).'
            },
            terms: []
        },
        {
            id: 'h-validity',
            type: 'heading',
            data: { text: 'Model Limitations', level: 2 },
            terms: []
        },
        {
            id: 'p-validity',
            type: 'paragraph',
            data: { text: 'Linear models are only valid for the range of data used to create them. Extrapolation (predicting beyond the data range) can be unreliable. For example, a spring model breaks down once the elastic limit is exceeded.' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always interpret m and c in the context of the problem — include units in your interpretation.<br/>• "State the value of c and interpret it" means say what c represents in real life, not just write the number.<br/>• Comment on whether extrapolation is reliable when asked about predictions.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Linear modelling: write y = mx + c with x and y as real-world variables. Gradient m = rate of change; y-intercept c = initial value. Find m and c from two data points. State units in all interpretations. Models are only valid within the data range.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-interpret', prompt: 'In y = mx + c, what do m and c each represent in a real-world context?' },
            { id: 'cue-2', blockId: 'worked-sprint', prompt: 'Construct a linear model for a spring using points (500, 22) and (1500, 26).' },
            { id: 'cue-3', blockId: 'p-validity', prompt: 'Why might a linear model fail when extrapolating beyond the data range?' },
            { id: 'cue-4', blockId: 'list-method', prompt: 'List the 6 steps for setting up and using a linear model.' }
        ],
        summaryText: 'm = rate of change (with units), c = initial value. Find from two data points. Interpret both in context. Models valid only within data range.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# Write all files
# ─────────────────────────────────────────────────────────────────────────────
files = {
    "note_1_2_0.js": NOTE_1_2_0,
    "note_1_2_1.js": NOTE_1_2_1,
    "note_1_2_2.js": NOTE_1_2_2,
    "note_1_2_3.js": NOTE_1_2_3,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"✓  Wrote {path}")

print("\nDone — 4 files rewritten.")
