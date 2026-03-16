export const note_economics_2_11_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain how Foreign Direct Investment (FDI) and domestic investment contribute to economic growth by expanding productive capacity.' } },
    { id: 'h-1', type: 'heading', data: { text: 'FDI and Growth', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'FDI Definition', text: '<strong>Foreign Direct Investment (FDI)</strong>: investment by a foreign firm in productive assets in the host country (e.g. building a factory, acquiring a company). Differs from portfolio investment (buying shares without control).' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Capital accumulation</strong>: FDI and domestic investment add to the capital stock → shifts LRAS right → higher productive capacity.' }, { text: '<strong>Technology transfer</strong>: multinational companies (MNCs) bring advanced technology and management practices → productivity spillovers to host country firms.' }, { text: '<strong>Employment</strong>: FDI creates jobs directly and indirectly through multiplier and supply chain effects.' }, { text: '<strong>Tax revenues</strong>: corporate taxes from MNCs fund government spending.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Domestic Investment', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Physical capital</strong>: investing in machinery, plant, and buildings raises labour productivity (more capital per worker).' }, { text: '<strong>Infrastructure investment</strong>: government investment in roads, digital connectivity reduces business costs (positive externality).' }, { text: '<strong>R&D and innovation</strong>: investment in knowledge capital creates lasting productivity improvements — "new growth theory" (Romer).' }] } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'FDI Concerns', text: 'FDI may crowd out domestic firms, repatriate profits abroad, or exploit lower environmental/labour standards. "Race to the bottom" on corporate taxes reduces government revenue.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'FDI and domestic investment expand the capital stock → LRAS shifts right → potential growth. FDI also brings technology transfer and employment. Risk: profit repatriation and tax competition.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'FDI and investment expand capital stock → LRAS shift → potential growth. FDI brings tech transfer, jobs. Concern: profit repatriation, tax competition.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'What is FDI and how does it differ from portfolio investment?', answer: 'FDI is investment by a foreign firm in productive assets (factories, local firms) giving control over operations. Portfolio investment is purchasing financial assets (shares/bonds) without operational control.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'How does FDI contribute to long-run economic growth?', answer: 'FDI expands the host country\'s capital stock (LRAS shift right), brings advanced technology and productivity improvements through spillovers, creates employment, and generates tax revenues — all contributing to sustained potential growth.' },
    ]
  },
  evidence: [], mentions: []
};
