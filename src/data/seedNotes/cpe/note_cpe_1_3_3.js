export const note_cpe_1_3_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master complex word formation including derivation and compounding at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Complex Word Formation', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Beyond Basic Affixes', text: 'C2 word formation goes beyond simple prefix/suffix changes. You need: <strong>multiple affixation</strong> (un-+accept+-able+-ity → unacceptability), <strong>compound words</strong>, and <strong>less common derivation patterns</strong>.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Derivation Patterns', level: 2 } },
    { id: 'table-deriv', type: 'comparisonTable', data: { caption: 'Key derivation patterns', headers: ['Base', 'Derived Forms', 'Notes'], rows: [['perceive', 'perception, perceptive, perceptible, imperceptible, perceptibly', 'Note: -ceive → -cept- stem change'], ['assume', 'assumption, assumed, assuming, presumably, unassuming', '"Unassuming" = modest (unexpected meaning)'], ['precede', 'precedent, unprecedented, preceding, precedence', '"Unprecedented" = never happened before'], ['conceive', 'concept, conception, conceivable, inconceivable, preconceived', '-ceive → -cept- again; negative: in- not un-'], ['sustain', 'sustainable, unsustainable, sustainability, sustained, sustenance', '"Sustenance" = food/nourishment (unexpected)']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Compounding', level: 2 } },
    { id: 'list-compound', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Adjective compounds</strong>: hard-hitting, far-reaching, thought-provoking, deep-rooted' }, { text: '<strong>Noun compounds</strong>: breakthrough, downfall, setback, shortcoming, upbringing' }, { text: '<strong>Adverb compounds</strong>: singlehandedly, wholeheartedly, halfheartedly, offhandedly' }, { text: 'Compound adjectives often need hyphens: "a well-known fact" (hyphenated before noun), "the fact is well known" (no hyphen after noun).' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Stem Changes to Know', text: 'Some word families change their stem unpredictably:<br/>• receive → reception (not "receival")<br/>• describe → description (not "describution")<br/>• pronounce → pronunciation (not "pronounciation")<br/>• maintain → maintenance (not "maintainance")<br/>These irregular derivations are heavily tested at C2.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'C2 word formation: multiple affixation (un- + root + -able + -ity), stem changes (perceive → perception), compounds (far-reaching, breakthrough). Know irregular derivations and compound hyphenation rules. Practice word family trees.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'C2 word formation: multiple affixation, stem changes (perceive → perception), compounds (hard-hitting, breakthrough). Know irregular derivations.',
    cues: [
      { id: 'cue-1', blockId: 'table-deriv', prompt: 'Give the full word family for "perceive" showing derivation changes.', answer: 'perceive → perception (noun, stem change -ceive → -cept-), perceptive (adjective), perceptible (adjective), imperceptible (negative adjective, im- prefix), perceptibly (adverb).' },
    ]
  },
  evidence: [], mentions: []
};
