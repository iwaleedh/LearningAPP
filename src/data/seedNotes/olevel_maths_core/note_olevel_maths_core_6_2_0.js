export const note_olevel_maths_core_6_2_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Maths Core/Pythagoras And Trigonometry/trigonometry-to-find-lengths.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: {
        text: 'Use the trigonometric ratios (SOH CAH TOA) to find missing side lengths in right-angled triangles, and apply trigonometry to angles of elevation and depression.',
      },
    },
    {
      id: 'h-intro',
      type: 'heading',
      data: { text: 'Introduction to Trigonometry', level: 2 },
    },
    {
      id: 'p-intro',
      type: 'paragraph',
      data: {
        text: 'Trigonometry allows us to find unknown sides (and angles) in <strong>right-angled triangles</strong> when we know an angle and at least one side. The three core ratios are <strong>sine</strong>, <strong>cosine</strong>, and <strong>tangent</strong> — remembered using the mnemonic <strong>SOH CAH TOA</strong>.',
      },
    },
    {
      id: 'h-label',
      type: 'heading',
      data: { text: 'Labelling the Sides', level: 2 },
    },
    {
      id: 'p-label',
      type: 'paragraph',
      data: {
        text: 'The names of the sides depend on the <strong>angle you are working with</strong> (call it θ). The three sides are: <strong>Hypotenuse</strong> — longest side, always opposite the right angle. <strong>Opposite</strong> — the side directly across from angle θ. <strong>Adjacent</strong> — the side next to angle θ (that is not the hypotenuse).',
      },
    },
    {
      id: 'svg-triangle',
      type: 'svg',
      data: {
        caption: 'Labelled right-angled triangle showing θ, opposite, adjacent and hypotenuse',
        svg: `<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Triangle -->
  <polygon points="30,180 30,40 240,180" fill="#2d2d72" stroke="#6366f1" stroke-width="2"/>
  <!-- Right angle marker -->
  <polyline points="30,160 50,160 50,180" fill="none" stroke="#6366f1" stroke-width="1.5"/>
  <!-- Angle theta arc -->
  <path d="M 240,180 A 30,30 0 0 0 220,152" fill="none" stroke="#e11d48" stroke-width="1.5"/>
  <text x="200" y="172" font-size="14" fill="#e11d48" font-weight="bold">θ</text>
  <!-- Hypotenuse label -->
  <text x="118" y="95" font-size="13" fill="#6366f1" font-weight="bold" transform="rotate(-36,118,95)">Hypotenuse</text>
  <!-- Opposite label (vertical left side) -->
  <text x="2" y="115" font-size="13" fill="#059669" font-weight="bold">Opposite</text>
  <!-- Adjacent label (horizontal bottom) -->
  <text x="90" y="198" font-size="13" fill="#d97706" font-weight="bold">Adjacent</text>
</svg>`,
      },
    },
    {
      id: 'h-soct',
      type: 'heading',
      data: { text: 'SOH CAH TOA — The Three Ratios', level: 2 },
    },
    {
      id: 'p-soct',
      type: 'paragraph',
      data: {
        text: 'Each ratio relates two sides of a right-angled triangle. Learn the mnemonic: <strong>S</strong>in <strong>O</strong>pposite <strong>H</strong>ypotenuse — <strong>C</strong>os <strong>A</strong>djacent <strong>H</strong>ypotenuse — <strong>T</strong>an <strong>O</strong>pposite <strong>A</strong>djacent.',
      },
    },
    {
      id: 'eq-sin',
      type: 'equation',
      data: {
        html: 'sin θ = <span class="nb-frac"><span class="nb-num">opposite</span><span class="nb-den">hypotenuse</span></span>',
        caption: 'SOH — Sine ratio',
      },
    },
    {
      id: 'eq-cos',
      type: 'equation',
      data: {
        html: 'cos θ = <span class="nb-frac"><span class="nb-num">adjacent</span><span class="nb-den">hypotenuse</span></span>',
        caption: 'CAH — Cosine ratio',
      },
    },
    {
      id: 'eq-tan',
      type: 'equation',
      data: {
        html: 'tan θ = <span class="nb-frac"><span class="nb-num">opposite</span><span class="nb-den">adjacent</span></span>',
        caption: 'TOA — Tangent ratio',
      },
    },
    {
      id: 'callout-key-choose',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Choosing the Right Ratio',
        text: '1. Label the sides (opposite, adjacent, hypotenuse) relative to the given angle θ.\n2. Identify which two sides are involved (given + unknown).\n3. Pick the ratio that uses those two sides.\n4. Rearrange to isolate the unknown side.\n5. Calculate.',
      },
    },
    {
      id: 'h-rearrange',
      type: 'heading',
      data: { text: 'Rearranging to Find Missing Sides', level: 2 },
    },
    {
      id: 'p-rearrange',
      type: 'paragraph',
      data: {
        text: 'Once you have written the correct ratio, rearrange it to isolate the missing side. Multiply both sides appropriately.',
      },
    },
    {
      id: 'tbl-rearrange',
      type: 'comparisonTable',
      data: {
        caption: 'Rearrangements for finding missing sides',
        headers: ['Unknown side', 'Formula to use'],
        rows: [
          ['Hypotenuse (using sin)', 'hypotenuse = opposite ÷ sin θ'],
          ['Hypotenuse (using cos)', 'hypotenuse = adjacent ÷ cos θ'],
          ['Opposite (using sin)', 'opposite = hypotenuse × sin θ'],
          ['Adjacent (using cos)', 'adjacent = hypotenuse × cos θ'],
          ['Opposite (using tan)', 'opposite = adjacent × tan θ'],
          ['Adjacent (using tan)', 'adjacent = opposite ÷ tan θ'],
        ],
      },
    },
    {
      id: 'callout-we1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 1 — Find opposite using sin',
        text: 'In a right-angled triangle, θ = 30° and the hypotenuse = 10 cm. Find the opposite side.\n\nStep 1: Identify sides: we know hypotenuse, want opposite → use sin.\nStep 2: sin 30° = opposite / hypotenuse\nStep 3: Rearrange: opposite = hypotenuse × sin 30°\nStep 4: opposite = 10 × sin 30° = 10 × 0.5 = 5 cm\n\n✓ Answer: opposite = 5 cm',
      },
    },
    {
      id: 'callout-we2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 2 — Find adjacent using cos',
        text: 'A right-angled triangle has θ = 40° and hypotenuse = 8 cm. Find the adjacent side.\n\nStep 1: We know hypotenuse and want adjacent → use cos.\nStep 2: cos 40° = adjacent / 8\nStep 3: adjacent = 8 × cos 40° = 8 × 0.766 ≈ 6.13 cm\n\n✓ Answer: adjacent ≈ 6.13 cm (3 s.f.)',
      },
    },
    {
      id: 'callout-we3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 3 — Find opposite using tan',
        text: 'A right-angled triangle has θ = 55° and adjacent = 7 cm. Find the opposite side.\n\nStep 1: We know adjacent and want opposite → use tan.\nStep 2: tan 55° = opposite / 7\nStep 3: opposite = 7 × tan 55° = 7 × 1.428 ≈ 10.0 cm\n\n✓ Answer: opposite ≈ 10.0 cm (3 s.f.)',
      },
    },
    {
      id: 'callout-we4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 4 — Find the hypotenuse using sin',
        text: 'In a triangle, θ = 25° and the opposite side = 6 cm. Find the hypotenuse.\n\nStep 1: We know opposite and want hypotenuse → use sin.\nStep 2: sin 25° = 6 / hypotenuse\nStep 3: hypotenuse = 6 / sin 25° = 6 / 0.4226 ≈ 14.2 cm\n\n✓ Answer: hypotenuse ≈ 14.2 cm (3 s.f.)',
      },
    },
    {
      id: 'h-elev',
      type: 'heading',
      data: { text: 'Angles of Elevation and Depression', level: 2 },
    },
    {
      id: 'p-elev',
      type: 'paragraph',
      data: {
        text: 'An <strong>angle of elevation</strong> is measured upward from the horizontal to the line of sight. An <strong>angle of depression</strong> is measured downward from the horizontal. Both form right-angled triangles, so trigonometry applies directly.',
      },
    },
    {
      id: 'svg-elev',
      type: 'svg',
      data: {
        caption: 'Angle of elevation (looking up) and angle of depression (looking down)',
        svg: `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="12">
  <!-- Ground line -->
  <line x1="20" y1="120" x2="300" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Observer -->
  <circle cx="40" cy="118" r="4" fill="#6366f1"/>
  <!-- Building / tall object -->
  <rect x="250" y="30" width="20" height="90" fill="#2d2f72" stroke="#6366f1" stroke-width="1.5"/>
  <!-- Line of sight (elevation) -->
  <line x1="40" y1="118" x2="250" y2="32" stroke="#e11d48" stroke-width="1.5"/>
  <!-- Elevation arc -->
  <path d="M 100,118 A 60,60 0 0 1 90,90" fill="none" stroke="#e11d48" stroke-width="1.5"/>
  <text x="108" y="105" font-size="12" fill="#e11d48">elevation</text>
  <!-- Second observer above -->
  <circle cx="40" cy="40" r="4" fill="#059669"/>
  <!-- Horizontal from top observer -->
  <line x1="40" y1="40" x2="220" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Line of sight (depression) -->
  <line x1="40" y1="40" x2="250" y2="118" stroke="#059669" stroke-width="1.5"/>
  <!-- Depression arc -->
  <path d="M 100,40 A 60,60 0 0 0 96,64" fill="none" stroke="#059669" stroke-width="1.5"/>
  <text x="108" y="58" font-size="12" fill="#059669">depression</text>
</svg>`,
      },
    },
    {
      id: 'callout-we5',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example 5 — Angle of elevation',
        text: 'A person stands 20 m from the base of a building. The angle of elevation to the top is 35°. Find the height of the building.\n\nStep 1: Draw diagram — horizontal base = 20 m (adjacent), height = opposite, angle = 35°.\nStep 2: Use tan: tan 35° = height / 20\nStep 3: height = 20 × tan 35° = 20 × 0.7002 ≈ 14.0 m\n\n✓ Answer: Height ≈ 14.0 m (3 s.f.)',
      },
    },
    {
      id: 'callout-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — SOH CAH TOA memory trick',
        text: 'Some Old Hippos Can Always Hear Their Old Age. (SOH CAH TOA). Write this phrase at the top of a trig problem to remind yourself of all three ratios. Always clearly label Opposite, Adjacent, Hypotenuse on your diagram before choosing a formula.',
      },
    },
    {
      id: 'callout-warning',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake — Wrong side labelled',
        text: 'Opposite and Adjacent depend on the angle you are working with. If the angle changes, the labels change. Always re-label for the specific angle in the question. The hypotenuse, however, is always recognisable as the side opposite the right angle.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: {
        text: '<strong>SOH CAH TOA:</strong> sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj. Label sides relative to the angle. Pick the ratio that links given + unknown sides. Rearrange: multiply or divide to isolate the unknown. Apply to angles of elevation (upward) and depression (downward).',
      },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'SOH CAH TOA. sin = opp/hyp, cos = adj/hyp, tan = opp/adj. Label sides for the angle, pick the ratio, rearrange.',
    cues: [
      {
        id: 'cue-1',
        blockId: 'eq-sin',
        prompt: 'Write the three SOH CAH TOA ratios.',
        answer: 'sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj.',
      },
      {
        id: 'cue-2',
        blockId: 'p-label',
        prompt: 'How do you identify the "opposite" side in a right-angled triangle?',
        answer: 'The opposite side is the side directly across from the angle θ (not touching it).',
      },
      {
        id: 'cue-3',
        blockId: 'callout-we2',
        prompt: 'A right-angled triangle has θ = 40° and hypotenuse = 8 cm. Which ratio finds the adjacent, and what is its value?',
        answer: 'cos (CAH): adjacent = 8 × cos 40° ≈ 6.13 cm.',
      },
      {
        id: 'cue-4',
        blockId: 'callout-we3',
        prompt: 'How do you find the opposite side when you know the adjacent side and angle θ?',
        answer: 'Use tan: opposite = adjacent × tan θ.',
      },
      {
        id: 'cue-5',
        blockId: 'h-elev',
        prompt: 'What is the difference between an angle of elevation and an angle of depression?',
        answer: 'Elevation is measured upward from horizontal; depression is measured downward from horizontal.',
      },
      {
        id: 'cue-6',
        blockId: 'callout-we4',
        prompt: 'To find the hypotenuse when you know the opposite side and angle θ, which formula do you use?',
        answer: 'Use sin: hypotenuse = opposite ÷ sin θ.',
      },
    ],
  },
  evidence: [],
  mentions: [],
};
