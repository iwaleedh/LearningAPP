/**
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
