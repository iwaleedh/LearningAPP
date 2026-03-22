export const note_economics_2_12_12 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the strengths and weaknesses of fiscal, monetary, and supply-side policies in achieving macroeconomic objectives.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Evaluating Fiscal Policy', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Strengths</strong>: multiplier amplifies impact; government can target spending to specific sectors; automatic stabilisers work quickly without legislation.' }, { text: '<strong>Weaknesses</strong>: time lags (budget set annually); political constraints; crowding out (government borrowing may raise interest rates → reduces private investment); adds to national debt.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Evaluating Monetary Policy', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Strengths</strong>: flexible and reversible (rates changed 8x/year); independent = credible; less distortionary than tax changes.' }, { text: '<strong>Weaknesses</strong>: zero lower bound problem; transmission lags (~12–18 months); may not work if banks don\'t pass on rate cuts; confidence trap — low rates insufficent if expectations poor.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Evaluating Supply-Side Policy', level: 2 } },
    { id: 'list-3', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Strengths</strong>: addresses root causes of inefficiency; shifts LRAS right → growth without inflation; best for long-run sustainability.' }, { text: '<strong>Weaknesses</strong>: very long time lags (education takes decades); high upfront cost; risk of government failure; cannot stabilise economy in short run.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Best exam answers combine policies: "In the short run, monetary policy stimulus is needed to close the output gap; in the long run, supply-side investment in education raises potential output. Fiscal policy may complement if monetary policy is constrained at the zero lower bound."' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Fiscal: multiplier strength, but debt/crowding out risk. Monetary: flexible but zero lower bound limit. Supply-side: best long-run but slow. Packages often combine all three.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "When evaluating fiscal policy, compare actual outcomes to a counterfactual scenario ('what would have happened without intervention?'). A \u00a350bn stimulus that raises output by \u00a330bn is not 'ineffective'\u2014ask: would output have fallen by \u00a320bn without it? Use multiplier estimates to assess policy effectiveness, and account for crowding out, time lags, and expectations effects."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Fiscal: multiplier strength, debt concern. Monetary: flexible and independent, limited at ZLB. Supply-side: addresses root causes but very slow. Combination approach is optimal.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'What is the crowding out problem with fiscal policy?', answer: 'When government borrows heavily (budget deficit), this increases demand for loanable funds → interest rates rise → private investment is "crowded out" as borrowing becomes more expensive for firms. The net effect on AD may be smaller than the initial ↑G.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Why is conventional monetary policy ineffective at the zero lower bound?', answer: 'When the Bank Rate is at or near zero, further cuts are impossible (rates cannot go significantly negative). This leaves monetary policy unable to stimulate AD through conventional channels — hence unconventional QE was used from 2009 to inject liquidity.' },
    ]
  },
  evidence: [], mentions: []
};
