#!/usr/bin/env python3
"""
Rewrites WMA11 Topic 3 (Trigonometry) notes 0–3.
"""

import os

BASE = "src/data/seedNotes/mathematics/"

# ─────────────────────────────────────────────────────────────────────────────
# note_1_3_0  ·  Basic Definitions (SOH-CAH-TOA, unit circle, CAST)
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_3_0 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 0
 * "Basic definitions of trigonometric functions"
 */

export const note_mathematics_1_3_0 = {
    pdfPath: '/notes/mathematics/trigonometry/basic-definitions.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Define sin, cos and tan as ratios of sides in a right-angled triangle; interpret these ratios on the unit circle; use the CAST diagram to determine signs in each quadrant; recall tan θ = sin θ / cos θ.' },
            terms: []
        },
        {
            id: 'h-ratios',
            type: 'heading',
            data: { text: 'Trigonometric Ratios', level: 2 },
            terms: []
        },
        {
            id: 'p-ratios',
            type: 'paragraph',
            data: { text: 'The three primary trigonometric functions are defined as ratios of the sides of a right-angled triangle relative to an angle θ. Label the sides as: <strong>Hypotenuse (H)</strong> — the longest side (opposite the right angle); <strong>Opposite (O)</strong> — the side opposite angle θ; <strong>Adjacent (A)</strong> — the side next to angle θ (not the hypotenuse).' },
            terms: []
        },
        {
            id: 'key-sohcahtoa',
            type: 'callout',
            data: {
                style: 'key',
                title: 'SOHCAHTOA — The Three Ratios',
                text: 'sin θ = <strong>O</strong>/<strong>H</strong> &nbsp;·&nbsp; cos θ = <strong>A</strong>/<strong>H</strong> &nbsp;·&nbsp; tan θ = <strong>O</strong>/<strong>A</strong><br/><br/>Mnemonic: <em>Some Old Hens Cackle And Howl Through Old Age</em>'
            },
            terms: []
        },
        {
            id: 'svg-triangle',
            type: 'svg',
            data: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" style="width:100%;max-width:300px;display:block;margin:0 auto;"><style>.lt{font-family:sans-serif;font-size:11px;fill:#374151}.lh{font-family:sans-serif;font-size:12px;fill:#4f46e5;font-weight:bold}</style><polygon points="30,150 180,150 180,40" fill="none" stroke="#374151" stroke-width="1.5"/><rect x="166" y="136" width="14" height="14" fill="none" stroke="#374151" stroke-width="1.2"/><text x="38" y="148" class="lt">θ</text><text x="100" y="168" class="lh">Adjacent (A)</text><text x="185" y="100" class="lh" transform="rotate(90,185,100)" text-anchor="middle">Opposite (O)</text><text x="95" y="90" class="lh" transform="rotate(-33,95,90)" text-anchor="middle">Hypotenuse (H)</text></svg>',
                caption: 'Right-angled triangle: O opposite θ, A adjacent to θ, H is always the hypotenuse'
            },
            terms: []
        },
        {
            id: 'h-identity',
            type: 'heading',
            data: { text: 'The Tangent Identity', level: 2 },
            terms: []
        },
        {
            id: 'eq-tanid',
            type: 'equation',
            data: {
                html: 'tan θ = <span class="nb-frac"><span class="nb-num">sin θ</span><span class="nb-den">cos θ</span></span>',
                caption: 'tan is the ratio of sin to cos — proved directly from O/A = (O/H) ÷ (A/H)'
            },
            terms: []
        },
        {
            id: 'h-unit-circle',
            type: 'heading',
            data: { text: 'The Unit Circle', level: 2 },
            terms: []
        },
        {
            id: 'p-unit-circle',
            type: 'paragraph',
            data: { text: 'The unit circle has radius 1 and centre (0, 0). For an angle θ measured anticlockwise from the positive x-axis, the point on the circle is: (x, y) = (cos θ, sin θ). This extends the definitions of sin and cos to angles beyond 90°.' },
            terms: []
        },
        {
            id: 'h-cast',
            type: 'heading',
            data: { text: 'CAST Diagram — Signs of Trig Functions', level: 2 },
            terms: []
        },
        {
            id: 'p-cast',
            type: 'paragraph',
            data: { text: 'As θ increases beyond 90°, x and y can become negative, so cos and sin change sign. The CAST diagram shows which functions are <strong>positive</strong> in each quadrant:' },
            terms: []
        },
        {
            id: 'table-cast',
            type: 'comparisonTable',
            data: {
                headers: ['Quadrant', 'Range', 'Positive functions'],
                rows: [
                    ['1st (C → A)', '0° – 90°', 'All (sin, cos, tan)'],
                    ['2nd', '90° – 180°', 'Sin only'],
                    ['3rd', '180° – 270°', 'Tan only'],
                    ['4th', '270° – 360°', 'Cos only']
                ],
                caption: 'CAST: reading anticlockwise from Q4 — Cos, All, Sin, Tan'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• CAST is used to find secondary solutions when solving trig equations — e.g. sin is positive in Q1 and Q2, so sin x = 0.5 gives x = 30° and x = 150°.<br/>• Always check calculator is in degree or radian mode as required by the question.<br/>• "Principal value" given by calculator is the Q1 (or Q4 for negative) solution only.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'sin θ = O/H, cos θ = A/H, tan θ = O/A. The unit circle gives (cos θ, sin θ). tan θ = sin θ / cos θ. CAST: All positive in Q1; Sin in Q2; Tan in Q3; Cos in Q4.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-sohcahtoa', prompt: 'State the three SOHCAHTOA ratios and what each letter stands for.' },
            { id: 'cue-2', blockId: 'eq-tanid', prompt: 'Prove that tan θ = sin θ / cos θ using the basic definitions.' },
            { id: 'cue-3', blockId: 'table-cast', prompt: 'In which quadrants are (a) sin, (b) cos, (c) tan positive?' },
            { id: 'cue-4', blockId: 'p-unit-circle', prompt: 'What are the coordinates of the point on the unit circle at angle θ?' }
        ],
        summaryText: 'sin=O/H, cos=A/H, tan=O/A=sin/cos. Unit circle: (cos θ, sin θ). CAST: All-Sin-Tan-Cos positive in Q1-Q2-Q3-Q4.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_3_1  ·  Right-Angled Triangles (SOHCAHTOA applications)
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_3_1 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 1
 * "Right-angled triangles"
 */

