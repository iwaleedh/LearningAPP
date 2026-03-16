export const note_cpe_3_7_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Listening Part 3: Multiple choice (long text) at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 3: Multiple Choice (Long Text)', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'You hear a <strong>conversation or interview</strong> with 2+ speakers lasting about 4 minutes. You answer <strong>5 four-option multiple-choice questions</strong> (A–D). Played <strong>twice</strong>. At C2, the conversation contains complex arguments, implicit opinions, and nuanced agreement/disagreement.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Question Focus Areas', level: 2 } },
    { id: 'list-focus', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Opinion</strong>: What does Speaker A think about X? (often implied, not stated)' }, { text: '<strong>Attitude</strong>: How does Speaker B feel about the suggestion?' }, { text: '<strong>Function</strong>: Why does Speaker A mention Y? (to illustrate, to contrast, to warn)' }, { text: '<strong>Agreement</strong>: What do both speakers agree on?' }, { text: '<strong>Inference</strong>: What can be inferred from Speaker B\'s response?' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read questions and all four options before listening. Underline key differences between options.' }, { text: 'First listening: follow the conversation flow and note which option best matches.' }, { text: 'For opinion questions: listen for evaluative language ("I\'m not entirely convinced", "I\'d have to disagree").' }, { text: 'For function questions: ask "Why did they say that HERE in the conversation?"' }, { text: 'Second listening: confirm and check any uncertain answers.' }, { text: 'Don\'t change your answer unless you have clear evidence — first instincts are often right.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Four Options = More Distractors', text: 'With 4 options (not 3), there are more plausible distractors. Each wrong option may be mentioned in the recording but doesn\'t answer the specific question. Focus on what the question actually asks.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 3: 5 MCQs (A–D) on a conversation/interview, played twice. Tests opinion, attitude, function, agreement, inference. Read all options before listening. Focus on evaluative language and implied meaning. Four options = more distractors.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 3: 5 four-option MCQs on a conversation. Tests opinion, attitude, function, agreement, inference. Played twice. Focus on implied meaning.',
    cues: [
      { id: 'cue-1', blockId: 'list-focus', prompt: 'What five areas do CPE Listening Part 3 questions focus on?', answer: 'Opinion (what does speaker think), attitude (how do they feel), function (why mention something), agreement (what do both speakers agree on), inference (what can be inferred from responses).' },
    ]
  },
  evidence: [], mentions: []
};
