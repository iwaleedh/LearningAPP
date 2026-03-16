export const note_economics_2_10_7 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Analyse how the multiplier effect transmits an initial injection in AD into a larger final change in national income, and evaluate the implications for fiscal policy.' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Multiplier Process', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'The Multiplier', text: 'An initial injection (e.g. ↑G) creates a chain of spending rounds: recipients spend a fraction (MPC) and save/pay tax/buy imports with the rest.<br/>Final change in Y > initial injection → <strong>multiplied effect</strong>.<br/>Multiplier (k) = 1 / (1 − MPC) = 1 / MPW<br/>where MPW = MPS + MPT + MPM (marginal propensity to withdraw).' } },
    { id: 'h-2', type: 'heading', data: { text: 'How the Multiplier Affects AD and Output', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'Initial increase in G (or I, X) shifts AD right by the initial injection.' }, { text: 'Income earned by workers/firms → they spend a fraction (MPC) on domestic goods → creates more income.' }, { text: 'This process repeats: total increase in real GDP = initial injection × multiplier.' }, { text: 'Multiplier effect is <strong>larger</strong> when MPC is high (low MPS, low tax rate, low import propensity).' }, { text: 'Multiplier effect is <strong>smaller</strong> (less AD stimulus) when:' }] } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: 'Marginal propensity to save (MPS) is high — more income leaks out via saving.' }, { text: 'Tax rate is high — more income leaks to the government.' }, { text: 'Marginal propensity to import (MPM) is high — spending leaks abroad.' }] } },
    { id: 'callout-we1', type: 'callout', data: { style: 'worked', title: 'Worked Example', text: 'MPC = 0.8, MPT = 0.1, MPM = 0.1 → MPW = 0.2 → k = 1/0.2 = 5<br/>An initial ↑G of £100m → final ↑GDP = £500m<br/>(Each round: spend 80% → 0.8 × round income flows to next round)' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Policy Implication', text: 'A high multiplier means government spending is a powerful tool in recession — each £1 of fiscal stimulus generates more than £1 of GDP growth. However, leakages (imports, savings, taxes) reduce the real-world multiplier. In open economies, the multiplier is typically closer to 1–1.5.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Multiplier k = 1/MPW. Initial injection is multiplied through spending rounds. Size depends on leakages (MPS, MPT, MPM). Higher MPC → larger multiplier → greater AD/output effect.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Multiplier k = 1/MPW = 1/(MPS+MPT+MPM). Initial injection × k = final ΔY. Larger MPC → larger multiplier effect on AD.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'State the formula for the multiplier.', answer: 'k = 1 / MPW, where MPW = MPS + MPT + MPM. Alternatively k = 1 / (1 − MPC) in a simple closed economy with no government.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'Why is the multiplier effect on AD and output important for fiscal policy?', answer: 'The multiplier means that government spending increases GDP by more than the initial injection — each £1 of spending creates a chain of income and spending. In a recession, this amplifies the demand-stimulus effect of fiscal expansion.' },
      { id: 'cue-3', blockId: 'callout-we1', prompt: 'If MPC = 0.7, MPT = 0.1, MPM = 0.1, calculate the multiplier.', answer: 'MPW = MPS + MPT + MPM = 0.2 + 0.1 + 0.1 = 0.4. k = 1/0.4 = 2.5. A £200m injection → ΔY = £500m.' },
    ]
  },
  evidence: [], mentions: []
};
