export const note_cae_2_6_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop a wide range of vocabulary and grammatical structures for high scores in CAE Writing.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Range of Vocabulary and Grammatical Structures', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'What the Examiner Wants', text: 'The Language criterion assesses two things: <strong>range</strong> (variety of vocabulary and grammar used) and <strong>accuracy</strong> (correctness). At C1, you are expected to use a wide range beyond B2 basics — advanced vocabulary, complex sentences, and varied grammatical structures.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Vocabulary Range Strategies', level: 2 } },
    { id: 'list-vocab', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Avoid repetition</strong>: Use synonyms and paraphrases — "important" → "crucial, vital, essential, significant, paramount".' }, { text: '<strong>Use collocations</strong>: "make a significant contribution" rather than "help a lot".' }, { text: '<strong>Academic vocabulary</strong>: "facilitate, enhance, underlying, considerable, implications".' }, { text: '<strong>Descriptive language</strong> (reviews): "breath-taking, captivating, thought-provoking, lacklustre".' }, { text: '<strong>Topic-specific vocabulary</strong>: demonstrate knowledge of the subject area.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Grammar Range Strategies', level: 2 } },
    { id: 'list-gram', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Mix simple and complex sentences</strong> — don\'t write only one type.' }, { text: '<strong>Relative clauses</strong>: "The approach, which has been widely adopted, …"' }, { text: '<strong>Participle clauses</strong>: "Having considered the evidence, I would argue…"' }, { text: '<strong>Conditionals</strong>: Use mixed and third conditionals, not just first/second.' }, { text: '<strong>Passive structures</strong>: "It has been suggested that…" / "Measures should be taken…"' }, { text: '<strong>Inversion</strong>: "Not only does this benefit… but it also…"' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Important', text: 'Range without accuracy will not score well. Only use structures you are confident about. One well-used inversion is worth more than three incorrect ones. Accuracy first, then range.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Language criterion: range + accuracy. Vocabulary: synonyms, collocations, academic words, topic-specific terms. Grammar: mix sentence types, use relative/participle clauses, mixed conditionals, passive, inversion. Accuracy is more important than forcing complex structures.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Language = range + accuracy. Vocab: synonyms, collocations, academic words. Grammar: relative clauses, participle clauses, mixed conditionals, passive, inversion. Accuracy first — don\'t use structures you\'re unsure of.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What is the difference between range and accuracy in the Language criterion?', answer: 'Range: variety of vocabulary and grammar used — synonyms, complex structures, topic-specific terms. Accuracy: correctness of language — spelling, grammar, word choice. At C1, both are needed: you must use advanced language correctly. One well-used complex structure scores better than multiple incorrect attempts.' },
    ]
  },
  evidence: [], mentions: []
};
