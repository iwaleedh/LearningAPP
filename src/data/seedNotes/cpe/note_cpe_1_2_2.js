export const note_cpe_1_2_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Part 7: Multiple matching at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 7: Multiple Matching', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'A long text divided into <strong>sections</strong> (or multiple short texts). You answer <strong>10 questions</strong> by matching each statement to the correct section/text. Some sections may match more than one question; some may not be used.' } },
    { id: 'h-2', type: 'heading', data: { text: 'What Is Tested', level: 2 } },
    { id: 'list-tested', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Specific detail</strong>: Which section mentions a particular fact or event?' }, { text: '<strong>Opinion/attitude</strong>: Which writer expresses a view about…?' }, { text: '<strong>Paraphrase recognition</strong>: The question rephrases what the text says.' }, { text: '<strong>Comparison</strong>: Which writer shares an opinion with / disagrees with writer X?' }, { text: '<strong>Implied meaning</strong>: Which section suggests (without stating explicitly) that…?' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read the questions first — underline key content words in each statement.' }, { text: 'Scan the sections quickly, looking for topic matches with your underlined words.' }, { text: 'When you find a potential match, read carefully: does the section actually say what the question claims? Don\'t be fooled by shared vocabulary with different meaning.' }, { text: 'Mark confident answers. For uncertain ones, narrow to 2–3 possible sections and re-read.' }, { text: 'Check: some sections can match multiple questions, and one section may not match any.' }, { text: 'Budget time: this task covers a lot of text. Aim for 15–18 minutes maximum.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Paraphrase Trap', text: 'The question will NEVER use the same words as the text. At C2, paraphrasing is highly sophisticated. Don\'t match based on shared keywords — match based on <strong>shared meaning</strong>.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 7: 10 questions matched to text sections. Tests specific detail, opinion, paraphrase recognition, comparison, and implied meaning. Read questions first, scan for topic matches, verify carefully. Don\'t match on keywords alone — focus on meaning.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 7: 10 matching questions across text sections. Tests detail, opinion, paraphrase, comparison, implied meaning. Read questions first, then scan. Match meaning, not keywords.',
    cues: [
      { id: 'cue-1', blockId: 'list-strat', prompt: 'What is the recommended strategy for CPE Part 7: Multiple matching?', answer: 'Read questions first and underline key words. Scan sections for topic matches. Verify carefully that the section actually says what the question claims. Mark confident answers, narrow uncertain ones. Remember sections can match multiple questions. Budget 15–18 minutes.' },
    ]
  },
  evidence: [], mentions: []
};
