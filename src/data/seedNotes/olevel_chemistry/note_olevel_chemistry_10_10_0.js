export const note_olevel_chemistry_10_10_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/10 Chemistry Of The Environment/10-1-1-water-chemical-tests.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe tests for the presence of water and tests that distinguish pure water from impure water.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Testing for Water', level: 2 }
    },
    {
      id: 'svg-water-tests',
      type: 'svg',
      data: {
        caption: 'Chemical tests for the presence of water: anhydrous copper(II) sulfate and cobalt(II) chloride paper.',
        svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Copper Sulfate Test -->
  <!-- Before -->
  <rect x="50" y="40" width="80" height="40" rx="4" fill="#0f172a" stroke="#a1a1aa" stroke-width="2"/>
  <text x="90" y="65" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#52525b" text-anchor="middle">White</text>
  <text x="90" y="95" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Anhydrous</text>
  <text x="90" y="110" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">CuSO₄</text>

  <!-- Arrow -->
  <text x="160" y="55" font-family="var(--font-sans)" font-size="12" fill="#3b82f6" text-anchor="middle">+ Water</text>
  <path d="M 140 60 L 180 60" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-head-blue)"/>

  <!-- After -->
  <rect x="190" y="40" width="80" height="40" rx="4" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
  <text x="230" y="65" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Blue</text>
  <text x="230" y="95" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Hydrated</text>
  <text x="230" y="110" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">CuSO₄·5H₂O</text>

  <!-- Cobalt Chloride Test -->
  <!-- Before -->
  <rect x="290" y="120" width="60" height="60" fill="#60a5fa" stroke="#2563eb" stroke-width="2"/>
  <text x="320" y="155" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Blue</text>
  <text x="320" y="195" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">CoCl₂ paper</text>

  <!-- Arrow -->
  <text x="385" y="145" font-family="var(--font-sans)" font-size="12" fill="#ec4899" text-anchor="middle">+ Water</text>
  <path d="M 360 150 L 410 150" stroke="#ec4899" stroke-width="3" marker-end="url(#arrow-head-pink)"/>

  <!-- After -->
  <rect x="420" y="120" width="60" height="60" fill="#f472b6" stroke="#db2777" stroke-width="2"/>
  <text x="450" y="155" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">Pink</text>
  <text x="450" y="195" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Hydrated paper</text>

  <defs>
    <marker id="arrow-head-blue" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#3b82f6"/>
    </marker>
    <marker id="arrow-head-pink" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="#ec4899"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-tests',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemical Tests for Water (presence only)',
        text: '<strong>Test 1: Anhydrous copper(II) sulfate (CuSO₄)</strong><br/>• Anhydrous CuSO₄ is a <strong>white powder</strong>.<br/>• Add a few drops of the liquid to the powder.<br/>• Result: turns <strong>blue</strong> → water is present: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s)<br/><br/><strong>Test 2: Cobalt(II) chloride paper (CoCl₂)</strong><br/>• Anhydrous cobalt chloride paper is <strong>blue</strong>.<br/>• Add a few drops of the liquid to the paper.<br/>• Result: turns <strong>pink</strong> → water is present'
      }
    },
    {
      id: 'call-pure',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Testing for Pure Water',
        text: 'The chemical tests above only show that <strong>water is present</strong> — not that the water is pure.<br/><br/>To show water is <strong>pure</strong>, test its physical properties:<br/><br/>• <strong>Boiling point:</strong> exactly <strong>100 °C</strong> at standard pressure<br/>• <strong>Freezing/melting point:</strong> exactly <strong>0 °C</strong><br/><br/>Impurities RAISE the boiling point and LOWER the freezing point (colligative properties), so any deviation from these exact values indicates the water is impure.'
      }
    },
    {
      id: 'call-warn',
      type: 'callout',
      data: {
        style: 'warning',
        title: 'Common Mistake',
        text: 'Students often confuse the two types of test:<br/>• CuSO₄ and CoCl₂ tests only prove <strong>water is present</strong>, not purity.<br/>• Measuring boiling/melting point proves <strong>purity</strong>.<br/><br/>If asked "how do you show a liquid is pure water?" — give BOTH: the chemical test (shows it IS water) AND the boiling point = 100°C test (shows it is PURE).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Water present: anhydrous CuSO₄ white→blue; cobalt chloride paper blue→pink. Pure water: boiling point = 100°C and freezing point = 0°C exactly. Chemical tests confirm presence; physical tests confirm purity.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Anhydrous CuSO₄ (white→blue) or CoCl₂ paper (blue→pink) detect water. Pure water: b.p. = 100°C, m.p. = 0°C.',
    cues: [
      { id: 'cue-1', blockId: 'call-tests', prompt: 'Describe how to test for the presence of water using anhydrous copper sulfate.', answer: 'Add the liquid to white anhydrous copper(II) sulfate. If water is present, the powder turns blue due to formation of hydrated copper sulfate (CuSO₄·5H₂O).' },
      { id: 'cue-2', blockId: 'call-pure', prompt: 'The cobalt chloride paper test shows water is present. How would you additionally show the water is pure?', answer: 'Measure the boiling point — pure water boils at exactly 100°C. Also check the freezing point is exactly 0°C. Any deviation indicates impurities.' },
      { id: 'cue-3', blockId: 'call-tests', prompt: 'What colour change does cobalt chloride paper show when water is present?', answer: 'Blue → pink (anhydrous cobalt chloride is blue; hydrated form is pink).' }
    ]
  },
  evidence: [],
  mentions: []
};
