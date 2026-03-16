export const note_cpe_1_2_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Part 6: Gapped text at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 6: Gapped Text', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'A long text with <strong>7 paragraphs removed</strong>. You are given <strong>8 paragraphs</strong> (one is extra). You must decide where each removed paragraph fits. This tests your understanding of text structure, cohesion, and coherence at the highest level.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Cohesion Clues', level: 2 } },
    { id: 'table-clues', type: 'comparisonTable', data: { caption: 'Types of cohesive links', headers: ['Clue Type', 'What to Look For', 'Example'], rows: [['Pronoun reference', 'he/she/it/they/this/these referring back', '"This" in a removed paragraph → what does it refer to?'], ['Lexical chains', 'Repeated or synonymous vocabulary', 'Main text: "the proposal" → removed para: "this scheme"'], ['Discourse markers', 'However, Moreover, Consequently', '"However" signals contrast with the previous paragraph'], ['Tense continuity', 'Past → past, present → present', 'A sudden tense shift = wrong position'], ['Topic flow', 'Each paragraph develops the previous idea', 'If gap follows "the economic impact", the paragraph should address economics']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read the base text with gaps to understand the overall argument structure.' }, { text: 'Read all 8 removed paragraphs and note their key themes/links.' }, { text: 'For each gap, examine what comes BEFORE and AFTER — look for referencing, lexical links, and logical flow.' }, { text: 'Try the paragraph in the gap: does the text read smoothly across the join?' }, { text: 'Be systematic: do the easiest/most obvious gaps first, then work through harder ones.' }, { text: 'Use the extra paragraph to confirm: if it clearly doesn\'t fit anywhere, you\'re on track.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'The Extra Paragraph', text: 'The extra paragraph often shares vocabulary with the text (to distract) but doesn\'t create coherent links at any gap. If you\'re unsure about a placement, check if the paragraph you\'re considering might be the extra one.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 6: 7 gaps, 8 paragraphs (1 extra). Tests text structure and cohesion. Use pronoun reference, lexical chains, discourse markers, tense continuity, and topic flow to identify correct placements. Do easy gaps first. The extra paragraph shares vocabulary but breaks coherence.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 6: 7 gapped paragraphs + 1 extra. Use cohesion clues (pronouns, lexical chains, discourse markers, tense, topic flow) to place paragraphs correctly.',
    cues: [
      { id: 'cue-1', blockId: 'table-clues', prompt: 'Name five types of cohesive clues for the gapped text task.', answer: '1. Pronoun reference (this, they → what they refer to). 2. Lexical chains (repeated/synonymous words). 3. Discourse markers (However, Moreover). 4. Tense continuity. 5. Topic flow (logical development of ideas).' },
    ]
  },
  evidence: [], mentions: []
};
