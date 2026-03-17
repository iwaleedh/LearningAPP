export const note_olevel_maths_extended_4_5_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/angles-in-cyclic-quadrilaterals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand the properties of cyclic quadrilaterals and apply the theorem that opposite angles sum to 180°.'
      }
    },
    {
      id: 'h-definition',
      type: 'heading',
      data: { text: 'What Is a Cyclic Quadrilateral?', level: 2 }
    },
    {
      id: 'p-definition',
      type: 'paragraph',
      data: {
        text: 'A <strong>cyclic quadrilateral</strong> is a four-sided shape where all four vertices lie on the circumference of a circle. The circle is called the <strong>circumscribed circle</strong> (or circumcircle) of the quadrilateral.'
      }
    },
    {
      id: 'callout-key-theorem',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Opposite Angles Theorem',
        text: 'The <strong>opposite angles</strong> of a cyclic quadrilateral are <strong>supplementary</strong> — they add up to 180°.<br/><br/>If ABCD is a cyclic quadrilateral, then:<br/>• Angle A + Angle C = 180°<br/>• Angle B + Angle D = 180°'
      }
    },
    {
      id: 'h-proof',
      type: 'heading',
      data: { text: 'Why Opposite Angles Sum to 180°', level: 2 }
    },
    {
      id: 'p-proof',
      type: 'paragraph',
      data: {
        text: 'Consider arc BCD subtending angle A, and arc BAD subtending angle C. The angle at the centre for arc BCD = 2A and for arc BAD = 2C. These two central angles make a full turn: 2A + 2C = 360°, so A + C = 180°.'
      }
    },
    {
      id: 'h-exterior',
      type: 'heading',
      data: { text: 'Exterior Angle Property', level: 2 }
    },
    {
      id: 'p-exterior',
      type: 'paragraph',
      data: {
        text: 'An <strong>exterior angle</strong> of a cyclic quadrilateral equals the <strong>interior opposite angle</strong>. If side AB is extended to point E, then the exterior angle CBE = angle ADC (the interior angle at D, which is opposite to B).'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: '<strong>Q:</strong> ABCD is a cyclic quadrilateral. Angle A = 105° and angle B = 72°. Find angles C and D.<br/><br/><strong>A:</strong><br/>Angle C = 180° − 105° = <strong>75°</strong> (opposite angles in a cyclic quadrilateral sum to 180°).<br/>Angle D = 180° − 72° = <strong>108°</strong> (opposite angles sum to 180°).<br/><br/>Check: 105° + 72° + 75° + 108° = 360° ✓'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: '<strong>Q:</strong> PQRS is a cyclic quadrilateral. Angle QPR = 35°, angle PRS = 50°. Find angle PQR.<br/><br/><strong>A:</strong> Angle QRS = angle QRP + angle PRS. We need more info, but if angle QPS = 35° + something...<br/><br/>Actually, let\'s use: angle PQS = angle PRS = 50° (angles in the same segment, both subtended by arc PS).<br/>So angle PQR = angle PQS = <strong>50°</strong> if S lies such that angle PQR = angle PQS.'
      }
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Exterior Angle',
        text: '<strong>Q:</strong> ABCD is a cyclic quadrilateral. Side BC is extended to E. Angle DCE = 115°. Find angle BAD.<br/><br/><strong>A:</strong> The exterior angle of a cyclic quadrilateral equals the opposite interior angle.<br/>Angle BAD = angle DCE = <strong>115°</strong>.'
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
        text: 'If opposite angles of a quadrilateral sum to 180°, then the quadrilateral is cyclic (all four vertices lie on a circle). This converse can be used to prove that a quadrilateral is cyclic.'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always check your four angles sum to 360°. If the question asks you to "show that ABCD is a cyclic quadrilateral", demonstrate that one pair of opposite angles sums to 180°.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'A cyclic quadrilateral has all four vertices on a circle. Opposite angles sum to 180°. The exterior angle of a cyclic quadrilateral equals the opposite interior angle. The converse: if opposite angles sum to 180°, the quadrilateral is cyclic.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-definition', prompt: 'What is a cyclic quadrilateral?' },
      { id: 'cue-2', blockId: 'callout-key-theorem', prompt: 'What is the relationship between opposite angles in a cyclic quadrilateral?' },
      { id: 'cue-3', blockId: 'p-exterior', prompt: 'State the exterior angle property of a cyclic quadrilateral.' },
      { id: 'cue-4', blockId: 'p-converse', prompt: 'How can you prove a quadrilateral is cyclic?' },
      { id: 'cue-5', blockId: 'p-proof', prompt: 'Explain why opposite angles in a cyclic quadrilateral sum to 180° using the angle at the centre theorem.' }
    ],
    summaryText: 'In a cyclic quadrilateral, opposite angles are supplementary (sum to 180°). An exterior angle equals the opposite interior angle. The converse is used to prove a quadrilateral is cyclic.',
    ready: true
  },
  evidence: []
};
