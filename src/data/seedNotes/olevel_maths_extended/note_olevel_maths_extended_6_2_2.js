export const note_olevel_maths_extended_6_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/area-of-a-triangle.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the area of any triangle using the formula A = ½ab sin C.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Area of a Triangle Using Trigonometry', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When you don\'t know the perpendicular height but you do know <strong>two sides and the included angle</strong>, you can use the sine area formula.' }
    },
    {
      id: 'eq-area',
      type: 'equation',
      data: {
        html: 'Area = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> ab sin C',
        caption: 'Area formula using two sides and the included angle'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Included Angle',
        text: 'The angle C must be the angle <strong>between</strong> the two known sides a and b. Any pair of sides can be used as long as you use the angle between them: ½ab sin C = ½bc sin A = ½ac sin B.'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'In triangle PQR: p = 12 cm, q = 9 cm, angle R = 63°. Find the area.<br><br><strong>Solution:</strong><br>Area = ½ × 12 × 9 × sin 63°<br>Area = 54 × 0.8910<br>Area = <strong>48.1 cm²</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-reverse',
      type: 'heading',
      data: { text: 'Finding a Missing Value from the Area', level: 2 }
    },
    {
      id: 'callout-worked-reverse',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding an Angle',
        text: 'A triangle has sides 10 cm and 14 cm with area 50 cm². Find the included angle.<br><br><strong>Solution:</strong><br>50 = ½ × 10 × 14 × sin θ<br>50 = 70 sin θ<br>sin θ = 50/70 = 5/7<br>θ = sin⁻¹(5/7) = <strong>45.6°</strong> (1 d.p.)'
      }
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Comparing with ½bh', level: 2 }
    },
    {
      id: 'table-compare',
      type: 'comparisonTable',
      data: {
        caption: 'When to use each area formula',
        headers: ['Formula', 'When to Use'],
        rows: [
          ['A = ½ × b × h', 'You know the base and perpendicular height'],
          ['A = ½ab sin C', 'You know two sides and the included angle (no height given)']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'This formula is given on the IGCSE formula sheet. Make sure you identify the included angle correctly — it must be between the two known sides.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Area of a triangle = ½ab sin C where C is the angle between sides a and b. Use this when the perpendicular height is not known. Rearrange to find a missing side or angle from a given area.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-area', prompt: 'State the formula for the area of a triangle using trigonometry.', answer: 'Area = ½ab sin C.' },
      { id: 'cue-2', blockId: 'callout-key', prompt: 'What must angle C be in the formula A = ½ab sin C?', answer: 'The angle between (included by) the two known sides a and b.' },
      { id: 'cue-3', blockId: 'table-compare', prompt: 'When do you use A = ½ab sin C instead of A = ½bh?', answer: 'When you know two sides and the included angle but not the perpendicular height.' },
      { id: 'cue-4', blockId: 'callout-worked-reverse', prompt: 'How do you find the included angle if the area and two sides are given?', answer: 'Rearrange: sin θ = 2A/(ab), then θ = sin⁻¹(2A/(ab)).' }
    ],
    summaryText: 'Area = ½ab sinC uses two sides and their included angle. Works for any triangle without needing the height.',
    ready: true
  },
  evidence: []
};
