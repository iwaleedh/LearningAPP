export const note_cpe_1_2_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Part 5: Multiple choice (long text) at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 5: Multiple Choice (Long Text)', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'One long text (literary, journalistic, or academic) with <strong>6 four-option multiple-choice questions</strong>. Questions follow the order of the text. At C2, texts contain complex arguments, irony, literary devices, and subtlety of tone.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Question Types', level: 2 } },
    { id: 'list-types', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Detail</strong>: What does the writer say about…?' }, { text: '<strong>Opinion/attitude</strong>: What does the writer imply/suggest about…?' }, { text: '<strong>Purpose</strong>: Why does the writer mention…?' }, { text: '<strong>Inference</strong>: What can be inferred from the third paragraph?' }, { text: '<strong>Tone/style</strong>: Which word best describes the writer\'s tone?' }, { text: '<strong>Reference</strong>: What does "this" refer to in line X?' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read the text once for global understanding — don\'t rush to the questions.' }, { text: 'Read the question stem carefully: is it asking for stated fact, inference, or attitude?' }, { text: 'Locate the relevant section of text (questions follow text order).' }, { text: 'Eliminate wrong options: at C2, distractors often contain true information but don\'t answer the specific question.' }, { text: 'Beware of paraphrase: the correct answer rarely uses the exact words from the text.' }, { text: 'For tone/attitude questions, look for evaluative language, hedging, irony, or understatement.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'C2 Pitfall', text: 'At C2, a distractor may be factually true based on the text but not answer the <strong>specific question asked</strong>. Always match your answer to the exact question, not just to something true in the passage.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 5: 6 MCQs on a long text. Tests detail, opinion, inference, purpose, tone, and reference. Questions follow text order. Eliminate distractors carefully — they may be true but irrelevant. Watch for paraphrase and look for evaluative language in tone questions.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 5: 6 MCQs on one long text. Tests detail, inference, opinion, purpose, tone. Distractors may be true but not answer the specific question.',
    cues: [
      { id: 'cue-1', blockId: 'list-types', prompt: 'What six question types appear in CPE Part 5?', answer: 'Detail, opinion/attitude, purpose, inference, tone/style, and reference questions.' },
    ]
  },
  evidence: [], mentions: []
};
