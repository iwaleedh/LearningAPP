export const note_olevel_maths_extended_4_5_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/angles-in-the-same-segment.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand and apply the theorem that angles in the same segment of a circle are equal.'
      }
    },
    {
      id: 'h-theorem',
      type: 'heading',
      data: { text: 'Angles in the Same Segment', level: 2 }
    },
    {
      id: 'p-theorem',
      type: 'paragraph',
      data: {
        text: 'Angles subtended by the same arc (or chord) at the circumference and on the <strong>same side</strong> of the chord are equal. If A, B, C and D all lie on a circle, and C and D are on the same side of chord AB, then angle ACB = angle ADB.'
      }
    },
    {
      id: 'callout-key-why',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why It Works',
        text: 'Both angles at the circumference are half the same angle at the centre (by the angle at the centre theorem). Since they are both half the same central angle, they must be equal to each other.'
      }
    },
    {
      id: 'h-segments',
      type: 'heading',
      data: { text: 'Major and Minor Segments', level: 2 }
    },
    {
      id: 'p-segments',
      type: 'paragraph',
      data: {
        text: 'A chord divides a circle into two segments — the <strong>major segment</strong> (the larger region) and the <strong>minor segment</strong> (the smaller region). All angles subtended at the circumference from the same segment are equal. Angles in the major segment are acute (if the minor arc is less than a semicircle), while angles in the minor segment are obtuse.'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: '<strong>Q:</strong> A, B, C and D lie on a circle. C and D are on the same side of AB. Angle ACB = 42°. Find angle ADB.<br/><br/><strong>A:</strong> Angle ADB = <strong>42°</strong> (angles in the same segment are equal — both subtended by arc AB on the same side).'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: '<strong>Q:</strong> Points P, Q, R, S lie on a circle. Angle PRQ = 55° and angle RQS = 30°. Find angle RPS.<br/><br/><strong>A:</strong> Angle RPS = angle RQS = <strong>30°</strong> (angles in the same segment, both subtended by arc RS).<br/>Note: angle PRQ and angle PSQ would be equal (both subtended by arc PQ), but that is a different pair.'
      }
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Multi-step',
        text: '<strong>Q:</strong> O is the centre. A, B, C, D lie on the circle. Angle AOB = 96°. D is in the major segment. Find angle ADB.<br/><br/><strong>A:</strong> Angle ACB = <span class="nb-frac"><span class="nb-num">96°</span><span class="nb-den">2</span></span> = 48° (angle at circumference = half angle at centre).<br/>Angle ADB = 48° (angles in the same segment as C, subtended by arc AB).<br/>Answer: <strong>48°</strong>.'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'To identify this theorem: look for two or more angles at the circumference subtended by the same chord and on the same side. The reason to write is: "angles in the same segment are equal" or "angles subtended by the same arc at the circumference are equal".'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'The angles must be on the <em>same side</em> of the chord. Angles on opposite sides of the chord are in different segments and are <em>not</em> equal — they are supplementary (add to 180°) in a cyclic quadrilateral.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Angles in the same segment are equal — if two angles at the circumference are subtended by the same arc and lie on the same side of the chord, they are equal. This follows from the angle at the centre theorem since both are half the same central angle.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-theorem', prompt: 'State the angles in the same segment theorem.' },
      { id: 'cue-2', blockId: 'callout-key-why', prompt: 'Why are angles in the same segment equal? Explain using the angle at the centre theorem.' },
      { id: 'cue-3', blockId: 'p-segments', prompt: 'What is the difference between angles in the major segment and the minor segment?' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'What happens to angles on opposite sides of the chord — are they equal?' },
      { id: 'cue-5', blockId: 'callout-tip-exam', prompt: 'What reason should you write in an exam when using this theorem?' }
    ],
    summaryText: 'Angles subtended by the same arc at the circumference, on the same side of the chord, are equal. This is because both are half the same angle at the centre.',
    ready: true
  },
  evidence: []
};
