export const note_olevel_chemistry_1_1_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/1 States Of Matter/1-1-2-states-of-matter.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the three states of matter, explain changes of state using particle theory, and use state symbols correctly in chemical equations.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Changes of State', level: 2 }
    },
    {
      id: 'call-key1',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Changes of State — Names and Directions',
        text: '<strong>Melting:</strong> solid → liquid (heat absorbed)<br/><strong>Freezing:</strong> liquid → solid (heat released)<br/><strong>Boiling / Evaporation:</strong> liquid → gas (heat absorbed)<br/><strong>Condensation:</strong> gas → liquid (heat released)<br/><strong>Sublimation:</strong> solid → gas directly (e.g. iodine, dry ice / CO₂)<br/><strong>Deposition:</strong> gas → solid directly<br/><br/>Changes of state are <strong>physical</strong> changes — no new substance is formed and the change is reversible.'
      }
    },
    {
      id: 'tbl-changes',
      type: 'comparisonTable',
      data: {
        caption: 'Summary of changes of state',
        headers: ['Change', 'Direction', 'Energy change', 'Example'],
        rows: [
          ['Melting', 'Solid → Liquid', 'Energy absorbed (endothermic)', 'Ice melting at 0°C'],
          ['Freezing', 'Liquid → Solid', 'Energy released (exothermic)', 'Water freezing at 0°C'],
          ['Boiling', 'Liquid → Gas', 'Energy absorbed (endothermic)', 'Water boiling at 100°C'],
          ['Condensation', 'Gas → Liquid', 'Energy released (exothermic)', 'Steam condensing on a window'],
          ['Sublimation', 'Solid → Gas', 'Energy absorbed', 'Iodine crystals forming purple vapour'],
          ['Evaporation', 'Liquid → Gas (at surface)', 'Energy absorbed', 'Puddles drying up at room temperature']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Melting Point and Boiling Point', level: 2 }
    },
    {
      id: 'call-mp',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Melting and Boiling Points',
        text: '<strong>Melting point (mp):</strong> the temperature at which a solid changes to a liquid (or vice versa). During melting, temperature stays constant — energy is used to break attractions between particles, not to increase kinetic energy.<br/><br/><strong>Boiling point (bp):</strong> the temperature at which a liquid changes to a gas throughout the bulk liquid. During boiling, temperature stays constant.<br/><br/>A <strong>pure substance</strong> has a sharp, fixed melting point. An <strong>impure substance</strong> melts over a range of temperatures at a lower temperature than the pure substance.'
      }
    },
    {
      id: 'h-3',
      type: 'heading',
      data: { text: 'State Symbols in Equations', level: 2 }
    },
    {
      id: 'list-symbols',
      type: 'list',
      data: {
        style: 'bullet',
        items: [
          { text: '<strong>(s)</strong> — solid' },
          { text: '<strong>(l)</strong> — liquid' },
          { text: '<strong>(g)</strong> — gas' },
          { text: '<strong>(aq)</strong> — aqueous (dissolved in water)' }
        ]
      }
    },
    {
      id: 'call-worked1',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Example: State Symbols in an Equation',
        text: 'Zinc reacting with dilute hydrochloric acid:<br/><br/>Zn(s) + 2HCl(aq) → ZnCl<sub>2</sub>(aq) + H<sub>2</sub>(g)<br/><br/>The zinc is a solid, HCl is dissolved in water (aqueous), zinc chloride dissolves to form an aqueous solution, and hydrogen gas is produced.'
      }
    },
    {
      id: 'call-tip1',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip — Pure vs Impure Melting',
        text: 'A sharp melting point at the expected temperature indicates a pure substance. A range of melting temperatures (lower than expected) indicates an impurity is present. This is used in testing sample purity.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Changes of state (melting, boiling, freezing, condensation, sublimation) are physical changes involving energy transfer at constant temperature. State symbols (s), (l), (g), (aq) are used in equations. Pure substances have sharp, fixed melting points.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Changes of state are physical, reversible changes involving energy at constant temperature; state symbols (s), (l), (g), (aq) label phases in equations.',
    cues: [
      { id: 'cue-1', blockId: 'call-key1', prompt: 'Name all six changes of state and their directions.', answer: 'Melting (solid→liquid), freezing (liquid→solid), boiling (liquid→gas), condensation (gas→liquid), sublimation (solid→gas), deposition (gas→solid).' },
      { id: 'cue-2', blockId: 'call-mp', prompt: 'Why does temperature stay constant during melting?', answer: 'During melting, energy is used to break the attractive forces between particles, not to increase kinetic energy, so temperature remains constant at the melting point.' },
      { id: 'cue-3', blockId: 'list-symbols', prompt: 'What do the state symbols (s), (l), (g) and (aq) mean?', answer: '(s) = solid, (l) = liquid, (g) = gas, (aq) = aqueous (dissolved in water).' },
      { id: 'cue-4', blockId: 'call-mp', prompt: 'How does an impurity affect the melting point of a substance?', answer: 'An impurity lowers and broadens the melting point — the substance melts over a range of temperatures lower than expected, rather than at a sharp fixed temperature.' }
    ]
  },
  evidence: [],
  mentions: []
};
