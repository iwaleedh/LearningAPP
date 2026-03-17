export const note_olevel_maths_extended_5_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/perimeter.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the perimeter of common 2D shapes including rectangles, triangles, parallelograms and compound shapes.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Perimeter', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>perimeter</strong> is the total distance around the outside of a 2D shape. To find the perimeter, add up the lengths of all the sides.' }
    },
    {
      id: 'h-rect',
      type: 'heading',
      data: { text: 'Perimeter of a Rectangle', level: 2 }
    },
    {
      id: 'p-rect',
      type: 'paragraph',
      data: { text: 'A rectangle has two pairs of equal sides. If the length is <em>l</em> and the width is <em>w</em>:' }
    },
    {
      id: 'eq-rect',
      type: 'equation',
      data: {
        html: 'P = 2l + 2w = 2(l + w)',
        caption: 'Perimeter of a rectangle'
      }
    },
    {
      id: 'callout-worked-rect',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A rectangle has length 12 cm and width 5 cm. Find its perimeter.<br><br><strong>Solution:</strong><br>P = 2(l + w)<br>P = 2(12 + 5)<br>P = 2 × 17<br>P = <strong>34 cm</strong>'
      }
    },
    {
      id: 'h-triangle',
      type: 'heading',
      data: { text: 'Perimeter of a Triangle', level: 2 }
    },
    {
      id: 'p-triangle',
      type: 'paragraph',
      data: { text: 'For any triangle with sides <em>a</em>, <em>b</em> and <em>c</em>:' }
    },
    {
      id: 'eq-triangle',
      type: 'equation',
      data: {
        html: 'P = a + b + c',
        caption: 'Perimeter of a triangle'
      }
    },
    {
      id: 'h-compound',
      type: 'heading',
      data: { text: 'Compound Shapes', level: 2 }
    },
    {
      id: 'p-compound',
      type: 'paragraph',
      data: { text: 'A <strong>compound shape</strong> is made from two or more simple shapes joined together. To find the perimeter, identify and add all the <strong>outer</strong> edges — do <em>not</em> include any internal edges where shapes meet.' }
    },
    {
      id: 'callout-worked-compound',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Compound Shape',
        text: 'An L-shaped room has outer dimensions 10 m by 8 m, with a 4 m by 3 m rectangle removed from one corner. Find the perimeter.<br><br><strong>Solution:</strong><br>Trace around the outside:<br>10 + 5 + 4 + 3 + 6 + 8 = <strong>36 m</strong><br><br>(Missing sides: 8 − 3 = 5 m and 10 − 4 = 6 m)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For compound shapes, label <strong>every</strong> side length before adding. Work out missing sides by subtracting from the full dimension. Always check your answer includes only outer edges.'
      }
    },
    {
      id: 'callout-key-units',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Units',
        text: 'Perimeter is a <strong>length</strong>, so the unit is cm, m, km etc. — never cm² or m². Make sure all measurements are in the <strong>same unit</strong> before adding.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Perimeter is the total distance around a shape. For rectangles use P = 2(l + w). For compound shapes, find all outer edges and add them, working out missing lengths by subtraction.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is the perimeter of a shape?', answer: 'The total distance around the outside of a 2D shape.' },
      { id: 'cue-2', blockId: 'eq-rect', prompt: 'What is the formula for the perimeter of a rectangle?', answer: 'P = 2(l + w) or P = 2l + 2w.' },
      { id: 'cue-3', blockId: 'p-compound', prompt: 'How do you find the perimeter of a compound shape?', answer: 'Add all outer edges; do not include internal edges where shapes meet.' },
      { id: 'cue-4', blockId: 'callout-key-units', prompt: 'What unit is perimeter measured in?', answer: 'A length unit (cm, m, km) — never squared units.' }
    ],
    summaryText: 'Perimeter is the total distance around the outside of a 2D shape, found by adding all outer side lengths.',
    ready: true
  },
  evidence: []
};
