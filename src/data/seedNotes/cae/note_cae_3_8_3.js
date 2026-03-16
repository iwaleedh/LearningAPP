export const note_cae_3_8_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop note-taking and paraphrasing skills for CAE Listening tasks.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Note-Taking and Paraphrasing from Audio', level: 2 } },
    { id: 'h-2', type: 'heading', data: { text: 'Effective Note-Taking', level: 2 } },
    { id: 'list-notes', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Key words only</strong>: Write content words (nouns, verbs, adjectives) — skip articles, prepositions.' }, { text: '<strong>Abbreviations</strong>: Develop personal shortcuts — "govt" for government, "→" for leads to, "≠" for not.' }, { text: '<strong>Structure</strong>: Use the question numbers as your framework — write notes next to each question.' }, { text: '<strong>Speed</strong>: Don\'t try to transcribe — capture just enough to trigger recall.' }, { text: '<strong>Timing</strong>: Write during the audio AND during pauses between sections.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Recognising Paraphrases', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Why Paraphrasing Matters', text: 'In Parts 1, 3, and 4, the correct answer <strong>paraphrases</strong> what the speaker says. The question uses different words from the audio. You must recognise that two different wordings express the same meaning.<br/><br/>Example:<br/>Speaker: "I couldn\'t have been more pleased with the outcome."<br/>Option: "She was very satisfied with the result." ✅' } },
    { id: 'h-4', type: 'heading', data: { text: 'Common Paraphrase Patterns', level: 2 } },
    { id: 'table-para', type: 'comparisonTable', data: { caption: 'How audio is paraphrased in questions', headers: ['Audio Says', 'Question/Option Says'], rows: [['couldn\'t have been more pleased', 'was very satisfied'], ['it was a struggle', 'found it difficult'], ['what struck me most was', 'was particularly impressed by'], ['I\'m in two minds about', 'feels uncertain about'], ['it didn\'t live up to expectations', 'was disappointed']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Practice Strategy', text: 'After listening practice, compare the audio script with the correct answers. Note how the examiner paraphrased each answer. This builds your ability to recognise paraphrase patterns under exam conditions.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Note-taking: key words only, use abbreviations, structure around question numbers, write during pauses. Paraphrasing: correct answers rephrase the audio — match meaning, not words. Study audio scripts against answer keys to learn paraphrase patterns.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Notes: key words, abbreviations, structured by question number. Paraphrasing: answers rephrase audio using different words — match meaning. Practice: compare scripts with answers to learn patterns.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'Why is paraphrase recognition important in CAE Listening and which parts test it?', answer: 'In Parts 1, 3 and 4, the correct option paraphrases what the speaker says — different words, same meaning. You must match meaning, not surface wording. Example: "couldn\'t have been more pleased" → "was very satisfied". Distractors may use the same words as the audio but change the meaning. Practice by comparing scripts with correct answers.' },
    ]
  },
  evidence: [], mentions: []
};
