export const note_cae_2_4_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master the structure, planning and execution of Part 1 compulsory essays in the CAE Writing paper.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Essay Writing: Structure and Argument', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: '<strong>Part 1 is compulsory</strong> — you must answer it.<br/><strong>Word count</strong>: 220–260 words.<br/><strong>Input</strong>: A short text with 2–3 points or opinions. You must discuss <strong>two</strong> of the points and explain which is more important/relevant.<br/><strong>Register</strong>: Formal or semi-formal. Academic tone throughout.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Recommended Essay Structure', level: 2 } },
    { id: 'list-struct', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Introduction</strong> (2–3 sentences): Paraphrase the topic. State the two points you will discuss. Do NOT give your opinion yet.' }, { text: '<strong>Body paragraph 1</strong>: Discuss the first point. Give reasons and/or examples. Develop the idea fully.' }, { text: '<strong>Body paragraph 2</strong>: Discuss the second point. Compare or contrast with the first.' }, { text: '<strong>Conclusion</strong> (2–3 sentences): State which point is more important and briefly explain why. End with a strong closing statement.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Assessment Criteria', level: 2 } },
    { id: 'table-criteria', type: 'comparisonTable', data: { caption: 'How essays are marked', headers: ['Criterion', 'What the Examiner Looks For'], rows: [['Content', 'All parts of the task addressed. Two points discussed + opinion on which is more important.'], ['Communicative Achievement', 'Appropriate formal/semi-formal register. Reader is fully informed.'], ['Organisation', 'Clear paragraphing. Logical development. Effective linking devices.'], ['Language', 'Wide range of vocabulary and grammar. Few errors. Natural collocations.']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Spend 5 minutes planning before you write. Note your two chosen points, 2–3 supporting ideas for each, and your conclusion. A well-planned essay scores much higher than a longer but rambling one.' } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '• Writing fewer than 220 or more than 260 words — stay within the range.<br/>• Copying phrases from the input text instead of paraphrasing.<br/>• Forgetting to state which point is more important — this is required.<br/>• Using informal language ("gonna", "stuff", "a lot of").' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Part 1 essay: 220–260 words, compulsory. Discuss 2 of the given points → state which is more important. Structure: intro → body 1 → body 2 → conclusion. Formal register. Assessed on content, communicative achievement, organisation, and language.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Part 1 essay: compulsory, 220–260 words. Discuss 2 points from the input, say which is more important. 4 paragraphs: intro, body 1, body 2, conclusion. Formal register. Marked on content, communicative achievement, organisation, language.',
    cues: [
      { id: 'cue-1', blockId: 'table-criteria', prompt: 'What are the four marking criteria for CAE Writing and what does each assess?', answer: 'Content: all task parts addressed. Communicative Achievement: appropriate register, reader informed. Organisation: clear paragraphing, logical flow, linking. Language: range of vocabulary and grammar, accuracy, natural collocations. Each criterion is equally weighted.' },
    ]
  },
  evidence: [], mentions: []
};
