export const note_cae_2_5_0 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master the format and conventions of formal and informal letters and emails for CAE Writing Part 2.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Letters and Emails', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Overview', text: '<strong>Word count</strong>: 220–260 words.<br/><strong>Types</strong>: Formal letter/email (to an employer, editor, organisation) or informal/semi-formal letter/email (to a friend, colleague).<br/><strong>Key skill</strong>: Adjusting your register to match the target reader.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Formal Letter/Email Structure', level: 2 } },
    { id: 'list-formal', type: 'list', data: { style: 'numbered', items: [{ text: '<strong>Opening</strong>: "Dear Sir/Madam," (unknown) or "Dear Mr/Ms Smith," (known).' }, { text: '<strong>Opening paragraph</strong>: State purpose clearly — "I am writing to enquire about / to express my concern regarding / in response to…"' }, { text: '<strong>Body paragraphs</strong>: Develop points logically. One topic per paragraph.' }, { text: '<strong>Closing paragraph</strong>: Summarise and state desired action — "I would be grateful if you could… / I look forward to hearing from you."' }, { text: '<strong>Sign-off</strong>: "Yours faithfully," (Dear Sir/Madam) or "Yours sincerely," (Dear Mr/Ms X).' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Informal Letter/Email Features', level: 2 } },
    { id: 'list-informal', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Opening</strong>: "Hi/Dear [first name],"' }, { text: '<strong>Contractions</strong>: "I\'m, you\'ll, isn\'t" — acceptable and expected.' }, { text: '<strong>Phrasal verbs</strong>: "come across, find out, get back to".' }, { text: '<strong>Idioms and colloquial phrases</strong>: used sparingly for natural tone.' }, { text: '<strong>Sign-off</strong>: "Best wishes, / Take care, / See you soon,"' }] } },
    { id: 'table-reg', type: 'comparisonTable', data: { caption: 'Register comparison', headers: ['Feature', 'Formal', 'Informal'], rows: [['Opening', 'Dear Sir/Madam', 'Hi Tom!'], ['Purpose', 'I am writing to inform you that…', 'Just wanted to let you know…'], ['Request', 'I would be grateful if you could…', 'Could you…? / Would you mind…?'], ['Apology', 'I regret to inform you that…', 'Sorry about…'], ['Closing', 'Yours faithfully/sincerely', 'Best wishes / Take care']] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Always identify the <strong>target reader</strong> before you start writing. The task rubric tells you who you are writing to — this determines your register. Mixing registers (formal opening, informal body) loses marks.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Letters/emails: 220–260 words. Match register to target reader. Formal: Dear Sir/Madam, no contractions, Yours faithfully. Informal: Hi + name, contractions OK, Best wishes. Always state purpose clearly in the opening paragraph.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Letters/emails: match register to reader. Formal: Dear Sir/Madam + Yours faithfully (unknown) or Dear Mr X + Yours sincerely (known). Informal: Hi + first name + Best wishes. 220–260 words. State purpose in opening.',
    cues: [
      { id: 'cue-1', blockId: 'table-reg', prompt: 'What determines whether you use "Yours faithfully" or "Yours sincerely"?', answer: 'Yours faithfully: when you start with Dear Sir/Madam (you don\'t know the person\'s name). Yours sincerely: when you start with Dear Mr/Ms + surname (you know their name). This is a convention, not a rule about relationship closeness.' },
    ]
  },
  evidence: [], mentions: []
};
