export const note_economics_3_14_9 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Identify the short-run and long-run shutdown conditions, distinguish the break-even point, and explain why a loss-making firm may continue production.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Shutdown and Break-even Conditions', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Key Output Decision Rules', headers: ['Decision', 'Condition', 'Reasoning'], rows: [['Profitable operation', 'P > ATC (AR > ATC)', 'Supernormal profit — produce'], ['Break-even', 'P = ATC (AR = ATC)', 'Normal profit — produce'], ['Loss-making, continue SR', 'AVC < P < ATC', 'TR covers variable costs and part of fixed costs — better than shutting (still covering some FC)'], ['Short-run shutdown point', 'P = AVC (AR = AVC)', 'TR only just covers variable costs; indifferent'], ['Short-run shutdown', 'P < AVC (AR < AVC)', 'TR cannot even cover variable costs — shut down; losses equal TFC'], ['Long-run exit', 'P < ATC in long run', 'Cannot cover all costs including opportunity costs → exit industry']] } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Why Produce at a Loss in Short Run?', text: 'In the short run, <strong>fixed costs are sunk</strong> — they must be paid whether the firm produces or not.<br/>A firm should continue producing if <strong>TR ≥ TVC</strong>, because stopping means it loses its entire TFC.<br/>By producing, it recovers all variable costs and contributes some revenue toward fixed costs → <strong>smaller loss.</strong>' } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Example', text: 'TFC = £100. At Q=50: TVC = £80, TR = £90.<br/>Loss if producing: TC = £180, TR = £90 → loss of £90.<br/>Loss if shutting: lose entire TFC = £100.<br/><strong>Produce</strong> — smaller loss of £90 vs £100 if shut.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: '<strong>SR shutdown: P < AVC. LR shutdown: P < ATC.</strong> The distinction is critical — in the long run, there are no fixed costs to justify staying open when making a loss.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Produce while P ≥ AVC (TR covers variable costs). SR shutdown: P < AVC. LR shutdown: P < ATC. Break-even: P = ATC. A firm making an accounting loss may still produce in the short run to minimise losses.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "The shutdown point is where Price = AVC (not AC), because fixed costs are sunk. Break-even is where P = AC (all costs covered). Candidates score highly by explaining *why* a loss-making firm continues operating short-term (covers variable costs) but exits long-term."
      }
    },
    {
      id: 'callout-examiner-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "The shutdown condition is a classic exam trick. In the short run, a firm will continue producing as long as AR is greater than or equal to AVC. They only shut down immediately if they cannot cover their variable costs."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'SR shutdown: P < AVC (cannot cover variable costs). LR exit: P < ATC. A firm producing at a loss (AVC < P < ATC) is rational in the short run — TR exceeds TVC, reducing total losses.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'Why might a loss-making firm continue producing in the short run?', answer: 'Because fixed costs are sunk and must be paid regardless. If TR ≥ TVC, producing still generates revenue that covers variable costs and contributes to fixed costs — the firm suffers a smaller loss than if it shut down and lost its entire fixed costs.' },
      { id: 'cue-2', blockId: 'tbl-1', prompt: 'State the short-run and long-run shutdown conditions.', answer: 'Short-run shutdown: P < AVC (TR cannot even cover variable costs — better to stop). Long-run exit: P < ATC in the long run (cannot cover total costs including opportunity costs). In the long run, all costs are variable, so losses mean exit.' },
    ]
  },
  evidence: [], mentions: []
};
