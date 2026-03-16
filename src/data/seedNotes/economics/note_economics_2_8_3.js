export const note_economics_2_8_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the savings ratio, its relationship to consumption, and the factors that cause households to save more or less of their income.' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Savings Ratio', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Definition', text: '<strong>Savings ratio</strong> = (Household saving ÷ Household disposable income) × 100<br/>It measures the proportion of disposable income that households save rather than spend.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Relationship between Saving and Consumption', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Yd = C + S → disposable income is either consumed or saved; <strong>inverse relationship</strong> between savings ratio and consumption.' }, { text: 'A rise in the savings ratio → fall in consumption → fall in AD (ceteris paribus).' }, { text: '<strong>Paradox of thrift</strong>: if all households save more simultaneously, aggregate income falls → each household ends up no better off, and AD falls.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Factors Affecting the Savings Ratio', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Interest rates</strong>: higher rates increase the return to saving → savings ratio rises.' }, { text: '<strong>Confidence / uncertainty</strong>: higher uncertainty (recessions, job insecurity) → precautionary saving rises → savings ratio rises.' }, { text: '<strong>Income level</strong>: higher-income households save a larger proportion — savings ratio tends to rise with income.' }, { text: '<strong>Access to credit</strong>: easy credit reduces need to save in advance for purchases → lowers savings ratio.' }, { text: '<strong>Inflation</strong>: high inflation erodes real value of savings → discourages saving.' }, { text: '<strong>Demographics</strong>: ageing populations may draw down savings (dissaving); younger workers save more for retirement.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'UK savings ratio fell sharply before the 2008 financial crisis (easy credit → households borrowed and consumed). It spiked after (uncertainty → precautionary saving). This context demonstrates the counter-cyclical nature of the savings ratio.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Savings ratio = saving / disposable income × 100. Higher savings → lower consumption. Factors: interest rates, confidence, income, credit access, inflation, demographics.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Savings ratio = savings/Yd × 100. Rise in savings → fall in C → fall in AD. Key factors: interest rates, uncertainty, income, credit, inflation.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'Define the savings ratio.', answer: 'Savings ratio = (Household saving ÷ Household disposable income) × 100. It shows the proportion of income saved rather than spent.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Explain the paradox of thrift.', answer: 'If all households try to save more simultaneously, aggregate demand falls, leading to lower national income. Each household ends up no wealthier because their income has fallen — the collectively rational attempt to save more backfires.' },
    ]
  },
  evidence: [], mentions: []
};
