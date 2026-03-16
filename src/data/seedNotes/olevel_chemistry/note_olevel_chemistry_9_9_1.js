export const note_olevel_chemistry_9_9_1 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-1-2-uses-of-metals.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Relate the uses of metals to their properties.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Uses of Metals Related to Properties', level: 2 }
    },
    {
      id: 'tbl-uses',
      type: 'comparisonTable',
      data: {
        caption: 'Uses of metals linked to their properties',
        headers: ['Metal', 'Key Properties', 'Main Uses'],
        rows: [
          ['Aluminium (Al)', 'Low density, corrosion-resistant (forms protective Al₂O₃ layer), good conductor', 'Aircraft bodies, food cans, overhead power cables, cooking foil'],
          ['Iron / Steel', 'Strong, hard, magnetic, high melting point', 'Building/structural construction, vehicles, machines, tools'],
          ['Copper (Cu)', 'Excellent electrical conductor, malleable, good thermal conductor, corrosion resistant', 'Electrical wiring, water pipes, cooking utensils, printed circuits'],
          ['Gold (Au)', 'Unreactive (does not corrode/tarnish), good conductor, malleable', 'Jewellery, electrical contacts, dental crowns'],
          ['Titanium (Ti)', 'High strength, low density, corrosion resistant, biocompatible', 'Aircraft, spacecraft, surgical implants, sports equipment']
        ]
      }
    },
    {
      id: 'call-tip',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'Exam Approach',
        text: 'Always link use → specific property:<br/>• Electrical wiring → copper (best conductor after silver, but less expensive)<br/>• Aircraft → aluminium (low density = lighter aircraft; fuel savings)<br/>• Coins → copper/zinc/nickel alloys (hard, resistant to wear, malleable)<br/>• Pipes → copper (corrosion-resistant, malleable)<br/>• Jewellery → gold (unreactive = does not tarnish or irritate skin)<br/><br/>State the <strong>specific</strong> property, not just "because it is a metal".'
      }
    },
    {
      id: 'call-strength',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Steel vs Pure Iron',
        text: 'Pure iron is too soft and malleable for most uses.<br/><strong>Steel</strong> = iron + carbon (small %) — harder and stronger than pure iron because carbon atoms disrupt the regular layers of iron ions, preventing them from sliding.<br/><br/>Stainless steel = iron + carbon + chromium (~18%) → resists corrosion (Cr₂O₃ layer). Used in cutlery, medical instruments.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Al: light + corrosion-resistant → aircraft, cables. Cu: best electrical conductor → wires, pipes. Au: unreactive → jewellery, contacts. Ti: strong + light + corrosion-resistant → aerospace, implants. Steel: iron + C → stronger than pure iron.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Al (light/corrosion-resist) → aircraft. Cu (conductor) → wires. Au (unreactive) → jewellery. Ti (strong+light) → aerospace/implants.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-uses', prompt: 'Give two reasons why aluminium is used to make aircraft bodies.', answer: 'It has a low density (making aircraft lighter) and is corrosion-resistant (it forms a protective oxide layer).' },
      { id: 'cue-2', blockId: 'tbl-uses', prompt: 'Why is copper used for electrical wiring?', answer: 'Copper is an excellent electrical conductor and is malleable (can be drawn into thin wires easily).' },
      { id: 'cue-3', blockId: 'call-strength', prompt: 'Why is steel harder and stronger than pure iron?', answer: 'Steel contains carbon atoms that disrupt the regular lattice of iron ions, preventing the layers from sliding over each other. This makes it harder and less malleable.' }
    ]
  },
  evidence: [],
  mentions: []
};
