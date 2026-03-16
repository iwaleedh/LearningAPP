export const note_cae_2_4_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Learn how to evaluate, support and develop opinions effectively in CAE essay writing.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Evaluating and Supporting Opinions', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Beyond Simple Agreement', text: 'At C1 level, you cannot simply say "I agree" or "I disagree". You must <strong>evaluate</strong> the strength of an argument, consider different perspectives, and support your position with reasons, examples, or evidence.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Techniques for Developing Arguments', level: 2 } },
    { id: 'list-tech', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Give reasons</strong>: "This is important because / due to the fact that / on the grounds that…"' }, { text: '<strong>Provide examples</strong>: "For instance / To illustrate this / A case in point is…"' }, { text: '<strong>Cite consequences</strong>: "This would lead to / result in / bring about…"' }, { text: '<strong>Acknowledge counter-arguments</strong>: "While some may argue that… / Admittedly… / It could be objected that…"' }, { text: '<strong>Qualify your opinion</strong>: "To a certain extent / On the whole / By and large…"' }] } },
    { id: 'h-3', type: 'heading', data: { text: 'Useful Phrases for Evaluating', level: 2 } },
    { id: 'table-phrases', type: 'comparisonTable', data: { caption: 'Evaluation language', headers: ['Purpose', 'Useful Phrases'], rows: [['Strong agreement', 'There is no doubt that… / It is widely acknowledged that… / I firmly believe…'], ['Partial agreement', 'While there is some truth in… / To a certain extent… / I would largely agree, although…'], ['Disagreement', 'I would take issue with the view that… / This argument fails to consider… / It is questionable whether…'], ['Weighing two sides', 'On balance… / Having considered both sides… / The advantages outweigh the disadvantages…']] } },
    { id: 'callout-worked', type: 'callout', data: { style: 'worked', title: 'Example Paragraph', text: '<strong>Topic</strong>: Is technology more important than qualified teachers?<br/><br/>"While it is true that technology can provide students with access to vast resources, it would be misguided to suggest that it could replace qualified teachers. The reason for this is that learning is not simply about absorbing information — it requires guidance, motivation, and the ability to ask questions. A case in point is the experience of many students during lockdown, where despite having access to online materials, academic results declined. On balance, therefore, technology is a valuable supplement to, rather than a substitute for, skilled educators."' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Examiners reward <strong>nuanced</strong> opinions. Saying "I partly agree because…" with reasons scores higher than a blunt "I totally agree." Show you can see both sides before committing to your position.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Support opinions with reasons, examples, and consequences. Acknowledge counter-arguments before stating your view. Use evaluation language (To a certain extent, On balance, Having considered both sides). Show nuance — examiners reward balanced, developed arguments.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Develop opinions with reasons, examples, consequences. Acknowledge counter-arguments. Use evaluation phrases (On balance, To a certain extent). Show nuance — partly/largely agree scores higher than blunt agreement.',
    cues: [
      { id: 'cue-1', blockId: 'list-tech', prompt: 'What five techniques can you use to develop and support an argument in an essay?', answer: 'Give reasons (due to the fact that), provide examples (a case in point is), cite consequences (this would lead to), acknowledge counter-arguments (while some may argue), qualify your opinion (to a certain extent, on the whole). These show C1-level argumentation skills.' },
    ]
  },
  evidence: [], mentions: []
};
