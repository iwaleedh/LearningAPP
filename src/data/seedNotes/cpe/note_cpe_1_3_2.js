export const note_cpe_1_3_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop precise word choice and nuance at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Precise Word Choice and Nuance', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'The C2 Standard', text: 'At C2, you must choose words with <strong>surgical precision</strong>. Near-synonyms carry different connotations, registers, and collocational patterns. The difference between "stubborn" and "resolute" can determine a mark.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Synonym Distinctions', level: 2 } },
    { id: 'table-syn', type: 'comparisonTable', data: { caption: 'Words with similar meaning but different use', headers: ['General', 'Positive/Neutral', 'Negative', 'Note'], rows: [['thin', 'slender, slim', 'scrawny, emaciated', 'Connotation shifts meaning completely'], ['old', 'mature, seasoned', 'decrepit, antiquated', '"Seasoned" for experience; "antiquated" for outdated'], ['walk', 'stroll, saunter', 'trudge, plod', 'Manner encoded in the verb choice'], ['say', 'assert, maintain', 'allege, claim', '"Allege" implies unproven; "assert" implies confidence'], ['surprise', 'astonish, startle', 'stun, flabbergast', 'Intensity and register differ']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Register Awareness', level: 2 } },
    { id: 'list-register', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Formal</strong>: commence, reside, ascertain, endeavour, acquire' }, { text: '<strong>Neutral</strong>: begin, live, find out, try, get' }, { text: '<strong>Informal</strong>: kick off, hang out, suss out, have a go, grab' }, { text: 'C2 candidates must shift register appropriately — formal in essays/reports, less formal in reviews/articles.' }] } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Example: Choosing the Right Word', text: '"The committee ______ the proposal after lengthy deliberation."<br/>A) declined  B) refused  C) rejected  D) turned down<br/><br/><strong>Answer: C) rejected</strong> — formal register matches "committee" and "deliberation". "Turned down" is too informal. "Declined" implies polite refusal (usually for invitations). "Refused" is neutral but less precise for official decisions.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Building Nuance', text: 'Use a thesaurus to explore near-synonyms, then check each in example sentences (e.g. Cambridge Dictionary online). Note the <strong>collocations</strong>, <strong>register</strong>, and <strong>connotation</strong> of each. Build word maps: "angry → furious / livid / incensed / irate / indignant" with notes on each.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'C2 word choice: near-synonyms differ in connotation (positive/negative), register (formal/informal), and collocation. Know the precise shade of meaning. Match register to text type. Use thesaurus + example sentences to build nuanced vocabulary.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'C2 precision: near-synonyms differ in connotation, register, and collocation. Match word choice to context. Build word maps with synonym distinctions.',
    cues: [
      { id: 'cue-1', blockId: 'table-syn', prompt: 'Explain how "slender" and "scrawny" differ though both mean "thin".', answer: '"Slender" has a positive connotation (attractive, elegant thinness). "Scrawny" has a negative connotation (unattractively thin, bony). At C2, the right synonym depends on the intended connotation of the sentence.' },
    ]
  },
  evidence: [], mentions: []
};
