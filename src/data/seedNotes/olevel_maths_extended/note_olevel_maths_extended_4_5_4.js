export const note_olevel_maths_extended_4_5_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/the-alternate-segment-theorem.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand and apply the alternate segment theorem relating the angle between a tangent and a chord to the angle in the alternate segment.'
      }
    },
    {
      id: 'h-tangent-recap',
      type: 'heading',
      data: { text: 'Tangent Properties Recap', level: 2 }
    },
    {
      id: 'list-tangent-props',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'A tangent to a circle is perpendicular to the radius at the point of contact.' },
          { text: 'A tangent touches the circle at exactly one point.' },
          { text: 'Two tangents drawn from an external point are equal in length.' }
        ]
      }
    },
    {
      id: 'h-theorem',
      type: 'heading',
      data: { text: 'The Alternate Segment Theorem', level: 2 }
    },
    {
      id: 'p-theorem',
      type: 'paragraph',
      data: {
        text: 'The angle between a <strong>tangent</strong> to a circle and a <strong>chord</strong> drawn from the point of tangency is equal to the angle subtended by the chord in the <strong>alternate segment</strong>.'
      }
    },
    {
      id: 'callout-key-explain',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Understanding "Alternate Segment"',
        text: 'A chord divides the circle into two segments. The tangent at one end of the chord makes an angle with the chord. The "alternate segment" is the segment on the <em>other side</em> of the chord from where the tangent-chord angle is measured. The angle in this alternate segment (at the circumference, subtended by the same chord) equals the tangent-chord angle.'
      }
    },
    {
      id: 'h-using',
      type: 'heading',
      data: { text: 'Using the Theorem', level: 2 }
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Identify the tangent and the point of tangency.' },
          { text: 'Find the chord drawn from the point of tangency.' },
          { text: 'Measure the angle between the tangent and the chord.' },
          { text: 'The angle in the alternate segment (on the other side of the chord, at the circumference) is equal to this angle.' }
        ]
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: '<strong>Q:</strong> A tangent at point A on a circle makes an angle of 65° with chord AB. Find the angle ACB where C is a point on the major arc.<br/><br/><strong>A:</strong> By the alternate segment theorem, angle ACB = <strong>65°</strong>.<br/>(The angle between the tangent and chord AB equals the angle in the alternate segment subtended by AB.)'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: '<strong>Q:</strong> TA is a tangent to the circle at A. B and C lie on the circle. Angle BAT = 50° and angle ABC = 70°. Find angle ACB and angle BAC.<br/><br/><strong>A:</strong><br/>Angle ACB = angle BAT = <strong>50°</strong> (alternate segment theorem).<br/>Angle BAC = 180° − 70° − 50° = <strong>60°</strong> (angles in triangle ABC).'
      }
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Finding a tangent-chord angle',
        text: '<strong>Q:</strong> TP is a tangent at P. Points Q and R lie on the circle. Angle PQR = 38°. Find the angle between the tangent TP and chord PR.<br/><br/><strong>A:</strong> The angle between tangent TP and chord PR = angle PQR = <strong>38°</strong> (alternate segment theorem — angle in the alternate segment equals the tangent-chord angle).'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Make sure you identify the correct "alternate" segment. The angle at the circumference must be on the <em>opposite</em> side of the chord from the tangent-chord angle. Students often pick an angle on the same side by mistake.'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The reason to state is: "alternate segment theorem" or "the angle between a tangent and a chord equals the angle in the alternate segment". This theorem is often combined with the angle at the centre or angles in the same segment in multi-step problems.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The alternate segment theorem states that the angle between a tangent and a chord at the point of tangency equals the angle subtended by that chord in the alternate segment. It is a key circle theorem that connects tangent properties with angles at the circumference.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-theorem', prompt: 'State the alternate segment theorem.' },
      { id: 'cue-2', blockId: 'callout-key-explain', prompt: 'What is the "alternate segment" in this theorem?' },
      { id: 'cue-3', blockId: 'list-tangent-props', prompt: 'What angle does a tangent make with the radius at the point of contact?' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'What common mistake do students make with the alternate segment theorem?' },
      { id: 'cue-5', blockId: 'callout-we2', prompt: 'If the angle between a tangent and chord AB is 50°, what is the angle subtended by AB in the alternate segment?' }
    ],
    summaryText: 'The angle between a tangent and a chord equals the angle in the alternate segment. Identify the tangent, chord, and the correct alternate segment to apply this theorem.',
    ready: true
  },
  evidence: []
};
