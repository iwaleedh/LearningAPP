export const note_cpe_3_8_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop skills for understanding gist, detail, and implied meaning in CPE Listening.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Understanding Gist, Detail and Implied Meaning', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Three Levels of Understanding', text: '<strong>Gist</strong>: the overall topic and main message.<br/><strong>Detail</strong>: specific facts, figures, names, sequences.<br/><strong>Implied meaning</strong>: what the speaker suggests without stating directly — through tone, hedging, irony, or context.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Listening for Gist', level: 2 } },
    { id: 'list-gist', type: 'list', data: { style: 'bullet', items: [{ text: 'Ask: <strong>What is the speaker talking about?</strong> and <strong>What is their main point?</strong>' }, { text: 'Don\'t get distracted by individual details — focus on the big picture.' }, { text: 'Pay attention to the <strong>opening and closing</strong> of the extract — speakers often state their main point here.' }, { text: 'Repetition signals importance: if a speaker returns to an idea, it\'s likely the main point.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Recognising Implied Meaning', level: 2 } },
    { id: 'table-implied', type: 'comparisonTable', data: { caption: 'How speakers imply meaning', headers: ['Signal', 'What It Suggests', 'Example'], rows: [['Rising intonation on a statement', 'Doubt or sarcasm', '"Oh, that\'s a great idea." (meaning: it\'s NOT)'], ['Hedging language', 'Reservations, politeness', '"I suppose it could work…" (speaker is doubtful)'], ['Understatement', 'The situation is MORE significant', '"It wasn\'t exactly a triumph." (it was a disaster)'], ['Emphasis through stress', 'Contrast or correction', '"I said we COULD, not we SHOULD."'], ['Pausing / hesitation', 'Uncertainty or reluctance', '"Well… I\'m not sure that\'s entirely fair."']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Practice Tip', text: 'Listen to <strong>podcasts, interviews, and panel discussions</strong> at natural speed. After each segment, summarise the gist in one sentence. Then ask: was the speaker enthusiastic, sceptical, neutral? This builds gist + implied meaning skills.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Three levels: gist (main point), detail (specific facts), implied meaning (unstated suggestions via tone, hedging, understatement). For gist, focus on openings/closings and repeated ideas. For implied meaning, listen for intonation, hedging, emphasis, and pauses.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Three listening levels: gist (overall message), detail (specific facts), implied meaning (tone, hedging, understatement, emphasis). Focus on openings/closings for gist.',
    cues: [
      { id: 'cue-1', blockId: 'table-implied', prompt: 'Name four ways speakers imply meaning without stating it directly.', answer: '1. Rising intonation on a statement (sarcasm/doubt). 2. Hedging language ("I suppose it could work" = doubtful). 3. Understatement ("It wasn\'t exactly a triumph" = it was bad). 4. Emphasis through stress ("I said we COULD, not SHOULD"). Also pausing/hesitation.' },
    ]
  },
  evidence: [], mentions: []
};
