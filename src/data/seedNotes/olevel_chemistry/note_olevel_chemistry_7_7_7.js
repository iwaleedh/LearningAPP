export const note_olevel_chemistry_7_7_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/7 Acids Bases And Salts/7-2-4-hydrated-and-anhydrous-salts.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between hydrated and anhydrous salts, and describe water of crystallisation.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Water of Crystallisation', level: 2 }
    },
    {
      id: 'call-definitions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Hydrated vs Anhydrous',
        text: 'Some salts crystallise with a fixed number of water molecules incorporated into their crystal lattice. These are called <strong>water of crystallisation</strong>.<br/><br/><strong>Hydrated salt</strong>: contains water of crystallisation, shown as ·nH₂O in the formula.<br/><strong>Anhydrous salt</strong>: has had the water of crystallisation removed.<br/><br/>Examples:<br/>• CuSO₄·5H₂O = <strong>hydrated</strong> copper(II) sulfate (blue crystals)<br/>• CuSO₄ = <strong>anhydrous</strong> copper(II) sulfate (white powder)<br/>• Na₂CO₃·10H₂O = hydrated sodium carbonate (washing soda)<br/>• CaCl₂·6H₂O = hydrated calcium chloride'
      }
    },
    {
      id: 'call-reversible',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reversible Nature',
        text: 'CuSO₄·5H₂O(s) ⇌ CuSO₄(s) + 5H₂O(g)<br/><br/>• Heating drives the forward reaction → removes water → blue turns white<br/>• Adding water to anhydrous salt drives reverse → white turns blue<br/><br/>Uses:<br/>• Anhydrous CuSO₄ and CoCl₂ are used as <strong>drying agents</strong> and to detect water.<br/>• CuSO₄: white → blue indicates water present.<br/>• Anhydrous cobalt chloride paper: blue → pink in presence of water (moisture test).'
      }
    },
    {
      id: 'call-worked',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Calculating Water of Crystallisation',
        text: '4.90 g of hydrated copper(II) sulfate is heated until mass is constant at 3.13 g.<br/><br/>Mass of water lost = 4.90 − 3.13 = 1.77 g<br/>Moles of H₂O = 1.77 ÷ 18 = 0.098 mol<br/>Moles of CuSO₄ = 3.13 ÷ 160 = 0.0196 mol<br/>Ratio H₂O : CuSO₄ = 0.098 : 0.0196 = 5 : 1<br/><br/>→ Formula: CuSO₄·5H₂O ✓'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Hydrated salts contain water of crystallisation (·nH₂O). Heating removes it → anhydrous form. Example: CuSO₄·5H₂O (blue) ⇌ CuSO₄ (white) + 5H₂O. Anhydrous cobalt chloride (blue) turns pink with water — used as a water test.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Hydrated = has water of crystallisation. Anhydrous = no water of crystallisation. CuSO₄·5H₂O: heating → white anhydrous; add water → blue again. CoCl₂ blue→pink = water present.',
    cues: [
      { id: 'cue-1', blockId: 'call-definitions', prompt: 'What is meant by "water of crystallisation"?', answer: 'Water molecules that are incorporated into the crystal structure of a hydrated salt in a fixed, definite ratio, shown as ·nH₂O in the formula.' },
      { id: 'cue-2', blockId: 'call-reversible', prompt: 'Describe the colour change when hydrated copper(II) sulfate is heated, and explain what causes it.', answer: 'The blue crystals (CuSO₄·5H₂O) turn white as the water of crystallisation is driven off, leaving anhydrous CuSO₄.' },
      { id: 'cue-3', blockId: 'call-reversible', prompt: 'How is anhydrous cobalt chloride used as a test for water?', answer: 'Anhydrous cobalt chloride paper (or cobalt(II) chloride) is blue. In the presence of water, it turns pink. This colour change indicates water is present.' }
    ]
  },
  evidence: [],
  mentions: []
};
