export const note_cpe_2_5_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE article writing at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Articles', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'Write an article (280–320 words) for a magazine, newspaper, or online publication. You are given a topic, a target audience, and sometimes a stimulus. The article should be <strong>engaging, well-organised, and written in an appropriate style</strong> for the publication.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Article Structure', level: 2 } },
    { id: 'list-struct', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Engaging title</strong>: Use a question, wordplay, or provocative statement. Not just the topic name.' }, { text: '<strong>Hook opening</strong>: Start with a question, anecdote, striking fact, or controversial claim to draw the reader in.' }, { text: '<strong>Body paragraphs</strong> (2–3): Each develops one aspect of the topic with examples and personal insight.' }, { text: '<strong>Closing paragraph</strong>: Summarise your view, make a recommendation, or leave the reader thinking.' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Style Features', level: 2 } },
    { id: 'list-style', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Direct address</strong>: "Have you ever wondered…?", "You might be surprised to learn…"' }, { text: '<strong>Rhetorical questions</strong>: "But is progress always a good thing?"' }, { text: '<strong>Vivid language</strong>: Metaphors, similes, descriptive detail — more literary than an essay.' }, { text: '<strong>Personal opinion</strong>: Unlike essays, articles welcome a clear personal voice.' }, { text: '<strong>Varied sentence length</strong>: Short sentences for impact. Longer ones for development.' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'C2 vs C1 Articles', text: 'At C2, articles should show <strong>wit, sophistication, and originality</strong>. Go beyond generic statements. Use unexpected angles, irony, or cultural references. The examiner should want to keep reading.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE articles: 280–320 words. Engaging title, hook opening, 2–3 body paragraphs, thought-provoking close. Style: direct address, rhetorical questions, vivid language, personal voice, varied sentences. Show wit and originality at C2.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE articles: engaging title + hook, direct address, rhetorical questions, vivid language, personal voice. Show wit and originality. 280–320 words.',
    cues: [
      { id: 'cue-1', blockId: 'list-style', prompt: 'What five style features should a CPE article have?', answer: '1. Direct address ("Have you ever…?"). 2. Rhetorical questions. 3. Vivid language (metaphors, description). 4. Personal opinion and voice. 5. Varied sentence length for impact.' },
    ]
  },
  evidence: [], mentions: []
};
