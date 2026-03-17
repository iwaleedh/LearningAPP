export const note_olevel_maths_extended_5_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/problem-solving-with-areas.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply area formulae to solve real-world and multi-step problems, including reverse problems where the area is given.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Problem Solving with Areas', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Problem-solving questions often require you to combine area formulae with algebra, unit conversions, or other geometrical knowledge. Common types include finding missing lengths when the area is given, comparing areas, and real-life contexts such as tiling or painting.' }
    },
    {
      id: 'h-reverse',
      type: 'heading',
      data: { text: 'Reverse Problems — Finding a Missing Length', level: 2 }
    },
    {
      id: 'p-reverse',
      type: 'paragraph',
      data: { text: 'When the area is given and a dimension is unknown, substitute into the formula and solve for the missing value.' }
    },
    {
      id: 'callout-worked-reverse',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding Height',
        text: 'A triangle has area 36 cm² and base 9 cm. Find its perpendicular height.<br><br><strong>Solution:</strong><br>A = ½ × b × h<br>36 = ½ × 9 × h<br>36 = 4.5h<br>h = 36 ÷ 4.5<br>h = <strong>8 cm</strong>'
      }
    },
    {
      id: 'h-unit-conv',
      type: 'heading',
      data: { text: 'Unit Conversions for Area', level: 2 }
    },
    {
      id: 'list-conversions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '1 m² = 10 000 cm² (100 × 100)' },
          { text: '1 km² = 1 000 000 m² (1000 × 1000)' },
          { text: '1 hectare = 10 000 m²' }
        ]
      }
    },
    {
      id: 'callout-worked-context',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Real-Life Context',
        text: 'A rectangular wall measures 4.5 m by 3 m. Paint covers 12 m² per litre. How many litres are needed?<br><br><strong>Solution:</strong><br>Area = 4.5 × 3 = 13.5 m²<br>Litres = 13.5 ÷ 12 = 1.125<br>You must buy <strong>2 litres</strong> (round up — you cannot buy part of a tin)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'In context questions, always <strong>round up</strong> when buying materials (paint, tiles, carpet). You cannot buy a fraction of a tin or tile. State the reason for rounding.'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point',
        text: 'For area unit conversions, the conversion factor is <strong>squared</strong>. E.g. 1 m = 100 cm, so 1 m² = 100² = 10 000 cm².'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Problem solving with areas involves reverse problems (given area, find length), unit conversions (square the linear factor), and real-life contexts where rounding up is essential for buying materials.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-reverse', prompt: 'How do you find a missing length when the area is given?', answer: 'Substitute the known values into the area formula and solve for the unknown.' },
      { id: 'cue-2', blockId: 'list-conversions', prompt: 'How many cm² are in 1 m²?', answer: '10 000 cm² (since 1 m = 100 cm, 100² = 10 000).' },
      { id: 'cue-3', blockId: 'callout-tip', prompt: 'Why do you round up when buying materials in area problems?', answer: 'You cannot buy part of a tile, tin of paint etc., so you must buy the next whole number.' },
      { id: 'cue-4', blockId: 'callout-key', prompt: 'How do you convert area units?', answer: 'Square the linear conversion factor. E.g. 1 m = 100 cm &rarr; 1 m² = 10 000 cm².' }
    ],
    summaryText: 'Solve area problems by rearranging formulae, squaring conversion factors for units, and rounding up in real-life contexts.',
    ready: true
  },
  evidence: []
};