export const note_mathematics_1_3_1 = {
    pdfPath: '/notes/mathematics/trigonometry/right-angled-triangles.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Use SOHCAHTOA to find missing sides and angles in right-angled triangles; apply inverse trigonometric functions; use Pythagoras\' theorem alongside trig.' },
            terms: []
        },
        {
            id: 'h-find-side',
            type: 'heading',
            data: { text: 'Finding a Missing Side', level: 2 },
            terms: []
        },
        {
            id: 'list-side',
            type: 'list',
            data: {
                style: 'numbered',
                items: [
                    { text: 'Label the triangle: H (hypotenuse), O (opposite to the known/required angle), A (adjacent).' },
                    { text: 'Choose the ratio involving the known side and the unknown side.' },
                    { text: 'Write the equation and rearrange to find the unknown.' }
                ]
            },
            terms: []
        },
        {
            id: 'worked-side',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Find a side',
                text: 'In a right triangle, angle θ = 35°, hypotenuse H = 10 cm. Find the opposite side O.<br/><br/>sin 35° = O/10<br/>O = 10 × sin 35°<br/><strong>O ≈ 5.74 cm</strong>'
            },
            terms: []
        },
        {
            id: 'h-find-angle',
            type: 'heading',
            data: { text: 'Finding a Missing Angle', level: 2 },
            terms: []
        },
        {
            id: 'p-inverse',
            type: 'paragraph',
            data: { text: 'To find an unknown angle, use the <strong>inverse trigonometric functions</strong> sin⁻¹, cos⁻¹, and tan⁻¹. These are the reverse operations of sin, cos, and tan. The output is the angle in degrees (or radians).' },
            terms: []
        },
        {
            id: 'worked-angle',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Find an angle',
                text: 'A triangle has adjacent = 6 and hypotenuse = 10. Find angle θ.<br/><br/>cos θ = 6/10 = 0.6<br/>θ = cos⁻¹(0.6)<br/><strong>θ ≈ 53.1°</strong>'
            },
            terms: []
        },
        {
            id: 'h-pythagoras',
            type: 'heading',
            data: { text: 'Using Pythagoras\' Theorem', level: 2 },
            terms: []
        },
        {
            id: 'eq-pyth',
            type: 'equation',
            data: {
                html: 'a² + b² = c²',
                caption: 'Pythagoras — c is the hypotenuse, a and b are the other two sides'
            },
            terms: []
        },
        {
            id: 'p-pythagoras',
            type: 'paragraph',
            data: { text: 'Use Pythagoras when: two sides are known and the third is required, without needing any angle. Can be combined with trig: find one side with trig first, then use Pythagoras for the third.' },
            terms: []
        },
        {
            id: 'worked-combined',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Combined',
                text: 'A right-angled triangle has angle 40° and adjacent = 7. Find the hypotenuse and the opposite side.<br/><br/>H: cos 40° = 7/H → H = 7 / cos 40° ≈ 9.14 cm<br/>O: by Pythagoras — O = √(9.14² − 7²) ≈ √(83.5 − 49) ≈ √34.5 ≈ 5.87 cm<br/>Check: sin 40° × 9.14 ≈ 5.87 ✓'
            },
            terms: []
        },
        {
            id: 'callout-warning',
            type: 'callout',
            data: {
                style: 'warning',
                title: 'Common Mistakes',
                text: '• Confusing Opposite and Adjacent — re-label the triangle for the given angle every time.<br/>• Using degrees/radians in wrong calculator mode — check mode before every calculation.<br/>• SOHCAHTOA applies ONLY to right-angled triangles; use the sine/cosine rule for others.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Label H, O, A relative to the angle. Choose the matching ratio (SOH, CAH, or TOA). Rearrange to find the side. For angles, use the inverse function (sin⁻¹, cos⁻¹, tan⁻¹). Pythagoras gives the third side without angles.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-sohcahtoa', prompt: 'Write down the three SOHCAHTOA formulae for finding sides.' },
            { id: 'cue-2', blockId: 'worked-side', prompt: 'With angle 35° and hypotenuse 10 cm, find the opposite side.' },
            { id: 'cue-3', blockId: 'worked-angle', prompt: 'Adjacent = 6, hypotenuse = 10. Find angle θ.' },
            { id: 'cue-4', blockId: 'callout-warning', prompt: 'List three common mistakes when using SOHCAHTOA.' }
        ],
        summaryText: 'Label sides relative to the relevant angle. Choose SOH/CAH/TOA. Use inverse trig for angles. Pythagoras for the third side.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_3_2  ·  Trigonometric Exact Values
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_3_2 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 2
 * "Trigonometric exact values"
 */

