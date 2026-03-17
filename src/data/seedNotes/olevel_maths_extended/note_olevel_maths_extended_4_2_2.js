export const note_olevel_maths_extended_4_2_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/angles-in-polygons.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate interior and exterior angles of polygons, including finding the number of sides from given angle information.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Angles in Polygons', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>polygon</strong> is any closed shape with straight sides. The angle rules for polygons let you find individual angles or the number of sides.' }
    },
    {
      id: 'h-interior-sum',
      type: 'heading',
      data: { text: 'Sum of Interior Angles', level: 2 }
    },
    {
      id: 'p-interior-sum',
      type: 'paragraph',
      data: { text: 'A polygon can be divided into triangles by drawing diagonals from one vertex. An <em>n</em>-sided polygon splits into (<em>n</em> − 2) triangles, each with angles summing to 180°.' }
    },
    {
      id: 'eq-interior-sum',
      type: 'equation',
      data: {
        html: 'Sum of interior angles = (<em>n</em> − 2) × 180°',
        caption: 'Where n is the number of sides'
      }
    },
    {
      id: 'table-interior-sums',
      type: 'comparisonTable',
      data: {
        caption: 'Interior angle sums for common polygons',
        headers: ['Polygon', 'Sides (n)', 'Triangles (n−2)', 'Interior angle sum'],
        rows: [
          ['Triangle', '3', '1', '180°'],
          ['Quadrilateral', '4', '2', '360°'],
          ['Pentagon', '5', '3', '540°'],
          ['Hexagon', '6', '4', '720°'],
          ['Heptagon', '7', '5', '900°'],
          ['Octagon', '8', '6', '1080°'],
          ['Decagon', '10', '8', '1440°']
        ]
      }
    },
    {
      id: 'h-exterior',
      type: 'heading',
      data: { text: 'Exterior Angles', level: 2 }
    },
    {
      id: 'p-exterior',
      type: 'paragraph',
      data: { text: 'An <strong>exterior angle</strong> is formed by extending one side of the polygon. At each vertex, the interior and exterior angles are supplementary (sum to 180°).' }
    },
    {
      id: 'callout-key-exterior',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Critical Fact',
        text: 'The <strong>exterior angles</strong> of ANY convex polygon always sum to <strong>360°</strong>. This is true regardless of the number of sides.'
      }
    },
    {
      id: 'eq-exterior-sum',
      type: 'equation',
      data: {
        html: 'Sum of exterior angles = 360° &nbsp; (for any convex polygon)',
        caption: ''
      }
    },
    {
      id: 'h-regular',
      type: 'heading',
      data: { text: 'Regular Polygons', level: 2 }
    },
    {
      id: 'p-regular',
      type: 'paragraph',
      data: { text: 'In a <strong>regular polygon</strong>, all sides are equal and all angles are equal. This gives two very useful formulae:' }
    },
    {
      id: 'eq-regular-ext',
      type: 'equation',
      data: {
        html: 'Each exterior angle = <span class="nb-frac"><span class="nb-num">360°</span><span class="nb-den"><em>n</em></span></span>',
        caption: 'Exterior angle of a regular n-gon'
      }
    },
    {
      id: 'eq-regular-int',
      type: 'equation',
      data: {
        html: 'Each interior angle = 180° − <span class="nb-frac"><span class="nb-num">360°</span><span class="nb-den"><em>n</em></span></span> &nbsp; = &nbsp; <span class="nb-frac"><span class="nb-num">(<em>n</em> − 2) × 180°</span><span class="nb-den"><em>n</em></span></span>',
        caption: 'Interior angle of a regular n-gon'
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding an Angle',
        text: 'Find the size of each interior angle of a regular nonagon (9 sides).<br><br>Exterior angle = 360° ÷ 9 = 40°<br>Interior angle = 180° − 40° = <strong>140°</strong>'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding Number of Sides',
        text: 'Each interior angle of a regular polygon is 156°. How many sides does it have?<br><br>Exterior angle = 180° − 156° = 24°<br>Number of sides = 360° ÷ 24° = <strong>15 sides</strong>'
      }
    },
    {
      id: 'callout-worked-3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Irregular Polygon',
        text: 'A pentagon has angles of 100°, 120°, 95° and 130°. Find the fifth angle.<br><br>Sum of interior angles = (5 − 2) × 180° = 540°<br>Fifth angle = 540° − 100° − 120° − 95° − 130° = <strong>95°</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Strategy',
        text: 'To find the number of sides from an interior angle, always convert to the <strong>exterior angle first</strong> (180° − interior), then divide 360° by it. This avoids messy fractions.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Do not confuse the <strong>sum</strong> of interior angles with <strong>each</strong> interior angle. The sum formula (n − 2) × 180° gives the total — divide by n only for regular polygons.'
      }
    },
    {
      id: 'checklist-exam',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can find the sum of interior angles using (n − 2) × 180°', checked: false },
          { text: 'I know exterior angles of any convex polygon sum to 360°', checked: false },
          { text: 'I can find each angle of a regular polygon', checked: false },
          { text: 'I can find the number of sides from a given angle', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Sum of interior angles = (n − 2) × 180°. Exterior angles of any convex polygon sum to 360°. For regular polygons: each exterior angle = 360°/n, each interior angle = 180° − 360°/n. To find the number of sides from an interior angle, first find the exterior angle (180° − interior) then divide 360° by it.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Interior angle sum = (n−2)×180°; exterior angles always sum to 360°.',
    cues: [
      { id: 'cue-1', blockId: 'eq-interior-sum', prompt: 'What is the formula for the sum of interior angles of an n-sided polygon?', answer: '(n − 2) × 180°.' },
      { id: 'cue-2', blockId: 'callout-key-exterior', prompt: 'What do the exterior angles of any convex polygon sum to?', answer: '360°.' },
      { id: 'cue-3', blockId: 'eq-regular-ext', prompt: 'How do you find each exterior angle of a regular polygon?', answer: 'Each exterior angle = 360° ÷ n.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'How do you find the number of sides from a given interior angle?', answer: 'First find the exterior angle (180° − interior angle), then divide 360° by the exterior angle.' },
      { id: 'cue-5', blockId: 'p-interior-sum', prompt: 'Why does the interior angle sum formula use (n − 2)?', answer: 'An n-sided polygon can be split into (n − 2) triangles by drawing diagonals from one vertex, and each triangle has angles summing to 180°.' }
    ]
  },
  evidence: []
};
