export const note_cae_1_2_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the format, strategy and key skills for CAE Reading & Use of English Part 7: Gapped text.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 7: Gapped Text', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: '<strong>Text</strong>: One long text with 6 paragraphs removed and placed in jumbled order after the text, plus one extra paragraph that does not fit.<br/><strong>Questions</strong>: 6 gaps — choose the correct paragraph for each gap.<br/><strong>Marks</strong>: 12 (2 marks per question).<br/><strong>Focus</strong>: Text structure, cohesion, coherence, reference words, and logical development of ideas.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Cohesion Clues to Look For', level: 2 } },
    { id: 'list-clues', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Reference words</strong>: pronouns (he, she, it, this, these, such), which refer back to something in the preceding paragraph.' }, { text: '<strong>Linking expressions</strong>: "However", "In addition", "As a result", "On the other hand" — these signal the logical relationship.' }, { text: '<strong>Lexical chains</strong>: repeated or related vocabulary across the gap boundary.' }, { text: '<strong>Chronological / logical sequence</strong>: time markers, cause-effect chains.' }, { text: '<strong>Topic continuity</strong>: the paragraph before and after the gap should connect to the same topic.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read the base text (with gaps) from start to finish to understand the overall structure.' }, { text: 'Read all the removed paragraphs. Note the topic and any reference/linking words at the start and end of each.' }, { text: 'Work through gaps in order. For each gap, look at the sentence BEFORE and AFTER — what topic is expected?' }, { text: 'Try a paragraph in the gap — check that pronouns, linking words, and topic all fit smoothly.' }, { text: 'After placing all 6, re-read the complete text to verify flow. The unused paragraph should clearly not fit anywhere.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Common Mistake', text: 'Don\'t rely on topic alone — a paragraph might discuss the right topic but break the logical or chronological flow. Always check the <strong>sentences immediately before and after</strong> the gap for smooth transitions.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Start with gaps where you feel most confident. Each correct placement narrows the options for remaining gaps. Highlight reference words (this, these, such, it) in the removed paragraphs — they are often the strongest clue.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Part 7: 6 removed paragraphs to replace (+ 1 extra distractor). Tests text structure and cohesion. Use reference words, linking expressions, lexical chains, and topic flow to find the correct paragraph for each gap.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Part 7: 6 gapped paragraphs + 1 distractor, 2 marks each. Tests cohesion and text structure. Look for reference words, linking expressions, lexical chains. Read before and after each gap to check flow.',
    cues: [
      { id: 'cue-1', blockId: 'list-clues', prompt: 'What are the main cohesion clues to use in Part 7?', answer: 'Reference words (pronouns: he, she, this, these, such), linking expressions (However, In addition, As a result), lexical chains (repeated/related vocabulary), chronological/logical sequence (time markers, cause-effect), and topic continuity (matching subject matter across the gap boundary).' },
    ]
  },
  evidence: [], mentions: []
};
