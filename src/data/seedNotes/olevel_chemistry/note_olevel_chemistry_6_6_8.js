export const note_olevel_chemistry_6_6_8 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-2-3-the-haber-process.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the Haber process for the manufacture of ammonia, including the conditions used and the reasons for choosing them.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'The Haber Process', level: 2 }
    },
    {
      id: 'call-eq',
      type: 'callout',
      data: {
        style: 'key',
        title: 'The Equation',
        text: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ mol⁻¹<br/><br/>• Forward reaction is <strong>exothermic</strong><br/>• Reactants: nitrogen (from fractional distillation of liquid air) + hydrogen (from natural gas / cracking of hydrocarbons)<br/>• 4 moles of gas on reactant side; 2 moles on product side → <strong>fewer moles of gas on right</strong>'
      }
    },
    {
      id: 'tbl-conditions',
      type: 'comparisonTable',
      data: {
        caption: 'Conditions used in the Haber process and reasons',
        headers: ['Condition', 'Value', 'Reason'],
        rows: [
          ['Temperature', '~450 °C', 'Compromise: lower T → higher yield but too slow; 450 °C balances acceptable yield with acceptable rate; note: higher T shifts equilibrium left (towards reactants) as forward is exothermic'],
          ['Pressure', '~200 atm (20 MPa)', 'High pressure favours the side with fewer moles of gas (right, product side) → higher yield; very high pressure is expensive and dangerous so 200 atm is a compromise'],
          ['Catalyst', 'Iron (Fe), with promoters K₂O/Al₂O₃', 'Increases rate without changing equilibrium position; finely divided iron maximises surface area'],
          ['Recycling', 'Unreacted N₂ and H₂ recycled', 'Increases overall yield and reduces waste']
        ]
      }
    },
    {
      id: 'call-route',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Industrial Route',
        text: '1. Purify N₂ and H₂; mix in 1:3 ratio.<br/>2. Pass over heated iron catalyst at 450 °C and 200 atm.<br/>3. ~15–20% conversion per pass (equilibrium not reached in short contact time, plus compromise temperature).<br/>4. Gas mixture cooled → NH₃ liquefies and is removed (boiling point −33 °C).<br/>5. Unreacted N₂ and H₂ are recycled back into the reactor.<br/>6. Overall yield: ~98% with recycling.'
      }
    },
    {
      id: 'call-use',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Uses of Ammonia',
        text: 'Main use: manufacture of <strong>fertilisers</strong> (ammonium nitrate, ammonium sulfate, urea).<br/><br/>Also: explosives (nitric acid → TNT); cleaning products; refrigerants; manufacture of nylon.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Haber process: N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ mol⁻¹. Conditions: 450 °C (compromise), 200 atm (high pressure → more product, fewer moles gas on right), Fe catalyst. Unreacted gases recycled. Main use: fertiliser manufacture.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'N₂+3H₂⇌2NH₃, exothermic. 450°C compromise: fast rate + acceptable yield. 200 atm: fewer gas moles on right. Fe catalyst. Unreacted gases recycled.',
    cues: [
      { id: 'cue-1', blockId: 'call-eq', prompt: 'Write the equation for the Haber process and give the sign of ΔH.', answer: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹ (exothermic).' },
      { id: 'cue-2', blockId: 'tbl-conditions', prompt: 'Explain why a temperature of 450 °C is used in the Haber process rather than a lower temperature.', answer: 'Lower temperatures would give a higher yield of ammonia (Le Chatelier: shifting towards exothermic product side) but the rate would be too slow to be economically viable. 450 °C is a compromise giving an acceptable rate and an acceptable yield.' },
      { id: 'cue-3', blockId: 'tbl-conditions', prompt: 'Use Le Chatelier\'s principle to explain why high pressure is used in the Haber process.', answer: 'There are 4 moles of gas on the left and 2 on the right. High pressure shifts the equilibrium to the side with fewer moles of gas (the right), producing more ammonia.' }
    ]
  },
  evidence: [],
  mentions: []
};
