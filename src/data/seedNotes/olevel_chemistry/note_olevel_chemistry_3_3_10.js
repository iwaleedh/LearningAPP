export const note_olevel_chemistry_3_3_10 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/3 Stoichiometry/3-2-7-percentage-yield-and-purity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Calculate percentage yield and percentage purity for chemical reactions and samples.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Percentage Yield', level: 2 }
    },
    {
      id: 'call-yield',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Percentage Yield',
        text: '<strong>% yield = (actual yield ÷ theoretical yield) × 100</strong><br/><br/><strong>Actual yield:</strong> the mass of product actually obtained in the experiment<br/><br/><strong>Theoretical yield:</strong> the maximum possible mass of product calculated from the mole ratio and the limiting reagent<br/><br/>% yield is always between 0% and 100%'
      }
    },
    {
      id: 'call-reasons',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reasons why % yield is less than 100%',
        text: '• The reaction may be reversible (equilibrium not fully to the right)<br/>• Competing side reactions produce unwanted products<br/>• Some product is lost during transfer/filtration/evaporation<br/>• Some reactant may be impure<br/>• The reaction may be incomplete'
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: % yield',
        text: '2.4 g of Mg reacts with excess O₂. 3.3 g of MgO is obtained.<br/>(Aᵣ: Mg=24, O=16; Mᵣ MgO=40)<br/>Equation: 2Mg + O₂ → 2MgO (ratio 1:1)<br/><br/>Moles Mg = 2.4/24 = 0.1 mol<br/>Theoretical moles MgO = 0.1 mol<br/>Theoretical mass MgO = 0.1 × 40 = 4 g<br/><br/>% yield = (3.3/4) × 100 = <strong>82.5%</strong>'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Percentage Purity', level: 2 }
    },
    {
      id: 'call-purity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Percentage Purity',
        text: '<strong>% purity = (mass of pure substance ÷ total mass of sample) × 100</strong><br/><br/>A sample may contain impurities (other substances) that do not react.<br/>% purity tells us what fraction of the sample is the desired substance.'
      }
    },
    {
      id: 'call-worked2',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: % purity',
        text: 'A 5 g sample of NaCl contains 4.5 g of pure NaCl.<br/><br/>% purity = (4.5/5) × 100 = <strong>90%</strong>'
      }
    },
    {
      id: 'call-worked3',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Worked Example: Combined purity + yield',
        text: '10 g of 90% pure CaCO₃ is heated. 3.4 g of CO₂ collected.<br/>(Mᵣ: CaCO₃=100, CO₂=44; CaCO₃→CaO+CO₂)<br/><br/>Mass pure CaCO₃ = 10 × 0.90 = 9 g<br/>Moles CaCO₃ = 9/100 = 0.09 mol<br/>Theoretical CO₂ = 0.09 × 44 = 3.96 g<br/>% yield = (3.4/3.96) × 100 = <strong>85.9%</strong>'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: '% yield and % purity are both calculated using (part/whole) × 100. The key difference: % yield compares actual vs theoretical product; % purity compares mass of pure substance vs total sample mass. If given an impure sample, always find the mass of pure reactant first before calculating theoretical yield.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '% yield = (actual/theoretical) × 100. % purity = (pure mass/total mass) × 100. Yield is less than 100% due to reversible reactions, side reactions, product loss, or incomplete reactions.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '% yield = (actual/theoretical) × 100. % purity = (pure/total) × 100. Yield < 100% due to reversible reactions, side reactions, product loss.',
    cues: [
      { id: 'cue-1', blockId: 'call-yield', prompt: 'State the formula for percentage yield.', answer: '% yield = (actual yield ÷ theoretical yield) × 100.' },
      { id: 'cue-2', blockId: 'call-reasons', prompt: 'Give three reasons why percentage yield is less than 100%.', answer: 'Reversible reaction not complete; side reactions; product lost during transfer/filtration/evaporation.' },
      { id: 'cue-3', blockId: 'call-purity', prompt: 'State the formula for percentage purity.', answer: '% purity = (mass of pure substance ÷ total mass of sample) × 100.' }
    ]
  },
  evidence: [],
  mentions: []
};
