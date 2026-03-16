export const note_olevel_chemistry_8_8_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-1-2-periodic-trends.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe and explain periodic trends in atomic radius, ionisation energy, and electronegativity across a period and down a group.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Trends Across a Period (left → right)', level: 2 }
    },
    {
      id: 'tbl-across',
      type: 'comparisonTable',
      data: {
        caption: 'Trends across Period 3 (Na → Cl)',
        headers: ['Property', 'Trend', 'Reason'],
        rows: [
          ['Atomic radius', 'Decreases', 'More protons attract electrons more strongly; electrons added to same shell; electrons pulled closer to nucleus'],
          ['First ionisation energy', 'Generally increases', 'Atomic radius decreases → electrons held more tightly; more protons; less shielding (same shell)'],
          ['Electronegativity', 'Increases', 'More protons attract bonding electrons more strongly; smaller radius → bonding electrons closer']
        ]
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'Trends Down a Group', level: 2 }
    },
    {
      id: 'tbl-down',
      type: 'comparisonTable',
      data: {
        caption: 'Trends down Group 1 or 7',
        headers: ['Property', 'Trend', 'Reason'],
        rows: [
          ['Atomic radius', 'Increases', 'Extra electron shell added each period → larger atom'],
          ['First ionisation energy', 'Decreases', 'Outer electrons are further from nucleus (more shells) and more shielded by inner shells → easier to remove'],
          ['Electronegativity', 'Decreases', 'Outer electrons further away and more shielded → weaker attraction for bonding electrons'],
          ['Metallic character (Group 1)', 'Increases', 'Easier to lose the outer electron → more reactive'],
          ['Reactivity (Group 7)', 'Decreases', 'Harder to gain an electron (outer shell further, more shielding)']
        ]
      }
    },
    {
      id: 'call-summary-trends',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Memory Framework',
        text: '<strong>Key factor = nuclear charge vs. shielding and distance</strong><br/><br/>Across a period → more protons, same shielding → stronger nuclear pull → smaller radius, higher IE, higher electronegativity.<br/><br/>Down a group → more shells → weaker nuclear pull on outer e⁻ → larger radius, lower IE, lower electronegativity.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Across a period: atomic radius decreases; IE and electronegativity increase. Down a group: atomic radius increases; IE and electronegativity decrease. Key ideas: nuclear charge, shielding, and distance from nucleus determine these trends.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Across period: radius↓, IE↑, electronegativity↑ (more protons, same shields). Down group: radius↑, IE↓, electronegativity↓ (more shells).',
    cues: [
      { id: 'cue-1', blockId: 'tbl-across', prompt: 'Explain why atomic radius decreases across Period 3 from Na to Cl.', answer: 'As proton number increases, the nuclear charge increases, attracting the outer electrons more strongly and pulling them closer to the nucleus. The electrons are added to the same shell so shielding is similar.' },
      { id: 'cue-2', blockId: 'tbl-down', prompt: 'Explain why first ionisation energy decreases down Group 1.', answer: 'Each successive element has an extra electron shell, so the outer electron is further from the nucleus and shielded by more inner shells. The nuclear attraction for the outer electron is weaker, so it is easier to remove.' },
      { id: 'cue-3', blockId: 'tbl-down', prompt: 'Why does electronegativity decrease down Group 7?', answer: 'The outer shell becomes further from the nucleus and more shielded by inner electrons with each period, so the nucleus attracts bonding electrons less strongly.' }
    ]
  },
  evidence: [],
  mentions: []
};
