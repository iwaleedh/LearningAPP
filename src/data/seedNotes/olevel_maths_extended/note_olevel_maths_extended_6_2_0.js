export const note_olevel_maths_extended_6_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/the-sine-rule.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the sine rule to find missing sides and angles in non-right-angled triangles, including the ambiguous case.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The Sine Rule', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>sine rule</strong> can be used in <em>any</em> triangle (not just right-angled). It connects each side with the sine of its opposite angle.' }
    },
    {
      id: 'eq-sine-sides',
      type: 'equation',
      data: {
        html: '<span class="nb-frac"><span class="nb-num">a</span><span class="nb-den">sin A</span></span> = <span class="nb-frac"><span class="nb-num">b</span><span class="nb-den">sin B</span></span> = <span class="nb-frac"><span class="nb-num">c</span><span class="nb-den">sin C</span></span>',
        caption: 'Sine rule — for finding a side'
      }
    },
    {
      id: 'eq-sine-angles',
      type: 'equation',
      data: {
        html: '<span class="nb-frac"><span class="nb-num">sin A</span><span class="nb-den">a</span></span> = <span class="nb-frac"><span class="nb-num">sin B</span><span class="nb-den">b</span></span> = <span class="nb-frac"><span class="nb-num">sin C</span><span class="nb-den">c</span></span>',
        caption: 'Sine rule — for finding an angle (flip the fractions)'
      }
    },
    {
      id: 'h-when',
      type: 'heading',
      data: { text: 'When to Use the Sine Rule', level: 2 }
    },
    {
      id: 'p-when',
      type: 'paragraph',
      data: { text: 'Use the sine rule when you know <strong>a side and its opposite angle</strong> plus one other side or angle. You always need a matched pair (side + opposite angle).' }
    },
    {
      id: 'callout-worked-side',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding a Side',
        text: 'In triangle ABC: A = 42°, B = 73°, a = 10 cm. Find b.<br><br><strong>Solution:</strong><br>b / sin B = a / sin A<br>b / sin 73° = 10 / sin 42°<br>b = (10 × sin 73°) / sin 42°<br>b = (10 × 0.9563) / 0.6691<br>b = <strong>14.3 cm</strong> (3 s.f.)'
      }
    },
    {
      id: 'callout-worked-angle',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding an Angle',
        text: 'In triangle PQR: p = 8 cm, q = 11 cm, P = 35°. Find angle Q.<br><br><strong>Solution:</strong><br>sin Q / q = sin P / p<br>sin Q / 11 = sin 35° / 8<br>sin Q = (11 × sin 35°) / 8<br>sin Q = 0.7884<br>Q = sin⁻¹(0.7884) = <strong>52.0°</strong> (1 d.p.)'
      }
    },
    {
      id: 'h-ambiguous',
      type: 'heading',
      data: { text: 'The Ambiguous Case', level: 2 }
    },
    {
      id: 'p-ambiguous',
      type: 'paragraph',
      data: { text: 'When finding an <strong>angle</strong> using the sine rule, there may be <strong>two possible answers</strong> because sin θ = sin(180° − θ). Check whether the obtuse angle (180° − θ) is valid by adding it to the known angles — if the total exceeds 180°, only the acute angle works.' }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Ambiguous Case',
        text: 'The ambiguous case occurs when you are given two sides and an angle <strong>opposite the shorter side</strong> (SSA). Always check if 180° − your answer also gives a valid triangle.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Finding a side &rarr; put sides on top. Finding an angle &rarr; put sines on top. Only use two of the three fractions at a time.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'The sine rule: a/sin A = b/sin B = c/sin C. Use when you have a matched pair (side + opposite angle). When finding angles, check for the ambiguous case (two possible solutions).' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-sine-sides', prompt: 'State the sine rule.', answer: 'a/sin A = b/sin B = c/sin C.' },
      { id: 'cue-2', blockId: 'p-when', prompt: 'When do you use the sine rule?', answer: 'When you know a matched pair (a side and its opposite angle) plus one more piece of information.' },
      { id: 'cue-3', blockId: 'p-ambiguous', prompt: 'What is the ambiguous case of the sine rule?', answer: 'When finding an angle, sin θ = sin(180°−θ) gives two possible answers. Check both are valid.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'How do you decide which version of the sine rule to use?', answer: 'Finding a side &rarr; sides on top. Finding an angle &rarr; sines on top.' }
    ],
    summaryText: 'The sine rule relates sides and opposite angles: a/sinA = b/sinB = c/sinC. Watch for the ambiguous case when finding angles.',
    ready: true
  },
  evidence: []
};
