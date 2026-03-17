export const note_olevel_maths_extended_6_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/sohcahtoa.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the trigonometric ratios sine, cosine and tangent to find missing sides and angles in right-angled triangles.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'SOHCAHTOA', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>SOHCAHTOA</strong> is a mnemonic for the three trigonometric ratios that relate the sides and angles in a right-angled triangle. The three ratios are defined relative to a chosen angle θ (not the right angle).' }
    },
    {
      id: 'h-labelling',
      type: 'heading',
      data: { text: 'Labelling Sides', level: 2 }
    },
    {
      id: 'list-sides',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Hypotenuse (H)</strong> — the longest side, opposite the right angle' },
          { text: '<strong>Opposite (O)</strong> — the side opposite the chosen angle θ' },
          { text: '<strong>Adjacent (A)</strong> — the side next to the chosen angle θ (not the hypotenuse)' }
        ]
      }
    },
    {
      id: 'h-ratios',
      type: 'heading',
      data: { text: 'The Three Ratios', level: 2 }
    },
    {
      id: 'table-ratios',
      type: 'comparisonTable',
      data: {
        caption: 'SOHCAHTOA',
        headers: ['Ratio', 'Formula', 'Mnemonic'],
        rows: [
          ['sin θ', 'O / H', 'SOH'],
          ['cos θ', 'A / H', 'CAH'],
          ['tan θ', 'O / A', 'TOA']
        ]
      }
    },
    {
      id: 'h-finding-side',
      type: 'heading',
      data: { text: 'Finding a Missing Side', level: 2 }
    },
    {
      id: 'list-steps-side',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Label the sides O, A, H relative to the given angle' },
          { text: 'Identify which two sides are involved (one known, one unknown)' },
          { text: 'Choose the correct ratio (sin, cos or tan)' },
          { text: 'Substitute and solve' }
        ]
      }
    },
    {
      id: 'callout-worked-side',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding a Side',
        text: 'In a right-angled triangle, angle θ = 35° and the hypotenuse is 12 cm. Find the opposite side.<br><br><strong>Solution:</strong><br>Need O, have H &rarr; use sin<br>sin 35° = O / 12<br>O = 12 × sin 35°<br>O = 12 × 0.5736...<br>O = <strong>6.88 cm</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-finding-angle',
      type: 'heading',
      data: { text: 'Finding a Missing Angle', level: 2 }
    },
    {
      id: 'p-inverse',
      type: 'paragraph',
      data: { text: 'When you know two sides and need the angle, use the <strong>inverse</strong> function: sin⁻¹, cos⁻¹ or tan⁻¹.' }
    },
    {
      id: 'callout-worked-angle',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding an Angle',
        text: 'A right-angled triangle has opposite = 7 cm and adjacent = 10 cm. Find angle θ.<br><br><strong>Solution:</strong><br>Have O and A &rarr; use tan<br>tan θ = 7 / 10 = 0.7<br>θ = tan⁻¹(0.7)<br>θ = <strong>35.0°</strong> (1 d.p.)'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Choosing the Right Ratio',
        text: 'The ratio you need depends on which two sides are involved:<br>• O and H &rarr; <strong>sin</strong><br>• A and H &rarr; <strong>cos</strong><br>• O and A &rarr; <strong>tan</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Make sure your calculator is in <strong>DEGREE</strong> mode, not radians. If your answer looks wrong (e.g. sin 30° ≠ 0.5), check the mode.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'SOHCAHTOA: sin = O/H, cos = A/H, tan = O/A. Label sides relative to the angle, choose the correct ratio, and use inverse functions to find angles. Ensure calculator is in degree mode.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'table-ratios', prompt: 'Define sin θ, cos θ and tan θ.', answer: 'sin θ = O/H, cos θ = A/H, tan θ = O/A.' },
      { id: 'cue-2', blockId: 'list-sides', prompt: 'Which side is the "opposite"?', answer: 'The side opposite the chosen angle θ.' },
      { id: 'cue-3', blockId: 'p-inverse', prompt: 'How do you find a missing angle when two sides are known?', answer: 'Use the inverse trig function (sin⁻¹, cos⁻¹ or tan⁻¹).' },
      { id: 'cue-4', blockId: 'callout-key', prompt: 'Which ratio uses opposite and adjacent?', answer: 'tan θ = O/A.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What must you check on your calculator before using trig?', answer: 'That it is in degree mode, not radians.' }
    ],
    summaryText: 'SOHCAHTOA links angles and sides in right-angled triangles: sin=O/H, cos=A/H, tan=O/A.',
    ready: true
  },
  evidence: []
};
