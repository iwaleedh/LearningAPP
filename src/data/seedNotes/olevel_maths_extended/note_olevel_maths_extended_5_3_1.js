export const note_olevel_maths_extended_5_3_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/volume.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the volume of prisms, cylinders, cones, spheres and pyramids using standard formulae.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Volume of 3D Shapes', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: '<strong>Volume</strong> measures the amount of 3D space a solid occupies. It is measured in <strong>cubic units</strong> (cm³, m³). For prisms, volume = cross-section area × length.' }
    },
    {
      id: 'h-cuboid',
      type: 'heading',
      data: { text: 'Cuboid', level: 2 }
    },
    {
      id: 'eq-cuboid',
      type: 'equation',
      data: {
        html: 'V = l × w × h',
        caption: 'Volume of a cuboid'
      }
    },
    {
      id: 'h-prism',
      type: 'heading',
      data: { text: 'Prism', level: 2 }
    },
    {
      id: 'eq-prism',
      type: 'equation',
      data: {
        html: 'V = A × l',
        caption: 'Volume of any prism (A = cross-section area, l = length)'
      }
    },
    {
      id: 'callout-worked-prism',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Triangular Prism',
        text: 'A triangular prism has a cross-section that is a triangle with base 6 cm and height 4 cm. The prism is 10 cm long. Find its volume.<br><br><strong>Solution:</strong><br>Cross-section area = ½ × 6 × 4 = 12 cm²<br>V = 12 × 10 = <strong>120 cm³</strong>'
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
        html: 'V = πr²h',
        caption: 'Volume of a cylinder'
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
        html: 'V = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span>πr²h',
        caption: 'Volume of a cone'
      }
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
        html: 'V = <span class="nb-frac"><span class="nb-num">4</span><span class="nb-den">3</span></span>πr³',
        caption: 'Volume of a sphere'
      }
    },
    {
      id: 'h-pyramid',
      type: 'heading',
      data: { text: 'Pyramid', level: 2 }
    },
    {
      id: 'eq-pyramid',
      type: 'equation',
      data: {
        html: 'V = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">3</span></span> × base area × h',
        caption: 'Volume of a pyramid'
      }
    },
    {
      id: 'table-vol',
      type: 'comparisonTable',
      data: {
        caption: 'Volume formulae summary',
        headers: ['Shape', 'Formula', 'Note'],
        rows: [
          ['Cuboid', 'V = lwh', 'Special case of prism'],
          ['Prism', 'V = A × l', 'A = cross-section area'],
          ['Cylinder', 'V = πr²h', 'Circular prism'],
          ['Cone', 'V = ⅓πr²h', '⅓ of a cylinder'],
          ['Sphere', 'V = ⁴⁄₃πr³', 'Uses r cubed'],
          ['Pyramid', 'V = ⅓ × base area × h', '⅓ of a prism']
        ]
      }
    },
    {
      id: 'callout-key-third',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — The ⅓ Factor',
        text: 'Cones and pyramids have volume that is <strong>one-third</strong> of the corresponding prism/cylinder with the same base and height. A hemisphere is half a sphere: V = ⅔πr³.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Volume formulae for cones, spheres and pyramids are given on the IGCSE formula sheet. Make sure you can identify which formula to use and substitute correctly.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Volume = space inside a 3D shape. Prisms: V = Ah. Cylinder: V = πr²h. Cone: V = ⅓πr²h. Sphere: V = ⁴⁄₃πr³. Pyramid: V = ⅓ × base area × h. Cones and pyramids are ⅓ of the equivalent prism.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-prism', prompt: 'State the volume formula for any prism.', answer: 'V = cross-section area × length.' },
      { id: 'cue-2', blockId: 'eq-sphere', prompt: 'State the volume formula for a sphere.', answer: 'V = ⁴⁄₃πr³.' },
      { id: 'cue-3', blockId: 'eq-cone', prompt: 'State the volume formula for a cone.', answer: 'V = ⅓πr²h.' },
      { id: 'cue-4', blockId: 'callout-key-third', prompt: 'What is the relationship between the volume of a cone and a cylinder?', answer: 'A cone has ⅓ the volume of a cylinder with the same base and height.' },
      { id: 'cue-5', blockId: 'eq-cyl', prompt: 'State the volume formula for a cylinder.', answer: 'V = πr²h.' }
    ],
    summaryText: 'Volume measures 3D space: prisms use V = Ah, cones & pyramids are ⅓ of the equivalent prism, sphere V = ⁴⁄₃πr³.',
    ready: true
  },
  evidence: []
};
