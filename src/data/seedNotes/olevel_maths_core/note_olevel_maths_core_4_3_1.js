export const note_olevel_maths_core_4_3_1 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Name and describe 3D shapes; count vertices, edges, and faces; verify Euler\'s formula V − E + F = 2; recognise nets of common solids.' }
    },
    {
      id: 'h-euler',
      type: 'heading',
      data: { text: "Euler's Formula", level: 2 }
    },
    {
      id: 'p-euler',
      type: 'paragraph',
      data: { text: 'For any convex polyhedron (a 3D solid with flat faces), the number of <strong>Vertices (V)</strong>, <strong>Edges (E)</strong>, and <strong>Faces (F)</strong> always satisfies <strong>Euler\'s formula</strong>. A <em>vertex</em> is a corner point, an <em>edge</em> is a line where two faces meet, and a <em>face</em> is a flat surface.' }
    },
    {
      id: 'eq-euler',
      type: 'equation',
      data: { html: 'V − E + F = 2', caption: "Euler's formula for convex polyhedra" }
    },
    {
      id: 'h-shapes',
      type: 'heading',
      data: { text: 'Properties of Common 3D Shapes', level: 2 }
    },
    {
      id: 'table-3d',
      type: 'comparisonTable',
      data: {
        caption: 'Vertices, edges, and faces of common 3D shapes',
        headers: ['Shape', 'Faces (F)', 'Edges (E)', 'Vertices (V)', 'V − E + F', 'Face shapes'],
        rows: [
          ['Cube', '6', '12', '8', '8−12+6 = 2 ✓', '6 squares'],
          ['Cuboid', '6', '12', '8', '8−12+6 = 2 ✓', '6 rectangles'],
          ['Triangular prism', '5', '9', '6', '6−9+5 = 2 ✓', '2 triangles, 3 rectangles'],
          ['Square-based pyramid', '5', '8', '5', '5−8+5 = 2 ✓', '1 square, 4 triangles'],
          ['Triangular pyramid (tetrahedron)', '4', '6', '4', '4−6+4 = 2 ✓', '4 equilateral triangles'],
          ['Pentagonal prism', '7', '15', '10', '10−15+7 = 2 ✓', '2 pentagons, 5 rectangles'],
          ['Cylinder', '3', '2', '0', 'Not a polyhedron', '2 circles, 1 curved surface'],
          ['Cone', '2', '1', '1 (apex)', 'Not a polyhedron', '1 circle, 1 curved surface'],
          ['Sphere', '1', '0', '0', 'Not a polyhedron', '1 curved surface']
        ]
      }
    },
    {
      id: 'svg-3d',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 200" width="540" height="200">
  <style>
    text { font-family: sans-serif; font-size: 11px; fill: #374151; }
    .name { font-weight: 700; fill: #6366f1; font-size: 11px; }
  </style>
  <!-- Cube -->
  <g transform="translate(20, 20)">
    <polygon points="20,50 70,50 70,100 20,100" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/>
    <polygon points="20,50 45,30 95,30 70,50" fill="#c7d2fe" stroke="#6366f1" stroke-width="1.5"/>
    <polygon points="70,50 95,30 95,80 70,100" fill="#a5b4fc" stroke="#6366f1" stroke-width="1.5"/>
    <text x="20" y="120" class="name">Cube</text>
    <text x="10" y="133">F=6, E=12, V=8</text>
  </g>
  <!-- Triangular prism -->
  <g transform="translate(150, 20)">
    <polygon points="20,90 70,90 70,50 20,50" fill="#dcfce7" stroke="#10b981" stroke-width="1.5"/>
    <polygon points="20,50 45,20 70,50" fill="#bbf7d0" stroke="#10b981" stroke-width="1.5"/>
    <polygon points="70,50 95,20 95,60 70,90" fill="#86efac" stroke="#10b981" stroke-width="1.5"/>
    <line x1="45" y1="20" x2="95" y2="20" stroke="#10b981" stroke-width="1.5"/>
    <line x1="95" y1="20" x2="95" y2="60" stroke="#10b981" stroke-width="1.5"/>
    <text x="15" y="120" class="name">Triangular prism</text>
    <text x="15" y="133">F=5, E=9, V=6</text>
  </g>
  <!-- Square pyramid -->
  <g transform="translate(320, 15)">
    <polygon points="20,90 80,90 80,50 20,50" fill="#fce7f3" stroke="#9333ea" stroke-width="1.5"/>
    <polygon points="20,90 50,30 80,90" fill="#f5d0fe" stroke="#9333ea" stroke-width="1.5"/>
    <polygon points="20,90 50,30 20,50" fill="#e9d5ff" stroke="#9333ea" stroke-width="1.5" opacity="0.6"/>
    <line x1="80" y1="90" x2="50" y2="30" stroke="#9333ea" stroke-width="1.5"/>
    <line x1="80" y1="50" x2="50" y2="30" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="4,3"/>
    <text x="15" y="120" class="name">Square pyramid</text>
    <text x="10" y="133">F=5, E=8, V=5</text>
  </g>
</svg>`,
        caption: 'Isometric views of cube, triangular prism, and square-based pyramid with V, E, F values'
      }
    },
    {
      id: 'h-nets',
      type: 'heading',
      data: { text: 'Nets of 3D Shapes', level: 2 }
    },
    {
      id: 'p-nets',
      type: 'paragraph',
      data: { text: 'A <strong>net</strong> is a flat (2D) shape that can be folded to make a 3D solid. You must be able to recognise and draw nets of a cube, cuboid, triangular prism, and pyramid. Key rule: the net must have the <em>same number of faces as the 3D shape</em>, and adjacent faces in the net must share an edge of the correct length.' }
    },
    {
      id: 'list-nets',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Cube net:</strong> 6 squares — many valid arrangements (11 different nets exist)' },
          { text: '<strong>Cuboid net:</strong> 6 rectangles in 3 opposite pairs' },
          { text: '<strong>Triangular prism net:</strong> 2 identical triangles + 3 rectangles' },
          { text: '<strong>Square pyramid net:</strong> 1 square base + 4 identical triangles around it' }
        ]
      }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Verify Euler\'s Formula',
        text: '<strong>Q:</strong> A shape has 12 faces and 30 edges. How many vertices does it have?<br><br>Using V − E + F = 2:<br>V − 30 + 12 = 2<br>V = 2 + 30 − 12 = <strong>20 vertices</strong><br><br><em>(This is a regular dodecahedron — 12 pentagonal faces.)</em>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Formulas — 3D Shapes',
        text: '• <strong>Euler\'s formula:</strong> V − E + F = 2 (for any convex polyhedron)<br>• Cube: V=8, E=12, F=6 &nbsp;|&nbsp; Tetrahedron: V=4, E=6, F=4<br>• Cylinder/Cone/Sphere are NOT polyhedra (they have curved surfaces)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Counting on a Diagram',
        text: 'When counting vertices, edges, and faces on a sketch, mark each one as you count it. For edges: count the visible edges, then add the hidden (dashed) edges. A common mistake is forgetting the base edges of a pyramid or prism.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Euler\'s formula: V − E + F = 2 for any convex polyhedron. Cube: 8V, 12E, 6F. Triangular prism: 6V, 9E, 5F. Square pyramid: 5V, 8E, 5F. Cylinder, cone, and sphere are not polyhedra. A net has the same face count as the 3D shape.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: "Euler's formula V − E + F = 2. Cube: 8, 12, 6. Triangular prism: 6, 9, 5. Square pyramid: 5, 8, 5.",
    cues: [
      { id: 'cue-1', blockId: 'eq-euler', prompt: "State Euler's formula. What do V, E, and F stand for?" },
      { id: 'cue-2', blockId: 'table-3d', prompt: 'How many faces, edges, and vertices does a triangular prism have? Verify with Euler\'s formula.' },
      { id: 'cue-3', blockId: 'p-nets', prompt: 'What is a net? How many faces does the net of a cube contain?' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'A polyhedron has 10 vertices and 15 edges. How many faces does it have?' }
    ]
  },
  evidence: []
};
