export const note_olevel_maths_core_1_10_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Number/direct-and-inverse-proportion.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Recognise and solve problems involving direct proportion (y ∝ x) and inverse proportion (y ∝ 1/x).' }
    },
    {
      id: 'h-direct',
      type: 'heading',
      data: { text: 'Direct Proportion', level: 2 }
    },
    {
      id: 'p-direct',
      type: 'paragraph',
      data: { text: 'When two quantities are in <strong>direct proportion</strong>, as one increases the other increases by the same factor. They have a constant ratio: y/x = k, so <strong>y = kx</strong>.' }
    },
    {
      id: 'callout-worked-direct',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Direct Proportion Problem',
        text: '5 kg of apples cost $8.50. How much for 8 kg?<br><br>Method 1 (unitary): 1 kg = $8.50 ÷ 5 = $1.70<br>8 kg = 8 × $1.70 = <strong>$13.60</strong><br><br>Method 2 (ratio): 5 : 8 = 8.50 : ?<br>? = 8.50 × 8/5 = <strong>$13.60</strong>'
      }
    },
    {
      id: 'callout-key-direct',
      type: 'callout',
      data: { style: 'key', title: 'Direct Proportion: y = kx', text: 'y ∝ x means y = kx. The graph is a straight line through the origin. If x doubles, y doubles. k = y/x = constant.' }
    },
    {
      id: 'h-inverse',
      type: 'heading',
      data: { text: 'Inverse Proportion', level: 2 }
    },
    {
      id: 'p-inverse',
      type: 'paragraph',
      data: { text: 'When two quantities are in <strong>inverse proportion</strong>, as one increases the other decreases by the same factor. Their product is constant: xy = k, so <strong>y = k/x</strong>.' }
    },
    {
      id: 'callout-worked-inverse',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Inverse Proportion Problem',
        text: '4 workers build a wall in 15 days. How long for 6 workers?<br><br>More workers → fewer days (inverse).<br>k = 4 × 15 = 60 (constant product)<br>6 workers: days = 60 ÷ 6 = <strong>10 days</strong>'
      }
    },
    {
      id: 'callout-key-inverse',
      type: 'callout',
      data: { style: 'key', title: 'Inverse Proportion: y = k/x', text: 'y ∝ 1/x means y = k/x. The product xy = k is constant. If x doubles, y halves. Graph is a hyperbola.' }
    },
    {
      id: 'tbl-comparison',
      type: 'comparisonTable',
      data: {
        caption: 'Direct vs Inverse Proportion',
        headers: ['Feature', 'Direct (y = kx)', 'Inverse (y = k/x)'],
        rows: [
          ['Relationship', 'y/x = constant', 'xy = constant'],
          ['Graph', 'Straight line through origin', 'Hyperbola'],
          ['x doubles', 'y doubles', 'y halves'],
          ['Real example', 'Cost ∝ quantity', 'Speed ∝ 1/time']
        ]
      }
    },
    {
      id: 'callout-tip-prop',
      type: 'callout',
      data: { style: 'tip', title: 'Identifying Direct or Inverse', text: 'Ask: as one value goes up, does the other go UP (direct) or DOWN (inverse)? More workers → less time = inverse. More goods → more cost = direct.' }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Direct proportion: y = kx (both increase together; y/x constant). Inverse proportion: y = k/x (one increases, other decreases; xy constant). Unitary method works for both.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'h-direct', prompt: 'Define direct proportion. What equation relates y and x?' },
      { id: 'cue-2', blockId: 'callout-worked-direct', prompt: '5 kg of apples cost $8.50. How much for 8 kg? Show using the unitary method.' },
      { id: 'cue-3', blockId: 'h-inverse', prompt: 'Define inverse proportion. What equation relates y and x?' },
      { id: 'cue-4', blockId: 'callout-worked-inverse', prompt: '4 workers take 15 days. How long do 6 workers take? Show your working.' },
      { id: 'cue-5', blockId: 'callout-tip-prop', prompt: 'How do you decide whether a problem involves direct or inverse proportion?' }
    ],
    summaryText: 'Direct: y=kx, y/x=constant; inverse: y=k/x, xy=constant. Unitary method (find one unit\'s value) works for direct. For inverse: find k=xy then divide.',
    ready: true
  },
  evidence: []
};
