export const note_olevel_chemistry_9_9_9 = {
  pdfPath: '/notes/olevel/CIE IGCSE Chemistry/9 Metals/9-3-3-extraction-of-aluminium-from-bauxite.pdf',
  blocks: [
    {
      id: 'obj-1',
      type: 'objective',
      data: { text: 'Describe the extraction of aluminium from bauxite by electrolysis, including the role of cryolite and why the graphite anodes need replacing.' }
    },
    {
      id: 'h-1',
      type: 'heading',
      data: { text: 'Extraction of Aluminium from Bauxite', level: 2 }
    },
    {
      id: 'call-ore',
      type: 'callout',
      data: {
        style: 'key',
        title: 'Raw Material Processing',
        text: '<strong>Ore:</strong> Bauxite (mainly Al₂O₃ · xH₂O — hydrated aluminium oxide, with impurities)<br/><br/><strong>Purification:</strong> Bauxite is purified to give pure <strong>aluminium oxide (Al₂O₃)</strong> — also called corundum or alumina.<br/><br/><strong>Problem:</strong> Pure Al₂O₃ has a very high melting point (~2072°C) — too expensive to melt directly.<br/><br/><strong>Solution:</strong> Al₂O₃ is dissolved in molten <strong>cryolite (Na₃AlF₆)</strong>, which lowers the melting point to ~950°C, making the process economically viable. Ions can then move freely.'
      }
    },
    {
      id: 'h-2',
      type: 'heading',
      data: { text: 'The Electrolysis Cell', level: 2 }
    },
    {
      id: 'call-cell',
      type: 'callout',
      data: {
        style: 'worked',
        title: 'Reactions in the electrolysis cell',
        text: '<strong>Electrolyte:</strong> Molten Al₂O₃ dissolved in cryolite<br/><strong>Cathode (negative):</strong> Carbon/graphite lining of the cell<br/><strong>Anode (positive):</strong> Carbon/graphite rods<br/><br/><strong>At the cathode:</strong><br/>Al³⁺ + 3e⁻ → Al<br/>Molten aluminium sinks to the bottom and is tapped off.<br/><br/><strong>At the anode:</strong><br/>2O²⁻ → O₂ + 4e⁻<br/>Oxygen gas is produced at the anode.<br/><br/><strong>Why anodes need replacing:</strong> The oxygen produced at the anode reacts with the carbon graphite electrodes:<br/>C + O₂ → CO₂<br/>This oxidises the anodes, which gradually burn away and must be periodically replaced.'
      }
    },
    {
      id: 'call-cost',
      type: 'callout',
      data: {
        style: 'tip',
        title: 'High Energy Cost',
        text: 'Aluminium extraction is very expensive because:<br/>1. Large amounts of electrical energy are required for electrolysis.<br/>2. The cell must be kept at ~950°C continuously — high heat energy needed.<br/>3. Graphite anodes must be regularly replaced.<br/><br/>This is why <strong>recycling aluminium</strong> is economical — recycling uses only ~5% of the energy of primary extraction.'
      }
    },
    {
      id: 'sum-1',
      type: 'summary',
      data: { text: 'Al extracted from bauxite (Al₂O₃). Al₂O₃ dissolved in cryolite (lowers m.p. to ~950°C). Electrolysis: cathode → Al³⁺ + 3e⁻ → Al; anode → 2O²⁻ → O₂ + 4e⁻. Carbon anodes burn in O₂ and must be replaced. Very energy intensive.' }
    }
  ],
  recall: {
    enabled: true,
    ready: true,
    summaryText: 'Bauxite purified to Al₂O₃, dissolved in cryolite (lowers m.p.). Electrolysis: Al deposited at cathode; O₂ at anode burns electrodes → replaced regularly.',
    cues: [
      { id: 'cue-1', blockId: 'call-ore', prompt: 'What is the role of cryolite in the extraction of aluminium?', answer: 'Cryolite lowers the melting point of aluminium oxide from ~2072°C to ~950°C, making the process economically viable and allowing ions to move freely for electrolysis.' },
      { id: 'cue-2', blockId: 'call-cell', prompt: 'Write the electrode equations for the electrolysis of aluminium oxide.', answer: 'Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻' },
      { id: 'cue-3', blockId: 'call-cell', prompt: 'Why do the graphite anodes need to be replaced regularly?', answer: 'Oxygen produced at the anodes reacts with the carbon graphite (C + O₂ → CO₂), burning the anodes away. They must be periodically replaced.' }
    ]
  },
  evidence: [],
  mentions: []
};
