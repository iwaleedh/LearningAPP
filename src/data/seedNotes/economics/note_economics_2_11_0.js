export const note_economics_2_11_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between actual and potential economic growth, and explain the difference between short-run and long-run growth.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Actual vs Potential Growth', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Actual vs Potential Growth', headers: ['Type', 'Definition', 'Represented by'], rows: [['Actual growth', 'The percentage increase in real GDP in a given time period', 'Rightward shift of AD along SRAS/LRAS'], ['Potential growth', 'The increase in the productive capacity of the economy (the maximum sustainable output)', 'Rightward shift of LRAS / PPF outward movement']] } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Concepts', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Actual growth</strong>: occurs when AD rises and idle resources are brought into use. Does not necessarily increase long-run capacity.' }, { text: '<strong>Potential growth</strong>: requires growth of the factors of production (more labour, capital, improved technology or efficiency) — shifts LRAS rightward.' }, { text: '<strong>Output gap</strong>: difference between actual and potential output. Positive output gap = above trend (inflationary pressure); negative output gap = below trend (spare capacity).' }, { text: 'A country on its PPF is at full capacity. Actual growth inside PPF uses idle resources. Potential growth pushes the PPF outward.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'In diagrams: actual growth = rightward shift of AD (into spare capacity). Potential growth = rightward shift of LRAS. Both shift AD right when on LRAS.<br/>Long-run sustainable growth = potential growth (no inflationary pressure).' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Actual growth = ↑real GDP using existing capacity (⇒ AD shift). Potential growth = ↑productive capacity (⇒ LRAS shift). Output gap = difference between actual and potential GDP.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Actual growth = ↑real GDP (AD shift). Potential growth = ↑productive capacity (LRAS shift). Output gap = actual − potential GDP.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'Distinguish between actual and potential economic growth.', answer: 'Actual growth is the increase in real GDP over a period (using existing capacity, AD shifts rightward). Potential growth is the increase in the economy\'s productive capacity (LRAS shifts right), meaning the economy can sustainably produce more.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is an output gap?', answer: 'The output gap is the difference between actual output and potential output. A negative output gap (actual < potential) means spare capacity and unemployment. A positive output gap (actual > potential) generates inflationary pressure.' },
    ]
  },
  evidence: [], mentions: []
};
