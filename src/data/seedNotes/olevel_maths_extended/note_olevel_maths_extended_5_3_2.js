export const note_olevel_maths_extended_5_3_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/problem-solving-with-volumes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve multi-step volume problems including composite solids, unit conversions, and capacity.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Problem Solving with Volumes', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'Volume problems at IGCSE often combine shapes, require conversion between cm³ and litres, or ask you to find a missing dimension when the volume is known.' }
    },
    {
      id: 'h-composite',
      type: 'heading',
      data: { text: 'Composite Solids', level: 2 }
    },
    {
      id: 'p-composite',
      type: 'paragraph',
      data: { text: 'A <strong>composite solid</strong> is made from two or more basic 3D shapes. Find the volume of each part and add (or subtract for hollowed-out shapes).' }
    },
    {
      id: 'callout-worked-composite',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Composite Solid',
        text: 'A solid is formed by placing a hemisphere of radius 3 cm on top of a cylinder of radius 3 cm and height 10 cm. Find the total volume.<br><br><strong>Solution:</strong><br>Cylinder: V = π × 3² × 10 = 90π cm³<br>Hemisphere: V = ⅔ × π × 3³ = 18π cm³<br>Total = 90π + 18π = 108π = <strong>339 cm³</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-conversions',
      type: 'heading',
      data: { text: 'Volume and Capacity Conversions', level: 2 }
    },
    {
      id: 'list-conversions',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '1 litre = 1000 cm³' },
          { text: '1 ml = 1 cm³' },
          { text: '1 m³ = 1 000 000 cm³' },
          { text: '1 m³ = 1000 litres' }
        ]
      }
    },
    {
      id: 'callout-worked-capacity',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Volume to Capacity',
        text: 'A cylindrical tank has radius 40 cm and height 1.2 m. Find its capacity in litres.<br><br><strong>Solution:</strong><br>Convert height: 1.2 m = 120 cm<br>V = π × 40² × 120 = 192 000π cm³<br>V = 603 186 cm³ (to nearest whole)<br>Capacity = 603 186 ÷ 1000 = <strong>603 litres</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-missing',
      type: 'heading',
      data: { text: 'Finding Missing Dimensions', level: 2 }
    },
    {
      id: 'p-missing',
      type: 'paragraph',
      data: { text: 'When volume is given and a dimension is unknown, substitute into the formula and rearrange to solve for the missing value.' }
    },
    {
      id: 'callout-worked-missing',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding Radius',
        text: 'A sphere has volume 288π cm³. Find its radius.<br><br><strong>Solution:</strong><br>V = ⁴⁄₃πr³<br>288π = ⁴⁄₃πr³<br>288 = ⁴⁄₃r³<br>r³ = 288 × ¾ = 216<br>r = ∛216 = <strong>6 cm</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Volume Unit Conversions',
        text: 'To convert volume units, <strong>cube</strong> the linear factor: 1 m = 100 cm &rarr; 1 m³ = 100³ = 1 000 000 cm³. For capacity, remember 1 litre = 1000 cm³.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'When finding a missing dimension, keep the answer in exact form (e.g. with π) as long as possible before rounding. This avoids rounding errors in intermediate steps.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Volume problem solving: composite solids (add/subtract volumes), capacity conversions (1 L = 1000 cm³, 1 m³ = 1 000 000 cm³), and reverse problems (rearrange the formula to find missing dimensions).' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-composite', prompt: 'How do you find the volume of a composite solid?', answer: 'Find the volume of each component shape and add (or subtract for hollowed parts).' },
      { id: 'cue-2', blockId: 'list-conversions', prompt: 'How many cm³ are in 1 litre?', answer: '1000 cm³.' },
      { id: 'cue-3', blockId: 'callout-key', prompt: 'How do you convert volume units (e.g. m³ to cm³)?', answer: 'Cube the linear factor: 1 m = 100 cm &rarr; 1 m³ = 100³ = 1 000 000 cm³.' },
      { id: 'cue-4', blockId: 'p-missing', prompt: 'How do you find a missing dimension when volume is given?', answer: 'Substitute known values into the volume formula and rearrange to solve for the unknown.' }
    ],
    summaryText: 'Solve volume problems using composite solids, capacity conversions (1 L = 1000 cm³), and rearranging formulae for missing dimensions.',
    ready: true
  },
  evidence: []
};
