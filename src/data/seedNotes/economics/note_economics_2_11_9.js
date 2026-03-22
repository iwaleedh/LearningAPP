export const note_economics_2_11_9 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the difficulties in measuring output gaps accurately, and explain the policy implications of mismeasurement.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Why Output Gaps Are Hard to Measure', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Potential GDP is unobservable</strong>: it is a theoretical concept — economists must estimate it using models, not measure it directly.' }, { text: '<strong>Data revisions</strong>: GDP data is revised multiple times after initial release — policymakers may act on early (inaccurate) estimates.' }, { text: '<strong>Structural changes</strong>: recessions can permanently lower productive capacity (hysteresis) — the output gap may be smaller than initially estimated.' }, { text: '<strong>Natural rate of unemployment uncertainty</strong>: the NAIRU (non-accelerating inflation rate of unemployment) is unobservable — affects estimates of whether the economy is at full capacity.' }, { text: '<strong>Inflation ambiguity</strong>: supply-side shocks (e.g. oil price rise) can cause high inflation with a negative output gap — misleading indicator of spare capacity.' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Policy Implications of Mismeasurement', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: 'If policymakers overestimate the output gap (think more spare capacity exists than does), expansionary policy creates inflation.' }, { text: 'If they underestimate the gap, they apply contractionary policy prematurely — suppressing growth that could have occurred without inflation.' }, { text: 'The OBR (Office for Budget Responsibility) in the UK regularly revises its output gap estimates — used for fiscal forecasts.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'This is an evaluation point: even if the concept of output gap is theoretically sound, the practical limitations of measurement reduce its usefulness as a precise policy guide.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Output gaps are hard to measure: potential GDP is unobservable, data is revised, structural changes affect estimates. Mismeasurement risks inappropriate policy responses.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Treating potential output (Y*) as a known, fixed value. In reality, potential output is estimated using econometric models and is highly uncertain. Trends can shift due to demographic changes, technology, or policy. Examiners test awareness that output gap calculations are imprecise, which adds uncertainty to policy decisions\u2014acknowledge this qualification in your answers."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Output gap is hard to measure: potential GDP unobservable, data revised, hysteresis, NAIRU uncertainty. Mismeasurement → policy error.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Why is potential GDP difficult to measure?', answer: 'Potential GDP is a theoretical concept — it represents what the economy could produce at full employment with given technology. It cannot be directly observed, only estimated using models. Data revisions and structural shifts (hysteresis) further complicate estimation.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'What are the risks of overestimating the negative output gap?', answer: 'If policymakers believe there is more spare capacity than actually exists, they may apply excessive stimulus (expansionary fiscal or monetary policy) — leading to demand-pull inflation rather than real output growth.' },
    ]
  },
  evidence: [], mentions: []
};
