export const note_olevel_chemistry_6_6_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-2-4-the-contact-process.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the Contact process for the manufacture of sulfuric acid, including the conditions used and the reasons for choosing them.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Contact Process', level: 2 }
    },
    {
      id: 'call-overview',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Overview: Three Stages',
        text: '<strong>Stage 1</strong>: Burn sulfur in air<br/>S(s) + O₂(g) → SO₂(g)<br/><br/><strong>Stage 2</strong>: Oxidise SO₂ to SO₃ (the key equilibrium step)<br/>2SO₂(g) + O₂(g) ⇌ 2SO₃(g)   ΔH = −196 kJ mol⁻¹<br/><br/><strong>Stage 3</strong>: Absorb SO₃ into concentrated H₂SO₄ to make oleum, then dilute with water<br/>SO₃(g) + H₂SO₄(l) → H₂S₂O₇(l) → then H₂S₂O₇ + H₂O → 2H₂SO₄'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Conditions for Stage 2', level: 2 }
    },
    {
      id: 'tbl-conditions',
      type: 'comparisonTable',
      data: {
        caption: 'Conditions for the Contact process Step 2',
        headers: ['Condition', 'Value', 'Reason'],
        rows: [
          ['Temperature', '~450 °C', 'Compromise: lower T → higher yield but rate too slow; forward reaction is exothermic so high T reduces yield; 450 °C balances rate and yield'],
          ['Pressure', 'Atmospheric (~1 atm)', '3 moles gas → 2 moles gas on right (fewer), so high pressure would increase yield; but 99% conversion achieved at atmospheric pressure so no need for costly high pressure'],
          ['Catalyst', 'Vanadium(V) oxide V₂O₅', 'Speeds up reaction; not consumed; converted to V₂O₄ then back to V₂O₅ in catalytic cycle']
        ]
      }
    },
    {
      id: 'call-le-chat',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Moles of Gas Check (Stage 2)',
        text: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)<br/><br/>Left side: 2 + 1 = <strong>3 moles of gas</strong><br/>Right side: <strong>2 moles of gas</strong><br/><br/>Fewer moles on right → high pressure would shift equilibrium right → more SO₃.<br/>But ~99.5% conversion already achieved at atmospheric pressure, making costly high-pressure equipment unnecessary.'
      }
    },
    {
      id: 'svg-contact-process',
      type: 'svg',
      data: {
        caption: 'Flow diagram of the Contact Process manufacturing stages.',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Burner: S + O2 -> SO2 -->
  <rect x="40" y="40" width="80" height="150" fill="var(--color-bg-secondary)" stroke="var(--color-border)" stroke-width="2"/>
  <text x="80" y="30" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Burner</text>
  
  <path d="M 10 70 L 40 70" fill="none" stroke="var(--color-text)" stroke-dasharray="4,2" marker-end="url(#arrow-head)" />
  <text x="5" y="65" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)">Air (O₂)</text>
  
  <path d="M 10 160 L 40 160" fill="none" stroke="var(--color-text)" marker-end="url(#arrow-head)" />
  <text x="5" y="155" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)">Sulfur(s)</text>

  <text x="80" y="110" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">S + O₂</text>
  <text x="80" y="125" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">↓</text>
  <text x="80" y="140" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">SO₂</text>

  <!-- Flow to converter -->
  <path d="M 120 115 L 220 115" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-orange)" />
  <text x="170" y="105" font-family="var(--font-sans)" font-size="10" fill="#d97706" text-anchor="middle">SO₂ + Air</text>

  <!-- Converter: 2SO2 + O2 <-> 2SO3 -->
  <rect x="220" y="40" width="100" height="150" rx="10" fill="var(--color-bg-secondary)" stroke="var(--color-border)" stroke-width="2"/>
  <text x="270" y="30" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Converter</text>

  <rect x="230" y="60" width="80" height="15" fill="#94a3b8" />
  <rect x="230" y="110" width="80" height="15" fill="#94a3b8" />
  <rect x="230" y="160" width="80" height="15" fill="#94a3b8" />
  <text x="270" y="100" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">V₂O₅ catalyst</text>
  <text x="270" y="150" font-family="var(--font-sans)" font-size="10" fill="var(--color-text)" text-anchor="middle">450 °C, 1 atm</text>

  <!-- Flow to absorber -->
  <path d="M 320 115 L 420 115" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
  <text x="370" y="105" font-family="var(--font-sans)" font-size="10" fill="#b91c1c" text-anchor="middle">SO₃ gas</text>

  <!-- Absorber -->
  <rect x="420" y="40" width="100" height="150" fill="var(--color-bg-secondary)" stroke="var(--color-border)" stroke-width="2"/>
  <text x="470" y="30" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Absorption Tower</text>
  
  <path d="M 470 10 L 470 40" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-green)" />
  <text x="490" y="25" font-family="var(--font-sans)" font-size="10" fill="#16a34a">Conc. H₂SO₄</text>
  
  <!-- Droplets inside absorber -->
  <circle cx="450" cy="60" r="2" fill="#22c55e" />
  <circle cx="470" cy="80" r="2" fill="#22c55e" />
  <circle cx="490" cy="120" r="2" fill="#22c55e" />
  <circle cx="450" cy="140" r="2" fill="#22c55e" />
  
  <!-- Final Oleum -> acid out -->
  <path d="M 470 190 L 470 230" fill="none" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrow-blue)" />
  <text x="480" y="215" font-family="var(--font-sans)" font-size="10" fill="#0284c7">Oleum (H₂S₂O₇)</text>
  <text x="480" y="230" font-family="var(--font-sans)" font-size="10" fill="#0284c7">(Add H₂O → H₂SO₄)</text>


  <!-- Markers -->
  <defs>
    <marker id="arrow-head" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="var(--color-text)"/>
    </marker>
    <marker id="arrow-orange" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="#f59e0b"/>
    </marker>
    <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="#ef4444"/>
    </marker>
    <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="#22c55e"/>
    </marker>
    <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1 1 L 7 4 L 1 7 Z" fill="#0ea5e9"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'call-uses',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Uses of Sulfuric Acid',
        text: '• Manufacture of fertilisers (ammonium sulfate, superphosphate)<br/>• Car batteries (lead-acid: uses dilute H₂SO₄)<br/>• Manufacture of detergents and paints<br/>• Petrochemical processing (dehydrating agent)<br/>• Making other acids (e.g., HCl, HNO₃)'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Contact process: S → SO₂ → SO₃ (key step: 2SO₂+O₂⇌2SO₃, ΔH = −196 kJ/mol) → H₂SO₄. Stage 2 conditions: ~450 °C (compromise), atmospheric pressure (already >99% conversion), V₂O₅ catalyst. Main use: fertiliser manufacture.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '2SO₂+O₂⇌2SO₃, exothermic, 3→2 gas moles. 450°C compromise; atmospheric P (99% conversion); V₂O₅ catalyst. SO₃ absorbed into H₂SO₄.',
    cues: [
      { id: 'cue-1', blockId: 'call-overview', prompt: 'Write the equations for all three stages of the Contact process.', answer: '(1) S + O₂ → SO₂; (2) 2SO₂ + O₂ ⇌ 2SO₃ (key equilibrium, V₂O₅ catalyst, 450 °C); (3) SO₃ absorbed in conc H₂SO₄ to form oleum, then diluted to give H₂SO₄.' },
      { id: 'cue-2', blockId: 'tbl-conditions', prompt: 'Why is only atmospheric pressure used in the Contact process, despite fewer gas moles on the right?', answer: 'The conversion rate of SO₂ to SO₃ is already ~99.5% at atmospheric pressure, so the expense and danger of high-pressure equipment is not justified.' },
      { id: 'cue-3', blockId: 'tbl-conditions', prompt: 'Name the catalyst used in Stage 2 of the Contact process.', answer: 'Vanadium(V) oxide, V₂O₅.' }
    ]
  },
  evidence: [],
  mentions: []
};
