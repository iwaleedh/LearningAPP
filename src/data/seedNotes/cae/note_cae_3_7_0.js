export const note_cae_3_7_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the format, strategy and key skills for CAE Listening Part 1: Multiple choice (short extracts).' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 1: Multiple Choice (Short Extracts)', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: '<strong>Audio</strong>: 3 short unrelated extracts, each about 1 minute. Each features one or two speakers.<br/><strong>Questions</strong>: 2 three-option MCQs per extract (6 questions total).<br/><strong>Marks</strong>: 6 (1 mark each).<br/><strong>Played</strong>: Twice.<br/><strong>Focus</strong>: Feeling, attitude, opinion, main idea, gist, purpose, function, agreement.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Before the audio plays, read the questions and options carefully — underline key words.' }, { text: 'On the first listening, try to answer all questions. Note keywords that relate to each option.' }, { text: 'On the second listening, confirm your answers and check those you were unsure about.' }, { text: 'Listen for attitude markers: tone of voice, hedging language, emphasis.' }, { text: 'Beware of distractors: speakers may mention all three options but only commit to one view.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'The extracts are unrelated — a new topic starts with each extract. Use the pause between extracts to read ahead and prepare for the next set of questions.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Part 1: 3 short extracts, 2 MCQs each (6 marks). Tests feeling, attitude, opinion, gist. Played twice. Read questions first, listen for attitude markers, beware of distractors. Use pauses to read ahead.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Part 1: 3 unrelated short extracts, 2 × 3-option MCQs each, 6 marks. Played twice. Tests attitude, opinion, gist. Read questions before listening. Distractors mention all options but only one is supported.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'How many extracts, questions, and marks are in Listening Part 1?', answer: '3 short unrelated extracts of about 1 minute each. 2 three-option MCQs per extract = 6 questions total, 1 mark each = 6 marks. Audio played twice. Tests feeling, attitude, opinion, main idea, gist, and purpose.' },
    ]
  },
  evidence: [], mentions: []
};
