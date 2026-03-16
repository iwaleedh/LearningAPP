export const note_olevel_chemistry_6_6_7 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-2-2-equilibrium.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain dynamic equilibrium and apply Le Chatelier\'s principle to predict the effect of changes in temperature, pressure, and concentration.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Dynamic Equilibrium', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Dynamic Equilibrium',
        text: 'In a <strong>closed system</strong>, when the rate of the forward reaction equals the rate of the reverse reaction, <strong>dynamic equilibrium</strong> is established.<br/><br/>At equilibrium:<br/>• Concentrations of reactants and products remain <strong>constant</strong> (not equal)<br/>• The forward and reverse reactions are still occurring at the <strong>same rate</strong><br/>• The word "dynamic" refers to this ongoing movement, even though macroscopic properties are unchanged'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Le Chatelier\'s Principle', level: 2 }
    },
    {
      id: 'call-lc',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Le Chatelier\'s Principle',
        text: '<strong>Le Chatelier\'s Principle:</strong> If a system at equilibrium is subjected to a change, the equilibrium will <strong>shift in the direction that opposes (minimises) the change</strong>.<br/><br/>Changes that shift equilibrium:<br/>• Change in <strong>concentration</strong><br/>• Change in <strong>temperature</strong><br/>• Change in <strong>pressure</strong> (only affects gases with unequal moles on each side)'
      }
    },
    {
      id: 'tbl-lc',
      type: 'comparisonTable',
      data: {
        caption: 'Le Chatelier\'s Principle — Effects of Changes',
        headers: ['Change', 'Direction of Shift', 'Effect on Yield'],
        rows: [
          ['Increase concentration of reactant', '→ (forward)', 'More product formed'],
          ['Decrease concentration of product (e.g. remove product)', '→ (forward)', 'More product formed'],
          ['Increase temperature', 'Towards endothermic direction', 'If forward is endothermic: more product; if forward is exothermic: less product'],
          ['Decrease temperature', 'Towards exothermic direction', 'If forward is exothermic: more product'],
          ['Increase pressure', 'Towards side with fewer moles of gas', 'More of species with fewer moles of gas'],
          ['Decrease pressure', 'Towards side with more moles of gas', 'More of species with more moles of gas'],
          ['Adding a catalyst', 'No shift in position', 'Equilibrium reached faster; yield unchanged']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Remember: Catalyst Does Not Shift Equilibrium',
        text: 'A catalyst <strong>does not change the position of equilibrium</strong> — it speeds up both the forward and reverse reactions equally.<br/><br/>Result: equilibrium is reached <strong>faster</strong>, but the proportions of products and reactants at equilibrium are <strong>unchanged</strong>.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Dynamic equilibrium: forward rate = reverse rate in a closed system. Concentrations constant but not necessarily equal. Le Chatelier\'s principle: equilibrium shifts to oppose any imposed change. Catalyst speeds up reaching equilibrium but does not change the position.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Dynamic equilibrium: rates equal; concentrations constant. Le Chatelier: equilibrium shifts to oppose any change. Catalyst has no effect on equilibrium position.',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'What is meant by dynamic equilibrium?', answer: 'A state in a closed system where the rate of the forward reaction equals the rate of the reverse reaction, and the concentrations of all species remain constant.' },
      { id: 'cue-2', blockId: 'call-lc', prompt: 'State Le Chatelier\'s principle.', answer: 'If a system at equilibrium is subjected to a change, the equilibrium shifts in the direction that opposes (minimises) that change.' },
      { id: 'cue-3', blockId: 'tbl-lc', prompt: 'For a reaction where the forward reaction is exothermic, in which direction does equilibrium shift if temperature is increased?', answer: 'The equilibrium shifts in the reverse (endothermic) direction, producing less product and more reactants.' }
    ]
  },
  evidence: [],
  mentions: []
};
