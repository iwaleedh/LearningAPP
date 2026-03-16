export const note_cae_3_7_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the format, strategy and key skills for CAE Listening Part 2: Sentence completion.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 2: Sentence Completion', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: '<strong>Audio</strong>: One long monologue or lecture (~3–4 minutes). Single speaker (e.g. a talk, presentation, radio programme).<br/><strong>Questions</strong>: 8 sentences with gaps to complete using a word or short phrase from the recording.<br/><strong>Marks</strong>: 8 (1 mark each).<br/><strong>Played</strong>: Twice.<br/><strong>Focus</strong>: Specific information, stated opinion. You must write the <strong>exact words</strong> you hear.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read all 8 sentences before the audio starts. Predict what type of word is needed (noun, number, adjective, etc.).' }, { text: 'Sentences follow the order of the recording.' }, { text: 'Write the exact word(s) from the recording — do NOT paraphrase.' }, { text: 'Answers are usually 1–3 words. If your answer is longer, it is probably wrong.' }, { text: 'Check spelling — you must spell the answer correctly to get the mark.' }, { text: 'On the second listening, verify and complete any gaps you missed.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '• Writing a synonym instead of the exact word heard.<br/>• Writing too many words — keep to 1–3 words maximum.<br/>• Spelling errors — "enviroment" or "goverment" will not be accepted.<br/>• Missing the answer because you were still writing the previous one — write concisely.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The sentences paraphrase what the speaker says, but the <strong>gap word</strong> is taken directly from the recording. Listen for the paraphrased context first, then catch the specific word.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Part 2: 8 sentence completions from a monologue (8 marks). Write exact words heard — 1–3 words, correct spelling. Sentences follow audio order. Read and predict before listening. Don\'t paraphrase.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Part 2: long monologue, 8 sentence completions × 1 mark. Write exact words heard (1–3 words). Correct spelling required. Follows audio order. Read sentences first, predict word type.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What is the most important rule for answering Part 2 questions?', answer: 'Write the EXACT words from the recording — do not paraphrase or use synonyms. Answers are 1–3 words. Correct spelling is required. The surrounding sentence paraphrases the audio, but the gap word itself comes directly from what the speaker says.' },
    ]
  },
  evidence: [], mentions: []
};
