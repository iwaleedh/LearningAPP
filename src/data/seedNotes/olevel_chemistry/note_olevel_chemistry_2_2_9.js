export const note_olevel_chemistry_2_2_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/2 Atoms Elements And Compounds/2-3-3-properties-of-simple-molecular-compounds.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and explain the physical properties of simple molecular covalent compounds in terms of intermolecular forces.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Properties of Simple Molecular Substances', level: 2 }
    },
    {
      id: 'tbl-props',
      type: 'comparisonTable',
      data: {
        caption: 'Physical properties of simple molecular substances',
        headers: ['Property', 'Observation', 'Explanation'],
        rows: [
          ['Melting/boiling point', 'Low (often gases or liquids at room temperature)', 'Weak intermolecular forces between molecules require little energy to overcome'],
          ['State at room temperature', 'Gas, liquid or low-melting solid', 'Weak forces between molecules'],
          ['Electrical conductivity', 'Non-conductors (do not conduct electricity)', 'No free ions or electrons to carry charge'],
          ['Solubility in water', 'Varies — polar molecules often dissolve; non-polar often do not', 'Depends on polarity — like dissolves like'],
          ['Solubility in organic solvents', 'Often soluble (especially non-polar molecules)', 'Non-polar solvents can interact with non-polar molecules'],
          ['Volatility', 'Highly volatile (evaporate easily)', 'Weak intermolecular forces easily overcome at low temperatures']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Intramolecular vs Intermolecular Forces', level: 2 }
    },
    {
      id: 'call-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Key Distinction: Covalent Bonds vs Intermolecular Forces',
        text: '<strong>Intramolecular bonds (covalent bonds):</strong> Strong bonds WITHIN molecules, holding atoms together. These bonds are NOT broken when a molecular substance melts or boils.<br/><br/><strong>Intermolecular forces:</strong> Weak attractions BETWEEN molecules. These ARE broken when a molecular substance melts or boils.<br/><br/>This is why simple molecular substances have low melting/boiling points — it is the <strong>intermolecular forces</strong> (not covalent bonds) that are overcome.'
      }
    },
    {
      id: 'svg-imf',
      type: 'svg',
      data: {
        caption: 'Boiling water breaks weak intermolecular forces, separating H₂O molecules from each other. Strong covalent bonds within the molecules do NOT break.',
        svg: `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
  <!-- Liquid state (left) -->
  <g transform="translate(100, 120)">
    <text x="0" y="-80" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)">Liquid (Close together)</text>
    
    <!-- Molecules -->
    <g id="h2o" transform="translate(0, 0)">
      <circle cx="0" cy="0" r="14" fill="#ef4444"/>
      <circle cx="-10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
      <circle cx="10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
    </g>
    <g transform="translate(-40, 40) rotate(45)">
      <circle cx="0" cy="0" r="14" fill="#ef4444"/>
      <circle cx="-10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
      <circle cx="10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
    </g>
    <g transform="translate(40, -40) rotate(-60)">
      <circle cx="0" cy="0" r="14" fill="#ef4444"/>
      <circle cx="-10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
      <circle cx="10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
    </g>

    <!-- Intermolecular Forces -->
    <path d="M 5 -10 L 25 -30" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" fill="none"/>
    <path d="M -15 0 L -30 20" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" fill="none"/>
    
    <!-- Labels -->
    <text x="-60" y="-30" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Weak intermolecular</text>
    <text x="-60" y="-15" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">forces</text>
    <path d="M -60 -10 L -20 10" stroke="var(--color-text-tertiary)" stroke-width="1.5" fill="none"/>
  </g>

  <!-- Process -->
  <g transform="translate(300, 120)">
    <path d="M -30 0 L 30 0 L 20 -10 M 30 0 L 20 10" stroke="var(--color-text-tertiary)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="0" y="25" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" font-size="14" fill="#ef4444">Heat (Boiling)</text>
  </g>

  <!-- Gas state (right) -->
  <g transform="translate(500, 120)">
    <text x="0" y="-80" text-anchor="middle" font-family="var(--font-sans)" font-weight="bold" fill="var(--color-text)">Gas (Far apart)</text>
    
    <!-- Molecules -->
    <g transform="translate(-40, -40) rotate(15)">
      <circle cx="0" cy="0" r="14" fill="#ef4444"/>
      <circle cx="-10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
      <circle cx="10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
    </g>
    <g transform="translate(40, -10) rotate(-120)">
      <circle cx="0" cy="0" r="14" fill="#ef4444"/>
      <circle cx="-10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
      <circle cx="10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
    </g>
    <g transform="translate(-20, 50) rotate(80)">
      <circle cx="0" cy="0" r="14" fill="#ef4444"/>
      <circle cx="-10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
      <circle cx="10" cy="-12" r="8" fill="#f8fafc" stroke="#94a3b8"/>
    </g>

    <!-- Labels -->
    <text x="50" y="45" font-family="var(--font-sans)" font-weight="bold" font-size="12" fill="#ef4444">Broken</text>
    <text x="50" y="60" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">intermolecular</text>
    <text x="50" y="75" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">forces</text>
    
    <!-- Label holding atom -->
    <path d="M -50 -70 L -40 -50" stroke="var(--color-text-tertiary)" stroke-width="1.5" fill="none"/>
    <text x="-50" y="-80" font-family="var(--font-sans)" font-size="12" fill="var(--color-text-secondary)">Covalent bonds remain!</text>
  </g>
</svg>`
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Common Exam Mistake',
        text: 'Do NOT say "covalent bonds are broken when a molecular substance melts." The covalent bonds within molecules remain intact during melting and boiling. Only the weak <strong>intermolecular forces</strong> between molecules are overcome.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Simple molecular substances have low melting/boiling points (weak intermolecular forces between molecules), do not conduct electricity (no free ions/electrons), and are volatile. During melting, covalent bonds within molecules are NOT broken — only weak intermolecular forces are overcome.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Simple molecular substances: low mp/bp (weak intermolecular forces), non-conductors, volatile; covalent bonds within molecules are NOT broken during melting.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-props', prompt: 'Why do simple molecular covalent substances have low melting and boiling points?', answer: 'They have weak intermolecular forces between molecules that require little energy to overcome. (NOT because covalent bonds are weak.)' },
      { id: 'cue-2', blockId: 'call-key1', prompt: 'What is the difference between intramolecular bonds and intermolecular forces?', answer: 'Intramolecular bonds (covalent bonds) are strong bonds WITHIN molecules, not broken during changes of state. Intermolecular forces are weak attractions BETWEEN molecules, broken during melting and boiling.' },
      { id: 'cue-3', blockId: 'tbl-props', prompt: 'Why do simple molecular covalent substances not conduct electricity?', answer: 'There are no free ions or free electrons to carry electrical charge.' }
    ]
  },
  evidence: [],
  mentions: []
};
