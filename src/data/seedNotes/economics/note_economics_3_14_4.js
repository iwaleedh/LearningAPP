export const note_economics_3_14_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the shape of the long-run average cost (LRAC) curve and its relationship with short-run average cost (SRAC) curves.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Long-Run Cost Curves', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Long-Run Concept', text: 'In the <strong>long run</strong>, all factors of production are variable — there are no fixed costs.<br/><strong>LRAC</strong> is the envelope of all possible short-run average cost (SRAC) curves, each representing a different plant size.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Returns to Scale', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Returns to Scale — Summary', headers: ['Type', 'Condition', 'LRAC Effect', 'Cause'], rows: [['Increasing returns to scale', 'Output rises proportionately MORE than inputs', 'LRAC falls', 'Economies of scale'], ['Constant returns to scale', 'Output rises in same proportion as inputs', 'LRAC flat', 'No economies or diseconomies'], ['Decreasing returns to scale', 'Output rises proportionately LESS than inputs', 'LRAC rises', 'Diseconomies of scale']] } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The LRAC curve is U-shaped: <strong>falls (IRS) → flat at MES → rises (DRS)</strong>.' }, { text: 'Each point on the LRAC represents the <strong>minimum SRAC</strong> for that level of output (optimal plant size).' }, { text: 'The bottom of the LRAC is the <strong>minimum efficient scale (MES)</strong> — the lowest output at which LRAC is minimised.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Draw LRAC as an envelope touching the minimum of each SRAC curve. Explain: <strong>LRAC falls = economies of scale; LRAC rises = diseconomies of scale</strong>. Running through three phases is sufficient for full marks.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'LRAC is the envelope of all SRAC curves. It falls in IRS, flattens at MES, and rises in DRS — giving a U-shape driven by economies and diseconomies of scale.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "The LRAC is an envelope of SRACs, NOT a smoothed average. Each point on the LRAC represents the lowest cost plant size for that output level. Examiners test whether you understand why LRAC falls (economies) then rises (diseconomies) despite constant returns eventually."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'LRAC envelope of SRACs. Three phases: falling (IRS), flat (CRS), rising (DRS). Bottom of LRAC = MES. In long run, all costs are variable.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What is the LRAC curve and why is it called an "envelope"?', answer: 'The LRAC is the long-run average cost curve. It is called an envelope because it forms the outer boundary of all possible short-run average cost curves, each representing a different factory/plant size — the LRAC connects the minimum achievable average cost at each output level.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'What happens to LRAC during increasing, constant and decreasing returns to scale?', answer: 'IRS: LRAC falls (economies of scale). CRS: LRAC flat (no net scale effects). DRS: LRAC rises (diseconomies of scale). The LRAC is U-shaped overall.' },
    ]
  },
  evidence: [], mentions: []
};
