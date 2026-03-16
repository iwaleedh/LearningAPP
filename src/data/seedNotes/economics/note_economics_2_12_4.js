export const note_economics_2_12_4 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the short-run Phillips curve (SRPC), its relationship between unemployment and inflation, and its policy implications.' } },
    { id: 'h-1', type: 'heading', data: { text: 'The Short-Run Phillips Curve', level: 2 } },
    { id: 'callout-def', type: 'callout', data: { style: 'key', title: 'Phillips Curve', text: 'The <strong>short-run Phillips curve (SRPC)</strong> shows an inverse relationship between unemployment and inflation:<br/>↓ Unemployment → ↑ Inflation (wage pressure in tight labour market)<br/>↑ Unemployment → ↓ Inflation (workers accept lower wages; less demand-pull)<br/>Named after A.W. Phillips who identified the relationship in UK data (1861–1957).' } },
    { id: 'h-2', type: 'heading', data: { text: 'Mechanism', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'As unemployment falls, <strong>labour markets tighten</strong> → firms must offer higher wages → wage-cost-push inflation.' }, { text: 'Low unemployment → high demand → firms raise prices → <strong>demand-pull inflation</strong>.' }, { text: 'The SRPC represents a trade-off — policymakers can "buy" lower unemployment at the cost of higher inflation.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Shifts and Long-Run Expectations', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: 'If inflation expectations rise, workers demand higher wages → SRPC shifts upward (higher inflation at each unemployment level).' }, { text: '<strong>NAIRU</strong> (Non-accelerating inflation rate of unemployment): the unemployment rate consistent with stable inflation — the long-run Phillips curve is vertical at NAIRU.' }, { text: '<strong>Stagflation</strong> (1970s): simultaneous high inflation AND high unemployment shifted the SRPC right — challenged the simple trade-off view.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Distinguish short-run (downward-sloping) from long-run (vertical at NAIRU) Phillips curve. Stagflation is evidence that the simple SR trade-off breaks down when expectations shift.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'SRPC: inverse relationship between unemployment and inflation. Rising expectations shift SRPC upward. LRPC is vertical at NAIRU. Stagflation breaks the simple trade-off.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'SRPC: ↓unemployment → ↑inflation (and vice versa). LRPC vertical at NAIRU. Rising inflation expectations shift SRPC up. Stagflation challenges SRPC analysis.',
    cues: [
      { id: 'cue-1', blockId: 'callout-def', prompt: 'What does the short-run Phillips curve show?', answer: 'The SRPC shows an inverse (negative) trade-off between unemployment and inflation in the short run: lower unemployment is associated with higher inflation due to wage pressure and excess demand in labour markets.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Why is the long-run Phillips curve vertical at the NAIRU?', answer: 'In the long run, any attempt to hold unemployment below the NAIRU leads to accelerating inflation (as workers demand higher real wages). The economy returns to NAIRU — so there is no long-run trade-off between unemployment and inflation, only a short-run one.' },
    ]
  },
  evidence: [], mentions: []
};
