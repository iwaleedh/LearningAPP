export const note_olevel_chemistry_8_8_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-2-1-group-i-properties.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the physical and chemical properties of Group I (alkali metals) and explain trends in reactivity down the group.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Group I: The Alkali Metals', level: 2 }
    },
    {
      id: 'call-properties',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Physical Properties',
        text: 'Members: Li, Na, K, Rb, Cs (and Fr)<br/><br/>• All are <strong>soft metals</strong> (can be cut with a knife)<br/>• <strong>Low density</strong> (Li, Na, K float on water)<br/>• <strong>Low melting/boiling points</strong> compared to other metals<br/>• All decrease in melting point and increase in density down the group<br/>• Stored under oil (to prevent reaction with oxygen and water vapour)'
      }
    },
    {
      id: 'call-reactions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemical Reactions',
        text: '<strong>1. Reaction with water:</strong><br/>2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)<br/>Produces hydroxide (alkaline solution) + hydrogen gas.<br/>• Li: gentle fizzing<br/>• Na: vigorous fizzing, moves on surface<br/>• K: catches fire (lilac flame)<br/><br/><strong>2. Reaction with oxygen (air):</strong><br/>4Na(s) + O₂(g) → 2Na₂O(s) (sodium oxide)<br/>Tarnish rapidly in air — turn from shiny to dull.<br/><br/><strong>3. Reaction with chlorine:</strong><br/>2Na(s) + Cl₂(g) → 2NaCl(s) (white solid)'
      }
    },
    {
      id: 'call-trend',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity Trend',
        text: '<strong>Reactivity increases down Group I</strong> (Li &lt; Na &lt; K &lt; Rb &lt; Cs).<br/><br/>Reason: Going down the group, the outer electron is:<br/>• In a shell further from the nucleus<br/>• Shielded by more inner electron shells<br/>→ Weaker attraction from the nucleus → the electron is more easily lost → more reactive (easier oxidation).<br/><br/>Cs is the most reactive alkali metal (explosive with water).'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alkali metals: soft, low-density, low melting point. All react with water → metal hydroxide + H₂. Reactivity increases down the group (Li→Cs) because outer electron is further and more shielded → easier to lose.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Group 1: soft metals. React with water → MOH + H₂. React with O₂ and Cl₂. Reactivity order: Li < Na < K < Cs. Down group: outer e⁻ further + more shielded → easier to lose.',
    cues: [
      { id: 'cue-1', blockId: 'call-reactions', prompt: 'Write the symbol equation for sodium reacting with water.', answer: '2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)' },
      { id: 'cue-2', blockId: 'call-trend', prompt: 'Explain why potassium is more reactive with water than sodium.', answer: 'In potassium, the outer electron is in a higher energy shell, further from the nucleus and shielded by more inner electrons. The nuclear attraction is weaker, so the electron is more easily lost, making K more reactive.' },
      { id: 'cue-3', blockId: 'call-properties', prompt: 'Why are alkali metals stored under oil?', answer: 'They react rapidly with oxygen and water vapour in the air, oxidising on the surface. Oil prevents contact with air and moisture.' }
    ]
  },
  evidence: [],
  mentions: []
};
