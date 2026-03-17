export const note_olevel_maths_core_4_3_0 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe properties of regular and irregular polygons including sides, angles, diagonals, and symmetry; distinguish between different quadrilaterals by their properties.' }
    },
    {
      id: 'h-reg-irr',
      type: 'heading',
      data: { text: 'Regular vs Irregular Polygons', level: 2 }
    },
    {
      id: 'p-reg-irr',
      type: 'paragraph',
      data: { text: 'A <strong>regular polygon</strong> has all sides <em>equal in length</em> AND all angles <em>equal in size</em>. An <strong>irregular polygon</strong> has sides or angles that are not all equal. For example, a rectangle has equal angles (all 90°) but unequal sides — so it is irregular. A rhombus has equal sides but unequal angles — also irregular.' }
    },
    {
      id: 'h-quad-props',
      type: 'heading',
      data: { text: 'Detailed Quadrilateral Properties', level: 2 }
    },
    {
      id: 'table-quads',
      type: 'comparisonTable',
      data: {
        caption: 'Comprehensive properties of quadrilaterals',
        headers: ['Shape', 'Sides', 'Angles', 'Diagonals', 'Lines of sym.', 'Rot. sym. order'],
        rows: [
          ['Square', '4 equal; opposite ∥', 'All 90°', 'Equal; bisect at 90°; bisect each other', '4', '4'],
          ['Rectangle', 'Opp. sides equal; opposite ∥', 'All 90°', 'Equal; bisect each other (not at 90°)', '2', '2'],
          ['Parallelogram', 'Opp. sides equal; opposite ∥', 'Opp. equal; adj. = 180°', 'Bisect each other (unequal, not at 90°)', '0', '2'],
          ['Rhombus', '4 equal; opposite ∥', 'Opp. equal; adj. = 180°', 'Bisect at 90°; bisect each other (unequal)', '2', '2'],
          ['Trapezium', '1 pair of ∥ sides', 'Co-interior same side = 180°', 'Generally unequal; do not bisect', '0 (1 if isosceles)', '1'],
          ['Isosceles trapezium', '1 pair ∥; legs equal', 'Base angles equal (2 pairs)', 'Equal length; do not bisect', '1', '1'],
          ['Kite', '2 pairs adjacent equal', '1 pair opp. equal; diag. bisects other pair', '1 bisects other at 90°', '1', '1'],
          ['Arrowhead', '2 pairs adjacent equal (concave)', '1 reflex angle; 1 pair opp. equal', '1 bisects other at 90°', '1', '1']
        ]
      }
    },
    {
      id: 'h-diagonals',
      type: 'heading',
      data: { text: 'Diagonals of Polygons', level: 2 }
    },
    {
      id: 'p-diagonals',
      type: 'paragraph',
      data: { text: 'A <strong>diagonal</strong> is a line segment connecting two non-adjacent vertices of a polygon. The number of diagonals in a polygon with <em>n</em> sides is given by:' }
    },
    {
      id: 'eq-diagonals',
      type: 'equation',
      data: {
        html: 'Number of diagonals = <span class="nb-frac"><span class="nb-num">n(n − 3)</span><span class="nb-den">2</span></span>',
        caption: 'For a polygon with n sides'
      }
    },
    {
      id: 'p-diagonal-example',
      type: 'paragraph',
      data: { text: 'Examples: Triangle (3 sides): 3(0)/2 = <strong>0 diagonals</strong>. Quadrilateral: 4(1)/2 = <strong>2 diagonals</strong>. Pentagon: 5(2)/2 = <strong>5 diagonals</strong>. Hexagon: 6(3)/2 = <strong>9 diagonals</strong>. Decagon: 10(7)/2 = <strong>35 diagonals</strong>.' }
    },
    {
      id: 'h-reg-polys',
      type: 'heading',
      data: { text: 'Properties of Regular Polygons (Pentagon to Decagon)', level: 2 }
    },
    {
      id: 'table-reg',
      type: 'comparisonTable',
      data: {
        caption: 'Regular polygon properties',
        headers: ['Polygon', 'Sides', 'Interior angle', 'Exterior angle', 'Lines of sym.', 'Rot. sym. order'],
        rows: [
          ['Regular pentagon', '5', '108°', '72°', '5', '5'],
          ['Regular hexagon', '6', '120°', '60°', '6', '6'],
          ['Regular heptagon', '7', '≈128.6°', '≈51.4°', '7', '7'],
          ['Regular octagon', '8', '135°', '45°', '8', '8'],
          ['Regular nonagon', '9', '140°', '40°', '9', '9'],
          ['Regular decagon', '10', '144°', '36°', '10', '10']
        ]
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Identify the Quadrilateral',
        text: '<strong>Q:</strong> A quadrilateral has: all four sides equal, opposite sides parallel, angles of 70° and 110° alternating. What is it?<br><br><strong>Solution:</strong><br>• 4 equal sides ✓ (eliminates rectangle, trapezium)<br>• Opposite sides parallel ✓ (could be rhombus or square)<br>• Angles 70° and 110° (not all 90°) ✓ (eliminates square)<br>→ Shape is a <strong>Rhombus</strong><br><br><em>Check:</em> 70 + 110 + 70 + 110 = 360° ✓'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Distinguishing Features',
        text: '• <strong>Square vs Rectangle:</strong> square has all 4 sides equal<br>• <strong>Rhombus vs Parallelogram:</strong> rhombus has all 4 sides equal<br>• <strong>Rhombus vs Square:</strong> square has all right angles; rhombus does not (unless it is a square)<br>• <strong>Kite vs Rhombus:</strong> kite has adjacent equal sides; rhombus has opposite equal (and parallel) sides'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — A Square is a Special Rectangle',
        text: 'A square satisfies all the properties of a rectangle (and also a rhombus). So in general terms, a square IS a rectangle and IS a rhombus. Questions sometimes test this: "Name a quadrilateral with 4 right angles and 4 equal sides" → Square (but not just a rhombus, and not just a rectangle).'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'A regular polygon has all sides and angles equal. Diagonals = n(n−3)/2. Quadrilateral hierarchy: square ⊂ rectangle ⊂ parallelogram; square ⊂ rhombus ⊂ parallelogram. For regular polygons, lines of symmetry = rotational order = number of sides.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Regular polygon: all sides equal AND all angles equal. Diagonals = n(n−3)/2. Square is a special rectangle and rhombus.',
    cues: [
      { id: 'cue-1', blockId: 'p-reg-irr', prompt: 'What two conditions must a polygon satisfy to be called "regular"? Give an example of a shape that fails one but not both.' },
      { id: 'cue-2', blockId: 'eq-diagonals', prompt: 'Write the formula for the number of diagonals in an n-sided polygon. How many diagonals does a hexagon have?' },
      { id: 'cue-3', blockId: 'table-quads', prompt: 'What is the difference between a parallelogram and a rhombus in terms of sides and diagonals?' },
      { id: 'cue-4', blockId: 'callout-key', prompt: 'How do you distinguish a kite from a rhombus?' }
    ]
  },
  evidence: []
};
