export const note_cae_2_6_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand how to achieve positive target reader impact in CAE Writing tasks.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Target Reader Impact', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'What Is Target Reader Impact?', text: 'The <strong>Communicative Achievement</strong> criterion asks: "Would the target reader be fully informed and engaged?" You must convince the examiner that a real reader would find your writing clear, relevant, and appropriate. The reader should not be confused, bored, or unsure of your purpose.' } },
    { id: 'h-2', type: 'heading', data: { text: 'How to Maximise Impact', level: 2 } },
    { id: 'list-how', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Address all parts of the task</strong> — missing content reduces impact immediately.' }, { text: '<strong>Match the expected format</strong> — headings in reports/proposals, engaging openings in reviews.' }, { text: '<strong>Write with purpose</strong> — every paragraph should advance your argument or provide useful information.' }, { text: '<strong>Be clear and direct</strong> — avoid vague or ambiguous statements.' }, { text: '<strong>Use appropriate register</strong> — the reader expects a certain formality level.' }, { text: '<strong>End strongly</strong> — the conclusion should leave the reader with a clear takeaway or recommendation.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Impact by Task Type', level: 2 } },
    { id: 'table-impact', type: 'comparisonTable', data: { caption: 'What the reader expects', headers: ['Task', 'Reader Expects'], rows: [['Essay', 'A well-argued position with clear reasoning and a definitive conclusion.'], ['Report', 'Factual information clearly presented with practical recommendations.'], ['Proposal', 'Convincing ideas that would make them want to act on your suggestions.'], ['Review', 'An engaging personal perspective that helps them decide (watch/buy/visit or not).'], ['Letter', 'Appropriate politeness, clear purpose, and actionable requests or information.']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'After writing, re-read your answer imagining you are the target reader. Ask: "Do I know the purpose? Is the register right? Am I convinced/informed/engaged?" If you can answer yes to all three, your Communicative Achievement will be strong.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Target reader impact: fully address the task, match expected format, write with purpose, be clear, use correct register, end strongly. The reader should be informed, engaged, and clear about your purpose. Re-read from the reader\'s perspective before finishing.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Communicative Achievement: would the target reader be informed and engaged? Address all task parts, match format, correct register, clear purpose, strong conclusion. Re-read from reader\'s perspective.',
    cues: [
      { id: 'cue-1', blockId: 'table-impact', prompt: 'What does the target reader expect from each writing task type?', answer: 'Essay: well-argued position with clear reasoning. Report: factual information with practical recommendations. Proposal: convincing ideas that motivate action. Review: engaging personal perspective for decision-making. Letter: appropriate politeness, clear purpose, actionable content.' },
    ]
  },
  evidence: [], mentions: []
};
