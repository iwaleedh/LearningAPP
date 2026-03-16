export const note_olevel_physics_1_5_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-5-2-principle-of-moments.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the Principle of Moments; apply it to solve problems involving levers and beams in equilibrium; identify conditions for equilibrium.' },
    },
    {
      id: 'h-principle',
      type: 'heading',
      data: { text: 'Principle of Moments', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Principle of Moments',
        text: 'For a body in <strong>equilibrium</strong>, the <strong>sum of clockwise moments</strong> about any pivot equals the <strong>sum of anticlockwise moments</strong> about the same pivot.<br><br>Σ CW moments = Σ ACW moments',
      },
    },
    {
      id: 'h-equilibrium',
      type: 'heading',
      data: { text: 'Conditions for Equilibrium', level: 2 },
    },
    {
      id: 'list-equil',
      type: 'list',
      data: {
        style: 'numbered',
        items: [
          { text: 'The <strong>resultant force</strong> on the body is zero (forces balanced in all directions).' },
          { text: 'The <strong>resultant moment</strong> about any point is zero (sum CW = sum ACW).' },
        ],
      },
    },
    {
      id: 'svg-beam',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="220" fill="#f0fdf4" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Principle of Moments — Balanced Beam</text>
  <!-- Beam -->
  <rect x="40" y="100" width="360" height="12" fill="#78350f" rx="3"/>
  <!-- Pivot at centre -->
  <polygon points="220,112 205,145 235,145" fill="#374151"/>
  <rect x="195" y="145" width="50" height="8" fill="#374151" rx="2"/>
  <text x="220" y="165" text-anchor="middle" font-size="11" fill="#374151">Pivot</text>
  <!-- Left force (ACW) -->
  <line x1="100" y1="100" x2="100" y2="55" stroke="#2563eb" stroke-width="3"/>
  <polygon points="100,55 96,64 104,64" fill="#2563eb"/>
  <text x="50" y="80" font-size="11" fill="#2563eb">F₁ = 40 N</text>
  <!-- Left distance -->
  <line x1="100" y1="88" x2="220" y2="88" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="158" y="82" text-anchor="middle" font-size="10" fill="#2563eb">d₁ = 0.6 m</text>
  <!-- Right force (CW) -->
  <line x1="320" y1="100" x2="320" y2="55" stroke="#ef4444" stroke-width="3"/>
  <polygon points="320,55 316,64 324,64" fill="#ef4444"/>
  <text x="335" y="80" font-size="11" fill="#ef4444">F₂ = ?</text>
  <!-- Right distance -->
  <line x1="220" y1="88" x2="320" y2="88" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="270" y="82" text-anchor="middle" font-size="10" fill="#ef4444">d₂ = 0.4 m</text>
  <!-- Calculation box -->
  <rect x="40" y="175" width="360" height="36" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" rx="6"/>
  <text x="220" y="190" text-anchor="middle" font-size="11" fill="#166534">ACW: 40 × 0.6 = 24 N·m  |  CW: F₂ × 0.4 = 24 N·m</text>
  <text x="220" y="205" text-anchor="middle" font-size="12" fill="#166534" font-weight="bold">F₂ = 24 ÷ 0.4 = 60 N</text>
</svg>`,
        caption: 'ACW moment = CW moment at equilibrium. F₂ can be found by equating moments.',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A 3 m uniform beam is balanced on a pivot at its centre. A 200 N weight hangs 0.5 m to the left of the pivot. How far to the right must a 100 N weight hang to balance the beam?<br><br>ACW = 200 × 0.5 = 100 N·m<br>CW = 100 × d<br>100d = 100  →  <strong>d = 1.0 m</strong>',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Choose Any Pivot',
        text: 'You can take moments about any point — choose a pivot that eliminates an unknown force from the equation (take moments about the point where that unknown force acts — its moment = 0).',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Principle of Moments: for equilibrium, sum of CW moments = sum of ACW moments about any pivot. Two conditions for equilibrium: (1) resultant force = 0, (2) resultant moment = 0. Choose a pivot that eliminates an unknown to simplify calculation.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Σ CW moments = Σ ACW moments for equilibrium (Principle of Moments).',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State the Principle of Moments.', answer: 'For an object in equilibrium, the sum of clockwise moments about any pivot equals the sum of anticlockwise moments about the same pivot.' },
      { id: 'cue-2', blockId: 'list-equil', prompt: 'State the two conditions necessary for a body to be in equilibrium.', answer: '1. Resultant force = zero (forces balanced). 2. Resultant moment = zero (sum of CW moments = sum of ACW moments).' },
      { id: 'cue-3', blockId: 'svg-beam', prompt: 'A 30 N weight is placed 0.8 m to the left of a pivot. A 20 N weight is placed to the right. How far from the pivot must the 20 N weight be to balance?', answer: 'ACW = 30 × 0.8 = 24 N·m. 20 × d = 24. d = 1.2 m.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'Why is it useful to take moments about the point where an unknown force acts?', answer: 'Because the moment of that unknown force about that point is zero (d = 0), so it disappears from the equation, allowing other unknowns to be found easily.' },
    ],
  },
  evidence: [],
  mentions: [],
};
