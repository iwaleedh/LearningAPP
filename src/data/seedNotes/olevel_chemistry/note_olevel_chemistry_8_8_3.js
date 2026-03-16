export const note_olevel_chemistry_8_8_3 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-2-2-group-vii-properties.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the physical and chemical properties of Group VII (halogens) and explain trends in reactivity down the group.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Group VII: The Halogens', level: 2 }
    },
    {
      id: 'tbl-physical',
      type: 'comparisonTable',
      data: {
        caption: 'Physical properties of halogens at room temperature',
        headers: ['Halogen', 'State (room temp)', 'Colour', 'Trend'],
        rows: [
          ['Fluorine (F₂)', 'Gas', 'Pale yellow', '↑ down the group'],
          ['Chlorine (Cl₂)', 'Gas', 'Yellow-green', ''],
          ['Bromine (Br₂)', 'Liquid', 'Red-brown (orange)', ''],
          ['Iodine (I₂)', 'Solid', 'Grey-black (violet vapour)', '']
        ]
      }
    },
    {
      id: 'call-trend-physical',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Physical Trends Down Group 7',
        text: 'Going down the group (F → Cl → Br → I):<br/>• <strong>Melting and boiling points increase</strong> → state changes gas → liquid → solid<br/>• Colour becomes <strong>darker</strong><br/>• Density increases<br/><br/>Reason: larger molecules → stronger London dispersion forces → more energy needed to overcome intermolecular forces.'
      }
    },
    {
      id: 'call-reactions',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Chemical Properties',
        text: '<strong>Reaction with metals</strong> → metal halide:<br/>2Na(s) + Cl₂(g) → 2NaCl(s)<br/>Fe(s) + 3Cl₂(g) → 2FeCl₃(s) (iron wool burns in Cl₂)<br/><br/><strong>Reaction with hydrogen</strong>:<br/>H₂(g) + Cl₂(g) → 2HCl(g) (explodes in UV with F₂; needs catalyst/heat for Br₂, I₂)<br/><br/><strong>Reaction with water</strong> (Cl₂):<br/>Cl₂(g) + H₂O(l) ⇌ HCl(aq) + HClO(aq) → bleaching action (HOCl is the active bleach)'
      }
    },
    {
      id: 'call-reactivity',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Reactivity Trend',
        text: '<strong>Reactivity decreases down Group VII</strong> (F &gt; Cl &gt; Br &gt; I).<br/><br/>Reason: Going down the group, the incoming electron is being added to a shell that is:<br/>• Further from the nucleus<br/>• Shielded by more inner shells<br/>→ Less effective nuclear attraction for the incoming electron → harder to gain the electron → less reactive.<br/><br/>F is the most reactive non-metal element in the periodic table.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Halogens: F₂ (pale yellow gas) → Cl₂ (yellow-green gas) → Br₂ (red-brown liquid) → I₂ (grey-black solid). MP/BP increase down group. Reactivity decreases: F > Cl > Br > I (outer shell further, more shielding → harder to gain e⁻).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Halogens: gas→liquid→solid down group; colour darker; MP/BP increase. Reactivity: F>Cl>Br>I. Down group: outer e⁻ further+shielded → harder to gain e⁻.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-physical', prompt: 'State the colour and physical state of chlorine, bromine, and iodine at room temperature.', answer: 'Chlorine: yellow-green gas; bromine: red-brown liquid; iodine: grey-black solid (gives violet vapour on heating).' },
      { id: 'cue-2', blockId: 'call-reactivity', prompt: 'Explain why fluorine is more reactive than chlorine.', answer: 'Fluorine\'s outer shell (n=2) is much closer to the nucleus and less shielded, so the nucleus attracts an incoming electron more strongly. It is easier for fluorine to gain an electron, making it more reactive.' },
      { id: 'cue-3', blockId: 'call-reactions', prompt: 'Write the equation for hydrogen reacting with chlorine.', answer: 'H₂(g) + Cl₂(g) → 2HCl(g)' }
    ]
  },
  evidence: [],
  mentions: []
};
