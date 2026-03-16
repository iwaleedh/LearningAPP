export const note_olevel_chemistry_4_4_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-4-electrolysis-of-aqueous-solutions.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Predict the products of electrolysis of aqueous solutions using the rules for selective discharge.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Selective Discharge of Ions', level: 2 }
    },
    {
      id: 'call-rules',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rules for Selective Discharge',
        text: '<strong>At the cathode (−):</strong><br/>If a metal lower than hydrogen in the reactivity series is present → that metal is deposited<br/>e.g. Cu²⁺, Ag⁺, Pb²⁺ → metal deposited<br/><br/>If only metals above hydrogen (Na, Mg, Al, Zn, Fe, etc.) → H₂ gas formed instead<br/>H⁺/H₂O + 2e⁻ → H₂<br/><br/><strong>At the anode (+):</strong><br/>If halide ions (Cl⁻, Br⁻, I⁻) are present in <strong>high concentration</strong> → halogen gas formed<br/>2Cl⁻ → Cl₂ + 2e⁻<br/><br/>If no halide ions (or dilute) → OH⁻ from water is discharged<br/>4OH⁻ → O₂ + 2H₂O + 4e⁻'
      }
    },
    {
      id: 'tbl-examples',
      type: 'comparisonTable',
      data: {
        caption: 'Products of electrolysis of common aqueous solutions',
        headers: ['Solution', 'Cathode product', 'Anode product'],
        rows: [
          ['CuSO₄ (copper sulfate)', 'Copper metal (Cu)', 'Oxygen (O₂)'],
          ['CuCl₂ (copper chloride, conc.)', 'Copper metal (Cu)', 'Chlorine (Cl₂)'],
          ['Dilute NaCl', 'Hydrogen (H₂)', 'Oxygen (O₂)'],
          ['Concentrated NaCl (brine)', 'Hydrogen (H₂)', 'Chlorine (Cl₂)'],
          ['AgNO₃ (silver nitrate)', 'Silver metal (Ag)', 'Oxygen (O₂)'],
          ['H₂SO₄ (dilute)', 'Hydrogen (H₂)', 'Oxygen (O₂)'],
          ['ZnSO₄', 'Hydrogen (H₂)', 'Oxygen (O₂)']
        ]
      }
    },
    {
      id: 'call-CuSO4',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: CuSO₄ solution',
        text: 'Electrolysis of copper(II) sulfate solution (CuSO₄)<br/>Ions: Cu²⁺, SO₄²⁻, H⁺, OH⁻<br/><br/><strong>Cathode:</strong> Cu²⁺ or H⁺? Cu²⁺ is below H in reactivity → copper deposited<br/>Cu²⁺ + 2e⁻ → Cu (pink/orange copper coating)<br/><br/><strong>Anode:</strong> SO₄²⁻ or OH⁻? No halide ion, SO₄²⁻ hard to oxidise → OH⁻ discharged<br/>4OH⁻ → O₂ + 2H₂O + 4e⁻ (oxygen gas given off)<br/><br/>The solution becomes more acidic as OH⁻ is used up.'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Summary of discharge rules',
        text: '<strong>Cathode:</strong> metals below H in reactivity series → deposited first; others → H₂ produced<br/><strong>Anode (concentrated halide):</strong> halogen gas<br/><strong>Anode (no/dilute halide):</strong> O₂ from OH⁻<br/><br/>Reactivity series (bottom = least reactive, discharged first):<br/>K Na Ca Mg Al Zn Fe Pb H Cu Ag Au → H and below deposited at cathode'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Cathode: metals below H in reactivity deposited; otherwise H₂. Anode: concentrated halide → halogen gas; otherwise O₂. CuSO₄: Cu at cathode, O₂ at anode.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Cathode: metals below H deposited; otherwise H₂. Anode: concentrated halide → halogen; otherwise O₂.',
    cues: [
      { id: 'cue-1', blockId: 'call-rules', prompt: 'What is produced at the cathode in electrolysis of CuSO₄ solution?', answer: 'Copper metal — Cu²⁺ is below hydrogen in the reactivity series so it is preferentially reduced. Cu²⁺ + 2e⁻ → Cu.' },
      { id: 'cue-2', blockId: 'call-rules', prompt: 'What is produced at the anode when there are no halide ions in solution?', answer: 'Oxygen gas — OH⁻ ions from water are discharged: 4OH⁻ → O₂ + 2H₂O + 4e⁻.' },
      { id: 'cue-3', blockId: 'tbl-examples', prompt: 'What are the products of electrolysis of concentrated ZnCl₂ solution?', answer: 'Cathode: hydrogen gas (Zn is above H in reactivity). Anode: chlorine gas (concentrated halide ion).' }
    ]
  },
  evidence: [],
  mentions: []
};
