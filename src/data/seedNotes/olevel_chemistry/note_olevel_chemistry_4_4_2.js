export const note_olevel_chemistry_4_4_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/4 Electrochemistry/4-1-3-electrolysis-of-aqueous-sodium-chloride-and-dilute-sulfuric-acid.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Predict and explain the products of electrolysis of aqueous sodium chloride and dilute sulfuric acid.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Electrolysis of Aqueous Solutions — Competing Ions', level: 2 }
    },
    {
      id: 'call-water',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Water Ions in Aqueous Solutions',
        text: 'In aqueous solution, water also dissociates slightly:<br/>H₂O ⇌ H⁺ + OH⁻<br/><br/>This means <strong>aqueous solutions always contain H⁺ and OH⁻ ions</strong> in addition to the ions from the dissolved compound.<br/><br/>At each electrode, <strong>competition</strong> occurs between ions. Which ion is discharged depends on:<br/>• Concentration of ions<br/>• Position in the electrochemical series'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Electrolysis of Brine (Aqueous NaCl)', level: 2 }
    },
    {
      id: 'call-brine',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ions in Brine',
        text: 'Brine (concentrated NaCl solution) contains: Na⁺, Cl⁻, H⁺, OH⁻<br/><br/><strong>Cathode (−):</strong> H⁺ and Na⁺ compete<br/>H⁺ is preferentially discharged (closer to end of electrochemical series; lower position)<br/>→ <strong>Hydrogen gas (H₂)</strong> evolved<br/>Half equation: 2H⁺ + 2e⁻ → H₂<br/><br/><strong>Anode (+):</strong> Cl⁻ and OH⁻ compete<br/>Cl⁻ is preferentially discharged (high concentration)<br/>→ <strong>Chlorine gas (Cl₂)</strong> evolved<br/>Half equation: 2Cl⁻ → Cl₂ + 2e⁻<br/><br/><strong>Remaining solution:</strong> Na⁺ and OH⁻ → forms NaOH (a useful alkali)'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'Electrolysis of Dilute Sulfuric Acid (H₂SO₄)', level: 2 }
    },
    {
      id: 'call-h2so4',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Ions in Dilute H₂SO₄',
        text: 'Dilute H₂SO₄ contains: H⁺, SO₄²⁻, OH⁻ (from water)<br/><br/><strong>Cathode (−):</strong> H⁺ is discharged<br/>→ <strong>Hydrogen gas (H₂)</strong><br/>2H⁺ + 2e⁻ → H₂<br/><br/><strong>Anode (+):</strong> OH⁻ is discharged (SO₄²⁻ is very difficult to discharge)<br/>→ <strong>Oxygen gas (O₂)</strong><br/>4OH⁻ → O₂ + 2H₂O + 4e⁻<br/><br/><strong>Ratio of gases:</strong> H₂ : O₂ = 2 : 1 (by volume)<br/>The cathode produces twice as much gas as the anode.'
      }
    },
    {
      id: 'tbl-summary',
      type: 'comparisonTable',
      data: {
        caption: 'Comparison of products',
        headers: ['Electrolyte', 'Cathode product', 'Anode product', 'Notes'],
        rows: [
          ['Brine (concentrated NaCl)', 'Hydrogen (H₂)', 'Chlorine (Cl₂)', 'NaOH remains in solution'],
          ['Dilute H₂SO₄', 'Hydrogen (H₂)', 'Oxygen (O₂)', 'H₂:O₂ = 2:1 by volume']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'Uses of products from brine electrolysis:<br/>• Chlorine → disinfecting water, making bleach and PVC<br/>• Hydrogen → making ammonia (Haber process), fuel<br/>• Sodium hydroxide → making soap, paper, cleaning products<br/><br/>For dilute H₂SO₄: remember the 2:1 volume ratio of H₂ to O₂. If asked why SO₄²⁻ is not discharged: "sulfate ions are very difficult to oxidise; OH⁻ is preferentially discharged."'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Brine: H₂ at cathode, Cl₂ at anode, NaOH remains. Dilute H₂SO₄: H₂ at cathode (2vol), O₂ at anode (1vol). In aqueous solutions, H⁺ and OH⁻ from water compete with other ions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Brine: H₂ cathode, Cl₂ anode, NaOH remains. H₂SO₄: H₂ cathode, O₂ anode (2:1 volume ratio).',
    cues: [
      { id: 'cue-1', blockId: 'call-brine', prompt: 'State the products of electrolysis of concentrated NaCl solution.', answer: 'Cathode: hydrogen gas. Anode: chlorine gas. Remaining solution: sodium hydroxide (NaOH).' },
      { id: 'cue-2', blockId: 'call-h2so4', prompt: 'In dilute H₂SO₄ electrolysis, what is produced at each electrode and in what ratio?', answer: 'Cathode: hydrogen gas; Anode: oxygen gas. Volume ratio H₂:O₂ = 2:1.' },
      { id: 'cue-3', blockId: 'call-water', prompt: 'Why do aqueous solutions produce different products from molten compounds in electrolysis?', answer: 'Aqueous solutions also contain H⁺ and OH⁻ ions from water, which compete with the other ions for discharge at the electrodes.' }
    ]
  },
  evidence: [],
  mentions: []
};
