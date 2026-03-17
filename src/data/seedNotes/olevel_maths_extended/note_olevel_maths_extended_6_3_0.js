export const note_olevel_maths_extended_6_3_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/3d-pythagoras-and-trigonometry.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply Pythagoras\' theorem and trigonometry to solve problems in three-dimensional shapes.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: '3D Pythagoras and Trigonometry', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'In 3D problems, you need to identify <strong>right-angled triangles within the solid</strong> and then apply Pythagoras\' theorem or SOHCAHTOA to those 2D triangles. The key skill is visualising and extracting the correct triangle.' }
    },
    {
      id: 'h-3d-pythag',
      type: 'heading',
      data: { text: '3D Pythagoras\' Theorem', level: 2 }
    },
    {
      id: 'p-3d-pythag',
      type: 'paragraph',
      data: { text: 'For the space diagonal of a cuboid with dimensions l, w, h:' }
    },
    {
      id: 'eq-3d',
      type: 'equation',
      data: {
        html: 'd² = l² + w² + h²',
        caption: 'Space diagonal of a cuboid'
      }
    },
    {
      id: 'p-3d-explain',
      type: 'paragraph',
      data: { text: 'This comes from applying Pythagoras twice: first find the diagonal of the base (l² + w²), then use that as one side of a vertical right-angled triangle to find the space diagonal.' }
    },
    {
      id: 'callout-worked-cuboid',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Space Diagonal',
        text: 'Find the length of the space diagonal of a cuboid measuring 3 cm × 4 cm × 12 cm.<br><br><strong>Solution:</strong><br>d² = 3² + 4² + 12²<br>d² = 9 + 16 + 144 = 169<br>d = √169 = <strong>13 cm</strong>'
      }
    },
    {
      id: 'h-3d-trig',
      type: 'heading',
      data: { text: 'Angles in 3D Shapes', level: 2 }
    },
    {
      id: 'p-3d-trig',
      type: 'paragraph',
      data: { text: 'To find an angle in a 3D problem, identify a right-angled triangle that contains the angle and use SOHCAHTOA.' }
    },
    {
      id: 'list-strategy',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Draw or identify the 3D shape clearly.' },
          { text: 'Identify the right-angled triangle that contains the angle or length you need.' },
          { text: 'Find any intermediate lengths using Pythagoras (e.g. face diagonal first).' },
          { text: 'Apply SOHCAHTOA to the triangle to find the required angle or length.' }
        ]
      }
    },
    {
      id: 'callout-worked-angle',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Angle in a Cuboid',
        text: 'A cuboid is 6 cm long, 4 cm wide and 3 cm tall. Find the angle the space diagonal makes with the base.<br><br><strong>Step 1:</strong> Base diagonal = √(6² + 4²) = √(36 + 16) = √52<br><strong>Step 2:</strong> The angle θ is in a right-angled triangle with base diagonal √52 (adjacent) and height 3 (opposite).<br>tan θ = 3/√52 = 3/7.211<br>θ = tan⁻¹(0.4160) = <strong>22.6°</strong> (1 d.p.)'
      }
    },
    {
      id: 'h-pyramid-cone',
      type: 'heading',
      data: { text: 'Pyramids and Cones', level: 2 }
    },
    {
      id: 'p-pyramid',
      type: 'paragraph',
      data: { text: 'In a pyramid or cone, common 3D tasks include finding the slant height from the perpendicular height and base radius/half-diagonal, or finding the angle between a slant edge and the base.' }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always <strong>sketch the right-angled triangle</strong> you are using separately from the 3D diagram. Label all three sides and the angle clearly. This avoids confusion and earns method marks.'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point',
        text: 'The <strong>angle between a line and a plane</strong> is found by dropping a perpendicular from the line to the plane, then using trig in the resulting right-angled triangle.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '3D trig problems reduce to 2D right-angled triangles. Use d² = l² + w² + h² for space diagonals. Extract the triangle containing the required angle or length, find intermediate lengths with Pythagoras, then apply SOHCAHTOA.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-3d', prompt: 'State the formula for the space diagonal of a cuboid.', answer: 'd² = l² + w² + h² (or d = √(l² + w² + h²)).' },
      { id: 'cue-2', blockId: 'p-3d-explain', prompt: 'Why does 3D Pythagoras use l² + w² + h²?', answer: 'You apply Pythagoras twice: first to find the base diagonal, then using the height to find the space diagonal.' },
      { id: 'cue-3', blockId: 'list-strategy', prompt: 'What is the key strategy for 3D trig problems?', answer: 'Identify and extract a right-angled triangle from the 3D shape, then apply 2D methods.' },
      { id: 'cue-4', blockId: 'callout-key', prompt: 'How do you find the angle between a line and a plane?', answer: 'Drop a perpendicular from the line to the plane and use trig in the resulting right-angled triangle.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What should you always draw in 3D trig questions?', answer: 'The right-angled triangle separately, with all sides and the angle labelled clearly.' }
    ],
    summaryText: '3D problems reduce to 2D right-angled triangles. Space diagonal: d²=l²+w²+h². Extract triangles, find intermediate lengths, then use SOHCAHTOA.',
    ready: true
  },
  evidence: []
};
