export const note_olevel_maths_core_2_7_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Algebra And Sequences/forming-equations-from-shapes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Form and solve equations from geometric contexts, using properties such as angle sums in triangles and quadrilaterals, and perimeters of polygons.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Using Geometry to Form Equations', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'When a shape has sides or angles expressed algebraically (e.g. "2x + 10°"), we can use known geometric rules to write an <strong>equation</strong>, solve for x, and then find actual lengths or angles.' }
    },
    {
      id: 'h-angle-rules',
      type: 'heading',
      data: { text: 'Key Geometric Rules', level: 2 }
    },
    {
      id: 'list-rules',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Triangle angles:</strong> sum = 180°' },
          { text: '<strong>Quadrilateral angles:</strong> sum = 360°' },
          { text: '<strong>Angles on a straight line:</strong> sum = 180°' },
          { text: '<strong>Angles around a point:</strong> sum = 360°' },
          { text: '<strong>Isosceles triangle:</strong> base angles are equal' },
          { text: '<strong>Equilateral triangle:</strong> all angles = 60°, all sides equal' },
          { text: '<strong>Perimeter:</strong> sum of all side lengths' },
        ]
      }
    },
    {
      id: 'h-triangle-angle',
      type: 'heading',
      data: { text: 'Triangle Angle Equations', level: 2 }
    },
    {
      id: 'callout-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Triangle Angles',
        text: 'A triangle has angles (2x + 10)°, (x + 20)°, and x°.<br>Use: angles sum to 180°.<br><br>Form equation: (2x + 10) + (x + 20) + x = 180<br>Collect: 4x + 30 = 180<br>Subtract 30: 4x = 150<br>Divide by 4: x = 37.5<br><br>Angles: 2(37.5) + 10 = <strong>85°</strong>; 37.5 + 20 = <strong>57.5°</strong>; <strong>37.5°</strong><br>Check: 85 + 57.5 + 37.5 = 180 ✓'
      }
    },
    {
      id: 'h-isosceles',
      type: 'heading',
      data: { text: 'Isosceles Triangle Equations', level: 2 }
    },
    {
      id: 'callout-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Isosceles Triangle',
        text: 'An isosceles triangle has two equal base angles of (3x + 5)° and an apex angle of (x + 10)°.<br><br>Use: angles sum to 180°; base angles are equal.<br>2(3x + 5) + (x + 10) = 180<br>6x + 10 + x + 10 = 180<br>7x + 20 = 180<br>7x = 160<br>x = <span class="nb-frac"><span class="nb-num">160</span><span class="nb-den">7</span></span> ≈ 22.86<br><br><strong>Or:</strong> if base angles are each (4x − 5)° and apex angle is 2x°:<br>2(4x − 5) + 2x = 180 → 8x − 10 + 2x = 180 → 10x = 190 → x = <strong>19</strong>'
      }
    },
    {
      id: 'h-perimeter',
      type: 'heading',
      data: { text: 'Perimeter Equations', level: 2 }
    },
    {
      id: 'callout-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Perimeter',
        text: 'A rectangle has length (3x + 2) cm and width (x + 5) cm. Its perimeter is 46 cm.<br><br>Perimeter = 2 × length + 2 × width<br>2(3x + 2) + 2(x + 5) = 46<br>6x + 4 + 2x + 10 = 46<br>8x + 14 = 46<br>8x = 32<br>x = <strong>4</strong><br><br>Length = 3(4) + 2 = <strong>14 cm</strong>; Width = 4 + 5 = <strong>9 cm</strong><br>Check: 2(14) + 2(9) = 28 + 18 = 46 ✓'
      }
    },
    {
      id: 'callout-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Forming Equations from Shapes: Method',
        text: '1. Identify the geometric rule (angle sum, perimeter, equal sides, etc.).<br>2. Write an expression for each relevant quantity using the given algebraic sides/angles.<br>3. Set the sum (or expression) equal to the known total.<br>4. Expand, collect and solve for x.<br>5. Substitute back to find the actual values and check the geometric rule.'
      }
    },
    {
      id: 'callout-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Find All Missing Lengths/Angles',
        text: 'After finding x, re-read the question — it may ask for a specific angle or side length, not just x itself. Always substitute x back to find the actual value asked for, and verify the geometric rule is satisfied.'
      }
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I know triangle angles sum to 180°, quadrilateral to 360°', checked: false },
          { text: 'I can form an equation from angle or perimeter information', checked: false },
          { text: 'I expand brackets and collect like terms when solving', checked: false },
          { text: 'I find actual angles/lengths by substituting x back', checked: false },
          { text: 'I verify the answer satisfies the original geometric rule', checked: false },
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Form equations from shapes by applying geometric rules (angle sums, perimeter) to algebraic expressions. Set the sum equal to the known total, simplify, and solve for x. Always substitute back to find the actual angles or lengths, and verify the geometric rule is satisfied.' }
    },
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-rules', prompt: 'What is the angle sum in a triangle? In a quadrilateral?' },
      { id: 'cue-2', blockId: 'callout-worked1', prompt: 'Triangle has angles (2x+10)°, (x+20)°, x°. Form and solve the equation to find x.' },
      { id: 'cue-3', blockId: 'callout-worked3', prompt: 'Rectangle has length (3x+2) cm and width (x+5) cm with perimeter 46 cm. Find x.' },
      { id: 'cue-4', blockId: 'callout-key1', prompt: 'State the 5-step method for forming equations from shapes.' },
      { id: 'cue-5', blockId: 'callout-tip1', prompt: 'After finding x = 4 in a perimeter problem, what must you do next?' },
    ],
    summaryText: 'Apply geometric rules (angle sums, perimeter) to write algebraic equations, solve for x, then substitute back to find actual lengths or angles.',
    ready: true,
  },
  evidence: [],
};
