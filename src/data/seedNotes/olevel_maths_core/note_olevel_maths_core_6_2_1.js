export const note_olevel_maths_core_6_2_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Pythagoras And Trigonometry/trigonometry-to-find-angles.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Use inverse trigonometric functions (sin⁻¹, cos⁻¹, tan⁻¹) to find missing angles in right-angled triangles, and decide when to use Pythagoras\' theorem versus trigonometry.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Finding Missing Angles Using Inverse Trig', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'When we <em>know two sides</em> and want to find <em>an angle</em>, we use the <strong>inverse trigonometric functions</strong>: sin⁻¹, cos⁻¹, and tan⁻¹ (also written arcsin, arccos, arctan). These are the reverse operations of sin, cos, and tan.',
      },
    },
    {
      id: 'h-formulas',
      type: 'heading',
      data: { text: 'Inverse Trig Formulas', level: 2 },
    },
    {
      id: 'eq-sin-inv',
      type: 'equation',
      data: {
        html: 'θ = sin<sup>−1</sup><span class="nb-frac"><span class="nb-num">opposite</span><span class="nb-den">hypotenuse</span></span>',
        caption: 'Find angle using sine',
      },
    },
    {
      id: 'eq-cos-inv',
      type: 'equation',
      data: {
        html: 'θ = cos<sup>−1</sup><span class="nb-frac"><span class="nb-num">adjacent</span><span class="nb-den">hypotenuse</span></span>',
        caption: 'Find angle using cosine',
      },
    },
    {
      id: 'eq-tan-inv',
      type: 'equation',
      data: {
        html: 'θ = tan<sup>−1</sup><span class="nb-frac"><span class="nb-num">opposite</span><span class="nb-den">adjacent</span></span>',
        caption: 'Find angle using tangent',
      },
    },
    {
      id: 'callout-key-calc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Using Your Calculator',
        text: 'To calculate sin⁻¹, cos⁻¹, or tan⁻¹ on a scientific calculator:\n• Press [SHIFT] or [2nd] then [sin], [cos], or [tan].\n• Enter the ratio value (a decimal between 0 and 1 for sin and cos).\n• The calculator returns the angle in degrees.\nMake sure your calculator is set to DEGREE mode, not radians.',
      },
    },
    {
      id: 'h-steps',
      type: 'heading',
      data: { text: 'Step-by-Step Method', level: 2 },
    },
    {
      id: 'list-steps',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'Draw and label the right-angled triangle clearly.' },
          { text: 'Mark the angle you want to find as θ.' },
          { text: 'Label the sides as opposite, adjacent, and hypotenuse <em>relative to θ</em>.' },
          { text: 'Identify which two sides you know.' },
          { text: 'Choose the ratio that uses those two sides (SOH, CAH, or TOA).' },
          { text: 'Apply the inverse trig function: θ = sin⁻¹(opp/hyp), etc.' },
          { text: 'Write the answer in degrees (1 decimal place unless told otherwise).' },
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Find angle using sin⁻¹',
        text: 'In a right-angled triangle, opposite = 6 cm and hypotenuse = 10 cm. Find angle θ.\n\nStep 1: Label sides — opposite = 6, hypotenuse = 10.\nStep 2: Two known sides are opp and hyp → use sin.\nStep 3: sin θ = 6/10 = 0.6\nStep 4: θ = sin⁻¹(0.6) = 36.9°\n\n✓ Answer: θ = 36.9° (1 d.p.)',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Find angle using cos⁻¹',
        text: 'A right-angled triangle has adjacent = 9 cm and hypotenuse = 15 cm. Find angle θ.\n\nStep 1: Two known sides are adj and hyp → use cos.\nStep 2: cos θ = 9/15 = 0.6\nStep 3: θ = cos⁻¹(0.6) = 53.1°\n\n✓ Answer: θ = 53.1° (1 d.p.)',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Find angle using tan⁻¹',
        text: 'A right-angled triangle has opposite = 5 cm and adjacent = 12 cm. Find angle θ.\n\nStep 1: Two known sides are opp and adj → use tan.\nStep 2: tan θ = 5/12 = 0.4167\nStep 3: θ = tan⁻¹(0.4167) = 22.6°\n\n✓ Answer: θ = 22.6° (1 d.p.)',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Find both missing angles',
        text: 'A right-angled triangle has legs of 9 cm and 12 cm. Find the acute angles.\n\nStep 1: Find the angle opposite the 9 cm side:\n  tan θ = 9/12 = 0.75 → θ = tan⁻¹(0.75) = 36.9°\n\nStep 2: The other acute angle = 90° − 36.9° = 53.1°\n\n✓ Answers: 36.9° and 53.1° (these two always sum to 90°).',
      },
    },
    {
      id: 'h-compare',
      type: 'heading',
      data: { text: 'Pythagoras vs Trigonometry — When to Use Which?', level: 2 },
    },
    {
      id: 'p-compare',
      type: 'paragraph',
      data: {
        text: 'Both Pythagoras\' theorem and trigonometry deal with right-angled triangles, but they are used in different situations. Choose based on what information is given and what you need to find.',
      },
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Choosing between Pythagoras and Trigonometry',
        headers: ['Method', 'What you need to know', 'What you can find', 'Involves angles?'],
        rows: [
          ['Pythagoras\' theorem', 'Two sides', 'Third side', 'No'],
          ['Pythagoras\' theorem', 'All three sides (check)', 'Whether it\'s right-angled', 'No'],
          ['Trigonometry (SOH CAH TOA)', 'An angle + one side', 'Another side', 'Yes'],
          ['Inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)', 'Two sides', 'An angle', 'Yes'],
        ],
      },
    },
    {
      id: 'callout-key-choose',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Quick Decision Guide',
        text: '• Know 2 sides, want 3rd side → Pythagoras\n• Know angle + 1 side, want another side → Trigonometry (SOH CAH TOA)\n• Know 2 sides, want an angle → Inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)\n• Want to check if triangle has a right angle → Pythagoras (verify a² + b² = c²)',
      },
    },
    {
      id: 'callout-we5',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 5 — Deciding which method',
        text: 'A right-angled triangle has a hypotenuse of 13 m and one leg of 5 m.\n(a) Find the other leg.\n(b) Find the angle opposite the 5 m side.\n\n(a) Two sides known, need third → Pythagoras:\n    leg = √(13² − 5²) = √(169 − 25) = √144 = 12 m\n\n(b) Two sides known (opp = 5, hyp = 13), need angle → sin⁻¹:\n    θ = sin⁻¹(5/13) = sin⁻¹(0.3846) = 22.6°\n\n✓ Answers: (a) 12 m  (b) 22.6°',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tips',
        text: '1. Angles in a triangle sum to 180°. In a right-angled triangle, the two acute angles sum to 90°. If you find one, subtract from 90° to get the other.\n2. Always check your calculator is in DEGREE mode (not RAD or GRAD) for IGCSE.\n3. Give angles to 1 decimal place (d.p.) unless the question specifies otherwise.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Confusing sin and sin⁻¹',
        text: 'sin(30°) = 0.5 (gives a ratio). sin⁻¹(0.5) = 30° (gives an angle). These are opposite operations. When FINDING an angle, always use the inverse function (SHIFT + sin/cos/tan on calculator). When FINDING a side (given angle), use sin/cos/tan directly.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<strong>Inverse trig finds angles:</strong> θ = sin⁻¹(opp/hyp), cos⁻¹(adj/hyp), tan⁻¹(opp/adj). Use [SHIFT]+[sin/cos/tan] on calculator in degree mode. <strong>Decision rule:</strong> 2 sides → find third side (Pythagoras) or find angle (inverse trig). Angle + 1 side → find another side (SOH CAH TOA). The two acute angles in a right triangle always add to 90°.',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Inverse trig: θ = sin⁻¹(opp/hyp), cos⁻¹(adj/hyp), tan⁻¹(opp/adj). Use SHIFT+trig on calculator. 2 sides → Pythagoras (find side) or inverse trig (find angle). Angle + 1 side → SOH CAH TOA.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-tan-inv',
        prompt: 'A right-angled triangle has opposite = 5 and adjacent = 12. How do you find the angle θ?',
        answer: 'θ = tan⁻¹(5/12) = tan⁻¹(0.417) ≈ 22.6°.',
      },
      {
        id: 'cue-2',
        blockId: 'callout-key-calc',
        prompt: 'How do you access sin⁻¹ on a scientific calculator?',
        answer: 'Press [SHIFT] (or [2nd]) then [sin]. Make sure calculator is in degree mode.',
      },
      {
        id: 'cue-3',
        blockId: 'tbl-compare',
        prompt: 'When should you use Pythagoras\' theorem rather than trigonometry?',
        answer: 'When you know two sides and want the third — no angle is needed or given.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we4',
        prompt: 'A right-angled triangle has legs 9 cm and 12 cm. One acute angle is 36.9°. What is the other?',
        answer: '90° − 36.9° = 53.1°. The two acute angles always sum to 90°.',
      },
      {
        id: 'cue-5',
        blockId: 'callout-warning',
        prompt: 'What is the difference between sin(30°) and sin⁻¹(0.5)?',
        answer: 'sin(30°) = 0.5 (gives a ratio from an angle). sin⁻¹(0.5) = 30° (gives an angle from a ratio). They are inverse operations.',
      },
      {
        id: 'cue-6',
        blockId: 'callout-key-choose',
        prompt: 'You know an angle and one side. Which method do you use to find another side?',
        answer: 'Trigonometry — SOH CAH TOA. Multiply or divide using the appropriate ratio (sin, cos, or tan).',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
