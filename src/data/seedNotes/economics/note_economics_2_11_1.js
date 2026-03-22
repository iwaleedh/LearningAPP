export const note_economics_2_11_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain how increases in Aggregate Demand (AD) can generate economic growth in the short run, and analyse the conditions under which this is sustainable.' } },
    { id: 'h-1', type: 'heading', data: { text: 'AD-Driven Growth', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'When an economy has a <strong>negative output gap</strong> (spare capacity), a rise in AD increases real GDP without significant inflation.' }, { text: 'Sources of AD growth: ↑C (rising incomes), ↑I (business investment), ↑G (fiscal stimulus), ↑(X−M) (exports).' }, { text: 'In the <strong>Keynesian range of SRAS</strong>, AD can expand output without price rises (horizontal portion of SRAS).' }, { text: 'As spare capacity is used up, prices start to rise — growth becomes inflationary.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Components Driving AD Growth', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Consumer spending (C)</strong>: rising household income and confidence boosts spending → increases real GDP.' }, { text: '<strong>Investment (I)</strong>: business investment creates jobs, raises incomes, and expands both AD and productive capacity.' }, { text: '<strong>Government spending (G)</strong>: fiscal expansion in recession; multiplier effect amplifies GDP impact.' }, { text: '<strong>Net exports (X−M)</strong>: export-led growth especially important for small open economies.' }] } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Limitation', text: 'AD-driven growth is a <strong>short-run concept</strong> — it closes a negative output gap but does not increase the economy\'s long-run productive capacity. Sustained long-run growth requires supply-side improvements (LRAS shift).' } },
    { id: 'sum-1', type: 'summary', data: { text: 'AD-driven growth uses spare capacity to raise real GDP. Effective when there is a negative output gap. Risk of inflation when capacity is reached. Does not increase long-run potential without supply-side improvements.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Confusing AD-driven growth with inflation. AD-driven growth occurs when AD shifts right along a stable AS curve, raising both output and price level. If you label this as purely 'inflation,' you miss the real output expansion. Distinguish between the growth phase and subsequent demand-pull inflation when output reaches capacity."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'AD growth closes negative output gap → ↑real GDP. Non-inflationary only when spare capacity exists. Long-run potential needs LRAS shift.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Why is AD-driven growth non-inflationary when there is spare capacity?', answer: 'When there is a negative output gap (actual GDP < potential), spare labour, capital, and land can be brought into use to increase output without bidding up wages or prices — the economy is in the flat/Keynesian portion of the SRAS curve.' },
      { id: 'cue-2', blockId: 'callout-warning', prompt: 'Why can\'t AD-driven growth be sustained indefinitely?', answer: 'Once spare capacity is used up and the economy approaches its productive frontier, further rises in AD lead to inflation rather than real output growth. Long-run growth requires supply-side expansion (LRAS shift).' },
    ]
  },
  evidence: [], mentions: []
};
