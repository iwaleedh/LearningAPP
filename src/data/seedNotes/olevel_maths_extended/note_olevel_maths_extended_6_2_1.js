export const note_olevel_maths_extended_6_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/the-cosine-rule.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Use the cosine rule to find missing sides and angles in non-right-angled triangles.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'The Cosine Rule', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>cosine rule</strong> is used in any triangle when you know <strong>two sides and the included angle</strong> (SAS), or all <strong>three sides</strong> (SSS). It is a generalisation of Pythagoras\' theorem.' }
    },
    {
      id: 'h-sides',
      type: 'heading',
      data: { text: 'Finding a Side', level: 2 }
    },
    {
      id: 'eq-cosine-side',
      type: 'equation',
      data: {
        html: 'a² = b² + c² − 2bc cos A',
        caption: 'Cosine rule for finding a side'
      }
    },
    {
      id: 'callout-worked-side',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding a Side',
        text: 'In triangle ABC: b = 7 cm, c = 9 cm, A = 52°. Find a.<br><br><strong>Solution:</strong><br>a² = 7² + 9² − 2(7)(9) cos 52°<br>a² = 49 + 81 − 126 × 0.6157<br>a² = 130 − 77.58<br>a² = 52.42<br>a = √52.42 = <strong>7.24 cm</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-angles',
      type: 'heading',
      data: { text: 'Finding an Angle', level: 2 }
    },
    {
      id: 'eq-cosine-angle',
      type: 'equation',
      data: {
        html: 'cos A = <span class="nb-frac"><span class="nb-num">b² + c² − a²</span><span class="nb-den">2bc</span></span>',
        caption: 'Cosine rule rearranged for finding an angle'
      }
    },
    {
      id: 'callout-worked-angle',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Finding an Angle',
        text: 'In triangle ABC: a = 8 cm, b = 6 cm, c = 10 cm. Find angle A.<br><br><strong>Solution:</strong><br>cos A = (6² + 10² − 8²) / (2 × 6 × 10)<br>cos A = (36 + 100 − 64) / 120<br>cos A = 72 / 120 = 0.6<br>A = cos⁻¹(0.6) = <strong>53.1°</strong> (1 d.p.)'
      }
    },
    {
      id: 'h-when',
      type: 'heading',
      data: { text: 'When to Use the Cosine Rule', level: 2 }
    },
    {
      id: 'table-when',
      type: 'comparisonTable',
      data: {
        caption: 'When to use the cosine rule',
        headers: ['Given', 'Find', 'Use'],
        rows: [
          ['2 sides + included angle (SAS)', 'The third side', 'a² = b² + c² − 2bc cos A'],
          ['3 sides (SSS)', 'Any angle', 'cos A = (b² + c² − a²) / 2bc']
        ]
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point',
        text: 'If cos A is negative, the angle is <strong>obtuse</strong> (between 90° and 180°). Unlike the sine rule, the cosine rule has <strong>no ambiguous case</strong> — it always gives a unique answer.'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Make sure the angle in the formula is the angle <strong>between</strong> the two known sides (the included angle). The side you find is the one opposite that angle.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Cosine rule: a² = b² + c² − 2bc cos A (find side) or cos A = (b²+c²−a²)/2bc (find angle). Use with SAS or SSS. No ambiguous case. Negative cosine means an obtuse angle.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'eq-cosine-side', prompt: 'State the cosine rule for finding a side.', answer: 'a² = b² + c² − 2bc cos A.' },
      { id: 'cue-2', blockId: 'eq-cosine-angle', prompt: 'State the cosine rule rearranged for finding an angle.', answer: 'cos A = (b² + c² − a²) / 2bc.' },
      { id: 'cue-3', blockId: 'table-when', prompt: 'When do you use the cosine rule instead of the sine rule?', answer: 'When you have SAS (2 sides + included angle) or SSS (3 sides).' },
      { id: 'cue-4', blockId: 'callout-key', prompt: 'What does it mean if cos A is negative?', answer: 'The angle A is obtuse (between 90° and 180°).' }
    ],
    summaryText: 'Cosine rule: a² = b²+c²−2bc cosA for sides. Rearrange for angles: cosA = (b²+c²−a²)/2bc. Use with SAS or SSS.',
    ready: true
  },
  evidence: []
};
