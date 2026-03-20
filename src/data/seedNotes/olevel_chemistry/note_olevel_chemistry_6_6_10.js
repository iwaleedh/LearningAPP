export const note_olevel_chemistry_6_6_10 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-3-1-oxidation-and-reduction.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define oxidation and reduction in terms of oxygen gain/loss and electron transfer, and identify oxidising and reducing agents.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Oxidation and Reduction (Oxygen Definition)', level: 2 }
    },
    {
      id: 'call-o-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Original (Oxygen) Definitions',
        text: '<strong>Oxidation</strong> = gain of oxygen (or loss of hydrogen)<br/><strong>Reduction</strong> = loss of oxygen (or gain of hydrogen)<br/><br/>Oxidising agent = substance that gives oxygen to another → is itself reduced.<br/>Reducing agent = substance that removes oxygen → is itself oxidised.<br/><br/>Examples:<br/>• CuO + H₂ → Cu + H₂O: CuO is reduced (loses O); H₂ is oxidised (gains O)<br/>• 2Mg + O₂ → 2MgO: Mg is oxidised<br/>• C + 2CuO → 2Cu + CO₂: carbon is the reducing agent (takes O from CuO)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Redox in Terms of Electron Transfer', level: 2 }
    },
    {
      id: 'call-e-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Electron Transfer Definitions',
        text: '<strong>Oxidation</strong> = loss of electrons<br/><strong>Reduction</strong> = gain of electrons<br/><br/>Mnemonic: <strong>OIL RIG</strong><br/>Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons)<br/><br/>Examples:<br/>• Na → Na⁺ + e⁻ → sodium is <strong>oxidised</strong><br/>• Cl₂ + 2e⁻ → 2Cl⁻ → chlorine is <strong>reduced</strong><br/>• Mg + Cl₂ → MgCl₂: Mg loses 2e⁻ (oxidised); Cl gains e⁻ (reduced)'
      }
    },
    {
      id: 'svg-oil-rig',
      type: 'svg',
      data: {
        caption: 'Electron transfer in a redox reaction: Magnesium is oxidised (loses electrons) and Chlorine is reduced (gains electrons).',
        svg: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- OIL RIG Mnemonic -->
  <rect x="20" y="20" width="140" height="70" rx="8" fill="#3d1212" stroke="#ef4444" stroke-width="2"/>
  <text x="90" y="45" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">OIL</text>
  <text x="90" y="65" font-family="var(--font-sans)" font-size="12" fill="#ef4444" text-anchor="middle">Oxidation Is Loss</text>
  <text x="90" y="80" font-family="var(--font-sans)" font-size="10" fill="#ef4444" text-anchor="middle">of electrons</text>

  <rect x="20" y="105" width="140" height="70" rx="8" fill="#0a2e1a" stroke="#22c55e" stroke-width="2"/>
  <text x="90" y="130" font-family="var(--font-sans)" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">RIG</text>
  <text x="90" y="150" font-family="var(--font-sans)" font-size="12" fill="#22c55e" text-anchor="middle">Reduction Is Gain</text>
  <text x="90" y="165" font-family="var(--font-sans)" font-size="10" fill="#22c55e" text-anchor="middle">of electrons</text>

  <!-- Electron Transfer Diagram -->
  <text x="330" y="30" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Mg + Cl₂ → MgCl₂</text>
  
  <!-- Left Side: Reactants -->
  <circle cx="230" cy="80" r="20" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
  <text x="230" y="85" font-family="var(--font-sans)" font-size="12" fill="#334155" text-anchor="middle">Mg</text>
  <text x="230" y="120" font-family="var(--font-sans)" font-size="10" fill="#ef4444" text-anchor="middle">Reducing Agent</text>

  <!-- Right Side: Products -->
  <circle cx="430" cy="80" r="16" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
  <text x="430" y="84" font-family="var(--font-sans)" font-size="10" fill="#334155" text-anchor="middle">Mg²⁺</text>
  <text x="430" y="120" font-family="var(--font-sans)" font-size="10" fill="#ef4444" text-anchor="middle">Oxidised</text>

  <!-- Arrow -->
  <path d="M 260 80 L 400 80" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-head)" />
  
  <!-- Electron path -->
  <path d="M 240 55 Q 330 0 420 55" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-red)" />
  <circle cx="330" cy="28" r="6" fill="#ef4444" />
  <text x="330" y="31" font-family="var(--font-sans)" font-size="10" fill="#1e293b" text-anchor="middle">2e⁻</text>
  <text x="330" y="15" font-family="var(--font-sans)" font-size="10" fill="#ef4444" text-anchor="middle">Electrons transferred</text>

  <!-- Cl2 reacting -->
  <circle cx="230" cy="160" r="16" fill="#0a2e1a" stroke="#22c55e" stroke-width="2"/>
  <circle cx="255" cy="160" r="16" fill="#0a2e1a" stroke="#22c55e" stroke-width="2"/>
  <text x="242" y="164" font-family="var(--font-sans)" font-size="10" fill="#15803d" text-anchor="middle">Cl₂</text>
  <text x="242" y="195" font-family="var(--font-sans)" font-size="10" fill="#22c55e" text-anchor="middle">Oxidising Agent</text>

  <circle cx="410" cy="160" r="18" fill="#0a2e1a" stroke="#22c55e" stroke-width="2"/>
  <text x="410" y="164" font-family="var(--font-sans)" font-size="10" fill="#15803d" text-anchor="middle">Cl⁻</text>
  
  <circle cx="450" cy="160" r="18" fill="#0a2e1a" stroke="#22c55e" stroke-width="2"/>
  <text x="450" y="164" font-family="var(--font-sans)" font-size="10" fill="#15803d" text-anchor="middle">Cl⁻</text>
  <text x="430" y="195" font-family="var(--font-sans)" font-size="10" fill="#22c55e" text-anchor="middle">Reduced</text>

  <path d="M 280 160 L 380 160" fill="none" stroke="var(--color-text)" stroke-width="2" marker-end="url(#arrow-head)" />

  <!-- Markers -->
  <defs>
    <marker id="arrow-head" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="var(--color-text)"/>
    </marker>
    <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="#ef4444"/>
    </marker>
  </defs>

