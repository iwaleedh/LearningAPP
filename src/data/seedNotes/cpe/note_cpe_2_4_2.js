export const note_cpe_2_4_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master sophisticated register and academic style for CPE writing.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Sophisticated Register and Academic Style', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Register at C2', text: 'C2 writing demands <strong>consistent, elevated register</strong>. Your essay should read like a well-argued opinion piece in a quality broadsheet, not a school composition. Academic style means: impersonal constructions, precise vocabulary, hedged claims, and complex sentence structures.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Academic Language Features', level: 2 } },
    { id: 'table-features', type: 'comparisonTable', data: { caption: 'Informal vs academic', headers: ['Informal / Basic', 'Academic / C2', 'Why Better'], rows: [['I think…', 'It could be argued that… / One might contend…', 'Impersonal, hedged'], ['lots of people', 'a significant proportion of the population', 'Precise, formal'], ['This is bad', 'This has proved to be detrimental', 'Evaluative, specific'], ['X causes Y', 'X gives rise to / X is conducive to Y', 'Varied, precise collocation'], ['I\'ll talk about', 'This essay will examine / explore / address', 'Academic framing']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Key Academic Structures', level: 2 } },
    { id: 'list-struct', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Impersonal passives</strong>: "It has been widely documented that…"' }, { text: '<strong>Nominalisation</strong>: "The implementation of these measures…" (not "implementing these measures")' }, { text: '<strong>Hedging</strong>: "tends to", "appears to", "is likely to", "may well"' }, { text: '<strong>Complex noun phrases</strong>: "the long-debated question of whether…"' }, { text: '<strong>Formal conjunctions</strong>: "insofar as", "inasmuch as", "with a view to"' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Don\'t Overdo It', text: '<strong>Purple prose</strong>: Using unnecessarily complex words makes writing unnatural. "utilise" isn\'t always better than "use".<br/><strong>Inconsistent register</strong>: Mixing formal and informal language across the essay is worse than being consistently slightly informal.<br/><strong>Excessive hedging</strong>: "It might perhaps be possible to suggest…" → too cautious. Be balanced.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Academic style: impersonal constructions, nominalisation, hedging, formal conjunctions, precise vocabulary. Avoid informal language (I think, lots of). Be consistent in register. Don\'t overcomplicate — clarity with sophistication is the target.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Academic register: impersonal passives, nominalisation, hedging (tends to, appears to), formal conjunctions. Avoid informality. Consistent elevated register throughout.',
    cues: [
      { id: 'cue-1', blockId: 'table-features', prompt: 'Convert these to academic register: "I think", "lots of people", "This is bad".', answer: '"I think" → "It could be argued that…" / "One might contend…" (impersonal, hedged). "Lots of people" → "A significant proportion of the population" (precise, formal). "This is bad" → "This has proved to be detrimental" (evaluative, specific).' },
    ]
  },
  evidence: [], mentions: []
};
