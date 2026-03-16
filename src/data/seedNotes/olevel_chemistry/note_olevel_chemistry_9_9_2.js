export const note_olevel_chemistry_9_9_2 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-1-3-alloys.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Define an alloy, explain why alloys are harder than pure metals, and describe common alloys and their uses.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Alloys', level: 2 }
    },
    {
      id: 'call-def',
      type: 'callout',
      data: {
        style: 'key',
        title: 'What is an Alloy?',
        text: 'An <strong>alloy</strong> is a mixture of a metal with one or more other elements (metals or non-metals).<br/><br/>Purpose: to improve the properties of the base metal — usually to make it <strong>harder, stronger, or more corrosion-resistant</strong>.<br/><br/>Why alloys are harder than pure metals:<br/>The added atoms have a different size from the host metal atoms. This <strong>distorts the regular lattice</strong>, preventing layers of ions from sliding over each other → the alloy is harder and less malleable.'
      }
    },
    {
      id: 'tbl-alloys',
      type: 'comparisonTable',
      data: {
        caption: 'Common alloys and their uses',
        headers: ['Alloy', 'Composition', 'Properties improved', 'Uses'],
        rows: [
          ['Steel', 'Iron + carbon (~0.1–1.5%)', 'Harder, stronger than pure iron', 'Structures, vehicles, tools'],
          ['Stainless steel', 'Iron + carbon + chromium (~18%) + nickel', 'Hard + corrosion-resistant', 'Cutlery, medical instruments, kitchen equipment'],
          ['Brass', 'Copper (~70%) + zinc (~30%)', 'Harder than Cu, good conductivity, attractive colour', 'Musical instruments, taps, door fittings'],
          ['Bronze', 'Copper (~90%) + tin (~10%)', 'Harder than Cu, corrosion-resistant', 'Statues, medals, bearings, bells'],
          ['Duralumin', 'Aluminium + copper (~4%) + Mg, Mn', 'Much stronger than Al, still lightweight', 'Aircraft frames'],
          ['Solder', 'Lead + tin (~50:50)', 'Low melting point', 'Joining electronic components']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Tip',
        text: 'For any alloy question:<br/>1. State what the alloy is made of<br/>2. Explain that the different-sized atoms disrupt the regular lattice<br/>3. This prevents layers from sliding → harder/stronger<br/><br/>Never say "alloys have stronger bonds" — the explanation is about disrupted layers.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Alloy = mixture of metal with other elements. Harder because different-sized atoms distort the regular lattice, preventing sliding. Key alloys: steel (Fe+C), brass (Cu+Zn), bronze (Cu+Sn), stainless steel (Fe+Cr+C), duralumin (Al+Cu).' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Alloy = metal mixture. Harder because different atom sizes distort lattice → layers can\'t slide. Steel (Fe+C), brass (Cu+Zn), bronze (Cu+Sn), stainless steel (Fe+Cr).',
    cues: [
      { id: 'cue-1', blockId: 'call-def', prompt: 'Explain why alloys are generally harder than the pure metals they contain.', answer: 'Alloys contain atoms of different sizes. These distort the regular arrangement of metal ions in the lattice, preventing the layers from sliding over each other, making the alloy harder.' },
      { id: 'cue-2', blockId: 'tbl-alloys', prompt: 'State the composition of brass and one use for it.', answer: 'Brass is an alloy of copper (~70%) and zinc (~30%). Uses include musical instruments, door fittings, and taps.' },
      { id: 'cue-3', blockId: 'tbl-alloys', prompt: 'Why is stainless steel preferred over regular steel for cutlery?', answer: 'Stainless steel contains chromium, which forms a thin layer of chromium oxide on the surface, preventing further corrosion. This makes it rust-resistant, unlike regular steel.' }
    ]
  },
  evidence: [],
  mentions: []
};
