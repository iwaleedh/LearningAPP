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
