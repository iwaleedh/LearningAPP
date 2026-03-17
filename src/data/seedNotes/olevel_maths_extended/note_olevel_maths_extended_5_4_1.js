export const note_olevel_maths_extended_5_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/similarity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Understand similarity, identify similar shapes, and use the scale factor to find missing lengths.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Similarity', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Two shapes are <strong>similar</strong> if they have the same shape but different sizes. All corresponding <strong>angles are equal</strong> and corresponding <strong>sides are in the same ratio</strong> (the scale factor).' }
    },
    {
      id: 'h-sf',
      type: 'heading',
      data: { text: 'Scale Factor', level: 2 }
    },
    {
      id: 'p-sf',
      type: 'paragraph',
      data: { text: 'The <strong>scale factor</strong> (k) is the ratio of corresponding sides between two similar shapes:' }
    },
    {
      id: 'eq-sf',
      type: 'equation',
      data: {
        html: 'k = <span class="nb-frac"><span class="nb-num">new length</span><span class="nb-den">original length</span></span>',
        caption: 'Scale factor (linear)'
      }
    },
    {
      id: 'callout-key-ratio',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Consistent Ratio',
        text: 'In similar shapes, <strong>every</strong> pair of corresponding sides has the same ratio. If k = 2, then every side of the larger shape is double the corresponding side of the smaller shape.'
      }
    },
    {
      id: 'h-similar-tri',
      type: 'heading',
      data: { text: 'Similar Triangles', level: 2 }
    },
    {
      id: 'p-similar-tri',
      type: 'paragraph',
      data: { text: 'Two triangles are similar if: (1) all three pairs of angles are equal (AA), (2) all three pairs of sides are in the same ratio (SSS similarity), or (3) two pairs of sides are in the same ratio and the included angle is equal (SAS similarity).' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding a Missing Side',
        text: 'Triangles ABC and PQR are similar. AB = 6 cm, PQ = 9 cm, BC = 8 cm. Find QR.<br><br><strong>Solution:</strong><br>Scale factor k = PQ ÷ AB = 9 ÷ 6 = 1.5<br>QR = BC × k = 8 × 1.5 = <strong>12 cm</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always identify which shape is the "original" and which is the "enlargement". The scale factor from small to large is > 1; from large to small is < 1. Label corresponding vertices in the same order.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Similar shapes have the same shape but different sizes. Corresponding angles are equal and sides are in the same ratio. The scale factor k = new length ÷ original length relates all corresponding sides.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What does it mean for two shapes to be similar?', answer: 'Same shape but different sizes — equal angles and sides in the same ratio.' },
      { id: 'cue-2', blockId: 'eq-sf', prompt: 'How do you calculate the scale factor?', answer: 'k = new length ÷ original length (ratio of corresponding sides).' },
      { id: 'cue-3', blockId: 'p-similar-tri', prompt: 'What conditions prove two triangles are similar?', answer: 'AA (two equal angles), SSS (sides in same ratio), or SAS (two sides in ratio with included angle equal).' },
      { id: 'cue-4', blockId: 'callout-key-ratio', prompt: 'If the scale factor is 3, what happens to all side lengths?', answer: 'Every side of the larger shape is 3 times the corresponding side of the smaller shape.' }
    ],
    summaryText: 'Similar shapes have equal angles and sides in a constant ratio (scale factor). Triangles can be proved similar using AA, SSS or SAS similarity.',
    ready: true
  },
  evidence: []
};
