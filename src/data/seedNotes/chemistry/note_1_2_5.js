/**
 * Seed note: Chemistry · Unit 1 · Topic 2 · Subtopic 5
 * "Successive ionisation energies"
 * Source: Pearson Edexcel IAL Chemistry — Section 2A.4
 */
export const note_chemistry_1_2_5 = {
  blocks: [
    {
      id: 'objective',
      type: 'objective',
      data: { text: 'Define successive ionisation energies. Use successive IE data to deduce electronic structure and identify which group an element is in.' },
      terms: []
    },
    {
      id: 'h-def',
      type: 'heading',
      data: { text: 'Successive Ionisation Energies', level: 2 },
      terms: []
    },
    {
      id: 'p-def',
      type: 'paragraph',
      data: { text: 'After the first ionisation, subsequent electrons can also be removed. Each removal requires more energy than the previous — the ion becomes more positively charged, so it attracts the remaining electrons more strongly.' },
      terms: []
    },
    {
      id: 'table-eqs',
      type: 'comparisonTable',
      data: {
        caption: 'The first three ionisation energies of sodium',
        headers: ['Step', 'Equation', 'IE value'],
        rows: [
          ['1st IE', 'Na(g) → Na⁺(g) + e⁻', '496 kJ mol⁻¹'],
          ['2nd IE', 'Na⁺(g) → Na²⁺(g) + e⁻', '4563 kJ mol⁻¹'],
          ['3rd IE', 'Na²⁺(g) → Na³⁺(g) + e⁻', '6913 kJ mol⁻¹']
        ]
      },
      terms: ['Successive ionisation energy']
    },
    {
      id: 'callout-jump',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Sudden Increase — Finding the Group',
        text: 'When successive IEs are plotted on a log scale, there is a <strong>sudden large increase (a jump)</strong> when the next electron to be removed comes from <em>a different, inner quantum shell</em> — one that is closer to the nucleus with less shielding.<br/><br/>The jump in IE occurs between removing the last outer-shell electron and the first inner-shell electron. <strong>The number of electrons removed before the jump tells you the number of outer-shell electrons = the Group of the element.</strong><br/><br/>Example (Na above): huge jump between 1st IE and 2nd IE → Na has <strong>1</strong> outer-shell electron → Group <strong>1</strong>.'
      },
      terms: []
    },
    {
      id: 'callout-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Exam-style: Deduce the group of an unknown element',
        text: 'An element X has the following successive IEs (kJ mol⁻¹):<br/>IE₁: 578 | IE₂: 1817 | IE₃: 2745 | IE₄: 11,578 | IE₅: 14,831<br/><br/>The IE more than doubles (large jump) between IE₃ and IE₄. This means the 4th electron is in an inner shell. Therefore, X has <strong>3 outer-shell electrons</strong> → X is in <strong>Group 3</strong> (e.g. Aluminium, Al).'
      },
      terms: []
    },
    {
      id: 'callout-mg-data',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Magnesium Successive IE Data (Video Example)',
        text: '<strong>Magnesium (Z = 12), config: 1s² 2s² 2p⁶ 3s²</strong><br/><br/>IE₁ = 744 kJ mol⁻¹ (removes 1st 3s electron)<br/>IE₂ = 1460 kJ mol⁻¹ (removes 2nd 3s electron)<br/>IE₃ = 7750 kJ mol⁻¹ (removes 1st 2p electron — <strong>HUGE JUMP</strong>)<br/><br/>The jump from IE₂ to IE₃ is ~5× larger. This is because electrons 1 and 2 came from the 3s (outer shell), but electron 3 comes from the 2p — a lower, inner shell, much closer to the nucleus with less shielding above it.<br/><br/><em>This jump tells us Mg has 2 outer-shell electrons → Group 2 ✓</em>'
      },
      terms: []
    },
    {
      id: 'callout-general-increase',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Why IEs Also Gradually Increase Within the Same Shell',
        text: 'Even within the same shell, each successive IE is higher. Two reasons:<br/>1. <strong>Increasing ionic charge:</strong> As each electron is removed, the overall charge on the ion increases. The remaining electrons are attracted more strongly to the same nucleus → harder to remove the next one.<br/>2. <strong>Decreasing electron-electron repulsion:</strong> With fewer electrons remaining, there is less repulsion between them, so the effective nuclear charge experienced by each remaining electron increases.'
      },
      terms: []
    },
    {
      id: 'h-practice-sie',
      type: 'heading',
      data: { text: 'Practice Questions', level: 2 },
      terms: []
    },
    {
      id: 'callout-pq-sie1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q1: Identify Group from Successive IE Data',
        text: '<strong>Question:</strong> The successive ionisation energies (kJ mol⁻¹) of an element Y are:<br/>IE₁: 496; IE₂: 4562; IE₃: 6910; IE₄: 9514; IE₅: 13,352; IE₆: 16,611<br/><br/>Determine the group of element Y and identify the element (Period 3).<br/><br/><strong>Step 1 — Find the big jump:</strong><br/>IE₁ = 496, IE₂ = 4562. The jump from IE₁ to IE₂ is about 9× → massive jump between 1st and 2nd IE.<br/><br/><strong>Step 2 — Determine position:</strong><br/>The jump occurs after removing 1 electron → element has 1 outer-shell electron → <strong>Group 1</strong><br/><br/><strong>Step 3 — Identify:</strong><br/>Group 1, Period 3 → <strong>Sodium (Na)</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-sie2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q2: Explain Two Jumps in a Sodium IE Graph',
        text: '<strong>Question:</strong> A log scale graph of successive IEs for sodium shows two sharp increases. Identify where these jumps occur and explain each one.<br/><br/><strong>Sodium: 1s² 2s² 2p⁶ 3s¹ (10 s-block electrons, 1 outer)</strong><br/><br/><strong>Jump 1 (between IE₁ and IE₂):</strong><br/>IE₁ removes the 3s¹ electron (outer shell). IE₂ must remove from the 2p (inner shell, much lower energy, close to nucleus). → <strong>Huge jump = breaking into quantum shell 2.</strong><br/><br/><strong>Jump 2 (between IE₉ and IE₁₀):</strong><br/>IE₂–IE₉ removes all 8 electrons from shell 2 (2s² 2p⁶). IE₁₀ must remove from the 1s (innermost shell, very close to nucleus). → <strong>Second huge jump = breaking into quantum shell 1.</strong>'
      },
      terms: []
    },
    {
      id: 'callout-pq-sie3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Practice Q3: Write the Equation for 3rd IE of Magnesium',
        text: '<strong>Question:</strong> Magnesium\'s 3rd IE = 7750 kJ mol⁻¹. Write the equation that represents this process and explain why this value is so much higher than the 1st and 2nd IEs.<br/><br/><strong>Equation:</strong><br/>Mg²⁺(g) → Mg³⁺(g) + e⁻<br/><br/><strong>Explanation:</strong><br/>The 1st and 2nd IEs both remove electrons from the 3s subshell (outer shell, n = 3). The 3rd electron must be removed from the 2p subshell (inner shell, n = 2). This orbital is:<br/>• Closer to the nucleus (less distance to overcome)<br/>• Lower in energy (more tightly held)<br/>• Has less electron-electron repulsion acting on it from above<br/>→ requires significantly more energy to remove. The jump reflects the new inner quantum shell being accessed.'
      },
      terms: []
    }
  ],
  recall: {
    enabled: true,
    cues: [
      { id: 'c1', blockId: 'p-def', prompt: 'Why do successive ionisation energies always increase?' },
      { id: 'c2', blockId: 'callout-jump', prompt: 'What causes the sudden large jump in successive ionisation energy values? How does this jump help you identify the group of an element?' },
      { id: 'c3', blockId: 'callout-mg-data', prompt: 'Magnesium has IEs of 744, 1460 and 7750 kJ/mol. Explain why there is a large jump between the 2nd and 3rd values.' },
      { id: 'c4', blockId: 'callout-pq-sie1', prompt: 'An element has a huge jump in IE between IE₁ and IE₂. What group does it belong to? If it is in Period 3, which element is it?' },
      { id: 'c5', blockId: 'callout-pq-sie3', prompt: 'Write the equation for the 3rd IE of magnesium. Explain why this value is much higher than the 1st and 2nd IEs.' }
    ],
    summaryText: 'Successive IEs increase because: (1) ionic charge increases → stronger attraction; (2) fewer electrons → less repulsion → higher effective nuclear charge. Sudden jumps occur when breaking into a lower inner quantum shell. Number of electrons removed before the jump = group number. Multiple jumps possible (one per shell boundary).',
    ready: false
  },
  evidence: []
};
export default note_chemistry_1_2_5;