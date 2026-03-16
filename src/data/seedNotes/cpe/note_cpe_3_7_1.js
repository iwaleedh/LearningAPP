export const note_cpe_3_7_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Listening Part 2: Sentence completion at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 2: Sentence Completion', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'You hear a <strong>monologue</strong> (lecture, talk, broadcast) lasting about 3–4 minutes. You complete <strong>9 gapped sentences</strong> with a word or short phrase from the recording. You hear it <strong>twice</strong>. Answers must be the <strong>exact words</strong> from the recording.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Rules', level: 2 } },
    { id: 'list-rules', type: 'list', data: { style: 'bullet', items: [{ text: 'Answers are <strong>1–3 words</strong> taken directly from the recording.' }, { text: 'Spelling must be correct — but you won\'t need to spell highly unusual words.' }, { text: 'The sentences on the page <strong>paraphrase</strong> what the speaker says — you must listen for the original wording.' }, { text: 'Gaps follow the order of the recording.' }, { text: 'The completed sentence must be <strong>grammatically correct</strong>.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read all 9 sentences before listening. Predict what type of word is needed (noun? adjective? number?).' }, { text: 'Underline key content words in the sentence — these will be paraphrased in the recording.' }, { text: 'First listening: write what you hear, even if you\'re not sure. Don\'t leave blanks.' }, { text: 'Second listening: check and correct. Make sure the completed sentence makes grammatical sense.' }, { text: 'Write clearly and concisely — don\'t write more words than needed.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Paraphrase Awareness', text: 'The sentence might say "the speaker attributes his success to…" while the recording says "I owe it all to my early training." The answer is "early training". You must bridge the paraphrase gap.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 2: 9 sentence completions from a monologue, 1–3 words each, exact words from recording. Sentences paraphrase the speaker. Read sentences first, predict word type, write during first listening, check on second. Spelling must be correct.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 2: 9 sentence completions from a monologue. 1–3 exact words from recording. Sentences paraphrase speaker\'s words. Predict word type, listen for original wording.',
    cues: [
      { id: 'cue-1', blockId: 'list-rules', prompt: 'What are the key rules for CPE Listening Part 2?', answer: 'Answers are 1–3 words taken directly from the recording. Spelling must be correct. Sentences paraphrase the speaker (listen for original wording). Gaps follow recording order. Completed sentence must be grammatically correct.' },
    ]
  },
  evidence: [], mentions: []
};
