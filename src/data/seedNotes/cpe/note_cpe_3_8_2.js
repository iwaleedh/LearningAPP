export const note_cpe_3_8_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop skills for recognising speaker attitude and purpose at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Recognising Speaker Attitude and Purpose', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Attitude vs Purpose', text: '<strong>Attitude</strong>: How the speaker feels (enthusiastic, sceptical, resigned, critical, neutral).<br/><strong>Purpose</strong>: Why the speaker says something (to persuade, to warn, to justify, to illustrate, to concede). Both are tested frequently in Parts 1 and 3.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Recognising Attitude', level: 2 } },
    { id: 'table-att', type: 'comparisonTable', data: { caption: 'Attitude indicators', headers: ['Attitude', 'Language Clues', 'Tone Clues'], rows: [['Enthusiastic', '"absolutely", "what a fantastic…", "I was thrilled"', 'Higher pitch, faster pace, emphasis'], ['Sceptical', '"I\'m not entirely convinced", "it remains to be seen"', 'Flat or questioning intonation'], ['Resigned', '"I suppose there\'s nothing we can do", "well, that\'s how it is"', 'Falling pitch, slower pace, sighing'], ['Critical', '"frankly, it\'s inadequate", "leaves much to be desired"', 'Emphatic stress, measured pace'], ['Neutral/objective', '"it could be argued that…", "the evidence suggests…"', 'Even tone, moderate pace']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Identifying Purpose', level: 2 } },
    { id: 'list-purpose', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>To persuade</strong>: persuasive language, rhetorical questions, emotional appeals.' }, { text: '<strong>To warn</strong>: "Bear in mind that…", "What people fail to realise is…"' }, { text: '<strong>To justify</strong>: "The reason for this is…", "This was necessitated by…"' }, { text: '<strong>To illustrate</strong>: "Take the case of…", "A good example would be…"' }, { text: '<strong>To concede</strong>: "I take your point, but…", "Fair enough, however…"' }, { text: '<strong>To qualify</strong>: "Up to a point, yes…", "In certain circumstances, perhaps…"' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Practice Strategy', text: 'When listening to any English media, pause after a speaker\'s turn and ask: "What is their attitude?" and "Why did they say that?" This builds automatic recognition for the exam.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Attitude = how the speaker feels (enthusiastic, sceptical, critical, resigned). Purpose = why they say something (to persuade, warn, justify, illustrate, concede, qualify). Use language AND tone clues. Practice by analysing real conversations and media.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Attitude (how speaker feels) from language + tone clues. Purpose (why they say it): persuade, warn, justify, illustrate, concede, qualify. Both tested in Parts 1 and 3.',
    cues: [
      { id: 'cue-1', blockId: 'table-att', prompt: 'How can you distinguish a sceptical speaker from an enthusiastic one?', answer: 'Sceptical: language like "I\'m not entirely convinced", "it remains to be seen"; flat or questioning intonation. Enthusiastic: "absolutely", "what a fantastic"; higher pitch, faster pace, emphasis.' },
    ]
  },
  evidence: [], mentions: []
};