export const note_mathematics_1_3_2 = {
    pdfPath: '/notes/mathematics/trigonometry/trigonometry-exact-values.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Recall exact values of sin, cos, and tan for 0°, 30°, 45°, 60°, 90°, and 180°; derive them from special triangles; express angles in both degrees and radians.' },
            terms: []
        },
        {
            id: 'h-why',
            type: 'heading',
            data: { text: 'Why Exact Values?', level: 2 },
            terms: []
        },
        {
            id: 'p-why',
            type: 'paragraph',
            data: { text: 'At A-level, many trigonometry questions require exact answers (e.g. "√3/2" rather than "0.866"). These arise from special right-angled triangles. The exact values must be recalled or quickly derived — they are NOT given in the formula booklet.' },
            terms: []
        },
        {
            id: 'h-derivation',
            type: 'heading',
            data: { text: 'Deriving Exact Values from Special Triangles', level: 2 },
            terms: []
        },
        {
            id: 'p-equilateral',
            type: 'paragraph',
            data: { text: '<strong>30°–60°–90° triangle</strong>: Start with an equilateral triangle of side 2. Split it in half to get a right triangle with hypotenuse 2, base 1, and height √3. This gives the 30° and 60° exact values.' },
            terms: []
        },
        {
            id: 'p-isosceles',
            type: 'paragraph',
            data: { text: '<strong>45°–45°–90° triangle</strong>: A right isosceles triangle with legs of length 1 has hypotenuse √2. Each acute angle is 45°. This gives the 45° exact values.' },
            terms: []
        },
        {
            id: 'table-exact',
            type: 'comparisonTable',
            data: {
                headers: ['θ (degrees)', 'θ (radians)', 'sin θ', 'cos θ', 'tan θ'],
                rows: [
                    ['0°', '0', '0', '1', '0'],
                    ['30°', 'π/6', '1/2', '√3/2', '1/√3 = √3/3'],
                    ['45°', 'π/4', '√2/2', '√2/2', '1'],
                    ['60°', 'π/3', '√3/2', '1/2', '√3'],
                    ['90°', 'π/2', '1', '0', 'undefined'],
                    ['180°', 'π', '0', '−1', '0']
                ],
                caption: 'Exact trig values — must be known without a calculator'
            },
            terms: []
        },
        {
            id: 'h-memory',
            type: 'heading',
            data: { text: 'Memory Aid — The Sine Staircase', level: 2 },
            terms: []
        },
        {
            id: 'p-memory',
            type: 'paragraph',
            data: { text: 'sin 0° = √0/2 = 0, sin 30° = √1/2 = 1/2, sin 45° = √2/2, sin 60° = √3/2, sin 90° = √4/2 = 1. Reading from numerator: √0, √1, √2, √3, √4 — the "staircase" pattern. Cosine goes in reverse order.' },
            terms: []
        },
        {
            id: 'worked-exact',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Exact value calculation',
                text: 'Find the exact value of sin 60° × cos 30° − sin 30° × cos 60°.<br/><br/>= (√3/2)(√3/2) − (1/2)(1/2)<br/>= 3/4 − 1/4<br/>= <strong>1/2</strong><br/><em>This is sin(60° − 30°) = sin 30° — the compound angle formula at work.</em>'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• Draw the two special triangles at the top of your exam paper for quick reference.<br/>• Notice: sin 30° = cos 60° and sin 60° = cos 30° — "complementary angles".<br/>• A question asking for an "exact value" is a signal to use these values, not a decimal.'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Exact values come from the 30-60-90 and 45-45-90 triangles. Key values: sin 30°=1/2, cos 60°=1/2, sin 45°=cos 45°=√2/2, tan 60°=√3, tan 45°=1. Recall the "staircase" pattern: sin 0°,30°,45°,60°,90° = √0/2 through √4/2.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'table-exact', prompt: 'State the exact values of sin, cos, and tan for 30°, 45° and 60°.' },
            { id: 'cue-2', blockId: 'p-memory', prompt: 'Explain the "staircase" memory device for sin values.' },
            { id: 'cue-3', blockId: 'worked-exact', prompt: 'Calculate the exact value of sin 60° · cos 30° − sin 30° · cos 60°.' },
            { id: 'cue-4', blockId: 'p-equilateral', prompt: 'Describe how to derive the 30° and 60° exact values from an equilateral triangle.' }
        ],
        summaryText: '30-60-90 triangle (from equilateral): sin30=1/2, cos30=√3/2, tan30=1/√3. 45-45-90 (from isosceles): sin45=cos45=√2/2, tan45=1. sin↑, cos↓ as θ goes 0→90°.',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# note_1_3_3  ·  Non-Right-Angled Triangles
