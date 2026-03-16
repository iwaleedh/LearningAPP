export const note_olevel_chemistry_7_7_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-2-1-preparing-soluble-salts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe methods for preparing soluble salts by reacting acids with metals, metal oxides, hydroxides, and carbonates.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Preparing Soluble Salts', level: 2 }
    },
    {
      id: 'tbl-methods',
      type: 'comparisonTable',
      data: {
        caption: 'Methods for preparing soluble salts',
        headers: ['Reactant with acid', 'Reaction type', 'Products', 'Example'],
        rows: [
          ['Metal (must react with dilute acid)', 'Acid + metal', 'Salt + H₂(g)', 'Mg + 2HCl → MgCl₂ + H₂'],
          ['Metal oxide (insoluble base)', 'Acid + base', 'Salt + H₂O', 'CuO + 2HCl → CuCl₂ + H₂O'],
          ['Metal hydroxide (base)', 'Acid + base (neutralisation)', 'Salt + H₂O', 'Zn(OH)₂ + H₂SO₄ → ZnSO₄ + 2H₂O'],
          ['Metal carbonate', 'Acid + carbonate', 'Salt + H₂O + CO₂(g)', 'ZnCO₃ + 2HCl → ZnCl₂ + H₂O + CO₂'],
          ['Alkali (soluble base)', 'Acid + alkali (titration)', 'Salt + H₂O', 'NaOH + HCl → NaCl + H₂O']
        ]
      }
    },
    {
      id: 'call-method-excess',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Method: Using an Insoluble Base or Carbonate',
        text: '(Example: making copper(II) sulfate from CuO + dilute H₂SO₄)<br/><br/>1. Warm dilute H₂SO₄ in a beaker.<br/>2. Add excess CuO powder — ensures all acid is used up; blue solution forms.<br/>3. Filter to remove excess CuO.<br/>4. Evaporate the filtrate to concentrate.<br/>5. Leave to crystallise (cool slowly).<br/>6. Filter off crystals; dry between filter papers.<br/><br/>Using <strong>excess solid</strong> base/carbonate ensures no acid remains. The excess is removed by filtration.'
      }
    },
    {
      id: 'call-titration',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Method: Using a Soluble Base (Titration) — e.g. NaCl from NaOH + HCl',
        text: '1. Use a burette to add acid to alkali in a conical flask with indicator.<br/>2. Record exact volume of acid needed to neutralise the alkali.<br/>3. Repeat the titration without indicator using the exact measured volumes.<br/>4. Evaporate the salt solution to dryness (or crystallise).<br/><br/>Cannot use excess acid/alkali (both dissolve), so titration is essential to know when neutralisation is complete.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Soluble salts: acid + metal/oxide/carbonate (use excess solid then filter). Acid + alkali: use titration (indicator → repeat without indicator → evaporate). Crystallise or evaporate to obtain pure dry salt.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Acid + excess insoluble solid (oxide/carbonate) → filter excess → evaporate → crystallise. Acid + alkali → titration → evaporate.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-methods', prompt: 'Name four types of substance that can react with an acid to form a soluble salt.', answer: 'A metal, a metal oxide, a metal hydroxide, and a metal carbonate.' },
      { id: 'cue-2', blockId: 'call-method-excess', prompt: 'Describe how you would prepare copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid.', answer: 'Add excess CuO to warm H₂SO₄; stir until no more dissolves (blue solution, black solid excess visible). Filter to remove excess CuO. Evaporate filtrate to concentrate. Allow to cool and crystallise. Filter crystals and dry.' },
      { id: 'cue-3', blockId: 'call-titration', prompt: 'Explain why titration must be used when preparing sodium chloride from NaOH and HCl.', answer: 'Both NaOH and HCl are soluble (cannot use excess and filter off). Titration identifies the exact volume of acid needed to neutralise the alkali, so neither is in excess. The titration is repeated without indicator to obtain a pure salt solution.' }
    ]
  },
  evidence: [],
  mentions: []
};
