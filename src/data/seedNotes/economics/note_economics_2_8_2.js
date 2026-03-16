export const note_economics_2_8_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse the key determinants of household consumption expenditure and explain how each factor affects the level of spending.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Determinants of Consumption (C)', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Disposable income</strong>: most important determinant; as income rises, consumption rises (positive relationship → captured by the MPC).' }, { text: '<strong>Interest rates</strong>: higher rates increase the reward for saving and the cost of borrowing → reduce consumption; lower rates do the opposite.' }, { text: '<strong>Consumer confidence</strong>: households optimistic about the future spend more; pessimism increases precautionary saving.' }, { text: '<strong>Wealth (asset prices)</strong>: rising house prices and share values increase household wealth → wealth effect raises consumption.' }, { text: '<strong>Credit availability</strong>: easier access to mortgages and consumer credit expands borrowing and spending power.' }, { text: '<strong>Inflation expectations</strong>: if households expect prices to rise, they may bring forward purchases.' }, { text: '<strong>Income distribution</strong>: lower-income households have higher MPC — redistribution from rich to poor raises aggregate C.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'The Consumption Function', level: 2 } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'Consumption Function', text: 'C = a + bYd<br/>where: a = autonomous consumption (independent of income), b = MPC (fraction of extra income spent), Yd = disposable income.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The <strong>Keynesian consumption function</strong> shows that not all income is consumed — some is saved. A rise in income increases consumption, but by less than the full income rise (MPC < 1).' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Consumption is primarily determined by disposable income (MPC). Other key factors: interest rates, wealth, confidence, credit availability, and inflation expectations.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Consumption determinants: disposable income (key), interest rates, wealth, confidence, credit, inflation expectations, income distribution.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'List four determinants of consumption.', answer: 'Disposable income (MPC), interest rates (cost of borrowing/reward for saving), consumer confidence (spending/saving decisions), wealth (house prices/share values), credit availability.' },
      { id: 'cue-2', blockId: 'callout-key', prompt: 'Write and explain the Keynesian consumption function.', answer: 'C = a + bYd. a = autonomous consumption (does not depend on income), b = MPC (fraction of each extra pound of income spent), Yd = disposable income. A rise in Yd raises C by MPC × ΔYd.' },
    ]
  },
  evidence: [], mentions: []
};
