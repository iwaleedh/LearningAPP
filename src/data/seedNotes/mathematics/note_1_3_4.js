/**
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
        },
        {
            id: 'callout-tip-1',
            type: 'callout',
            data: {
                style: 'warning',
                title: "Examiner Tip",
                text: "Only use the simplified formulas s = r * theta and Area = 0.5 * r^2 * theta when the angle is strictly in radians. If the angle is given in degrees, you must convert it first to avoid completely incorrect answers."
            },
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
