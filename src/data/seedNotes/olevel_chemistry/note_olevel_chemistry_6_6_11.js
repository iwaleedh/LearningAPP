export const note_olevel_chemistry_6_6_11 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-3-2-redox-and-electron-transfer.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Write half equations for oxidation and reduction and use them to construct full ionic equations for redox reactions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Half Equations in Redox', level: 2 }
    },
    {
      id: 'call-half',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Writing Half Equations',
        text: 'A <strong>half equation</strong> shows what happens to one species in a redox reaction (either oxidation or reduction only).<br/><br/>Rules:<br/>1. Balance the atoms (use H⁺ and H₂O to balance in acidic solution; use OH⁻ and H₂O in alkaline)<br/>2. Balance the charge by adding electrons (e⁻) to the more positive side<br/><br/><strong>Oxidation half equation:</strong> shows loss of electrons, e.g.:<br/>Fe → Fe²⁺ + 2e⁻<br/>Mg → Mg²⁺ + 2e⁻<br/><br/><strong>Reduction half equation:</strong> shows gain of electrons, e.g.:<br/>Cu²⁺ + 2e⁻ → Cu<br/>Cl₂ + 2e⁻ → 2Cl⁻'
      }
    },
    {
      id: 'call-combine',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Combining Half Equations',
        text: 'To combine half equations into the full ionic equation:<br/>1. Write both half equations.<br/>2. Multiply so the number of electrons is equal in both.<br/>3. Add the two equations, cancelling electrons.<br/><br/><strong>Example: Displacement of copper by iron</strong><br/>Oxidation: Fe → Fe²⁺ + 2e⁻<br/>Reduction: Cu²⁺ + 2e⁻ → Cu<br/>→ Add: Fe + Cu²⁺ → Fe²⁺ + Cu ✓<br/><br/><strong>Example: Zinc displacing copper</strong><br/>Zn → Zn²⁺ + 2e⁻<br/>Cu²⁺ + 2e⁻ → Cu<br/>→ Zn + Cu²⁺ → Zn²⁺ + Cu ✓'
      }
    },
    {
      id: 'svg-combining',
      type: 'svg',
      data: {
        caption: 'Step-by-step combining of half-equations: balancing the electrons so they cancel out.',
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <text x="20" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)">Example: Magnesium and Silver ions</text>

  <!-- Step 1 -->
  <text x="20" y="60" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)">1. Write half equations</text>
  <text x="40" y="80" font-family="var(--font-mono)" font-size="12" fill="#ef4444">Oxidation: Mg → Mg²⁺ + 2e⁻</text>
  <text x="40" y="100" font-family="var(--font-mono)" font-size="12" fill="#3b82f6">Reduction: Ag⁺ + e⁻ → Ag</text>
  
  <text x="250" y="90" font-family="var(--font-sans)" font-size="10" fill="#64748b">← Produces 2 electrons</text>
  <text x="250" y="100" font-family="var(--font-sans)" font-size="10" fill="#64748b">← Only needs 1 electron!</text>

  <!-- Step 2 -->
  <text x="20" y="130" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)">2. Multiply to balance electrons</text>
  <path d="M 35 140 L 35 170" fill="none" stroke="#f59e0b" stroke-width="2" />
  <text x="40" y="150" font-family="var(--font-mono)" font-size="12" fill="#ef4444">Mg → Mg²⁺ + 2e⁻</text>
  <text x="230" y="150" font-family="var(--font-sans)" font-size="10" fill="#f59e0b">(× 1)</text>

  <text x="40" y="170" font-family="var(--font-mono)" font-size="12" fill="#3b82f6">2Ag⁺ + 2e⁻ → 2Ag</text>
  <text x="230" y="170" font-family="var(--font-sans)" font-size="10" fill="#f59e0b" font-weight="bold">(× 2)</text>

  <!-- Step 3 -->
  <text x="20" y="200" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)">3. Add together (cancel e⁻)</text>
  <line x1="40" y1="210" x2="280" y2="210" stroke="var(--color-text)" stroke-width="1"/>
  <text x="40" y="225" font-family="var(--font-mono)" font-size="14" font-weight="bold" fill="#10b981">Mg + 2Ag⁺ → Mg²⁺ + 2Ag</text>

  <path d="M 120 138 L 140 152" fill="none" stroke="#ef4444" stroke-width="1.5" />
  <path d="M 105 158 L 125 172" fill="none" stroke="#ef4444" stroke-width="1.5" />
  <text x="300" y="223" font-family="var(--font-sans)" font-size="10" fill="#64748b">Electrons are balanced and removed!</text>
