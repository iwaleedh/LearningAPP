export const note_economics_2_8_5 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Identify and explain the main determinants of investment spending by firms, using the marginal efficiency of capital and other frameworks.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Determinants of Investment (I)', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Interest rates</strong>: investment projects are compared to the cost of borrowing; higher rates increase cost of finance → fewer projects viable → investment falls.' }, { text: '<strong>Business confidence / expectations</strong>: "animal spirits" (Keynes) — if firms expect future demand to be strong, they invest; pessimism reduces investment.' }, { text: '<strong>Corporate profits (retained earnings)</strong>: internal finance is cheapest; higher profits give firms more funds to invest without borrowing.' }, { text: '<strong>Accelerator effect</strong>: investment is driven by the change in national income (ΔY); GDP growing rapidly → increased investment to expand capacity.' }, { text: '<strong>Technological change</strong>: new technology reduces cost of capital goods and creates new investment opportunities.' }, { text: '<strong>Government policy</strong>: corporation tax rates, investment allowances, subsidies (see next topic).' }, { text: '<strong>Political / economic stability</strong>: uncertainty (e.g. Brexit) reduces investment — firms delay decisions.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Marginal Efficiency of Capital (MEC)', level: 2 } },
    { id: 'callout-key', type: 'callout', data: { style: 'key', title: 'MEC Concept', text: 'The <strong>MEC</strong> is the expected rate of return on an additional unit of capital (investment project).<br/>Investment occurs if MEC > rate of interest (cost of borrowing).<br/>Lower interest rates → more investment projects become profitable.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Investment is determined by interest rates, confidence, profits, accelerator effect, technology, policy, and stability. Investment occurs when MEC > rate of interest.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Examiner Tip",
        text: "Interest rates affect investment because they represent the cost of borrowing and the opportunity cost of using retained profits. Also mention 'animal spirits' (business confidence) as a key determinant."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Investment determinants: interest rates, confidence, retained profits, accelerator effect, technology, policy, stability. MEC > interest rate → investment profitable.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Explain the accelerator effect on investment.', answer: 'Investment is driven by the rate of change of national income. When GDP is growing rapidly, firms need to expand capacity to meet rising demand → investment increases proportionally more than GDP growth.' },
      { id: 'cue-2', blockId: 'callout-key', prompt: 'What is the Marginal Efficiency of Capital (MEC)?', answer: 'The MEC is the expected rate of return on an additional unit of investment. Firms invest when MEC exceeds the rate of interest (cost of borrowing). A fall in interest rates makes more projects viable, increasing investment.' },
    ]
  },
  evidence: [], mentions: []
};
