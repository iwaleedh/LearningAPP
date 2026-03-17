export const note_olevel_maths_extended_4_5_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/angle-in-a-semicircle.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand and apply the theorem that the angle in a semicircle is a right angle (90°).'
      }
    },
    {
      id: 'h-theorem',
      type: 'heading',
      data: { text: 'The Angle in a Semicircle Theorem', level: 2 }
    },
    {
      id: 'p-theorem',
      type: 'paragraph',
      data: {
        text: 'The angle subtended by a diameter at any point on the circumference of a circle is always 90°. In other words, if AB is a diameter and C is any point on the circle (not on AB), then angle ACB = 90°.'
      }
    },
    {
      id: 'callout-key-theorem',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Theorem',
        text: 'The angle in a semicircle is always a right angle (90°). This is sometimes called <strong>Thales\' theorem</strong>. It is a special case of the "angle at the centre is twice the angle at the circumference" theorem (since the angle at the centre on a diameter is 180°, the angle at the circumference is 90°).'
      }
    },
    {
      id: 'h-identify',
      type: 'heading',
      data: { text: 'Identifying the Theorem in Questions', level: 2 }
    },
    {
      id: 'list-identify',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Look for a triangle inscribed in a circle where one side is a diameter.' },
          { text: 'The diameter must pass through the centre of the circle.' },
          { text: 'The angle opposite the diameter (at the circumference) is 90°.' },
          { text: 'Conversely, if a right angle is subtended at the circumference, the hypotenuse must be a diameter.' }
        ]
      }
    },
    {
      id: 'h-converse',
      type: 'heading',
      data: { text: 'The Converse', level: 2 }
    },
    {
      id: 'p-converse',
      type: 'paragraph',
      data: {
        text: 'If the angle at C in triangle ABC is 90° and A, B, C all lie on a circle, then AB must be a diameter of that circle. This converse is useful for finding centres or proving that a line passes through the centre.'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: '<strong>Q:</strong> AB is a diameter of a circle. C is a point on the circumference. Angle BAC = 35°. Find angle ABC.<br/><br/><strong>A:</strong> Angle ACB = 90° (angle in a semicircle).<br/>Angle ABC = 180° − 90° − 35° = <strong>55°</strong> (angles in a triangle sum to 180°).'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: '<strong>Q:</strong> Points P, Q, R lie on a circle with centre O. PQ is a diameter and angle QPR = 28°. Find angle PRQ and angle POR.<br/><br/><strong>A:</strong><br/>Angle PQR = 90° (angle in a semicircle, since PQ is a diameter) — <em>wait, the angle at R is in the semicircle</em>.<br/>Angle PRQ = 90° (angle in a semicircle).<br/>Angle PQR = 180° − 90° − 28° = 62°.<br/>Angle POR = 2 × angle PQR is not needed here; but angle at centre POQ… Since PQ is a diameter, angle POR = 2 × 28° = <strong>56°</strong> (angle at centre = 2 × angle at circumference for arc PR).'
      }
    },
    {
      id: 'callout-tip-reason',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Give Reasons',
        text: 'Always state the theorem in your working: "angle ACB = 90° (angle in a semicircle)" or "angle in a semicircle is 90°". The reason is required for full marks in IGCSE circle theorem questions.'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'The 90° angle is at the <em>circumference</em>, not at the centre. It is the angle opposite the diameter. Do not confuse it with the angle at the centre theorem.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The angle in a semicircle is 90°. If AB is a diameter and C lies on the circle, then angle ACB = 90°. Conversely, if angle ACB = 90° with all three points on the circle, then AB is a diameter. Always state the theorem name for full marks.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-theorem', prompt: 'State the angle in a semicircle theorem.' },
      { id: 'cue-2', blockId: 'callout-key-theorem', prompt: 'Why is the angle in a semicircle 90°? How does it relate to the angle at the centre theorem?' },
      { id: 'cue-3', blockId: 'p-converse', prompt: 'State the converse of the angle in a semicircle theorem.' },
      { id: 'cue-4', blockId: 'list-identify', prompt: 'How do you spot the angle in a semicircle in a diagram?' },
      { id: 'cue-5', blockId: 'callout-warning', prompt: 'Where is the 90° angle — at the centre or the circumference?' }
    ],
    summaryText: 'The angle subtended by a diameter at any point on the circumference is 90°. Its converse: if the angle at the circumference is 90°, the opposite side is a diameter.',
    ready: true
  },
  evidence: []
};
