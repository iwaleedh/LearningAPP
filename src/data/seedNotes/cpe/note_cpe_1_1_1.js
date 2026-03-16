export const note_cpe_1_1_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Part 2: Open cloze at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 2: Open Cloze', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'A text with <strong>8 gaps</strong>. No options — you must supply the missing word yourself. Only <strong>one word</strong> per gap. Contractions (e.g. don\'t) count as two words and are NOT accepted.' } },
    { id: 'h-2', type: 'heading', data: { text: 'What Is Tested', level: 2 } },
    { id: 'table-tested', type: 'comparisonTable', data: { caption: 'Open cloze word types at C2', headers: ['Category', 'Examples', 'Typical Gap'], rows: [['Articles & determiners', 'the, a, each, every, such', '"______ a degree that…"'], ['Prepositions', 'of, in, to, by, with, at', '"accused him ______ lying"'], ['Relative pronouns', 'which, whose, whom, whereby', '"the extent to ______ this is true"'], ['Conjunctions', 'whereas, albeit, notwithstanding', '"______ being expensive, it proved worthwhile"'], ['Auxiliary/modal verbs', 'had, would, might, should', '"Had she ______ known earlier…"'], ['Pronouns & reference', 'it, one, those, such', '"______ is widely believed that…"'], ['Fixed phrases', 'far, rather, much, all', '"by ______ the most important"']] } },
    { id: 'h-3', type: 'heading', data: { text: 'C2-Level Patterns', level: 2 } },
    { id: 'list-patterns', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Inversion</strong>: "Not until ______ he arrived did we realise…" (answer: had/∅ depending on structure)' }, { text: '<strong>Cleft sentences</strong>: "It ______ the cost that deterred them" (answer: was)' }, { text: '<strong>Subjunctive</strong>: "It is essential that she ______ present" (answer: be)' }, { text: '<strong>Complex preposition phrases</strong>: "in ______ of" (answer: spite/view/terms depending on context)' }, { text: '<strong>Emphasis with "do"</strong>: "She ______ manage to finish on time" (answer: did)' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Strategy', text: 'After filling each gap, read the whole sentence. Check: (1) Does it make grammatical sense? (2) Does the meaning fit the overall argument? (3) Is it definitely ONE word (no contractions)? Common errors: writing "in spite" (two words) when the gap needs "despite" (one word).' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 2: 8 open gaps, one word each. Tests structural words (articles, prepositions, relatives, conjunctions, auxiliaries) and advanced grammar patterns (inversion, cleft, subjunctive). Always check the complete sentence for grammar and meaning.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 2: 8 open cloze gaps, one word each. Tests structural and grammatical words including advanced patterns like inversion, cleft sentences, and subjunctive.',
    cues: [
      { id: 'cue-1', blockId: 'table-tested', prompt: 'What categories of words typically fill CPE open cloze gaps?', answer: 'Articles/determiners, prepositions, relative pronouns (which, whose, whom), conjunctions (whereas, albeit), auxiliary/modal verbs, pronouns/reference words, fixed phrase components.' },
      { id: 'cue-2', blockId: 'list-patterns', prompt: 'Name three C2-level grammar patterns tested in open cloze.', answer: '1. Inversion: "Not until had he arrived…". 2. Cleft sentences: "It was the cost that…". 3. Subjunctive: "It is essential that she be present." Also: complex preposition phrases, emphatic "do/did".' },
    ]
  },
  evidence: [], mentions: []
};
