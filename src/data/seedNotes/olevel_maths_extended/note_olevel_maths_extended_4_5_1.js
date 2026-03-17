export const note_olevel_maths_extended_4_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/angles-at-centre-and-circumference.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Understand and apply the theorem that the angle at the centre of a circle is twice the angle at the circumference when subtended by the same arc.'
      }
    },
    {
      id: 'h-theorem',
      type: 'heading',
      data: { text: 'The Angle at the Centre Theorem', level: 2 }
    },
    {
      id: 'p-theorem',
      type: 'paragraph',
      data: {
        text: 'The angle subtended by an arc at the <strong>centre</strong> of a circle is <strong>twice</strong> the angle subtended by the same arc at the <strong>circumference</strong>. If O is the centre, and points A, B, C lie on the circle, then the angle AOB at the centre equals 2 × angle ACB at the circumference, provided both angles are subtended by the same arc AB.'
      }
    },
    {
      id: 'callout-key-formula',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Relationship',
        text: 'Angle at centre = 2 × Angle at circumference (same arc).<br/><br/>Equivalently: Angle at circumference = <span class="nb-frac"><span class="nb-num">1</span><span class="nb-den">2</span></span> × Angle at centre.'
      }
    },
    {
      id: 'h-recognising',
      type: 'heading',
      data: { text: 'Recognising the Setup', level: 2 }
    },
    {
      id: 'list-recognise',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: 'Both angles must be subtended by the <strong>same arc</strong> (or same chord).' },
          { text: 'The angle at the centre has its vertex at the centre O, with two radii as its arms.' },
          { text: 'The angle at the circumference has its vertex on the circle itself.' },
          { text: 'The theorem works even when the angle at the centre is reflex (greater than 180°).' }
        ]
      }
    },
    {
      id: 'h-reflex',
      type: 'heading',
      data: { text: 'Reflex Angle at the Centre', level: 2 }
    },
    {
      id: 'p-reflex',
      type: 'paragraph',
      data: {
        text: 'When the angle at the circumference is on the <strong>major arc</strong> side, the corresponding angle at the centre is a <strong>reflex angle</strong>. The theorem still holds: the reflex angle at the centre = 2 × the angle at the circumference on the opposite side. For example, if the angle at the circumference is 130°, the reflex angle at the centre is 260°.'
      }
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1',
        text: '<strong>Q:</strong> O is the centre of a circle. A, B and C lie on the circumference. Angle AOB = 124°. Find angle ACB.<br/><br/><strong>A:</strong> Angle ACB = <span class="nb-frac"><span class="nb-num">124°</span><span class="nb-den">2</span></span> = <strong>62°</strong><br/>(angle at circumference = half angle at centre, same arc AB).'
      }
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2',
        text: '<strong>Q:</strong> O is the centre. Angle ACB = 140° where C is on the major arc. Find the angle AOB.<br/><br/><strong>A:</strong> The reflex angle AOB = 2 × 140° = 280°.<br/>The non-reflex angle AOB = 360° − 280° = <strong>80°</strong>.'
      }
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3',
        text: '<strong>Q:</strong> O is the centre. Angle AOB = 90°. Find the angle ACB where C is on the minor arc.<br/><br/><strong>A:</strong> C is on the minor arc, so the angle at the centre on the same side as C is the reflex angle = 360° − 90° = 270°.<br/>Angle ACB = <span class="nb-frac"><span class="nb-num">270°</span><span class="nb-den">2</span></span> = <strong>135°</strong>.'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Always identify the centre O first and check that both angles are subtended by the same arc. State the reason: "angle at centre = 2 × angle at circumference (same arc)".'
      }
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students sometimes double or halve the wrong angle. Remember: the <em>bigger</em> angle is always at the centre, and the <em>smaller</em> angle is at the circumference.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'The angle at the centre of a circle is twice the angle at the circumference when both are subtended by the same arc. This theorem applies even when the angle at the centre is reflex. The angle in a semicircle (= 90°) is a special case where the angle at the centre is 180°.'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-theorem', prompt: 'State the angle at the centre theorem.' },
      { id: 'cue-2', blockId: 'callout-key-formula', prompt: 'If the angle at the circumference is 50°, what is the angle at the centre?' },
      { id: 'cue-3', blockId: 'p-reflex', prompt: 'How does the theorem work when the angle at the centre is reflex?' },
      { id: 'cue-4', blockId: 'callout-warning', prompt: 'Which angle is always larger — the one at the centre or the circumference?' },
      { id: 'cue-5', blockId: 'sum-1', prompt: 'How is the angle in a semicircle theorem a special case of this theorem?' }
    ],
    summaryText: 'The angle at the centre is twice the angle at the circumference, both subtended by the same arc. This also explains why the angle in a semicircle is 90°.',
    ready: true
  },
  evidence: []
};
