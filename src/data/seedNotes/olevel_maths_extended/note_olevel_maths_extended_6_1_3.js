export const note_olevel_maths_extended_6_1_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Pythagoras And Trigonometry/angles-of-elevation-and-depression.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Solve problems involving angles of elevation and angles of depression using right-angled triangle trigonometry.' }
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Angles of Elevation and Depression', level: 2 }
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: { text: 'The <strong>angle of elevation</strong> is the angle measured <em>upwards</em> from the horizontal to a line of sight. The <strong>angle of depression</strong> is measured <em>downwards</em> from the horizontal.' }
    },
    {
      id: 'callout-key-alternate',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Point — Alternate Angles',
        text: 'The angle of elevation from point A to point B <strong>equals</strong> the angle of depression from point B to point A. This is because the horizontal lines at A and B are parallel, so these are <strong>alternate angles</strong>.'
      }
    },
    {
      id: 'h-elevation',
      type: 'heading',
      data: { text: 'Angle of Elevation', level: 2 }
    },
    {
      id: 'p-elevation',
      type: 'paragraph',
      data: { text: 'You stand on level ground looking up at the top of a building. The angle between the horizontal and your line of sight is the angle of elevation.' }
    },
    {
      id: 'callout-worked-elev',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Angle of Elevation',
        text: 'A person stands 50 m from the base of a tower. The angle of elevation to the top is 32°. Find the height of the tower.<br><br><strong>Solution:</strong><br>The height is opposite, the distance is adjacent &rarr; use tan<br>tan 32° = h / 50<br>h = 50 × tan 32°<br>h = 50 × 0.6249<br>h = <strong>31.2 m</strong> (3 s.f.)'
      }
    },
    {
      id: 'h-depression',
      type: 'heading',
      data: { text: 'Angle of Depression', level: 2 }
    },
    {
      id: 'p-depression',
      type: 'paragraph',
      data: { text: 'You stand on top of a cliff looking down at a boat. The angle between the horizontal and your line of sight downwards is the angle of depression.' }
    },
    {
      id: 'callout-worked-dep',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Angle of Depression',
        text: 'A lighthouse is 40 m above sea level. The angle of depression to a boat is 25°. Find the horizontal distance from the base of the lighthouse to the boat.<br><br><strong>Solution:</strong><br>The angle of depression = angle of elevation from boat = 25°<br>tan 25° = 40 / d<br>d = 40 / tan 25°<br>d = 40 / 0.4663<br>d = <strong>85.8 m</strong> (3 s.f.)'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always draw a diagram showing the horizontal line and the angle. Label the right angle clearly. The angle of elevation/depression is measured from the <strong>horizontal</strong>, not the vertical.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Don\'t confuse the angle of depression with the angle inside the triangle at the top. The angle of depression is from the horizontal, so the angle inside the triangle at the top is its complement (90° − angle of depression).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Angle of elevation is measured up from the horizontal; angle of depression is measured down. They are equal by alternate angles. Use SOHCAHTOA in the resulting right-angled triangle. Always draw a diagram.' }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-intro', prompt: 'What is the difference between angle of elevation and angle of depression?', answer: 'Elevation is measured upwards from the horizontal; depression is measured downwards.' },
      { id: 'cue-2', blockId: 'callout-key-alternate', prompt: 'Why do angle of elevation and angle of depression equal each other?', answer: 'Because the horizontal lines are parallel, making them alternate angles.' },
      { id: 'cue-3', blockId: 'callout-tip', prompt: 'From what line is the angle of elevation/depression measured?', answer: 'From the horizontal, not the vertical.' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'What common mistake is made with angle of depression?', answer: 'Confusing it with the angle inside the triangle at the top (which is 90° minus the angle of depression).' }
    ],
    summaryText: 'Angles of elevation (up) and depression (down) are measured from the horizontal. They equal each other by alternate angles. Solve using SOHCAHTOA.',
    ready: true
  },
  evidence: []
};
