export const note_olevel_chemistry_9_9_4 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-2-2-explaining-reactivity.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Explain differences in reactivity of metals in terms of ease of ion formation, ionisation energy, and atomic radius.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Explaining Reactivity of Metals', level: 2 }
    },
    {
      id: 'call-key',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What Controls Metal Reactivity?',
        text: 'A metal reacts by <strong>losing electrons</strong> to form positive ions:<br/>M → M<sup>n+</sup> + ne<sup>−</sup><br/><br/>The <strong>easier</strong> it is to remove electrons (i.e. the lower the ionisation energy), the <strong>more reactive</strong> the metal.<br/><br/>Two key factors:<br/><strong>1. Atomic radius</strong> — larger atoms have outer electrons further from the nucleus → weaker attraction → electrons removed more easily → more reactive<br/><strong>2. Nuclear charge</strong> — more protons pull electrons more strongly → harder to remove → less reactive<br/><br/>Going <strong>down Group I or II</strong>: atomic radius increases, shielding increases → reactivity increases'
      }
    },
    {
      id: 'tbl-trends',
      type: 'comparisonTable',
      data: {
        caption: 'Trends in Group I vs reactivity',
        headers: ['Metal', 'Electron config.', 'Atomic radius trend', 'Ionisation energy trend', 'Reactivity'],
        rows: [
          ['Lithium (Li)', '2,1', 'Smallest', 'Highest in group', 'Least reactive in group'],
          ['Sodium (Na)', '2,8,1', 'Medium', 'Medium', 'More reactive'],
          ['Potassium (K)', '2,8,8,1', 'Largest', 'Lowest in group', 'Most reactive in group']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Answering Reactivity Explanation Questions',
        text: 'Use this structure for exam answers:<br/><br/>"When metal X reacts, it loses electrons to form metal ions. Metal X has a <strong>larger atomic radius</strong> than metal Y, so its outer electrons are <strong>further from the nucleus</strong> and experience <strong>less electrostatic attraction</strong>. Therefore, X loses electrons more easily and is more reactive."'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Metals react by losing electrons. Reactivity increases with atomic radius (outer electrons further from nucleus, less attraction → easier loss). Reactivity decreases with increasing nuclear charge. Going down a group in the periodic table, metals become more reactive.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Metals react by losing electrons. Larger atomic radius → outer electrons further from nucleus → easier to lose → more reactive.',
    cues: [
      { id: 'cue-1', blockId: 'call-key', prompt: 'What determines the reactivity of a metal, at the atomic level?', answer: 'The ease with which a metal atom loses outer electrons to form positive ions. A larger atomic radius means weaker attraction on outer electrons, so they are lost more easily.' },
      { id: 'cue-2', blockId: 'tbl-trends', prompt: 'Why is potassium more reactive than sodium?', answer: 'Potassium has a larger atomic radius. Its outer electron is further from the nucleus and experiences less electrostatic attraction, so it is lost more easily when potassium reacts.' },
      { id: 'cue-3', blockId: 'call-key', prompt: 'Write a general equation for a metal reacting to form ions.', answer: 'M → Mⁿ⁺ + ne⁻  (the metal loses electrons to form positive ions).' }
    ]
  },
  evidence: [],
  mentions: []
};
