export const note_olevel_chemistry_7_7_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-2-3-solubility-rules.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the solubility rules for common ionic compounds and use them to predict whether a precipitate will form.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Solubility Rules', level: 2 }
    },
    {
      id: 'tbl-solubility',
      type: 'comparisonTable',
      data: {
        caption: 'Rules for solubility of ionic compounds in water',
        headers: ['Compound type', 'Generally', 'Exceptions (insoluble)'],
        rows: [
          ['All nitrates (NO₃⁻)', 'SOLUBLE', 'None'],
          ['All sodium (Na⁺), potassium (K⁺), ammonium (NH₄⁺) salts', 'SOLUBLE', 'None'],
          ['Sulfates (SO₄²⁻)', 'SOLUBLE', 'BaSO₄, PbSO₄, CaSO₄ (slightly) — INSOLUBLE'],
          ['Chlorides (Cl⁻)', 'SOLUBLE', 'AgCl, PbCl₂ — INSOLUBLE'],
          ['Bromides (Br⁻)', 'SOLUBLE', 'AgBr, PbBr₂ — INSOLUBLE'],
          ['Iodides (I⁻)', 'SOLUBLE', 'AgI, PbI₂ — INSOLUBLE'],
          ['Hydroxides (OH⁻)', 'INSOLUBLE', 'NaOH, KOH, Ca(OH)₂ — SOLUBLE; Ba(OH)₂ — SOLUBLE'],
          ['Carbonates (CO₃²⁻)', 'INSOLUBLE', 'Na₂CO₃, K₂CO₃, (NH₄)₂CO₃ — SOLUBLE']
        ]
      }
    },
    {
      id: 'call-using',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Using Solubility Rules to Predict a Precipitate',
        text: 'Will a precipitate form when CaCl₂(aq) is mixed with Na₂CO₃(aq)?<br/><br/>Possible products: CaCO₃ and NaCl<br/>• CaCO₃: carbonates are generally insoluble → <strong>insoluble precipitate</strong> ✓<br/>• NaCl: Na⁺ salts are all soluble → stays in solution<br/><br/>Conclusion: white CaCO₃ precipitate forms.<br/>Ionic equation: Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s)↓'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Mnemonic',
        text: '<strong>All nitrates soluble. All Na⁺/K⁺/NH₄⁺ salts soluble.</strong><br/><br/>Insoluble exceptions to remember:<br/>• Sulfates: BaSO₄, PbSO₄, CaSO₄<br/>• Halides: Ag halides (AgCl, AgBr, AgI), PbCl₂/PbI₂<br/>• Hydroxides: most insoluble except NaOH/KOH/Ca(OH)₂/Ba(OH)₂<br/>• Carbonates: most insoluble except Na/K/(NH₄)₂CO₃'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'All nitrates, all Na/K/NH₄ salts soluble. Insoluble: BaSO₄, AgCl, AgBr, AgI, PbCl₂, PbI₂, most carbonates, most hydroxides (not NaOH/KOH). Use solubility rules to identify which ions form precipitates when solutions are mixed.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'All nitrates + Na/K/NH₄ salts soluble. Insoluble: BaSO₄, Ag halides, most carbonates & hydroxides.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-solubility', prompt: 'State which sulfates are insoluble.', answer: 'Barium sulfate (BaSO₄), lead(II) sulfate (PbSO₄), and calcium sulfate (CaSO₄, slightly insoluble).' },
      { id: 'cue-2', blockId: 'tbl-solubility', prompt: 'Which chlorides are insoluble in water?', answer: 'Silver chloride (AgCl) and lead(II) chloride (PbCl₂).' },
      { id: 'cue-3', blockId: 'call-using', prompt: 'Predict whether a precipitate forms when Na₂SO₄ and BaCl₂ solutions are mixed. Name the product.', answer: 'Yes, a white precipitate of barium sulfate (BaSO₄) forms, since BaSO₄ is insoluble. Ionic equation: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)↓' }
    ]
  },
  evidence: [],
  mentions: []
};
