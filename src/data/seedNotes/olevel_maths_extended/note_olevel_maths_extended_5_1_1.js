export const note_olevel_maths_extended_5_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/area.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the area of rectangles, triangles, parallelograms and trapeziums using standard formulae.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Area of 2D Shapes', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Area</strong> is the amount of space enclosed inside a 2D shape. It is always measured in <strong>square units</strong> (cm², m², km²).' }
    },
    {
      id: 'h-rect',
      type: 'heading',
      data: { text: 'Rectangle', level: 2 }
    },
    {
      id: 'eq-rect',
      type: 'equation',
      data: {
        html: 'A = l × w',
        caption: 'Area of a rectangle (length × width)'
      }
    },
    {
      id: 'h-triangle',
      type: 'heading',
      data: { text: 'Triangle', level: 2 }
    },
    {
      id: 'eq-triangle',
      type: 'equation',
      data: {
        html: 'A = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> × b × h',
        caption: 'Area of a triangle'
      }
    },
    {
      id: 'p-triangle-note',
      type: 'paragraph',
      data: { text: 'The <strong>height</strong> (h) must be the <em>perpendicular</em> height — the vertical distance from the base to the opposite vertex, not a slanted side.' }
    },
    {
      id: 'h-parallelogram',
      type: 'heading',
      data: { text: 'Parallelogram', level: 2 }
    },
    {
      id: 'eq-para',
      type: 'equation',
      data: {
        html: 'A = b × h',
        caption: 'Area of a parallelogram (base × perpendicular height)'
      }
    },
    {
      id: 'h-trapezium',
      type: 'heading',
      data: { text: 'Trapezium', level: 2 }
    },
    {
      id: 'eq-trap',
      type: 'equation',
      data: {
        html: 'A = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span>(a + b) × h',
        caption: 'Area of a trapezium (a and b are the parallel sides)'
      }
    },
    {
      id: 'table-areas',
      type: 'comparisonTable',
      data: {
        caption: 'Area formula summary',
        headers: ['Shape', 'Formula', 'Key Note'],
        rows: [
          ['Rectangle', 'A = l × w', 'All angles 90°'],
          ['Triangle', 'A = ½ × b × h', 'h is perpendicular height'],
          ['Parallelogram', 'A = b × h', 'h is perpendicular height, not the slant side'],
          ['Trapezium', 'A = ½(a + b) × h', 'a and b are the two parallel sides']
        ]
      }
    },
    {
      id: 'callout-worked-trap',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Trapezium',
        text: 'A trapezium has parallel sides 8 cm and 14 cm and a perpendicular height of 6 cm. Find its area.<br><br><strong>Solution:</strong><br>A = ½(a + b) × h<br>A = ½(8 + 14) × 6<br>A = ½ × 22 × 6<br>A = <strong>66 cm²</strong>'
      }
    },
    {
      id: 'callout-key-height',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Perpendicular Height',
        text: 'For triangles, parallelograms and trapeziums, always use the <strong>perpendicular height</strong> (at 90° to the base), not the slant height. If a slant side is given instead, you may need Pythagoras\' theorem to find the perpendicular height.'
      }
    },
    {
      id: 'callout-tip-units',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Area is always in <strong>square</strong> units. If lengths are given in different units, convert them first. Show your formula, substitution and answer for full marks.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Area measures the space inside a 2D shape. Key formulae: rectangle A = lw, triangle A = ½bh, parallelogram A = bh, trapezium A = ½(a+b)h. Always use the perpendicular height.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-rect', prompt: 'What is the area formula for a rectangle?', answer: 'A = l × w (length times width).' },
      { id: 'cue-2', blockId: 'eq-triangle', prompt: 'What is the area formula for a triangle?', answer: 'A = ½ × b × h (half base times perpendicular height).' },
      { id: 'cue-3', blockId: 'eq-trap', prompt: 'State the formula for the area of a trapezium.', answer: 'A = ½(a + b) × h, where a and b are the parallel sides.' },
      { id: 'cue-4', blockId: 'callout-key-height', prompt: 'Why must you use the perpendicular height, not the slant side?', answer: 'The formula requires the height at 90° to the base; using the slant side gives an incorrect answer.' },
      { id: 'cue-5', blockId: 'p-intro', prompt: 'What units is area measured in?', answer: 'Square units such as cm², m², km².' }
    ],
    summaryText: 'Area is the space inside a shape, measured in square units. Key formulae use base and perpendicular height.',
    ready: true
  },
  evidence: []
};
