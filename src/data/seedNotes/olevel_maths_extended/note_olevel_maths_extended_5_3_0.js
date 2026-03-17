export const note_olevel_maths_extended_5_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/surface-area.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the surface area of prisms, cylinders, cones, spheres and pyramids.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Surface Area', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Surface area</strong> is the total area of all the faces (or surfaces) of a 3D shape. It is measured in <strong>square units</strong> (cm², m²). Think of it as the amount of material needed to wrap the shape completely.' }
    },
    {
      id: 'h-prism',
      type: 'heading',
      data: { text: 'Prisms', level: 2 }
    },
    {
      id: 'p-prism',
      type: 'paragraph',
      data: { text: 'A prism has a uniform cross-section. Its surface area = <strong>2 × cross-section area + perimeter of cross-section × length</strong>.' }
    },
    {
      id: 'callout-worked-cuboid',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Cuboid',
        text: 'Find the surface area of a cuboid with dimensions 5 cm × 4 cm × 3 cm.<br><br><strong>Solution:</strong><br>SA = 2(lw + lh + wh)<br>SA = 2(5×4 + 5×3 + 4×3)<br>SA = 2(20 + 15 + 12)<br>SA = 2 × 47<br>SA = <strong>94 cm²</strong>'
      }
    },
    {
      id: 'h-cylinder',
      type: 'heading',
      data: { text: 'Cylinder', level: 2 }
    },
    {
      id: 'eq-cyl',
      type: 'equation',
      data: {
        html: 'SA = 2πr² + 2πrh = 2πr(r + h)',
        caption: 'Surface area of a cylinder (two circles + curved surface)'
      }
    },
    {
      id: 'h-cone',
      type: 'heading',
      data: { text: 'Cone', level: 2 }
    },
    {
      id: 'eq-cone',
      type: 'equation',
      data: {
        html: 'SA = πr² + πrl',
        caption: 'Surface area of a cone (base + curved surface, l = slant height)'
      }
    },
    {
      id: 'p-cone-slant',
      type: 'paragraph',
      data: { text: 'The <strong>slant height</strong> l can be found from the perpendicular height h and radius r using Pythagoras: l² = r² + h².' }
    },
    {
      id: 'h-sphere',
      type: 'heading',
      data: { text: 'Sphere', level: 2 }
    },
    {
      id: 'eq-sphere',
      type: 'equation',
      data: {
        html: 'SA = 4πr²',
        caption: 'Surface area of a sphere'
      }
    },
    {
      id: 'h-pyramid',
      type: 'heading',
      data: { text: 'Pyramid', level: 2 }
    },
    {
      id: 'p-pyramid',
      type: 'paragraph',
      data: { text: 'Surface area of a pyramid = base area + sum of all triangular face areas. For a square-based pyramid with base side <em>a</em> and slant height <em>l</em>: SA = a² + 2al.' }
    },
    {
      id: 'table-sa',
      type: 'comparisonTable',
      data: {
        caption: 'Surface area formulae summary',
        headers: ['Shape', 'Formula'],
        rows: [
          ['Cuboid', 'SA = 2(lw + lh + wh)'],
          ['Cylinder', 'SA = 2πr² + 2πrh'],
          ['Cone', 'SA = πr² + πrl'],
          ['Sphere', 'SA = 4πr²'],
          ['Square pyramid', 'SA = a² + 2al']
        ]
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Read the question carefully — does it ask for the <strong>total</strong> surface area or the <strong>curved</strong> surface area only? For an open-top cylinder, don\'t include one of the circles.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Surface area is the total area of all faces of a 3D shape. Know the formulae for cuboids, cylinders, cones, spheres and pyramids. Check whether the question asks for total or curved surface area.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-cyl', prompt: 'State the surface area formula for a cylinder.', answer: 'SA = 2πr² + 2πrh (two circles plus the curved surface).' },
      { id: 'cue-2', blockId: 'eq-sphere', prompt: 'State the surface area formula for a sphere.', answer: 'SA = 4πr².' },
      { id: 'cue-3', blockId: 'eq-cone', prompt: 'State the surface area formula for a cone.', answer: 'SA = πr² + πrl (base circle plus curved surface using slant height l).' },
      { id: 'cue-4', blockId: 'p-cone-slant', prompt: 'How do you find the slant height of a cone?', answer: 'Using Pythagoras: l² = r² + h², so l = √(r² + h²).' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What should you check before calculating surface area?', answer: 'Whether the question asks for total surface area or curved surface area only.' }
    ],
    summaryText: 'Surface area is the sum of all faces of a 3D shape. Key formulae: cylinder 2πr²+2πrh, sphere 4πr², cone πr²+πrl.',
    ready: true
  },
  evidence: []
};
