export const note_olevel_maths_extended_6_2_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/deciding-the-trig-rule.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Choose the correct trigonometric rule (SOHCAHTOA, sine rule, cosine rule, or area formula) for a given triangle problem.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Deciding Which Trig Rule to Use', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'One of the most important IGCSE skills is recognising <strong>which rule or formula</strong> applies to a given triangle problem. Start by identifying what you know and what you need to find.' }
    },
    {
      id: 'h-decision',
      type: 'heading',
      data: { text: 'Decision Flowchart', level: 2 }
    },
    {
      id: 'list-decision',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: '<strong>Is the triangle right-angled?</strong> &rarr; If yes, use <strong>Pythagoras</strong> (for sides only) or <strong>SOHCAHTOA</strong> (sides and angles).' },
          { text: '<strong>Do you have a matched pair (side + opposite angle)?</strong> &rarr; If yes, use the <strong>sine rule</strong>.' },
          { text: '<strong>Do you have SAS (2 sides + included angle)?</strong> &rarr; Use the <strong>cosine rule</strong> to find the third side, or A = ½ab sin C for area.' },
          { text: '<strong>Do you have SSS (3 sides)?</strong> &rarr; Use the <strong>cosine rule</strong> rearranged to find an angle.' }
        ]
      }
    },
    {
      id: 'table-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Which rule to use',
        headers: ['Given Information', 'Rule', 'What You Can Find'],
        rows: [
          ['Right angle + 2 sides', 'Pythagoras', 'Missing side'],
          ['Right angle + 1 side + 1 angle', 'SOHCAHTOA', 'Missing side or angle'],
          ['Side + opposite angle + 1 more', 'Sine rule', 'Missing side or angle'],
          ['2 sides + included angle (SAS)', 'Cosine rule', 'Third side'],
          ['2 sides + included angle (SAS)', '½ab sin C', 'Area'],
          ['3 sides (SSS)', 'Cosine rule (rearranged)', 'Any angle']
        ]
      }
    },
    {
      id: 'callout-worked-1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Choosing a Rule',
        text: 'In triangle XYZ: x = 15 cm, y = 20 cm, angle Z = 48°. Find side z.<br><br><strong>Decision:</strong> Not right-angled. Two sides and the included angle &rarr; <strong>Cosine rule</strong>.<br><br>z² = 15² + 20² − 2(15)(20) cos 48°<br>z² = 225 + 400 − 600 × 0.6691<br>z² = 625 − 401.5 = 223.5<br>z = <strong>14.9 cm</strong> (3 s.f.)'
      }
    },
    {
      id: 'callout-worked-2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Multi-Step',
        text: 'In triangle ABC: a = 8 cm, B = 62°, C = 45°. Find b and the area.<br><br><strong>Step 1:</strong> Find A: A = 180° − 62° − 45° = 73°<br><strong>Step 2:</strong> Use sine rule: b/sin 62° = 8/sin 73°<br>b = 8 sin 62° / sin 73° = <strong>7.39 cm</strong><br><strong>Step 3:</strong> Area = ½ × a × b × sin C = ½ × 8 × 7.39 × sin 45° = <strong>20.9 cm²</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always sketch the triangle and label all known sides and angles first. This makes it much easier to identify the correct rule. Show which rule you are using for method marks.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Don\'t use SOHCAHTOA on a non-right-angled triangle! If there\'s no right angle, you <strong>must</strong> use the sine rule, cosine rule, or area formula.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Right-angled &rarr; Pythagoras or SOHCAHTOA. Non-right-angled with a matched pair &rarr; sine rule. SAS &rarr; cosine rule (side) or ½ab sinC (area). SSS &rarr; cosine rule rearranged for an angle.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'list-decision', prompt: 'When do you use the sine rule?', answer: 'When you have a matched pair (a side and its opposite angle) plus one more piece of information.' },
      { id: 'cue-2', blockId: 'list-decision', prompt: 'When do you use the cosine rule?', answer: 'When you have SAS (2 sides + included angle) or SSS (3 sides).' },
      { id: 'cue-3', blockId: 'callout-warning', prompt: 'Can you use SOHCAHTOA on a non-right-angled triangle?', answer: 'No — SOHCAHTOA only works in right-angled triangles.' },
      { id: 'cue-4', blockId: 'table-summary', prompt: 'What information do you need for the area formula ½ab sin C?', answer: 'Two sides and the included angle (SAS).' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'What is the first step in any trig problem?', answer: 'Sketch the triangle and label all known sides and angles.' }
    ],
    summaryText: 'Choose the trig rule based on what is known: right-angle &rarr; Pythagoras/SOHCAHTOA, matched pair &rarr; sine rule, SAS/SSS &rarr; cosine rule.',
    ready: true
  },
  evidence: []
};
