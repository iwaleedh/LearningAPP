export const note_cae_4_9_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Understand the format, strategy and key skills for CAE Speaking Part 2: Long turn.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 2: Long Turn', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: '<strong>Duration</strong>: ~1 minute per candidate (+ 30 seconds for partner response).<br/><strong>Format</strong>: Each candidate receives 2 photographs. You must compare them and answer a question printed above the photos (e.g. "Why might these people be enjoying themselves?").<br/><strong>After your partner speaks</strong>: You answer a brief question about their photos (~30 seconds).' } },
    { id: 'h-2', type: 'heading', data: { text: 'Key Skills', level: 2 } },
    { id: 'list-skills', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Comparing</strong>: Find similarities AND differences between the photos.' }, { text: '<strong>Speculating</strong>: You often cannot be certain — use speculative language.' }, { text: '<strong>Time management</strong>: You have 1 minute — don\'t spend too long on one photo.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Useful Language', level: 2 } },
    { id: 'table-lang', type: 'comparisonTable', data: { caption: 'Speaking Part 2 phrases', headers: ['Function', 'Phrases'], rows: [['Comparing', 'Both photos show… / In contrast to… / While the first photo…, the second… / One key difference is…'], ['Speculating', 'It looks as though… / They might be… / I\'d imagine that… / It\'s possible that… / They seem to be…'], ['Answering the question', 'I think the reason they… / What strikes me is… / The main difference in terms of X is…']] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Common Mistakes', text: '• Describing each photo separately without comparing.<br/>• Forgetting to answer the question above the photos — comparing alone is not enough.<br/>• Speaking for too short a time — use the full minute.<br/>• Giving a very long description — keep descriptions brief, focus on comparison and speculation.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Use the structure: <strong>Brief description → Compare → Speculate → Answer the question</strong>. This ensures you cover all requirements in 1 minute. Practice with a timer to build your sense of timing.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Part 2: 1 minute — compare 2 photos and answer the question above them. Then 30 seconds responding to partner\'s photos. Compare (not just describe), speculate, and answer the question. Use speculative language (It looks as though, They might be).' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Part 2: 1-minute long turn. Compare 2 photos + answer the question. Structure: brief description → compare → speculate → answer question. Use speculative language. 30 seconds to respond to partner.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What must you do in your 1-minute long turn in Part 2?', answer: 'Compare the two photographs (similarities and differences), speculate about them using tentative language (It looks as though, They might be), and answer the specific question printed above the photos. Don\'t just describe each photo separately. Use the full minute. After your partner\'s turn, you answer a brief question about their photos (~30 seconds).' },
    ]
  },
  evidence: [], mentions: []
};
