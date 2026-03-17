export const note_olevel_maths_extended_5_1_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/adding-and-subtracting-areas.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Find the area of compound shapes by adding or subtracting the areas of simpler shapes.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Adding and Subtracting Areas', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Many real-world shapes are <strong>compound shapes</strong> — combinations of rectangles, triangles, semicircles and other simple shapes. To find their area, <strong>split</strong> the shape into parts you know how to calculate, then add or subtract.' }
    },
    {
      id: 'h-adding',
      type: 'heading',
      data: { text: 'Adding Areas', level: 2 }
    },
    {
      id: 'p-adding',
      type: 'paragraph',
      data: { text: 'When a compound shape can be split into simpler shapes that <strong>don\'t overlap</strong>, find the area of each part and add them together.' }
    },
    {
      id: 'list-add-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Identify how to split the shape into rectangles, triangles, etc.' },
          { text: 'Calculate missing dimensions using subtraction.' },
          { text: 'Find the area of each part using the correct formula.' },
          { text: 'Add all the areas together.' }
        ]
      }
    },
    {
      id: 'callout-worked-add',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Adding Areas',
        text: 'An L-shaped room has overall dimensions 10 m × 8 m, with a 4 m × 3 m rectangle removed from one corner. Find the area.<br><br><strong>Method — Split into two rectangles:</strong><br>Rectangle 1: 10 × 5 = 50 m²<br>Rectangle 2: 6 × 3 = 18 m²<br><br>(missing: 8 − 3 = 5 m, 10 − 4 = 6 m)<br>Total area = 50 + 18 = <strong>68 m²</strong>'
      }
    },
    {
      id: 'h-subtracting',
      type: 'heading',
      data: { text: 'Subtracting Areas', level: 2 }
    },
    {
      id: 'p-subtracting',
      type: 'paragraph',
      data: { text: 'Sometimes it is easier to calculate the area of a <strong>larger enclosing shape</strong> and then <strong>subtract</strong> the unwanted region.' }
    },
    {
      id: 'callout-worked-sub',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Subtracting Areas',
        text: 'A square card of side 20 cm has a circle of diameter 14 cm cut from the centre. Find the shaded area remaining.<br><br><strong>Solution:</strong><br>Area of square = 20² = 400 cm²<br>Radius = 14 ÷ 2 = 7 cm<br>Area of circle = π × 7² = 49π ≈ 153.94 cm²<br>Shaded area = 400 − 153.94 = <strong>246 cm²</strong> (3 s.f.)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always show the areas of each sub-shape separately before combining. This earns method marks even if your final answer is wrong. Sketch the split on your diagram.'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point',
        text: 'Adding areas: split into non-overlapping parts and sum. Subtracting areas: find the full shape minus the removed part. Both methods should give the same answer — use whichever is simpler.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Compound shapes are found by splitting into simpler shapes and adding areas, or by finding a larger enclosing shape and subtracting the removed part. Always calculate missing dimensions first.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is a compound shape?', answer: 'A shape made from two or more simpler shapes joined together.' },
      { id: 'cue-2', blockId: 'p-adding', prompt: 'How do you find the area of a compound shape by adding?', answer: 'Split into non-overlapping simple shapes, find each area, then add them.' },
      { id: 'cue-3', blockId: 'p-subtracting', prompt: 'When would you subtract areas instead of adding?', answer: 'When it is easier to calculate a larger enclosing shape and remove the unwanted region.' },
      { id: 'cue-4', blockId: 'list-add-steps', prompt: 'What is the first step when finding the area of a compound shape?', answer: 'Identify how to split the shape into rectangles, triangles, or other simple shapes.' }
    ],
    summaryText: 'Find compound shape areas by adding simpler sub-shape areas, or by subtracting removed regions from a larger shape.',
    ready: true
  },
  evidence: []
};