</svg>`
      }
    },
    {
      id: 'tbl-agents',
      type: 'comparisonTable',
      data: {
        caption: 'Oxidising and Reducing Agents',
        headers: ['Name', 'Definition (electron)', 'Examples'],
        rows: [
          ['Oxidising agent', 'Accepts electrons (causes oxidation of another); is itself reduced', 'Cl₂, O₂, F₂, H₂O₂, conc. H₂SO₄, KMnO₄, K₂Cr₂O₇, MnO₂'],
          ['Reducing agent', 'Donates electrons (causes reduction of another); is itself oxidised', 'H₂, C (charcoal/coke), CO, metals (Na, Mg, Zn, Fe), NH₃']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Worked Identification',
        text: 'In: Fe + CuSO₄ → FeSO₄ + Cu<br/><br/>Step 1: which species changes in charge/electrons?<br/>• Fe: 0 → +2 (loses 2e⁻) → Fe is <strong>oxidised</strong>; Fe is the <strong>reducing agent</strong><br/>• Cu²⁺: +2 → 0 (gains 2e⁻) → Cu is <strong>reduced</strong>; Cu²⁺ is the <strong>oxidising agent</strong>'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Oxidation: gain of O or loss of electrons. Reduction: loss of O or gain of electrons. OIL RIG. Oxidising agent is reduced (gains e⁻); reducing agent is oxidised (loses e⁻). Redox reactions always occur together — you cannot have one without the other.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'OIL RIG: Oxidation Is Loss; Reduction Is Gain. Oxidising agent accepts electrons (gets reduced); reducing agent donates electrons (gets oxidised).',
    cues: [
      { id: 'cue-1', blockId: 'call-e-def', prompt: 'State the mnemonic OIL RIG and explain what each part means.', answer: 'OIL RIG: Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons).' },
      { id: 'cue-2', blockId: 'call-o-def', prompt: 'In the reaction CuO + H₂ → Cu + H₂O, which substance is oxidised and which is reduced? Give a reason.', answer: 'H₂ is oxidised (gains oxygen to form H₂O). CuO is reduced (loses oxygen to form Cu).' },
      { id: 'cue-3', blockId: 'tbl-agents', prompt: 'State the difference between an oxidising agent and a reducing agent in terms of electron transfer.', answer: 'An oxidising agent accepts electrons (and is itself reduced). A reducing agent donates electrons (and is itself oxidised).' }
    ]
  },
  evidence: [],
  mentions: []
};
