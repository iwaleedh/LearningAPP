export const note_olevel_maths_extended_5_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/similar-areas-and-volumes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the area scale factor (k²) and volume scale factor (k³) to solve problems involving similar shapes.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Similar Areas and Volumes', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When shapes are similar with linear scale factor <em>k</em>, their areas and volumes do <strong>not</strong> scale by <em>k</em>. Areas scale by <em>k²</em> and volumes scale by <em>k³</em>.' }
    },
    {
      id: 'h-area-sf',
      type: 'heading',
      data: { text: 'Area Scale Factor', level: 2 }
    },
    {
      id: 'eq-area',
      type: 'equation',
      data: {
        html: 'Area scale factor = k²',
        caption: 'Areas of similar shapes scale by k squared'
      }
    },
    {
      id: 'p-area-explain',
      type: 'paragraph',
      data: { text: 'If the linear scale factor is 3, then every area is scaled by 3² = <strong>9</strong>. This makes sense because area is two-dimensional — both length and width are scaled by k.' }
    },
    {
      id: 'h-vol-sf',
      type: 'heading',
      data: { text: 'Volume Scale Factor', level: 2 }
    },
    {
      id: 'eq-vol',
      type: 'equation',
      data: {
        html: 'Volume scale factor = k³',
        caption: 'Volumes of similar shapes scale by k cubed'
      }
    },
    {
      id: 'p-vol-explain',
      type: 'paragraph',
      data: { text: 'If the linear scale factor is 3, then every volume is scaled by 3³ = <strong>27</strong>. Three dimensions are each multiplied by k.' }
    },
    {
      id: 'table-scale',
      type: 'comparisonTable',
      data: {
        caption: 'Similarity scale factor summary',
        headers: ['Quantity', 'Scale Factor', 'Example (k = 2)'],
        rows: [
          ['Length', 'k', '× 2'],
          ['Area / Surface Area', 'k²', '× 4'],
          ['Volume / Mass / Capacity', 'k³', '× 8']
        ]
      }
    },
    {
      id: 'callout-worked-area',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Areas',
        text: 'Two similar triangles have corresponding sides 5 cm and 15 cm. The smaller triangle has area 30 cm². Find the area of the larger triangle.<br><br><strong>Solution:</strong><br>k = 15 ÷ 5 = 3<br>Area scale factor = k² = 9<br>Area of larger = 30 × 9 = <strong>270 cm²</strong>'
      }
    },
    {
      id: 'callout-worked-vol',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Volumes',
        text: 'Two similar cylinders have heights 4 cm and 12 cm. The smaller has volume 80 cm³. Find the volume of the larger.<br><br><strong>Solution:</strong><br>k = 12 ÷ 4 = 3<br>Volume scale factor = k³ = 27<br>Volume of larger = 80 × 27 = <strong>2160 cm³</strong>'
      }
    },
    {
      id: 'callout-worked-reverse',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding k from Areas',
        text: 'Two similar shapes have areas 25 cm² and 100 cm². Find the linear scale factor.<br><br><strong>Solution:</strong><br>k² = 100 ÷ 25 = 4<br>k = √4 = <strong>2</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Reversing',
        text: 'To find k from area ratio: k = √(area ratio). To find k from volume ratio: k = ∛(volume ratio). This is essential for exam questions that give areas or volumes and ask for a length.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'A very common error is using k instead of k² or k³. Read the question carefully to determine whether you are working with lengths, areas or volumes.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'For similar shapes with linear scale factor k: lengths scale by k, areas by k², volumes by k³. To reverse: k = √(area ratio) or k = ∛(volume ratio).' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-area', prompt: 'If the linear scale factor is k, what is the area scale factor?', answer: 'k² (k squared).' },
      { id: 'cue-2', blockId: 'eq-vol', prompt: 'If the linear scale factor is k, what is the volume scale factor?', answer: 'k³ (k cubed).' },
      { id: 'cue-3', blockId: 'callout-key', prompt: 'How do you find the linear scale factor from two similar areas?', answer: 'k = √(area ratio) — square root of the ratio of the areas.' },
      { id: 'cue-4', blockId: 'table-scale', prompt: 'If k = 2, by what factor do areas and volumes scale?', answer: 'Areas scale by 4 (2²), volumes scale by 8 (2³).' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What common mistake do students make with similar shapes?', answer: 'Using k instead of k² for areas or k³ for volumes.' }
    ],
    summaryText: 'Lengths scale by k, areas by k², volumes by k³. Reverse with square/cube roots of the ratio.',
    ready: true
  },
  evidence: []
};