</svg>`
      }
    },
    {
      id: 'call-test',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Tests for Oxidising and Reducing Agents',
        text: '<strong>Cl₂ as an oxidising agent:</strong> turns damp blue litmus red then bleaches white; decolourises potassium permanganate solution.<br/><br/><strong>H₂ as a reducing agent:</strong> reduces CuO black → Cu red/pink when passed over it; H₂O vapour formed.<br/><br/><strong>Universal indicator / pH:</strong> concentration of H⁺ (oxidation state +1) unchanged by simple OX/RED reactions.<br/><br/><strong>KMnO₄ (acidified):</strong> purple → colourless = oxidising agent used up (reduced); detects reducing agents.'
      }
    },
    {
      id: 'tbl-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of half equations for common redox reactions',
        headers: ['Species', 'Half Equation', 'Change'],
        rows: [
          ['Magnesium', 'Mg → Mg²⁺ + 2e⁻', 'Oxidised'],
          ['Zinc', 'Zn → Zn²⁺ + 2e⁻', 'Oxidised'],
          ['Iron', 'Fe → Fe²⁺ + 2e⁻', 'Oxidised'],
          ['Copper(II) ion', 'Cu²⁺ + 2e⁻ → Cu', 'Reduced'],
          ['Silver ion', 'Ag⁺ + e⁻ → Ag', 'Reduced'],
          ['Chlorine', 'Cl₂ + 2e⁻ → 2Cl⁻', 'Reduced (Cl₂ is oxidising agent)'],
          ['Bromine', 'Br₂ + 2e⁻ → 2Br⁻', 'Reduced']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Half equations separate oxidation (loss of e⁻) from reduction (gain of e⁻). To combine: equalise electron count then add. Always cancel electrons in final equation. Displacement reactions are always redox — more reactive metal is oxidised; metal ion is reduced.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Half equations: oxidation = loss of e⁻ (e.g. Fe → Fe²⁺ + 2e⁻); reduction = gain of e⁻ (e.g. Cu²⁺ + 2e⁻ → Cu). Combine by equalising electrons then adding.',
    cues: [
      { id: 'cue-1', blockId: 'call-half', prompt: 'Write the half equations for zinc and copper(II) ions.', answer: 'Oxidation: Zn → Zn²⁺ + 2e⁻; Reduction: Cu²⁺ + 2e⁻ → Cu' },
      { id: 'cue-2', blockId: 'call-combine', prompt: 'Combine the half equations Fe → Fe²⁺ + 2e⁻ and Cu²⁺ + 2e⁻ → Cu into a full ionic equation.', answer: 'Add both equations (electrons cancel): Fe + Cu²⁺ → Fe²⁺ + Cu' },
      { id: 'cue-3', blockId: 'call-combine', prompt: 'If linking Mg and Ag⁺, how would you balance the electrons before combining?', answer: 'Mg → Mg²⁺ + 2e⁻ (loses 2e⁻); Ag⁺ + e⁻ → Ag (gains 1e⁻). Multiply the silver equation by 2: 2Ag⁺ + 2e⁻ → 2Ag. Then: Mg + 2Ag⁺ → Mg²⁺ + 2Ag.' }
    ]
  },
  evidence: [],
  mentions: []
};
