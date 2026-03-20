export const note_olevel_maths_core_4_5_3 = {
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Apply the property that two tangents drawn from an external point to a circle are equal in length; identify the kite formed and use its symmetry in calculations.' }
    },
    {
      id: 'h-theorem',
      type: 'heading',
      data: { text: 'Two Tangents from an External Point', level: 2 }
    },
    {
      id: 'p-theorem',
      type: 'paragraph',
      data: { text: 'If two tangent lines are drawn from an <strong>external point P</strong> to a circle, they touch the circle at points A and B. The key theorem states: the two <strong>tangent segments are equal in length</strong>, i.e. <strong>PA = PB</strong>. The line OP (from external point to centre) is a line of symmetry of the whole configuration.' }
    },
    {
      id: 'eq-equal',
      type: 'equation',
      data: { html: 'PA = PB &nbsp;&nbsp; (tangent lengths from external point P are equal)', caption: 'Two tangents from the same external point are equal' }
    },
    {
      id: 'svg-two-tangents',
      type: 'svg',
      data: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
  <style>
    text { font-family: sans-serif; font-size: 12px; fill: #374151; }
    .lbl  { font-weight: 700; fill: #374151; font-size: 13px; }
    .rad  { stroke: #6366f1; stroke-width: 2; }
    .tang { stroke: #10b981; stroke-width: 2.5; }
    .sym  { stroke: #9333ea; stroke-width: 1.8; stroke-dasharray: 6,4; }
    .eq   { font-weight: 700; fill: #ef4444; font-size: 11px; }
  </style>
  <!-- Circle centre O -->
  <circle cx="300" cy="150" r="90" fill="#2d2f72" fill-opacity="0.25" stroke="#6366f1" stroke-width="2"/>
  <circle cx="300" cy="150" r="4" fill="#6366f1"/>
  <text x="306" y="155" class="lbl" fill="#6366f1">O</text>
  <!-- External point P -->
  <circle cx="80" cy="150" r="5" fill="#9333ea"/>
  <text x="62" y="148" class="lbl" fill="#9333ea">P</text>
  <!-- Tangent points A and B -->
  <!-- PA is tangent to top of circle, PB to bottom -->
  <!-- Find tangent points: circle (300,150) r=90, P=(80,150) -->
  <!-- PA tangent: approx (235, 65) and (235, 235) -->
  <circle cx="234" cy="67" r="5" fill="#10b981"/>
  <text x="237" y="62" class="lbl" fill="#10b981">A</text>
  <circle cx="234" cy="233" r="5" fill="#10b981"/>
  <text x="237" y="248" class="lbl" fill="#10b981">B</text>
  <!-- Tangent lines PA and PB -->
  <line x1="80" y1="150" x2="234" y2="67" class="tang"/>
  <line x1="80" y1="150" x2="234" y2="233" class="tang"/>
  <!-- Radii OA and OB -->
  <line x1="300" y1="150" x2="234" y2="67" class="rad"/>
  <line x1="300" y1="150" x2="234" y2="233" class="rad"/>
  <!-- Right angle at A -->
  <text x="215" y="90" class="eq">90°</text>
  <!-- Right angle at B -->
  <text x="215" y="228" class="eq">90°</text>
  <!-- Line of symmetry OP extended -->
  <line x1="60" y1="150" x2="400" y2="150" class="sym"/>
  <text x="380" y="144" fill="#9333ea" font-size="10">line of symmetry</text>
  <!-- Equal length marks -->
  <text x="130" y="100" class="eq">PA</text>
  <text x="130" y="212" class="eq">PB</text>
  <text x="145" y="158" fill="#ef4444" font-size="15">} PA = PB</text>
  <!-- Kite label -->
  <text x="120" y="285" fill="#374151" font-size="11">Shape OAPB is a <tspan font-weight="700">kite</tspan> (OA=OB=radius, PA=PB=tangent)</text>
</svg>`,
        caption: 'Two tangents PA and PB from external point P. PA = PB; OA ⊥ PA and OB ⊥ PB (both 90°). OAPB forms a kite.'
      }
    },
    {
      id: 'h-kite',
      type: 'heading',
      data: { text: 'The Kite Property', level: 2 }
    },
    {
      id: 'p-kite',
      type: 'paragraph',
      data: { text: 'The four points — external point <strong>P</strong>, the two tangent points <strong>A</strong> and <strong>B</strong>, and the centre <strong>O</strong> — form a <strong>kite OAPB</strong>. In this kite: the two radii OA = OB (both equal to radius r), the two tangent segments PA = PB, and the diagonal OP is the <strong>line of symmetry</strong> bisecting the kite. The angles at A and B are each 90°.' }
    },
    {
      id: 'list-kite-props',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>OA = OB</strong> — both radii' },
          { text: '<strong>PA = PB</strong> — equal tangents from P' },
          { text: '<strong>∠OAP = ∠OBP = 90°</strong> — tangent ⊥ radius at each point' },
          { text: '<strong>OP bisects ∠APB</strong> — line of symmetry' },
          { text: '<strong>OP bisects ∠AOB</strong> — line of symmetry' },
          { text: 'Sum of angles in kite OAPB = 360°: two right angles + ∠APB + ∠AOB = 360°' }
        ]
      }
    },
    {
      id: 'h-angle',
      type: 'heading',
      data: { text: 'Finding Unknown Angles', level: 2 }
    },
    {
      id: 'p-angle',
      type: 'paragraph',
      data: { text: 'Because ∠OAP = ∠OBP = 90°, the four angles in kite OAPB sum to 360°. This gives a useful formula: <strong>∠AOB + ∠APB = 180°</strong> (the two remaining angles sum to 180°, since the other two angles already account for 90° + 90° = 180°).' }
    },
    {
      id: 'eq-angle',
      type: 'equation',
      data: { html: '∠AOB + ∠APB = 180°', caption: 'In kite OAPB: angle at centre + angle at external point = 180°' }
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Examples',
        text: '<strong>Example 1:</strong> Tangents from P touch a circle at A and B. OA = OB = 5 cm and OP = 13 cm. Find PA and ∠APB if ∠AOB = 112°.<br>PA = √(OP² − OA²) = √(169 − 25) = √144 = <strong>12 cm</strong> &nbsp;(Pythagoras in △OAP)<br>∠APB = 180° − 112° = <strong>68°</strong> &nbsp;(angles in kite sum to 360°; ∠OAP = ∠OBP = 90°)<br><br><strong>Example 2:</strong> Two tangents from P touch a circle at A and B. ∠APB = 50°. Find ∠AOB.<br>∠AOB = 180° − 50° = <strong>130°</strong><br><br><strong>Example 3:</strong> In the same figure, ∠AOP = ?<br>∠AOP = ½ × ∠AOB = 65° (OP is the line of symmetry)'
      }
    },
    {
      id: 'callout-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Properties — Two Tangents from External Point',
        text: '1. <strong>PA = PB</strong> (equal tangent lengths)<br>2. <strong>∠OAP = ∠OBP = 90°</strong> (tangent ⊥ radius)<br>3. <strong>OAPB is a kite</strong> with OP as the line of symmetry<br>4. <strong>∠AOB + ∠APB = 180°</strong>'
      }
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Kite Strategy',
        text: 'Draw the full kite OAPB including the two radii and line OP. Mark all four angles (two 90°, plus ∠APB and ∠AOB). Then use the fact these sum to 360°. Because the kite is symmetric, you can also split it into two congruent right-angled triangles along OP.'
      }
    },
    {
      id: 'summary',
      type: 'summary',
      data: { text: 'Two tangents from an external point P are equal: PA = PB. Kite OAPB has OA = OB (radii), PA = PB, right angles at A and B, and OP as line of symmetry. Key relation: ∠AOB + ∠APB = 180°.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'PA = PB (equal tangents); OAPB is a kite; ∠AOB + ∠APB = 180°; Pythagoras gives PA from OP and r.',
    cues: [
      { id: 'cue-1', blockId: 'p-theorem', prompt: 'State the two-tangent theorem. What can you say about PA and PB?' },
      { id: 'cue-2', blockId: 'p-kite', prompt: 'What shape is OAPB, and name all four properties of this shape in this context.' },
      { id: 'cue-3', blockId: 'eq-angle', prompt: 'What is the relationship between ∠AOB and ∠APB in the kite OAPB?' },
      { id: 'cue-4', blockId: 'callout-worked', prompt: 'Tangents from P touch circle at A and B. ∠APB = 64°. Find ∠AOB.' },
      { id: 'cue-5', blockId: 'callout-tip', prompt: 'Describe the strategy for solving a two-tangent problem using the kite.' }
    ]
  },
  evidence: []
};
