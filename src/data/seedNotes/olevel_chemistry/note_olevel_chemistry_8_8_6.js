export const note_olevel_chemistry_8_8_6 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/8 The Periodic Table/8-2-5-noble-gases.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the properties of noble gases and explain their unreactivity in terms of electron configuration.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Group 0: The Noble Gases', level: 2 }
    },
    {
      id: 'call-properties',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Properties of Noble Gases',
        text: 'Members: He (helium), Ne (neon), Ar (argon), Kr (krypton), Xe (xenon), Rn (radon)<br/><br/>Physical properties:<br/>• All are <strong>monatomic gases</strong> at room temperature<br/>• Very low boiling points (He: −269 °C)<br/>• Colourless, odourless<br/>• Boiling point increases down the group (larger atoms → stronger London dispersion forces)<br/><br/>Chemical properties:<br/>• Extremely <strong>unreactive</strong> (inert) under normal conditions<br/>• Do not normally form chemical bonds'
      }
    },
    {
      id: 'call-why-unreactive',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Why are Noble Gases Unreactive?',
        text: 'Noble gases have <strong>full outer electron shells</strong>:<br/>• He: 2 electrons (full 1st shell)<br/>• Ne, Ar, etc.: 8 electrons in outer shell<br/><br/>A full outer shell is the most stable arrangement of electrons.<br/>There is no drive to share, gain, or lose electrons → no chemical bonding → unreactive.<br/><br/>This is also why other atoms strive to achieve the noble gas configuration when forming bonds.'
      }
    },
    {
      id: 'tbl-uses',
      type: 'comparisonTable',
      data: {
        caption: 'Uses of noble gases and the reason',
        headers: ['Gas', 'Use', 'Why (key property)'],
        rows: [
          ['Helium (He)', 'Filling balloons/airships', 'Low density; non-flammable (unlike H₂)'],
          ['Neon (Ne)', 'Advertising signs (neon lights)', 'Glows red-orange when electrical current passes through it'],
          ['Argon (Ar)', 'Filling light bulbs; welding atmospheres', 'Non-reactive → prevents filament/metal from oxidising'],
          ['Argon (Ar)', 'Filling double-glazing windows', 'Poor conductor of heat; inert'],
          ['Krypton/Xenon', 'Flash photography; projector bulbs', 'Produce bright white light under electrical discharge']
        ]
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Noble gases (Group 0): monatomic, extremely unreactive due to full outer electron shells. He: 2 electrons; others: 8. Uses exploit their inertness: He (balloons), Ar (light bulbs, welding), Ne (advertising signs).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Noble gases: monatomic, full outer shells → very unreactive. He = 2e⁻; others = 8e⁻. Uses: He (lighter-than-air), Ar (inert atmosphere), Ne (signs).',
    cues: [
      { id: 'cue-1', blockId: 'call-why-unreactive', prompt: 'Explain why noble gases are chemically unreactive.', answer: 'Their outer electron shells are completely full (He: 2; others: 8 electrons). They have no tendency to gain, lose, or share electrons, so they do not form chemical bonds.' },
      { id: 'cue-2', blockId: 'tbl-uses', prompt: 'State two uses of noble gases and explain why each is suitable.', answer: 'Any two, e.g.: (1) Helium in balloons — low density and non-flammable. (2) Argon in light bulbs — chemically inert so it prevents the tungsten filament from oxidising.' },
      { id: 'cue-3', blockId: 'call-properties', prompt: 'Why does the boiling point of noble gases increase from He to Xe?', answer: 'Going down the group, the atoms become larger with more electrons. This increases London (van der Waals) dispersion forces between atoms, requiring more energy to overcome them, so the boiling point rises.' }
    ]
  },
  evidence: [],
  mentions: []
};
