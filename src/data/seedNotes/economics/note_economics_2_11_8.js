export const note_economics_2_11_8 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Define positive and negative output gaps, explain their causes and economic consequences, and represent them on AD-AS diagrams.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Positive and Negative Output Gaps', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Output Gap Comparison', headers: ['Feature', 'Negative Output Gap', 'Positive Output Gap'], rows: [['Definition', 'Actual GDP < Potential GDP', 'Actual GDP > Potential GDP'], ['State of economy', 'Recession / below-trend', 'Boom / overheating'], ['Unemployment', 'Above natural rate (cyclical unemployment)', 'Below natural rate'], ['Inflationary pressure', 'Low (deflationary pressure)', 'High (demand-pull inflation)'], ['AD-AS diagram', 'AD intersects SRAS below LRAS', 'AD intersects SRAS above LRAS']] } },
    { id: 'h-2', type: 'heading', data: { text: 'Consequences', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Negative output gap</strong>: factories idle, workers unemployed, profits depressed, tax revenues fall, welfare spending rises → cyclical budget deficit.' }, { text: '<strong>Positive output gap</strong>: firms operating above normal capacity, labour shortages, wage pressure, inflationary spiral if unchecked; current account may worsen (↑imports).' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Policy Response', text: 'Negative output gap → expansionary fiscal/monetary policy to boost AD.<br/>Positive output gap → contractionary policy (raise taxes, ↑interest rates) to cool inflation.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Negative output gap: actual < potential → deflation risk, unemployment. Positive gap: actual > potential → inflationary pressure. Policy targets closing the gap.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'tip',
        title: "Exam Tip",
        text: "Positive output gaps (Y > Y*) create demand-pull inflation and labour shortages. Negative output gaps (Y < Y*) cause demand-deficient unemployment and spare capacity. Use these concepts to explain why central banks tighten policy during booms and loosen during recessions. Link output gaps to the Phillips Curve relationship."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Negative gap: actual GDP < potential → cyclical unemployment, low inflation. Positive gap: actual > potential → demand-pull inflation. Expansionary policy closes negative gap.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'What does a positive output gap indicate and what are its consequences?', answer: 'A positive output gap means actual GDP exceeds potential GDP — the economy is overheating. Consequences: inflationary pressure (demand-pull inflation), labour shortages, above-normal capacity utilisation, and potentially a worsening current account.' },
      { id: 'cue-2', blockId: 'list-1', prompt: 'What is cyclical unemployment?', answer: 'Cyclical (demand-deficient) unemployment arises when actual GDP falls below potential — there is insufficient aggregate demand to employ all willing workers. It exists when there is a negative output gap and disappears as the economy recovers.' },
    ]
  },
  evidence: [], mentions: []
};
