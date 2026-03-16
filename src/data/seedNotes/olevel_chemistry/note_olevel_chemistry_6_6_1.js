export const note_olevel_chemistry_6_6_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/6 Chemical Reactions/6-1-2-rates-of-reaction-factors.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'State the factors that affect the rate of a chemical reaction and describe how each one affects the rate.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Factors Affecting Rate of Reaction', level: 2 }
    },
    {
      id: 'tbl-factors',
      type: 'comparisonTable',
      data: {
        caption: 'Factors and their effect on rate',
        headers: ['Factor', 'Effect on Rate', 'Reason'],
        rows: [
          ['Concentration (solutions)', 'Higher concentration → faster', 'More particles per unit volume → more frequent collisions'],
          ['Pressure (gases)', 'Higher pressure → faster', 'Molecules closer together → more frequent collisions'],
          ['Temperature', 'Higher temperature → faster', 'Particles have more kinetic energy → more frequent AND more energetic collisions; more particles exceed Eₐ'],
          ['Surface area (solids)', 'Larger surface area (smaller pieces) → faster', 'More surface exposed for collisions to occur'],
          ['Catalyst', 'Catalyst → faster', 'Provides alternative pathway with lower activation energy; more particles exceed Eₐ']
        ]
      }
    },
    {
      id: 'call-definitions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Rate of Reaction',
        text: '<strong>Rate of reaction</strong> = how quickly reactants are used up or products are formed per unit time.<br/><br/>Can be measured by:<br/>• Volume of gas produced (using gas syringe or measuring tube over water)<br/>• Change in mass (losing gas → mass decreases)<br/>• Colour change intensity<br/>• Disappearance of a solid (e.g. marble chips dissolving in acid)<br/>• Colour cross method (sodium thiosulfate + HCl — cross disappears as precipitate forms)'
      }
    },
    {
      id: 'call-catalyst',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Catalysts',
        text: 'A <strong>catalyst</strong> is a substance that increases the rate of reaction without being used up.<br/><br/>It provides an alternative pathway with lower activation energy (Eₐ).<br/><br/>A catalyst does <strong>NOT</strong>:<br/>• Change ΔH (enthalpy change)<br/>• Get used up<br/>• Change the position of equilibrium<br/><br/>Examples: MnO₂ in decomposition of H₂O₂; Fe in Haber process; Pt/Rh in catalytic converters'
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'There are 5 factors: concentration, pressure (gases), temperature, surface area, catalyst. Temperature is the only factor that changes the activation energy profile — more particles exceed Eₐ AND more frequent collisions. Catalysts only lower Eₐ; concentration/pressure/surface area only affect collision frequency.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: '5 factors affect rate: concentration, pressure (gases), temperature, surface area, catalyst. Each works by increasing collision frequency or proportion of successful collisions. Catalysts lower Eₐ without being consumed.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: '5 factors: concentration, pressure, temperature, surface area, catalyst. More collisions or more collisions with enough energy = faster rate.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-factors', prompt: 'State five factors that affect the rate of a reaction.', answer: 'Concentration, pressure (gases only), temperature, surface area (solids), and catalyst.' },
      { id: 'cue-2', blockId: 'tbl-factors', prompt: 'Explain why increasing temperature increases the rate of reaction.', answer: 'Particles have more kinetic energy → more frequent collisions AND more particles have energy greater than or equal to the activation energy → more successful collisions per unit time.' },
      { id: 'cue-3', blockId: 'call-catalyst', prompt: 'How does a catalyst increase reaction rate?', answer: 'It provides an alternative pathway with a lower activation energy, so more particles have enough energy to react when they collide.' }
    ]
  },
  evidence: [],
  mentions: []
};
