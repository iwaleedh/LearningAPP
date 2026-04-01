export const note_olevel_maths_core_4_5_2 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the property that a tangent to a circle is perpendicular to the radius at the point of contact; use Pythagoras\' theorem in tangent-radius problems.' }
    },
    {
      id: 'h-theorem',
      type: 'heading',
      data: { text: 'Tangent–Radius Property', level: 2 }
    },
    {
      id: 'p-theorem',
      type: 'paragraph',
      data: { text: 'A <strong>tangent</strong> to a circle is a straight line that touches the circle at exactly one point, called the <strong>point of tangency</strong>. The key property is: the tangent and the <strong>radius drawn to the point of tangency are perpendicular</strong> — they meet at exactly 90°.' }
    },
    {
      id: 'eq-theorem',
      type: 'equation',
      data: { html: 'Tangent ⊥ Radius at point of contact &nbsp;⟹&nbsp; angle = 90°', caption: 'Tangent-radius property' }
    },
    {
      id: 'svg-tangent',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 260" width="460" height="260">
  <style>
    text { font-family: sans-serif; font-size: 12px; fill: #374151; }
    .lbl { font-weight: 700; fill: #3b82f6; font-size: 13px; }
    .angle { font-weight: 700; fill: #ef4444; font-size: 13px; }
    .tang { stroke: #10b981; stroke-width: 2.5; }
    .rad  { stroke: #3b82f6; stroke-width: 2; }
  </style>
  <!-- Circle -->
  <circle cx="200" cy="135" r="100" fill="#2d2f72" fill-opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
  <!-- Centre O -->
  <circle cx="200" cy="135" r="4" fill="#3b82f6"/>
  <text x="206" y="130" class="lbl">O</text>
  <!-- Point of tangency T -->
  <circle cx="300" cy="135" r="5" fill="#10b981"/>
  <text x="307" y="130" class="lbl" fill="#10b981">T</text>
  <!-- Radius OT -->
  <line x1="200" y1="135" x2="300" y2="135" class="rad"/>
  <text x="235" y="125" fill="#3b82f6" font-size="11">radius r</text>
  <!-- Tangent line (vertical, since radius is horizontal) -->
  <line x1="300" y1="30" x2="300" y2="240" class="tang"/>
  <!-- Right angle box at T -->
  <rect x="288" y="123" width="12" height="12" fill="none" stroke="#ef4444" stroke-width="2"/>
  <text x="310" y="148" class="angle">90°</text>
  <!-- External point P on tangent -->
  <circle cx="300" cy="50" r="4" fill="#9333ea"/>
  <text x="307" y="55" fill="#9333ea" font-weight="700">P</text>
  <!-- Line from O to P -->
  <line x1="200" y1="135" x2="300" y2="50" stroke="#9333ea" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="225" y="80" fill="#9333ea" font-size="11">OP (hypotenuse)</text>
  <!-- Labels -->
  <text x="60" y="220" fill="#374151" font-size="11">OT ⊥ tangent → use Pythagoras:</text>
  <text x="60" y="238" fill="#374151" font-size="11">OP² = OT² + PT² → PT = √(OP² − r²)</text>
</svg>`,
        caption: 'Radius OT ⊥ tangent at T. Pythagoras in triangle OTP gives PT = √(OP² − r²)'
      }
    },
    {
      id: 'h-pythagoras',
      type: 'heading',
      data: { text: 'Using Pythagoras with Tangent-Radius', level: 2 }
    },
    {
      id: 'p-pythagoras',
      type: 'paragraph',
      data: { text: 'Because the tangent meets the radius at 90°, the triangle formed by the radius, the tangent, and the line from the external point to the centre is a <strong>right-angled triangle</strong>. The line from the external point to the centre is the <strong>hypotenuse</strong>. This lets you apply Pythagoras\' theorem directly.' }
    },
    {
      id: 'eq-pythagoras',
      type: 'equation',
      data: { html: 'PT² = OP² − OT² &nbsp;(where OT = radius r)', caption: 'Pythagoras in the tangent-radius right triangle; P is the external point, T is the point of tangency' }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1:</strong> A tangent from external point P touches the circle at T. The radius OT = 5 cm and OP = 13 cm. Find PT.<br>PT² = OP² − OT² = 13² − 5² = 169 − 25 = 144<br>PT = √144 = <strong>12 cm</strong><br><br><strong>Example 2:</strong> A tangent from P meets the circle at T. OT = 8 cm and PT = 15 cm. Find OP.<br>OP² = OT² + PT² = 8² + 15² = 64 + 225 = 289<br>OP = √289 = <strong>17 cm</strong><br><br><strong>Example 3:</strong> Circle centre O, radius 6 cm. External point P is 10 cm from O. Find ∠TOP.<br>PT = √(100 − 36) = √64 = 8 cm<br>tan(∠TOP) = PT/OT = 8/6 → ∠TOP = arctan(4/3) ≈ <strong>53.1°</strong>'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Property',
        text: '<strong>Tangent ⊥ Radius at the point of tangency</strong><br>This creates a right angle that enables Pythagoras to be applied:<br>OP² = OT² + PT²<br>where O = centre, T = point of tangency, P = external point'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Identify the Right Angle',
        text: 'As soon as you see the word "tangent" in a question involving a circle, mark a right angle between the tangent and the radius at the point of contact. This almost always sets up a Pythagoras or trigonometry calculation.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'A tangent to a circle is perpendicular to the radius at the point of contact (tangent ⊥ radius = 90°). Triangle formed with the line from external point to centre is right-angled. Use Pythagoras: OP² = OT² + PT².' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Tangent ⊥ radius at the point of tangency. Right triangle enables Pythagoras: OP² = OT² + PT².',
    cues: [
      { id: 'cue-1', blockId: 'p-theorem', prompt: 'State the tangent-radius property. What angle is formed at the point of tangency?' },
      { id: 'cue-2', blockId: 'eq-pythagoras', prompt: 'A tangent from P touches a circle at T with radius OT. Write the Pythagoras formula for PT.' },
      { id: 'cue-3', blockId: 'callout-worked', prompt: 'OT = 9 cm (radius), OP = 15 cm. Find the length of the tangent PT.' },
      { id: 'cue-4', blockId: 'callout-tip', prompt: 'What is the first thing you should mark on a diagram when a "tangent" is mentioned in a circle problem?' }
    ]
  },
  evidence: []
};
