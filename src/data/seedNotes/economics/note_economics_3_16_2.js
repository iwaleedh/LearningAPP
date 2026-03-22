export const note_economics_3_16_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the determinants of the labour supply curve and analyse why individuals and groups respond differently to wage changes.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Labour Supply Determinants', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Individual Labour Supply', text: 'Labour supply is the number of workers (or hours) willing and able to work at a given wage rate.<br/>An individual faces a trade-off between <strong>work (income)</strong> and <strong>leisure</strong>.<br/><strong>Backward-bending labour supply curve</strong>: at low wages, the substitution effect dominates (work more as wage rises); above a threshold, the income effect dominates (take more leisure) → labour supply bends backward.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Shifts in Labour Supply', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Immigration</strong> — expansion of the labour force shifts labour supply right, lowering wages in competitive markets.' }, { text: '<strong>Demographic change</strong> — ageing population → labour force shrinks → supply shifts left; younger population or higher birth rate → shifts right.' }, { text: '<strong>Female participation rate</strong> — rising participation (especially since 1960s) has shifted labour supply right.' }, { text: '<strong>Non-wage factors</strong> — improved working conditions, shorter hours, more job satisfaction → more willing to supply at a given wage (supply shifts right).' }, { text: '<strong>Education and training</strong> — longer study periods reduce labour supply temporarily; improving human capital raises productivity but may reduce raw hours supply.' }, { text: '<strong>Benefits and tax</strong> — high benefits reduce incentive to work (withdrawal rate creates unemployment trap); lower income tax increases net real wage, increasing supply.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The <strong>backward-bending supply curve</strong> is a classic exam topic: above a certain wage, workers prefer more leisure — the income effect outweighs the substitution effect. Link to real examples: high-paid professionals working fewer hours.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Labour supply: number of workers willing to work at each wage. Upward-sloping initially (substitution effect); backward-bending at high wages (income effect dominates). Shifts: immigration, participation, demographics, taxes/benefits.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "For most workers, the substitution effect (higher wage \u2192 work more) dominates the income effect (higher wage \u2192 work less), making labour supply positively sloped. However, recognise that backwards-bending curves can occur at very high wages."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Labour supply shifts: immigration (right), ageing population (left), higher participation (right), lower income tax (right). Individual supply: substitution vs income effects → backward-bending above high wages.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'Explain why an individual\'s labour supply curve may be backward-bending.', answer: 'At low wages, a wage rise makes leisure more expensive relative to work — the substitution effect dominates, so the worker supplies more labour. Above a high wage threshold, the worker is already earning enough — the income effect dominates, and extra income is used to buy more leisure instead of working more hours, bending the curve backward.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'State three factors that increase the supply of labour.', answer: 'Net immigration (more workers enter the market), rising female participation rates, reduced income tax (higher net wage increases work incentive), relaxed retirement age rules, reduced welfare benefits (reducing unemployment trap), or improved working conditions.' },
    ]
  },
  evidence: [], mentions: []
};
