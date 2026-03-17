export const note_olevel_maths_extended_4_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/3d-shapes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify and describe the properties of 3D shapes including prisms, pyramids, cylinders, cones and spheres, and understand their nets, faces, edges and vertices.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: '3D Shapes', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'A <strong>three-dimensional (3D) shape</strong> — also called a <strong>solid</strong> — has length, width and depth. 3D shapes have <strong>faces</strong> (flat surfaces), <strong>edges</strong> (where two faces meet) and <strong>vertices</strong> (corners where edges meet).' }
    },
    {
      id: 'h-euler',
      type: 'heading',
      data: { text: "Euler's Formula", level: 2 }
    },
    {
      id: 'eq-euler',
      type: 'equation',
      data: {
        html: '<em>V</em> − <em>E</em> + <em>F</em> = 2',
        caption: "Euler's formula: Vertices − Edges + Faces = 2 (for all convex polyhedra)"
      }
    },
    {
      id: 'h-prisms',
      type: 'heading',
      data: { text: 'Prisms', level: 2 }
    },
    {
      id: 'p-prisms',
      type: 'paragraph',
      data: { text: 'A <strong>prism</strong> has a uniform <strong>cross-section</strong> — the same shape all the way through. If you slice a prism parallel to its end face, every slice is identical.' }
    },
    {
      id: 'table-prisms',
      type: 'comparisonTable',
      data: {
        caption: 'Common prisms',
        headers: ['Prism', 'Cross-section', 'Faces', 'Edges', 'Vertices'],
        rows: [
          ['Cube', 'Square', '6', '12', '8'],
          ['Cuboid', 'Rectangle', '6', '12', '8'],
          ['Triangular prism', 'Triangle', '5', '9', '6'],
          ['Hexagonal prism', 'Regular hexagon', '8', '18', '12'],
          ['Cylinder', 'Circle', '3 (2 flat + 1 curved)', '2', '0']
        ]
      }
    },
    {
      id: 'callout-key-prism',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Definition',
        text: 'A <strong>cylinder</strong> is technically a prism with a circular cross-section. It has 2 flat circular faces and 1 curved surface.'
      }
    },
    {
      id: 'h-pyramids',
      type: 'heading',
      data: { text: 'Pyramids', level: 2 }
    },
    {
      id: 'p-pyramids',
      type: 'paragraph',
      data: { text: 'A <strong>pyramid</strong> has a flat base, and all other faces are <strong>triangles</strong> that meet at a single point called the <strong>apex</strong>.' }
    },
    {
      id: 'table-pyramids',
      type: 'comparisonTable',
      data: {
        caption: 'Common pyramids',
        headers: ['Pyramid', 'Base shape', 'Faces', 'Edges', 'Vertices'],
        rows: [
          ['Tetrahedron', 'Triangle', '4', '6', '4'],
          ['Square-based pyramid', 'Square', '5', '8', '5'],
          ['Pentagonal pyramid', 'Pentagon', '6', '10', '6'],
          ['Cone', 'Circle', '2 (1 flat + 1 curved)', '1', '1 (apex)']
        ]
      }
    },
    {
      id: 'h-sphere',
      type: 'heading',
      data: { text: 'Sphere and Hemisphere', level: 2 }
    },
    {
      id: 'p-sphere',
      type: 'paragraph',
      data: { text: 'A <strong>sphere</strong> has one continuous curved surface, no edges and no vertices. Every point on the surface is equidistant from the centre. A <strong>hemisphere</strong> is half a sphere — it has 1 flat circular face and 1 curved surface.' }
    },
    {
      id: 'h-nets',
      type: 'heading',
      data: { text: 'Nets of 3D Shapes', level: 2 }
    },
    {
      id: 'p-nets',
      type: 'paragraph',
      data: { text: 'A <strong>net</strong> is a 2D pattern that folds up to make a 3D shape. You need to be able to identify which net belongs to which solid, and to draw nets of cubes, cuboids and prisms.' }
    },
    {
      id: 'svg-cube-net',
      type: 'svg',
      data: {
        svg: '<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg"><style>rect{stroke:#6366f1;stroke-width:2;fill:#e0e7ff}.label{font-family:system-ui;font-size:12px;fill:#6366f1;font-weight:600}</style><rect x="110" y="10" width="50" height="50"/><rect x="60" y="60" width="50" height="50"/><rect x="110" y="60" width="50" height="50"/><rect x="160" y="60" width="50" height="50"/><rect x="210" y="60" width="50" height="50"/><rect x="110" y="110" width="50" height="50"/><text x="160" y="190" text-anchor="middle" class="label">Net of a cube (cross shape)</text></svg>',
        caption: 'One of 11 possible nets of a cube'
      }
    },
    {
      id: 'callout-worked-euler',
      type: 'callout',
      data: {
        style: 'worked',
        title: "Worked Example — Euler's Formula",
        text: "A solid has 8 vertices and 12 edges. How many faces does it have?<br><br>Using Euler's formula: <em>V</em> − <em>E</em> + <em>F</em> = 2<br>8 − 12 + <em>F</em> = 2<br><em>F</em> = 2 − 8 + 12 = <strong>6 faces</strong><br><br>This is a cube (or cuboid)."
      }
    },
    {
      id: 'callout-worked-identify',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Identifying Solids',
        text: 'A solid has 5 faces: 2 are triangles and 3 are rectangles. Name the solid and state the number of edges and vertices.<br><br>Two triangular faces = triangular cross-section &rarr; it is a <strong>triangular prism</strong>.<br>Edges: <strong>9</strong> &nbsp;|&nbsp; Vertices: <strong>6</strong>'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: "If you forget the number of faces/edges/vertices, use Euler's formula <em>V</em> − <em>E</em> + <em>F</em> = 2 to find the missing value. Also remember: a prism with an <em>n</em>-sided cross-section has <em>n</em> + 2 faces, 3<em>n</em> edges, and 2<em>n</em> vertices."
      }
    },
    {
      id: 'h-plans',
      type: 'heading',
      data: { text: 'Plans and Elevations', level: 2 }
    },
    {
      id: 'p-plans',
      type: 'paragraph',
      data: { text: 'The <strong>plan</strong> is the view from directly above. The <strong>front elevation</strong> is the view from the front. The <strong>side elevation</strong> is the view from the side. These 2D drawings fully describe a 3D object.' }
    },
    {
      id: 'checklist-exam',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can identify and name common 3D shapes', checked: false },
          { text: 'I know faces, edges and vertices for prisms and pyramids', checked: false },
          { text: "I can apply Euler's formula V − E + F = 2", checked: false },
          { text: 'I can sketch or identify nets of 3D shapes', checked: false },
          { text: 'I can draw plans and elevations', checked: false }
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: "3D shapes include prisms (uniform cross-section), pyramids (triangular faces meeting at an apex), cylinders, cones and spheres. For convex polyhedra, Euler's formula V − E + F = 2 links vertices, edges and faces. Nets are 2D patterns that fold into 3D solids. Plans and elevations show a 3D shape from above, front and side." }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '3D shapes are described by their faces, edges, vertices, and cross-sections.',
    cues: [
      { id: 'cue-1', blockId: 'eq-euler', prompt: "State Euler's formula for convex polyhedra.", answer: 'V − E + F = 2, where V = vertices, E = edges, F = faces.' },
      { id: 'cue-2', blockId: 'p-prisms', prompt: 'What is the defining property of a prism?', answer: 'A prism has a uniform cross-section — the same shape all the way through.' },
      { id: 'cue-3', blockId: 'table-pyramids', prompt: 'How many faces, edges and vertices does a square-based pyramid have?', answer: '5 faces, 8 edges, 5 vertices.' },
      { id: 'cue-4', blockId: 'p-sphere', prompt: 'Describe a sphere in terms of faces, edges and vertices.', answer: 'A sphere has 1 curved surface, 0 edges and 0 vertices.' },
      { id: 'cue-5', blockId: 'p-plans', prompt: 'What are the three standard views used to describe a 3D object?', answer: 'Plan (from above), front elevation (from front), side elevation (from side).' }
    ]
  },
  evidence: []
};
