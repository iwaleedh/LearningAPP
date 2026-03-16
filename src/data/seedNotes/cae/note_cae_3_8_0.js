export const note_cae_3_8_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Develop skills for understanding gist, detail, and speaker attitude in CAE Listening tasks.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Understanding Gist, Detail and Speaker Attitude', level: 2 } },
    { id: 'h-2', type: 'heading', data: { text: 'Listening for Gist', level: 3 } },
    { id: 'list-gist', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Gist</strong> = the overall message or main idea.' }, { text: 'Don\'t get distracted by individual words you don\'t know — focus on the big picture.' }, { text: 'Ask yourself: "What is the speaker mainly talking about?" after each extract.' }, { text: 'Gist questions appear in Parts 1, 3, and 4.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Listening for Detail', level: 3 } },
    { id: 'list-detail', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Detail</strong> = specific facts, names, numbers, dates, examples.' }, { text: 'Part 2 (sentence completion) tests detail most directly — exact words required.' }, { text: 'Predict what type of detail is needed before listening (a number? a place? a noun?).' }, { text: 'Take brief notes during listening — don\'t try to remember everything.' }] } },
    { id: 'h-4', type: 'heading', data: { text: 'Identifying Speaker Attitude', level: 3 } },
    { id: 'list-att', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Tone of voice</strong>: enthusiastic, sarcastic, hesitant, confident, disappointed?' }, { text: '<strong>Hedging language</strong>: "I suppose…", "I\'m not entirely sure…", "To some extent…" = uncertainty.' }, { text: '<strong>Emphasis</strong>: "I really enjoyed it" vs "I enjoyed it" — stress signals strength of feeling.' }, { text: '<strong>Qualification</strong>: "It was good, but…" — the word after "but" often reveals the true attitude.' }, { text: '<strong>Irony</strong>: "Oh, that was just wonderful" (said sarcastically) = the speaker means the opposite.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Practice Strategy', text: 'Listen to English podcasts and after each segment ask three questions: 1) What was the main topic? (gist) 2) What specific example did they give? (detail) 3) Did the speaker seem positive, negative, or neutral? (attitude). This builds all three skills simultaneously.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Three key listening skills: gist (main idea — don\'t fixate on unknown words), detail (specific facts — predict type needed), attitude (tone, hedging, emphasis, qualification, irony). Practice with podcasts using the three-question method.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Gist: overall message. Detail: specific facts. Attitude: tone, hedging, emphasis, qualification, irony. The word after "but" often reveals true attitude. Practice with 3 questions after each listening.',
    cues: [
      { id: 'cue-1', blockId: 'list-att', prompt: 'What five clues help you identify a speaker\'s attitude?', answer: 'Tone of voice (enthusiastic, hesitant, sarcastic). Hedging language (I suppose, I\'m not entirely sure). Emphasis (stress on key words signals strength of feeling). Qualification (good, BUT… — the BUT reveals true attitude). Irony (saying the opposite of what they mean with sarcastic tone).' },
    ]
  },
  evidence: [], mentions: []
};
