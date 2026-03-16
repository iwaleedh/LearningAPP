export const note_cpe_3_7_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Listening Part 1: Multiple choice (short extracts) at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 1: Multiple Choice (Short Extracts)', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'You hear <strong>3 short extracts</strong>, each featuring 1–2 speakers. For each extract, you answer <strong>2 multiple-choice questions</strong> (A, B, or C). Total: 6 questions. You hear each extract <strong>twice</strong>. Extracts are from interviews, lectures, discussions, broadcasts.' } },
    { id: 'h-2', type: 'heading', data: { text: 'What Is Tested', level: 2 } },
    { id: 'list-tested', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Gist</strong>: What is the speaker\'s main point?' }, { text: '<strong>Detail</strong>: What specific fact does the speaker mention?' }, { text: '<strong>Attitude/opinion</strong>: How does the speaker feel about X?' }, { text: '<strong>Function</strong>: Why does the speaker say X? (to persuade, to justify, to clarify, to concede)' }, { text: '<strong>Agreement/disagreement</strong>: In two-speaker extracts, do they agree?' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read the questions and options carefully BEFORE the extract plays.' }, { text: 'First listening: focus on the overall message and eliminate clearly wrong options.' }, { text: 'Second listening: confirm your answer with specific evidence.' }, { text: 'Beware of distractors: speakers may mention all three options but only one answers the question.' }, { text: 'Listen for hedging and emphasis: "to be honest", "the real issue is"— these signal the speaker\'s true opinion.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'C2 Difficulty', text: 'At C2, speakers express opinions indirectly using irony, understatement, or sarcasm. "I suppose you could call it efficient" might mean the speaker thinks it\'s NOT efficient. Listen for tone, not just words.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Listening Part 1: 3 extracts, 2 MCQs each (6 total). Tests gist, detail, attitude, function, agreement. Read questions first. Listen for hedging, emphasis, and indirect language. Played twice.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 1: 3 short extracts, 2 MCQs each, played twice. Tests gist, detail, attitude, function. Listen for indirect opinions and hedging.',
    cues: [
      { id: 'cue-1', blockId: 'list-tested', prompt: 'What five things does CPE Listening Part 1 test?', answer: 'Gist (main point), detail (specific facts), attitude/opinion (how speaker feels), function (why speaker says something), agreement/disagreement (two-speaker extracts).' },
    ]
  },
  evidence: [], mentions: []
};
