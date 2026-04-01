export const note_olevel_maths_extended_4_1_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/2d-shapes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify, classify and describe the properties of 2D shapes including triangles, quadrilaterals and regular polygons.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: '2D Shapes', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>two-dimensional (2D) shape</strong> is a flat shape with only length and width — no depth. Understanding the properties of 2D shapes is fundamental to geometry at IGCSE level.' }
    },
    {
      id: 'h-triangles',
      type: 'heading',
      data: { text: 'Triangles', level: 2 }
    },
    {
      id: 'p-triangles',
      type: 'paragraph',
      data: { text: 'A triangle has <strong>3 sides</strong> and <strong>3 angles</strong> that always sum to <strong>180°</strong>. Triangles are classified by their sides and angles.' }
    },
    {
      id: 'table-triangles',
      type: 'comparisonTable',
      data: {
        caption: 'Types of triangle',
        headers: ['Type', 'Sides', 'Angles', 'Lines of Symmetry'],
        rows: [
          ['Equilateral', 'All 3 equal', 'All 60°', '3'],
          ['Isosceles', '2 equal', '2 base angles equal', '1'],
          ['Scalene', 'All different', 'All different', '0'],
          ['Right-angled', 'Any', 'One angle = 90°', '0 or 1']
        ]
      }
    },
    {
      id: 'svg-triangles',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg"><style>text{font-family:system-ui;font-size:12px;fill:#334155}line,polygon{stroke:#3b82f6;stroke-width:2;fill:none}.label{font-weight:600;font-size:13px;fill:#3b82f6}</style><polygon points="60,20 20,150 100,150"/><text x="60" y="170" text-anchor="middle" class="label">Equilateral</text><text x="55" y="90" text-anchor="middle">60°</text><polygon points="230,20 180,150 280,150"/><line x1="230" y1="20" x2="230" y2="150" stroke="#3b82f6" stroke-dasharray="4"/><text x="230" y="170" text-anchor="middle" class="label">Isosceles</text><polygon points="390,40 350,150 470,150"/><text x="410" y="170" text-anchor="middle" class="label">Scalene</text><polygon points="530,150 530,40 590,150"/><rect x="530" y="130" width="15" height="15" fill="none" stroke="#3b82f6" stroke-width="1.5"/><text x="555" y="170" text-anchor="middle" class="label">Right-angled</text></svg>',
        caption: 'The four main types of triangle'
      }
    },
    {
      id: 'h-quads',
      type: 'heading',
      data: { text: 'Quadrilaterals', level: 2 }
    },
    {
      id: 'p-quads',
      type: 'paragraph',
      data: { text: 'A <strong>quadrilateral</strong> is any shape with <strong>4 sides</strong>. The interior angles of every quadrilateral sum to <strong>360°</strong>.' }
    },
    {
      id: 'table-quads',
      type: 'comparisonTable',
      data: {
        caption: 'Properties of quadrilaterals',
        headers: ['Shape', 'Sides', 'Angles', 'Diagonals', 'Symmetry'],
        rows: [
          ['Square', '4 equal, all parallel', '4 × 90°', 'Equal, bisect at 90°', '4 lines, order 4'],
          ['Rectangle', 'Opposite equal & parallel', '4 × 90°', 'Equal, bisect each other', '2 lines, order 2'],
          ['Rhombus', '4 equal, opposite parallel', 'Opposite equal', 'Bisect at 90° (unequal)', '2 lines, order 2'],
          ['Parallelogram', 'Opposite equal & parallel', 'Opposite equal', 'Bisect each other (unequal)', '0 lines, order 2'],
          ['Trapezium', '1 pair parallel', 'Varies', 'Not equal', '0 (or 1 if isosceles)'],
          ['Kite', '2 pairs of adjacent equal', '1 pair of opposite angles equal', 'One bisects the other at 90°', '1 line, order 1']
        ]
      }
    },
    {
      id: 'callout-key-quad',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Quadrilateral Hierarchy',
        text: 'A <strong>square</strong> is a special <strong>rectangle</strong> (all sides equal) and also a special <strong>rhombus</strong> (all angles 90°). Both rectangles and rhombuses are special <strong>parallelograms</strong>.'
      }
    },
    {
      id: 'h-polygons',
      type: 'heading',
      data: { text: 'Regular Polygons', level: 2 }
    },
    {
      id: 'p-polygons',
      type: 'paragraph',
      data: { text: 'A <strong>regular polygon</strong> has all sides equal AND all interior angles equal. The number of lines of symmetry equals the number of sides, and the order of rotational symmetry also equals the number of sides.' }
    },
    {
      id: 'table-polygons',
      type: 'comparisonTable',
      data: {
        caption: 'Common regular polygons',
        headers: ['Name', 'Sides', 'Interior Angle', 'Exterior Angle'],
        rows: [
          ['Equilateral triangle', '3', '60°', '120°'],
          ['Square', '4', '90°', '90°'],
          ['Regular pentagon', '5', '108°', '72°'],
          ['Regular hexagon', '6', '120°', '60°'],
          ['Regular octagon', '8', '135°', '45°'],
          ['Regular decagon', '10', '144°', '36°']
        ]
      }
    },
    {
      id: 'eq-interior',
      type: 'equation',
      data: {
        html: 'Interior angle of regular <em>n</em>-gon = <span class="nb-frac"><span class="nb-num">(<em>n</em> − 2) × 180°</span><span class="nb-den"><em>n</em></span></span>',
        caption: 'Interior angle formula'
      }
    },
    {
      id: 'eq-exterior',
      type: 'equation',
      data: {
        html: 'Exterior angle of regular <em>n</em>-gon = <span class="nb-frac"><span class="nb-num">360°</span><span class="nb-den"><em>n</em></span></span>',
        caption: 'Exterior angle formula'
      }
    },
    {
      id: 'h-special',
      type: 'heading',
      data: { text: 'Special Properties to Remember', level: 2 }
    },
    {
      id: 'list-special',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'The <strong>perpendicular bisector</strong> of a line segment passes through its midpoint at 90°' },
          { text: 'The <strong>angle bisector</strong> divides an angle into two equal parts' },
          { text: '<strong>Congruent</strong> shapes are identical in size and shape' },
          { text: '<strong>Similar</strong> shapes have the same angles but different sizes (sides in the same ratio)' }
        ]
      }
    },
    {
      id: 'callout-worked-identify',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Identifying a Quadrilateral',
        text: 'A quadrilateral has all four sides equal and opposite angles equal but no angle is 90°. Name the shape.<br><br>All sides equal &rarr; could be square or rhombus.<br>No right angles &rarr; not a square.<br><br><strong>Answer: Rhombus</strong>'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked to "describe the properties" of a shape, mention: number of equal sides, parallel sides, equal angles, diagonal properties, and symmetry (lines and rotational order).'
      }
    },
    {
      id: 'checklist-exam',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can classify triangles by sides and angles', checked: false },
          { text: 'I know the properties of all six quadrilaterals', checked: false },
          { text: 'I can find interior/exterior angles of regular polygons', checked: false },
          { text: 'I understand the quadrilateral hierarchy', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Triangles are classified by sides (equilateral, isosceles, scalene) and angles (right, acute, obtuse). Quadrilaterals include squares, rectangles, rhombuses, parallelograms, trapeziums and kites — each with specific side, angle, diagonal and symmetry properties. Regular polygons have all sides and angles equal; use 360°/n for exterior angles and (n−2)×180°/n for interior angles.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '2D shapes are classified by their sides, angles, diagonals, and symmetry properties.',
    cues: [
      { id: 'cue-1', blockId: 'table-triangles', prompt: 'What are the four types of triangle and their key properties?', answer: 'Equilateral (3 equal sides, 3×60°), Isosceles (2 equal sides, 2 equal base angles), Scalene (all different), Right-angled (one 90° angle).' },
      { id: 'cue-2', blockId: 'table-quads', prompt: 'What are the diagonal properties of a rhombus?', answer: 'The diagonals bisect each other at right angles but are not equal in length.' },
      { id: 'cue-3', blockId: 'eq-exterior', prompt: 'What is the formula for an exterior angle of a regular n-sided polygon?', answer: 'Exterior angle = 360° ÷ n.' },
      { id: 'cue-4', blockId: 'callout-key-quad', prompt: 'How is a square related to a rectangle and a rhombus?', answer: 'A square is a special rectangle (all sides equal) and a special rhombus (all angles 90°). Both are special parallelograms.' },
      { id: 'cue-5', blockId: 'p-quads', prompt: 'What do the interior angles of any quadrilateral sum to?', answer: '360°.' }
    ]
  },
  evidence: []
};
