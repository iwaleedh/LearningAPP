export const note_olevel_maths_core_5_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Lengths Areas And Volumes/surface-area.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Calculate the total surface area of cuboids, cylinders, cones, and spheres. Identify all faces, find each face\'s area, and sum them.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'What is Surface Area?', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: '<b>Surface area</b> is the total area of all the outer faces of a 3D shape. It is measured in <b>square units</b> (cm², m², etc.). To find it: identify all faces, find the area of each face, then add them all up.',
      },
    },
    {
      id: 'h-cuboid',
      type: 'heading',
      data: { text: 'Cuboid', level: 2 },
    },
    {
      id: 'p-cuboid',
      type: 'paragraph',
      data: {
        text: 'A cuboid has 6 rectangular faces: two of each type (top/bottom, front/back, left/right).',
      },
    },
    {
      id: 'eq-cuboid',
      type: 'equation',
      data: {
        html: 'SA = 2(lw + lh + wh)',
        caption: 'Surface area of a cuboid (l = length, w = width, h = height)',
      },
    },
    {
      id: 'h-cylinder',
      type: 'heading',
      data: { text: 'Cylinder', level: 2 },
    },
    {
      id: 'p-cylinder',
      type: 'paragraph',
      data: {
        text: 'A cylinder has two circular ends and one curved lateral surface. When unrolled, the lateral surface forms a rectangle with width = circumference = 2πr and height = h.',
      },
    },
    {
      id: 'eq-cylinder',
      type: 'equation',
      data: {
        html: 'SA = 2πrh + 2πr²',
        caption: 'Total surface area of a cylinder (curved surface + 2 circles)',
      },
    },
    {
      id: 'eq-cylinder-curved',
      type: 'equation',
      data: {
        html: 'Curved surface area = 2πrh',
        caption: 'Curved surface area only (open cylinder / no ends)',
      },
    },
    {
      id: 'h-cone',
      type: 'heading',
      data: { text: 'Cone', level: 2 },
    },
    {
      id: 'p-cone',
      type: 'paragraph',
      data: {
        text: 'A cone has a circular base and a curved lateral surface. The lateral surface depends on the <b>slant height l</b> (not the perpendicular height h). Use Pythagoras to find l if not given: <b>l = √(r² + h²)</b>.',
      },
    },
    {
      id: 'eq-cone',
      type: 'equation',
      data: {
        html: 'SA = πrl + πr²',
        caption: 'Total surface area of a cone (l = slant height)',
      },
    },
    {
      id: 'h-sphere',
      type: 'heading',
      data: { text: 'Sphere', level: 2 },
    },
    {
      id: 'eq-sphere',
      type: 'equation',
      data: {
        html: 'SA = 4πr²',
        caption: 'Surface area of a sphere',
      },
    },
    {
      id: 'tbl-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Surface area formulas',
        headers: ['Shape', 'Formula', 'Note'],
        rows: [
          ['Cuboid', 'SA = 2(lw + lh + wh)', 'Sum of 3 pairs of rectangles'],
          ['Cylinder', 'SA = 2πrh + 2πr²', 'Curved + 2 circles'],
          ['Cone', 'SA = πrl + πr²', 'l = slant height; use l = √(r² + h²)'],
          ['Sphere', 'SA = 4πr²', 'One formula for the whole surface'],
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Cuboid',
        text: 'A cuboid is 6 cm × 4 cm × 3 cm. Find the total surface area.<br><br>SA = 2(lw + lh + wh)<br>= 2(6×4 + 6×3 + 4×3)<br>= 2(24 + 18 + 12)<br>= 2 × 54 = <b>108 cm²</b>',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Cylinder',
        text: 'A cylinder has radius 5 cm and height 12 cm. Find the total surface area.<br><br>SA = 2πrh + 2πr²<br>= 2π(5)(12) + 2π(5²)<br>= 120π + 50π<br>= 170π ≈ <b>534 cm²</b> (3 s.f.)',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Cone (find slant height first)',
        text: 'A cone has base radius 6 cm and perpendicular height 8 cm. Find the total surface area.<br><br>First find slant height: l = √(r² + h²) = √(36 + 64) = √100 = 10 cm<br>SA = πrl + πr² = π(6)(10) + π(6²) = 60π + 36π = 96π ≈ <b>302 cm²</b> (3 s.f.)',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Sphere',
        text: 'A sphere has radius 7 cm. Find its surface area.<br><br>SA = 4πr² = 4 × π × 7² = 4 × 49π = 196π ≈ <b>616 cm²</b> (3 s.f.)',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Slant Height vs Perpendicular Height',
        text: 'For a cone, the formula uses <b>slant height l</b>, not the perpendicular height h. If given h, you must first calculate l = √(r² + h²) using Pythagoras\' theorem before finding the curved surface area.',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Some questions ask for just the <b>curved surface area</b> (not including the base or top). Read the question carefully: "curved surface area" = exclude the circular ends; "total surface area" = include everything.',
      },
    },
    {
      id: 'chk-1',
      type: 'checklist',
      data: {
        items: [
          { text: 'I can apply SA = 2(lw + lh + wh) for a cuboid', checked: false },
          { text: 'I can apply SA = 2πrh + 2πr² for a cylinder', checked: false },
          { text: 'I can find slant height l = √(r² + h²) for a cone', checked: false },
          { text: 'I can apply SA = πrl + πr² for a cone', checked: false },
          { text: 'I can apply SA = 4πr² for a sphere', checked: false },
        ],
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Surface area = total of all outer faces. Cuboid: 2(lw+lh+wh). Cylinder: 2πrh+2πr². Cone: πrl+πr² where l = slant height = √(r²+h²). Sphere: 4πr². Always check if the question wants curved only or total surface area.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'SA: cuboid 2(lw+lh+wh), cylinder 2πrh+2πr², cone πrl+πr², sphere 4πr². Cone needs slant height l=√(r²+h²).',
    cues: [
      { id: 'cue-1', blockId: 'eq-cuboid', prompt: 'Write the surface area formula for a cuboid.' },
      { id: 'cue-2', blockId: 'eq-cylinder', prompt: 'Write the total surface area formula for a cylinder.' },
      { id: 'cue-3', blockId: 'p-cone', prompt: 'How do you find the slant height of a cone if you are given the radius and perpendicular height?' },
      { id: 'cue-4', blockId: 'eq-sphere', prompt: 'Write the surface area formula for a sphere.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What is the difference between "curved surface area" and "total surface area" of a cylinder?' },
    ],
  },
  evidence: [],
  mentions: [],
};
