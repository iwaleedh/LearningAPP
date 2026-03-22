export const note_economics_2_12_5 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Identify the main categories of supply-side policy and explain how they aim to increase productive capacity and improve long-run economic performance.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Supply-Side Policy Overview', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Supply-side policies</strong> aim to increase the productive capacity of the economy — shifting LRAS to the right, raising potential output while keeping inflation low.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Two Main Categories', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Supply-Side Policy Types', headers: ['Type', 'Philosophy', 'Key Tools'], rows: [['Free-market (market-oriented)', 'Reduce market distortions; let market allocate efficiently', 'Tax cuts, deregulation, privatisation, trade liberalisation'], ['Interventionist', 'Correct market failures; state investment in human/physical capital', 'Education spending, infrastructure, R&D subsidies, industrial policy']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Mechanism', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Supply-side policies improve the <strong>quantity or quality of factors of production</strong>: more skilled workers, more efficient capital, better technology.' }, { text: 'Unlike demand-side policy, supply-side effects are <strong>long-run</strong> — structural reforms take years or decades to show results.' }, { text: 'Supply-side improvements allow AD to grow without inflationary pressure — resolving the growth-inflation trade-off.' }] } },
    { id: 'sum-1', type: 'summary', data: { text: 'Supply-side policy shifts LRAS right. Two types: free-market (deregulation, tax cuts) and interventionist (education, R&D, infrastructure). Long-run focus; allows growth without inflation.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Neglecting to distinguish between free-market (supply-side deregulation, tax cuts, privatisation) and interventionist supply-side policies (skills training, R&D subsidies, infrastructure investment). Examiners test whether you understand the mechanisms: free-market policies boost incentives, while interventionist policies correct market failures. Both aim to shift AS right, but using different routes."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Supply-side policy: shifts LRAS right by improving factor quantity/quality. Free-market (deregulation, tax cuts) vs interventionist (education, R&D, infrastructure).',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'What is the aim of supply-side policy?', answer: 'To increase the productive capacity of the economy — shifting LRAS to the right. This allows real GDP to grow without generating inflationary pressure, addressing the growth-inflation trade-off from the supply side.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'Distinguish between free-market and interventionist supply-side policies.', answer: 'Free-market policies reduce state interference (tax cuts, deregulation, privatisation) to let markets allocate resources efficiently. Interventionist policies involve direct state action to correct market failures (education investment, R&D subsidies, infrastructure). Both aim to shift LRAS right but through opposite means.' },
    ]
  },
  evidence: [], mentions: []
};
