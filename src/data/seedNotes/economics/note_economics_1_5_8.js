export const note_economics_1_5_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain rational and irrational speculation, describe how asset price bubbles form and burst, and analyse the resulting market failure and systemic risk.' }, terms: [] },
    { id: 'h-1', type: 'heading', data: { text: 'Speculation in Financial Markets', level: 2 }, terms: [] },
    { id: 'call-1', type: 'callout', data: { style: 'key', title: 'Speculation Definition', text: '<strong>Speculation</strong> is the purchase of an asset with the expectation that its price will rise in the future, allowing the speculator to sell at a profit.<br/><br/><strong>Rational speculation</strong> can be stabilising — speculators buy when underpriced and sell when overpriced, moving prices toward equilibrium.<br/><strong>Irrational speculation</strong> (herd behaviour) is destabilising — speculators buy simply because others are buying, inflating prices beyond fundamental value.' }, terms: [] },
    { id: 'h-2', type: 'heading', data: { text: 'Asset Price Bubbles', level: 2 }, terms: [] },
    { id: 'call-2', type: 'callout', data: { style: 'key', title: 'What is a Bubble?', text: 'An <strong>asset price bubble</strong> occurs when asset prices rise far above their <strong>fundamental (intrinsic) value</strong> due to speculative buying. The bubble <strong>bursts</strong> when confidence collapses, causing prices to fall rapidly and severely.' }, terms: [] },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Stage 1 — Displacement</strong>: a new technology or opportunity attracts initial investment (e.g. internet companies in 1990s).' }, { text: '<strong>Stage 2 — Boom</strong>: rising prices attract more investors; media coverage increases; "fear of missing out" (FOMO) drives herd behaviour.' }, { text: '<strong>Stage 3 — Euphoria</strong>: prices massively exceed intrinsic value; warnings ignored; "this time is different" thinking.' }, { text: '<strong>Stage 4 — Distress</strong>: early investors begin to sell; some doubt creeps in.' }, { text: '<strong>Stage 5 — Panic/Bust</strong>: rapid selling; prices collapse; many investors suffer heavy losses.' }] }, terms: [] },
    { id: 'h-3', type: 'heading', data: { text: 'Historical Examples', level: 2 }, terms: [] },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Notable asset bubbles', headers: ['Bubble', 'Period', 'Asset', 'Cause'], rows: [['Dutch Tulip Mania', '1630s', 'Tulip bulbs', 'Herd buying of rare tulip varieties; prices collapsed in 1637'], ['Dot-com Bubble', '1995–2001', 'Internet company stocks', 'Overvaluation of unproven tech firms; NASDAQ fell 78% after burst'], ['US Housing Bubble', '2002–2008', 'Residential property', 'Sub-prime mortgages, mortgage-backed securities; global financial crisis 2008']] }, terms: [] },
    { id: 'h-4', type: 'heading', data: { text: 'Systemic Risk and Market Failure', level: 2 }, terms: [] },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Systemic risk</strong>: the risk that a single bubble burst triggers collapse of the wider financial system (counterparty failures, bank runs, credit freeze).' }, { text: '2008: US housing bubble burst → US banks insolvent → global credit crunch → recession in many countries.' }, { text: '<strong>Market failure</strong>: speculative bubbles represent a failure of <strong>information</strong> (irrational expectations), <strong>externalities</strong> (losses spread to innocent parties), and <strong>incentive misalignment</strong> (bankers rewarded for short-term risk-taking).' }] }, terms: [] },
    { id: 'sum-1', type: 'summary', data: { text: 'Irrational speculation causes asset prices to diverge from fundamentals, creating bubbles. When bubbles burst, the losses can trigger systemic financial crises. This is a key source of macroeconomic instability and market failure.' }, terms: [] },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Akerlof's 'Lemons' problem is a great way to show sophisticated understanding. Explain how the presence of defective goods (lemons) drives down prices, eventually forcing high-quality goods out of the market entirely."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Speculation → bubbles → crash → systemic risk. Key examples: tulips, dot-com, 2008 housing.',
    cues: [
      { id: 'cue-1', blockId: 'call-1', prompt: 'Distinguish rational from irrational speculation.', answer: 'Rational speculation is stabilising (buying underpriced assets). Irrational (herd behaviour) is destabilising — buying because others buy, creating bubbles.' },
      { id: 'cue-2', blockId: 'call-2', prompt: 'What is an asset price bubble?', answer: 'When asset prices rise far above their intrinsic value due to speculative buying, eventually collapsing when confidence fails.' },
      { id: 'cue-3', blockId: 'tbl-1', prompt: 'Briefly explain how the 2008 US housing bubble caused a global crisis.', answer: 'Sub-prime mortgages were bundled into securities sold worldwide. When house prices fell and borrowers defaulted, global banks holding these securities became insolvent, triggering a credit crunch.' },
      { id: 'cue-4', blockId: 'h-4', prompt: 'What is systemic risk?', answer: 'The risk that failure in one part of the financial system triggers collapse of the wider system, spreading losses to the whole economy.' },
    ]
  },
  evidence: [],
  mentions: []
};
