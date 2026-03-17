export const note_olevel_maths_core_4_2_2 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate interior and exterior angles of polygons using the formulae; find the number of sides of a regular polygon given one of its angles.' }
    },
    {
      id: 'h-interior',
      type: 'heading',
      data: { text: 'Interior Angle Sum of a Polygon', level: 2 }
    },
    {
      id: 'p-interior',
      type: 'paragraph',
      data: { text: 'Any polygon with <strong>n</strong> sides can be split into <strong>(n − 2)</strong> triangles by drawing diagonals from one vertex to all non-adjacent vertices. Since each triangle has an angle sum of 180°, the total interior angle sum is <strong>(n − 2) × 180°</strong>.' }
    },
    {
      id: 'eq-interior',
      type: 'equation',
      data: { html: 'Sum of interior angles = (n − 2) × 180°', caption: 'For any polygon with n sides' }
    },
    {
      id: 'h-exterior',
      type: 'heading',
      data: { text: 'Exterior Angle Sum', level: 2 }
    },
    {
      id: 'p-exterior',
      type: 'paragraph',
      data: { text: 'For any <strong>convex polygon</strong>, the exterior angles (one at each vertex, formed by extending a side) always add up to <strong>360°</strong>. Think of it as making one complete turn as you walk around the polygon. Each exterior angle and the adjacent interior angle form a straight line, so they sum to 180°.' }
    },
    {
      id: 'eq-exterior',
      type: 'equation',
      data: { html: 'Sum of exterior angles = 360° (for any convex polygon)', caption: '' }
    },
    {
      id: 'h-regular',
      type: 'heading',
      data: { text: 'Regular Polygons', level: 2 }
    },
    {
      id: 'p-regular',
      type: 'paragraph',
      data: { text: 'A <strong>regular polygon</strong> has all sides equal and all angles equal. For a regular polygon with n sides:' }
    },
    {
      id: 'eq-each-interior',
      type: 'equation',
      data: { html: 'Each interior angle = <span class="nb-frac"><span class="nb-num">(n − 2) × 180°</span><span class="nb-den">n</span></span>', caption: 'Regular polygon — each interior angle' }
    },
    {
      id: 'eq-each-exterior',
      type: 'equation',
      data: { html: 'Each exterior angle = <span class="nb-frac"><span class="nb-num">360°</span><span class="nb-den">n</span></span>', caption: 'Regular polygon — each exterior angle' }
    },
    {
      id: 'p-relation',
      type: 'paragraph',
      data: { text: 'Note: interior angle + exterior angle = <strong>180°</strong> (they lie on a straight line). So if you know one, you can find the other instantly.' }
    },
    {
      id: 'table-polygons',
      type: 'comparisonTable',
      data: {
        caption: 'Interior and exterior angles for common regular polygons',
        headers: ['Polygon', 'Sides (n)', 'Interior angle sum', 'Each interior angle', 'Each exterior angle'],
        rows: [
          ['Triangle', '3', '180°', '60°', '120°'],
          ['Quadrilateral', '4', '360°', '90°', '90°'],
          ['Pentagon', '5', '540°', '108°', '72°'],
          ['Hexagon', '6', '720°', '120°', '60°'],
          ['Heptagon', '7', '900°', '128.6°', '51.4°'],
          ['Octagon', '8', '1080°', '135°', '45°'],
          ['Nonagon', '9', '1260°', '140°', '40°'],
          ['Decagon', '10', '1440°', '144°', '36°']
        ]
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1:</strong> Find the interior angle sum of a 9-sided polygon.<br>Sum = (9 − 2) × 180° = 7 × 180° = <strong>1260°</strong><br><br><strong>Example 2:</strong> Each exterior angle of a regular polygon is 24°. How many sides does it have?<br>n = 360° ÷ 24° = <strong>15 sides</strong><br><br><strong>Example 3:</strong> Each interior angle of a regular polygon is 150°. How many sides?<br>Each exterior angle = 180° − 150° = 30°<br>n = 360° ÷ 30° = <strong>12 sides</strong><br><br><strong>Example 4:</strong> A hexagon has five interior angles of 110°, 125°, 105°, 130°, 90°. Find the sixth.<br>Sum = (6 − 2) × 180° = 720°<br>Sixth = 720° − (110 + 125 + 105 + 130 + 90) = 720° − 560° = <strong>160°</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Formulae',
        text: '• Interior angle sum = <strong>(n − 2) × 180°</strong><br>• Exterior angle sum = <strong>360°</strong> (always)<br>• Each interior angle (regular) = (n − 2) × 180° ÷ n<br>• Each exterior angle (regular) = 360° ÷ n<br>• Interior + exterior = <strong>180°</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Find n from an Exterior Angle',
        text: 'The quickest route to finding the number of sides from a given angle is via the exterior angle: n = 360° ÷ exterior angle. If you are given the interior angle, first find the exterior angle (180° − interior), then divide 360° by it.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Interior angle sum = (n − 2) × 180°. Exterior angle sum = 360° always. For a regular polygon: each interior = (n−2)×180°/n; each exterior = 360°/n; they add to 180°. To find n: divide 360° by the exterior angle.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Interior sum = (n−2)×180°. Exterior sum = 360°. Regular polygon: each exterior = 360°/n. Interior + exterior = 180°.',
    cues: [
      { id: 'cue-1', blockId: 'eq-interior', prompt: 'Write the formula for the interior angle sum of a polygon with n sides.' },
      { id: 'cue-2', blockId: 'eq-each-exterior', prompt: 'Write the formula for each exterior angle of a regular n-sided polygon. What is the sum of ALL exterior angles for any convex polygon?' },
      { id: 'cue-3', blockId: 'table-polygons', prompt: 'What is each interior angle of a regular hexagon? A regular octagon?' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'Each exterior angle of a regular polygon is 40°. How many sides does the polygon have?' },
      { id: 'cue-5', blockId: 'callout-worked', prompt: 'Each interior angle of a regular polygon is 156°. How many sides does it have?' }
    ]
  },
  evidence: []
};
