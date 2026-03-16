export const note_economics_3_17_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse the effects of government intervention on prices, output, efficiency and resource allocation in product markets.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Intervention Effects on Price and Efficiency', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Effects of Different Interventions', headers: ['Intervention', 'Effect on Price', 'Effect on Output', 'Efficiency Effect'], rows: [['Pigouvian tax (negative ext.)', 'Rises', 'Falls (toward optimal)', 'Improves allocative efficiency'], ['Subsidy (positive ext.)', 'Falls (consumer)', 'Rises (toward optimal)', 'Improves allocative efficiency'], ['Price cap below equilibrium', 'Falls', 'Excess demand / shortage', 'May create welfare loss (allocation by queueing, etc.)'], ['Price floor above equilibrium', 'Rises', 'Excess supply / surplus', 'May create welfare loss (surpluses, misallocation)'], ['Competition regulation', 'Falls (toward competitive)', 'Rises', 'Improves allocative and productive efficiency'], ['Regulation (product standards)', 'May rise (compliance costs)', 'May fall slightly', 'Improves safety/quality — potential efficiency gains']] } },
    { id: 'h-2', type: 'heading', data: { text: 'Price Controls — Detailed Effects', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Maximum price (price ceiling)</strong>: set below market equilibrium. Consumer benefit (lower price) but creates <strong>excess demand</strong> → shortages, queuing, black markets. Example: rent controls, NHS prescription prices.' }, { text: '<strong>Minimum price (price floor)</strong>: set above market equilibrium. Producer benefit but creates <strong>excess supply</strong> → waste/surplus. Example: CAP agricultural minimum prices, minimum wage.' }, { text: 'Allocative efficiency: intervention improves it when correcting market failure; worsens it when distorting a competitive market.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always ask: <strong>"Is the market already failing?"</strong> If yes, intervention may move output toward socially optimal level → improves efficiency. If the market is competitive and functioning well, price controls create new distortions → worsen efficiency.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Pigouvian tax and subsidies improve efficiency when correcting externalities. Price caps below equilibrium → excess demand; price floors → excess supply. Competition regulation reduces P and raises Q toward efficient levels.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Intervention improves efficiency IF it corrects market failure. Price cap → shortage. Price floor → surplus. Tax on negative externality → raises price, reduces output to socially optimal. Competition regulation → lower P, higher Q.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Explain the effects of a price ceiling set below market equilibrium.', answer: 'A price ceiling below equilibrium reduces price for consumers but creates excess demand (Qd > Qs) — a shortage. This may lead to queuing, rationing, black markets, and under-investment by suppliers (as revenue falls). While consumers who get the good benefit, those who cannot get it are worse off. Overall welfare effect depends on context.' },
    ]
  },
  evidence: [], mentions: []
};