# ─────────────────────────────────────────────────────────────────────────────
NOTE_1_3_3 = r"""/**
 * Seed note: Mathematics · Unit 1 · Topic 3 · Subtopic 3
 * "Non-right-angled triangles — sine rule, cosine rule, area formula"
 */

export const note_mathematics_1_3_3 = {
    pdfPath: '/notes/mathematics/trigonometry/non-right-angled-triangles.pdf',
    blocks: [
        {
            id: 'objective',
            type: 'objective',
            data: { text: 'Apply the sine rule and cosine rule to find missing sides and angles in any triangle; use the area formula ½ab sin C; identify the ambiguous case of the sine rule.' },
            terms: []
        },
        {
            id: 'h-notation',
            type: 'heading',
            data: { text: 'Triangle Labelling Convention', level: 2 },
            terms: []
        },
        {
            id: 'p-notation',
            type: 'paragraph',
            data: { text: 'Label <strong>angles</strong> with uppercase letters A, B, C and <strong>sides</strong> with the matching lowercase: side a is opposite angle A, side b opposite B, side c opposite C. This convention is used throughout both rules.' },
            terms: []
        },
        {
            id: 'h-sine-rule',
            type: 'heading',
            data: { text: 'The Sine Rule', level: 2 },
            terms: []
        },
        {
            id: 'key-sine',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Sine Rule',
                text: 'Finding sides: <span style="font-size:1.05em"><strong>a/sin A = b/sin B = c/sin C</strong></span><br/><br/>Finding angles: <strong>sin A/a = sin B/b = sin C/c</strong><br/><br/>Use when given: (1) two angles + one side, or (2) two sides + angle opposite one of them.'
            },
            terms: []
        },
        {
            id: 'worked-sine',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Sine Rule',
                text: 'In triangle ABC: A = 40°, B = 75°, a = 8 cm. Find b.<br/><br/>C = 180° − 40° − 75° = 65°<br/>b/sin 75° = 8/sin 40°<br/>b = 8 × sin 75° / sin 40°<br/><strong>b ≈ 12.0 cm</strong>'
            },
            terms: []
        },
        {
            id: 'h-ambiguous',
            type: 'heading',
            data: { text: 'The Ambiguous Case', level: 2 },
            terms: []
        },
        {
            id: 'p-ambiguous',
            type: 'paragraph',
            data: { text: 'When given two sides and a non-included angle (SSA), there may be <strong>two possible triangles</strong>. If sin A = k and k < 1, the angle could be A or (180° − A). Always check whether both solutions give a valid triangle (all angles must be positive and sum to 180°).' },
            terms: []
        },
        {
            id: 'h-cosine-rule',
            type: 'heading',
            data: { text: 'The Cosine Rule', level: 2 },
            terms: []
        },
        {
            id: 'key-cosine',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Cosine Rule',
                text: 'Finding a side: <strong>a² = b² + c² − 2bc cos A</strong><br/><br/>Finding an angle: <strong>cos A = (b² + c² − a²) / (2bc)</strong><br/><br/>Use when given: (1) two sides + included angle (SAS), or (2) all three sides (SSS).'
            },
            terms: []
        },
        {
            id: 'worked-cosine',
            type: 'callout',
            data: {
                style: 'worked',
                title: 'Worked Example — Cosine Rule',
                text: 'Find side a when b = 5, c = 8, A = 60°.<br/><br/>a² = 5² + 8² − 2(5)(8) cos 60°<br/>a² = 25 + 64 − 80 × 0.5<br/>a² = 89 − 40 = 49<br/><strong>a = 7 cm</strong>'
            },
            terms: []
        },
        {
            id: 'h-area',
            type: 'heading',
            data: { text: 'Area of a Triangle', level: 2 },
            terms: []
        },
        {
            id: 'key-area',
            type: 'callout',
            data: {
                style: 'key',
                title: 'Area Formula',
                text: 'Area = ½ab sin C<br/><br/>Use when two sides (a, b) and the included angle C are known.'
            },
            terms: []
        },
        {
            id: 'table-which',
            type: 'comparisonTable',
            data: {
                headers: ['Given information', 'Rule to use'],
                rows: [
                    ['Two angles + any side (AAS or ASA)', 'Sine rule — find missing sides'],
                    ['Two sides + angle opposite one of them (SSA)', 'Sine rule — check for ambiguous case'],
                    ['Two sides + included angle (SAS)', 'Cosine rule — find third side; then area = ½ab sinC'],
                    ['All three sides (SSS)', 'Cosine rule — find any angle; then sine rule']
                ],
                caption: 'Decision table — choosing the correct rule'
            },
            terms: []
        },
        {
            id: 'callout-tip',
            type: 'callout',
            data: {
                style: 'tip',
                title: 'Exam Tips',
                text: '• These formulae are NOT in the WMA11 formula booklet — they must be memorised.<br/>• Always check: angles in a triangle sum to 180°. Use this to find the third angle when two are known.<br/>• For the cosine rule, a negative value of cos A is fine — it means A is obtuse (between 90° and 180°).'
            },
            terms: []
        },
        {
            id: 'summary',
            type: 'summary',
            data: { text: 'Sine rule: a/sin A = b/sin B (for AAS/SSA). Cosine rule: a²=b²+c²−2bc cosA (for SAS/SSS). Area = ½ab sin C. Check for the ambiguous case in SSA situations — there may be two valid triangles.' },
            terms: []
        }
    ],
    recall: {
        enabled: true,
        cues: [
            { id: 'cue-1', blockId: 'key-sine', prompt: 'State the sine rule in both the side-finding and angle-finding forms.' },
            { id: 'cue-2', blockId: 'key-cosine', prompt: 'State the cosine rule for finding a side, and rearrange it to find an angle.' },
            { id: 'cue-3', blockId: 'worked-cosine', prompt: 'Find side a when b=5, c=8, A=60° using the cosine rule.' },
            { id: 'cue-4', blockId: 'p-ambiguous', prompt: 'Explain the ambiguous case of the sine rule. When does it arise?' },
            { id: 'cue-5', blockId: 'table-which', prompt: 'What information do you need to use the cosine rule instead of the sine rule?' }
        ],
        summaryText: 'Sine rule for AAS/SSA; Cosine rule for SAS/SSS. Area=½ab sinC. Ambiguous case: SSA can give two solutions. Cosine rule cos A = (b²+c²−a²)/(2bc).',
        ready: true
    },
    evidence: []
};
"""

# ─────────────────────────────────────────────────────────────────────────────
# Write
# ─────────────────────────────────────────────────────────────────────────────
files = {
    "note_1_3_0.js": NOTE_1_3_0,
    "note_1_3_1.js": NOTE_1_3_1,
    "note_1_3_2.js": NOTE_1_3_2,
    "note_1_3_3.js": NOTE_1_3_3,
}

for fname, content in files.items():
    path = os.path.join(BASE, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content.lstrip("\n"))
    print(f"✓  Wrote {path}")

print("\nDone — 4 files rewritten.")
