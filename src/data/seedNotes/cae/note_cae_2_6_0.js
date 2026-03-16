export const note_cae_2_6_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand how to organise text and create cohesion in CAE Writing tasks.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Text Organisation and Cohesion', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Why Organisation Matters', text: 'Organisation is one of four assessment criteria in CAE Writing. It assesses how well you structure your text, develop ideas logically, and connect them using cohesive devices. A well-organised text is easy to follow and helps the reader understand your argument.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Paragraphing', level: 2 } },
    { id: 'list-para', type: 'list', data: { style: 'bullet', items: [{ text: 'Each paragraph should have <strong>one main idea</strong>.' }, { text: 'Start with a <strong>topic sentence</strong> that states the main point.' }, { text: 'Follow with <strong>supporting sentences</strong> that develop, explain, or exemplify.' }, { text: 'End with a <strong>concluding/linking sentence</strong> that transitions to the next paragraph.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Cohesive Devices', level: 2 } },
    { id: 'table-coh', type: 'comparisonTable', data: { caption: 'Types of cohesion', headers: ['Device', 'Examples'], rows: [['Reference (pronouns)', 'this, that, these, such, it, they — refer to something already mentioned'], ['Substitution', '"…and many others do so too" (so = believe the same thing)'], ['Ellipsis (omission)', '"Some students passed; others didn\'t [pass]."'], ['Lexical cohesion', 'Synonyms, repetition, word families (global warming → climate change → environmental crisis)'], ['Connectors', 'Moreover, however, consequently, in addition, on the other hand']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Don\'t overuse connectors. A text that starts every sentence with "Moreover", "Furthermore", "Additionally" reads robotically. Mix explicit connectors with implicit cohesion (pronouns, synonyms, word chains) for natural flow.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Organisation: one idea per paragraph (topic sentence → support → link). Cohesion: pronouns, substitution, ellipsis, lexical chains, connectors. Mix explicit and implicit cohesive devices. Don\'t overuse connectors.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Organisation: one idea per paragraph with topic sentence. Cohesion: pronouns, substitution, ellipsis, lexical chains, connectors. Mix implicit and explicit devices — don\'t overuse connectors.',
    cues: [
      { id: 'cue-1', blockId: 'table-coh', prompt: 'Name five types of cohesive device with an example of each.', answer: 'Reference: pronouns (this, these, it). Substitution: "do so" replaces a clause. Ellipsis: omitting repeated words ("others didn\'t [pass]"). Lexical cohesion: synonyms and word families (global warming → climate change). Connectors: moreover, however, consequently.' },
    ]
  },
  evidence: [], mentions: []
};
