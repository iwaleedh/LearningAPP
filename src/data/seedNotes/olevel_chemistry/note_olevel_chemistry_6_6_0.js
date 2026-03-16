export const note_olevel_chemistry_6_6_0 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-1-physical-and-chemical-changes.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Distinguish between physical and chemical changes, giving examples of each.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Physical vs Chemical Changes', level: 2 }
    },
    {
      id: 'call-phys',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Physical Changes',
        text: '<strong>Physical changes</strong> do not produce new substances. The change is reversible and no new chemical bonds are made or broken.<br/><br/>Examples:<br/>• Melting ice (H₂O solid → H₂O liquid)<br/>• Dissolving salt in water<br/>• Boiling water<br/>• Stretching a spring<br/>• Cutting a material<br/><br/>The substance can be recovered unchanged — same chemical identity.'
      }
    },
    {
      id: 'call-chem',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemical Changes',
        text: '<strong>Chemical changes (reactions)</strong> produce new substances with different properties. Usually irreversible. New chemical bonds are made and broken.<br/><br/>Signs of a chemical change:<br/>• Gas produced (bubbles/effervescence)<br/>• Colour change<br/>• Precipitate formed<br/>• Permanent temperature change<br/>• Light or sound produced<br/><br/>Examples:<br/>• Iron rusting: 4Fe + 3O₂ → 2Fe₂O₃<br/>• Burning magnesium: 2Mg + O₂ → 2MgO<br/>• Acid + carbonate → salt + water + CO₂'
      }
    },
    {
      id: 'tbl-compare',
      type: 'comparisonTable',
      data: {
        caption: 'Physical vs Chemical Changes',
        headers: ['Feature', 'Physical Change', 'Chemical Change'],
        rows: [
          ['New substance formed?', 'No', 'Yes'],
          ['Reversible?', 'Usually Yes', 'Usually No'],
          ['Bonds', 'No bonds broken', 'Bonds broken and formed'],
          ['Example', 'Melting ice', 'Burning magnesium'],
          ['Energy change', 'Small', 'Often large']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'The key test is: "Is a new substance formed?" If yes, it is a chemical change. Dissolving is physical (the ions just separate; they can be recovered by evaporation). Burning is always a chemical change. Electrolysis is a chemical change (new substances made).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Physical change: no new substance formed, usually reversible (melting, dissolving). Chemical change: new substance formed, usually irreversible, large energy change (burning, rusting, reactions with acids).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Physical change: no new substance, reversible. Chemical change: new substance, usually irreversible. Signs: gas, colour change, precipitate, temperature change.',
    cues: [
      { id: 'cue-1', blockId: 'call-phys', prompt: 'State three examples of physical changes.', answer: 'Melting, dissolving, boiling, cutting, stretching. No new substance formed.' },
      { id: 'cue-2', blockId: 'call-chem', prompt: 'State four signs that a chemical change has occurred.', answer: 'Gas produced; colour change; precipitate formed; large temperature change; light or sound produced.' },
      { id: 'cue-3', blockId: 'tbl-compare', prompt: 'What is the key difference between a physical and chemical change?', answer: 'In a chemical change, new substances are formed. In a physical change, no new substances are formed.' }
    ]
  },
  evidence: [],
  mentions: []
};
