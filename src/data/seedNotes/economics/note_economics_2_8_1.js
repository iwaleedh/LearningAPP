export const note_economics_2_8_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Distinguish between movements along the AD curve (price level changes) and shifts of the AD curve (changes in underlying spending components).' } },
    { id: 'h-1', type: 'heading', data: { text: 'The AD Curve', level: 2 } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: 'The <strong>AD curve slopes downward</strong> — as price level falls, real AD rises.' }, { text: 'Three reasons for the downward slope: <strong>wealth effect</strong> (lower prices → higher real wealth → more spending), <strong>real balance effect</strong> (lower prices → lower interest rates needed), <strong>net export effect</strong> (lower domestic prices → exports cheaper → X rises, M falls).' }] } },
    { id: 'h-2', type: 'heading', data: { text: 'Movement along vs Shift of AD', level: 2 } },
    { id: 'tbl-1', type: 'comparisonTable', data: { caption: 'Movement vs Shift', headers: ['Type', 'Cause', 'Effect'], rows: [['Movement along AD', 'Change in price level', 'Change in real AD — movement up or down the same curve'], ['Shift of AD', 'Change in C, I, G or (X−M)', 'Whole curve moves left (decrease) or right (increase) at every price level']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Causes of AD Shifts', level: 2 } },
    { id: 'list-2', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Rightward shift</strong> (increase in AD): rise in income, lower interest rates, improved consumer/business confidence, expansionary fiscal policy, currency depreciation.' }, { text: '<strong>Leftward shift</strong> (decrease in AD): rise in taxes, higher interest rates, falling consumer confidence, currency appreciation, reduction in government spending.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always be precise: "the price level falls" causes a movement along AD (not a shift). A shift occurs when C, I, G or net exports change independently of the price level.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'A change in price level → movement along AD. A change in any spending component (C, I, G, X-M) → shift of AD.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Price level change → movement along AD. Change in C/I/G/(X-M) → shift of AD left or right.',
    cues: [
      { id: 'cue-1', blockId: 'tbl-1', prompt: 'What causes a movement along the AD curve vs a shift of the AD curve?', answer: 'A change in the price level causes a movement along AD. A change in any component (C, I, G, or net exports) at a given price level causes a shift of the entire AD curve.' },
      { id: 'cue-2', blockId: 'list-2', prompt: 'Give three causes of a rightward shift of AD.', answer: 'Any three from: rise in income, lower interest rates, improved confidence, expansionary fiscal policy (↑G or ↓tax), currency depreciation (↑X, ↓M).' },
    ]
  },
  evidence: [], mentions: []
};
