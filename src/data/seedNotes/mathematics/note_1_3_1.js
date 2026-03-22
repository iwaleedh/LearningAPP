/**
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
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Ensure your calculator is in the correct mode (degrees or radians) before starting any trigonometric calculations. Many marks are lost to this simple oversight at the start of an exam."
            },
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
