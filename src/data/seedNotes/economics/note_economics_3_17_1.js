export const note_economics_3_17_1 = {
  pdfPath: '',
  blocks: [
    { id: 'obj-1', type: 'objective', data: { text: 'Explain the role of competition policy in controlling monopoly power and regulating mergers, and evaluate the effectiveness of the UK competition regime.' } },
    { id: 'h-1', type: 'heading', data: { text: 'Monopoly and Merger Controls', level: 2 } },
    { id: 'callout-key1', type: 'callout', data: { style: 'key', title: 'UK Competition Framework', text: 'The <strong>Competition and Markets Authority (CMA)</strong> is the UK\'s primary competition regulator (since 2014, replacing the OFT and Competition Commission).<br/>It investigates markets, mergers, and anti-competitive behaviour under the <strong>Competition Act 1998</strong> and <strong>Enterprise Act 2002</strong>.' } },
    { id: 'h-2', type: 'heading', data: { text: 'Monopoly Controls', level: 2 } },
    { id: 'list-mono', type: 'list', data: { style: 'bullet', items: [{ text: 'CMA can investigate firms with <strong>25%+ market share</strong> suspected of abusing a dominant position.' }, { text: '<strong>Abuse of dominance</strong>: predatory pricing, exclusive dealing, tying/bundling, margin squeezing, excessive pricing.' }, { text: '<strong>Remedies</strong>: price controls, forced divestiture, structural remedies (break up the firm), behavioural remedies (change practices).' }, { text: 'Sector-specific regulators extend the regime: <strong>Ofcom</strong> (telecoms/media), <strong>Ofgem</strong> (energy), <strong>Ofwat</strong> (water), <strong>ORR</strong> (rail), <strong>FCA</strong> (finance).' }] } },
    { id: 'h-2b', type: 'heading', data: { text: 'Merger Controls', level: 2 } },
    { id: 'list-merge', type: 'list', data: { style: 'bullet', items: [{ text: 'Mergers are investigated if combined market share exceeds <strong>25%</strong> OR UK turnover of merged entity exceeds £70m.' }, { text: '<strong>Phase 1</strong>: CMA initial review (40 working days) — cleared, remedies accepted, or referred to Phase 2.' }, { text: '<strong>Phase 2</strong>: in-depth investigation (24 weeks) — cleared, approved with conditions, or blocked.' }, { text: 'Test: whether the merger creates a <strong>Substantial Lessening of Competition (SLC)</strong>.' }, { text: 'High-profile blocked mergers (UK): Meta/Giphy (2022), Microsoft/Activision initially blocked (2023, later approved).' }] } },
    { id: 'callout-tip', type: 'callout', data: { style: 'tip', title: 'Evaluation', text: '<strong>For:</strong> prevents abuse of dominance, maintains competitive markets, protects consumers.<br/><strong>Against:</strong> blocking mergers may prevent efficiency gains (economies of scale, synergies); regulatory capture risk; international competitiveness lost if domestic mergers are blocked while foreign rivals are not.' } },
    { id: 'sum-1', type: 'summary', data: { text: 'CMA controls monopolies (25%+ market share threshold) and investigates mergers using the SLC test. Remedies: price controls, breakup, behavioural conditions. Sector regulators supplement the regime. Evaluation: trade-off between preventing market power and allowing efficiency gains.' } },
  ],
  recall: {
    enabled: true, ready: true,
    summaryText: 'CMA investigates monopolies (25%+ share) and mergers (SLC test). Remedies: forced divestiture, price controls, behavioural conditions. Sector regulators: Ofcom, Ofgem, Ofwat. Risk: blocking mergers may forgo efficiency gains.',
    cues: [
      { id: 'cue-1', blockId: 'callout-key1', prompt: 'What is the CMA and what is the SLC test used in merger reviews?', answer: 'The CMA (Competition and Markets Authority) is the UK\'s main competition regulator. In merger reviews, it applies the Substantial Lessening of Competition (SLC) test — if a merger would substantially reduce competition (e.g. raise prices, reduce innovation, create dominance), it can be blocked or approved only with conditions.' },
      { id: 'cue-2', blockId: 'list-mono', prompt: 'Give three examples of abuse of a dominant position.', answer: 'Predatory pricing (cutting prices below cost to drive out rivals then raising them), exclusive dealing (forcing suppliers to deal only with the dominant firm), tying/bundling (requiring consumers to buy additional products), excessive pricing (exploiting monopoly position), and margin squeezing (setting prices that prevent downstream competitors from being viable).' },
    ]
  },
  evidence: [], mentions: []
};
