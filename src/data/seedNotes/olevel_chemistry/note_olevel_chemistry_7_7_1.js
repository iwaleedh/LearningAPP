export const note_olevel_chemistry_7_7_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-1-2-the-ions-in-acids-and-alkalis.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Identify the ions responsible for acidity and alkalinity and explain neutralisation in terms of H⁺ and OH⁻ ions.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Ions in Acids and Alkalis', level: 2 }
    },
    {
      id: 'call-ions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Responsible Ions',
        text: '<strong>Acids</strong> in water produce hydrogen ions (protons): H⁺(aq)<br/>These are the source of acidity — the higher the concentration of H⁺, the lower the pH.<br/><br/>Example: HCl(aq) → H⁺(aq) + Cl⁻(aq)<br/>H₂SO₄(aq) → 2H⁺(aq) + SO₄²⁻(aq)<br/><br/><strong>Alkalis</strong> in water produce hydroxide ions: OH⁻(aq)<br/>These are the source of alkalinity — the higher [OH⁻], the higher the pH.<br/><br/>Example: NaOH(aq) → Na⁺(aq) + OH⁻(aq)<br/>Ca(OH)₂(aq) → Ca²⁺(aq) + 2OH⁻(aq)'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Neutralisation', level: 2 }
    },
    {
      id: 'call-neutralisation',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Neutralisation: Ionic Equation',
        text: 'Neutralisation is the reaction between H⁺ and OH⁻ to form water:<br/><br/><strong>H⁺(aq) + OH⁻(aq) → H₂O(l)</strong><br/><br/>This is the <strong>ionic equation for any neutralisation reaction</strong> (acid + alkali).<br/><br/>The salt ions (e.g. Na⁺, Cl⁻) are spectator ions and do not appear in this equation.'
      }
    },
    {
      id: 'svg-neutralisation',
      type: 'svg',
      data: {
        caption: 'Neutralisation overview: An acid (providing H⁺) and an alkali (providing OH⁻) react to form water and a salt. The core reaction is H⁺ + OH⁻ → H₂O.',
        svg: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <!-- Beaker: Acid -->
  <path d="M 60 70 L 60 160 A 10 10 0 0 0 70 170 L 130 170 A 10 10 0 0 0 140 160 L 140 70" fill="none" stroke="var(--color-text)" stroke-width="3" />
  <ellipse cx="100" cy="70" rx="40" ry="10" fill="none" stroke="var(--color-text)" stroke-width="2" />
  <!-- Acid liquid -->
  <path d="M 62 120 Q 80 125 100 120 T 138 120 L 138 160 A 8 8 0 0 1 130 168 L 70 168 A 8 8 0 0 1 62 160 Z" fill="#3d1212" />
  <text x="100" y="100" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">Acid</text>
  <circle cx="85" cy="140" r="10" fill="#ef4444" />
  <text x="85" y="144" font-family="var(--font-sans)" font-size="10" fill="#1e293b" text-anchor="middle">H⁺</text>
  <circle cx="115" cy="150" r="10" fill="#f87171" />
  <text x="115" y="154" font-family="var(--font-sans)" font-size="10" fill="#1e293b" text-anchor="middle">Cl⁻</text>

  <text x="200" y="130" font-family="var(--font-sans)" font-size="24" font-weight="bold" fill="var(--color-text)" text-anchor="middle">+</text>

  <!-- Beaker: Alkali -->
  <path d="M 260 70 L 260 160 A 10 10 0 0 0 270 170 L 330 170 A 10 10 0 0 0 340 160 L 340 70" fill="none" stroke="var(--color-text)" stroke-width="3" />
  <ellipse cx="300" cy="70" rx="40" ry="10" fill="none" stroke="var(--color-text)" stroke-width="2" />
  <!-- Alkali liquid -->
  <path d="M 262 120 Q 280 125 300 120 T 338 120 L 338 160 A 8 8 0 0 1 330 168 L 270 168 A 8 8 0 0 1 262 160 Z" fill="#2d2f72" />
  <text x="300" y="100" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#3b82f6" text-anchor="middle">Alkali</text>
  <circle cx="285" cy="140" r="12" fill="#3b82f6" />
  <text x="285" y="144" font-family="var(--font-sans)" font-size="10" fill="#1e293b" text-anchor="middle">OH⁻</text>
  <circle cx="315" cy="150" r="10" fill="#60a5fa" />
  <text x="315" y="154" font-family="var(--font-sans)" font-size="10" fill="#1e293b" text-anchor="middle">Na⁺</text>

  <!-- Arrow -->
  <path d="M 370 130 L 400 130" fill="none" stroke="var(--color-text)" stroke-width="3" marker-end="url(#arrow-head)" />

  <!-- Result: Neutral -->
  <text x="450" y="125" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#10b981" text-anchor="middle">H₂O(l)</text>
  <text x="450" y="145" font-family="var(--font-sans)" font-size="12" fill="#64748b" text-anchor="middle">+ NaCl(aq)</text>

  <!-- Big highlighting of the core ionic equation -->
  <rect x="90" y="20" width="320" height="30" rx="15" fill="#0a2e1a" stroke="#22c55e" stroke-width="2"/>
  <text x="250" y="40" font-family="var(--font-sans)" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">Ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l)</text>

  <defs>
    <marker id="arrow-head" markerWidth="6" markerHeight="6" refX="2" refY="3" orient="auto">
      <path d="M 1 1 L 5 3 L 1 5 Z" fill="var(--color-text)"/>
    </marker>
  </defs>
</svg>`
      }
    },
    {
      id: 'tbl-salts',
      type: 'comparisonTable',
      data: {
        caption: 'Acid–base reactions and salt formed',
        headers: ['Acid', 'Base/Alkali', 'Salt', 'Equation example'],
        rows: [
          ['HCl', 'NaOH', 'NaCl (sodium chloride)', 'HCl + NaOH → NaCl + H₂O'],
          ['H₂SO₄', 'KOH', 'K₂SO₄ (potassium sulfate)', 'H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O'],
          ['HNO₃', 'Cu(OH)₂', 'Cu(NO₃)₂ (copper nitrate)', '2HNO₃ + Cu(OH)₂ → Cu(NO₃)₂ + 2H₂O'],
          ['HCl', 'NH₃(aq)', 'NH₄Cl (ammonium chloride)', 'HCl + NH₃ → NH₄Cl']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Naming Salts',
        text: 'Salt name = metal/ammonium from base + anion from acid:<br/>• HCl → chloride<br/>• H₂SO₄ → sulfate<br/>• HNO₃ → nitrate<br/>• H₃PO₄ → phosphate<br/>• CH₃COOH → ethanoate'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Acids → H⁺(aq); alkalis → OH⁻(aq). Neutralisation: H⁺ + OH⁻ → H₂O. Named salt = metal from base + anion from acid (chloride/sulfate/nitrate).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Acid → H⁺. Alkali → OH⁻. Neutralisation: H⁺ + OH⁻ → H₂O. Salt = metal + acidic anion.',
    cues: [
      { id: 'cue-1', blockId: 'call-ions', prompt: 'Which ion is responsible for acidity in aqueous solution?', answer: 'The hydrogen ion, H⁺(aq). Acids produce H⁺ ions when dissolved in water.' },
      { id: 'cue-2', blockId: 'call-neutralisation', prompt: 'Write the ionic equation for neutralisation.', answer: 'H⁺(aq) + OH⁻(aq) → H₂O(l)' },
      { id: 'cue-3', blockId: 'tbl-salts', prompt: 'Name the salt formed when hydrochloric acid reacts with sodium hydroxide.', answer: 'Sodium chloride (NaCl).' }
    ]
  },
  evidence: [],
  mentions: []
};
