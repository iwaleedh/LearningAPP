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
      id: 'svg-equilibrium-graphs',
      type: 'svg',
      data: {
        caption: 'Rates and Concentrations toward Equilibrium over time. The forward rate drops as reactants are used up, and reverse rate increases as products form, until they are equal. Concentrations eventually become constant (level off).',
        svg: `<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="var(--color-surface)" />

  <line x1="300" y1="20" x2="300" y2="220" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="8,8" />

  <!-- LEFT: Rate vs Time -->
  <!-- Axes -->
  <line x1="40" y1="200" x2="280" y2="200" stroke="var(--color-text)" stroke-width="2"/>
  <line x1="40" y1="200" x2="40" y2="40" stroke="var(--color-text)" stroke-width="2"/>
  <text x="160" y="230" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Time</text>
  <text x="20" y="120" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle" transform="rotate(-90 20 120)">Rate</text>
  <text x="160" y="20" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Rate of Reaction</text>

  <!-- Eq line -->
  <line x1="180" y1="40" x2="180" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="180" y="32" font-family="var(--font-sans)" font-size="10" fill="#64748b" text-anchor="middle">Equilibrium reached</text>

  <!-- Forward Rate drops -->
  <path d="M 40 50 Q 80 120 180 120 L 280 120" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <text x="110" y="85" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">Forward Rate</text>

  <!-- Reverse Rate increases -->
  <path d="M 40 200 Q 100 120 180 120 L 280 120" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="120" y="160" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#3b82f6" text-anchor="middle">Reverse Rate</text>


  <!-- RIGHT: Conc vs Time -->
  <!-- Axes -->
  <line x1="340" y1="200" x2="580" y2="200" stroke="var(--color-text)" stroke-width="2"/>
  <line x1="340" y1="200" x2="340" y2="40" stroke="var(--color-text)" stroke-width="2"/>
  <text x="460" y="230" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle">Time</text>
  <text x="320" y="120" font-family="var(--font-sans)" font-size="12" fill="var(--color-text)" text-anchor="middle" transform="rotate(-90 320 120)">Concentration</text>
  <text x="460" y="20" font-family="var(--font-sans)" font-size="12" font-weight="bold" fill="var(--color-text)" text-anchor="middle">Concentration Profiles</text>

  <!-- Eq line -->
  <line x1="480" y1="40" x2="480" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="480" y="32" font-family="var(--font-sans)" font-size="10" fill="#64748b" text-anchor="middle">Equilibrium reached</text>

  <!-- Reactant Conc drops -->
  <path d="M 340 50 Q 400 140 480 140 L 580 140" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <text x="410" y="105" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">Reactants</text>

  <!-- Product Conc increases -->
  <path d="M 340 200 Q 400 70 480 70 L 580 70" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="410" y="145" font-family="var(--font-sans)" font-size="10" font-weight="bold" fill="#f59e0b" text-anchor="middle">Products</text>
  <text x="480" y="215" font-family="var(--font-sans)" font-size="10" fill="#64748b" text-anchor="middle">Constant, not equal</text>
</svg>`
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
