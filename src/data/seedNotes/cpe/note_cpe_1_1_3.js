export const note_cpe_1_1_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Part 4: Key word transformations at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 4: Key Word Transformations', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'You are given a <strong>lead-in sentence</strong>, a <strong>key word</strong> (which must not be changed), and a <strong>gapped sentence</strong>. Complete the gapped sentence using <strong>3–8 words</strong> including the key word, so that it means the same as the lead-in. Each question is worth <strong>2 marks</strong> (1 for each half).' } },
    { id: 'h-2', type: 'heading', data: { text: 'C2 Grammar & Vocabulary Tested', level: 2 } },
    { id: 'table-tested', type: 'comparisonTable', data: { caption: 'Transformation categories', headers: ['Category', 'Example Pattern', 'Key Word Clue'], rows: [['Inversion', '"Never before had I seen…"', 'NEVER, RARELY, SELDOM, NO SOONER'], ['Cleft sentences', '"It was only when… that…"', 'IT, WHAT, ONLY'], ['Passive / causative', '"She had her car serviced."', 'HAD, GOT, BEEN'], ['Impersonal passive', '"It is said to be…"', 'SAID, BELIEVED, THOUGHT'], ['Idioms / fixed phrases', '"She came to terms with…"', 'TERMS, LIGHT, ACCOUNT'], ['Mixed conditionals', '"Had I known, I would be…"', 'HAD, WOULD, WERE'], ['Nominalisation', '"His failure to comply resulted in…"', 'FAILURE, REFUSAL, INABILITY']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Compare both sentences — identify WHAT changes (grammar structure, vocabulary, or both).' }, { text: 'The key word tells you the structure: e.g. TERMS → "come to terms with", SOONER → "no sooner… than".' }, { text: 'Write the key word first, then build around it.' }, { text: 'Count your words: must be 3–8 including the key word. Contractions = 2 words.' }, { text: 'Check BOTH halves: even if one half is wrong, you can still score 1 mark for the other.' }, { text: 'Do NOT change the key word in any way (no tense changes, no plurals, nothing).' }] } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Example', text: '<strong>Lead-in:</strong> "People say this restaurant is the best in the city."<br/><strong>Key word:</strong> SAID<br/><strong>Gapped:</strong> "This restaurant _________________________ in the city."<br/><br/><strong>Answer:</strong> "is said to be the best" (impersonal passive transformation). 2/2 marks.' } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Mark Scheme', text: 'Each question splits into two halves at a dividing point. You get 1 mark per correct half, max 2. Even a partially correct answer can score. Never leave a question blank.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 4: 6 key word transformations, 3–8 words, 2 marks each. Tests inversion, cleft sentences, passive/causative, idioms, mixed conditionals, nominalisation. The key word must not be changed. Even partial answers can score 1 mark.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 4: 6 key word transformations, 3–8 words including the key word. Tests advanced grammar (inversion, cleft, passive, conditionals) and fixed phrases. 2 marks per question — partial credit possible.',
    cues: [
      { id: 'cue-1', blockId: 'table-tested', prompt: 'Name five grammar/vocabulary categories tested in CPE key word transformations.', answer: '1. Inversion (Never before had I…). 2. Cleft sentences (It was only when…). 3. Passive/causative (had her car serviced). 4. Impersonal passive (is said to be). 5. Idioms/fixed phrases (came to terms with). Also: mixed conditionals, nominalisation.' },
    ]
  },
  evidence: [], mentions: []
};
