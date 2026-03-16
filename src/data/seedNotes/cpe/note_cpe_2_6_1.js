export const note_cpe_2_6_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Demonstrate sophisticated vocabulary and grammar range in CPE writing.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Sophisticated Vocabulary and Grammar Range', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Band 5 (Exceptional)', text: 'To achieve the highest band, your writing must show <strong>a wide range of vocabulary used precisely</strong> and <strong>a full range of structures used accurately and appropriately</strong>. This means going well beyond C1-level language.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Vocabulary Strategies', level: 2 } },
    { id: 'list-vocab', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Avoid repetition</strong>: Use synonyms, hypernyms, or paraphrase. Don\'t use the same word twice in a paragraph.' }, { text: '<strong>Collocations</strong>: "exert influence" not "have influence", "pose a threat" not "be a threat".' }, { text: '<strong>Precise word choice</strong>: "plausible" not "possible", "prevalent" not "common", "contentious" not "controversial".' }, { text: '<strong>Idiomatic expressions</strong>: "It remains to be seen whether…", "This begs the question…"' }, { text: '<strong>Register-appropriate vocabulary</strong>: Match formality to text type (essay ≠ review ≠ article).' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Grammar Range', level: 2 } },
    { id: 'table-gram', type: 'comparisonTable', data: { caption: 'Grammar structures for C2 writing', headers: ['Structure', 'Example', 'Effect'], rows: [['Participle clause', '"Having weighed up the evidence, one can conclude…"', 'Concise, sophisticated'], ['Inversion', '"Not only does this policy address…, but it also…"', 'Emphasis, formality'], ['Subjunctive', '"It is essential that measures be taken…"', 'Formal register'], ['Reduced relative', '"The proposal, initially rejected, was later accepted."', 'Elegant compression'], ['Impersonal passive', '"It has been widely acknowledged that…"', 'Academic objectivity']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Quality Over Quantity', text: 'Don\'t cram every complex structure into one essay. Use 3–4 advanced structures naturally across the whole piece. Accuracy matters more than ambition — an incorrect inversion scores lower than a correct simple sentence.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'C2 writing range: avoid repetition (use synonyms/paraphrase), use precise collocations, match register to text type. Grammar: participle clauses, inversion, subjunctive, reduced relatives, impersonal passives. 3–4 advanced structures per essay, used accurately.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'C2 vocabulary: precise collocations, synonyms, register-appropriate choices. Grammar: participle clauses, inversion, subjunctive, reduced relatives. Accuracy over ambition.',
    cues: [
      { id: 'cue-1', blockId: 'table-gram', prompt: 'Name four advanced grammar structures for C2 writing with examples.', answer: '1. Participle clause: "Having weighed up the evidence…" 2. Inversion: "Not only does this policy address…" 3. Subjunctive: "It is essential that measures be taken…" 4. Reduced relative: "The proposal, initially rejected, was later accepted." Also: impersonal passive.' },
    ]
  },
  evidence: [], mentions: []
};
