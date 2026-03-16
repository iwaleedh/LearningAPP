export const note_cpe_2_5_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master CPE letter and email writing at C2 Proficiency level.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Letters and Emails', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Task Format', text: 'Write a formal or semi-formal letter/email (280–320 words). You may be asked to complain, suggest, persuade, apply, or respond. The key is <strong>consistent register</strong> and <strong>clear purpose</strong> throughout.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Format and Conventions', level: 2 } },
    { id: 'table-format', type: 'comparisonTable', data: { caption: 'Letter/email conventions', headers: ['Element', 'Formal', 'Semi-formal'], rows: [['Opening', 'Dear Sir/Madam, Dear Mr/Ms X,', 'Dear [first name],'], ['Reason for writing', '"I am writing to express my concern…"', '"I\'m writing to let you know…"'], ['Closing', 'I look forward to hearing from you.', 'Hope to hear from you soon.'], ['Sign-off', 'Yours faithfully/sincerely', 'Best regards / Kind regards'], ['Contractions', 'Never use', 'Acceptable occasionally']] } },
    { id: 'h-3', type: 'heading', data: { text: 'C2-Level Language', level: 2 } },
    { id: 'list-lang', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Complaining</strong>: "I feel compelled to draw your attention to…", "I was exceedingly disappointed to discover that…"' }, { text: '<strong>Suggesting</strong>: "It would be advisable to…", "Might I propose that…", "One viable solution would be to…"' }, { text: '<strong>Persuading</strong>: "I would urge you to reconsider…", "The benefits of this approach are manifold."' }, { text: '<strong>Expressing dissatisfaction</strong>: "This falls far short of the standard one would reasonably expect."' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Register Consistency', text: 'The biggest letter-writing mistake is <strong>mixing registers</strong>. If you start formally ("I am writing to express my concern"), don\'t suddenly become informal ("It was really annoying"). Stay consistent throughout.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CPE letters/emails: 280–320 words. Match register to situation (formal/semi-formal). Use appropriate openings, closings, and sign-offs. C2 language for complaints, suggestions, persuasion. Above all: consistent register throughout.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CPE letters: formal/semi-formal, 280–320 words. Appropriate openings/closings, consistent register, C2-level complaint/suggestion/persuasion language.',
    cues: [
      { id: 'cue-1', blockId: 'table-format', prompt: 'What are the key differences between formal and semi-formal letters?', answer: 'Formal: "Dear Sir/Madam", no contractions, "Yours faithfully/sincerely", "I am writing to express…". Semi-formal: "Dear [first name]", occasional contractions OK, "Best regards", "I\'m writing to let you know…".' },
    ]
  },
  evidence: [], mentions: []
};
