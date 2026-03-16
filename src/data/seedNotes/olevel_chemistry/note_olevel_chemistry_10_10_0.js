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
