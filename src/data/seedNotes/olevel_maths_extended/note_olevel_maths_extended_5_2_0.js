export const note_olevel_maths_extended_5_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Lengths Areas And Volumes/area-and-circumference-of-circles.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate the area and circumference of circles using A = πr² and C = πd = 2πr.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Area and Circumference of Circles', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>circumference</strong> is the distance around a circle (its perimeter). The <strong>area</strong> is the space enclosed. Both depend on the <strong>radius</strong> (r) or <strong>diameter</strong> (d = 2r).' }
    },
    {
      id: 'h-circumference',
      type: 'heading',
      data: { text: 'Circumference', level: 2 }
    },
    {
      id: 'eq-circ',
      type: 'equation',
      data: {
        html: 'C = πd = 2πr',
        caption: 'Circumference of a circle'
      }
    },
    {
      id: 'h-area',
      type: 'heading',
      data: { text: 'Area', level: 2 }
    },
    {
      id: 'eq-area',
      type: 'equation',
      data: {
        html: 'A = πr²',
        caption: 'Area of a circle'
      }
    },
    {
      id: 'callout-key-rd',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Radius vs Diameter',
        text: 'If you are given the diameter, <strong>halve it</strong> to get the radius before using A = πr². A common error is to substitute the diameter directly.'
      }
    },
    {
      id: 'callout-worked-area',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Area',
        text: 'Find the area of a circle with diameter 18 cm. Give your answer to 3 significant figures.<br><br><strong>Solution:</strong><br>r = 18 ÷ 2 = 9 cm<br>A = π × 9²<br>A = 81π<br>A = <strong>254 cm²</strong> (3 s.f.)'
      }
    },
    {
      id: 'callout-worked-circ',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Circumference',
        text: 'A circular pond has radius 3.5 m. Find its circumference.<br><br><strong>Solution:</strong><br>C = 2πr<br>C = 2 × π × 3.5<br>C = 7π<br>C = <strong>22.0 m</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-semicircle',
      type: 'heading',
      data: { text: 'Semicircles and Quarter Circles', level: 2 }
    },
    {
      id: 'p-semicircle',
      type: 'paragraph',
      data: { text: 'For a <strong>semicircle</strong> (half a circle): area = ½πr², perimeter = πr + 2r (curved part + diameter). For a <strong>quarter circle</strong>: area = ¼πr², perimeter = ½πr + 2r.' }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Leave answers in terms of π when asked for an <strong>exact</strong> answer. Otherwise, use the π button on your calculator and round as instructed.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Circle circumference: C = πd = 2πr. Circle area: A = πr². Remember to halve the diameter to get the radius. Semicircle area = ½πr². Leave answers in terms of π for exact values.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-circ', prompt: 'State the formula for the circumference of a circle.', answer: 'C = πd or C = 2πr.' },
      { id: 'cue-2', blockId: 'eq-area', prompt: 'State the formula for the area of a circle.', answer: 'A = πr².' },
      { id: 'cue-3', blockId: 'callout-key-rd', prompt: 'What common mistake do students make when finding the area given the diameter?', answer: 'Substituting the diameter instead of the radius into A = πr².' },
      { id: 'cue-4', blockId: 'p-semicircle', prompt: 'What is the perimeter of a semicircle?', answer: 'πr + 2r (the curved arc plus the diameter).' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'When should you leave your answer in terms of π?', answer: 'When the question asks for an exact answer.' }
    ],
    summaryText: 'Use C = πd for circumference and A = πr² for area of circles; always convert diameter to radius first.',
    ready: true
  },
  evidence: []
};
