export const note_olevel_maths_extended_4_5_5 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Extended/Geometry/theorems-with-chords-and-tangents.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Apply circle theorems involving chords, tangents and their lengths, including the perpendicular from the centre to a chord, equal tangents from an external point, and the intersecting chords/secants theorems.'
      }
    },
    {
      id: 'h-perp-chord',
      type: 'heading',
      data: { text: 'Perpendicular from Centre to a Chord', level: 2 }
    },
    {
      id: 'p-perp-chord',
      type: 'paragraph',
      data: {
        text: 'A line drawn from the centre of a circle <strong>perpendicular</strong> to a chord <strong>bisects</strong> the chord. Conversely, a line from the centre to the midpoint of a chord is perpendicular to the chord.'
      }
    },
    {
      id: 'callout-key-perp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Fact',
        text: 'The perpendicular bisector of any chord passes through the centre of the circle. This property is useful for finding the centre when given a chord.'
      }
    },
    {
      id: 'callout-we-perp',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Perpendicular to Chord',
        text: '<strong>Q:</strong> A circle has centre O and radius 10 cm. A chord AB has length 16 cm. Find the distance from O to the chord AB.<br/><br/><strong>A:</strong> Let M be the midpoint of AB. Then AM = 8 cm.<br/>OM ⊥ AB (perpendicular from centre bisects chord).<br/>In right triangle OMA: OM² + AM² = OA²<br/>OM² + 64 = 100<br/>OM² = 36<br/>OM = <strong>6 cm</strong>.'
      }
    },
    {
      id: 'h-equal-chords',
      type: 'heading',
      data: { text: 'Equal Chords', level: 2 }
    },
    {
      id: 'p-equal-chords',
      type: 'paragraph',
      data: {
        text: 'Equal chords are equidistant from the centre. Conversely, chords equidistant from the centre are equal in length. This means if two chords have the same length, the perpendicular distances from the centre to each chord are equal.'
      }
    },
    {
      id: 'h-tangent-props',
      type: 'heading',
      data: { text: 'Tangent Theorems', level: 2 }
    },
    {
      id: 'list-tangent-theorems',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Tangent ⊥ Radius:</strong> A tangent to a circle is perpendicular to the radius at the point of contact.' },
          { text: '<strong>Equal tangents:</strong> Two tangents drawn to a circle from the same external point are equal in length.' },
          { text: '<strong>Angle bisector:</strong> The line from the external point to the centre bisects the angle between the two tangents.' }
        ]
      }
    },
    {
      id: 'callout-we-tangent',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Equal Tangents',
        text: '<strong>Q:</strong> From an external point T, two tangents TA and TB are drawn to a circle with centre O and radius 5 cm. If OT = 13 cm, find the length of TA.<br/><br/><strong>A:</strong> Angle OAT = 90° (tangent ⊥ radius).<br/>In right triangle OAT: TA² + OA² = OT²<br/>TA² + 25 = 169<br/>TA² = 144<br/>TA = <strong>12 cm</strong>.<br/>TB = 12 cm also (equal tangents from external point).'
      }
    },
    {
      id: 'h-intersecting-chords',
      type: 'heading',
      data: { text: 'Intersecting Chords Theorem', level: 2 }
    },
    {
      id: 'p-intersecting-chords',
      type: 'paragraph',
      data: {
        text: 'When two chords intersect <strong>inside</strong> a circle at point P, the products of their segments are equal: <strong>AP × PB = CP × PD</strong>, where AB and CD are the two chords.'
      }
    },
    {
      id: 'callout-we-chords',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Intersecting Chords',
        text: '<strong>Q:</strong> Two chords AB and CD intersect inside a circle at P. AP = 6, PB = 4, CP = 3. Find PD.<br/><br/><strong>A:</strong> AP × PB = CP × PD<br/>6 × 4 = 3 × PD<br/>24 = 3 × PD<br/>PD = <strong>8</strong>.'
      }
    },
    {
      id: 'h-external-secants',
      type: 'heading',
      data: { text: 'Intersecting Secants / Tangent-Secant Theorems', level: 2 }
    },
    {
      id: 'p-secants',
      type: 'paragraph',
      data: {
        text: 'When two secants are drawn from an external point P:<br/><strong>PA × PB = PC × PD</strong> (whole length × external part for each secant).'
      }
    },
    {
      id: 'p-tangent-secant',
      type: 'paragraph',
      data: {
        text: 'When a tangent and a secant are drawn from the same external point P, with the tangent touching at T and the secant crossing the circle at A and B:<br/><strong>PT² = PA × PB</strong>.'
      }
    },
    {
      id: 'callout-we-tangent-secant',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example — Tangent-Secant',
        text: '<strong>Q:</strong> From external point P, a tangent PT = 8 cm and a secant PAB where PA = 4 cm. Find AB.<br/><br/><strong>A:</strong> PT² = PA × PB<br/>64 = 4 × PB<br/>PB = 16 cm<br/>AB = PB − PA = 16 − 4 = <strong>12 cm</strong>.'
      }
    },
    {
      id: 'callout-tip-exam',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For intersecting chords/secants, always multiply: <em>one part × other part</em> (internal) or <em>whole × external part</em> (external). For the tangent-secant case, the tangent counts as both "whole" and "external" so you square it.'
      }
    },
    {
      id: 'h-summary-table',
      type: 'heading',
      data: { text: 'Summary of Chord & Tangent Theorems', level: 2 }
    },
    {
      id: 'table-theorems',
      type: 'comparisonTable',
      data: {
        caption: 'Key chord and tangent theorems',
        headers: ['Theorem', 'Statement'],
        rows: [
          ['Perpendicular to chord', 'Perpendicular from centre bisects the chord'],
          ['Equal chords', 'Equal chords are equidistant from the centre'],
          ['Tangent ⊥ radius', 'Tangent is perpendicular to radius at point of contact'],
          ['Equal tangents', 'Tangents from an external point are equal'],
          ['Intersecting chords', 'AP × PB = CP × PD (inside)'],
          ['Intersecting secants', 'PA × PB = PC × PD (outside)'],
          ['Tangent-secant', 'PT² = PA × PB']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: 'Key chord theorems: the perpendicular from the centre bisects a chord; equal chords are equidistant from the centre. Key tangent theorems: tangent ⊥ radius; equal tangents from an external point. Intersecting chords inside: AP × PB = CP × PD. From outside: PA × PB = PC × PD (secants) or PT² = PA × PB (tangent-secant).'
      }
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'cue-1', blockId: 'p-perp-chord', prompt: 'What does the perpendicular from the centre do to a chord?' },
      { id: 'cue-2', blockId: 'list-tangent-theorems', prompt: 'State two properties of tangents drawn from an external point.' },
      { id: 'cue-3', blockId: 'p-intersecting-chords', prompt: 'State the intersecting chords theorem (chords crossing inside a circle).' },
      { id: 'cue-4', blockId: 'p-tangent-secant', prompt: 'State the tangent-secant theorem.' },
      { id: 'cue-5', blockId: 'p-equal-chords', prompt: 'What can you say about two chords that are the same length?' },
      { id: 'cue-6', blockId: 'callout-tip-exam', prompt: 'How do you remember whether to multiply or add the chord segments?' }
    ],
    summaryText: 'Chord and tangent theorems connect lengths and angles: perpendicular from centre bisects chords, tangents from an external point are equal, and intersecting chords/secants satisfy product relationships.',
    ready: true
  },
  evidence: []
};
