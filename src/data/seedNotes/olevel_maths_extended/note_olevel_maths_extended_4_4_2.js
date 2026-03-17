export const note_olevel_maths_extended_4_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/planes-of-symmetry.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Identify planes of symmetry in 3D solids including cuboids, prisms, pyramids and cylinders.'
      }
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What Is a Plane of Symmetry?', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: {
        text: 'A <strong>plane of symmetry</strong> is a flat surface that divides a 3D solid into two halves that are mirror images of each other. It is the 3D equivalent of a line of symmetry in 2D.'
      }
    },
    {
      id: 'callout-key-concept',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Mirror-Image Test',
        text: 'If you could place a mirror along the plane, each half combined with its reflection would produce the complete solid. Every point on one half has a corresponding mirror-image point on the other half, equidistant from the plane.'
      }
    },
    {
      id: 'h-cuboid',
      type: 'heading',
      data: { text: 'Planes of Symmetry in a Cuboid', level: 2 }
    },
    {
      id: 'p-cuboid',
      type: 'paragraph',
      data: {
        text: 'A general cuboid (where length ≠ width ≠ height) has <strong>3 planes of symmetry</strong>. Each plane passes through two opposite faces, cutting the solid in half. A cube, being a special cuboid, has <strong>9 planes of symmetry</strong>: 3 through opposite face centres and 6 diagonal planes through opposite edges.'
      }
    },
    {
      id: 'h-prisms',
      type: 'heading',
      data: { text: 'Planes of Symmetry in Prisms', level: 2 }
    },
    {
      id: 'p-prisms',
      type: 'paragraph',
      data: {
        text: 'A prism has a uniform cross-section. The number of planes of symmetry depends on the symmetry of that cross-section.'
      }
    },
    {
      id: 'table-prisms',
      type: 'comparisonTable',
      data: {
        caption: 'Planes of symmetry for common prisms',
        headers: ['Prism', 'Planes of Symmetry'],
        rows: [
          ['Triangular prism (equilateral cross-section)', '4 (3 lengthwise through apex to midpoint of base edge + 1 perpendicular to length)'],
          ['Triangular prism (isosceles cross-section)', '2 (1 lengthwise through apex + 1 perpendicular to length)'],
          ['Hexagonal prism (regular)', '7 (6 lengthwise + 1 perpendicular)'],
          ['Cylinder', 'Infinite (any plane through the central axis + 1 perpendicular through the centre)']
        ]
      }
    },
    {
      id: 'h-pyramids',
      type: 'heading',
      data: { text: 'Planes of Symmetry in Pyramids', level: 2 }
    },
    {
      id: 'list-pyramids',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Square-based pyramid</strong> — 4 planes: 2 through opposite edges of the base, 2 through midpoints of opposite base edges.' },
          { text: '<strong>Triangular-based pyramid (regular tetrahedron)</strong> — 6 planes, each passing through one edge and the midpoint of the opposite edge.' },
          { text: '<strong>Cone</strong> — infinite planes, all passing through the apex and the centre of the base.' }
        ]
      }
    },
    {
      id: 'h-sphere',
      type: 'heading',
      data: { text: 'The Sphere', level: 2 }
    },
    {
      id: 'p-sphere',
      type: 'paragraph',
      data: {
        text: 'A sphere has an <strong>infinite</strong> number of planes of symmetry — any plane passing through the centre divides it into two equal hemispheres.'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: '<strong>Q:</strong> How many planes of symmetry does a cylinder have?<br/><br/><strong>A:</strong> A cylinder has infinitely many planes of symmetry:<br/>• Any plane containing the central axis of the cylinder (there are infinitely many such planes).<br/>• One additional plane perpendicular to the axis, midway between the two circular faces.<br/>Total: <strong>infinite</strong>.'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When asked to draw or describe a plane of symmetry, sketch the 3D solid and shade the plane. Indicate with dotted lines where the plane passes through hidden edges. Always check both halves are genuine mirror images.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'A plane of symmetry divides a 3D solid into two mirror-image halves. A cuboid has 3 planes; a cube has 9. Cylinders, cones and spheres have infinitely many. Count planes by checking each possible slice produces two identical mirror halves.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-definition', prompt: 'What is a plane of symmetry?' },
      { id: 'cue-2', blockId: 'p-cuboid', prompt: 'How many planes of symmetry does a cuboid have? How about a cube?' },
      { id: 'cue-3', blockId: 'table-prisms', prompt: 'How many planes of symmetry does a cylinder have?' },
      { id: 'cue-4', blockId: 'list-pyramids', prompt: 'How many planes of symmetry does a square-based pyramid have?' },
      { id: 'cue-5', blockId: 'p-sphere', prompt: 'How many planes of symmetry does a sphere have?' }
    ],
    summaryText: 'A plane of symmetry slices a 3D solid into two mirror-image halves. Know the counts for cuboids, cubes, prisms, pyramids, cones, cylinders and spheres.',
    ready: true
  },
  evidence: []
};
