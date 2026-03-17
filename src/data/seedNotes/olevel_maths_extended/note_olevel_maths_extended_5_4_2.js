export const note_olevel_maths_extended_5_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/similar-lengths.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the linear scale factor to find missing lengths in similar shapes and solve problems involving maps and models.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Similar Lengths', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When two shapes are similar, all corresponding lengths (sides, heights, diagonals, perimeters) are connected by the same <strong>linear scale factor</strong>, k.' }
    },
    {
      id: 'eq-lengths',
      type: 'equation',
      data: {
        html: 'new length = original length × k',
        caption: 'Scaling lengths'
      }
    },
    {
      id: 'h-finding-k',
      type: 'heading',
      data: { text: 'Finding the Scale Factor', level: 2 }
    },
    {
      id: 'p-finding-k',
      type: 'paragraph',
      data: { text: 'Identify a pair of <strong>corresponding sides</strong> where both lengths are known. Divide the larger length by the smaller (or new by original depending on direction).' }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'Two similar pentagons have corresponding sides 4 cm and 10 cm. Another side of the smaller pentagon is 6 cm. Find the corresponding side of the larger pentagon.<br><br><strong>Solution:</strong><br>k = 10 ÷ 4 = 2.5<br>Missing side = 6 × 2.5 = <strong>15 cm</strong>'
      }
    },
    {
      id: 'h-perimeters',
      type: 'heading',
      data: { text: 'Perimeters of Similar Shapes', level: 2 }
    },
    {
      id: 'p-perimeters',
      type: 'paragraph',
      data: { text: 'Perimeters of similar shapes are related by the <strong>same</strong> linear scale factor k. If all sides are scaled by k, then the perimeter is also scaled by k.' }
    },
    {
      id: 'callout-worked-perim',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Perimeters',
        text: 'Two similar rectangles have scale factor 3. The smaller rectangle has perimeter 20 cm. Find the perimeter of the larger.<br><br><strong>Solution:</strong><br>Perimeter of larger = 20 × 3 = <strong>60 cm</strong>'
      }
    },
    {
      id: 'h-maps',
      type: 'heading',
      data: { text: 'Maps and Models', level: 2 }
    },
    {
      id: 'p-maps',
      type: 'paragraph',
      data: { text: 'A map scale like 1:25 000 means 1 cm on the map represents 25 000 cm (= 250 m = 0.25 km) in real life. The scale factor from map to reality is 25 000.' }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Map and scale questions may mix units. Always convert both measurements to the <strong>same unit</strong> before dividing to find the scale factor.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'In similar shapes, all lengths (sides, heights, perimeters) scale by the same factor k. Use k = new ÷ original to find it, then multiply other lengths by k. Map scales work the same way.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-lengths', prompt: 'How do you find a missing length in similar shapes?', answer: 'Multiply the corresponding original length by the scale factor k.' },
      { id: 'cue-2', blockId: 'p-perimeters', prompt: 'How are perimeters of similar shapes related?', answer: 'They are related by the same linear scale factor k.' },
      { id: 'cue-3', blockId: 'p-maps', prompt: 'What does a map scale of 1:25 000 mean?', answer: '1 cm on the map represents 25 000 cm (250 m) in real life.' },
      { id: 'cue-4', blockId: 'p-finding-k', prompt: 'How do you find the scale factor between similar shapes?', answer: 'Divide a known length on the new shape by the corresponding length on the original.' }
    ],
    summaryText: 'Similar shapes have all lengths related by scale factor k. Perimeters also scale by k. Map scales express the ratio of map length to real length.',
    ready: true
  },
  evidence: []
};
