export const note_olevel_physics_1_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Physics/1 Motion Forces And Energy/1-4-3-newtons-second-law.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State Newton\'s Second Law of Motion; use F = ma to solve problems; explain the effect of varying force and mass on acceleration.' },
    },
    {
      id: 'h-n2l',
      type: 'heading',
      data: { text: 'Newton\'s Second Law', level: 2 },
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Newton\'s Second Law',
        text: 'The acceleration of an object is <strong>directly proportional to the resultant force</strong> and <strong>inversely proportional to the mass</strong> of the object, in the direction of the resultant force.<br><br><strong>F = ma</strong> — where F is in newtons (N), m is in kg, a is in m/s².',
      },
    },
    {
      id: 'eq-fma',
      type: 'equation',
      data: {
        html: 'F = m × a &nbsp;⟹&nbsp; a = <span class="nb-frac"><span class="nb-num">F</span><span class="nb-den">m</span></span> &nbsp;⟹&nbsp; m = <span class="nb-frac"><span class="nb-num">F</span><span class="nb-den">a</span></span>',
        caption: 'F = resultant force (N), m = mass (kg), a = acceleration (m/s²)',
      },
    },
    {
      id: 'h-effect',
      type: 'heading',
      data: { text: 'Effect of Force and Mass', level: 2 },
    },
    {
      id: 'list-effects',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>Greater force → greater acceleration</strong> (if mass stays the same). Double the force = double the acceleration.' },
          { text: '<strong>Greater mass → smaller acceleration</strong> (if force stays the same). Double the mass = half the acceleration.' },
          { text: 'Acceleration is in the <em>direction</em> of the resultant force.' },
        ],
      },
    },
    {
      id: 'svg-fma',
      type: 'svg',
      data: {
        svg: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif">
  <rect width="440" height="200" fill="#eff6ff" rx="10"/>
  <text x="220" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">F = ma: Relationships</text>
  <!-- F vs a graph (left) -->
  <text x="90" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">F vs a (constant m)</text>
  <line x1="30" y1="155" x2="155" y2="155" stroke="#374151" stroke-width="1.5"/>
  <line x1="30" y1="155" x2="30" y2="50" stroke="#374151" stroke-width="1.5"/>
  <text x="158" y="159" font-size="10" fill="#374151">a</text>
  <text x="24" y="47" font-size="10" fill="#374151">F</text>
  <line x1="30" y1="155" x2="150" y2="60" stroke="#2563eb" stroke-width="2.5"/>
  <text x="90" y="175" text-anchor="middle" font-size="10" fill="#2563eb">Straight line through origin</text>
  <!-- m vs a graph (right) -->
  <text x="320" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#374151">m vs a (constant F)</text>
  <line x1="260" y1="155" x2="390" y2="155" stroke="#374151" stroke-width="1.5"/>
  <line x1="260" y1="155" x2="260" y2="50" stroke="#374151" stroke-width="1.5"/>
  <text x="393" y="159" font-size="10" fill="#374151">m</text>
  <text x="254" y="47" font-size="10" fill="#374151">a</text>
  <!-- Inverse curve -->
  <path d="M 265 55 Q 290 75 310 105 Q 335 130 380 148" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <text x="320" y="175" text-anchor="middle" font-size="10" fill="#ef4444">Inverse relationship (curve)</text>
</svg>`,
        caption: 'F–a: directly proportional (linear). m–a: inversely proportional (curve).',
      },
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example',
        text: 'A 1200 kg car accelerates at 3 m/s². What resultant force acts on it?<br><br>F = ma = 1200 × 3 = <strong>3600 N</strong><br><br>If the force becomes 6000 N, find the new acceleration:<br>a = F/m = 6000 ÷ 1200 = <strong>5 m/s²</strong>',
      },
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip: Always Use Resultant',
        text: 'F in F = ma is always the <strong>resultant</strong> (net) force — the vector sum of all forces. If a car engine pushes with 5000 N but friction is 2000 N, then F = 5000 − 2000 = 3000 N.',
      },
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Newton\'s Second Law: F = ma. Bigger resultant force → bigger acceleration; bigger mass → smaller acceleration. Always use the resultant (net) force in the formula. Acceleration is in the direction of the net force.' },
    },
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'F = ma: resultant force equals mass × acceleration. Doubling force doubles acceleration; doubling mass halves acceleration.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'State Newton\'s Second Law of Motion.', answer: 'The acceleration of an object is directly proportional to the resultant force and inversely proportional to its mass. F = ma.' },
      { id: 'cue-2', blockId: 'eq-fma', prompt: 'A resultant force of 450 N acts on an 90 kg object. What is the acceleration?', answer: 'a = F/m = 450 ÷ 90 = 5 m/s².' },
      { id: 'cue-3', blockId: 'list-effects', prompt: 'A force of 300 N gives a trolley an acceleration of 2 m/s². What force would give it an acceleration of 5 m/s²?', answer: 'Since F ∝ a (same mass), new F = 300 × (5/2) = 750 N.' },
      { id: 'cue-4', blockId: 'call-tip', prompt: 'A car engine provides 4000 N but friction is 1500 N. If the car has mass 1000 kg, what is its acceleration?', answer: 'Resultant F = 4000 − 1500 = 2500 N. a = F/m = 2500 ÷ 1000 = 2.5 m/s².' },
    ],
  },
  evidence: [],
  mentions: [],
};
