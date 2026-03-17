export const note_olevel_maths_extended_5_4_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/congruence.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand and apply the four conditions for congruent triangles: SSS, SAS, ASA and RHS.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Congruence', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Two shapes are <strong>congruent</strong> if they are exactly the same shape and size — one can be placed on top of the other with a perfect fit (allowing rotation, reflection and translation).' }
    },
    {
      id: 'h-triangles',
      type: 'heading',
      data: { text: 'Congruent Triangles', level: 2 }
    },
    {
      id: 'p-triangles',
      type: 'paragraph',
      data: { text: 'Two triangles are congruent if they satisfy one of four conditions:' }
    },
    {
      id: 'table-conditions',
      type: 'comparisonTable',
      data: {
        caption: 'Conditions for congruent triangles',
        headers: ['Condition', 'Meaning', 'What to Check'],
        rows: [
          ['SSS', 'Side-Side-Side', 'All three sides are equal'],
          ['SAS', 'Side-Angle-Side', 'Two sides and the included angle are equal'],
          ['ASA (or AAS)', 'Angle-Side-Angle', 'Two angles and a corresponding side are equal'],
          ['RHS', 'Right angle-Hypotenuse-Side', 'Right angle, hypotenuse and one other side are equal']
        ]
      }
    },
    {
      id: 'callout-key-included',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Included Angle',
        text: 'For SAS, the angle must be <strong>between</strong> the two known sides (the included angle). Two sides and a non-included angle (SSA) is <strong>not</strong> a valid condition for congruence.'
      }
    },
    {
      id: 'callout-worked-proof',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Proving Congruence',
        text: 'In triangle ABC and triangle PQR: AB = PQ = 5 cm, BC = QR = 7 cm, angle B = angle Q = 40°. Prove the triangles are congruent.<br><br><strong>Solution:</strong><br>AB = PQ = 5 cm (S)<br>∠B = ∠Q = 40° (A — included angle)<br>BC = QR = 7 cm (S)<br>∴ △ABC ≡ △PQR (SAS)'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'AAA (three equal angles) proves shapes are <strong>similar</strong>, not congruent. The shapes could be different sizes with the same angles.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When proving congruence, write each pair of equal elements clearly with reasons, then state the condition (e.g. "by SAS"). Match vertices in the correct order.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Congruent shapes are identical in shape and size. Four conditions prove triangles congruent: SSS, SAS (angle must be included), ASA/AAS, and RHS. AAA only proves similarity, not congruence.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What does congruent mean?', answer: 'Exactly the same shape and size.' },
      { id: 'cue-2', blockId: 'table-conditions', prompt: 'Name the four conditions for congruent triangles.', answer: 'SSS, SAS, ASA (or AAS), and RHS.' },
      { id: 'cue-3', blockId: 'callout-key-included', prompt: 'Why is SSA not a valid congruence condition?', answer: 'The angle must be included (between the two sides) for SAS. A non-included angle can give two possible triangles.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'Why does AAA not prove congruence?', answer: 'Three equal angles prove similarity but the shapes could be different sizes.' }
    ],
    summaryText: 'Congruent shapes are identical in shape and size. Prove triangles congruent using SSS, SAS, ASA or RHS.',
    ready: true
  },
  evidence: []
};
