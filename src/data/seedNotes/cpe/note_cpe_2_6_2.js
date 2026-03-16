export const note_cpe_2_6_2 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Master consistent register and purposeful tone in CPE writing.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Consistent Register and Purposeful Tone', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Register vs Tone', text: '<strong>Register</strong> = level of formality (formal, neutral, informal).<br/><strong>Tone</strong> = the writer\'s attitude (persuasive, critical, sympathetic, ironic, enthusiastic).<br/>At C2, you must control BOTH: choose the right register for the text type, and adopt a purposeful tone throughout.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Register by Text Type', level: 2 } },
    { id: 'table-reg', type: 'comparisonTable', data: { caption: 'Register guidelines', headers: ['Text Type', 'Register', 'Tone Options'], rows: [['Essay', 'Formal / academic', 'Analytical, argumentative, balanced'], ['Report', 'Formal / impersonal', 'Objective, measured, authoritative'], ['Article', 'Semi-formal / neutral', 'Engaging, opinionated, witty'], ['Review', 'Semi-formal / neutral', 'Evaluative, enthusiastic or critical'], ['Letter (formal)', 'Formal', 'Courteous, firm, persuasive'], ['Letter (semi-formal)', 'Semi-formal', 'Friendly, helpful, suggestive']] } },
    { id: 'h-3', type: 'heading', data: { text: 'Maintaining Consistency', level: 2 } },
    { id: 'list-consist', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Vocabulary level</strong>: If you use "commence" in paragraph 1, don\'t use "start" in paragraph 3. Stay at the same level.' }, { text: '<strong>Sentence structure</strong>: Formal texts use longer, more complex sentences. Informal texts allow fragments and exclamations.' }, { text: '<strong>Contractions</strong>: Formal = no contractions. Semi-formal = occasional OK. Informal = natural.' }, { text: '<strong>Personal pronouns</strong>: Essays avoid "I" (use impersonal). Articles and reviews welcome "I".' }, { text: '<strong>Check at the end</strong>: Re-read your text asking "Would this sentence appear in the same publication as the others?"' }] } },
    { id: 'callout-warn', type: 'callout', data: { style: 'warning', title: 'Register Shifts Kill Marks', text: 'The most common C2 writing error is <strong>accidental register shifts</strong>: starting formally but slipping into informal language when making a strong point. "This policy has proved to be detrimental and honestly it\'s just really bad." — the second half destroys the register.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Register = formality level; tone = writer\'s attitude. Match both to text type. Maintain consistency: same vocabulary level, sentence complexity, contraction usage, and pronoun choice throughout. Re-read to catch accidental register shifts.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Register (formality) and tone (attitude) must match text type and stay consistent. Essays: formal/analytical. Articles: semi-formal/engaging. Reports: formal/objective. Avoid register shifts.',
    cues: [
      { id: 'cue-1', blockId: 'table-reg', prompt: 'What register and tone are appropriate for a CPE essay vs an article?', answer: 'Essay: formal/academic register, analytical/argumentative/balanced tone. No contractions, impersonal. Article: semi-formal/neutral register, engaging/opinionated/witty tone. "I" is welcome, some contractions OK.' },
    ]
  },
  evidence: [], mentions: []
};
