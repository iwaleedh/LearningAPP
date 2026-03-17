export const note_olevel_maths_extended_4_4_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/rotational-symmetry.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand rotational symmetry and determine the order of rotational symmetry for 2D shapes.'
      }
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What Is Rotational Symmetry?', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: {
        text: 'A shape has <strong>rotational symmetry</strong> if it looks exactly the same after being rotated about its centre through an angle less than 360°. The <strong>order of rotational symmetry</strong> is the number of times the shape maps onto itself during a full 360° turn.'
      }
    },
    {
      id: 'callout-key-order',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Order of Rotational Symmetry',
        text: 'Every shape has rotational symmetry of at least order 1 (a full 360° turn always maps a shape onto itself). When we say a shape "has rotational symmetry" we mean order ≥ 2. A shape with order <em>n</em> maps onto itself every <span class="nb-frac"><span class="nb-num">360°</span><span class="nb-den"><em>n</em></span></span>.'
      }
    },
    {
      id: 'h-common',
      type: 'heading',
      data: { text: 'Rotational Symmetry of Common Shapes', level: 2 }
    },
    {
      id: 'table-orders',
      type: 'comparisonTable',
      data: {
        caption: 'Order of rotational symmetry for common 2D shapes',
        headers: ['Shape', 'Order', 'Angle of Rotation'],
        rows: [
          ['Equilateral triangle', '3', '120°'],
          ['Square', '4', '90°'],
          ['Rectangle (non-square)', '2', '180°'],
          ['Regular pentagon', '5', '72°'],
          ['Regular hexagon', '6', '60°'],
          ['Parallelogram (non-rectangle)', '2', '180°'],
          ['Rhombus (non-square)', '2', '180°'],
          ['Isosceles trapezium', '1', 'None (no rotational symmetry)'],
          ['Kite', '1', 'None (no rotational symmetry)'],
          ['Circle', '∞', 'Any angle']
        ]
      }
    },
    {
      id: 'h-finding',
      type: 'heading',
      data: { text: 'How to Find the Order', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Trace the shape onto tracing paper.' },
          { text: 'Place a pencil on the centre and rotate slowly.' },
          { text: 'Count how many times the tracing matches the original in one full turn (including the starting position).' },
          { text: 'That count is the order of rotational symmetry.' }
        ]
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: '<strong>Q:</strong> State the order of rotational symmetry of the letter <strong>S</strong>.<br/><br/><strong>A:</strong> Rotate S by 180° about its centre — it looks the same.<br/>Rotate by 360° — it looks the same again.<br/>Order of rotational symmetry = <strong>2</strong>.'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: '<strong>Q:</strong> A regular polygon has rotational symmetry of order 8. How many sides does it have?<br/><br/><strong>A:</strong> A regular polygon always has order of rotational symmetry equal to the number of sides.<br/>So it has <strong>8 sides</strong> (a regular octagon).'
      }
    },
    {
      id: 'h-line-vs-rot',
      type: 'heading',
      data: { text: 'Line Symmetry vs Rotational Symmetry', level: 2 }
    },
    {
      id: 'p-comparison',
      type: 'paragraph',
      data: {
        text: 'Line symmetry and rotational symmetry are independent properties. A parallelogram has rotational symmetry of order 2 but no lines of symmetry. A shape can have both, one, or neither (though every shape has rotational symmetry of order 1).'
      }
    },
    {
      id: 'callout-tip-regular',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For any <strong>regular polygon</strong> with <em>n</em> sides: lines of symmetry = <em>n</em> and order of rotational symmetry = <em>n</em>. This quick fact saves time in exams.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Rotational symmetry order is the number of times a shape maps onto itself in a 360° turn. The angle of rotation = 360° ÷ order. Regular polygons with n sides have order n. A shape with order 1 has no rotational symmetry.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-definition', prompt: 'What is the order of rotational symmetry?' },
      { id: 'cue-2', blockId: 'callout-key-order', prompt: 'How do you calculate the angle of rotation from the order?' },
      { id: 'cue-3', blockId: 'table-orders', prompt: 'What is the order of rotational symmetry of a parallelogram?' },
      { id: 'cue-4', blockId: 'p-comparison', prompt: 'Can a shape have rotational symmetry but no line symmetry? Give an example.' },
      { id: 'cue-5', blockId: 'callout-tip-regular', prompt: 'For a regular polygon with n sides, what is the order of rotational symmetry?' }
    ],
    summaryText: 'Rotational symmetry order counts how many times a shape maps onto itself during a 360° turn. The angle of rotation equals 360° ÷ order.',
    ready: true
  },
  evidence: []
};
