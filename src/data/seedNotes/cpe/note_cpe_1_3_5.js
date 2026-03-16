export const note_cpe_1_3_5 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master cohesive devices and discourse markers at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Cohesive Devices and Discourse Markers', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Beyond "However" and "Moreover"', text: 'At C2, examiners expect a <strong>wide and precise</strong> range of cohesive devices. Using only basic linkers (however, moreover, furthermore) signals B2/C1. Master sophisticated alternatives for each function.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Discourse Marker Categories', level: 2 } },
    { id: 'table-dm', type: 'comparisonTable', data: { caption: 'Advanced discourse markers', headers: ['Function', 'Basic (B2/C1)', 'Advanced (C2)'], rows: [['Contrast', 'However, On the other hand', 'Notwithstanding, Be that as it may, Conversely, That said'], ['Addition', 'Moreover, Furthermore', 'Not to mention, What is more, On top of which, Coupled with'], ['Cause/result', 'Therefore, As a result', 'Hence, Thereby, Consequently, It follows that, This being the case'], ['Concession', 'Although, Even though', 'Albeit, Granted that, Much as, Admittedly, For all that'], ['Exemplification', 'For example', 'A case in point is, To illustrate, Not least, By way of illustration'], ['Summary', 'In conclusion', 'All things considered, On balance, Taking everything into account']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Reference and Substitution', level: 2 } },
    { id: 'list-ref', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Demonstrative reference</strong>: "this/these/that/those" pointing back to prior ideas: "This phenomenon…"' }, { text: '<strong>Substitution</strong>: using "do so", "one", "the former/latter" to avoid repetition' }, { text: '<strong>Ellipsis</strong>: omitting repeated words: "Some agreed and some didn\'t [agree]."' }, { text: '<strong>Lexical cohesion</strong>: synonyms, superordinates, or general nouns: "the proposal → this initiative → the scheme"' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Writing Tip', text: 'Vary your discourse markers across an essay. Don\'t use the same connector twice. Mix sentence-initial markers ("That said, …") with mid-sentence ones ("…, thereby ensuring…") and clause-level ones ("Much as I appreciate…").' } },
    { id: 'sum-1', type: 'summary', data: { text: 'C2 discourse: use advanced markers (notwithstanding, albeit, hence, a case in point). Master reference (this phenomenon), substitution (do so, the former), ellipsis, and lexical cohesion. Vary position and type across your writing.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'C2 discourse markers: contrast (notwithstanding, be that as it may), concession (albeit, much as), cause (hence, thereby), exemplification (a case in point). Also: reference, substitution, ellipsis, lexical cohesion.',
    cues: [
      { id: 'cue-1', blockId: 'table-dm', prompt: 'Give C2-level alternatives for "However", "Therefore", and "Although".', answer: 'However → Notwithstanding, Be that as it may, Conversely, That said. Therefore → Hence, Thereby, It follows that. Although → Albeit, Granted that, Much as, For all that.' },
    ]
  },
  evidence: [], mentions: []
};
