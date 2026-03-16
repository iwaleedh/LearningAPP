export const note_economics_3_14_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the law of diminishing returns operating in the short run, and analyse its effect on marginal and average product of labour.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Diminishing Returns (Short Run)', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Law of Diminishing Marginal Returns', text: 'In the short run, as more units of a variable factor (e.g. labour) are added to a fixed factor (e.g. capital/land), the <strong>marginal product</strong> of the variable factor will eventually decline.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Production Relationships', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Output Schedule', headers: ['Workers (L)', 'Total Product (TP)', 'Marginal Product (MP)', 'Average Product (AP)'], rows: [['1', '10', '10', '10'], ['2', '22', '12', '11'], ['3', '30', '8', '10'], ['4', '34', '4', '8.5'], ['5', '35', '1', '7']] } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Initially, adding workers increases MP (specialisation effect) — then MP falls as fixed capital is shared among more workers.' }, { text: '<strong>MP peaks before AP</strong>; when MP > AP, AP rises; when MP < AP, AP falls; MP cuts AP at AP maximum.' }, { text: '<strong>Negative MP</strong>: if too many workers, they get in each other\'s way → TP falls.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Diminishing returns is a <strong>short-run concept</strong> — capital is fixed. In the long run, all factors can be varied; returns to scale replaces diminishing returns as the relevant concept.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Diminishing marginal returns: adding variable labour to fixed capital eventually reduces marginal product. MP intersects AP at AP maximum. Short-run concept only.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Diminishing returns: short-run; adding L to fixed K → MP eventually falls. MP intersects AP at AP maximum. TP rises, peaks, then falls.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'State the law of diminishing marginal returns.', answer: 'In the short run, as successive units of a variable factor (labour) are added to a fixed factor (capital), the marginal product of labour will eventually fall — because there is less fixed capital per worker.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is the relationship between marginal product and average product?', answer: 'When MP > AP, AP is rising. When MP < AP, AP is falling. MP = AP at the maximum point of AP. This is a mathematical rule analogous to how a marginal value affects an average.' },
    ]
  },
  evidence: [], mentions: []
};
