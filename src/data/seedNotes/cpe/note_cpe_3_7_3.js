export const note_cpe_3_7_3 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE Listening Part 4: Multiple matching at C2 level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Part 4: Multiple Matching', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'You hear <strong>5 short monologues</strong> (about 30 seconds each) linked by a common theme. You complete <strong>two tasks</strong>: Task One matches each speaker to a statement from a list of 8. Task Two matches each speaker to a different statement from another list of 8. Total: 10 questions. Played <strong>twice</strong>.' } },
    { id: 'h-2', type: 'heading', data: { text: 'What Is Tested', level: 2 } },
    { id: 'list-tested', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Gist and main point</strong>: What is each speaker primarily talking about?' }, { text: '<strong>Attitude and feeling</strong>: How does each speaker feel about their topic?' }, { text: '<strong>Paraphrase recognition</strong>: Statements use different words from the speakers.' }, { text: '<strong>Distinguishing speakers</strong>: Speakers may share themes but express different specific points.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Strategy', level: 2 } },
    { id: 'list-strat', type: 'list', data: { style: 'numbered', items: [{ text: 'Read ALL 16 statements (8 + 8) before listening. This is essential.' }, { text: 'First listening: focus on Task One. For each speaker, eliminate obviously wrong statements and note your best match.' }, { text: 'Second listening: focus on Task Two. Also verify your Task One answers.' }, { text: 'Each statement is used ONCE only — if you\'ve assigned A to Speaker 1, it can\'t also be Speaker 3.' }, { text: 'Don\'t expect the speaker to use the same words as the statement — paraphrase is the norm.' }, { text: 'If unsure, narrow to 2–3 possibilities and listen for the distinguishing detail on second play.' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Split Focus', text: 'The hardest part is managing two tasks simultaneously. Don\'t try to answer both tasks on the first listening — focus on Task One first, then Task Two. You hear it twice for a reason.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE Part 4: 5 monologues, two matching tasks (8 options each), 10 questions total. Tests gist, attitude, paraphrase. Read all 16 statements first. First play = Task One, second play = Task Two + verification. Each statement used once.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE Part 4: 5 monologues, two tasks of 8 options each, 10 answers total. Focus on Task One during first listen, Task Two during second. Each statement used once.',
    cues: [
      { id: 'cue-1', blockId: 'list-strat', prompt: 'What is the best strategy for managing the two tasks in CPE Part 4?', answer: 'Read all 16 statements before listening. First listening: focus on Task One (match speakers to statements). Second listening: focus on Task Two + verify Task One. Each statement used once — eliminating used options helps narrow choices.' },
    ]
  },
  evidence: [], mentions: []
};
