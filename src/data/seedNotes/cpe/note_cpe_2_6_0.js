export const note_cpe_2_6_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master effective text organisation and paragraphing at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Effective Text Organisation and Paragraphing', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Why Organisation Matters', text: 'At C2, examiners assess <strong>how effectively you structure your argument</strong>. A well-organised text guides the reader effortlessly through your ideas. Poor organisation — even with excellent grammar — limits your mark.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Paragraph Structure', level: 2 } },
    { id: 'list-para', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Topic sentence</strong>: Opens the paragraph with the main idea. The reader should know the paragraph\'s direction from the first sentence.' }, { text: '<strong>Supporting sentences</strong>: Develop the idea with examples, evidence, analysis, or explanation.' }, { text: '<strong>Concluding / linking sentence</strong>: Ties back to the topic sentence or transitions to the next paragraph.' }, { text: 'Each paragraph = ONE main idea. If you\'re discussing two ideas, use two paragraphs.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Cohesion Between Paragraphs', level: 2 } },
    { id: 'list-cohesion', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Echo linking</strong>: End paragraph A with a word/idea; start paragraph B by picking it up. "…a significant challenge." → "This challenge is compounded by…"' }, { text: '<strong>Contrast pivot</strong>: "Having considered the advantages, it is equally important to examine the drawbacks."' }, { text: '<strong>Signpost phrases</strong>: "Turning now to…", "A further consideration is…", "Equally significant is…"' }, { text: '<strong>Logical progression</strong>: General → specific, cause → effect, problem → solution, chronological.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Planning Is Key', text: 'Spend 3–5 minutes planning before you write. Jot down paragraph topics and their order. A 280-word CPE essay needs 4–5 paragraphs. Each paragraph should serve a clear purpose in your argument.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Organisation: each paragraph has one main idea (topic sentence → support → link). Cohesion between paragraphs via echo linking, contrast pivots, and signpost phrases. Follow logical progression. Plan before writing.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Effective organisation: one main idea per paragraph, topic sentence → support → link. Cohesion: echo linking, contrast pivots, signpost phrases. Plan before writing.',
    cues: [
      { id: 'cue-1', blockId: 'list-cohesion', prompt: 'Name three techniques for creating cohesion between paragraphs.', answer: '1. Echo linking: end with a word/idea, start next paragraph by picking it up. 2. Contrast pivot: "Having considered the advantages, it is equally important to examine the drawbacks." 3. Signpost phrases: "Turning now to…", "A further consideration is…".' },
    ]
  },
  evidence: [], mentions: []
};
