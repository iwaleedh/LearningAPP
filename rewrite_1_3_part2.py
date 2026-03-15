#!/usr/bin/env python3
"""
Rewrites WMA11 Topic 3 (Trigonometry) notes 4–6.
"""

import os

BASE = "src/data/seedNotes/mathematics/"

# ─────────────────────────────────────────────────────────────────────────────
# note_1_3_4  ·  Radian Measure
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_3_4 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 4
 * "Radian measure"
 */

export const note_mathematics_1_3_4 = {
    pdfPath: '/notes/mathematics/trigonometry/radian-measure.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Define the radian; convert between degrees and radians; use arc length s = rθ and sector area A = ½r²θ; solve problems combining these formulae.' },
            terms: []
        },
        {
            id: 'h-definition',
            type: 'heading',
            data: { text: 'What is a Radian?', level: 2 },
            terms: []
        },
        {
            id: 'p-definition',
            type: 'paragraph',
            data: { text: 'One radian is the angle subtended at the centre of a circle by an arc whose length equals the radius. Because the full circumference is 2πr at radius r, a full turn equals 2π radians.' },
            terms: []
        },
        {
            id: 'key-convert',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Degree ↔ Radian Conversions',
                text: '2π rad = 360° &nbsp;&nbsp;→&nbsp;&nbsp; <strong>π rad = 180°</strong><br/><br/>Degrees to radians: multiply by <strong>π/180</strong><br/>Radians to degrees: multiply by <strong>180/π</strong>'
            },
            terms: []
        },
        {
            id: 'table-common',
            type: 'comparisonTable',
            data: {
                headers: ['Degrees', 'Radians', 'Exact'],
                rows: [
                    ['30°', 'π/6', '≈ 0.524'],
                    ['45°', 'π/4', '≈ 0.785'],
                    ['60°', 'π/3', '≈ 1.047'],
                    ['90°', 'π/2', '≈ 1.571'],
                    ['120°', '2π/3', '≈ 2.094'],
                    ['180°', 'π', '≈ 3.142'],
                    ['270°', '3π/2', '≈ 4.712'],
                    ['360°', '2π', '≈ 6.283']
                ],
                caption: 'Common angle conversions'
            },
            terms: []
        },
        {
            id: 'h-arc',
            type: 'heading',
            data: { text: 'Arc Length', level: 2 },
            terms: []
        },
        {
            id: 'eq-arc',
            type: 'equation',
            data: {
                html: 's = r\u03b8',
                caption: 's = arc length, r = radius, θ = angle in <strong>radians</strong>'
            },
            terms: []
        },
        {
            id: 'h-sector',
            type: 'heading',
            data: { text: 'Area of a Sector', level: 2 },
            terms: []
        },
        {
            id: 'eq-sector',
            type: 'equation',
            data: {
                html: 'A = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>r²\u03b8',
                caption: 'A = sector area, r = radius, θ = angle in <strong>radians</strong>'
            },
            terms: []
        },
        {
            id: 'worked-arc',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Arc Length and Sector Area',
                text: 'A sector has radius 6 cm and angle 2π/3 radians. Find: (a) arc length, (b) area.<br/><br/>(a) s = rθ = 6 × 2π/3 = <strong>4π ≈ 12.6 cm</strong><br/>(b) A = ½r²θ = ½ × 36 × 2π/3 = 12π ≈ <strong>37.7 cm²</strong>'
            },
            terms: []
        },
        {
            id: 'h-mixed',
            type: 'heading',
            data: { text: 'Mixed Problems', level: 2 },
            terms: []
        },
        {
            id: 'p-mixed',
            type: 'paragraph',
            data: { text: 'Common exam problems combine arc length, sector area, and triangle area. The area of a segment (the region between a chord and an arc) is found by subtracting the triangle area from the sector area.' },
            terms: []
        },
        {
            id: 'eq-segment',
            type: 'equation',
            data: {
                html: 'A<sub>segment</sub> = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>r²\u03b8 − <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>r² sin\u03b8 = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>r²(\u03b8 − sin\u03b8)',
                caption: 'Area of a circular segment'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Critical Reminder',
                text: '<strong>θ must be in RADIANS</strong> for s = rθ and A = ½r²θ. If the angle is given in degrees, convert first. Marks are commonly lost by forgetting this step.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'π rad = 180°. To convert: ×π/180 (deg→rad), ×180/π (rad→deg). Arc length: s = rθ. Sector area: A = ½r²θ. Segment area: ½r²(θ − sin θ). θ MUST be in radians for all these formulae.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-convert', prompt: 'How do you convert 120° to radians? And 3π/4 to degrees?' },
            { id: 'cue-2', blockId: 'eq-arc', prompt: 'State the arc length formula. What units must θ be in?' },
            { id: 'cue-3', blockId: 'worked-arc', prompt: 'A sector has r = 6 cm and θ = 2π/3. Find the arc length and area.' },
            { id: 'cue-4', blockId: 'eq-segment', prompt: 'State the formula for the area of a circular segment in terms of r and θ.' }
        ],
        summaryText: 'π rad = 180°. s = rθ. A(sector) = ½r²θ. A(segment) = ½r²(θ−sinθ). θ in radians always.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_3_5  ·  Graphs of Trigonometric Functions
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_3_5 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 5
 * "Graphs of trigonometric functions"
 */

export const note_mathematics_1_3_5 = {
    pdfPath: '/notes/mathematics/trigonometry/graphs-of-trig-functions.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Sketch and describe the graphs of y = sin x, y = cos x, and y = tan x; identify their period, amplitude, and key features; use graphs to find all solutions of a trig equation in a given interval.' },
            terms: []
        },
        {
            id: 'h-properties',
            type: 'heading',
            data: { text: 'Key Properties of the Three Graphs', level: 2 },
            terms: []
        },
        {
            id: 'table-props',
            type: 'comparisonTable',
            data: {
                headers: ['Property', 'y = sin x', 'y = cos x', 'y = tan x'],
                rows: [
                    ['Period', '360° (2π)', '360° (2π)', '180° (π)'],
                    ['Amplitude', '1', '1', 'None (unbounded)'],
                    ['Range', '−1 ≤ y ≤ 1', '−1 ≤ y ≤ 1', 'y ∈ ℝ'],
                    ['y-intercept', '0', '1', '0'],
                    ['Zeros', '0°, 180°, 360°, …', '90°, 270°, …', '0°, 180°, 360°, …'],
                    ['Max (+1)', '90°, 450°, …', '0°, 360°, …', 'N/A'],
                    ['Asymptotes', 'None', 'None', '90°, 270°, …']
                ],
                caption: 'Summary of key features for y = sin x, cos x, tan x (0° to 360°)'
            },
            terms: []
        },
        {
            id: 'svg-sincos',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 160" style="width:100%;max-width:420px;display:block;margin:0 auto;"><defs><marker id="ah32a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#374151"/></marker></defs><style>.lg{font-family:sans-serif;font-size:9px;fill:#374151}.ls{font-family:sans-serif;font-size:9px;fill:#4f46e5}.lc{font-family:sans-serif;font-size:9px;fill:#10b981}</style><line x1="10" y1="80" x2="330" y2="80" stroke="#374151" stroke-width="1" marker-end="url(#ah32a)"/><line x1="30" y1="155" x2="30" y2="10" stroke="#374151" stroke-width="1" marker-end="url(#ah32a)"/><text x="332" y="84" class="lg">x</text><text x="33" y="10" class="lg">y</text><text x="22" y="74" class="lg">1</text><text x="22" y="92" class="lg">0</text><text x="18" y="108" class="lg">−1</text><path d="M30,80 C45,80 50,20 70,20 C90,20 95,80 110,80 C125,80 130,140 150,140 C170,140 175,80 190,80 C205,80 210,20 230,20 C250,20 255,80 270,80 C285,80 290,140 310,140" fill="none" stroke="#4f46e5" stroke-width="2"/><path d="M30,20 C50,20 55,80 70,80 C85,80 90,140 110,140 C130,140 135,80 150,80 C165,80 170,20 190,20 C210,20 215,80 230,80 C245,80 250,140 270,140 C285,140 295,80 310,80" fill="none" stroke="#10b981" stroke-width="2"/><text x="190" y="15" class="ls">y = sin x</text><text x="190" y="130" class="lc">y = cos x</text><text x="55" y="75" class="lg">90°</text><text x="95" y="75" class="lg">180°</text><text x="135" y="75" class="lg">270°</text><text x="178" y="75" class="lg">360°</text></svg>',
                caption: 'y = sin x (indigo) and y = cos x (green): same shape, cos is sin shifted 90° left'
            },
            terms: []
        },
        {
            id: 'h-solving',
            type: 'heading',
            data: { text: 'Finding All Solutions in a Given Interval', level: 2 },
            terms: []
        },
        {
            id: 'p-solving',
            type: 'paragraph',
            data: { text: 'Your calculator gives only the <strong>principal value</strong> — the first solution it finds (usually in Q1 or Q4). To find all solutions in a given range, use the symmetry and periodicity of the graph.' },
            terms: []
        },
        {
            id: 'list-solving',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Find the principal value α using your calculator.' },
                    { text: 'Use CAST or the graph to identify other solutions in the period.' },
                    { text: 'Add or subtract the full period (360° or 2π) repeatedly to get all solutions in range.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-solving',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Solve sin x = 0.5 for 0° ≤ x ≤ 360°',
                text: 'Principal value: sin⁻¹ 0.5 = 30°<br/>sin is positive in Q1 and Q2 (CAST).<br/>Q1 solution: x = 30°<br/>Q2 solution: x = 180° − 30° = 150°<br/><strong>x = 30° or x = 150°</strong>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Always sketch the graph before solving — it shows how many solutions to expect.<br/>• For cos x = k: Q1 solution α, Q4 solution 360° − α.<br/>• For tan x = k: period is 180°, so second solution is α + 180°.<br/>• Check all solutions lie within the required interval.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'y=sin x and y=cos x have period 360°, amplitude 1, range [−1,1]. y=tan x has period 180°, no amplitude, vertical asymptotes at 90°, 270°. Use CAST + periodicity to find all solutions in a given range.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-props', prompt: 'State the period, range, and y-intercept for y = sin x, y = cos x, and y = tan x.' },
            { id: 'cue-2', blockId: 'worked-solving', prompt: 'Solve sin x = 0.5 for 0° ≤ x ≤ 360°. Show all steps.' },
            { id: 'cue-3', blockId: 'callout-tip', prompt: 'How do you find the second solution for cos x = k in the range 0° to 360°?' },
            { id: 'cue-4', blockId: 'p-solving', prompt: 'Why does a calculator give only the principal value, and how do you find others?' }
        ],
        summaryText: 'sin/cos: period 360°, range [−1,1]. tan: period 180°, unbounded. CAST gives secondary solutions. Add period to get more solutions.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_3_6  ·  Transformations of Trigonometric Functions
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_3_6 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 6
 * "Transformations of trigonometric functions"
 */

export const note_mathematics_1_3_6 = {
    pdfPath: '/notes/mathematics/trigonometry/transformations-of-trig-functions.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply translations, stretches, and reflections to trig graphs; identify amplitude, period, and phase shift from the equation y = a sin(bx + c) + d; sketch transformed trig graphs.' },
            terms: []
        },
        {
            id: 'h-general',
            type: 'heading',
            data: { text: 'General Form', level: 2 },
            terms: []
        },
        {
            id: 'key-general',
            type: 'callout',
            data: {
                style: 'key',
                title: 'y = a sin(bx + c) + d',
                text: '<strong>a</strong> → amplitude (vertical stretch by factor |a|; reflection if a < 0)<br/><strong>b</strong> → period = 360°/|b| (horizontal stretch; larger b means faster oscillation)<br/><strong>c</strong> → phase shift (horizontal translation by −c/b)<br/><strong>d</strong> → vertical translation (shift up/down by d)'
            },
            terms: []
        },
        {
            id: 'table-trans',
            type: 'comparisonTable',
            data: {
                headers: ['Transformation', 'Equation', 'Effect on graph'],
                rows: [
                    ['Vertical stretch', 'y = a sin x', 'Amplitude changes to |a|; range [−a, a]'],
                    ['Horizontal stretch', 'y = sin(bx)', 'Period = 360°/b'],
                    ['Vertical translation', 'y = sin x + d', 'Graph shifts up by d; midline y = d'],
                    ['Horizontal translation', 'y = sin(x + c)', 'Graph shifts left by c (if c > 0)'],
                    ['Reflection in x-axis', 'y = −sin x', 'Graph flipped vertically'],
                    ['Reflection in y-axis', 'y = sin(−x)', 'Equivalent to −sin x for sin; cos(−x) = cos x']
                ],
                caption: 'Transformations applied to y = sin x (same rules apply to cos x and tan x)'
            },
            terms: []
        },
        {
            id: 'worked-1',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Identify Features',
                text: 'State the amplitude, period, and vertical shift for y = 3 cos(2x) − 1.<br/><br/>a = 3 → amplitude = 3<br/>b = 2 → period = 360°/2 = <strong>180°</strong><br/>d = −1 → vertical shift: graph moves <strong>down 1</strong><br/>Range: [3(−1)−1, 3(1)−1] = [−4, 2]'
            },
            terms: []
        },
        {
            id: 'worked-2',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Sketch by Transformation',
                text: 'Sketch y = 2 sin(x − 30°) for 0° ≤ x ≤ 360°.<br/><br/>Start with y = sin x. Apply: vertical stretch ×2 (amplitude → 2), then horizontal translation +30° to the right.<br/>Key points move: (0°,0) → (30°,0); (90°,1) → (120°,2); (180°,0) → (210°,0); (270°,−1) → (300°,−2); (360°,0) → (390°,0 — outside range).<br/>Sketch through these transformed coordinates.'
            },
            terms: []
        },
        {
            id: 'h-solving',
            type: 'heading',
            data: { text: 'Solving Equations with Transformed Functions', level: 2 },
            terms: []
        },
        {
            id: 'p-solving',
            type: 'paragraph',
            data: { text: 'When solving equations like 2 sin(3x) = √3, first isolate the trig function, then solve the inner equation for the full range. If the period is shorter, more solutions fit in 0° ≤ x ≤ 360°. The number of solutions equals 360°/period.' },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• When sketching, always label: the new max/min (amplitude), the new period, any shifted intercepts.<br/>• Phase shift: y = sin(x − 30°) shifts RIGHT by 30°, y = sin(x + 30°) shifts LEFT by 30°.<br/>• When solving 2sin(3x)=1 in 0°≤x≤360°, set u = 3x and solve for u in 0°≤u≤1080° — then divide by 3.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'y = a sin(bx + c) + d: amplitude |a|, period 360°/b, phase shift −c/b, vertical shift d. Negative a reflects in x-axis. To sketch: transform key points (0,0), (90,1), (180,0), (270,−1), (360,0) for sin x.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-general', prompt: 'In y = a sin(bx + c) + d, what does each of a, b, c, and d affect?' },
            { id: 'cue-2', blockId: 'worked-1', prompt: 'State the amplitude, period, and range of y = 3 cos(2x) − 1.' },
            { id: 'cue-3', blockId: 'worked-2', prompt: 'Describe how to sketch y = 2 sin(x − 30°) from y = sin x.' },
            { id: 'cue-4', blockId: 'callout-tip', prompt: 'How do you solve 2 sin(3x) = 1 for 0° ≤ x ≤ 360°? How many solutions are there?' }
        ],
        summaryText: 'a=amplitude, 360/b=period, −c/b=phase shift, d=vertical shift. Transform key points. Expand range before solving (0 to b·360°).',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# Write
# ─────────────────────────────────────────────────────────────────────────────
files = {
    "note_1_3_4.js": NOTE_1_3_4,
    "note_1_3_5.js": NOTE_1_3_5,
    "note_1_3_6.js": NOTE_1_3_6,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"✓  Wrote {path}")

print("\nDone — 3 files rewritten.")
