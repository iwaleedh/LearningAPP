export const note_economics_3_17_5 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Evaluate the limits of government intervention in product markets, including government failure, regulatory capture, and unintended consequences.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Limits to Government Intervention', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'Government Failure Defined', text: '<strong>Government failure</strong> occurs when intervention creates a worse outcome than the original market failure it was intended to correct — or causes new distortions and inefficiencies.' } },
    { id: 'list-1', type: 'list', data: { style: 'bullet', items: [{ text: '<strong>Information failure</strong> — governments lack the detailed knowledge needed to set optimal taxes, subsidies or price controls. The optimal Pigouvian tax requires accurate measurement of the external cost — often impossible.' }, { text: '<strong>Regulatory capture</strong> — regulated firms use lobbying, revolving doors, and expertise control to influence regulators in their favour, undermining the purpose of regulation.' }, { text: '<strong>Unintended consequences</strong> — e.g. rent controls cause housing shortages and deterioration; agricultural subsidies cause overproduction and environmental damage.' }, { text: '<strong>Short-termism and political cycles</strong> — politicians prefer short-term popular interventions over optimal long-run policies. 4-5 year election cycles create incentives for fiscal giveaways.' }, { text: '<strong>Moral hazard</strong> — subsidies and bailouts reduce incentives for firms and individuals to manage risk responsibly (e.g. bank bailouts 2008).' }, { text: '<strong>Public choice theory (Tullock/Buchanan)</strong> — politicians and bureaucrats pursue self-interest (maximising votes, budgets); intervention reflects special interests, not public interest.' }] } },
    { id: 'callout-warning', type: 'callout', data: { style: 'warning', title: 'Trade-Off', text: 'Market failure does NOT automatically justify intervention. The relevant comparison is: <strong>imperfect markets vs imperfect governments</strong>. If government failure is likely to be worse than market failure, non-intervention may be preferable.' } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Exam Tip', text: 'Use the two-sided analysis: <strong>"Government intervention may be justified because [market failure], however government failure risks include [regulatory capture/information failure/unintended consequences] — so the net welfare effect is uncertain."</strong>' } },
    { id: 'sum-1', type: 'summary', data: { text: 'Limits to intervention: information gaps, regulatory capture, unintended consequences, short-termism, moral hazard, and public choice self-interest. Government failure may exceed market failure — intervention is not automatically beneficial.' } },
    {
      id: 'callout-tip-1',
      type: 'callout',
      data: {
        style: 'warning',
        title: "Common Mistake",
        text: "Government cannot always correct market failure better than markets self-correct. Government failure (rent-seeking, information asymmetry, unintended consequences) may make intervention worse than the original problem."
      }
    }
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'Government failure: intervention may be worse than market failure. Key causes: information gaps, regulatory capture, unintended consequences, short-termism, moral hazard, public choice theory.',
    cues: [
      { id: 'cue-1', blockId: 'list-1', prompt: 'Explain the concept of regulatory capture.', answer: 'Regulatory capture occurs when the regulated industry gains undue influence over its regulator — using lobbying, revolving-door employment of ex-regulators, information advantages, and political donations. The regulator ends up serving the industry\'s interests rather than the public interest, undermining the purpose of regulation.' },
      { id: 'cue-2', blockId: 'callout-key1', prompt: 'When does government failure occur?', answer: 'Government failure occurs when intervention leads to a net welfare loss — the distortions and costs created by the intervention exceed the benefits of correcting the original market failure. This can happen due to information failure (wrong tax rate), regulatory capture, unintended consequences (shortages from price caps), or moral hazard created by intervention.' },
    ]
  },
  evidence: [], mentions: []
};
